import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import sendEmail from "../services/mailgun";
import { tokenForUser, handleServerError, cleanHTML } from "../../lib/util";
import { DB } from "../../database";
import { IPage, IPageType } from "../../database/types";
import keys from "../../config/keys";

// Update or create a draft page
const updateDraftPageData = async (req: Request, res: Response) => {
  res.send("OK!");
  const pageId = req.params.id;
  const stage = req.params.stage;
  const page = req.body.page;

  // grab the page type id from the database
  const pageType = await DB.find<IPageType>(
    "SELECT id, name FROM page_types WHERE type = $1",
    [page.type]
  );

  if (!pageType) return handleServerError("Page type not found.", res);

  // handle the initial step
  const initialStepHandler = async () => {
    try {
      const result = await DB.find<IPage>(
        `SELECT id FROM pages WHERE id = $1`,
        [pageId]
      );

      if (result) {
        // update the page
        await DB.update<IPage>("pages", { type_id: pageType.id }, "id = $1", [
          pageId,
        ]);
        res.status(200).send({ id: result.id, message: "updated" });
      } else {
        // create a page as a draft page
        const newPage = await DB.insert<IPage>("pages", {
          type_id: pageType.id,
          // @ts-ignore
          user_id: parseInt(req.user.id),
        });

        res.status(201).send({ id: newPage.id, message: "created" });
      }
    } catch (e) {
      handleServerError(e, res);
    }
  };

  // handle the page contents step
  const pageContentsHandler = async () => {
    try {
      // update the page contents
      const result = await DB.update<IPage>(
        "pages",
        {
          title: page.contents.title,
          brief_description: page.contents.briefDes,
          body: cleanHTML(page.contents.body),
          targets: page.contents.targets || "",
        },
        "id = $1",
        [pageId]
      );

      res.status(200).send({ id: result.id, message: "updated" });
    } catch (e) {
      handleServerError(e, res);
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
      const result = await DB.update<IPage>(
        "pages",
        {
          url: page.type === "private" ? page.url : "", // We don't want to update the url if the type is public
          anonymously: page.configurations.anonymously,
          comments_disabled: page.configurations.comments,
          ratings_disabled: page.configurations.rating,
          links_disabled: page.configurations.links,
        },
        "id = $1",
        [pageId]
      );
      res.status(200).send({ id: result.id, message: "updated" });
    } catch (e) {
      handleServerError(e, res);
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
};

const controller = {
  updateDraftPageData,
};

export default controller;
