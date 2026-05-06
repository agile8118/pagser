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
    throw { status: 400, message: "id error" };
  }

  const page = await DB.find<{ user_id: number }>(
    "SELECT user_id FROM pages WHERE id = $1",
    [pageId],
  );

  if (!page) throw { status: 404, message: "Page not found" };
  if (String(page.user_id) !== String(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  next();
};

const authorization = {
  draftPageOwnership: checkPageOwnership,
  pageOwnership: checkPageOwnership,
};

export default authorization;
