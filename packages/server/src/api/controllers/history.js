const History = require("../../models/history");
const util = require("../../lib/util");

// Remove pages from user's reading history
exports.remove = async (req, res) => {
  try {
    const pageIds = req.body.ids;

    await History.deleteMany({
      user: req.user.id,
      page: {
        $in: pageIds,
      },
    });

    res.send({ message: "success" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch users's reading history pages
exports.fetch = async (req, res) => {
  try {
    const filterBy = req.query.filterBy;

    const results = await History.find({ user: req.user.id })
      .select("page date")
      .sort({ date: -1 })
      .populate({
        path: "page",
        select: "type url cropedPhoto contents.title contents.briefDes",
        model: "Page",
        populate: {
          path: "author",
          select: "username",
          model: "User",
        },
      });

    let pages = results.map((i) => {
      return {
        id: i.page._id,
        type: i.page.type,
        dateVisited: util.timeSince(i.date),
        author: i.page.author,
        url: i.page.url,
        photo: i.page.cropedPhoto,
        contents: i.page.contents,
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
