const Views = require("../../models/views");
const jwt = require("jwt-simple");
const keys = require("../../config/keys");

// Either increment the page views of a page ot do nothing
exports.view = async (req, res) => {
  if (
    !req.session.viewStartTrack ||
    Date.now() - req.session.viewStartTrack < 10000
  ) {
    req.session.viewStartTrack = null;
    return res.send({ message: "success" });
  }

  req.session.viewStartTrack = null;

  try {
    const decoded = jwt.decode(req.headers.authorization, keys.jwtSecret);
    var userId = decoded.sub;
  } catch (e) {
    var userId = false;
  }

  try {
    const pageId = req.params.id;
    let findQuery = {};
    let updateObject = {};

    if (userId) {
      // If user is authenticated
      findQuery = {
        user: userId,
        page: pageId,
      };
      updateObject = { user: userId, page: pageId, ip: null };
    } else {
      // If user is not authenticated
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      findQuery = {
        ip,
        page: pageId,
      };
      updateObject = { user: null, page: pageId, ip };
    }

    // Find the corresponding view
    const view = await Views.findOne(findQuery);

    if (!view) {
      // Add a new view for page into the database
      await Views.create(updateObject);
    } else {
      // Update the existing view date
      await Views.findByIdAndUpdate(view.id, { date: Date.now() });
    }

    res.send({ message: "success" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal server error." });
  }
};
