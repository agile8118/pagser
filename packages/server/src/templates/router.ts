import { Express } from "express";

export default (app: Express) => {
  app.get("/home", (req, res) => {
    res.render("main");
  });

  app.get("/feed/*", (req, res) => {
    res.render("main");
  });

  app.get("/u/*", (req, res) => {
    res.render("main");
  });

  app.get("/collection/:id", (req, res) => {
    res.render("main");
  });

  app.get("/users/:username/*", async (req, res) => {
    // try {
    //   const user = await User.findOne({ username: req.params.username }).select(
    //     "name photo links headline biography"
    //   );
    //   res.render("public-profile", { user });
    // } catch (e) {
    //   log(e);
    //   return res.status(500).send({ message: "Internal server error" });
    // }
  });

  app.get("/users/:username", async (req, res) => {
    // try {
    //   const user = await User.findOne({ username: req.params.username }).select(
    //     "name photo links headline biography"
    //   );
    //   res.render("public-profile", { user });
    // } catch (e) {
    //   log(e);
    //   return res.status(500).send({ message: "Internal server error" });
    // }
  });

  app.get("/login", (req, res) => {
    res.render("auth");
  });

  app.get("/register", (req, res) => {
    res.render("auth");
  });

  app.get("/forgot-password", (req, res) => {
    res.render("auth");
  });

  app.get("/verify-email", (req, res) => {
    res.render("auth");
  });

  app.get("/new-page/*", (req, res) => {
    res.render("new-page");
  });

  app.get("/new-page", (req, res) => {
    res.render("new-page");
  });

  // render a public page
  app.get("/public-pages/:url", async (req, res) => {
    // try {
    //   const url = req.params.url;
    //   const page = await Page.findOne(
    //     { url },
    //     "contents date type tags photo configurations"
    //   );
    //   if (!page) {
    //     Trash.findOne({ url }, "id", (err, result) => {
    //       if (err) return res.status(500).send("error");
    //       if (result) {
    //         res.render("show-page/deleted-page");
    //       } else {
    //         res.render("show-page/no-page");
    //       }
    //     });
    //   } else {
    //     const timeAgo = util.timeSince(page.date);
    //     res.render("show-page/public", { page, timeAgo });
    //   }
    // } catch (e) {
    //   log(e);
    //   return res.status(500).send({ message: "Internal server error" });
    // }
  });

  app.get("/public-pages/:url/edit", (req, res) => {
    res.render("edit-page");
  });

  app.get("/settings", (req, res) => {
    res.render("profile");
  });

  app.get("/profile", (req, res) => {
    res.render("profile");
  });

  // render a private page
  app.get("/:username/:url", (req, res) => {
    res.render("show-page/private");
  });

  app.get("/:username/:url/edit", (req, res) => {
    res.render("edit-page");
  });

  app.get("/admin/pages/*", (req, res) => {
    res.render("admin");
  });

  app.get("/privacy-policy", (req, res) => {
    res.render("privacy-policy");
  });

  app.get("/terms-of-use", (req, res) => {
    res.render("terms-of-use");
  });

  app.get("*", (req, res) => {
    res.send("Page Not Found!");
  });
};
