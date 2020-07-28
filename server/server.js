const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const http = require("http");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./api/router");
const session = require("express-session");
const log = require("./lib/log");
const MongoStore = require("connect-mongo")(session);
const util = require("./lib/util");
const keys = require("./config/keys");

var app = express();

const publicPath = path.join(__dirname, "../public");

mongoose.connect(
  process.env.NODE_ENV === "production" ? keys.mlab_url : keys.mlab_local_url,
  {
    useMongoClient: true,
  }
);

mongoose.Promise = global.Promise;

app.use(helmet());
app.use(cors({ origin: "https://pagher.com/" }));

app.use(compression());
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }, // 3 hours
  })
);

app.use((req, res, next) => {
  const requestStart = Date.now();
  // Grab requester ip address
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Once the request is finished
  res.on("finish", () => {
    // Get req status code and message
    const { statusCode, statusMessage } = res;
    // Calculate how much it took the request to finish
    const processingTime = Date.now() - requestStart;

    // Format the log message and send it to log function
    log(
      ip +
        " -- " +
        req.method +
        " " +
        req.originalUrl +
        " " +
        statusCode +
        " " +
        statusMessage +
        " -- response-time: " +
        processingTime +
        " ms"
    );
  });
  next();
});

apiRouter(app);

const port = process.env.PORT || 3080;

const { Page } = require("./models/page");
const { Trash } = require("./models/trash");
const User = require("./models/user");

app.get("/home", function (req, res) {
  res.render("main");
});

app.get("/feed/*", function (req, res) {
  res.render("main");
});

app.get("/u/*", function (req, res) {
  res.render("main");
});

app.get("/collection/:id", function (req, res) {
  res.render("main");
});

app.get("/users/:username/*", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "name photo links headline biography"
    );

    res.render("public-profile", { user });
  } catch (e) {
    log(e);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/users/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "name photo links headline biography"
    );

    res.render("public-profile", { user });
  } catch (e) {
    log(e);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/login", function (req, res) {
  res.render("auth");
});

app.get("/register", function (req, res) {
  res.render("auth");
});

app.get("/forgotpassword", function (req, res) {
  res.render("auth");
});

app.get("/verifyemail", function (req, res) {
  res.render("auth");
});

app.get("/new-page/*", function (req, res) {
  res.render("new-page");
});

app.get("/new-page", function (req, res) {
  res.render("new-page");
});

// render a public page
app.get("/public-pages/:url", async (req, res) => {
  try {
    const url = req.params.url;

    const page = await Page.findOne(
      { url },
      "contents date type tags photo configurations"
    );

    if (!page) {
      Trash.findOne({ url }, "id", (err, result) => {
        if (err) return res.status(500).send("error");
        if (result) {
          res.render("show-page/deleted-page");
        } else {
          res.render("show-page/no-page");
        }
      });
    } else {
      const timeAgo = util.timeSince(page.date);
      res.render("show-page/public", { page, timeAgo });
    }
  } catch (e) {
    log(e);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/public-pages/:url/edit", (req, res) => {
  res.render("edit-page");
});

app.get("/settings", function (req, res) {
  res.render("admin");
});

app.get("/profile", function (req, res) {
  res.render("admin");
});

// render a private page
app.get("/:username/:url", (req, res) => {
  res.render("show-page/private");
});

app.get("/:username/:url/edit", (req, res) => {
  res.render("edit-page");
});

app.get("/admin/pages/*", function (req, res) {
  res.render("admin");
});

app.get("/privacy-policy", function (req, res) {
  res.render("privacy-policy");
});

app.get("/terms-of-use", function (req, res) {
  res.render("terms-of-use");
});

app.get("*", function (req, res) {
  res.send("Page Not Found!");
});

const server = http.createServer(app);
server.listen(port, function () {
  log(
    "Starting the server..." +
      "\n----------------------------------\n" +
      "Server has started on port " +
      port +
      "\n----------------------------------"
  );
  console.log("****************************");
  console.log("Server has started on", port);
  console.log("****************************");
});
