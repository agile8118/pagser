import { DB } from "../../../src/database/index.js";
import type { ITag } from "../../../src/database/types.js";

export async function makeTag(opts: {
  pageId: number | string;
  name: string;
}): Promise<ITag> {
  return DB.insert<ITag>("tags", {
    page_id: Number(opts.pageId),
    name: opts.name,
  });
}
