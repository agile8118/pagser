const User = require("../../models/user");
const { Page } = require("../../models/page");
const Collection = require("../../models/collection");
const util = require("../../lib/util");

// Fetch public pages user has published
exports.fetchPages = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username }).select("_id");

    const results = await Page.find({
      author: user.id,
      status: "published",
      type: "public",
    })
      .select(
        "type url author status date cropedPhoto contents.title contents.briefDes"
      )
      .sort({ date: -1 });

    const pages = results.map((p) => {
      return {
        id: p.id,
        type: p.type,
        url: p.url,
        author: p.author,
        status: "published",
        date: util.timeSince(p.date),
        photo: p.cropedPhoto.secure_url,
        title: p.contents.title,
        briefDes: p.contents.briefDes,
      };
    });

    res.send({ pages: pages.length ? pages : null });
  } catch (e) {
    console.error(e);
    res.send(500).send({ message: "Internal Server Error" });
  }
};

// Fetch collections user has created and shared
exports.fetchCollections = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username }).select("_id");

    res.send(user.id);
  } catch (e) {
    console.error(e);
    res.send(500).send({ message: "Internal Server Error" });
  }
};
