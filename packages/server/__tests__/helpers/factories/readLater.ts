import { DB } from "../../../src/database/index.js";
import type { IReadLater } from "../../../src/database/types.js";

export async function makeReadLater(opts: {
  userId: number | string;
  pageId: number | string;
}): Promise<IReadLater> {
  return DB.insert<IReadLater>("read_later", {
    user_id: Number(opts.userId),
    page_id: Number(opts.pageId),
  });
}
