/**
 * All file upload routes. Images are buffered, processed with sharp, and streamed to S3.
 * Attach files are streamed directly to S3 without buffering.
 * No multipart parsing — clients send raw binary bodies.
 */

import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import sharp from "sharp";
import { Transform, PassThrough } from "node:stream";
import {
  S3Client,
  DeleteObjectCommand,
  CreateBucketCommand,
  HeadBucketCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import crypto from "crypto";
import { DB } from "../../database/index.js";
import { IPage, IAttachFile } from "../../database/types.js";
import { AWS_REGION, S3_BUCKET } from "../../config/keys.js";
import { UploaderAPI } from "@pagser/common";

const s3Client = new S3Client({ region: AWS_REGION });

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

    req.on("data", (chunk: Uint8Array) => {
      size += chunk.length;
      if (size > maxBytes) {
        req.destroy();
        return reject({
          status: 400,
          message: `Maximum file size is ${maxBytes / (1024 * 1024)} MB.`,
        });
      }
      if (!checkedMagic) {
        if (!isAllowedImageType(chunk)) {
          req.destroy();
          return reject({
            status: 400,
            message: "Only JPEG and PNG files are allowed.",
          });
        }
        checkedMagic = true;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function deleteFromS3(key: string) {
  await s3Client.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key }));
}

async function uploadBufferToS3(
  key: string,
  body: Buffer,
  contentType = "image/jpeg",
) {
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: S3_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    },
  });
  await upload.done();
  return `https://${S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${key}`;
}

// Upload a page thumbnail — creates a full-size (1200px wide) and cropped (400x225) variant
const uploadPagePhoto = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = 8 * 1024 * 1024;

  const x = Math.round(Number(req.query.x));
  const y = Math.round(Number(req.query.y));
  const width = Math.round(Number(req.query.width));
  const height = Math.round(Number(req.query.height));

  const page = await DB.find<IPage>(
    "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
    [pageId],
  );

  const buffer = await readImageBody(req, MAX_FILE_SIZE);

  const [originalBuf, croppedBuf] = await Promise.all([
    sharp(buffer)
      .resize(1200, null, { withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer(),
    sharp(buffer)
      .extract({ left: x, top: y, width, height })
      .resize(400, 225)
      .jpeg({ quality: 85 })
      .toBuffer(),
  ]);

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

  const body: UploaderAPI.UploadPagePhotoResponse = { message: "image-uploaded", image: originalUrl };
  res.json(body);
};

// Upload an attach file for a page — streamed directly to S3, no transformation
const uploadPageAttachFile = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
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

  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: S3_BUCKET }));
  } catch {
    await s3Client.send(new CreateBucketCommand({ Bucket: S3_BUCKET }));
  }

  const key = `${pageId}/${filename}`;
  const pass = new PassThrough();

  const upload = new Upload({
    client: s3Client,
    params: { Bucket: S3_BUCKET, Key: key, Body: pass },
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
                `Maximum file size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.`,
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
        message: `Maximum file size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.`,
      };
    }
    throw e;
  }

  const url = `https://${S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${key}`;

  await DB.insert<IAttachFile>("attach_files", {
    page_id: Number(pageId),
    key,
    url,
    name: filename,
  });

  const body: UploaderAPI.UploadAttachFileResponse = { message: "file uploaded" };
  res.json(body);
};

const uploader = {
  uploadPagePhoto,
  uploadPageAttachFile,
};

export default uploader;
