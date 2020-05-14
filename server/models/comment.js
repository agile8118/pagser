const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const commentSchema = mongoose.Schema({
  text: String,
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: Date, default: Date.now },
  readByPageOwner: { type: Boolean, default: false },
  lovedByPageOwner: { type: Boolean, default: false },
  inReplyTo: { type: mongoose.Schema.Types.ObjectId, default: null },
  inReplyToCommentReply: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
});

commentSchema.plugin(mongoosePaginate);
const Comment = mongoose.model("Comment", commentSchema, "comments");

module.exports = Comment;
