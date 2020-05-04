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

    res.send({
      createdCollections,
      savedCollections,
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
        return a.name.toLowerCase() > b.name.toLowerCase();
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

    res.send({
      collections: savedCollections,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};

// Fetch the data of one collection
exports.fetchOne = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    res.send({ collection });
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
