import { Request, Response, NextFunction } from "express";
import { DB } from "../../database";
import { handleServerError } from "../../lib/util";

const draftPageOwnership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pageId = req.params.id;
  const userId = req.user.id;
  const stage = req.params.stage;

  next();
};

const pageOwnership = (req: Request, res: Response, next: NextFunction) => {
  const pageId = req.params.id;
  const userId = req.user.id;
  const stage = req.params.stage;

  next();
};

const authorization = {
  draftPageOwnership,
  pageOwnership,
};

export default authorization;
