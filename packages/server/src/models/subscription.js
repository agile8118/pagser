const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  subscriber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: Date, default: Date.now },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
