import { DB } from "../../../src/database/index.js";
import type { IComment } from "../../../src/database/types.js";

export async function makeComment(opts: {
  pageId: number | string;
  userId: number | string;
  text?: string;
  inReplyTo?: number;
  inReplyToCommentReply?: number;
  overrides?: Partial<IComment>;
}): Promise<IComment> {
  return DB.insert<IComment>("comments", {
    page_id: Number(opts.pageId),
    user_id: Number(opts.userId),
    text: opts.text ?? "test comment text",
    in_reply_to: opts.inReplyTo,
    in_reply_to_comment_reply: opts.inReplyToCommentReply,
    ...opts.overrides,
  });
}
