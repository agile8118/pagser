import { Response } from "express";
import log from "./log";

// Handle unexpected errors (500 errors)
export const handleServerError = (error: any, res: Response) => {
  log(error, "error");
  return res.status(500).send({ message: "internal server error" });
};
