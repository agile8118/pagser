const { Page, DraftPage } = require("../../models/page");
const { Trash } = require("../../models/trash");
const User = require("../../models/user");
const Comment = require("../../models/comment");
const Subscription = require("../../models/subscription");
const ReadLater = require("../../models/readLater");
const History = require("../../models/history");
const Rating = require("../../models/rating");
const util = require("../../lib/util");
const crypto = require("crypto");
const multer = require("multer");
const readChunk = require("read-chunk");
const fileType = require("file-type");
const Jimp = require("jimp");
const cloudinary = require("cloudinary");
const AWS = require("aws-sdk");
const fs = require("fs");
const jwt = require("jwt-simple");
const path = require("path");
const keys = require("../../config/keys");

// Configurations for AWS S3
const BUCKET_NAME = "pagher-attach-files-2341";
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
      var obj = {
        type: page.type,
      };
      obj.author = req.user.id;

      DraftPage.findById(pageId, (err, result) => {
        if (err || !result) {
          var newPage = new DraftPage(obj);
          newPage.save(function (err, newPage) {
            if (err) return res.status(500).send("error");
            res.status(201).send({ id: newPage.id, message: "created" });
          });
        } else {
          result.type = page.type;
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
        return res.status(500).send({ message: "Internal server error" });
      }
      break;
    case "final-step":
      DraftPage.findById(pageId, (err, result) => {
        result.configurations = {
          comments: page.configurations.comments,
          rating: page.configurations.rating,
          anonymously: page.configurations.anonymously,
          links: page.configurations.links,
        };

        result.url = page.url || "";
        result.tags = page.tags;

        result.save(function (err, page) {
          if (!err) {
            res.status(201).send("updated");
          }
        });
      });
      break;
    default:
      res.status(404).send();
  }
};

exports.create = function (req, res) {
  const pageId = req.params.id;
  const userId = req.user.id;

  DraftPage.findOne({ _id: pageId, author: userId }, (err, result) => {
    if (err || !result) return res.status(400).send();

    if (
      util.validatePage(result, "type") &&
      util.validatePage(result, "contents") &&
      util.validatePage(result, "configurations") &&
      util.validatePage(result, "tags") &&
      util.validatePage(result, "url")
    ) {
      switch (result.type) {
        case "public":
          var page = new Page({
            type: result.type,
            url: util.convertToUrl(result.contents.title),
            author: result.author,
            configurations: result.configurations,
            tags: result.tags,
            contents: result.contents,
          });

          Page.findOne(
            { url: page.url, type: "public" },
            "url",
            (err, result) => {
              if (err) return res.status(500).send("error");
              if (result) {
                page.url =
                  page.url + "_" + crypto.randomBytes(1).toString("hex");
              }
              page.save((err) => {
                if (err) {
                  return res.status(400).send("err");
                }
                res.status(200).send(page.url);
                DraftPage.findByIdAndRemove(pageId, (err, result) => {});
              });
            }
          );
          break;

        case "private":
          var page = new Page({
            type: result.type,
            url: result.url,
            author: result.author,
            configurations: {
              anonymously: result.configurations.anonymously,
              rating: result.configurations.rating,
              comments: result.configurations.comments,
            },
            contents: result.contents,
            password: result.password,
          });
          page.save((err) => {
            if (err) {
              return res.status(400).send("err");
            }
            User.findById(result.author, "username", (err, user) => {
              res.status(200).send({ url: page.url, username: user.username });
            });
            DraftPage.findByIdAndRemove(pageId, (err, result) => {});
          });
          break;
        default:
          return res.status(400).send();
      }
    } else {
      return res.status(400).send({ error: "error with contents" });
    }
  });
};

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

