import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import {
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { util, validate } from "@pagser/common";
import { tokenForUser, handleServerError, cleanHTML, timeSince } from "../../lib/util.js";
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
import keys, { AWS_REGION, S3_BUCKET } from "../../config/keys.js";

const s3Client = new S3Client({ region: AWS_REGION });


// Create a new draft page
const newDraftPage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const page = req.body.page;
  const STATUS = "draft";

  try {
    // grab the page type id from the database
    const pageType = await DB.find<IPageType>(
      "SELECT id, type FROM page_types WHERE type = $1",
      [page.type],
    );

    // grab the page status id from the database
    const pageStatus = await DB.find<IPageStatus>(
      "SELECT id, status FROM page_statuses WHERE status = $1",
      [STATUS],
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
  next: NextFunction,
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
        [pageId],
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
        [pageId],
      );

      if (!page) res.status(404).send();

      res.send({ page });
    }

    // Grabbing page thumbnail photo
    if (stage === "page-thumbnail") {
      const page = await DB.find<IPage>(
        "SELECT id, cropped_photo_key, cropped_photo_url, photo_key, photo_url FROM pages WHERE id = $1",
        [pageId],
      );

      if (!page) res.status(404).send();

      res.send({ page });
    }

    // Grabbing configurations and url if applicable
    if (stage === "final-step") {
      const page = await DB.find<any>(
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
        [pageId],
      );

      const urls = await DB.findMany<IPage>(
        `SELECT url from pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3`,
        [page.user_id, PAGE_STATUS.publishedId, PAGE_TYPE.privateId],
      );

      const tags = await DB.findMany<ITag>(
        `SELECT id, name from tags WHERE page_id = $1`,
        [pageId],
      );

      res.send({ page, urls, tags });
    }
  } catch (e) {
    next(e);
  }
};

// Update or create a draft page
/** @todo: impose content length limits */
const updateDraftPageData = async (
  req: Request,
  res: Response,
  next: NextFunction,
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
          [page.type],
        );

        const result = await DB.find<IPage>(
          `SELECT id FROM pages WHERE id = $1`,
          [pageId],
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
          [pageId],
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
            "INSERT INTO tags(page_id, name) VALUES ($1, unnest($2::text[]))",
            [pageId, page.tags],
          );
        }

        // update the page
        const updateFields: Partial<IPage> = {
          anonymously: page.configurations.anonymously,
          comments_disabled: page.configurations.comments,
          ratings_disabled: page.configurations.rating,
          links_disabled: page.configurations.links,
        };
        if (page.type === "private") updateFields.url = page.url;

        const paramCount = Object.keys(updateFields).length + 1;
        await DB.update<IPage>(
          "pages",
          updateFields,
          `id = $${paramCount}`,
          [pageId],
        );
        res.status(200).send({ id: pageId, message: "updated" });
      } catch (e) {
        next(e);
      }
    };

    switch (stage) {
      case "initial-step":
        await initialStepHandler();
        break;
      case "page-contents":
        await pageContentsHandler();
        break;
      case "final-step":
        await finalStepHandler();
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
  next: NextFunction,
) => {
  try {
    const pageId = req.params.id;

    // Grab the existing photo keys from database
    const page = await DB.find<IPage>(
      "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
      [pageId],
    );

    if (!page) return next({ customError: "page was not found", status: 404 });

    // Remove photos from S3
    await Promise.all([
      page.photo_key ? s3Client.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: page.photo_key })).catch(() => {}) : Promise.resolve(),
      page.cropped_photo_key ? s3Client.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: page.cropped_photo_key })).catch(() => {}) : Promise.resolve(),
    ]);

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
      [pageId],
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
  next: NextFunction,
) => {
  try {
    const pageId = req.params.id;

    const attachFiles = await DB.findMany<IAttachFile>(
      `SELECT id, key as key, name, url FROM attach_files WHERE page_id = $1`,
      [pageId],
    );

    res.send({ attachFiles });
  } catch (e) {
    next(e);
  }
};

// Download only one attach file for a page
const getAttachFile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const pageId = req.params.id;
    const fileName = req.params.name;

    const key = `${pageId}/${fileName}`;

    res.attachment(key);
    const response = await s3Client.send(
      new GetObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
      }),
    );

    (response.Body as any).pipe(res);
  } catch (e) {
    next(e);
  }
};

