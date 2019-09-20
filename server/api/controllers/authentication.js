const jwt = require("jwt-simple");
const sendEmail = require("../services/nodemailer");
const User = require("../../models/user");
const keys = require("../../config/keys");
const crypto = require("crypto");
const bcrypt = require("bcrypt-nodejs");

function tokenForUser(userId) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, iat: timestamp }, keys.jwtSecret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user.id) });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const name = req.body.name;
  var user = new User({
    email,
    username,
    password,
    name,
    verified: true
  });

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return res.send("err");
      }

      // overwrite plain text password with encrypted password
      user.password = hash;
      user.save(function(err) {
        if (err) {
          return res.send("Error");
        }
        res.send({ token: tokenForUser(user.id) });
      });
    });
  });
};

// check if a user can take a choosen username or not
exports.usernameAvailability = function(req, res) {
  const username = req.body.username;
  User.findOne({ username: username }, function(err, result) {
    if (err) {
      res.status(422).send({ error: "An error happened." });
    } else {
      if (result === null) {
        res.status(200).send({ message: "ok" });
      } else {
        res.status(200).send({ message: "taken" });
      }
    }
  });
};

// send an email to user for passwordreset
exports.forgotPasswordRequest = (req, res) => {
  const email = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(422).send({ error: "An error happened." });
    }
    if (user !== null) {
      const code = crypto.randomBytes(18).toString("hex");
      const userId = user.id;
      const link = `${keys.domain}/forgotpassword?t=${code}&i=${userId}`;
      const html = `<p>Please click on the link below to reset your password: </p> </br> ${link} </br> <em>Link is valid for just 10 minutes.</em>`;

      user.token.code = code;
      user.token.time = Date.now();
      user.save();

      sendEmail(email, "Reset your password", html, (msg, info) => {
        if (msg === "success") {
          res.send("sent");
        } else {
          res.send("not founded");
        }
      });
    } else {
      res.status(404).send("No one with this email were founded.");
    }
  });
};

// reset the user account with the given token, userId and new password
exports.resetPassword = (req, res) => {
  const password = req.body.password;
  const userId = req.body.userId;

  // find the user
  User.findById(userId, (err, user) => {
    if (err || !user) {
      return res.status(422).send({ error: "An error happened." });
    }
    // update user password password

    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }

      // hash (encrypt) our password using the salt
      bcrypt.hash(password, salt, null, function(err, hash) {
        if (err) return res.status(500).send("error");

        // overwrite plain text password with encrypted password
        user.password = hash;
        user.save(function(err) {
          if (!err) {
            res.status(200).send({ success: "password updated succcessfully" });
          }
        });
      });
    });
  });
};

// send a code to user email address to verify that user own the email
exports.sendCode = (req, res) => {
  const email = req.body.email;
  const code = Math.floor(Math.random() * 90000) + 10000;
  const html = `<p>Please verify your email address by entering this code:</p><h1 style="letter-spacing: 4px;">${code}</h1><p>`;
  req.session.codesent = code;

  sendEmail(email, "Verify your email address", html, (msg, info) => {
    console.log(info);
    if (msg === "success") {
      res.status(200).send("code sent");
    } else {
      res.status(500).send();
    }
  });
};
