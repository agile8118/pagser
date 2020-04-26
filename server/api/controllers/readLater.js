const ReadLater = require("../../models/readLater");
const mongoose = require("mongoose");

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

// Remove pages from user's read later list
exports.remove = async (req, res) => {
  try {
    const pageIds = req.body.ids;

    await ReadLater.deleteMany({
      user: req.user.id,
      page: {
        $in: pageIds,
      },
    });

    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch users's read later pages
exports.fetch = async (req, res) => {
  try {
    const sortBy = req.query.sortBy;
    const filterBy = req.query.filterBy;

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

    let pages = results.map((i) => {
      return {
        id: i.page._id,
        type: i.page.type,
        dateAdded: i.date,
        datePublished: i.page.date,
        author: i.page.author,
        url: i.page.url,
        photo: i.page.cropedPhoto,
        contents: i.page.contents,
      };
    });

    if (sortBy === "date-added-asc")
      pages.sort((a, b) => {
        return a.dateAdded < b.dateAdded;
      });

    if (sortBy === "date-added-desc")
      pages.sort((a, b) => {
        return a.dateAdded > b.dateAdded;
      });

    if (sortBy === "date-published-asc")
      pages.sort((a, b) => {
        return a.datePublished < b.datePublished;
      });

    if (sortBy === "date-published-desc")
      pages.sort((a, b) => {
        return a.datePublished > b.datePublished;
      });

    if (filterBy === "public") pages = pages.filter((i) => i.type === "public");

    if (filterBy === "private")
      pages = pages.filter((i) => i.type === "private");

    res.send({ results: pages, sortBy, filterBy });
  } catch (e) {
    res.status(500).send({ message: "Internal server error." });
  }
};
