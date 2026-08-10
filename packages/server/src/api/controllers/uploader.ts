/**
 * All file upload routes. Images are buffered, processed with sharp, and streamed to S3.
 * Attach files are streamed directly to S3 without buffering.
 * No multipart parsing — clients send raw binary bodies.
 */

import type { CpeakRequest as Request, CpeakResponse as Response } from "cpeak";
import sharp from "sharp";
import { Transform, PassThrough } from "node:stream";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import crypto from "crypto";
import { DB } from "../../database/index.js";
import {
  IPage,
  IAttachFile,
  IUser,
  ICollection,
} from "../../database/types.js";
import {
  storageClient as s3Client,
  storageBucket,
  getPublicUrl,
} from "../services/storage.js";
import {
  UploaderAPI,
  ProfileAPI,
  CollectionAPI,
  FILE_SIZE_LIMITS,
} from "@pagser/common";

sharp.cache(false);
sharp.concurrency(1);

function isAllowedImageType(chunk: Uint8Array): boolean {
  const isJpeg = chunk[0] === 0xff && chunk[1] === 0xd8 && chunk[2] === 0xff;
  const isPng =
    chunk[0] === 0x89 &&
    chunk[1] === 0x50 &&
    chunk[2] === 0x4e &&
    chunk[3] === 0x47;
  return isJpeg || isPng;
}

// Buffers req body, validates size and magic bytes, returns raw image buffer
function readImageBody(req: Request, maxBytes: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    let size = 0;
    let checkedMagic = false;
    let done = false;

    const fail = (err: { status: number; message: string }) => {
      if (done) return;
      done = true;
      req.resume(); // drain so the socket stays alive and the error response can be sent
      reject(err);
    };

    req.on("data", (chunk: Uint8Array) => {
      if (done) return;
      size += chunk.length;
      if (size > maxBytes) {
        return fail({
          status: 400,
          message: `Maximum file size is ${maxBytes / 1_000_000} MB.`,
        });
      }
      if (!checkedMagic) {
        if (!isAllowedImageType(chunk)) {
          return fail({
            status: 400,
            message: "Only JPEG and PNG files are allowed.",
          });
        }
        checkedMagic = true;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!done) resolve(Buffer.concat(chunks));
    });
    req.on("error", (err) => fail({ status: 500, message: err.message }));
  });
}

async function deleteFromS3(key: string) {
  await s3Client.send(
    new DeleteObjectCommand({ Bucket: storageBucket, Key: key }),
  );
}

async function uploadBufferToS3(
  key: string,
  body: Buffer,
  contentType = "image/jpeg",
) {
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: storageBucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    },
  });
  await upload.done();
  return getPublicUrl(key);
}

// Upload a page thumbnail — creates a full-size (1200px wide) and cropped (400x225) variant
const uploadPagePhoto = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = FILE_SIZE_LIMITS.PAGE_PHOTO;

  const x = Math.round(Number(req.query.x));
  const y = Math.round(Number(req.query.y));
  const width = Math.round(Number(req.query.width));
  const height = Math.round(Number(req.query.height));

  const page = await DB.find<IPage>(
    "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
    [pageId],
  );

  const buffer = await readImageBody(req, MAX_FILE_SIZE);

  // 50 megapixels should be enough for any reasonable photo, prevents DoS with huge images
  const originalBuf = await sharp(buffer, { limitInputPixels: 50_000_000 })
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toBuffer();

  const croppedBuf = await sharp(buffer, { limitInputPixels: 50_000_000 })
    .extract({ left: x, top: y, width, height })
    .resize(400, 225)
    .jpeg({ quality: 85 })
    .toBuffer();

  const originalKey = `images/pages/${crypto.randomUUID()}.jpg`;
  const croppedKey = `images/pages/${crypto.randomUUID()}.jpg`;

  const [originalUrl, croppedUrl] = await Promise.all([
    uploadBufferToS3(originalKey, originalBuf),
    uploadBufferToS3(croppedKey, croppedBuf),
  ]);

  await DB.update<IPage>(
    "pages",
    {
      photo_url: originalUrl,
      photo_key: originalKey,
      cropped_photo_url: croppedUrl,
      cropped_photo_key: croppedKey,
    },
    "id = $5",
    [pageId],
  );

  // Delete old photos from S3 after DB is updated
  await Promise.all([
    page?.photo_key
      ? deleteFromS3(page.photo_key).catch(() => {})
      : Promise.resolve(),
    page?.cropped_photo_key
      ? deleteFromS3(page.cropped_photo_key).catch(() => {})
      : Promise.resolve(),
  ]);

  const body: UploaderAPI.UploadPagePhotoResponse = {
    message: "image-uploaded",
    image: originalUrl,
  };
  res.json(body);
};