// Delete only one attach file from a page
const deleteAttachFile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const pageId = req.params.id;
    const fileId = req.params.fileId;

    // Delete the attach file from database based on the file id given
    const result = await DB.delete<IAttachFile>("attach_files", "id = $1", [
      fileId,
    ]);

    // Delete the file from the S3 bucket
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: S3_BUCKET,
        Key: `${pageId}/${result.name}`,
      }),
    );

    res.send({ message: "file deleted" });
  } catch (e) {
    next(e);
  }
};

// Fetch published pages for the current user
const fetchPublishedPages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const filterBy = (req.query.filterBy || "all") as string;

    let query = `
      SELECT
        pages.id,
        pages.url,
        page_types.type,
        pages.user_id,
        pages.cropped_photo_url,
        json_build_object(
          'title', pages.title,
          'briefDes', pages.brief_description
        ) as contents,
        users.username as "authorUsername"
      FROM pages
      JOIN users ON pages.user_id = users.id
      JOIN page_types ON pages.type_id = page_types.id
      WHERE pages.user_id = $1 AND pages.status_id = $2
    `;

    const queryParams: any[] = [userId, PAGE_STATUS.publishedId];

    if (filterBy === "public") {
      query += ` AND pages.type_id = $3`;
      queryParams.push(PAGE_TYPE.publicId);
    } else if (filterBy === "private") {
      query += ` AND pages.type_id = $3`;
      queryParams.push(PAGE_TYPE.privateId);
    }

    query += ` ORDER BY pages.updated_at DESC`;

    const pages = await DB.findMany<any>(query, queryParams);

    // Format the response to match what the frontend expects
    const formattedPages = (pages || []).map((page: any) => ({
      id: page.id,
      url: page.url,
      type: page.type,
      contents: page.contents,
      photo_url: page.cropped_photo_url || null,
      author: {
        username: page.authorUsername,
      },
    }));

    res.send({
      results: formattedPages,
      filterBy,
    });
  } catch (e) {
    next(e);
  }
};

// Publish a draft page
const publish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageId = req.params.id;
    let resObj;

    const draftPage = await DB.find<any>(
      `SELECT pages.id, 
        page_types.type as type, 
        status_id, 
        url,
        title,
        brief_description,
        targets,
        body,
        users.username as author_username
        FROM pages 
        JOIN users ON users.id = pages.user_id 
        JOIN page_types ON pages.type_id = page_types.id 
        WHERE pages.id = $1`,
      [pageId],
    );

    /** @todo: validate the page */

    // If the page is private
    if (draftPage.type === PAGE_TYPE.private) {
      // Use the user-provided URL stored during the final step
      await DB.update<IPage>(
        "pages",
        { url: draftPage.url, status_id: PAGE_STATUS.publishedId },
        "id = $3",
        [pageId],
      );

      // Delete all the tags for this page (tags are only for public pages)
      await DB.delete<ITag>("tags", "page_id = $1", [pageId]);

      resObj = { url: draftPage.url, username: draftPage.author_username };
    }

    // If the page is public
    if (draftPage.type === PAGE_TYPE.public) {
      let newUrl = util.convertToUrl(draftPage.title);

      while (true) {
        const existingPage = await DB.find<IPage>(
          "SELECT id FROM pages WHERE url = $1",
          [newUrl],
        );
        if (existingPage) {
          newUrl = newUrl + "_" + crypto.randomBytes(1).toString("hex");
        } else {
          break;
        }
      }

      await DB.update<IPage>(
        "pages",
        { url: newUrl, status_id: PAGE_STATUS.publishedId },
        "id = $3",
        [pageId],
      );

      resObj = { url: newUrl, username: draftPage.author_username };
    }

    // if (
    //   !util.validatePage(draftPage, "type") ||
    //   !util.validatePage(draftPage, "contents") ||
    //   !util.validatePage(draftPage, "configurations") ||
    //   !util.validatePage(draftPage, "tags") ||
    //   !util.validatePage(draftPage, "url")
    // )
    //   return res.status(400).send({ error: "error with contents" });

    return res.status(200).send(resObj);
  } catch (e) {
    next(e);
  }
};

