import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import sharp from "sharp";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import crypto from "crypto";
import { DB } from "../../database/index.js";
import { IUser } from "../../database/types.js";
import { AWS_REGION, S3_BUCKET } from "../../config/keys.js";
import { ProfileAPI } from "@pagser/common";

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

// Fetch user's profile data
const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const user = await DB.find<IUser>(
    `SELECT id, name, username, email, biography, headline,
            links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
            photo_key, photo_url, verified, created_at
     FROM users WHERE id = $1`,
    [userId],
  );

  if (!user) throw { status: 404, message: "User not found" };

  const body: ProfileAPI.GetProfileResponse = {
    user: {
      ...user,
      links: {
        website: user.links_website || "",
        facebook: user.links_facebook || "",
        youtube: user.links_youtube || "",
        twitter: user.links_twitter || "",
        linkedin: user.links_linkedin || "",
      },
    },
  };
  res.json(body);
};

// Update user's profile data
const updateUserData = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { name, headline, biography, links } = req.body;

  await DB.update(
    `users`,
    {
      name,
      headline,
      biography,
      links_website: links?.website,
      links_facebook: links?.facebook,
      links_youtube: links?.youtube,
      links_twitter: links?.twitter,
      links_linkedin: links?.linkedin,
    },
    `id = $9`,
    [userId],
  );

  const user = await DB.find<IUser>(
    `SELECT id, name, username, email, biography, headline,
            links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
            photo_key, photo_url, verified, created_at
     FROM users WHERE id = $1`,
    [userId],
  );

  const body: ProfileAPI.UpdateProfileResponse = {
    user: {
      ...user,
      links: {
        website: user?.links_website || "",
        facebook: user?.links_facebook || "",
        youtube: user?.links_youtube || "",
        twitter: user?.links_twitter || "",
        linkedin: user?.links_linkedin || "",
      },
    },
  };
  res.json(body);
};

// Upload user's profile photo
const uploadUserImage = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const MAX_FILE_SIZE = 8 * 1024 * 1024;

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

  const processed = await sharp(buffer)
    .extract({ left: x, top: y, width, height })
    .resize(400, 400)
    .jpeg({ quality: 85 })
    .toBuffer();

  const key = `images/users/${crypto.randomUUID()}.jpg`;
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: S3_BUCKET,
      Key: key,
      Body: processed,
      ContentType: "image/jpeg",
    },
  });
  await upload.done();
  const url = `https://${S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${key}`;

  await DB.update<IUser>(
    "users",
    { photo_url: url, photo_key: key },
    "id = $3",
    [userId],
  );

  if (prevKey) {
    await s3Client
      .send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: prevKey }))
      .catch(() => {});
  }

  const body: ProfileAPI.UploadProfilePhotoResponse = { message: "image-uploaded", image: url };
  res.json(body);
};

const controller = {
  fetchUserData,
  updateUserData,
  uploadUserImage,
};

export default controller;
