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
import { pipeline, PassThrough, Transform } from "node:stream";
import AWS from "aws-sdk";
import busboy from "busboy";
import { fileTypeFromBuffer, fileTypeFromStream } from "file-type";
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
const IAM_USER_KEY = keys.AWSAccessKey;
const IAM_USER_SECRET = keys.AWSSecretAccessKey;

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
  const MAX_FILE_SIZE = 8 * 1024 * 1024; // file size in bytes
  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  const bb = busboy({
    headers: req.headers,
  });

  let size = 0;
  let hasCheckedFileType = false;
  let cropData;
  let cloudinaryRImgStream;
  let cloudinaryCroppedImgStream;

  // Grab the existing photo keys from database
  const page = await DB.find<IPage>(
    "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
    [pageId]
  );

  const perv_photo_key = page.photo_key;
  const perv_cropped_photo_key = page.cropped_photo_key;

  // We're going to get this before the file event, because client is sending this first
  bb.on("field", (name, val, info) => {
    // Grab the crop data
    if (name === "cropData") {
      cropData = JSON.parse(val);

      // Write stream for cloudinary, regular image (no cropping)
      cloudinaryRImgStream = cloudinary.uploader.upload_stream(
        {
          timeout: 60000,
          folder: "images/pages/",
          transformation: [{ width: 1200, crop: "scale" }],
        },
        async (error, response) => {
          if (error) return next(error);

          // save the image that was just uploaded to the database
          if (response) {
            try {
              // Update the database with the new photo key and url
              await DB.update<IPage>(
                "pages",
                {
                  photo_url: response.secure_url,
                  photo_key: response.public_id,
                },
                "id = $3",
                [pageId]
              );

              res.send({
                message: "image-uploaded",
                image: response.secure_url,
              });
            } catch (e) {
              next(e);
            }
          }
        }
      );

      // Write stream for cloudinary, cropped image
      cloudinaryCroppedImgStream = cloudinary.uploader.upload_stream(
        {
          timeout: 60000,
          folder: "images/pages/",
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
        async (error, response) => {
          if (error) return next(error);

          // save the image that was just uploaded to the database
          if (response) {
            try {
              await DB.update<IPage>(
                "pages",
                {
                  cropped_photo_url: response.secure_url,
                  cropped_photo_key: response.public_id,
                },
                "id = $3",
                [pageId]
              );
            } catch (e) {
              next(e);
            }
          }
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

    file.on("data", async (data) => {
      // Check file size
      size += data.length;
      if (size > MAX_FILE_SIZE) {
        file.destroy();
        cloudinaryRImgStream.destroy();
        cloudinaryCroppedImgStream.destroy();

        return bb.emit(
          "error",
          new Error(`Maximum file size is: ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
        );
      }

      // Checking file type, only for the first buffer
      if (!hasCheckedFileType) {
        const fileType = await fileTypeFromBuffer(data);

        if (
          (fileType && ALLOWED_FILE_TYPES.indexOf(fileType.mime) === -1) ||
          ALLOWED_FILE_TYPES.indexOf(mimeType) === -1
        ) {
          file.destroy();
          cloudinaryRImgStream.destroy();
          cloudinaryCroppedImgStream.destroy();

          return bb.emit(
            "error",
            new Error(
              `Only these file types are allowed: ${ALLOWED_FILE_TYPES}`
            )
          );
        }

        hasCheckedFileType = true;
      }

      if (!cloudinaryRImgStream.write(data)) {
        file.pause();
      }

      if (!cloudinaryCroppedImgStream.write(data)) {
        file.pause();
      }
    });

    file.on("close", async () => {
      // Remove the previous photos from cloudinary
      try {
        perv_photo_key && (await cloudinary.uploader.destroy(perv_photo_key));
        perv_cropped_photo_key &&
          (await cloudinary.uploader.destroy(perv_cropped_photo_key));
      } catch (e) {
        next(e);
      }

      cloudinaryRImgStream.end();
      cloudinaryCroppedImgStream.end();
    });
  });

  // Handle all errors relating to file upload
  bb.on("error", (err: Error) => {
    req.unpipe(bb);
    bb.removeAllListeners();
    if (!cloudinaryRImgStream.destroyed) cloudinaryRImgStream.destroy();
    if (!cloudinaryCroppedImgStream.destroyed)
      cloudinaryCroppedImgStream.destroy();
    return next({ customError: err.message, status: 400 });
  });

  req.pipe(bb);
};

// Upload an attach file for a page
const uploadPageAttachFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pageId = req.params.id;
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // file size in bytes

  const bb = busboy({
    headers: req.headers,
  });

  bb.on("file", async (name, file, info) => {
    const { filename, mimeType } = info;

    // Validate file name length
    if (filename.length > 100) {
      file.destroy();
      return bb.emit(
        "error",
        new Error(`File name should be less that 100 characters.`)
      );
    }

    // Grab the list of existing attach files for the page
    const currentAttachFiles = await DB.findMany<IAttachFile[]>(
      `SELECT * from attach_files WHERE page_id = $1`,
      [pageId]
    );

    // Validate if there are less than 5 attach files for the page
    if (currentAttachFiles.length >= 5) {
      file.destroy();
      return bb.emit(
        "error",
        new Error(`You can only upload up to 5 files for each page.`)
      );
    }

    // Validate if the file name is not duplicated
    const uploadedFileInDatabase = currentAttachFiles.filter((item) => {
      return item.name === filename;
    });
    if (uploadedFileInDatabase.length > 0) {
      file.destroy();
      return bb.emit(
        "error",
        new Error(
          `You have already uploaded a file with this name for the page.`
        )
      );
    }

    function upload(S3) {
      let pass = new PassThrough();

      // Upload the file to S3
      const key = `${pageId}/${filename}`;
      S3.createBucket(() => {
        const params = {
          Bucket: BUCKET_NAME,
          Key: key,
          Body: pass,
        };
        S3.upload(params, async (err: Error, data) => {
          if (err) {
            if (err.message === "FILE_SIZE_EXCEEDED") {
              return next({
                customError: `Maximum file size is: ${
                  MAX_FILE_SIZE / (1024 * 1024)
                }MB`,
                status: 400,
              });
            } else {
              return next(err);
            }
          }

          // If upload was successful, update the database
          try {
            await DB.insert<IAttachFile>("attach_files", {
              page_id: Number(pageId),
              key: data.Key,
              url: data.Location,
              name: filename,
            });

            res.send({ message: "file uploaded" });
          } catch (e) {
            next(e);
          }
        });
      });

      return pass;
    }

    if (!file.destroyed) {
      let bytesRead = 0;
      pipeline(
        file,
        // A transform stream that checks the file size
        new Transform({
          transform(chunk, encoding, callback) {
            bytesRead += chunk.length;
            if (bytesRead > MAX_FILE_SIZE) {
              // return an error and close the pipeline
              callback(new Error("FILE_SIZE_EXCEEDED"));
            } else {
              callback(null, chunk);
            }
          },
        }),
        upload(S3),
        (err) => {
          if (err) {
            upload(S3).destroy();
          }
        }
      );
    }
  });

  // Handle all errors relating to file upload
  bb.on("error", (err: Error) => {
    req.unpipe(bb);
    // bb.removeAllListeners();
    return next({ customError: err.message, status: 400 });
  });

  req.pipe(bb);
};

const uploader = {
  uploadPagePhoto,
  uploadPageAttachFile,
};

export default uploader;
