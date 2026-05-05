import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import { DB } from "../../database/index.js";

// Track page view
const trackView = async (req: Request, res: Response) => {
  const pageId = req.params.id;
  const userId = req.user?.id;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const raw = req.signedCookies?.viewStart;
  const viewStartTime = raw ? parseInt(raw, 10) : null;

  // Check if view started at least 10 seconds ago
  if (viewStartTime && Date.now() - viewStartTime < 10000) {
    return res.json({ message: "View too recent" });
  }

  if (userId) {
    // Authenticated user - upsert by (user_id, page_id)
    const existing = await DB.find<any>(
      `SELECT id FROM views WHERE user_id = $1 AND page_id = $2`,
      [userId, pageId],
    );

    if (existing) {
      await DB.update(
        `views`,
        { updated_at: new Date() },
        `user_id = $2 AND page_id = $3`,
        [userId, pageId],
      );
    } else {
      await DB.insert(`views`, {
        user_id: parseInt(userId),
        page_id: parseInt(pageId),
      });
    }
  } else {
    // Anonymous user - upsert by (ip, page_id)
    const existing = await DB.find<any>(
      `SELECT id FROM views WHERE ip = $1 AND page_id = $2`,
      [ip, pageId],
    );

    if (existing) {
      await DB.update(
        `views`,
        { updated_at: new Date() },
        `ip = $2 AND page_id = $3`,
        [ip, pageId],
      );
    } else {
      await DB.insert(`views`, {
        ip: typeof ip === "string" ? ip.substring(0, 100) : ip,
        page_id: parseInt(pageId),
      });
    }
  }

  res.json({ message: "success" });
};

const controller = {
  trackView,
};

export default controller;
