import { Response } from "express";
import jwt from "jwt-simple";
import log from "./log";
import keys from "../config/keys";

// Handle unexpected errors (500 errors)
export const handleServerError = (error: any, res: Response) => {
  log(error, "error");
  return res.status(500).send({ message: "Internal server error." });
};

// Returns a token for a user based off of the userId
export const tokenForUser = (userId: string) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, iat: timestamp }, keys.jwtSecret);
};
