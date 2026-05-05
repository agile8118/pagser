import { DB } from "../../../src/database/index.js";
import type {
  ICollection,
  ICollectionPage,
  IUserSavedCollection,
} from "../../../src/database/types.js";

export async function makeCollection(opts: {
  userId: number | string;
  name?: string;
  description?: string;
  shared?: boolean;
  overrides?: Partial<ICollection>;
}): Promise<ICollection> {
  return DB.insert<ICollection>("collections", {
    user_id: Number(opts.userId),
    name: opts.name ?? "Test collection",
    description: opts.description,
    shared: opts.shared ?? false,
    ...opts.overrides,
  });
}

export async function makeCollectionPage(opts: {
  collectionId: number | string;
  pageId: number | string;
  orderIndex?: number;
}): Promise<ICollectionPage> {
  return DB.insert<ICollectionPage>("collection_pages", {
    collection_id: Number(opts.collectionId),
    page_id: Number(opts.pageId),
    order_index: opts.orderIndex ?? 0,
  });
}

export async function makeSavedCollection(opts: {
  userId: number | string;
  collectionId: number | string;
}): Promise<IUserSavedCollection> {
  return DB.insert<IUserSavedCollection>("user_saved_collections", {
    user_id: Number(opts.userId),
    collection_id: Number(opts.collectionId),
  });
}
