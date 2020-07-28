const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// private and public pges schema
const pageSchema = new Schema({
  type: String,
  contents: {
    title: String,
    briefDes: String,
    targets: String,
    body: String,
  },
  tags: String,
  password: String,
  configurations: {
    comments: Boolean,
    rating: Boolean,
    anonymously: Boolean,
    links: Boolean,
  },
  cropedPhoto: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" },
  },
  photo: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  url: String,
  date: { type: Date, default: Date.now },
  status: { type: String, default: "published" },
  attachFiles: [{ name: String, url: String }],
});

// draft pges schema
const DraftPageSchema = new Schema({
  type: String,
  contents: {
    title: { type: String, default: "" },
    briefDes: { type: String, default: "" },
    targets: { type: String, default: "" },
    body: { type: String, default: "" },
  },
  tags: [String],
  password: String,
  configurations: {
    comments: { type: Boolean, default: true },
    rating: { type: Boolean, default: true },
    anonymously: { type: Boolean, default: false },
    links: { type: Boolean, default: true },
  },
  url: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  status: { type: String, default: "draft" },
});

const Page = mongoose.model("Page", pageSchema, "pages");
const DraftPage = mongoose.model("DraftPage", DraftPageSchema, "drafts");

module.exports = { Page, DraftPage };
