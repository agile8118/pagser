import type { CpeakRequest as Request, CpeakResponse as Response } from "cpeak";
import crypto from "crypto";
import {
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import { util, validate, PagesAPI } from "@pagser/common";
import { cleanHTML, timeSince } from "../../lib/util.js";
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
import {
  storageClient as s3Client,
  storageBucket,
} from "../services/storage.js";

// Create a new draft page
const newDraftPage = async (req: Request, res: Response) => {
  const page = req.body.page;
  const STATUS = "draft";

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

  if (!pageType) throw { status: 400, message: "Invalid page type." };
  if (!pageStatus) throw { status: 500, message: "Page status not found." };

  // create a page as a draft page
  const newPage = await DB.insert<IPage>("pages", {
    type_id: pageType.id,
    status_id: pageStatus.id, // would be draft
    // @ts-ignore
    user_id: parseInt(req.user.id),
  });

  const body: PagesAPI.NewDraftPageResponse = {
    id: newPage.id,
    message: "created",
  };
  res.status(201).json(body);
};

// Get the info of a draft page
const fetchDraftPageData = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const stage = req.params.stage;

  // Grabbing page type
  if (stage === "initial-step") {
    const page = await DB.find<IPageType>(
      `SELECT pages.id as id, page_types.type as type FROM pages
        JOIN page_types ON pages.type_id = page_types.id
        WHERE pages.id = $1`,
      [pageId],
    );

    if (!page) throw { status: 404, message: "Page not found" };

    const r: PagesAPI.FetchDraftInitialStepResponse = { type: page.type };
    res.json(r);
    return;
  }

  // Grabbing page contents
  if (stage === "page-contents") {
    const page = await DB.find<any>(
      `SELECT pages.id, page_types.type as type, title, brief_description, targets, body
        FROM pages
        JOIN page_types ON pages.type_id = page_types.id WHERE pages.id = $1`,
      [pageId],
    );

    if (!page) throw { status: 404, message: "Page not found" };

    const r: PagesAPI.FetchDraftPageContentsResponse = { page };
    res.json(r);
    return;
  }

  // Grabbing page thumbnail photo
  if (stage === "page-thumbnail") {
    const page = await DB.find<any>(
      "SELECT id, cropped_photo_key, cropped_photo_url, photo_key, photo_url FROM pages WHERE id = $1",
      [pageId],
    );

    if (!page) throw { status: 404, message: "Page not found" };

    const r: PagesAPI.FetchDraftPageThumbnailResponse = { page };
    res.json(r);
    return;
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

    const r: PagesAPI.FetchDraftFinalStepResponse = { page, urls, tags };
    res.json(r);
  }
};

// Update or create a draft page
/** @todo: impose content length limits */
const updateDraftPageData = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const stage = req.params.stage;
  const page = req.body.page;

  switch (stage) {
    case "initial-step": {
      const pageType = await DB.find<IPageType>(
        "SELECT id, type FROM page_types WHERE type = $1",
        [page.type],
      );

      const result = await DB.find<IPage>(
        `SELECT id FROM pages WHERE id = $1`,
        [pageId],
      );

      if (!result) throw { status: 404, message: "Page not found." };
      if (!pageType) throw { status: 400, message: "Invalid page type." };

      await DB.update<IPage>("pages", { type_id: pageType.id }, "id = $2", [
        pageId,
      ]);
      const r: PagesAPI.UpdateDraftPageResponse = {
        id: result.id,
        message: "updated",
      };
      res.status(200).json(r);
      return;
    }
    case "page-contents": {
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

      const rc: PagesAPI.UpdateDraftPageResponse = {
        id: pageId,
        message: "updated",
      };
      res.status(200).json(rc);
      return;
    }
    case "final-step": {
      // handle tags
      if (page.type === "public") {
        await DB.delete("tags", "page_id = $1", [pageId]);

        await DB.query(
          "INSERT INTO tags(page_id, name) VALUES ($1, unnest($2::text[]))",
          [pageId, page.tags],
        );
      }

      // update the page
      const updateFields: Partial<IPage> = {
        anonymously: page.anonymously,
        comments_disabled: page.comments_disabled,
        ratings_disabled: page.ratings_disabled,
        links_disabled: page.links_disabled,
      };
      if (page.type === "private") updateFields.url = page.url;

      const paramCount = Object.keys(updateFields).length + 1;
      await DB.update<IPage>("pages", updateFields, `id = $${paramCount}`, [
        pageId,
      ]);
      const rf: PagesAPI.UpdateDraftPageResponse = {
        id: pageId,
        message: "updated",
      };
      res.status(200).json(rf);
      return;
    }
    default:
      throw { status: 404, message: "draft page not found" };
  }
};

