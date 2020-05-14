const jwt = require("jwt-simple");
const Comment = require("../../models/comment");
const User = require("../../models/user");
const util = require("../../lib/util");
const keys = require("../../config/keys");

// Add a comment for a page
exports.addComment = async (req, res) => {
  try {
    const pageId = req.params.pageId;
    const userId = req.user.id;
    const text = req.body.text;
    const inReplyTo = req.body.inReplyTo;

    const comment = await Comment.create({
      author: userId,
      text,
      page: pageId,
      inReplyTo,
    });

    const user = await User.findById(userId, "photo name");

    const formattedComment = {
      id: comment.id,
      author: {
        id: user._id,
        name: user.name,
        photo: user.photo.secure_url,
      },
      viewer: "owner",
      text: comment.text,
      inReplyTo: comment.inReplyTo,
      replies: comment.inReplyTo ? [] : 0,
      date: util.timeSince(comment.date),
      highlightedReplies: [],
    };

    res.send({ comment: formattedComment, inReplyTo: comment.inReplyTo });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Fetch all comments for the show page
exports.fetchComments = async (req, res) => {
  try {
    const pageId = req.params.pageId;
    const highlightedRepliesIds = req.body.highlightedRepliesIds;

    let userId;
    try {
      userId = jwt.decode(req.headers.authorization, keys.jwtSecret).sub;
    } catch (e) {
      userId = false;
    }

    // Find all page comments which are not replies
    const comments = await Comment.find({
      page: pageId,
      inReplyTo: null,
    })
      .sort({ date: -1 })
      .populate({
        path: "author",
        select: "name photo",
        model: "User",
      });

    const ids = comments.map((c) => c._id);

    // Find the replies of the founded comments
    const replies = await Comment.find(
      { inReplyTo: { $in: ids } },
      "_id inReplyTo"
    );

    // Make found comments ready for client
    const formattedComments = comments.map((comment) => {
      // Filter the replies for each comment
      const reps = replies.filter(
        (rep) => rep.inReplyTo.toString() === comment._id.toString()
      );

      // Return each comment formatted and with replies attached to it
      return {
        id: comment.id,
        author: {
          name: comment.author.name,
          photo: comment.author.photo.secure_url,
        },
        viewer: comment.author.id === userId ? "owner" : "spectator",
        text: comment.text,
        date: util.timeSince(comment.date),
        replies: reps.length || 0,
        highlightedReplies: [],
      };
    });

    res.send({ comments: formattedComments, userId });
  } catch (e) {
    console.error(e);
  }
};

// Fetch all replies of a comment
exports.fetchReplies = async (req, res) => {
  let userId;
  try {
    userId = jwt.decode(req.headers.authorization, keys.jwtSecret).sub;
  } catch (e) {
    userId = false;
  }

  const commentId = req.params.id;

  // Find the replies of the selected comment
  const results = await Comment.find({ inReplyTo: commentId }).populate({
    path: "author",
    model: "User",
    select: "name photo",
  });

  const replies = results.map((r) => {
    return {
      id: r.id,
      author: {
        name: r.author.name,
        photo: r.author.photo.secure_url,
      },
      viewer: r.author.id === userId ? "owner" : "spectator",
      text: r.text,
      date: util.timeSince(r.date),
    };
  });

  res.send({ replies, commentId });
};

exports.deleteComment = async (req, res) => {
  const commentId = req.params.commentid;
  const deletedComment = await Comment.findByIdAndRemove(commentId);

  if (!deletedComment.inReplyTo)
    await Comment.deleteMany({ inReplyTo: deletedComment.id });

  res.send({
    commentId: deletedComment.id,
    reply: deletedComment.inReplyTo ? true : false,
  });

  // const commentId = req.params.commentid;

  // await Comment.findByIdAndRemove(commentId, "_id", function (err, comment) {
  //   if (err) return res.status(500).send("error");

  //   if (comment.inReplyTo === null) {
  //     Comment.remove({ _id: comment.replies }, (err, result) => {
  //       if (err) return res.status(500).send("error");
  //     });

  //     Page.findByIdAndUpdate(
  //       pageId,
  //       { $pull: { comments: commentId } },
  //       (err, page) => {
  //         if (err) return res.status(500).send("error");
  //         res.send({ commentId: comment.id, reply: false });
  //       }
  //     );
  //   } else {
  //     Comment.findByIdAndUpdate(
  //       comment.inReplyTo,
  //       { $pull: { replies: commentId } },
  //       { new: true }
  //     ).exec((err, comment) => {
  //       res.send({
  //         commentId: comment.id,
  //         reply: true,
  //         deletedCommentId: commentId,
  //       });
  //     });
  //   }
  // });
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
