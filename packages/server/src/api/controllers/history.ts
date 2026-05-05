// import { Request, Response, NextFunction } from "express";

import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import { DB } from "../../database/index.js";
import { PAGE_TYPE } from "../../database/types.js";
import { timeSince } from "../../lib/util.js";

// Fetch user's reading history
const fetch = async (req: Request, res: Response, next: NextFunction) => {
  try {
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

    res.json({
      results: formattedPages,
      filterBy,
    });
  } catch (e) {
    next(e);
  }
};

// Remove pages from user's reading history
const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id;
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Invalid ids array" });
    }

    const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");
    const query = `
      DELETE FROM history
      WHERE user_id = $${ids.length + 1} AND page_id IN (${placeholders})
    `;

    await DB.query(query, [...ids, userId]);

    res.json({ message: "success" });
  } catch (e) {
    next(e);
  }
};

const controller = {
  fetch,
  remove,
};

export default controller;
