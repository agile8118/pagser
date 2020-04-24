const ReadLater = require("../../models/readLater");

// Add/Remove a page from the read later list
exports.toggle = async (req, res) => {
  try {
    const pageId = req.params.id;
    const userId = req.user.id;

    const result = await ReadLater.findOne({ user: userId, page: pageId });

    if (result) {
      // Remove the page from the user's read later list
      await ReadLater.findOneAndRemove({
        user: userId,
        page: pageId,
      });
      res.send({ readLater: false });
    } else {
      // Add the page to the user's read later list
      await ReadLater.create({ user: userId, page: pageId });
      res.send({ readLater: true });
    }
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch users's read later pages
exports.fetch = async (req, res) => {
  try {
    const results = await ReadLater.find({ user: req.user.id })
      .select("page date")
      .populate({
        path: "page",
        select: "type url date cropedPhoto contents.title contents.briefDes",
        model: "Page",
        populate: {
          path: "author",
          select: "username",
          model: "User",
        },
      });

    res.send({ results });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};
