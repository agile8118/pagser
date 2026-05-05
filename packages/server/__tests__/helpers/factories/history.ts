import { DB } from "../../../src/database/index.js";
import type { IHistory } from "../../../src/database/types.js";

export async function makeHistoryEntry(opts: {
  userId: number | string;
  pageId: number | string;
}): Promise<IHistory> {
  return DB.insert<IHistory>("history", {
    user_id: Number(opts.userId),
    page_id: Number(opts.pageId),
  });
}
