import { Request, Response, NextFunction } from "express";
import { DB } from "../../database/index.js";
import { PAGE_TYPE } from "../../database/types.js";

// Rate a page (like/dislike toggle)
const ratePage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id;
    const pageId = req.params.id;
    const { rate } = req.body;

    if (!["like", "dislike"].includes(rate)) {
      return res.status(400).send({ message: "Invalid rate value" });
    }

    const liked = rate === "like";

    // Check if user has already rated this page
    const existing = await DB.find<any>(
      `SELECT id, liked FROM ratings WHERE user_id = $1 AND page_id = $2`,
      [userId, pageId]
    );

    if (existing) {
      if (existing.liked === liked) {
        // Same vote exists, remove it
        await DB.delete(`ratings`, `user_id = $1 AND page_id = $2`, [
          userId,
          pageId,
        ]);
      } else {
        // Opposite vote exists, flip it
        await DB.update(
          `ratings`,
          { liked },
          `user_id = $2 AND page_id = $3`,
          [userId, pageId]
        );
      }
    } else {
      // No vote exists, create one
      await DB.insert(`ratings`, {
        user_id: parseInt(userId),
        page_id: parseInt(pageId),
        liked,
      });
    }

    // Get updated counts
    const likes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = true`,
      [pageId]
    );

    const dislikes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE page_id = $1 AND liked = false`,
      [pageId]
    );

    res.send({
      likes: parseInt(likes?.count || "0"),
      dislikes: parseInt(dislikes?.count || "0"),
    });
  } catch (e) {
    next(e);
  }
};

// Rate a comment (like only)
const rateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const commentId = req.params.id;

    // Check if user has already liked this comment
    const existing = await DB.find<any>(
      `SELECT id FROM ratings WHERE user_id = $1 AND comment_id = $2 AND liked = true`,
      [userId, commentId]
    );

    if (existing) {
      // Unlike
      await DB.delete(`ratings`, `user_id = $1 AND comment_id = $2`, [
        userId,
        commentId,
      ]);
    } else {
      // Check if there's a dislike and flip to like, otherwise create like
      const dislike = await DB.find<any>(
        `SELECT id FROM ratings WHERE user_id = $1 AND comment_id = $2 AND liked = false`,
        [userId, commentId]
      );

      if (dislike) {
        await DB.update(
          `ratings`,
          { liked: true },
          `user_id = $2 AND comment_id = $3`,
          [userId, commentId]
        );
      } else {
        await DB.insert(`ratings`, {
          user_id: parseInt(userId),
          comment_id: parseInt(commentId),
          liked: true,
        });
      }
    }

    // Get updated like count
    const likes = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM ratings WHERE comment_id = $1 AND liked = true`,
      [commentId]
    );

    res.send({ likes: parseInt(likes?.count || "0") });
  } catch (e) {
    next(e);
  }
};

// Fetch pages liked by the current user
const fetchLikedPages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
        ratings.created_at as date_liked
      FROM ratings
      JOIN pages ON ratings.page_id = pages.id
      JOIN users ON pages.user_id = users.id
      JOIN page_types ON pages.type_id = page_types.id
      WHERE ratings.user_id = $1 AND ratings.page_id IS NOT NULL AND ratings.liked = true
    `;

    const queryParams: any[] = [userId];

    if (filterBy === "public") {
      query += ` AND pages.type_id = $2`;
      queryParams.push(PAGE_TYPE.publicId);
    } else if (filterBy === "private") {
      query += ` AND pages.type_id = $2`;
      queryParams.push(PAGE_TYPE.privateId);
    }

    query += ` ORDER BY ratings.created_at DESC`;

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

    res.send({
      results: formattedPages,
      filterBy,
    });
  } catch (e) {
    next(e);
  }
};

// Remove pages from the liked-pages list (bulk unlike)
const removeLikedPages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).send({ message: "Invalid ids array" });
    }

    const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");
    const query = `
      DELETE FROM ratings
      WHERE user_id = $${ids.length + 1} AND page_id IN (${placeholders}) AND liked = true
    `;

    await DB.query(query, [...ids, userId]);

    res.send({ message: "success" });
  } catch (e) {
    next(e);
  }
};

const controller = {
  ratePage,
  rateComment,
  fetchLikedPages,
  removeLikedPages,
};

export default controller;
