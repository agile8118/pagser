const Collection = require("../../models/collection");
const User = require("../../models/user");
const log = require("../../lib/log");

// packages and constants for uploading
const fs = require("fs");
const multer = require("multer");
const readChunk = require("read-chunk");
const fileType = require("file-type");
const cloudinary = require("cloudinary");
const crypto = require("crypto");
const keys = require("../../config/keys");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/collections");
  },
  filename: (req, file, cb) => {
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

const upload = multer({ storage }).single("img");

cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Create a collection
exports.create = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;

    const cl = await Collection.create({
      name,
      description,
      user: req.user.id,
    });

    res.send({ message: "success", collection: cl });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch collections user has created and saved ones
exports.fetchCreatedAndSaved = async (req, res) => {
  try {
    const createdCollections = await Collection.find({
      user: req.user.id,
    }).sort({ date: -1 });

    const { savedCollections } = await User.findById(req.user.id)
      .select("savedCollections")
      .populate({
        path: "savedCollections",
        populate: { path: "user", select: "name" },
      });

    const sc = savedCollections.filter((item) => item.shared);

    res.send({
      createdCollections,
      savedCollections: sc,
    });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch collections user has created
exports.fetchCreated = async (req, res) => {
  try {
    const sortBy = req.query.sortBy;

    const collections = await Collection.find({ user: req.user.id });

    if (sortBy === "date-created")
      collections.sort((a, b) => {
        return a.date < b.date;
      });

    if (sortBy === "a-z")
      collections.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });

    res.send({ collections, sortBy });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch user created collections for add to collection modal
exports.fetchCreatedFAP = async (req, res) => {
  try {
    const results = await Collection.find({ user: req.user.id })
      .select("name pages")
      .sort({ date: -1 });

    const collections = results.map((cl) => {
      return {
        id: cl._id,
        name: cl.name,
        selected: cl.pages.indexOf(req.params.pageId) > -1,
      };
    });

    res.send({ collections });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch collections user has saved
exports.fetchSaved = async (req, res) => {
  try {
    const { savedCollections } = await User.findById(req.user.id)
      .select("savedCollections")
      .populate({
        path: "savedCollections",
        populate: { path: "user", select: "name" },
      });

    const sc = savedCollections.filter((item) => item.shared);

    res.send({
      collections: sc,
    });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch all the pages user has created and shared
exports.fetchShared = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "_id"
    );

    const collections = await Collection.find({
      user: user.id,
      shared: true,
    });

    res.send({ collections: collections.length ? collections : null });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch the data of one collection
exports.fetchOne = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate([
      {
        path: "user",
        select: "name",
      },
      {
        path: "pages",
        select: "type url cropedPhoto contents.title contents.briefDes",
        model: "Page",
        populate: {
          path: "author",
          select: "username",
          model: "User",
        },
      },
    ]);

    // Determine the status of the viewer
    const userId = res.locals.userId;
    let viewer;
    let btn;
    if (userId && collection.user.id !== userId) {
      viewer = "authenticated";
      const { savedCollections } = await User.findById(
        userId,
        "savedCollections"
      );
      btn = savedCollections.indexOf(req.params.id) > -1 ? "remove" : "save";
    }
    if (!userId) viewer = "spectator";
    if (collection.user.id === userId) {
      viewer = "owner";
      btn = collection.shared ? "stop-sharing" : "share";
    }

    res.send({ collection, viewer, btn });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Add or remove the page from the selected collection
exports.AddRemovePage = async (req, res) => {
  try {
    const pageId = req.params.pageId;
    const clId = req.params.id;
    let selected;

    const cl = await Collection.findById(clId, "pages name");
    if (cl.pages.indexOf(pageId) > -1) {
      // Remove from collection
      await Collection.findByIdAndUpdate(clId, { $pull: { pages: pageId } });
      selected = false;
    } else {
      // Add to collection
      await Collection.findByIdAndUpdate(clId, { $push: { pages: pageId } });
      selected = true;
    }

    res.send({ message: "success", selected, clName: cl.name });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Save or remove a collection created by others to user library
exports.toggleLibrary = async (req, res) => {
  try {
    const clId = req.params.id;

    const { savedCollections } = await User.findById(
      req.user.id,
      "savedCollections"
    );

    if (savedCollections.indexOf(clId) > -1) {
      // Remove from library
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { savedCollections: clId },
      });
      return res.send({ message: "success", status: "removed" });
    } else {
      // Add to library
      await User.findByIdAndUpdate(req.user.id, {
        $push: { savedCollections: clId },
      });
      return res.send({ message: "success", status: "added" });
    }
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Make the collection either public or private
exports.sharing = async (req, res) => {
  try {
    const { shared } = await Collection.findById(req.params.id, "shared");

    await Collection.findByIdAndUpdate(req.params.id, { shared: !shared });
    res.send({ message: "success", sharing: !shared });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Upload and update the collection photo
exports.photo = async (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) res.status(500).send({ message: "Internal server error." });

      const filePath = req.file ? req.file.path : null;

      // Check if we have any file
      if (!filePath) return res.status(400).send({ message: "No file" });
      // Check file size
      if (req.file.size > 8000000) {
        fs.unlink(filePath, () => {});
        return res.status(400).send({ message: "Bad request" });
      }
      // Check the file type
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

      const cl = await Collection.findById(req.params.id);
      // Collection has a image
      if (cl.photo.secure_url) {
        // Remove the image from cloudinary
        cloudinary.v2.uploader.destroy(cl.photo.public_id);
      }

      const cropData = JSON.parse(req.body.cropData);
      // Upload, crop and resize the image (cloudinary)
      cloudinary.v2.uploader.upload(
        filePath,
        {
          folder: "images/collections",
          transformation: [
            {
              width: Math.round(Number(cropData.width)),
              height: Math.round(Number(cropData.height)),
              x: Math.round(Number(cropData.x)),
              y: Math.round(Number(cropData.y)),
              crop: "crop",
            },
            { width: 960, height: 540, crop: "scale" },
          ],
        },
        async (error, { secure_url, public_id }) => {
          fs.unlink(filePath, () => {});

          if (error)
            return res.status(500).send({ message: "Internal server error." });

          await Collection.findByIdAndUpdate(req.params.id, {
            photo: { secure_url, public_id },
          });

          res.send({
            message: "image-uploaded",
            image: secure_url,
          });
        }
      );
    } catch (e) {
      if (req.file && req.file.path) fs.unlink(req.file.path, () => {});
      log(e);
      res.status(500).send({ message: "Internal server error." });
    }
  });
};

// Update the name and description of the collection
exports.updateInfo = async (req, res) => {
  try {
    await Collection.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
    });

    res.send({
      message: "updated",
    });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Remove one or more pages from a collection
exports.removePages = async (req, res) => {
  try {
    await Collection.findByIdAndUpdate(req.params.id, {
      $pull: { pages: { $in: req.body.pageIds } },
    });

    res.send({ message: "pages removed" });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Delete a collection entierly
exports.delete = async (req, res) => {
  try {
    await Collection.findByIdAndRemove(req.params.id);
    res.send({ message: "success" });
  } catch (e) {
    log(e);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Change the order of one page (2 pages will be affected)
exports.changePageOrders = async (req, res) => {};
