var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// specific and public pges schema
var pageSchema = new Schema({
  type: String,
  contents: {
    title: String,
    briefDes: String,
    targets: String,
    body: String
  },
  tags: String,
  password: String,
  configurations: {
    comments: Boolean,
    rating: Boolean,
    anonymously: Boolean,
    links: Boolean
  },
  cropedPhoto: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" }
  },
  photo: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  url: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  date: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: String, default: "published" },
  attachFiles: [{ name: String, url: String }]
});

function arrayLimit(val) {
  return val.length <= 5;
}

// draft pges schema
var DraftPageSchema = new Schema({
  type: String,
  contents: {
    title: { type: String, default: "" },
    briefDes: { type: String, default: "" },
    targets: { type: String, default: "" },
    body: { type: String, default: "" }
  },
  tags: [String],
  password: String,
  configurations: {
    comments: { type: Boolean, default: true },
    rating: { type: Boolean, default: true },
    anonymously: { type: Boolean, default: false },
    links: { type: Boolean, default: true }
  },
  url: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: { type: String, default: "draft" }
});

var Page = mongoose.model("Page", pageSchema, "pages");
var DraftPage = mongoose.model("DraftPage", DraftPageSchema, "drafts");

module.exports = { Page, DraftPage };
