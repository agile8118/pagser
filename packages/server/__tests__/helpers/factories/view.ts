import { DB } from "../../../src/database/index.js";
import type { IView } from "../../../src/database/types.js";

export async function makeView(opts: {
  pageId: number | string;
  userId?: number | string;
  ip?: string;
}): Promise<IView> {
  return DB.insert<IView>("views", {
    page_id: Number(opts.pageId),
    user_id: opts.userId == null ? undefined : Number(opts.userId),
    ip: opts.ip,
  });
}
