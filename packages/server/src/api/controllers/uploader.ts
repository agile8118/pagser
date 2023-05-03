/**
 * This file includes all the routes that deal with file uploading
 */

import { Request, Response, NextFunction } from "express";
import cloudinary from "cloudinary";
import fs from "node:fs/promises";
import path from "node:path";
import AWS from "aws-sdk";
import busboy from "busboy";
import { fileTypeFromBuffer } from "file-type";
// const { fileTypeFromBuffer } = require("file-type");
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
cloudinary.v2.config({
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
  // const cropData = JSON.parse(req.body.cropData);

  const bb = busboy({ headers: req.headers });
  let size = 0;
  let fileName = "";
  let hasCheckedFileType = false;
  let hasFinished = false;
  // let cropData;

  const MAX_FILE_SIZE = 8 * 1000 * 1000; // file size in bytes
  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  req.pipe(bb);

  bb.on("file", async (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    // console.log(
    //   `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
    //   filename,
    //   encoding,
    //   mimeType
    // );

    // Generate a random file name
    fileName =
      Date.now() +
      "-" +
      crypto.randomBytes(2).toString("hex") +
      "." +
      filename.split(".").pop();
    const fileHandle = await fs.open(
      path.resolve() + "/storage/" + fileName,
      "w"
    );
    const writable = fileHandle.createWriteStream();

    file
      .on("data", (data) => {
        // Check file size
        size += data.length;
        if (size > MAX_FILE_SIZE) {
          throw new Error(
            `Maximum file size is: ${MAX_FILE_SIZE / (1000 * 1000)}MB`
          );
        }

        // Checking file type
        (async () => {
          if (!hasCheckedFileType) {
            const fileType = await fileTypeFromBuffer(data);
            console.log(fileType);

            if (
              (fileType && ALLOWED_FILE_TYPES.indexOf(fileType.mime) === -1) ||
              ALLOWED_FILE_TYPES.indexOf(mimeType) === -1
            ) {
              throw new Error(
                `Only these file types are allowed: ${ALLOWED_FILE_TYPES}`
              );
            }

            hasCheckedFileType = true;
            if (hasFinished) bb.emit("done");
          }
        })();

        writable.write(data);
        // console.log(`File [${name}] got ${data.length} bytes`);
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });

  bb.on("field", (name, val, info) => {
    // console.log(`Field [${name}]: value: %j`, val);
    // if (name === "cropData") {
    //   cropData = JSON.parse(val);
    // }
  });

  bb.on("finish", () => {
    hasFinished = true;
    if (hasCheckedFileType) res.send({ message: "Done uploading!" });
  });

  bb.on("done", () => {
    res.send({ message: "Done uploading!" });
  });

  bb.on("error", (err) => {
    // fs.unlink(path.resolve() + "./storage/" + fileName, (err) => {});
    req.unpipe(bb);
    bb.removeAllListeners();
    res.status(400).send({ message: err });
  });

  bb.on("close", () => {
    // console.log("Done parsing form!");
    // res.send({ message: "Done uploading!" });
  });
};

const uploader = {
  uploadPagePhoto,
};

export default uploader;
