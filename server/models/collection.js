const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  photo: {
    public_id: { type: String, default: "" },
    secure_url: { type: String, default: "" },
  },
  pages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    },
  ],
  date: { type: Date, default: Date.now },
  shared: false,
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
