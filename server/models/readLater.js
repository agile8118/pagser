const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readLaterSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
  },
  date: { type: Date, default: Date.now },
});

const ReadLater = mongoose.model("ReadLater", readLaterSchema);

module.exports = ReadLater;
