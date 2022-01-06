const { Page, DraftPage } = require("../../models/page");
const { Trash } = require("../../models/trash");
const User = require("../../models/user");
const Comment = require("../../models/comment");
const Subscription = require("../../models/subscription");
const ReadLater = require("../../models/readLater");
const History = require("../../models/history");
const Rating = require("../../models/rating");
const util = require("../../lib/util");
const log = require("../../lib/log");
const crypto = require("crypto");
const multer = require("multer");
const readChunk = require("read-chunk");
const fileType = require("file-type");
const cloudinary = require("cloudinary");
const AWS = require("aws-sdk");
const fs = require("fs");
const jwt = require("jwt-simple");
const path = require("path");
const keys = require("../../config/keys");

// Configurations for AWS S3
const BUCKET_NAME = "pagser-attach-files-2341";
const IAM_USER_KEY = keys.accessKeyId;
const IAM_USER_SECRET = keys.secretAccessKey;

let S3 = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/pages");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "-" +
        crypto.randomBytes(2).toString("hex") +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

var upload = multer({ storage: storage }).single("img");

var fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var uploadFile = multer({ storage: fileStorage }).single("file");

cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Fetch the data of a public page
exports.fetchPublicPageData = async (req, res) => {
  req.session.viewStartTrack = Date.now();

  try {
    var decoded = jwt.decode(req.headers.authorization, keys.jwtSecret);
    var userId = decoded.sub;
  } catch (e) {
    var userId = false;
  }

  try {
    const page = await Page.findOne({ url: req.params.url })
      .select("_id likes dislikes author photo url attachFiles contents.title")
      .populate({
        path: "author",
        select: "name username biography photo",
        model: "User",
      });

    const subs = await Subscription.find(
      { author: page.author.id },
      "subscriber"
    );

    const likes = await Rating.find({ page: page._id, liked: true });
    const dislikes = await Rating.find({ page: page._id, liked: false });

    const pageData = {
      id: page._id,
      author: { ...page.author._doc, subscribersNum: subs.length },
      likes: likes.length,
      dislikes: dislikes.length,
      url: page.url,
      contents: {
        title: page.contents.title,
      },
      attachFiles: page.attachFiles,
      photo: page.photo || "",
    };

    let viewer = {};
    if (userId) {
      viewer.status = "authenticated";
      if (page.author.equals(userId)) viewer = { status: "owner" };
      else {
        const rl = await ReadLater.findOne({ user: userId, page: page.id });
        const sub = await Subscription.findOne({
          subscriber: userId,
          author: page.author.id,
        });

        if (rl) viewer.readLater = true;
        if (sub) viewer.subscribed = true;
      }

      const result = await History.findOne({ user: userId, page: page.id });
      if (result) {
        // Update the date visited
        await History.findOneAndUpdate(
          {
            user: userId,
            page: page.id,
          },
          { date: Date.now() }
        );
      } else {
        // Add the page to the user's reading history list
        await History.create({ user: userId, page: page.id });
      }
    } else viewer = { status: "spectator" };

    res.send({ page: pageData, viewer });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch the data of a private page
exports.fetchPrivatePageData = async (req, res) => {
  req.session.viewStartTrack = Date.now();

  try {
    const decoded = jwt.decode(req.headers.authorization, keys.jwtSecret);
    var userId = decoded.sub;
  } catch (e) {
    var userId = false;
  }

  try {
    const author = await User.findOne({ username: req.params.username }, "_id");

    if (!author) return res.status(404).send();

    const page = await Page.findOne({
      url: req.params.url,
      author: author.id,
      type: "private",
    })
      .select(
        "url dislikes likes date comments photo author configurations contents attachFiles _id"
      )
      .populate({
        path: "author",
        select: "name username biography photo",
        model: "User",
      });

    if (!page) return res.status(404).send();

    const subs = await Subscription.find(
      { author: page.author.id },
      "subscriber"
    );

    const likes = await Rating.find({ page: page._id, liked: true });
    const dislikes = await Rating.find({ page: page._id, liked: false });

    const pageData = {
      id: page._id,
      contents: page.contents,
      configurations: page.configurations,
      date: util.timeSince(page.date),
      likes: likes.length,
      dislikes: dislikes.length,
      author: { ...page.author._doc, subscribersNum: subs.length },
      url: page.url,
      attachFiles: page.attachFiles,
      photo: page.photo || "",
    };

    let viewer = {};
    if (userId) {
      viewer.status = "authenticated";
      if (page.author.equals(userId)) viewer = { status: "owner" };
      else {
        const rl = await ReadLater.findOne({ user: userId, page: page.id });
        const sub = await Subscription.findOne({
          subscriber: userId,
          author: page.author.id,
        });

        if (rl) viewer.readLater = true;
        if (sub) viewer.subscribed = true;
      }

      const result = await History.findOne({ user: userId, page: page.id });
      if (result) {
        // Update the date visited
        await History.findOneAndUpdate(
          {
            user: userId,
            page: page.id,
          },
          { date: Date.now() }
        );
      } else {
        // Add the page to the user's reading history list
        await History.create({ user: userId, page: page.id });
      }
    } else viewer = { status: "spectator" };

    res.send({ page: pageData, viewer });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};

exports.fetchDraftPageData = (req, res) => {
  const pageId = req.params.id;
  const stage = req.params.stage;
  const userId = req.user.id;

  switch (stage) {
    case "initial-step":
      DraftPage.findById(pageId, "type", (err, page) => {
        if (err || !page) {
          return res.send({ type: null });
        }
        res.send({ type: page.type });
      });
      break;
    case "page-contents":
      DraftPage.findById(pageId, "_id contents type", (err, page) => {
        if (err) return res.status(500).send("error");
        if (page) {
          res.send({ page });
        } else {
          res.status(404).send();
        }
      });
      break;

    case "page-thumbnail":
      DraftPage.findById(pageId, "_id photo", (err, page) => {
        if (err) return res.status(500).send("error");
        if (page) {
          res.send({ page });
        } else {
          res.status(404).send();
        }
      });
      break;
    case "final-step":
      DraftPage.findById(pageId)
        .select("configurations url password tags type author")
        .populate({
          path: "author",
          select: "username",
          model: "User",
        })
        .exec((err, page) => {
          if (err) return res.status(500).send("error");
          Page.find(
            { author: userId, status: "published", type: "private" },
            "url",
            (err, results) => {
              if (err) return res.status(500).send("error");
              var urls = results.map((result) => {
                return result.url;
              });
              res.send({ page, urls });
            }
          );
        });

      break;
    default:
      res.status(400).send();
  }
};

// Update draft page data
exports.updateDraftPageData = async (req, res) => {
  const pageId = req.params.id;
  const stage = req.params.stage;
  const page = req.body.page;

  switch (stage) {
    case "initial-step":
      let obj = {
        type: page.type,
      };
      obj.author = req.user.id;

      DraftPage.findById(pageId, (err, result) => {
        if (err || !result) {
          const newPage = new DraftPage(obj);
          newPage.save(function (err, newPage) {
            if (err) return res.status(500).send("error");
            res.status(201).send({ id: newPage.id, message: "created" });
          });
        } else {
          result.type = page.type;
          result.updatedAt = new Date();
          result.save((err) => {
            if (err) return res.status(500).send("error");
            res.send({ id: result.id, message: "updated" });
          });
        }
      });

      break;
    case "page-contents":
      try {
        const result = await DraftPage.findOneAndUpdate(
          { _id: pageId },
          {
            updatedAt: new Date(),
            contents: {
              title: page.contents.title,
              briefDes: page.contents.briefDes,
              body: util.cleanHTML(page.contents.body),
              targets: page.contents.targets || "",
            },
          },
          { new: true }
        );
        res.status(200).send(result.id);
      } catch (e) {
        log(e);
        return res.status(500).send({ message: "Internal server error" });
      }
      break;
    case "final-step":
      try {
        let obj = {
          updatedAt: new Date(),
          tags: page.tags,
          url: page.url || "",
          configurations: {
            comments: page.configurations.comments,
            rating: page.configurations.rating,
            anonymously: page.configurations.anonymously,
            links: page.configurations.links,
          },
        };

        // We don't want to update the tags if the type is private, likewise we don't
        // want to update the url if the type is public
        if (page.type === "public") delete obj.url;
        if (page.type === "private") {
          delete obj.tags;
          delete obj.configurations.links;
        }

        await DraftPage.findOneAndUpdate({ _id: pageId }, obj, { new: true });
        res.status(201).send({ message: "updated" });
      } catch (e) {
        log(e);
        return res.status(500).send({ message: "Internal server error" });
      }
      break;
    default:
      res.status(404).send();
  }
};

// Create and publish a page from a draft page
exports.create = async (req, res) => {
  try {
    const draftPageId = req.params.id;
    const userId = req.user.id;
    let newPageId;
    let resObj;

    const draftPage = await DraftPage.findOne({
      _id: draftPageId,
      author: userId,
    });

    if (
      !util.validatePage(draftPage, "type") ||
      !util.validatePage(draftPage, "contents") ||
      !util.validatePage(draftPage, "configurations") ||
      !util.validatePage(draftPage, "tags") ||
      !util.validatePage(draftPage, "url")
    )
      return res.status(400).send({ error: "error with contents" });

    if (draftPage.type === "public") {
      const page = new Page({
        type: draftPage.type,
        url: util.convertToUrl(draftPage.contents.title),
        author: draftPage.author,
        configurations: draftPage.configurations,
        tags: draftPage.tags,
        photo: draftPage.photo,
        cropedPhoto: draftPage.cropedPhoto,
        attachFiles: draftPage.attachFiles,
        contents: draftPage.contents,
      });

      const result = await Page.findOne(
        { url: page.url, type: "public" },
        "url"
      );
      if (result)
        page.url = page.url + "_" + crypto.randomBytes(1).toString("hex");

      await page.save();
      newPageId = page.id;
      resObj = page.url;
    }

    if (draftPage.type === "private") {
      const page = new Page({
        type: draftPage.type,
        url: draftPage.url,
        author: draftPage.author,
        configurations: {
          anonymously: draftPage.configurations.anonymously,
          rating: draftPage.configurations.rating,
          comments: draftPage.configurations.comments,
        },
        contents: draftPage.contents,
        photo: draftPage.photo,
        cropedPhoto: draftPage.cropedPhoto,
        attachFiles: draftPage.attachFiles,
      });

      await page.save();
      newPageId = page.id;
      const user = await User.findById(draftPage.author, "username");
      resObj = { url: page.url, username: user.username };
    }

    // Copy attach files the from draft page to the published page
    console.log(draftPage.attachFiles);
    draftPage.attachFiles.map((file) => {
      console.log(file);

      S3.copyObject(
        {
          Bucket: BUCKET_NAME,
          CopySource: `${BUCKET_NAME}/${draftPage.id}/${file.name}`,
          Key: `${newPageId}/${file.name}`,
        },
        (err, data) => {
          S3.deleteObject(
            {
              Bucket: BUCKET_NAME,
              Key: `${draftPage.id}/${file.name}`,
            },
            (err, data) => {}
          );
        }
      );
    });

    // Delete the draft file
    DraftPage.findByIdAndRemove(draftPageId, (err, result) => {});

    return res.status(200).send(resObj);
  } catch (e) {
    log(e);
    return res.status(500).send({ message: "Internal server error" });
  }
};

// Fetch data in edit page section
exports.fetchEditPageData = (req, res) => {
  const pageUrl = req.params.url;
  const username = req.params.username || null;
  const userId = req.user.id;

  if (username) {
    Page.findOne(
      { url: pageUrl, author: userId, type: "private" },
      "contents configurations url type _id",
      (err, page) => {
        if (err) return res.status(500).send("error");
        Page.find(
          { author: userId, status: "published", type: "private" },
          "url",
          (err, results) => {
            if (err) return res.status(500).send("error");
            var urls = results.map((result) => {
              if (result.url !== page.url) {
                return result.url;
              }
            });
            res.send({ page, urls });
          }
        );
      }
    );
  } else {
    Page.findOne(
      { url: pageUrl, type: "public" },
      "contents configurations tags type _id",
      (err, page) => {
        res.send({ page, urls: null });
      }
    );
  }
};

// Update a page
exports.updatePage = (req, res) => {
  const page = req.body.page;
  const pageId = req.params.id;

  if (
    util.validatePage(page, "type") &&
    util.validatePage(page, "contents") &&
    util.validatePage(page, "configurations") &&
    util.validatePage(page, "tags") &&
    util.validatePage(page, "url")
  ) {
    page.contents.body = util.cleanHTML(page.contents.body);

    if (page.type === "public") {
      Page.findByIdAndUpdate(
        pageId,
        {
          url: util.convertToUrl(page.contents.title),
          contents: page.contents,
          configurations: page.configurations,
          tags: page.tags,
        },
        { new: true },
        (err, result) => {
          if (err) return res.status(500).send("error");

          res.send({ url: result.url, type: result.type });
        }
      );
    } else if (page.type === "private") {
      Page.findByIdAndUpdate(
        pageId,
        {
          contents: page.contents,
          configurations: {
            anonymously: page.configurations.anonymously,
            rating: page.configurations.rating,
            comments: page.configurations.comments,
          },
          url: page.url,
        },
        { new: true },
        (err, page) => {
          if (err) return res.status(500).send("error");

          res.send({ url: page.url, type: page.type });
        }
      );
    }
  } else {
    return res.status(400).send({ error: "error with contents" });
  }
};

// Upload or update a photo to be set as page featured image
exports.uploadPagePhoto = (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) res.status(500).send({ message: "Internal server error." });

      if (!req.file)
        return res.status(400).send({ message: "No file uploaded." });

      // const imageFolderPath = "./public/images/pages/";
      const filePath = req.file ? req.file.path : null;
      const pageId = req.params.id;
      const type = req.query.type; // To see if the page is draft
      const cropData = JSON.parse(req.body.cropData);

      // Check file type
      const buffer = readChunk.sync(filePath, 0, 4100);
      if (!fileType(buffer))
        return res.status(400).send({ message: "Bad request" });
      if (
        !(
          fileType(buffer).mime !== "image/png" ||
          fileType(buffer).mime !== "image/jpg" ||
          fileType(buffer).mime !== "image/jpeg"
        )
      ) {
        fs.unlink(filePath, () => {});
        return res.status(400).send({ message: "Bad request" });
      }

      // Check file size
      if (req.file.size > 8000000) {
        fs.unlink(filePath, (err) => {});
        return res
          .status(400)
          .send({ message: "Maximum image file size is 8MB" });
      }

      let page;
      if (type === "draft") {
        page = await DraftPage.findById(pageId);
      } else {
        page = await Page.findById(pageId);
      }

      // If the page already has a photo
      if (page.photo) {
        // Remove the photo
        cloudinary.v2.uploader.destroy(page.photo.public_id);
        cloudinary.v2.uploader.destroy(page.cropedPhoto.public_id);
      }

      // Upload and resize the image (cloudinary)
      cloudinary.v2.uploader.upload(
        filePath,
        {
          folder: "images/pages/",
          transformation: [{ width: 1200, crop: "scale" }],
        },
        async (error, { secure_url, public_id }) => {
          if (error)
            return res.status(500).send({ message: "Internal server error." });

          // Update the photo data on database
          if (type === "draft") {
            await DraftPage.findByIdAndUpdate(req.params.id, {
              photo: { secure_url, public_id },
            });
          } else {
            await Page.findByIdAndUpdate(req.params.id, {
              photo: { secure_url, public_id },
            });
          }

          res.send({
            message: "image-uploaded",
            image: secure_url,
          });
        }
      );

      // Upload, crop and resize the image - smaller version (cloudinary)
      cloudinary.v2.uploader.upload(
        filePath,
        {
          folder: "images/pages/croped",
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
          // Delete the uploaded file from the temp storage
          fs.unlink(filePath, () => {});

          if (error)
            return res.status(500).send({ message: "Internal server error." });

          // Update the photo data on database
          if (type === "draft") {
            await DraftPage.findByIdAndUpdate(req.params.id, {
              cropedPhoto: { secure_url, public_id },
            });
          } else {
            await Page.findByIdAndUpdate(req.params.id, {
              cropedPhoto: { secure_url, public_id },
            });
          }
        }
      );
    } catch (e) {
      if (req.file && req.file.path) fs.unlink(req.file.path, () => {});
      log(e);
      res.status(500).send({ message: "Internal server error." });
    }
  });
};

