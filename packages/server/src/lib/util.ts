// import { Response } from "express";

import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import sanitizeHtml from "sanitize-html";
import log from "./log.js";

// Handle unexpected errors (500 errors)
export const handleServerError = (error: any, res: Response) => {
  log(error, "error");
  return res.status(500).json({ message: "Internal server error." });
};

export const timeSince = (date: string | Date): string => {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  const interval = (s: number) => Math.floor(seconds / s);
  if (interval(31536000) > 1) return interval(31536000) + " years ago";
  if (interval(2592000) > 1) return interval(2592000) + " months ago";
  if (interval(86400) > 1) return interval(86400) + " days ago";
  if (interval(3600) > 1) return interval(3600) + " hours ago";
  if (interval(60) > 1) return interval(60) + " minutes ago";
  return "Just now";
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
