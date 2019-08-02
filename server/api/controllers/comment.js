const { Page } = require("../../models/page");
const Comment = require("../../models/comment");
const User = require("../../models/user");
const util = require("../../lib/util");
const jwt = require("jwt-simple");
const keys = require("../../config/keys");

exports.addComment = function(req, res) {
  var pageId = req.params.id;
  var userId = req.user.id;
  var text = req.body.text;
  var inReplyTo = req.body.inReplyTo;

  var comment = new Comment({ author: userId, text, page: pageId, inReplyTo });
  comment.save(err => {
    if (err) return res.send("error");

    if (!comment.inReplyTo) {
      Page.findByIdAndUpdate(
        pageId,
        { $push: { comments: comment.id } },
        { new: true },
        (err, page) => {
          if (err) return res.status(500).send("error");
        }
      );
    } else {
      Comment.findByIdAndUpdate(
        inReplyTo,
        { $push: { replyes: comment.id } },
        (err, commet) => {}
      );
    }

    Comment.findById(comment.id, "text inReplyTo author date")
      .populate("author", "name photo")
      .exec(function(err, comment) {
        if (err) {
          return res.send("error");
        }

        var c = {
          id: comment.id,
          author: {
            id: comment.author._id,
            name: comment.author.name,
            photo: comment.author.photo
          },
          viewer: "owner",
          text: comment.text,
          inReplyTo: comment.inReplyTo,
          replyes: [],
          date: util.timeSince(comment.date)
        };

        res.send(c);
      });
  });
};

exports.fetchComments = function(req, res) {
  const pageId = req.params.id;
  const commentsPage = req.query.page;

  try {
    var decoded = jwt.decode(req.headers.authorization, keys.jwtSecret);
    var userId = decoded.sub;
  } catch (e) {
    var userId = false;
  }

  Comment.paginate(
    { page: pageId, inReplyTo: null },
    {
      select: "text author date inReplyTo replyes",
      limit: 10,
      page: commentsPage,
      sort: { date: -1 },
      populate: [
        {
          path: "author",
          select: "name photo",
          model: "User"
        },
        {
          path: "replyes",
          select: "text author date inReplyTo",
          model: "Comment",
          populate: {
            path: "author",
            select: "name photo",
            model: "User"
          }
        }
      ]
    },
    (err, results) => {
      if (err) return res.status(500).send("error");
      var data = results.docs.map(comment => {
        if (comment.author.id === userId) {
          return {
            id: comment.id,
            author: {
              name: comment.author.name,
              photo: comment.author.photo
            },
            viewer: "owner",
            text: comment.text,
            date: util.timeSince(comment.date),
            inReplyTo: comment.inReplyTo,
            replyes: comment.replyes.map(c => {
              if (userId === c.author.id) {
                return {
                  id: c.id,
                  author: {
                    name: c.author.name,
                    photo: c.author.photo
                  },
                  date: util.timeSince(c.date),
                  text: c.text,
                  inReplyTo: c.inReplyTo,
                  viewer: "owner"
                };
              } else {
                return {
                  id: c.id,
                  author: {
                    name: c.author.name,
                    photo: c.author.photo
                  },
                  date: util.timeSince(c.date),
                  text: c.text,
                  inReplyTo: c.inReplyTo,
                  viewer: "spectator"
                };
              }
            })
          };
        } else {
          return {
            id: comment.id,
            author: {
              name: comment.author.name,
              photo: comment.author.photo
            },
            viewer: "spectator",
            text: comment.text,
            date: util.timeSince(comment.date),
            inReplyTo: comment.inReplyTo,
            replyes: comment.replyes.map(c => {
              if (userId === c.author.id) {
                return {
                  id: c.id,
                  author: {
                    name: c.author.name,
                    photo: c.author.photo
                  },
                  date: util.timeSince(c.date),
                  text: c.text,
                  inReplyTo: c.inReplyTo,
                  viewer: "owner"
                };
              } else {
                return {
                  id: c.id,
                  author: {
                    name: c.author.name,
                    photo: c.author.photo
                  },
                  date: util.timeSince(c.date),
                  text: c.text,
                  inReplyTo: c.inReplyTo,
                  viewer: "spectator"
                };
              }
            })
          };
        }
      });

      res.send({
        comments: data,
        page: results.page,
        pages: results.pages,
        userId
      });
    }
  );
};

exports.deleteComment = function(req, res) {
  var pageId = req.params.id;
  var commentId = req.params.commentid;

  Comment.findByIdAndRemove(commentId, "_id", function(err, comment) {
    if (err) return res.status(500).send("error");

    if (comment.inReplyTo === null) {
      Comment.remove({ _id: comment.replyes }, (err, result) => {
        if (err) return res.status(500).send("error");
      });

      Page.findByIdAndUpdate(
        pageId,
        { $pull: { comments: commentId } },
        (err, page) => {
          if (err) return res.status(500).send("error");
          res.send({ commentId: comment.id, reply: false });
        }
      );
    } else {
      Comment.findByIdAndUpdate(
        comment.inReplyTo,
        { $pull: { replyes: commentId } },
        { new: true }
      ).exec((err, comment) => {
        res.send({
          commentId: comment.id,
          reply: true,
          deletedCommentId: commentId
        });
      });
    }
  });
};

exports.updateComment = (req, res) => {
  const commentId = req.params.commentid;
  const commentText = req.body.text;

  Comment.findByIdAndUpdate(
    commentId,
    { text: commentText },
    { new: true },
    (err, comment) => {
      if (err) return res.status(500).send("error");
      if (comment.inReplyTo) {
        res.status(200).send({ comment, reply: true });
      } else {
        res.status(200).send(comment);
      }
    }
  );
};
