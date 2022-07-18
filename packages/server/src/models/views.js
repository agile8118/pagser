const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const viewsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ip: {
    type: String,
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
  },
  date: { type: Date, default: Date.now },
});

const Views = mongoose.model("Views", viewsSchema);

module.exports = Views;
