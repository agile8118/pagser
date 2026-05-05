import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import { DB } from "../database/index.js";
import { timeSince } from "../lib/util.js";
import { PAGE_TYPE } from "../database/types.js";

export default (app: Cpeak) => {
  app.route("get", "/home", (req, res) => {
    res.render("main");
  });

  app.route("get", "/feed/*", (req, res) => {
    res.render("main");
  });

  app.route("get", "/u/*", (req, res) => {
    res.render("main");
  });

  app.route("get", "/collection/:id", (req, res) => {
    res.render("main");
  });

  const renderPublicProfile = async (req: any, res: any) => {
    try {
      const user = await DB.find<any>(
        `SELECT name, username, headline, biography, photo_url,
                links_website, links_facebook, links_youtube, links_twitter, links_linkedin
         FROM users WHERE username = $1`,
        [req.params.username],
      );
      if (!user) return res.status(404).json({ message: "User not found" });
      res.render("public-profile", {
        user: {
          ...user,
          links: {
            website: user.links_website || "",
            facebook: user.links_facebook || "",
            youtube: user.links_youtube || "",
            twitter: user.links_twitter || "",
            linkedin: user.links_linkedin || "",
          },
        },
      });
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  app.route("get", "/users/:username/*", renderPublicProfile);
  app.route("get", "/users/:username", renderPublicProfile);

  app.route("get", "/login", (req, res) => {
    res.render("auth");
  });

  app.route("get", "/register", (req, res) => {
    res.render("auth");
  });

  app.route("get", "/forgot-password", (req, res) => {
    res.render("auth");
  });

  app.route("get", "/verify-email", (req, res) => {
    res.render("auth");
  });

  app.route("get", "/new-page/*", (req, res) => {
    res.render("new-page");
  });

  app.route("get", "/new-page", (req, res) => {
    res.render("new-page");
  });

  // render a public page
  app.route("get", "/public-pages/:url", async (req, res) => {
    try {
      const url = req.params.url;

      const page = await DB.find<any>(
        `SELECT pages.id, pages.title, pages.brief_description, pages.targets, pages.body,
                pages.anonymously, pages.comments_disabled, pages.ratings_disabled,
                pages.links_disabled, pages.created_at
         FROM pages
         JOIN page_types ON pages.type_id = page_types.id
         WHERE pages.url = $1 AND pages.type_id = $2`,
        [url, PAGE_TYPE.publicId],
      );

      if (!page) return res.render("show-page/no-page");

      const tags = await DB.findMany<{ name: string }>(
        `SELECT name FROM tags WHERE page_id = $1`,
        [page.id],
      );

      res.render("show-page/public", {
        page: {
          contents: {
            title: page.title,
            briefDes: page.brief_description || "",
            targets: page.targets || "",
            body: page.body || "",
          },
          tags: tags.map((t) => t.name).join(","),
          configurations: {
            anonymously: page.anonymously,
            rating: !page.ratings_disabled,
            comments: !page.comments_disabled,
          },
        },
        timeAgo: timeSince(page.created_at),
      });
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.route("get", "/public-pages/:url/edit", (req, res) => {
    res.render("edit-page");
  });

  app.route("get", "/settings", (req, res) => {
    res.render("profile");
  });

  app.route("get", "/profile", (req, res) => {
    res.render("profile");
  });

  // render a private page
  app.route("get", "/:username/:url", (req, res) => {
    res.render("show-page/private");
  });

  app.route("get", "/:username/:url/edit", (req, res) => {
    res.render("edit-page");
  });

  app.route("get", "/admin/pages/*", (req, res) => {
    res.render("admin");
  });

  app.route("get", "/privacy-policy", (req, res) => {
    res.render("privacy-policy");
  });

  app.route("get", "/terms-of-use", (req, res) => {
    res.render("terms-of-use");
  });

  // app.route("get", "*", (req, res) => {
  //   res.json({ message: "Page Not Found!" });
  // });
};
