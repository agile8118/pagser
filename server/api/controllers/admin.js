const jwt = require("jwt-simple");
const multer = require("multer");
const readChunk = require("read-chunk");
const fileType = require("file-type");
const Jimp = require("jimp");
const fs = require("fs");
const User = require("../../models/user");
const { Page, DraftPage } = require("../../models/page");
const { Trash } = require("../../models/trash");
const keys = require("../../config/keys");
const func = require("../../lib/functions");
const crypto = require("crypto");
const bcrypt = require("bcrypt-nodejs");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");

const util = require("../../lib/util");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/users");
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

cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

function tokenForUser(userId) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, iat: timestamp }, keys.jwtSecret);
}

exports.fetchUserData = function (req, res, next) {
  var userId = req.user.id;
  func.sendUserData(userId, res);
};

exports.updateUserData = function (req, res, next) {
  var userId = req.user.id;

  var user = {
    name: req.body.name,
    headline: req.body.headline,
    biography: req.body.biography,
    links: {
      website: req.body.links.website || "",
      twitter: req.body.links.twitter || "",
      youtube: req.body.links.youtube || "",
      facebook: req.body.links.facebook || "",
      linkedin: req.body.links.linkedin || "",
    },
  };

  User.findByIdAndUpdate(userId, user, function (err, user) {
    if (err) {
      return res.send("error");
    }
    func.sendUserData(userId, res);
  });
};

exports.fetchUserEmail = (req, res) => {
  const userId = req.user.id;

  User.findById(userId, "email", (err, user) => {
    if (err) return res.status(500).send("error");
    res.send({ email: user.email });
  });
};

exports.updateUserEmail = function (req, res) {
  var userId = req.user.id;
  var email = req.body.email;

  User.findByIdAndUpdate(userId, { email }, function (err, user) {
    if (err) {
      return res.send("error updating email");
    }
    func.sendUserData(userId, res);
  });
};

exports.updateUserPassword = function (req, res) {
  var userId = req.user.id;
  var password = req.body.password;

  User.findById(userId, function (err, user) {
    if (err) return res.status(500).send("error");

    bcrypt.genSalt(10, function (err, salt) {
      if (err) return res.status(500).send("error");

      // hash (encrypt) our password using the salt
      bcrypt.hash(password, salt, null, function (err, hash) {
        if (err) {
          return res.send("err");
        }

        // overwrite plain text password with encrypted password
        user.password = hash;
        user.save(function (err) {
          if (!err) {
            res.status(200).send("password updated succcessfully");
          }
        });
      });
    });
  });
};

exports.uploadUserImage = function (req, res) {
  const imageFolderPath = "./public/images/users/";
  upload(req, res, function (err) {
    if (err) return res.status(500).send("error");
    if (!req.file) {
      return res.send("no file uploaded.");
    }

    const userid = req.user.id;
    const imgName = req.file.filename;

    // Get the crop data
    try {
      var cropData = JSON.parse(req.body.cropData);
    } catch (err) {
      return res.status(400).send("error with data");
    }

    const buffer = readChunk.sync(`${imageFolderPath}${imgName}`, 0, 4100);
    // Check if size is valid
    if (req.file.size > 5000000) {
      fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
      return res.send("maximum image file size is 5MB");
    }
    // Check if file type is valid
    if (
      (fileType(buffer) && fileType(buffer).mime === "image/png") ||
      (fileType(buffer) && fileType(buffer).mime === "image/jpg") ||
      (fileType(buffer) && fileType(buffer).mime === "image/jpeg")
    ) {
      // If all size and type validations are passed...
      var image = new Jimp(`${imageFolderPath}${imgName}`, function (
        err,
        image
      ) {
        // Check the height and width
        if (image.bitmap.width < 250 || image.bitmap.height < 250) {
          fs.unlink(`${imageFolderPath}{imgName}`, (err) => {});
          return res.send("image dimentions must be at least 250 * 250 pixels");
        }
        var x = Number(cropData.x);
        var y = Number(cropData.y);
        var width = Number(cropData.width);
        var height = Number(cropData.height);
        // Crop the image
        image
          .crop(x, y, width, height)
          .quality(60)
          .resize(250, 250)
          .write(`${imageFolderPath}${imgName}`, function (err, image) {
            if (err) {
              fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
              return res.send("error 2");
            }

            // Upload the final photo to cloudinary
            cloudinary.v2.uploader.upload(
              `${imageFolderPath}${imgName}`,
              { folder: "images/users" },
              function (error, result) {
                User.findById(userid, (err, user) => {
                  if (!user) {
                    return res.status(400).send("err");
                  }
                  // If user has already a photo remove it
                  if (user.photo) {
                    cloudinary.v2.uploader.destroy(user.photo.public_id);
                  }

                  try {
                    user.photo.public_id = result.public_id;
                    user.photo.secure_url = result.secure_url;
                  } catch (e) {
                    res.status(500).send({ error: "An error occurred" });
                    fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
                  }

                  // Save the user after updating
                  user.save((err) => {
                    if (!err) {
                      try {
                        // Send the uploaded photo url to user
                        res.send({ image: user.photo.secure_url });
                        // Delete the photo on Disk after all went OK
                        fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
                      } catch (e) {
                        res.status(500).send({ error: "An error occurred" });
                        fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
                      }
                    }
                  });
                });
              }
            );
          });
      });
    } else {
      res.send("image format is not supported");
      fs.unlink(`${imageFolderPath}${imgName}`, (err) => {});
    }
  });
};
