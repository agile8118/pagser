import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { IComment } from "../../database/types.js";
import { timeSince } from "../../lib/util.js";
import { USER_PLACEHOLDER_IMAGE, CommentAPI } from "@pagser/common";

// Add a comment to a page
const addComment = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const pageId = req.params.pageId;
  const { text, inReplyTo, inReplyToCommentReply } = req.body;

  if (!text || text.trim().length === 0) {
    throw { status: 400, message: "Comment text is required" };
  }

  const comment = await DB.insert<IComment>(`comments`, {
    text: text.trim(),
    page_id: parseInt(pageId),
    user_id: parseInt(userId),
    in_reply_to: inReplyTo ? parseInt(inReplyTo) : undefined,
    in_reply_to_comment_reply: inReplyToCommentReply
      ? parseInt(inReplyToCommentReply)
      : undefined,
  });

  const fullComment = await DB.find<any>(
    `
    SELECT
      comments.id,
      comments.text,
      comments.user_id,
      comments.in_reply_to,
      comments.in_reply_to_comment_reply,
      comments.created_at,
      users.name,
      users.username,
      users.photo_url
    FROM comments
    JOIN users ON comments.user_id = users.id
    WHERE comments.id = $1
    `,
    [comment.id],
  );

  const parentId = fullComment.in_reply_to
    ? String(fullComment.in_reply_to)
    : null;

  const body: CommentAPI.AddCommentResponse = {
    comment: {
      id: String(fullComment.id),
      text: fullComment.text,
      author: {
        id: String(fullComment.user_id),
        name: fullComment.name,
        username: fullComment.username,
        photo: fullComment.photo_url || USER_PLACEHOLDER_IMAGE,
      },
      date: timeSince(fullComment.created_at),
      likes: 0,
      status: "normal",
      replies: [],
      showReplies: false,
      highlightedReplies: [],
      viewer: "owner",
      readByPageOwner: false,
      lovedByPageOwner: false,
      inReplyTo: parentId,
    },
    inReplyTo: parentId,
  };
  res.status(201).json(body);
};

// Fetch comments for a page (with pagination)
const fetchComments = async (req: Request, res: Response) => {
  const pageId = req.params.pageId;
  const portion = parseInt((req.query.portion as string) || "1");
  const limit = 10;
  const offset = (portion - 1) * limit;

  const userId = req.user?.id;

  const comments = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.text,
      c.user_id,
      c.in_reply_to,
      c.in_reply_to_comment_reply,
      c.read_by_page_owner,
      c.loved_by_page_owner,
      c.created_at,
      users.name,
      users.username,
      users.photo_url,
      (SELECT COUNT(*) FROM comments WHERE in_reply_to = c.id) as reply_count,
      (SELECT COUNT(*) FROM ratings WHERE comment_id = c.id AND liked = true) as like_count
    FROM comments c
    JOIN users ON c.user_id = users.id
    WHERE c.page_id = $1 AND c.in_reply_to IS NULL
    ORDER BY c.created_at DESC
    LIMIT $2 OFFSET $3
    `,
    [pageId, limit, offset],
  );

  const totalCount = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM comments WHERE page_id = $1 AND in_reply_to IS NULL`,
    [pageId],
  );

  const formattedComments = (comments || []).map((c: any): CommentAPI.CommentItem => ({
    id: String(c.id),
    text: c.text,
    author: {
      id: String(c.user_id),
      name: c.name,
      username: c.username,
      photo: c.photo_url || USER_PLACEHOLDER_IMAGE,
    },
    date: timeSince(c.created_at),
    likes: parseInt(c.like_count || "0"),
    replies: parseInt(c.reply_count || "0"),
    status: "normal",
    showReplies: false,
    highlightedReplies: [],
    viewer: (userId && String(userId) === String(c.user_id) ? "owner" : "spectator") as "owner" | "spectator",
    readByPageOwner: c.read_by_page_owner,
    lovedByPageOwner: c.loved_by_page_owner,
    inReplyTo: c.in_reply_to,
  }));

  const body: CommentAPI.FetchCommentsResponse = {
    comments: formattedComments,
    userId,
    length: parseInt(totalCount?.count || "0"),
  };
  res.json(body);
};

