const User = require("../models/user");
const validator = require("validator");
const ObjectId = require("mongoose").Types.ObjectId;

const validate = {};

function isAlpha(string) {
  if (/^[A-Za-z ]+$/.test(string)) {
    return true;
  } else {
    return false;
  }
}

function isUsername(string) {
  if (/^[a-zA-Z0-9_]{5,15}$/.test(string)) {
    return true;
  } else {
    return false;
  }
}

function len(string, min, max) {
  if (string.length >= min && string.length <= max) {
    return true;
  } else {
    return false;
  }
}

function notEmpty(string) {
  if (string && string.length > 0) {
    return true;
  } else {
    return false;
  }
}

function isHardPassword(password) {
  if (
    /[0-9]/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

// return how much of a string is letter
function letterPercentage(string, minPercent) {
  if (string.length > 0) {
    const cleanString = string.replace(/ /g, "");
    const letters = cleanString.replace(/[^A-Z]/gi, "");
    const percent = Math.round((letters.length / cleanString.length) * 100);

    if (percent >= minPercent) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

// Validate if the id is valid mongoose id
validate.id = (req, res, next) => {
  const id = req.params.id;
  if (ObjectId.isValid(id)) return next();
  res.status(422).send({ message: "An error with the provided id." });
};

// VALIDATE NAME FIELD //
validate.name = function (req, res, next) {
  var name = req.body.name;

  if (notEmpty(name) && isAlpha(name) && len(name, 3, 30)) {
    next();
  } else {
    res.status(422).send({ error: "name error" });
  }
};

// VALIDATE HEADLINE FIELD //
validate.headline = (req, res, next) => {
  var headline = req.body.headline;
  if (letterPercentage(headline, 60) && len(headline, 0, 50)) {
    next();
  } else {
    res.status(422).send({ error: "headline error" });
  }
};

// VALIDATE BIOGRAPHY FIELD //
validate.biography = (req, res, next) => {
  var biography = req.body.biography;
  if (letterPercentage(biography, 70) && len(biography, 0, 250)) {
    next();
  } else {
    res.status(422).send({ error: "biography error" });
  }
};

// VALIDATE LINKS IN ADMIN AREA //
validate.links = (req, res, next) => {
  var links = req.body.links;
  if (links) {
    var website = links.website || "";
    var twitter = links.twitter || "";
    var youtube = links.youtube || "";
    var linkedin = links.linkedin || "";
    var facebook = links.facebook || "";
    if (
      len(website, 0, 100) &&
      len(twitter, 0, 100) &&
      len(youtube, 0, 100) &&
      len(linkedin, 0, 100) &&
      len(facebook, 0, 100)
    ) {
      next();
    } else {
      res.status(422).send({ error: "links error" });
    }
  } else {
    next();
  }
};

// VALIDATE USERNAME FIELD //
validate.username = function (req, res, next) {
  var username = req.body.username;
  if (notEmpty(username) && len(username, 5, 15) && isUsername(username)) {
    next();
  } else {
    res.send({ error: "username error" });
  }
};

// VALIDATE EMAIL FIELD //
validate.email = function (req, res, next) {
  var email = req.body.email;

  if (notEmpty(email) && validator.isEmail(email)) {
    next();
  } else {
    res.status(200).send({ error: "email error" });
  }
};

// VALIDATE PASSWORD FIELD //
validate.password = function (req, res, next) {
  var password = req.body.password;
  var username = req.body.username;

  if (
    password !== username &&
    isHardPassword(password) &&
    len(password, 8, 30)
  ) {
    next();
  } else {
    res.status(422).send({ error: "password error" });
  }
};

// CHECK IF PROVIDED EMAIL IS NOT EXISTED //
validate.emailNotExisted = function (req, res, next) {
  var email = req.body.email;
  User.findOne({ email: email }, function (err, result) {
    if (err) {
      res.status(422).send({ error: "An error happened." });
    } else {
      if (result === null) {
        next();
      } else {
        res.status(422).send({ error: "email is in use" });
      }
    }
  });
};

// CHECK IF PROVIDED USERNAME IS NOT EXISTED //
validate.usernameNotExisted = function (req, res, next) {
  var username = req.body.username;
  User.findOne({ username: username }, function (err, result) {
    if (err) {
      res.status(422).send({ error: "An error happened." });
    } else {
      if (result === null) {
        next();
      } else {
        res.status(422).send({ error: "username is already taken." });
      }
    }
  });
};

// validate the token for passsword reset
validate.token = (req, res, next) => {
  const code = req.body.token.code;
  const userId = req.body.userId;

  User.findById(userId, (err, user) => {
    if (!user) {
      return res.status(400).send({ error: "invalid link" });
    }
    const tokenDate = user.token.time.getTime();
    if (Date.now() - tokenDate > 600000) {
      res.status(400).send({ error: "link expired" });
    } else if (code === user.token.code) {
      next();
    } else {
      res.status(400).send({ error: "invalid link" });
    }
  });
};

//validate the code for verifing email address
validate.code = (req, res, next) => {
  const code = req.body.code;

  if (code === req.session.codesent) {
    next();
  } else {
    res.status(400).send({ error: "invalid code" });
  }
};

module.exports = validate;
