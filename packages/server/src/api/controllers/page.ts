import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import sendEmail from "../services/mailgun.js";
import { tokenForUser, handleServerError, cleanHTML } from "../../lib/util.js";
import { DB } from "../../database/index.js";
import {
  IPage,
  IPageType,
  IPageStatus,
  PAGE_STATUS,
  PAGE_TYPE,
  IAttachFile,
  ITag,
} from "../../database/types.js";
import keys from "../../config/keys.js";

// Configure cloudinary
cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Create a new draft page
const newDraftPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = req.body.page;
  const STATUS = "draft";

  try {
    // grab the page type id from the database
    const pageType = await DB.find<IPageType>(
      "SELECT id, type FROM page_types WHERE type = $1",
      [page.type]
    );

    // grab the page status id from the database
    const pageStatus = await DB.find<IPageStatus>(
      "SELECT id, status FROM page_statuses WHERE status = $1",
      [STATUS]
    );

    // create a page as a draft page
    const newPage = await DB.insert<IPage>("pages", {
      type_id: pageType.id,
      status_id: pageStatus.id, // would be draft
      // @ts-ignore
      user_id: parseInt(req.user.id),
    });

    res.status(201).send({ id: newPage.id, message: "created" });
  } catch (e) {
    next(e);
  }
};

// Get the info of a draft page
const fetchDraftPageData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pageId = req.params.id;
  const stage = req.params.stage;
  const userId = req.user.id;

  try {
    // Grabbing page type
    if (stage === "initial-step") {
      // grab the page type from the database
      const page = await DB.find<IPageType>(
        `SELECT pages.id as id, page_types.type as type FROM pages 
          JOIN page_types ON pages.type_id = page_types.id 
          WHERE pages.id = $1`,
        [pageId]
      );

      if (!pageId) throw new Error("page id not found");

      res.send({ type: page.type });
    }

    // Grabbing page contents
    if (stage === "page-contents") {
      const page = await DB.find<IPage>(
        `SELECT pages.id, page_types.type as type, title, brief_description, targets, body
          FROM pages
          JOIN page_types ON pages.type_id = page_types.id WHERE pages.id = $1`,
        [pageId]
      );

      if (!page) res.status(404).send();

      res.send({ page });
    }

    // Grabbing page thumbnail photo
    if (stage === "page-thumbnail") {
      const page = await DB.find<IPage>(
        "SELECT id, cropped_photo_key, cropped_photo_url, photo_key, photo_url FROM pages WHERE id = $1",
        [pageId]
      );

      if (!page) res.status(404).send();

      res.send({ page });
    }

    // Grabbing configurations and url if applicable
    if (stage === "final-step") {
      const page = await DB.find<IPage>(
        `SELECT pages.id,
                page_types.type as type,
                anonymously,
                comments_disabled,
                ratings_disabled,
                links_disabled,
                url,
                user_id,
                users.username as user_username
                FROM pages
                JOIN page_types ON pages.type_id = page_types.id 
                JOIN users ON pages.user_id = users.id 
                WHERE pages.id = $1`,
        [pageId]
      );

      const urls = await DB.find<IPage[]>(
        `SELECT url from pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3`,
        [page.user_id, PAGE_STATUS.publishedId, PAGE_TYPE.privateId]
      );

      const tags = await DB.find<ITag[]>(
        `SELECT id, name from tags WHERE page_id = $1`,
        [pageId]
      );

      res.send({ page, urls: urls || [], tags: tags || [] });
    }
  } catch (e) {
    next(e);
  }
};

// Update or create a draft page
const updateDraftPageData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pageId = req.params.id;
  const stage = req.params.stage;
  const page = req.body.page;
  try {
    // handle the initial step
    const initialStepHandler = async () => {
      try {
        // grab the page type id from the database
        const pageType = await DB.find<IPageType>(
          "SELECT id, type FROM page_types WHERE type = $1",
          [page.type]
        );

        if (!pageType) return next({ customError: "bad data", status: 400 });

        const result = await DB.find<IPage>(
          `SELECT id FROM pages WHERE id = $1`,
          [pageId]
        );

        // update the page
        await DB.update<IPage>("pages", { type_id: pageType.id }, "id = $2", [
          pageId,
        ]);
        res.status(200).send({ id: result.id, message: "updated" });
      } catch (e) {
        next(e);
      }
    };

    // handle the page contents step
    const pageContentsHandler = async () => {
      try {
        // update the page contents
        await DB.update(
          "pages",
          {
            title: page.contents.title,
            brief_description: page.contents.briefDes,
            body: cleanHTML(page.contents.body),
            targets: page.contents.targets || "",
          },
          "id = $5",
          [pageId]
        );

        res.status(200).send({ id: pageId, message: "updated" });
      } catch (e) {
        next(e);
      }
    };

    // handle the final step
    const finalStepHandler = async () => {
      try {
        // handle tags
        if (page.type === "public") {
          // delete all the tags associated with this draft page
          await DB.delete("tags", "page_id = $1", [pageId]);

          // once the old tags are removed, insert the new ones
          await DB.query(
            "INSERT INTO tags(page_id, name) VALUES($1, UNNEST(ARRAY$2))",
            [pageId, ["tag1", "tag2"]]
          );
        }

        // update the page
        await DB.update<IPage>(
          "pages",
          {
            url: page.type === "private" ? page.url : "", // We don't want to update the url if the type is public
            anonymously: page.configurations.anonymously,
            comments_disabled: page.configurations.comments,
            ratings_disabled: page.configurations.rating,
            links_disabled: page.configurations.links,
          },
          "id = $6",
          [pageId]
        );
        res.status(200).send({ id: pageId, message: "updated" });
      } catch (e) {
        next(e);
      }
    };

    switch (stage) {
      case "initial-step":
        initialStepHandler();
        break;
      case "page-contents":
        pageContentsHandler();
        break;
      case "final-step":
        finalStepHandler();
        break;
      default:
        res.status(404).send("draft page not founded");
    }
  } catch (e) {
    next(e);
  }
};

// Remove page photo from a published or draft page
const removePagePhoto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageId = req.params.id;

    // Grab the existing photo keys from database
    const { photo_key, cropped_photo_key } = await DB.find<IPage>(
      "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
      [pageId]
    );

    // Remove photos from cloudinary
    photo_key && (await cloudinary.uploader.destroy(photo_key));
    cropped_photo_key && (await cloudinary.uploader.destroy(cropped_photo_key));

    // Remove photo urls from database
    await DB.update<IPage>(
      "pages",
      {
        photo_key: "",
        photo_url: "",
        cropped_photo_url: "",
        cropped_photo_key: "",
      },
      "id = $5",
      [pageId]
    );

    res.send({ message: "photo removed" });
  } catch (e) {
    next(e);
  }
};

// Get a list of attach file for a page
const getAttachFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageId = req.params.id;

    const attachFiles = await DB.find<IAttachFile[]>(
      `SELECT id, key as name, url FROM attach_files WHERE page_id = $1`,
      [pageId]
    );

    res.send({ attachFiles: attachFiles || [] });
  } catch (e) {
    next(e);
  }
};

const controller = {
  newDraftPage,
  fetchDraftPageData,
  updateDraftPageData,
  removePagePhoto,
  getAttachFiles,
};

export default controller;
