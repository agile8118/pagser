const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const http = require("http");
const helmet = require("helmet");
const apiRouter = require("./api/router");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const util = require("./lib/util");
const keys = require("./config/keys");

var app = express();

const publicPath = path.join(__dirname, "../public");

mongoose.connect(
  keys.mlab_url,
  {
    useMongoClient: true
  }
);

mongoose.Promise = global.Promise;

app.use(helmet());
app.use(cors());
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
    cookie: { maxAge: 180 * 60 * 1000 } // 3 hours
  })
);

apiRouter(app);

const port = process.env.PORT || 3080;

const { Page } = require("./models/page");
const { Trash } = require("./models/trash");

app.get("/public-pages", function(req, res) {
  res.render("public-pages");
});

app.get("/users/:username", function(req, res) {
  res.render("public-profile");
});

app.get("/login", function(req, res) {
  res.render("auth");
});

app.get("/register", function(req, res) {
  res.render("auth");
});

app.get("/forgotpassword", function(req, res) {
  res.render("auth");
});

app.get("/verifyemail", function(req, res) {
  res.render("auth");
});

app.get("/new-page/*", function(req, res) {
  res.render("new-page");
});

app.get("/new-page", function(req, res) {
  res.render("new-page");
});

// render a public page
app.get("/public-pages/:url", function(req, res) {
  var url = req.params.url;

  Page.findOne(
    { url },
    "contents date type tags photo configurations",
    (err, page) => {
      if (err) return res.status(500).send("error");
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
        var timeAgo = util.timeSince(page.date);
        res.render("show-page/public", { page, timeAgo });
      }
    }
  );
});

app.get("/public-pages/:url/edit", (req, res) => {
  res.render("edit-page");
});

app.get("/admin", function(req, res) {
  res.render("admin");
});

app.get("/admin/profile", function(req, res) {
  res.render("admin");
});

app.get("/admin/settings", function(req, res) {
  res.render("admin");
});

// render a specific page
app.get("/:username/:url", (req, res) => {
  res.render("show-page/specific");
});

app.get("/:username/:url/edit", (req, res) => {
  res.render("edit-page");
});

app.get("/admin/pages/*", function(req, res) {
  res.render("admin");
});

app.get("*", function(req, res) {
  res.send("Page Not Found!");
});

const server = http.createServer(app);
server.listen(port, function() {
  console.log("****************************");
  console.log("Server has started on", port);
  console.log("****************************");
});
