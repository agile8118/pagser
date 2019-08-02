var Comment = require("../models/comment");
const { Page, DraftPage } = require("../models/page");

var middleware = {};

middleware.checkCommentOwnership = function(req, res, next) {
  var commentid = req.params.commentid;
  Comment.findById(commentid, function(err, comment) {
    if (err) return res.status(500).send("error");
    if (comment && comment.author.equals(req.user.id)) {
      next();
    } else {
      res.status(403).send("You are not the owner");
    }
  });
};

middleware.checkPageOwnership = function(req, res, next) {
  var pageId = req.params.id;
  var userId = req.user.id;

  Page.findOne({ _id: pageId, author: userId }, function(err, page) {
    if (err) return res.status(400).send();
    if (page) {
      next();
    } else {
      res.status(403).send();
    }
  });
};

middleware.checkDraftPageOwnership = function(req, res, next) {
  var pageId = req.params.id;
  var userId = req.user.id;
  var stage = req.params.stage;

  if (stage === "initial-step") {
    next();
  } else {
    DraftPage.findOne(
      { _id: pageId, author: userId, status: "draft" },
      function(err, page) {
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

module.exports = middleware;