// upload or update a photo to be set as page featured image
exports.uploadPagePhoto = (req, res) => {
  try {
    const imageFolderPath = "./public/images/pages/";
    const pageId = req.params.id;

    upload(req, res, function (err) {
      if (err) {
        return res.send(err);
      }
      if (!req.file) {
        return res.send("no file uploaded.");
      }
      const imgName = req.file.filename;
      try {
        var cropData = JSON.parse(req.body.cropData);
      } catch (err) {
        return res.status(400).send("error with data");
      }
      const buffer = readChunk.sync(`${imageFolderPath}${imgName}`, 0, 4100);
      if (req.file.size > 8000000) {
        fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
        return res.send("maximum image file size is 8MB");
      }
      if (
        (fileType(buffer) && fileType(buffer).mime === "image/png") ||
        (fileType(buffer) && fileType(buffer).mime === "image/jpg") ||
        (fileType(buffer) && fileType(buffer).mime === "image/jpeg")
      ) {
        var image = new Jimp(`${imageFolderPath}${imgName}`, function (
          err,
          image
        ) {
          if (image.bitmap.width < 1200 || image.bitmap.height < 675) {
            fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
            return res.send(
              "image dimentions must be at least 1200 * 675 pixels"
            );
          }

          image
            .quality(60)
            .resize(1200, Jimp.AUTO)
            .write(`${imageFolderPath}${imgName}`, function (err, image) {
              if (err) {
                fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
                return res.send("error");
              }

              cloudinary.v2.uploader.upload(
                `${imageFolderPath}${imgName}`,
                { folder: "images/pages" },
                function (error, result) {
                  Page.findById(pageId, (err, page) => {
                    if (!page) {
                      return res.status(400).send("err");
                    }
                    if (page.photo) {
                      cloudinary.v2.uploader.destroy(page.photo.public_id);
                    }
                    try {
                      page.photo.public_id = result.public_id;
                      page.photo.secure_url = result.secure_url;
                    } catch (e) {
                      res.status(500).send({ error: "An error occurred" });
                      fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
                    }

                    page.save((err) => {
                      if (!err) {
                        try {
                          res.send({ image: page.photo.secure_url });
                        } catch (e) {
                          res.status(500).send({ error: "An error occurred" });
                          fs.unlink(
                            `${imageFolderPath}${imgName}`,
                            (err) => {}
                          );
                        }
                      }
                    });
                  });
                }
              );
            });
        });

        var cropedImage = new Jimp(`${imageFolderPath}${imgName}`, function (
          err,
          image
        ) {
          var x = Number(cropData.x);
          var y = Number(cropData.y);
          var width = Number(cropData.width);
          var height = Number(cropData.height);

          try {
            image
              .crop(x, y, width, height)
              .quality(60)
              .resize(400, 225)
              .write(`${imageFolderPath}croped-${imgName}`, function (
                err,
                image
              ) {
                if (err) {
                  fs.unlink(`${imageFolderPath}croped-${imgName}`, (err) => {});
                }

                cloudinary.v2.uploader.upload(
                  `${imageFolderPath}croped-${imgName}`,
                  { folder: "images/pages/croped" },
                  function (error, result) {
                    Page.findById(pageId, (err, page) => {
                      if (!page) {
                      }
                      if (page.cropedPhoto) {
                        cloudinary.v2.uploader.destroy(
                          page.cropedPhoto.public_id
                        );
                      }
                      try {
                        page.cropedPhoto.public_id = result.public_id;
                        page.cropedPhoto.secure_url = result.secure_url;
                      } catch (e) {
                        fs.unlink(
                          `${imageFolderPath}croped-${imgName}`,
                          (err) => {}
                        );
                      }

                      page.save((err) => {
                        if (!err) {
                          try {
                            fs.unlink(
                              `${imageFolderPath}croped-${imgName}`,
                              (err) => {}
                            );
                            fs.unlink(
                              `${imageFolderPath}${imgName}`,
                              (err) => {}
                            );
                          } catch (e) {
                            fs.unlink(
                              `${imageFolderPath}croped-${imgName}`,
                              (err) => {}
                            );
                          }
                        }
                      });
                    });
                  }
                );
              });
          } catch (e) {
            res.status(500).send("An unkown error occurred.");
            fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
          }
        });
      } else {
        res.send("image format is not supported");
        fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
      }
    });
  } catch (e) {
    res.status(500).send("An unkown error occurred.");
  }
};

// remove page photo
exports.removePagePhoto = (req, res) => {
  const pageId = req.params.id;

  Page.findById(pageId, (err, page) => {
    if (err || !page) return res.send("error");
    cloudinary.v2.uploader.destroy(page.photo.public_id);
    cloudinary.v2.uploader.destroy(page.cropedPhoto.public_id);
    page.photo = { public_id: "", secure_url: "" };
    page.cropedPhoto = { public_id: "", secure_url: "" };
    page.save((err) => {
      if (err || !page) return res.send("error");
      res.send("photo removed");
    });
  });
};

