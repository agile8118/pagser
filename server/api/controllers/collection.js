const Collection = require("../../models/collection");
const User = require("../../models/user");

// Create a collection
exports.create = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;

    const cl = await Collection.create({
      name,
      description,
      user: req.user.id,
    });

    res.send({ message: "success", collection: cl });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch collections user has created and saved ones
exports.fetchCreatedAndSaved = async (req, res) => {
  try {
    const createdCollections = await Collection.find({
      user: req.user.id,
    }).sort({ date: -1 });

    const { savedCollections } = await User.findById(req.user.id)
      .select("savedCollections")
      .populate({
        path: "savedCollections",
        populate: { path: "user", select: "name" },
      });

    const sc = savedCollections.filter((item) => item.shared);

    res.send({
      createdCollections,
      savedCollections: sc,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch collections user has created
exports.fetchCreated = async (req, res) => {
  try {
    const sortBy = req.query.sortBy;

    const collections = await Collection.find({ user: req.user.id });

    if (sortBy === "date-created")
      collections.sort((a, b) => {
        return a.date < b.date;
      });

    if (sortBy === "a-z")
      collections.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });

    res.send({ collections, sortBy });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch user created collections for add to collection modal
exports.fetchCreatedFAP = async (req, res) => {
  const results = await Collection.find({ user: req.user.id })
    .select("name pages")
    .sort({ date: -1 });

  const collections = results.map((cl) => {
    return {
      id: cl._id,
      name: cl.name,
      selected: cl.pages.indexOf(req.params.pageId) > -1,
    };
  });

  res.send({ collections });
};

// Fetch collections user has saved
exports.fetchSaved = async (req, res) => {
  try {
    const { savedCollections } = await User.findById(req.user.id)
      .select("savedCollections")
      .populate({
        path: "savedCollections",
        populate: { path: "user", select: "name" },
      });

    const sc = savedCollections.filter((item) => item.shared);

    res.send({
      collections: sc,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch the data of one collection
exports.fetchOne = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate([
      {
        path: "user",
        select: "name",
      },
      {
        path: "pages",
        select: "type url cropedPhoto contents.title contents.briefDes",
        model: "Page",
        populate: {
          path: "author",
          select: "username",
          model: "User",
        },
      },
    ]);

    // Determine the status of the viewer
    const userId = res.locals.userId;
    let viewer;
    let btn;
    if (userId && collection.user.id !== userId) {
      viewer = "authenticated";
      const { savedCollections } = await User.findById(
        userId,
        "savedCollections"
      );
      btn = savedCollections.indexOf(req.params.id) > -1 ? "remove" : "save";
    }
    if (!userId) viewer = "spectator";
    if (collection.user.id === userId) {
      viewer = "owner";
      btn = collection.shared ? "stop-sharing" : "share";
    }

    res.send({ collection, viewer, btn });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Add or remove the page from the selected collection
exports.AddRemovePage = async (req, res) => {
  const pageId = req.params.pageId;
  const clId = req.params.id;
  let selected;

  const cl = await Collection.findById(clId, "pages name");
  if (cl.pages.indexOf(pageId) > -1) {
    // Remove from collection
    await Collection.findByIdAndUpdate(clId, { $pull: { pages: pageId } });
    selected = false;
  } else {
    // Add to collection
    await Collection.findByIdAndUpdate(clId, { $push: { pages: pageId } });
    selected = true;
  }

  res.send({ message: "success", selected, clName: cl.name });
};

// Save or remove a collection created by others to user library
exports.toggleLibrary = async (req, res) => {
  const clId = req.params.id;

  const { savedCollections } = await User.findById(
    req.user.id,
    "savedCollections"
  );

  if (savedCollections.indexOf(clId) > -1) {
    // Remove from library
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { savedCollections: clId },
    });
    return res.send({ message: "success", status: "removed" });
  } else {
    // Add to library
    await User.findByIdAndUpdate(req.user.id, {
      $push: { savedCollections: clId },
    });
    return res.send({ message: "success", status: "added" });
  }
};

// Make the collection either public or private
exports.sharing = async (req, res) => {
  const { shared } = await Collection.findById(req.params.id, "shared");

  await Collection.findByIdAndUpdate(req.params.id, { shared: !shared });
  res.send({ message: "success", sharing: !shared });
};