// Fetch replies to a comment
const fetchReplies = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const userId = req.user?.id;

  const replies = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.text,
      c.user_id,
      c.in_reply_to_comment_reply,
      c.read_by_page_owner,
      c.loved_by_page_owner,
      c.created_at,
      users.name,
      users.username,
      users.photo_url,
      (SELECT COUNT(*) FROM ratings WHERE comment_id = c.id AND liked = true) as like_count
    FROM comments c
    JOIN users ON c.user_id = users.id
    WHERE c.in_reply_to = $1
    ORDER BY c.created_at ASC
    `,
    [commentId],
  );

  const formattedReplies = (replies || []).map((r: any): CommentAPI.ReplyItem => ({
    id: String(r.id),
    text: r.text,
    author: {
      id: String(r.user_id),
      name: r.name,
      username: r.username,
      photo: r.photo_url || USER_PLACEHOLDER_IMAGE,
    },
    date: timeSince(r.created_at),
    likes: parseInt(r.like_count || "0"),
    status: "normal",
    viewer: (userId && String(userId) === String(r.user_id) ? "owner" : "spectator") as "owner" | "spectator",
    toName: "",
    inReplyTo: String(commentId),
    inReplyToCommentReply: r.in_reply_to_comment_reply,
    readByPageOwner: r.read_by_page_owner,
    lovedByPageOwner: r.loved_by_page_owner,
  }));

  const body: CommentAPI.FetchRepliesResponse = { replies: formattedReplies, commentId: String(commentId) };
  res.json(body);
};

// Update a comment
const updateComment = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const commentId = req.params.id;
  const { text } = req.body;

  if (!text || text.trim().length === 0) {
    throw { status: 400, message: "Comment text is required" };
  }

  const comment = await DB.find<IComment>(
    `SELECT user_id, in_reply_to FROM comments WHERE id = $1`,
    [commentId],
  );

  if (!comment || comment.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  await DB.update(
    `comments`,
    { text: text.trim(), edited: true },
    `id = $3`,
    [commentId],
  );

  const updatedComment = await DB.find<any>(
    `
    SELECT
      comments.id,
      comments.text,
      comments.in_reply_to
    FROM comments
    WHERE comments.id = $1
    `,
    [commentId],
  );

  const body: CommentAPI.UpdateCommentResponse = {
    commentId,
    newComment: updatedComment.text,
    inReplyTo: updatedComment.in_reply_to,
  };
  res.json(body);
};

// Delete a comment
const deleteComment = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const commentId = req.params.id;

  const comment = await DB.find<IComment>(
    `SELECT user_id, in_reply_to FROM comments WHERE id = $1`,
    [commentId],
  );

  if (!comment || comment.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  await DB.delete(`comments`, `in_reply_to_comment_reply = $1`, [commentId]);
  await DB.delete(`comments`, `in_reply_to = $1`, [commentId]);
  await DB.delete(`comments`, `id = $1`, [commentId]);

  const body: CommentAPI.DeleteCommentResponse = {
    commentId,
    parent: comment.in_reply_to ?? null,
  };
  res.json(body);
};

// Fetch comment history for the logged-in user
const commentsHistory = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const rows = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.text,
      c.created_at as date,
      c.in_reply_to,
      p.url,
      p.title,
      pt.type,
      pu.username as page_author_username,
      cu.username as current_username,
      rc.user_id as replied_user_id,
      ru.name as replied_name,
      ru.username as replied_username
    FROM comments c
    JOIN pages p ON c.page_id = p.id
    JOIN page_types pt ON p.type_id = pt.id
    JOIN users pu ON p.user_id = pu.id
    JOIN users cu ON cu.id = $1
    LEFT JOIN comments rc ON c.in_reply_to = rc.id
    LEFT JOIN users ru ON rc.user_id = ru.id
    WHERE c.user_id = $1
    ORDER BY c.created_at DESC
    `,
    [userId],
  );

  const comments = (rows || []).map((c: any) => {
    let reply: { name: string | null; username: string | null } = {
      name: null,
      username: null,
    };

    if (c.in_reply_to !== null) {
      if (String(c.replied_user_id) === String(userId)) {
        reply = { name: "yourself", username: c.current_username };
      } else {
        reply = { name: c.replied_name, username: c.replied_username };
      }
    }

    return {
      id: String(c.id),
      text: c.text,
      date: timeSince(c.date),
      reply,
      page: {
        type: c.type,
        title: c.title,
        url: c.url,
        author: { username: c.page_author_username },
      },
    };
  });

  const body: CommentAPI.CommentsHistoryResponse = { comments };
  res.json(body);
};

const controller = {
  addComment,
  fetchComments,
  fetchReplies,
  updateComment,
  deleteComment,
  commentsHistory,
};

export default controller;