// get attach file
exports.getAttachFile = (req, res) => {
  const pageId = req.params.id;
  const fileName = req.params.name;

  const key = `${pageId}/${fileName}`;

  const options = {
    Bucket: BUCKET_NAME,
    Key: key,
  };

  res.attachment(key);
  const fileStream = S3.getObject(options).createReadStream();
  fileStream.pipe(res);
};

// get attach files
exports.getAttachFiles = (req, res) => {
  const pageId = req.params.id;

  Page.findById(pageId, "attachFiles author", (err, page) => {
    if (err) return res.status(500).send("error");
    res.send({ attachFiles: page.attachFiles });
  });
};

// add an attach file for a page
exports.addAttachFile = (req, res) => {
  const pageId = req.params.id;

  uploadFile(req, res, (err) => {
    const file = req.file;

    Page.findById(pageId, "attachFiles", (err, page) => {
      if (err || !page) return res.status(500).send("error");

      var uploadedFileInDatabase = page.attachFiles.filter((item) => {
        return item.name === file.originalname;
      });

      if (
        file.size <= 10000000 &&
        file.originalname.length < 100 &&
        page.attachFiles.length < 5 &&
        uploadedFileInDatabase.length === 0
      ) {
        const fileStream = fs.createReadStream(
          path.join(__dirname, "../../../storage/" + file.originalname)
        );

        const key = `${pageId}/${file.originalname}`;

        S3.createBucket(function () {
          const params = {
            Bucket: BUCKET_NAME,
            Key: key,
            Body: fileStream,
          };
          S3.upload(params, function (err, data) {
            fs.unlink(
              path.join(__dirname, "../../../storage/" + file.originalname),
              (err) => {}
            );

            if (err)
              return res.status(500).send({ message: "An error occurred" });

            const url = `https://${BUCKET_NAME}.s3.amazonaws.com/${key}`;

            Page.findByIdAndUpdate(
              pageId,
              { $push: { attachFiles: { name: file.originalname, url } } },
              { new: true },
              (err, newPage) => {
                if (err) return res.status(500).send("error");
                res.send({ message: "file uploaded" });
              }
            );
          });
        });
      } else if (file.size > 10000000) {
        var errorMessage = "Maximum file size is 10MB";
        handleIssueWithFile(errorMessage);
      } else if (file.originalname.length > 100) {
        var errorMessage = "File name should be less that 100 characters.";
        handleIssueWithFile(errorMessage);
      } else if (page.attachFiles.length >= 5) {
        var errorMessage =
          "You have already uploaded 5 attach files for this page.";
        handleIssueWithFile(errorMessage);
      } else if (uploadedFileInDatabase.length > 0) {
        var errorMessage =
          "You have already uploaded a file with this name for the page.";
        handleIssueWithFile(errorMessage);
      } else {
        var errorMessage = "There is an error with the file you have uploaded.";
        handleIssueWithFile(errorMessage);
      }
    });

    function handleIssueWithFile(errorMessage) {
      fs.unlink(
        path.join(__dirname, "../../../storage/" + file.originalname),
        (err) => {}
      );
      res.status(400).send({ error: errorMessage });
    }
  });
};

// delete an attach file
exports.deleteAttachFile = (req, res) => {
  const pageId = req.params.id;
  const fileId = req.params.fileId;

  Page.findByIdAndUpdate(
    pageId,
    { $pull: { attachFiles: { _id: fileId } } },
    { new: false },
    (err, page) => {
      if (err) return res.status(500).send("error");

      const removedFile = page.attachFiles.filter((file) => {
        return file._id.equals(fileId);
      });

      const params = {
        Bucket: BUCKET_NAME,
        Key: `${pageId}/${removedFile[0].name}`,
      };

      S3.deleteObject(params, function (err, data) {
        if (err) return res.status(500).send("error");
        res.send({ message: "file deleted" });
      });
    }
  );
};

// move a page to trash
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

// fetch data in edit page section
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
