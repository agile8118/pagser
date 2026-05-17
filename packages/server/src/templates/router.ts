import path from "path";
import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../database/index.js";
import { timeSince } from "../lib/util.js";
import { PAGE_TYPE } from "../database/types.js";
import { USER_PLACEHOLDER_IMAGE } from "@pagser/common";

const renderDir = new URL("../../public/render", import.meta.url).pathname;
const publicPath = new URL("../../public", import.meta.url).pathname;

function getPath(name: string) {
  return path.join(renderDir, name);
}

const redirectToLogin = (res: Response) => {
  res.setHeader("Set-Cookie", "loginMessage=Please log in to access this page.; Path=/; Max-Age=60; SameSite=Strict");
  res.writeHead(302, { Location: "/login" });
  res.end();
};

const requireTemplateAuth = async (req: Request, res: Response, next: Function) => {
  const token = req.signedCookies?.token as string | undefined;
  if (token) {
    const result = await req.verifyToken(token);
    if (result) return next();
  }
  redirectToLogin(res);
};

export default (app: Cpeak) => {
  app.route("get", "/", async (req: Request, res: Response) => {
    const token = req.signedCookies?.token as string | false;
    if (token) {
      const result = await req.verifyToken(token as string);
      if (result) {
        res.writeHead(302, { Location: "/home" });
        res.end();
        return;
      }
    }
    return res.sendFile(
      path.join(publicPath, "./landing/index.html"),
      "text/html",
    );
  });

  app.route("get", "/home", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-main",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="main"></div>',
    });
  });

  app.route("get", "/feed/*", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-main",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="main"></div>',
    });
  });

  app.route("get", "/u/*", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-main",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="main"></div>',
    });
  });

  app.route("get", "/collection/:id", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-main",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="main"></div>',
    });
  });

  const renderPublicProfile = async (req: Request, res: Response) => {
    try {
      const user = await DB.find<any>(
        `SELECT name, username, headline, biography, photo_url,
                links_website, links_facebook, links_youtube, links_twitter, links_linkedin
         FROM users WHERE username = $1`,
        [req.params.username],
      );
      if (!user)
        return res.status(404).render(getPath("404.html"), {
          pageTitle: "Page Not Found | Pagser",
          metaDescription: "",
        });

      const linksHtml = [
        user.links_website
          ? `<a href="${user.links_website}" target="_blank" class="btn-i btn-i-blue"><i class="fa fa-globe" aria-hidden="true"></i></a>`
          : "",
        user.links_linkedin
          ? `<a href="https://linkedin.com/${user.links_linkedin}" target="_blank" class="btn-i btn-i-blue"><i class="fa fa-linkedin" aria-hidden="true"></i></a>`
          : "",
        user.links_twitter
          ? `<a href="https://twitter.com/${user.links_twitter}" target="_blank" class="btn-i btn-i-blue"><i class="fa fa-twitter" aria-hidden="true"></i></a>`
          : "",
        user.links_youtube
          ? `<a href="https://youtube.com/${user.links_youtube}" target="_blank" class="btn-i btn-i-blue"><i class="fa fa-youtube" aria-hidden="true"></i></a>`
          : "",
        user.links_facebook
          ? `<a href="https://facebook.com/${user.links_facebook}" target="_blank" class="btn-i btn-i-blue"><i class="fa fa-facebook" aria-hidden="true"></i></a>`
          : "",
      ].join("");

      return res.render(getPath("public-profile.html"), {
        pageTitle: `${user.name} - ${user.headline} | Pagser`,
        metaDescription: user.biography || "",
        name: user.name || "",
        headline: user.headline || "",
        biography: user.biography || "",
        photoUrl: user.photo_url || USER_PLACEHOLDER_IMAGE,
        photoFallback: USER_PLACEHOLDER_IMAGE,
        linksHtml,
      });
    } catch (e) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  app.route("get", "/users/:username", renderPublicProfile);
  app.route("get", "/users/:username/pages", renderPublicProfile);
  app.route("get", "/users/:username/collections", renderPublicProfile);

  app.route("get", "/login", async (req: Request, res: Response) => {
    const token = req.signedCookies?.token as string | false;
    if (token) {
      const result = await req.verifyToken(token as string);
      if (result) {
        res.redirect("/home");
        return;
      }
    }
    return res.render(getPath("auth.html"), {
      pageTitle: "Create Account | Pagser",
      metaDescription: "",
    });
  });

  app.route("get", "/register", async (req: Request, res: Response) => {
    const token = req.signedCookies?.token as string | false;
    if (token) {
      const result = await req.verifyToken(token as string);
      if (result) {
        res.redirect("/home");
        return;
      }
    }
    return res.render(getPath("auth.html"), {
      pageTitle: "Create Account | Pagser",
      metaDescription: "",
    });
  });

  app.route("get", "/forgot-password", (req: Request, res: Response) => {
    return res.render(getPath("auth.html"), {
      pageTitle: "Create Account | Pagser",
      metaDescription: "",
    });
  });

  app.route("get", "/verify-email", (req: Request, res: Response) => {
    return res.render(getPath("auth.html"), {
      pageTitle: "Create Account | Pagser",
      metaDescription: "",
    });
  });

  app.route("get", "/new-page/*", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Create a page | Pagser",
      bodyClass: "body-new-page",
      metaDescription: "",
      reactContainer:
        '<div class="container container-big"><div class="react-container" name="new-page"></div></div>',
    });
  });

  app.route("get", "/new-page", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Create a page | Pagser",
      bodyClass: "body-new-page",
      metaDescription: "",
      reactContainer:
        '<div class="container container-big"><div class="react-container" name="new-page"></div></div>',
    });
  });

  // render a public page
  app.route(
    "get",
    "/public-pages/:url",
    async (req: Request, res: Response) => {
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

        if (!page)
          return res.render(getPath("show-page-no-page.html"), {
            pageTitle: "No Page Found | Pagser",
            metaDescription: "",
          });

        const tags = await DB.findMany<{ name: string }>(
          `SELECT name FROM tags WHERE page_id = $1`,
          [page.id],
        );

        const tagsHtml = tags
          .map((t) => `<a href="#"><span>${t.name}</span></a>`)
          .join("");

        const authorSection = page.anonymously
          ? `<p class="normal-paragraph disabled-message">This page has been created anonymously.</p>`
          : `<div id="author"></div>`;

        const ratingSection = page.ratings_disabled
          ? `<p class="normal-paragraph disabled-message">Ratings are disabled for this page.</p>`
          : `<div id="rating"></div>`;

        const commentsSection = page.comments_disabled
          ? `<p class="normal-paragraph disabled-message-comments center-content">Comments are disabled for this page.</p>`
          : `<div id="comments"></div>`;

        return res.render(getPath("show-page-public.html"), {
          pageTitle: page.title || "",
          metaDescription: page.brief_description || "",
          pageBriefDes: page.brief_description || "",
          pageTargets: page.targets || "",
          pageBody: page.body || "",
          timeAgo: timeSince(page.created_at),
          tagsHtml,
          authorSection,
          ratingSection,
          commentsSection,
        });
      } catch (e) {
        return res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  app.route("get", "/public-pages/:url/edit", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Edit Page | Pagser",
      bodyClass: "body-edit-page",
      metaDescription: "",
      reactContainer:
        '<div class="container container-big"><div class="react-container" name="edit-page"></div></div>',
    });
  });

  app.route("get", "/settings", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-profile",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="profile"></div>',
    });
  });

  app.route("get", "/profile", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-profile",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="profile"></div>',
    });
  });

  // render a private page
  app.route("get", "/:username/:url", async (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="show-private"></div>',
    });
  });

  app.route("get", "/:username/:url/edit", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Edit Page | Pagser",
      bodyClass: "body-edit-page",
      metaDescription: "",
      reactContainer:
        '<div class="container container-big"><div class="react-container" name="edit-page"></div></div>',
    });
  });

  app.route("get", "/admin/pages/*", requireTemplateAuth, (req: Request, res: Response) => {
    return res.render(getPath("app.html"), {
      pageTitle: "Pagser",
      bodyClass: "body-main",
      metaDescription: "",
      reactContainer: '<div class="react-container" name="main"></div>',
    });
  });

  app.route("get", "/privacy-policy", (req: Request, res: Response) => {
    return res.render(getPath("privacy-policy.html"), {
      pageTitle: "Privacy Policy | Pagser",
      metaDescription: "",
    });
  });

  app.route("get", "/terms-of-use", (req: Request, res: Response) => {
    return res.render(getPath("terms-of-use.html"), {
      pageTitle: "Terms of Use | Pagser",
      metaDescription: "",
    });
  });

  app.fallback((req: Request, res: Response) => {
    if (req.url?.startsWith("/api/")) {
      return res.status(404).json({ message: "API route not found." });
    }

    return res.status(404).render(getPath("404.html"), {
      pageTitle: "Page Not Found | Pagser",
      metaDescription: "",
    });
  });
};
