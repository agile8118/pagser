const sanitizeHtml = require("sanitize-html");

var util = {};

util.removeExtraSpaces = function(string) {
  var newString = string.replace(/\s+/g, " ").trim();
  return newString;
};

util.convertToUrl = function(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .substring(0, 50);
};

util.len = (string = "", min, max) => {
  if (string.length >= min && string.length <= max) {
    return true;
  } else {
    return false;
  }
};

util.timeSince = function(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return "Just now";
};

util.cleanHTML = html => {
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
      "h6"
    ],
    allowedAttributes: false,
    transformTags: {
      h1: "h2",
      h3: "strong",
      h4: "strong",
      h5: "strong",
      h6: "strong"
    },
    allowedStyles: {
      "*": {
        "text-align": [/^left$/, /^right$/, /^center$/],
        "list-style-type": [/^/],
        "text-decoration": [/^/],
        "padding-left": [/^/]
      }
    },
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"]
  });
};

util.validatePage = (page, section) => {
  const type = page.type;
  const contents = page.contents;
  const configurations = page.configurations;
  const cleanBody = util.cleanHTML(contents.body);
  const tags = page.tags;
  const url = page.url;

  switch (section) {
    case "type":
      if (type === "public" || type === "private") {
        return true;
      } else {
        return false;
      }
      break;

    case "contents":
      switch (page.type) {
        case "public":
          if (
            util.len(contents.title, 15, 50) &&
            util.len(contents.briefDes, 30, 300) &&
            util.len(contents.targets, 20, 300) &&
            util.len(cleanBody, 50, 20000)
          ) {
            return true;
          } else {
            return false;
          }
          break;
        case "private":
          if (
            util.len(contents.title, 1, 50) &&
            util.len(contents.briefDes, 0, 300) &&
            util.len(contents.targets, 0, 300) &&
            util.len(cleanBody, 1, 200000)
          ) {
            return true;
          } else {
            return false;
          }
          break;
      }

      break;

    case "configurations":
      switch (page.type) {
        case "public":
          if (
            typeof configurations.links === "boolean" &&
            typeof configurations.rating === "boolean" &&
            typeof configurations.comments === "boolean" &&
            typeof configurations.anonymously === "boolean"
          ) {
            return true;
          } else {
            return false;
          }
          break;
        case "private":
          if (
            typeof configurations.rating === "boolean" &&
            typeof configurations.comments === "boolean" &&
            typeof configurations.anonymously === "boolean"
          ) {
            return true;
          } else {
            return false;
          }
          break;
        default:
          return true;
      }

    case "tags":
      if (type === "public") {
        try {
          if (typeof tags === "object") {
            if (
              tags[0].split(",").length > 4 &&
              tags[0].replace(/,/g, "").length <= 200
            ) {
              return true;
            } else if (tags[0].replace(/,/g, "").length > 200) {
              return false;
            } else {
              return false;
            }
          } else if (typeof tags === "string") {
            if (
              tags.split(",").length > 4 &&
              tags.replace(/,/g, "").length <= 200
            ) {
              return true;
            } else if (tags.replace(/,/g, "").length > 200) {
              return false;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      } else {
        return true;
      }
      break;

    case "url":
      if (type === "private") {
        if (url.length < 100 && url.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
      break;
  }
};

module.exports = util;
