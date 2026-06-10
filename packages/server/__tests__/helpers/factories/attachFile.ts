import { DB } from "../../../src/database/index.js";
import type { IAttachFile } from "../../../src/database/types.js";

export async function makeAttachFile(opts: {
  pageId: number | string;
  name: string;
  key?: string;
  url?: string;
}): Promise<IAttachFile> {
  const key = opts.key ?? `attach-files/${opts.pageId}/${opts.name}`;
  const url = opts.url ?? `https://s3.local/${key}`;
  return DB.insert<IAttachFile>("attach_files", {
    page_id: Number(opts.pageId),
    name: opts.name,
    key,
    url,
  });
}
