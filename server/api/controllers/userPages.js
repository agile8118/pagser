const { Page, DraftPage } = require("../../models/page");
const User = require("../../models/user");

// Fetch the pages user has published
exports.fetchPublishedPages = async (req, res) => {
  try {
    const filterBy = req.query.filterBy;

    const user = await User.findById(req.user.id, "username");
    const results = await Page.find(
      { author: req.user.id, status: "published" },
      "type url cropedPhoto contents.title contents.briefDes"
    );

    let pages = results.map((i) => {
      return {
        id: i._id,
        type: i.type,
        author: user,
        url: i.url,
        photo: i.cropedPhoto,
        contents: i.contents,
      };
    });

    if (filterBy === "public") pages = pages.filter((i) => i.type === "public");

    if (filterBy === "private")
      pages = pages.filter((i) => i.type === "private");

    res.send({ results: pages, filterBy });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch the draft pages user has created
exports.fetchDraftPages = async (req, res) => {
  try {
    const results = await DraftPage.find(
      { author: req.user.id, status: "draft", "contents.title": { $gt: 0 } },
      "contents.title contents.briefDes"
    );

    let pages = results.map((i) => {
      return {
        id: i._id,
        contents: i.contents,
      };
    });

    res.send({ results: pages });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};

// Delete user's draft pages
exports.deleteDraftPages = async (req, res) => {
  try {
    const pageIds = req.body.ids;

    await DraftPage.deleteMany({
      author: req.user.id,
      _id: { $in: pageIds },
    });

    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};
