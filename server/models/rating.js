const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  liked: { type: Boolean },
  date: { type: Date, default: Date.now },
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
