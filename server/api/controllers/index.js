const { Page } = require("../../models/page");
const Comment = require("../../models/comment");
const User = require("../../models/user");
const util = require("../../lib/util");

exports.fetchHomePages = function(req, res) {
  var homePages = {
    newsest: [],
    reviewed: [],
    mostPopuler: [],
    viewed: []
  };

  function fetchNewestPages(cb) {
    Page.find(
      { type: "public" },
      "_id contents.title contents.briefDes featureImage url date author",
      function(err, pages) {
        if (err) {
          return res.send("error");
        }
        homePages.newsest = pages;
        cb();
      }
    )
      .lean()
      .limit(5)
      .sort({ date: -1 });
  }

  fetchNewestPages(function() {
    res.send(homePages);
  });
};

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
