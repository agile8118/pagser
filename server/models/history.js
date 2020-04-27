const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
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

const History = mongoose.model("History", historySchema);

module.exports = History;
