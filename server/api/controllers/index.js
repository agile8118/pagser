const { Page } = require("../../models/page");
const User = require("../../models/user");

exports.getAuth = (req, res) => {
  if (req.user.id) {
    User.findById(req.user.id, "photo", (err, user) => {
      res
        .status(200)
        .send({ user: { id: user.id, photo: user.photo.secure_url } });
    });
  } else {
    res.status(400).send();
  }
};