// Fetch public page data (for public page viewing)
const fetchPublicPageData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const url = req.params.url;
    const userId = req.user?.id;

    // Set session timestamp for view tracking
    (req.session as any).viewStartTrack = Date.now();

    const page = await DB.find<any>(
      `
      SELECT
        pages.id,
        pages.title,
        pages.brief_description,
        pages.targets,
        pages.body,
        pages.url,
        COALESCE(pages.photo_url, pages.cropped_photo_url) as page_photo_url,
        pages.created_at,
        pages.user_id,
        users.id as author_id,
        users.username,
        users.name,
        users.biography,
        users.photo_url
      FROM pages
      JOIN users ON pages.user_id = users.id
      WHERE pages.url = $1 AND pages.type_id = $2
      `,
      [url, PAGE_TYPE.publicId],
    );

    if (!page) {
      return res.status(404).send({ message: "Page not found" });
    }

    // Get subscription count
    const subCount = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
      [page.user_id],
    );

    // Get likes/dislikes count
    const likes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = true`,
      [page.id],
    );

    const dislikes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = false`,
      [page.id],
    );

    // Get attach files
    const attachFiles = await DB.findMany<any>(
      `SELECT id, name, url FROM attach_files WHERE page_id = $1`,
      [page.id],
    );

    let viewer: any = { status: "spectator", id: userId };

    if (userId) {
      viewer = { status: "authenticated", id: userId };

      if (page.user_id === parseInt(userId)) {
        viewer = { status: "owner", id: userId };
      } else {
        // Check if user has read-later
        const readLater = await DB.find<any>(
          `SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2`,
          [userId, page.id],
        );
        if (readLater) viewer.readLater = true;

        // Check if user is subscribed
        const subscribed = await DB.find<any>(
          `SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2`,
          [userId, page.user_id],
        );
        if (subscribed) viewer.subscribed = true;
      }

      // Update or create history
      const existing = await DB.find<any>(
        `SELECT id FROM history WHERE user_id = $1 AND page_id = $2`,
        [userId, page.id],
      );

      if (existing) {
        await DB.update(
          `history`,
          { updated_at: new Date() },
          `user_id = $2 AND page_id = $3`,
          [userId, page.id],
        );
      } else {
        await DB.insert(`history`, {
          user_id: parseInt(userId),
          page_id: page.id,
        });
      }
    }

    res.send({
      page: {
        id: page.id,
        contents: {
          title: page.title,
          briefDescription: page.brief_description,
          targets: page.targets,
          body: page.body,
        },
        photoUrl: page.page_photo_url || null,
        date: timeSince(page.created_at),
        likes: parseInt(likes?.count || "0"),
        dislikes: parseInt(dislikes?.count || "0"),
        attachFiles,
        author: {
          id: page.author_id,
          photoUrl: page.photo_url || null,
          name: page.name,
          username: page.username,
          biography: page.biography,
          subscribersCount: parseInt(subCount?.count || "0"),
        },
      },
      viewer,
    });
  } catch (e) {
    next(e);
  }
};

