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
  app.route("get", "/home", (req: Request, res: Response) => {
    res.render("main");
  });

  app.route("get", "/feed/*", (req: Request, res: Response) => {
    res.render("main");
  });

  app.route("get", "/u/*", (req: Request, res: Response) => {
    res.render("main");
  });

  app.route("get", "/collection/:id", (req: Request, res: Response) => {
    res.render("main");
  });

  const renderPublicProfile = async (req: Request, res: Response) => {
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

  app.route("get", "/login", (req: Request, res: Response) => {
    res.render("auth");
  });

  app.route("get", "/register", (req: Request, res: Response) => {
    res.render("auth");
  });

  app.route("get", "/forgot-password", (req: Request, res: Response) => {
    res.render("auth");
  });

  app.route("get", "/verify-email", (req: Request, res: Response) => {
    res.render("auth");
  });

  app.route("get", "/new-page/*", (req: Request, res: Response) => {
    res.render("new-page");
  });

  app.route("get", "/new-page", (req: Request, res: Response) => {
    res.render("new-page");
  });

  // render a public page
  app.route("get", "/public-pages/:url", async (req: Request, res: Response) => {
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

  app.route("get", "/public-pages/:url/edit", (req: Request, res: Response) => {
    res.render("edit-page");
  });

  app.route("get", "/settings", (req: Request, res: Response) => {
    res.render("profile");
  });

  app.route("get", "/profile", (req: Request, res: Response) => {
    res.render("profile");
  });

  // render a private page
  app.route("get", "/:username/:url", (req: Request, res: Response) => {
    res.render("show-page/private");
  });

  app.route("get", "/:username/:url/edit", (req: Request, res: Response) => {
    res.render("edit-page");
  });

  app.route("get", "/admin/pages/*", (req: Request, res: Response) => {
    res.render("admin");
  });

  app.route("get", "/privacy-policy", (req: Request, res: Response) => {
    res.render("privacy-policy");
  });

  app.route("get", "/terms-of-use", (req: Request, res: Response) => {
    res.render("terms-of-use");
  });

  // app.route("get", "*", (req: Request, res: Response) => {
  //   res.json({ message: "Page Not Found!" });
  // });
};
