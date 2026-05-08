import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { PAGE_STATUS } from "../../database/types.js";
import { timeSince } from "../../lib/util.js";
import { PublicProfileAPI } from "@pagser/common";

// Fetch published pages for a public user profile
const fetchPages = async (req: Request, res: Response) => {
  const username = req.params.username;

  const pages = await DB.findMany<any>(
    `
    SELECT
      pages.id,
      pages.url,
      page_types.type,
      pages.title,
      pages.brief_description,
      pages.cropped_photo_url,
      pages.created_at,
      users.username,
      json_build_object(
        'title', pages.title,
        'briefDes', pages.brief_description
      ) as contents
    FROM pages
    JOIN users ON pages.user_id = users.id
    JOIN page_types ON pages.type_id = page_types.id
    WHERE users.username = $1 AND pages.status_id = $2 AND page_types.type = 'public'
    ORDER BY pages.created_at DESC
    `,
    [username, PAGE_STATUS.publishedId],
  );

  const formattedPages = (pages || []).map((page: any) => ({
    id: page.id,
    type: page.type,
    url: page.url,
    author: {
      username: page.username,
    },
    date: timeSince(page.created_at),
    photo_url: page.cropped_photo_url || null,
    contents: page.contents,
  }));

  const body: PublicProfileAPI.FetchPagesResponse = { pages: formattedPages };
  res.json(body);
};

// Fetch shared collections for a public user profile
const fetchCollections = async (req: Request, res: Response) => {
  const username = req.params.username;

  const collections = await DB.findMany<any>(
    `
    SELECT
      collections.id,
      collections.name,
      collections.description,
      collections.photo_url,
      users.username,
      (SELECT COUNT(*) FROM collection_pages WHERE collection_id = collections.id) as page_count
    FROM collections
    JOIN users ON collections.user_id = users.id
    WHERE users.username = $1 AND collections.shared = true
    ORDER BY collections.created_at DESC
    `,
    [username],
  );

  const formattedCollections = (collections || []).map((col: any) => ({
    id: col.id,
    name: col.name,
    description: col.description,
    photo: col.photo_url ? { secure_url: col.photo_url } : null,
    pageCount: parseInt(col.page_count || "0"),
    user: {
      username: col.username,
    },
  }));

  const body: PublicProfileAPI.FetchCollectionsResponse = { collections: formattedCollections };
  res.json(body);
};

const controller = {
  fetchPages,
  fetchCollections,
};

export default controller;
