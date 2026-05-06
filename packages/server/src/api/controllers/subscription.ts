import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";

// Toggle subscription to an author
const toggle = async (req: Request, res: Response) => {
  const subscriberId = req.user.id;
  const authorId = req.params.id;

  if (String(subscriberId) === String(authorId)) {
    throw { status: 400, message: "Cannot subscribe to yourself" };
  }

  const existing = await DB.find<any>(
    `SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2`,
    [subscriberId, authorId],
  );

  if (existing) {
    await DB.delete(
      `subscriptions`,
      `subscriber_id = $1 AND author_id = $2`,
      [subscriberId, authorId],
    );
  } else {
    await DB.insert(`subscriptions`, {
      subscriber_id: parseInt(subscriberId),
      author_id: parseInt(authorId),
    });
  }

  const subCount = await DB.find<{ count: string }>(
    `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
    [authorId],
  );

  res.json({
    subscribed: !existing,
    subNum: parseInt(subCount?.count || "0"),
  });
};

// Fetch user's subscriptions
const fetchSubscriptions = async (req: Request, res: Response) => {
  const subscriberId = req.user.id;

  const subs = await DB.findMany<any>(
    `
    SELECT
      users.id,
      users.name,
      users.username,
      users.headline,
      users.photo_url,
      users.photo_key
    FROM subscriptions
    JOIN users ON subscriptions.author_id = users.id
    WHERE subscriptions.subscriber_id = $1
    ORDER BY subscriptions.created_at DESC
    `,
    [subscriberId],
  );

  res.json({ subs });
};

const controller = {
  toggle,
  fetchSubscriptions,
};

export default controller;