// Remove page photo from a published or draft page
exports.removePagePhoto = async (req, res) => {
  try {
    const pageId = req.params.id;
    const type = req.query.type;

    let page;
    if (type === "draft") {
      page = await DraftPage.findById(pageId, "photo cropedPhoto");
    } else {
      page = await Page.findById(pageId, "photo cropedPhoto");
    }

    cloudinary.v2.uploader.destroy(page.photo.public_id);
    cloudinary.v2.uploader.destroy(page.cropedPhoto.public_id);
    page.photo = { public_id: "", secure_url: "" };
    page.cropedPhoto = { public_id: "", secure_url: "" };
    await page.save();
    res.send({ message: "photo removed" });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};

// Send an attach file to user for download
exports.getAttachFile = (req, res) => {
  try {
    const pageId = req.params.id;
    const fileName = req.params.name;

    const key = `${pageId}/${fileName}`;

    res.attachment(key);
    const fileStream = S3.getObject({
      Bucket: BUCKET_NAME,
      Key: key,
    }).createReadStream();
    fileStream.pipe(res);
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Get all attach files
exports.getAttachFiles = async (req, res) => {
  try {
    const pageId = req.params.id;
    const type = req.query.type;

    let page;
    if (type === "draft") {
      page = await DraftPage.findById(pageId, "attachFiles");
    } else {
      page = await Page.findById(pageId, "attachFiles");
    }

    res.send({ attachFiles: page.attachFiles });
  } catch (e) {
    log(e);
    if (err) res.status(500).send({ message: "Internal server error." });
  }
};

// Add an attach file for a page
exports.addAttachFile = (req, res) => {
  uploadFile(req, res, async (err) => {
    try {
      if (err) res.status(500).send({ message: "Internal server error." });

      const pageId = req.params.id;
      const type = req.query.type;
      const filePath = req.file ? req.file.path : null;
      const fileName = req.file.originalname;

      // Validate file size
      if (req.file.size > 10000000) {
        fs.unlink(filePath, () => {});
        return res.status(400).send({ error: "Maximum file size is 10MB." });
      }

      // Validate file name length
      if (fileName.length > 100) {
        fs.unlink(filePath, () => {});
        return res
          .status(400)
          .send({ error: "File name should be less that 100 characters." });
      }

      // Grab either a published or draft page from database
      let page;
      if (type === "draft") {
        page = await DraftPage.findById(pageId, "attachFiles");
      } else {
        page = await Page.findById(pageId, "attachFiles");
      }

      // Validate if there are less than attach files for the page
      if (page.attachFiles.length >= 5) {
        fs.unlink(filePath, () => {});
        return res.status(400).send({
          error: "You have already uploaded 5 attach files for this page.",
        });
      }

      // Validate if the file name is not duplicated
      const uploadedFileInDatabase = page.attachFiles.filter((item) => {
        return item.name === fileName;
      });
      if (uploadedFileInDatabase.length > 0) {
        fs.unlink(filePath, () => {});
        return res.status(400).send({
          error:
            "You have already uploaded a file with this name for the page.",
        });
      }

      const fileStream = fs.createReadStream(filePath);
      const key = `${pageId}/${fileName}`;
      S3.createBucket(() => {
        const params = {
          Bucket: BUCKET_NAME,
          Key: key,
          Body: fileStream,
        };
        S3.upload(params, async (err, data) => {
          fs.unlink(filePath, () => {});

          const obj = {
            $push: { attachFiles: { name: fileName } },
          };
          if (type === "draft") {
            await DraftPage.findByIdAndUpdate(pageId, obj, { new: true });
          } else {
            await Page.findByIdAndUpdate(pageId, obj, { new: true });
          }

          res.send({ message: "file uploaded" });
        });
      });
    } catch (e) {
      log(e);
      res.status(500).send({ message: "Internal server error." });
    }
  });
};

// Delete an attach file
exports.deleteAttachFile = async (req, res) => {
  try {
    const pageId = req.params.id;
    const fileId = req.params.fileId;
    const type = req.query.type;

    const obj = { $pull: { attachFiles: { _id: fileId } } };
    let page;
    if (type === "draft") {
      page = await DraftPage.findByIdAndUpdate(pageId, obj, { new: false });
    } else {
      page = await Page.findByIdAndUpdate(pageId, obj, { new: false });
    }

    const selectedFile = page.attachFiles.filter((file) => {
      return file._id.equals(fileId);
    });

    S3.deleteObject(
      {
        Bucket: BUCKET_NAME,
        Key: `${pageId}/${selectedFile[0].name}`,
      },
      (err, data) => {
        res.send({ message: "file deleted" });
      }
    );
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Move a page to trash
exports.delete = (req, res) => {
  const pageId = req.params.id;

  Page.findByIdAndRemove(pageId, (err, page) => {
    if (err || !page) return res.status(400).send("error");

    cloudinary.v2.uploader.destroy(page.photo.public_id);
    cloudinary.v2.uploader.destroy(page.cropedPhoto.public_id);

    var trashPageObj = {
      type: page.type,
      contents: {
        title: page.contents.title,
        briefDes: page.contents.briefDes,
        targets: page.contents.targets,
        body: page.contents.body,
      },
      tags: page.tags,
      configurations: {
        comments: page.configurations.comments,
        rating: page.configurations.rating,
        anonymously: page.configurations.anonymously,
        links: page.configurations.links,
      },
      author: page.author,
      url: page.url,
      kind: "page",
    };
    var trashPage = new Trash(trashPageObj);
    Comment.deleteMany({ page: page.id }, (err) => {
      if (err) return res.status(500).send("error");
    });
    trashPage.save((err) => {
      if (err) return res.status(500).send("error");
      res.send("ok");
    });
  });
};
