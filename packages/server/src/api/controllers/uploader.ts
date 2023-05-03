/**
 * This file includes all the routes that deal with file uploading.
 *
 * All routes use Busboy to upload the files USING STREAMS. We do not save any files
 * whatsoever to the server hard disk.
 */

import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs/promises";
import path from "node:path";
import AWS from "aws-sdk";
import busboy from "busboy";
import { fileTypeFromBuffer } from "file-type";
import crypto from "crypto";
import sendEmail from "../services/mailgun.js";
import { tokenForUser, handleServerError, cleanHTML } from "../../lib/util.js";
import { DB } from "../../database/index.js";
import {
  IPage,
  IPageType,
  IPageStatus,
  PAGE_STATUS,
  PAGE_TYPE,
  IAttachFile,
  ITag,
} from "../../database/types.js";
import keys from "../../config/keys.js";

// Configurations for AWS S3
const BUCKET_NAME = "pagser";
const IAM_USER_KEY = keys.accessKeyId;
const IAM_USER_SECRET = keys.secretAccessKey;

let S3 = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
});

// Configure cloudinary
cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Upload a page thumbnail for a page, either published or draft
const uploadPagePhoto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pageId = req.params.id;
  const type = req.query.type; // To see if the page is draft

  const bb = busboy({ headers: req.headers });
  let size = 0;
  let hasCheckedFileType = false;
  let hasFinished = false;
  let cropData;
  let cloudinaryRImgStream;
  let cloudinaryCroppedImgStream;

  const MAX_FILE_SIZE = 1 * 1000 * 1000; // file size in bytes
  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  req.pipe(bb);

  // We're going to get this before the file event, because client is sending this first
  bb.on("field", (name, val, info) => {
    // Grab the crop data
    if (name === "cropData") {
      cropData = JSON.parse(val);

      // Write stream for cloudinary, regular image (no cropping)
      cloudinaryRImgStream = cloudinary.uploader.upload_stream(
        {
          folder: "images/pages-test/",
          transformation: [{ width: 1200, crop: "scale" }],
        },
        async (error, { secure_url, public_id }) => {
          if (error) next(error);

          // save the image that was just uploaded to the database
          console.log("Regular: ");
          console.log(secure_url, public_id);
        }
      );

      // Write stream for cloudinary, cropped image\
      cloudinaryCroppedImgStream = cloudinary.uploader.upload_stream(
        {
          folder: "images/pages-test/",
          transformation: [
            {
              width: Math.round(Number(cropData.width)),
              height: Math.round(Number(cropData.height)),
              x: Math.round(Number(cropData.x)),
              y: Math.round(Number(cropData.y)),
              crop: "crop",
            },
            { width: 400, height: 225, crop: "scale" },
          ],
        },
        async (error, { secure_url, public_id }) => {
          if (error) next(error);

          // save the image that was just uploaded to the database
          console.log("Cropped: ");
          console.log(secure_url, public_id);
        }
      );
    }
  });

  // Receiving files
  bb.on("file", (name, file, info) => {
    const { mimeType } = info;

    cloudinaryRImgStream.on("drain", () => {
      file.resume();
    });

    cloudinaryCroppedImgStream.on("drain", () => {
      file.resume();
    });

    file.on("data", (data) => {
      // Check file size
      size += data.length;
      if (size > MAX_FILE_SIZE) {
        file.destroy();
        return bb.emit(
          "error",
          new Error(`Maximum file size is: ${MAX_FILE_SIZE / (1000 * 1000)}MB`)
        );
      }

      // Checking file type
      (async () => {
        if (!hasCheckedFileType) {
          const fileType = await fileTypeFromBuffer(data);

          if (
            (fileType && ALLOWED_FILE_TYPES.indexOf(fileType.mime) === -1) ||
            ALLOWED_FILE_TYPES.indexOf(mimeType) === -1
          ) {
            file.destroy();
            return bb.emit(
              "error",
              new Error(
                `Only these file types are allowed: ${ALLOWED_FILE_TYPES}`
              )
            );
          }

          hasCheckedFileType = true;
          if (hasFinished) bb.end();
        }
      })();

      if (!cloudinaryRImgStream.write(data)) {
        file.pause();
      }

      if (!cloudinaryCroppedImgStream.write(data)) {
        file.pause();
      }
    });

    file.on("close", () => {
      cloudinaryRImgStream.end();
      cloudinaryCroppedImgStream.end();
    });
  });

  bb.on("finish", () => {
    hasFinished = true;
    if (hasCheckedFileType) res.send({ message: "Done uploading!" });
  });

  // Handle all errors relating to file upload
  bb.on("error", (err: Error) => {
    req.unpipe(bb);
    bb.removeAllListeners();
    cloudinaryCroppedImgStream.destroy();
    cloudinaryRImgStream.destroy();
    return res.status(400).send({ message: err.message });
  });
};

const uploader = {
  uploadPagePhoto,
};

export default uploader;
