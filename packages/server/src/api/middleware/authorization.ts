import { Request, Response, NextFunction } from "express";
import { DB } from "../../database";
import { handleServerError } from "../../lib/util";

const draftPageOwnership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const authorization = {
  draftPageOwnership,
};

export default authorization;
