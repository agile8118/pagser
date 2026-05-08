import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { PAGE_TYPE } from "../../database/types.js";
import { timeSince } from "../../lib/util.js";
import { HistoryAPI } from "@pagser/common";

// Fetch user's reading history
const fetch = async (req: Request, res: Response) => {
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
      users.username,
      history.updated_at as date_visited
    FROM history
    JOIN pages ON history.page_id = pages.id
    JOIN users ON pages.user_id = users.id
    JOIN page_types ON pages.type_id = page_types.id
    WHERE history.user_id = $1
  `;

  const queryParams: any[] = [userId];

  if (filterBy === "public") {
    query += ` AND pages.type_id = $2`;
    queryParams.push(PAGE_TYPE.publicId);
  } else if (filterBy === "private") {
    query += ` AND pages.type_id = $2`;
    queryParams.push(PAGE_TYPE.privateId);
  }

  query += ` ORDER BY history.updated_at DESC`;

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
    dateVisited: timeSince(page.date_visited),
  }));

  const body: HistoryAPI.FetchHistoryResponse = { results: formattedPages, filterBy };
  res.json(body);
};

// Remove pages from user's reading history
const remove = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw { status: 400, message: "Invalid ids array" };
  }

  const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");
  const query = `
    DELETE FROM history
    WHERE user_id = $${ids.length + 1} AND page_id IN (${placeholders})
  `;

  await DB.query(query, [...ids, userId]);

  const body: HistoryAPI.RemoveHistoryResponse = { message: "success" };
  res.json(body);
};

const controller = {
  fetch,
  remove,
};

export default controller;
