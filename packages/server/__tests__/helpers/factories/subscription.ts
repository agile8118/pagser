import { DB } from "../../../src/database/index.js";
import type { ISubscription } from "../../../src/database/types.js";

export async function makeSubscription(opts: {
  subscriberId: number | string;
  authorId: number | string;
}): Promise<ISubscription> {
  return DB.insert<ISubscription>("subscriptions", {
    subscriber_id: Number(opts.subscriberId),
    author_id: Number(opts.authorId),
  });
}