// Remove page photo from a published or draft page
const removePagePhoto = async (req: Request, res: Response) => {
  const pageId = req.params.id;

  const page = await DB.find<IPage>(
    "SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1",
    [pageId],
  );

  if (!page) throw { status: 404, message: "page was not found" };

  // Remove photos from S3
  await Promise.all([
    page.photo_key
      ? s3Client
          .send(
            new DeleteObjectCommand({
              Bucket: storageBucket,
              Key: page.photo_key,
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
    page.cropped_photo_key
      ? s3Client
          .send(
            new DeleteObjectCommand({
              Bucket: storageBucket,
              Key: page.cropped_photo_key,
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
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

  const body: PagesAPI.RemovePagePhotoResponse = { message: "photo removed" };
  res.json(body);
};

// Get a list of attach file for a page
const getAttachFiles = async (req: Request, res: Response) => {
  const pageId = req.params.id;

  const attachFiles = await DB.findMany<IAttachFile>(
    `SELECT id, key as key, name, url FROM attach_files WHERE page_id = $1`,
    [pageId],
  );

  const body: PagesAPI.GetAttachFilesResponse = { attachFiles };
  res.json(body);
};

// Download only one attach file for a page
const getAttachFile = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const fileName = req.params.name;

  const key = `attach-files/${pageId}/${fileName}`;

  res.attachment(fileName);
  const response = await s3Client.send(
    new GetObjectCommand({
      Bucket: storageBucket,
      Key: key,
    }),
  );

  (response.Body as any).pipe(res);
};

// Delete only one attach file from a page
const deleteAttachFile = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const fileId = req.params.fileId;

  const result = await DB.delete<IAttachFile>("attach_files", "id = $1", [
    fileId,
  ]);

  if (!result) throw { status: 404, message: "Attach file not found." };

  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: storageBucket,
      Key: `attach-files/${pageId}/${result.name}`,
    }),
  );

  const body: PagesAPI.DeleteAttachFileResponse = { message: "file deleted" };
  res.json(body);
};

// Publish a draft page
const publish = async (req: Request, res: Response) => {
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
    await DB.update<IPage>(
      "pages",
      { url: draftPage.url, status_id: PAGE_STATUS.publishedId },
      "id = $3",
      [pageId],
    );

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
  //   throw { status: 400, message: "error with contents" };

  if (!resObj) throw { status: 400, message: "Invalid page type." };
  const body: PagesAPI.PublishPageResponse = resObj;
  res.status(200).json(body);
};

// Fetch public page data (for public page viewing)
const fetchPublicPageData = async (req: Request, res: Response) => {
  const url = req.params.url;
  const userId = req.user?.id;

  res.cookie("viewStart", String(Date.now()), {
    signed: true,
    httpOnly: true,
    maxAge: 5 * 60 * 1000,
  });

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
    WHERE pages.url = $1 AND pages.type_id = $2
    `,
    [url, PAGE_TYPE.publicId],
  );

  if (!page) throw { status: 404, message: "Page not found" };

  // Get subscription count
  const subCount = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
    [page.user_id],
  );

  const likes = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = true`,
    [page.id],
  );

  const dislikes = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = false`,
    [page.id],
  );

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
      const readLater = await DB.find<any>(
        `SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2`,
        [userId, page.id],
      );
      if (readLater) viewer.readLater = true;

      const subscribed = await DB.find<any>(
        `SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2`,
        [userId, page.user_id],
      );
      if (subscribed) viewer.subscribed = true;
    }

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

  const body: PagesAPI.FetchPublicPageResponse = {
    page: {
      id: page.id,
      contents: {
        title: page.title,
        briefDescription: page.brief_description,
        targets: page.targets,
        body: page.body,
      },
      photoUrl: page.page_photo_url || null,
      anonymously: page.anonymously,
      comments_disabled: page.comments_disabled,
      ratings_disabled: page.ratings_disabled,
      links_disabled: page.links_disabled,
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
  };
  res.json(body);
};

// Fetch private page data (for private page viewing)
const fetchPrivatePageData = async (req: Request, res: Response) => {
  const username = req.params.username;
  const url = req.params.url;
  const userId = req.user?.id;

  res.cookie("viewStart", String(Date.now()), {
    signed: true,
    httpOnly: true,
    maxAge: 5 * 60 * 1000,
  });

  const author = await DB.find<{ id: number }>(
    `SELECT id FROM users WHERE LOWER(username) = LOWER($1)`,
    [username],
  );

  if (!author) throw { status: 404, message: "User not found" };

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

  if (!page) throw { status: 404, message: "Page not found" };

  const subCount = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
    [page.user_id],
  );

  const likes = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = true`,
    [page.id],
  );

  const dislikes = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = false`,
    [page.id],
  );

  const attachFiles = await DB.findMany<any>(
    `SELECT id, name, url FROM attach_files WHERE page_id = $1`,
    [page.id],
  );

  const isOwner = userId && page.user_id === parseInt(userId);
  let viewer: PagesAPI.Viewer = isOwner
    ? { status: "owner", id: userId }
    : userId
      ? { status: "authenticated", id: userId }
      : { status: "spectator", id: undefined };

  if (userId && !isOwner) {
    const readLater = await DB.find<any>(
      `SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2`,
      [userId, page.id],
    );
    if (readLater) (viewer as any).readLater = true;

    const subscribed = await DB.find<any>(
      `SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2`,
      [userId, page.user_id],
    );
    if (subscribed) (viewer as any).subscribed = true;
  }

  if (userId) {
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

  const body: PagesAPI.FetchPrivatePageResponse = {
    page: {
      id: page.id,
      contents: {
        title: page.title,
        briefDescription: page.brief_description,
        targets: page.targets,
        body: page.body,
      },
      photoUrl: page.page_photo_url || null,
      anonymously: page.anonymously,
      comments_disabled: page.comments_disabled,
      ratings_disabled: page.ratings_disabled,
      links_disabled: page.links_disabled,
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
  };
  res.json(body);
};

// Fetch page data for editing
const fetchEditPageData = async (req: Request, res: Response) => {
  const userId = req.user.id;
  let page: any;

  if (req.params.username && req.params.url) {
    const username = req.params.username;
    const urlSlug = req.params.url;

    if (username === "public-pages") {
      page = await DB.find<any>(
        `SELECT pages.*, page_types.type
         FROM pages
         JOIN page_types ON pages.type_id = page_types.id
         WHERE pages.url = $1 AND pages.type_id = $2 AND pages.user_id = $3 AND pages.status_id = $4`,
        [urlSlug, PAGE_TYPE.publicId, userId, PAGE_STATUS.publishedId],
      );
    } else {
      const author = await DB.find<{ id: number }>(
        `SELECT id FROM users WHERE LOWER(username) = LOWER($1)`,
        [username],
      );

      if (!author) throw { status: 404, message: "User not found" };
      if (author.id !== parseInt(userId))
        throw { status: 403, message: "Unauthorized" };

      page = await DB.find<any>(
        `SELECT pages.*, page_types.type
         FROM pages
         JOIN page_types ON pages.type_id = page_types.id
         WHERE pages.url = $1 AND pages.user_id = $2 AND pages.type_id = $3 AND pages.status_id = $4`,
        [urlSlug, userId, PAGE_TYPE.privateId, PAGE_STATUS.publishedId],
      );
    }
  } else {
    const pageId = req.params.id || req.query.id;
    page = await DB.find<any>(
      `SELECT pages.*, page_types.type
       FROM pages
       JOIN page_types ON pages.type_id = page_types.id
       WHERE pages.id = $1 AND pages.user_id = $2 AND pages.status_id = $3`,
      [pageId, userId, PAGE_STATUS.publishedId],
    );
  }

  if (!page) throw { status: 404, message: "Page not found" };

  if (page.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  let tags: string[] = [];
  if (page.type === "public") {
    const tagResults = await DB.findMany<any>(
      `SELECT name FROM tags WHERE page_id = $1`,
      [page.id],
    );
    tags = tagResults.map((t: any) => t.name);
  }

  let usedUrls: string[] = [];
  if (page.type === "private") {
    const urlResults = await DB.findMany<any>(
      `SELECT url FROM pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3 AND id != $4`,
      [userId, PAGE_STATUS.publishedId, PAGE_TYPE.privateId, page.id],
    );
    usedUrls = urlResults.map((p: any) => p.url).filter(Boolean);
  }

  const body: PagesAPI.FetchEditPageResponse = {
    page: { ...page, tags },
    usedUrls,
  };
  res.json(body);
};

// Update published page
const updatePage = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const userId = req.user.id;
  const { page: pageData } = req.body;

  const page = await DB.find<any>(
    `SELECT pages.user_id, page_types.type, pages.url as current_url
     FROM pages
     JOIN page_types ON pages.type_id = page_types.id
     WHERE pages.id = $1`,
    [pageId],
  );

  if (!page || page.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const user = await DB.find<any>(`SELECT username FROM users WHERE id = $1`, [
    userId,
  ]);

  const updateData: Record<string, any> = {
    title: pageData.title,
    brief_description: pageData.briefDes,
    body: cleanHTML(pageData.body),
    targets: pageData.targets || "",
    anonymously: pageData.anonymously ?? false,
    comments_disabled: pageData.comments_disabled ?? false,
    ratings_disabled: pageData.ratings_disabled ?? false,
    links_disabled: pageData.links_disabled ?? false,
  };

  if (
    page.type === "private" &&
    pageData.url &&
    pageData.url !== page.current_url
  ) {
    const urlTaken = await DB.find<any>(
      `SELECT id FROM pages WHERE url = $1 AND id != $2`,
      [pageData.url, pageId],
    );
    if (urlTaken) throw { status: 400, message: "URL already taken" };
    updateData.url = pageData.url;
  }

  const fieldCount = Object.keys(updateData).length;
  await DB.update("pages", updateData, `id = $${fieldCount + 1}`, [pageId]);

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

  const body: PagesAPI.UpdatePageResponse = {
    url: finalUrl,
    type: page.type,
    username: user?.username,
  };
  res.json(body);
};

// Delete a published page
const deletePage = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const userId = req.user.id;

  const page = await DB.find<IPage>(
    `SELECT user_id, photo_key, cropped_photo_key FROM pages WHERE id = $1`,
    [pageId],
  );

  if (!page || page.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const attachFiles = await DB.findMany<IAttachFile>(
    `SELECT key FROM attach_files WHERE page_id = $1`,
    [pageId],
  );

  const listed = await s3Client
    .send(
      new ListObjectsV2Command({
        Bucket: storageBucket,
        Prefix: `images/body/${pageId}/`,
      }),
    )
    .catch(() => null);

  await Promise.all([
    page.photo_key
      ? s3Client
          .send(
            new DeleteObjectCommand({
              Bucket: storageBucket,
              Key: page.photo_key,
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
    page.cropped_photo_key
      ? s3Client
          .send(
            new DeleteObjectCommand({
              Bucket: storageBucket,
              Key: page.cropped_photo_key,
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
    listed?.Contents?.length
      ? s3Client
          .send(
            new DeleteObjectsCommand({
              Bucket: storageBucket,
              Delete: {
                Objects: listed.Contents.map((obj) => ({ Key: obj.Key! })),
              },
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
    attachFiles.length
      ? s3Client
          .send(
            new DeleteObjectsCommand({
              Bucket: storageBucket,
              Delete: {
                Objects: attachFiles.map((f) => ({ Key: f.key })),
              },
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
  ]);

  await DB.delete(`attach_files`, `page_id = $1`, [pageId]);
  await DB.delete(`tags`, `page_id = $1`, [pageId]);
  await DB.delete(`pages`, `id = $1`, [pageId]);

  const body: PagesAPI.DeletePageResponse = { message: "success" };
  res.json(body);
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
  fetchPublicPageData,
  fetchPrivatePageData,
  fetchEditPageData,
  updatePage,
  deletePage,
};

export default controller;
