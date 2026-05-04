import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import busboy from "busboy";
import { fileTypeFromBuffer } from "file-type";
import { DB } from "../../database/index.js";
import { IUser } from "../../database/types.js";
import keys from "../../config/keys.js";

cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Fetch user's profile data
const fetchUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;

    const user = await DB.find<IUser>(
      `SELECT id, name, username, email, biography, headline,
              links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
              photo_key, photo_url, verified, created_at
       FROM users WHERE id = $1`,
      [userId]
    );

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({
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
    });
  } catch (e) {
    next(e);
  }
};

// Update user's profile data
const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      [userId]
    );

    // Re-fetch and return updated data
    const user = await DB.find<IUser>(
      `SELECT id, name, username, email, biography, headline,
              links_website, links_facebook, links_youtube, links_twitter, links_linkedin,
              photo_key, photo_url, verified, created_at
       FROM users WHERE id = $1`,
      [userId]
    );

    res.send({
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
    });
  } catch (e) {
    next(e);
  }
};

// Upload user's profile photo
const uploadUserImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const MAX_FILE_SIZE = 8 * 1024 * 1024;
  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  const user = await DB.find<IUser>(
    `SELECT photo_key FROM users WHERE id = $1`,
    [userId]
  );
  const prevPhotoKey = user?.photo_key;

  const bb = busboy({ headers: req.headers });

  let size = 0;
  let hasCheckedFileType = false;

  const cloudinaryStream = cloudinary.uploader.upload_stream(
    {
      timeout: 60000,
      folder: "images/users/",
      transformation: [{ width: 400, crop: "scale" }],
    },
    async (error, response) => {
      if (error) return next(error);
      if (response) {
        try {
          await DB.update<IUser>(
            "users",
            { photo_url: response.secure_url, photo_key: response.public_id },
            "id = $3",
            [userId]
          );
          res.send({ message: "image-uploaded", image: response.secure_url });
        } catch (e) {
          next(e);
        }
      }
    }
  );

  bb.on("file", (name, file, info) => {
    const { mimeType } = info;

    cloudinaryStream.on("drain", () => {
      file.resume();
    });

    file.on("data", async (data) => {
      size += data.length;
      if (size > MAX_FILE_SIZE) {
        file.destroy();
        cloudinaryStream.destroy();
        return bb.emit(
          "error",
          new Error(`Maximum file size is: ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
        );
      }

      if (!hasCheckedFileType) {
        const fileType = await fileTypeFromBuffer(data);
        if (
          (fileType && !ALLOWED_FILE_TYPES.includes(fileType.mime)) ||
          !ALLOWED_FILE_TYPES.includes(mimeType)
        ) {
          file.destroy();
          cloudinaryStream.destroy();
          return bb.emit(
            "error",
            new Error(`Only these file types are allowed: ${ALLOWED_FILE_TYPES}`)
          );
        }
        hasCheckedFileType = true;
      }

      if (!cloudinaryStream.write(data)) {
        file.pause();
      }
    });

    file.on("close", async () => {
      try {
        if (prevPhotoKey) await cloudinary.uploader.destroy(prevPhotoKey);
      } catch (_) {}
      cloudinaryStream.end();
    });
  });

  bb.on("error", (err: Error) => {
    req.unpipe(bb);
    bb.removeAllListeners();
    if (!cloudinaryStream.destroyed) cloudinaryStream.destroy();
    return next({ customError: err.message, status: 400 });
  });

  req.pipe(bb);
};

const controller = {
  fetchUserData,
  updateUserData,
  uploadUserImage,
};

export default controller;