// Fetch private page data (for private page viewing)
const fetchPrivatePageData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const username = req.params.username;
    const url = req.params.url;
    const userId = req.user?.id;

    // Set session timestamp for view tracking
    (req.session as any).viewStartTrack = Date.now();

    const author = await DB.find<{ id: number }>(
      `SELECT id FROM users WHERE username = $1`,
      [username],
    );

    if (!author) {
      return res.status(404).send({ message: "User not found" });
    }

    const page = await DB.find<any>(
      `
      SELECT
        pages.id,
        pages.title,
        pages.brief_description,
        pages.targets,
        pages.body,
        pages.url,
        COALESCE(pages.photo_url, pages.cropped_photo_url) as page_photo_url,
        pages.anonymously,
        pages.comments_disabled,
        pages.ratings_disabled,
        pages.links_disabled,
        pages.created_at,
        pages.user_id,
        users.id as author_id,
        users.username,
        users.name,
        users.biography,
        users.photo_url
      FROM pages
      JOIN users ON pages.user_id = users.id
      WHERE pages.url = $1 AND pages.user_id = $2 AND pages.type_id = $3 AND pages.status_id = $4
      `,
      [url, author.id, PAGE_TYPE.privateId, PAGE_STATUS.publishedId],
    );

    if (!page) {
      return res.status(404).send({ message: "Page not found" });
    }

    // Check if user is owner
    if (page.user_id !== parseInt(userId || "0")) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Get subscriber count
    const subCount = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
      [page.user_id],
    );

    // Get likes/dislikes count
    const likes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = true`,
      [page.id],
    );

    const dislikes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = false`,
      [page.id],
    );

    // Get attach files
    const attachFiles = await DB.findMany<any>(
      `SELECT id, name, url FROM attach_files WHERE page_id = $1`,
      [page.id],
    );

    let viewer = { status: "owner", id: userId };

    // Update history
    const existing = await DB.find<any>(
      `SELECT id FROM history WHERE user_id = $1 AND page_id = $2`,
      [userId, page.id],
    );

    if (existing) {
      await DB.update(
        `history`,
        { updated_at: new Date() },
        `user_id = $2 AND page_id = $3`,
        [userId, page.id],
      );
    } else {
      await DB.insert(`history`, {
        user_id: parseInt(userId),
        page_id: page.id,
      });
    }

    res.send({
      page: {
        id: page.id,
        contents: {
          title: page.title,
          briefDescription: page.brief_description,
          targets: page.targets,
          body: page.body,
        },
        photoUrl: page.page_photo_url || null,
        configurations: {
          anonymously: page.anonymously,
          comments: page.comments_disabled,
          rating: page.ratings_disabled,
          links: page.links_disabled,
        },
        date: timeSince(page.created_at),
        likes: parseInt(likes?.count || "0"),
        dislikes: parseInt(dislikes?.count || "0"),
        attachFiles,
        author: {
          id: page.author_id,
          photoUrl: page.photo_url || null,
          biography: page.biography,
          username: page.username,
          name: page.name,
          subscribersCount: parseInt(subCount?.count || "0"),
        },
      },
      viewer,
    });
  } catch (e) {
    next(e);
  }
};

// Fetch page data for editing
const fetchEditPageData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    let page: any;

    if (req.params.username && req.params.url) {
      const username = req.params.username;
      const urlSlug = req.params.url;

      if (username === "public-pages") {
        // Public page lookup by URL slug
        page = await DB.find<any>(
          `SELECT pages.*, page_types.type
           FROM pages
           JOIN page_types ON pages.type_id = page_types.id
           WHERE pages.url = $1 AND pages.type_id = $2 AND pages.user_id = $3 AND pages.status_id = $4`,
          [urlSlug, PAGE_TYPE.publicId, userId, PAGE_STATUS.publishedId],
        );
      } else {
        // Private page lookup by username + URL slug
        const author = await DB.find<{ id: number }>(
          `SELECT id FROM users WHERE username = $1`,
          [username],
        );

        if (!author) return res.status(404).send({ message: "User not found" });
        if (author.id !== parseInt(userId)) return res.status(403).send({ message: "Unauthorized" });

        page = await DB.find<any>(
          `SELECT pages.*, page_types.type
           FROM pages
           JOIN page_types ON pages.type_id = page_types.id
           WHERE pages.url = $1 AND pages.user_id = $2 AND pages.type_id = $3 AND pages.status_id = $4`,
          [urlSlug, userId, PAGE_TYPE.privateId, PAGE_STATUS.publishedId],
        );
      }
    } else {
      // ID-based lookup (fallback)
      const pageId = req.params.id || req.query.id;
      page = await DB.find<any>(
        `SELECT pages.*, page_types.type
         FROM pages
         JOIN page_types ON pages.type_id = page_types.id
         WHERE pages.id = $1 AND pages.user_id = $2 AND pages.status_id = $3`,
        [pageId, userId, PAGE_STATUS.publishedId],
      );
    }

    if (!page) return res.status(404).send({ message: "Page not found" });

    if (page.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Fetch tags for public pages
    let tags: string[] = [];
    if (page.type === "public") {
      const tagResults = await DB.findMany<any>(
        `SELECT name FROM tags WHERE page_id = $1`,
        [page.id],
      );
      tags = tagResults.map((t: any) => t.name);
    }

    // Fetch used URLs for private pages (excluding current page's URL)
    let usedUrls: string[] = [];
    if (page.type === "private") {
      const urlResults = await DB.findMany<any>(
        `SELECT url FROM pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3 AND id != $4`,
        [userId, PAGE_STATUS.publishedId, PAGE_TYPE.privateId, page.id],
      );
      usedUrls = urlResults.map((p: any) => p.url).filter(Boolean);
    }

    res.send({
      page: {
        ...page,
        tags,
      },
      usedUrls,
    });
  } catch (e) {
    next(e);
  }
};

