const jwt = require("jwt-simple");
const Comment = require("../../models/comment");
const Rating = require("../../models/rating");
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
    // The id of the comment user has replied to
    const inReplyToCommentReply = req.body.inReplyToCommentReply || null;

    // Grab The name of the comment author which user has replied to, we'll just use this to return back to
    // client so that we'll be able to show a label on the comment reply
    let repliedToC;
    if (inReplyToCommentReply)
      repliedToC = await Comment.findById(inReplyToCommentReply)
        .select("author")
        .populate({ path: "author", model: "User", select: "name" });

    const comment = await Comment.create({
      author: userId,
      text,
      page: pageId,
      inReplyTo,
      inReplyToCommentReply:
        repliedToC && repliedToC.author.id !== userId
          ? inReplyToCommentReply
          : null,
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
      inReplyToUser: comment.inReplyToCommentReply
        ? repliedToC.author.name
        : null,
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
    const portion = Number(req.query.portion) || 1;
    // const highlightedRepliesIds = req.body.highlightedRepliesIds;

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
      .limit(10)
      .skip((portion - 1) * 10)
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

    const allLikes = await Rating.find({ comment: { $in: ids }, liked: true });

    // Make found comments ready for client
    const formattedComments = comments.map((comment) => {
      // Filter the replies for each comment
      const reps = replies.filter(
        (rep) => rep.inReplyTo.toString() === comment._id.toString()
      );

      const likes = allLikes.filter(
        (l) => l.comment.toString() === comment._id.toString()
      );

      // Return each comment formatted and with replies attached to it
      return {
        id: comment.id,
        author: {
          id: comment.author.id,
          name: comment.author.name,
          photo: comment.author.photo.secure_url,
        },
        viewer: comment.author.id === userId ? "owner" : "spectator",
        text: comment.text,
        date: util.timeSince(comment.date),
        likes: likes.length,
        replies: reps.length || 0,
        highlightedReplies: [],
      };
    });

    const totalComments = await Comment.find({
      page: pageId,
    }).select("_id");

    res.send({
      comments: formattedComments,
      userId,
      length: totalComments.length,
    });
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
  const results = await Comment.find({ inReplyTo: commentId }).populate([
    {
      path: "author",
      model: "User",
      select: "name photo",
    },
    {
      path: "inReplyToCommentReply",
      model: "Comment",
      select: "author",
      populate: { path: "author" },
    },
  ]);

  const ids = results.map((c) => c._id);

  const allLikes = await Rating.find({ comment: { $in: ids }, liked: true });

  const replies = results.map((r) => {
    const likes = allLikes.filter(
      (l) => l.comment.toString() === r._id.toString()
    );

    return {
      id: r.id,
      author: {
        id: r.author.id,
        name: r.author.name,
        photo: r.author.photo.secure_url,
      },
      viewer: r.author.id === userId ? "owner" : "spectator",
      likes: likes.length,
      inReplyToUser: r.inReplyToCommentReply
        ? r.inReplyToCommentReply.author.name
        : null,
      text: r.text,
      date: util.timeSince(r.date),
    };
  });

  res.send({ replies, commentId });
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const newComment = req.body.text;

    const c = await Comment.findByIdAndUpdate(
      commentId,
      { text: newComment, edited: true },
      { new: true }
    );

    res.status(200).send({
      commentId: c.id,
      newComment: c.text,
      inReplyTo: c.inReplyTo || null,
    });
  } catch (err) {
    res.status(500).send({ message: "Internal server error." });
  }
};

// Delete a comment along with all the replies associated with it
exports.deleteComment = async (req, res) => {
  const commentId = req.params.id;

  const deletedComment = await Comment.findByIdAndRemove(commentId);
  let parent;
  if (!deletedComment.inReplyTo) {
    await Comment.deleteMany({ inReplyTo: deletedComment.id });
    parent = true;
  } else {
    parent = deletedComment.inReplyTo;
  }

  await Comment.deleteMany({
    inReplyToCommentReply: deletedComment.id,
  });

  res.send({
    commentId: deletedComment.id,
    parent,
  });
};
