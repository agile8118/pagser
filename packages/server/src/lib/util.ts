import sanitizeHtml from "sanitize-html";

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
  const result = sanitizeHtml(html, {
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
      "code",
      "ol",
      "ul",
      "li",
      "span",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "style"],
      "*": ["style"],
    },
    transformTags: {
      h1: "h2",
      h4: "h3",
      h5: "h3",
      h6: "h3",
    },
    allowedStyles: {
      "*": {
        "text-align": [/^left$/, /^right$/, /^center$/],
        "list-style-type": [/^/],
        "text-decoration": [/^/],
        "padding-left": [/^/],
      },
      img: {
        float: [/^left$/, /^right$/],
        margin: [/^/],
        display: [/^block$/],
        "max-width": [/^/],
      },
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
  });
  return result;
};
