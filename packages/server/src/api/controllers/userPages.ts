import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import {
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { DB } from "../../database/index.js";
import {
  PAGE_STATUS,
  PAGE_TYPE,
  IPage,
  IAttachFile,
} from "../../database/types.js";
import { timeSince } from "../../lib/util.js";
import { UserPagesAPI } from "@pagser/common";
import {
  storageClient as s3Client,
  storageBucket,
} from "../services/storage.js";

// Removes a page's S3/R2 objects (photo, cropped photo, body images, attach
// files) and its attach_files/tags rows, which would otherwise FK-block the
// page row's deletion.
const cleanupPageFiles = async (pageId: number) => {
  const page = await DB.find<IPage>(
    `SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1`,
    [pageId],
  );

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
    page?.photo_key
      ? s3Client
          .send(
            new DeleteObjectCommand({
              Bucket: storageBucket,
              Key: page.photo_key,
            }),
          )
          .catch(() => {})
      : Promise.resolve(),
    page?.cropped_photo_key
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
};

// Fetch published pages for the current user
const fetchPublishedPages = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const filterBy = (req.query.filterBy || "all") as string;

  let query = `
    SELECT
      pages.id,
      pages.url,
      page_types.type,
      pages.title,
      pages.brief_description,
      pages.cropped_photo_url,
      json_build_object(
        'title', pages.title,
        'briefDes', pages.brief_description
      ) as contents,
      users.username
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

  const formattedPages = (pages || []).map((page: any) => ({
    id: page.id,
    url: page.url,
    type: page.type,
    contents: page.contents,
    photo_url: page.cropped_photo_url || null,
    author: {
      username: page.username,
    },
  }));

  const body: UserPagesAPI.FetchPublishedPagesResponse = { results: formattedPages, filterBy };
  res.json(body);
};

// Fetch draft pages for the current user
const fetchDraftPages = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const pages = await DB.findMany<any>(
    `
    SELECT id, title, brief_description, updated_at
    FROM pages
    WHERE user_id = $1 AND status_id = $2 AND title IS NOT NULL
    ORDER BY updated_at DESC
    `,
    [userId, PAGE_STATUS.draftId],
  );

  const formattedPages = (pages || []).map((page: any) => ({
    id: page.id,
    contents: {
      title: page.title,
      briefDes: page.brief_description,
    },
    updatedAt: timeSince(page.updated_at),
  }));

  const body: UserPagesAPI.FetchDraftPagesResponse = { results: formattedPages };
  res.json(body);
};

// Delete draft pages for the current user
const deleteDraftPages = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw { status: 400, message: "Invalid ids array" };
  }

  const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");

  const matched = await DB.findMany<IPage>(
    `SELECT id FROM pages WHERE id IN (${placeholders}) AND user_id = $${ids.length + 1} AND status_id = $${ids.length + 2}`,
    [...ids, userId, PAGE_STATUS.draftId],
  );

  for (const page of matched) {
    await cleanupPageFiles(Number(page.id));
  }

  const query = `
    DELETE FROM pages
    WHERE id IN (${placeholders}) AND user_id = $${ids.length + 1} AND status_id = $${ids.length + 2}
  `;

  await DB.query(query, [...ids, userId, PAGE_STATUS.draftId]);

  const bodyDraft: UserPagesAPI.DeleteDraftPagesResponse = { message: "success" };
  res.json(bodyDraft);
};

// Delete published pages for the current user (bulk)
const deletePublishedPages = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw { status: 400, message: "Invalid ids array" };
  }

  const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");

  const matched = await DB.findMany<IPage>(
    `SELECT id FROM pages WHERE id IN (${placeholders}) AND user_id = $${ids.length + 1} AND status_id = $${ids.length + 2}`,
    [...ids, userId, PAGE_STATUS.publishedId],
  );

  for (const page of matched) {
    await cleanupPageFiles(Number(page.id));
  }

  const query = `
    DELETE FROM pages
    WHERE id IN (${placeholders}) AND user_id = $${ids.length + 1} AND status_id = $${ids.length + 2}
  `;

  await DB.query(query, [...ids, userId, PAGE_STATUS.publishedId]);

  const bodyPublished: UserPagesAPI.DeletePublishedPagesResponse = { message: "success" };
  res.json(bodyPublished);
};

const controller = {
  fetchPublishedPages,
  fetchDraftPages,
  deleteDraftPages,
  deletePublishedPages,
};

export default controller;
