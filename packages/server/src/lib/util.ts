import { Response } from "express";
import jwt from "jwt-simple";
import sanitizeHtml from "sanitize-html";
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

export const cleanHTML = (html: string) => {
  return sanitizeHtml(html, {
    allowedTags: [
      "b",
      "i",
      "br",
      "p",
      "em",
      "strong",
      "a",
      "img",
      "pre",
      "ol",
      "ul",
      "li",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    allowedAttributes: false,
    transformTags: {
      h1: "h2",
      h3: "strong",
      h4: "strong",
      h5: "strong",
      h6: "strong",
    },
    allowedStyles: {
      "*": {
        "text-align": [/^left$/, /^right$/, /^center$/],
        "list-style-type": [/^/],
        "text-decoration": [/^/],
        "padding-left": [/^/],
      },
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
  });
};
