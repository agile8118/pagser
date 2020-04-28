const jwt = require("jwt-simple");
const User = require("../../models/user");
const keys = require("../../config/keys");
const func = require("../../lib/functions");
const crypto = require("crypto");
const bcrypt = require("bcrypt-nodejs");

function tokenForUser(userId) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, iat: timestamp }, keys.jwtSecret);
}

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
