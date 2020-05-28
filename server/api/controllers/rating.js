const Rating = require("../../models/rating");

// Like or dislike a page for user
exports.ratePage = async (req, res) => {
  try {
    const rate = req.body.rate;
    const pageId = req.params.id;
    const userId = req.user.id;

    // If user cliked on like button
    if (rate === "like") {
      const rate = await Rating.findOne({ user: userId, page: pageId });
      if (rate) {
        if (rate.liked) {
          await Rating.findOneAndRemove({ user: userId, page: pageId });
        } else {
          await Rating.findOneAndUpdate(
            { user: userId, page: pageId },
            { liked: true }
          );
        }
      } else {
        await Rating.create({ user: userId, page: pageId, liked: true });
      }
    }

    // If user cliked on dislike button
    if (rate === "dislike") {
      const rate = await Rating.findOne({ user: userId, page: pageId });
      if (rate) {
        if (!rate.liked) {
          await Rating.findOneAndRemove({ user: userId, page: pageId });
        } else {
          await Rating.findOneAndUpdate(
            { user: userId, page: pageId },
            { liked: false }
          );
        }
      } else {
        await Rating.create({ user: userId, page: pageId, liked: false });
      }
    }

    // Send the number of likes and dislikes of the page to user
    const likes = await Rating.find({ page: pageId, liked: true });
    const dislikes = await Rating.find({ page: pageId, liked: false });

    res.send({
      likes: likes.length,
      dislikes: dislikes.length,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch users' liked pages
exports.fetchLikedPages = async (req, res) => {
  try {
    const filterBy = req.query.filterBy;

    const results = await Rating.find({
      user: req.user.id,
      liked: true,
      page: { $ne: null },
    })
      .select("page")
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

// Like or unlike a comment
exports.rateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const userId = req.user.id;

    const rate = await Rating.findOne({ user: userId, comment: commentId });
    if (rate) {
      if (rate.liked) {
        await Rating.findOneAndRemove({ user: userId, comment: commentId });
      } else {
        await Rating.findOneAndUpdate(
          { user: userId, comment: commentId },
          { liked: true }
        );
      }
    } else {
      await Rating.create({ user: userId, comment: commentId, liked: true });
    }

    // Send the number of likes of the comment to user
    const likes = await Rating.find({ comment: commentId, liked: true });

    res.send({
      likes: likes.length,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};
