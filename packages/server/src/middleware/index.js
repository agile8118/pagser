const Comment = require("../models/comment");
const Collection = require("../models/collection");
const { Page, DraftPage } = require("../models/page");
const jwt = require("jwt-simple");
const keys = require("../config/keys");

var middleware = {};

middleware.checkCommentOwnership = (req, res, next) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) return res.status(500).send({ message: "Internal server error." });
    if (comment && comment.author.equals(req.user.id)) {
      next();
    } else {
      res.status(403).send({ message: "You are not the owner" });
    }
  });
};

middleware.checkPageOwnership = async (req, res, next) => {
  const pageId = req.params.id;
  const userId = req.user.id;
  const type = req.query.type;

  let page = null;
  if (type === "draft") {
    page = await DraftPage.findOne({ _id: pageId, author: userId });
  } else {
    page = await Page.findOne({ _id: pageId, author: userId });
  }

  if (page) {
    next();
  } else {
    res.status(403).send({ message: "Not authorized." });
  }
};

middleware.checkDraftPageOwnership = function (req, res, next) {
  var pageId = req.params.id;
  var userId = req.user.id;
  var stage = req.params.stage;

  if (stage === "initial-step") {
    next();
  } else {
    DraftPage.findOne(
      { _id: pageId, author: userId, status: "draft" },
      function (err, page) {
        if (err) return res.status(400).send();
        if (page) {
          next();
        } else {
          res.status(404).send("no draft page");
        }
      }
    );
  }
};

// Before showing a collection to user check if it has sharing on
middleware.checkCLPrivacy = async (req, res, next) => {
  try {
    var decoded = jwt.decode(req.headers.authorization, keys.jwtSecret);
    var userId = decoded.sub;
  } catch (e) {
    var userId = false;
  }

  res.locals.userId = userId;

  const cl = await Collection.findById(req.params.id, "shared user");
  if (cl.shared) return next();

  if (cl.user.equals(userId)) return next();

  res.status(403).send({ message: "not-authorized" });
};

module.exports = middleware;
