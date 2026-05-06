import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { PAGE_TYPE } from "../../database/types.js";
import { timeSince } from "../../lib/util.js";

// Toggle page in/out of read-later list
const toggle = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const pageId = req.params.id;

  const existing = await DB.find<any>(
    `SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2`,
    [userId, pageId],
  );

  if (existing) {
    await DB.delete(`read_later`, `user_id = $1 AND page_id = $2`, [
      userId,
      pageId,
    ]);
    res.json({ readLater: false });
  } else {
    await DB.insert(`read_later`, {
      user_id: parseInt(userId),
      page_id: parseInt(pageId),
    });
    res.json({ readLater: true });
  }
};

// Remove pages from read-later list
const remove = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw { status: 400, message: "Invalid ids array" };
  }

  const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");
  const query = `
    DELETE FROM read_later
    WHERE user_id = $${ids.length + 1} AND page_id IN (${placeholders})
  `;

  await DB.query(query, [...ids, userId]);

  res.json({ message: "success" });
};

// Fetch user's read-later list
const fetch = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const filterBy = (req.query.filterBy || "all") as string;
  const sortBy = (req.query.sortBy || "date-added-asc") as string;

  let query = `
    SELECT
      pages.id,
      pages.url,
      page_types.type,
      pages.title,
      pages.brief_description,
      pages.cropped_photo_url,
      pages.created_at as date_published,
      json_build_object(
        'title', pages.title,
        'briefDes', pages.brief_description
      ) as contents,
      users.username,
      read_later.created_at as date_added
    FROM read_later
    JOIN pages ON read_later.page_id = pages.id
    JOIN users ON pages.user_id = users.id
    JOIN page_types ON pages.type_id = page_types.id
    WHERE read_later.user_id = $1
  `;

  const queryParams: any[] = [userId];

  if (filterBy === "public") {
    query += ` AND pages.type_id = $2`;
    queryParams.push(PAGE_TYPE.publicId);
  } else if (filterBy === "private") {
    query += ` AND pages.type_id = $2`;
    queryParams.push(PAGE_TYPE.privateId);
  }

  if (sortBy === "date-added-asc") {
    query += ` ORDER BY read_later.created_at ASC`;
  } else if (sortBy === "date-added-desc") {
    query += ` ORDER BY read_later.created_at DESC`;
  } else if (sortBy === "date-published-asc") {
    query += ` ORDER BY pages.created_at ASC`;
  } else {
    query += ` ORDER BY pages.created_at DESC`;
  }

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
    dateVisited: timeSince(page.date_published),
  }));

  res.json({
    pages: formattedPages,
    sortBy,
    filterBy,
  });
};

const controller = {
  toggle,
  remove,
  fetch,
};

export default controller;
