import { Request, Response, NextFunction } from "express";
import vl from "validator";
import { validate } from "@pagser/common";
import { DB } from "../../database/index.js";
import { IUser, PAGE_STATUS, PAGE_TYPE } from "../../database/types.js";

import { handleServerError } from "../../lib/util.js";

// --- Validators for ids --- //
const isId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  if (vl.default.isNumeric(id)) {
    next();
  } else {
    return res.status(400).send({ message: "id error" });
  }
};

const isBodyUserId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.user_id;

  if (vl.default.isNumeric(id)) {
    next();
  } else {
    return res.status(400).send({ message: "id error" });
  }
};

// Validate the user name
const name = (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;

  if (
    !validate.isEmpty(name) &&
    validate.isAlpha(name) &&
    validate.len(name, 3, 30)
  ) {
    next();
  } else {
    return res.status(400).send({ message: "name error" });
  }
};

// Validate the username user has provided
const username = (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username;

  if (
    validate.isEmpty(username) ||
    !validate.len(username, 5, 15) ||
    !validate.isUsername(username)
  ) {
    return res.status(400).send({ message: "username error" });
  }

  next();
};

// Check if we already have a user with the username that user has provided
const usernameAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username = req.body.username;

  // check to see that the username is not taken
  try {
    const result = await DB.find(
      `SELECT username FROM users WHERE username='${username}'`
    );

    if (!result) {
      next();
    } else {
      return res.status(422).send({ message: "username is in use" });
    }
  } catch (e) {
    handleServerError(e, res);
  }
};

// Validate the user email
const email = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  if (validate.isEmpty(email) || !vl.default.isEmail(email))
    return res.status(400).send({ message: "email error" });

  next();
};

// validate the the email does not exist
const emailAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DB.find(
      `SELECT email FROM users WHERE email='${email}'`
    );

    if (!result) {
      next();
    } else {
      return res.status(422).send({ message: "email is in use" });
    }
  } catch (e) {
    handleServerError(e, res);
  }
};

// Validate the password user has provided
const password = (req: Request, res: Response, next: NextFunction) => {
  const password = req.body.password;
  const username = req.body.username;

  if (
    password !== username &&
    validate.isHardPassword(password) &&
    validate.len(password, 8, 30)
  ) {
    next();
  } else {
    return res.status(400).send({ message: "password error" });
  }
};

// Validate the email that we've sent to the user's email address for signing up
const userEmailVerificationCode = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userEmailVerificationCode = req.body.userEmailVerificationCode;

  if (userEmailVerificationCode === req.session.userEmailVerificationCode) {
    next();
  } else {
    res.status(400).send({ message: "invalid code" });
  }
};

// Verify the token that was sent to the user's email address for resetting their password
const passwordResetToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.body.token;
  const userId = req.body.user_id;

  const user = await DB.find<IUser>(
    "SELECT token_code, token_date FROM users WHERE id = $1",
    [userId]
  );

  if (!user) return res.status(400).send({ message: "invalid link" });

  const tokenDate = new Date(user.token_date);

  if (Date.now() - tokenDate.getTime() > 600000) {
    return res.status(400).send({ message: "link expired" });
  } else if (token === user.token_code) {
    return next();
  }

  return res.status(400).send({ message: "invalid link" });
};

// --- Validators for page creation --- //
const isStage = (req: Request, res: Response, next: NextFunction) => {
  const stage = req.params.stage;

  if (
    stage === "initial-step" ||
    stage === "page-contents" ||
    stage === "page-thumbnail" ||
    stage === "final-step"
  ) {
    next();
  } else {
    return res.status(400).send({ message: "stage error" });
  }
};

// Validate page type
const pageType = (req: Request, res: Response, next: NextFunction) => {
  try {
    const type = req.body.page.type;

    if (type === "public" || type === "private") {
      next();
    } else {
      throw new Error("");
    }
  } catch (e) {
    return res.status(400).send({ message: "page type error" });
  }
};

/** @todo: use for edit page */
// Validate page contents (title, brief description, targets, body)
const pageContents = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.stage !== "page-contents") return next();

    const type = req.body.page.type;

    const title = req.body.page.contents.title;
    const targets = req.body.page.contents.targets;
    const briefDes = req.body.page.contents.briefDes;
    const body = req.body.page.contents.body;

    if (
      !validate.page(type).title(title) &&
      !validate.page(type).targets(targets) &&
      !validate.page(type).briefDes(briefDes) &&
      validate.len(body, 0, 200000) // ten times more than textContent max length in front end
    ) {
      next();
    } else {
      throw new Error("");
    }
  } catch (e) {
    return res.status(400).send({ message: "page contents error" });
  }
};

/** @todo: use for edit page */
// Validate page configurations (anonymously, comments, rating, links)
const pageConfigurations = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.stage !== "final-step") return next();

    const type = req.body.page.type;

    const anonymously = req.body.page.configurations.title;
    const comments = req.body.page.configurations.targets;
    const rating = req.body.page.configurations.briefDes;
    const links = req.body.page.configurations.links; // could be undefined

    const linksCondition =
      type === "public" ? typeof links === "boolean" : true;

    if (
      typeof anonymously === "boolean" &&
      typeof comments === "boolean" &&
      typeof rating === "boolean" &&
      linksCondition
    ) {
      next();
    } else {
      throw new Error("");
    }
  } catch (e) {
    return res.status(400).send({ message: "page configurations error" });
  }
};

/** @todo: use for edit page */
// Validate the page tags for public pages
const publicPageTags = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.stage !== "final-step") return next();

    const tags = req.body.page.tags;

    if (!validate.page("public").tags(tags)) {
      next();
    } else {
      throw new Error("");
    }
  } catch (e) {
    return res.status(400).send({ message: "page tags error" });
  }
};

/** @todo: use for edit page */
// Validate the page url for private pages
const privatePageUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.stage !== "final-step") return next();

    const url = req.body.page.url;
    const userId = req.user.id;

    const usedUrls = await DB.find<string[]>(
      `SELECT url from pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3`,
      [userId, PAGE_STATUS.publishedId, PAGE_TYPE.privateId]
    );

    if (!validate.page("private").url(url, usedUrls)) {
      next();
    } else {
      throw new Error("");
    }
  } catch (e) {
    return res.status(400).send({ message: "page url error" });
  }
};

const validator = {
  isId,
  isBodyUserId,
  name,
  email,
  emailAvailability,
  password,
  username,
  usernameAvailability,
  userEmailVerificationCode,
  passwordResetToken,
  // For page creation:
  isStage,
  pageType,
  pageContents,
  pageConfigurations,
  publicPageTags,
  privatePageUrl,
};

export default validator;