// Upload an attach file for a page — streamed directly to S3, no transformation
const uploadPageAttachFile = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = FILE_SIZE_LIMITS.ATTACH_FILE;
  const filename = decodeURIComponent(String(req.query.filename || ""));

  if (!filename || filename.length > 100) {
    throw {
      status: 400,
      message: "File name is missing or exceeds 100 characters.",
    };
  }

  const currentAttachFiles = await DB.findMany<IAttachFile>(
    `SELECT * FROM attach_files WHERE page_id = $1`,
    [pageId],
  );

  if (currentAttachFiles.length >= 5) {
    throw {
      status: 400,
      message: "You can only upload up to 5 files for each page.",
    };
  }

  if (currentAttachFiles.some((f) => f.name === filename)) {
    throw {
      status: 400,
      message: "You have already uploaded a file with this name for the page.",
    };
  }

  const key = `attach-files/${pageId}/${filename}`;
  const pass = new PassThrough();

  const upload = new Upload({
    client: s3Client,
    params: { Bucket: storageBucket, Key: key, Body: pass },
  });

  let bytesRead = 0;
  let failed = false;

  req
    .pipe(
      new Transform({
        transform(chunk, _enc, callback) {
          bytesRead += chunk.length;
          if (bytesRead > MAX_FILE_SIZE) {
            failed = true;
            pass.destroy();
            return callback(
              new Error(
                `Maximum file size is ${MAX_FILE_SIZE / 1_000_000} MB.`,
              ),
            );
          }
          callback(null, chunk);
        },
      }),
    )
    .pipe(pass);

  try {
    await upload.done();
  } catch (e) {
    if (failed) {
      throw {
        status: 400,
        message: `Maximum file size is ${MAX_FILE_SIZE / 1_000_000} MB.`,
      };
    }
    throw e;
  }

  const url = getPublicUrl(key);

  await DB.insert<IAttachFile>("attach_files", {
    page_id: Number(pageId),
    key,
    url,
    name: filename,
  });

  const body: UploaderAPI.UploadAttachFileResponse = {
    message: "file uploaded",
  };
  res.json(body);
};

// Upload an inline body image, resizes to max 1200px wide and stores in S3
const uploadBodyImage = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = FILE_SIZE_LIMITS.BODY_IMAGE;

  const page = await DB.find<IPage>("SELECT user_id FROM pages WHERE id = $1", [
    pageId,
  ]);

  if (!page || page.user_id !== req.user.id) {
    throw { status: 403, message: "You don't have permission." };
  }

  const buffer = await readImageBody(req, MAX_FILE_SIZE);

  const resized = await sharp(buffer, { limitInputPixels: 50_000_000 })
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toBuffer();

  const key = `images/body/${pageId}/${crypto.randomUUID()}.jpg`;
  const url = await uploadBufferToS3(key, resized);

  res.json({ url });
};

// Upload user profile photo — cropped to 400x400
const uploadUserPhoto = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const MAX_FILE_SIZE = FILE_SIZE_LIMITS.USER_PHOTO;

  const user = await DB.find<IUser>(
    `SELECT photo_key FROM users WHERE id = $1`,
    [userId],
  );
  const prevKey = user?.photo_key;

  const x = Math.round(Number(req.query.x));
  const y = Math.round(Number(req.query.y));
  const width = Math.round(Number(req.query.width));
  const height = Math.round(Number(req.query.height));

  const buffer = await readImageBody(req, MAX_FILE_SIZE);

  const processed = await sharp(buffer, { limitInputPixels: 50_000_000 })
    .extract({ left: x, top: y, width, height })
    .resize(400, 400)
    .jpeg({ quality: 85 })
    .toBuffer();

  const key = `images/users/${crypto.randomUUID()}.jpg`;
  await uploadBufferToS3(key, processed);
  const url = getPublicUrl(key);

  await DB.update<IUser>(
    "users",
    { photo_url: url, photo_key: key },
    "id = $3",
    [userId],
  );

  if (prevKey) await deleteFromS3(prevKey).catch(() => {});

  const body: ProfileAPI.UploadProfilePhotoResponse = {
    message: "image-uploaded",
    image: url,
  };
  res.json(body);
};

// Upload collection cover photo — resized to 800px wide
const uploadCollectionPhoto = async (req: Request, res: Response) => {
  const collectionId = req.params.id;
  const userId = req.user.id;
  const MAX_FILE_SIZE = FILE_SIZE_LIMITS.COLLECTION_PHOTO;

  const collection = await DB.find<ICollection>(
    `SELECT user_id, photo_key FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const prevKey = collection.photo_key;

  const x = Math.round(Number(req.query.x));
  const y = Math.round(Number(req.query.y));
  const width = Math.round(Number(req.query.width));
  const height = Math.round(Number(req.query.height));

  const buffer = await readImageBody(req, MAX_FILE_SIZE);

  const processed = await sharp(buffer, { limitInputPixels: 50_000_000 })
    .extract({ left: x, top: y, width, height })
    .resize(800)
    .jpeg({ quality: 85 })
    .toBuffer();

  const key = `images/collections/${crypto.randomUUID()}.jpg`;
  await uploadBufferToS3(key, processed);
  const url = getPublicUrl(key);

  await DB.update<ICollection>(
    "collections",
    { photo_url: url, photo_key: key },
    "id = $3",
    [collectionId],
  );

  if (prevKey) await deleteFromS3(prevKey).catch(() => {});

  const body: CollectionAPI.UploadPhotoResponse = {
    message: "image-uploaded",
    image: url,
  };
  res.json(body);
};

const uploader = {
  uploadPagePhoto,
  uploadPageAttachFile,
  uploadBodyImage,
  uploadUserPhoto,
  uploadCollectionPhoto,
};

export default uploader;
