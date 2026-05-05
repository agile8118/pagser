import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import { DB } from "../../database/index.js";

// Toggle subscription to an author
const toggle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subscriberId = req.user.id;
    const authorId = req.params.id;

    if (String(subscriberId) === String(authorId)) {
      return res.status(400).json({ message: "Cannot subscribe to yourself" });
    }

    // Check if subscription exists
    const existing = await DB.find<any>(
      `SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2`,
      [subscriberId, authorId],
    );

    if (existing) {
      // Remove subscription
      await DB.delete(
        `subscriptions`,
        `subscriber_id = $1 AND author_id = $2`,
        [subscriberId, authorId],
      );
    } else {
      // Add subscription
      await DB.insert(`subscriptions`, {
        subscriber_id: parseInt(subscriberId),
        author_id: parseInt(authorId),
      });
    }

    // Get updated subscription count
    const subCount = await DB.find<{ count: string }>(
      `SELECT COUNT(*) as count FROM subscriptions WHERE author_id = $1`,
      [authorId],
    );

    res.json({
      subscribed: !existing,
      subNum: parseInt(subCount?.count || "0"),
    });
  } catch (e) {
    next(e);
  }
};

// Fetch user's subscriptions
const fetchSubscriptions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (e) {
    next(e);
  }
};

const controller = {
  toggle,
  fetchSubscriptions,
};

export default controller;
