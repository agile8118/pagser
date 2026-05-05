import { DB } from "../../../src/database/index.js";
import { IPage, PAGE_STATUS, PAGE_TYPE } from "../../../src/database/types.js";

type IdLike = number | string;

export async function makeDraftPage(opts: {
  userId: IdLike;
  type?: "public" | "private";
  overrides?: Partial<IPage>;
}): Promise<IPage> {
  const typeId =
    opts.type === "private" ? PAGE_TYPE.privateId : PAGE_TYPE.publicId;
  return DB.insert<IPage>("pages", {
    user_id: Number(opts.userId),
    type_id: typeId,
    status_id: PAGE_STATUS.draftId,
    ...opts.overrides,
  });
}

export async function makePublishedPage(opts: {
  userId: IdLike;
  type: "public" | "private";
  url: string;
  title?: string;
  briefDes?: string;
  body?: string;
  targets?: string;
  overrides?: Partial<IPage>;
}): Promise<IPage> {
  return DB.insert<IPage>("pages", {
    user_id: Number(opts.userId),
    type_id:
      opts.type === "private" ? PAGE_TYPE.privateId : PAGE_TYPE.publicId,
    status_id: PAGE_STATUS.publishedId,
    url: opts.url,
    title: opts.title ?? "Test page title for unit tests",
    brief_description:
      opts.briefDes ?? "A brief description used in tests, long enough to pass.",
    body: opts.body ?? "<p>body content used in tests</p>",
    targets:
      opts.targets ?? "Targets used in tests, long enough to pass validators.",
    ...opts.overrides,
  });
}
