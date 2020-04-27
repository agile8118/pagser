const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define our model
const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  email: { type: String, unique: true, lowercase: true },
  password: String,
  biography: { type: String, default: "" },
  headline: { type: String, default: "" },
  links: {
    website: { type: String, default: "" },
    facebook: { type: String, default: "" },
    youtube: { type: String, default: "" },
    twitter: { type: String, default: "" },
    linkedin: { type: String, default: "" },
  },
  photo: {
    public_id: String,
    secure_url: {
      type: String,
      default:
        "https://res.cloudinary.com/dxlsmrixd/image/upload/v1555133028/images/users/placeholder.png",
    },
  },
  readingHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    },
  ],
  verified: { type: Boolean, default: false },
  token: {
    code: String,
    time: Date,
  },
  loaded: { type: Boolean, default: true },
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongoose.model("User", userSchema);

// Export the model
module.exports = ModelClass;