// Update published page
const updatePage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageId = req.params.id;
    const userId = req.user.id;
    const { page: pageData } = req.body;

    // Check ownership and get page type + current URL
    const page = await DB.find<any>(
      `SELECT pages.user_id, page_types.type, pages.url as current_url
       FROM pages
       JOIN page_types ON pages.type_id = page_types.id
       WHERE pages.id = $1`,
      [pageId],
    );

    if (!page || page.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Get username for redirect URL
    const user = await DB.find<any>(
      `SELECT username FROM users WHERE id = $1`,
      [userId],
    );

    // Build update data with content and configurations
    const updateData: Record<string, any> = {
      title: pageData.title,
      brief_description: pageData.briefDes,
      body: cleanHTML(pageData.body),
      targets: pageData.targets || "",
      anonymously: pageData.configurations?.anonymously ?? false,
      comments_disabled: pageData.configurations?.comments ?? false,
      ratings_disabled: pageData.configurations?.rating ?? false,
      links_disabled: pageData.configurations?.links ?? false,
    };

    // Allow URL change for private pages
    if (page.type === "private" && pageData.url && pageData.url !== page.current_url) {
      const urlTaken = await DB.find<any>(
        `SELECT id FROM pages WHERE url = $1 AND id != $2`,
        [pageData.url, pageId],
      );
      if (urlTaken) return res.status(400).send({ message: "URL already taken" });
      updateData.url = pageData.url;
    }

    const fieldCount = Object.keys(updateData).length;
    await DB.update("pages", updateData, `id = $${fieldCount + 1}`, [pageId]);

    // Handle tags for public pages
    if (page.type === "public" && pageData.tags) {
      await DB.delete("tags", `page_id = $1`, [pageId]);

      const tagsArray: string[] = Array.isArray(pageData.tags)
        ? pageData.tags
        : pageData.tags.split(",").filter(Boolean);

      for (const tag of tagsArray) {
        const trimmed = tag.trim();
        if (trimmed) {
          await DB.insert("tags", { page_id: parseInt(pageId), name: trimmed });
        }
      }
    }

    const finalUrl = updateData.url ?? page.current_url;

    res.send({
      url: finalUrl,
      type: page.type,
      username: user?.username,
    });
  } catch (e) {
    next(e);
  }
};

// Delete a published page
const deletePage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageId = req.params.id;
    const userId = req.user.id;

    // Check ownership
    const page = await DB.find<IPage>(
      `SELECT user_id, photo_key, cropped_photo_key FROM pages WHERE id = $1`,
      [pageId],
    );

    if (!page || page.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Delete photos from S3
    await Promise.all([
      page.photo_key ? s3Client.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: page.photo_key })).catch(() => {}) : Promise.resolve(),
      page.cropped_photo_key ? s3Client.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: page.cropped_photo_key })).catch(() => {}) : Promise.resolve(),
    ]);

    // Delete page (cascade will handle comments, ratings, read_later, history, etc.)
    await DB.delete(`pages`, `id = $1`, [pageId]);

    res.send({ message: "success" });
  } catch (e) {
    next(e);
  }
};

const controller = {
  newDraftPage,
  fetchDraftPageData,
  updateDraftPageData,
  removePagePhoto,
  getAttachFile,
  getAttachFiles,
  deleteAttachFile,
  publish,
  fetchPublishedPages,
  fetchPublicPageData,
  fetchPrivatePageData,
  fetchEditPageData,
  updatePage,
  deletePage,
};

export default controller;
