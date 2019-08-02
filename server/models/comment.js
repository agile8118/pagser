const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const util = require("../lib/util");

var commentSchema = mongoose.Schema({
  text: String,
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page"
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: { type: Date, default: Date.now },
  replyes: [{ type: mongoose.Schema.Types.ObjectId }],
  inReplyTo: { type: mongoose.Schema.Types.ObjectId, default: null }
});

commentSchema.plugin(mongoosePaginate);
var Comment = mongoose.model("Comment", commentSchema, "comments");

module.exports = Comment;
