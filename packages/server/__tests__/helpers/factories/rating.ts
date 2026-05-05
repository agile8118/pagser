import { DB } from "../../../src/database/index.js";
import type { IRating } from "../../../src/database/types.js";

export async function makeRating(opts: {
  userId: number | string;
  pageId?: number | string;
  commentId?: number | string;
  liked: boolean;
}): Promise<IRating> {
  return DB.insert<IRating>("ratings", {
    user_id: Number(opts.userId),
    page_id: opts.pageId == null ? undefined : Number(opts.pageId),
    comment_id: opts.commentId == null ? undefined : Number(opts.commentId),
    liked: opts.liked,
  });
}
