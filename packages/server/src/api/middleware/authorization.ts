import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";

import { DB } from "../../database/index.js";

const checkPageOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const pageId = req.params.id;
  const userId = req.user.id;

  if (!pageId || !/^\d+$/.test(pageId)) {
    return res.status(400).json({ message: "id error" });
  }

  try {
    const page = await DB.find<{ user_id: number }>(
      "SELECT user_id FROM pages WHERE id = $1",
      [pageId],
    );

    if (!page) return res.status(404).json({ message: "Page not found" });
    if (String(page.user_id) !== String(userId)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  } catch (e) {
    next(e);
  }
};

const authorization = {
  draftPageOwnership: checkPageOwnership,
  pageOwnership: checkPageOwnership,
};

export default authorization;
