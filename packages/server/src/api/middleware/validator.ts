import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import vl from "validator";
import { validate, ApiMessages, RESET_LINK_EXPIRY_HOURS } from "@pagser/common";
import { DB } from "../../database/index.js";
import { IUser, PAGE_STATUS, PAGE_TYPE } from "../../database/types.js";

// --- Validators for ids --- //
const isId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  if (vl.default.isNumeric(id)) {
    next();
  } else {
    throw { status: 400, message: ApiMessages.INVALID_ID };
  }
};

const isBodyUserId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.user_id;

  if (id != null && vl.default.isNumeric(String(id))) {
    next();
  } else {
    throw { status: 400, message: ApiMessages.INVALID_ID };
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
    throw { status: 400, message: ApiMessages.INVALID_NAME };
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
    throw { status: 400, message: ApiMessages.INVALID_USERNAME };
  }

  next();
};

// Check if we already have a user with the username that user has provided
const usernameAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const username = req.body.username;

  const result = await DB.find(
    `SELECT username FROM users WHERE username = $1`,
    [username],
  );

  if (result) throw { status: 422, message: ApiMessages.USERNAME_IN_USE };

  next();
};

// Validate the user email
const email = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  if (validate.isEmpty(email) || !vl.default.isEmail(email))
    throw { status: 400, message: ApiMessages.INVALID_EMAIL };

  next();
};

// validate the the email does not exist
const emailAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = await DB.find(`SELECT email FROM users WHERE email = $1`, [
    req.body.email,
  ]);

  if (result) throw { status: 422, message: ApiMessages.EMAIL_IN_USE };

  next();
};

// Validate login credentials are present in the body
const loginCredentials = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body?.email || !req.body?.password) {
    throw { status: 400, message: ApiMessages.CREDENTIALS_REQUIRED };
  }
  next();
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
    throw { status: 400, message: ApiMessages.INVALID_PASSWORD };
  }
};

// Validate the email that we've sent to the user's email address for signing up
const userEmailVerificationCode = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userEmailVerificationCode = req.body.userEmailVerificationCode;
  const email = req.body.email;

  const row = await DB.find<{ code: number; attempts: number }>(
    "SELECT code, attempts FROM email_codes WHERE email = $1 AND expires_at > NOW()",
    [email],
  );

  if (!row) throw { status: 400, message: ApiMessages.INVALID_CODE };

  if (row.attempts >= 5) {
    await DB.delete("email_codes", "email = $1", [email]);
    throw { status: 429, message: ApiMessages.TOO_MANY_ATTEMPTS };
  }

  if (row.code !== Number(userEmailVerificationCode)) {
    await DB.query(
      "UPDATE email_codes SET attempts = attempts + 1 WHERE email = $1",
      [email],
    );
    if (row.attempts + 1 >= 5) {
      await DB.delete("email_codes", "email = $1", [email]);
      throw { status: 429, message: ApiMessages.TOO_MANY_ATTEMPTS };
    }
    throw { status: 400, message: ApiMessages.INVALID_CODE };
  }

  await DB.delete("email_codes", "email = $1", [email]);
  next();
};

// Verify the token that was sent to the user's email address for resetting their password
const passwordResetToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.body.token;
  const userId = req.body.user_id;

  const user = await DB.find<IUser>(
    "SELECT token_code, token_date FROM users WHERE id = $1",
    [userId],
  );

  if (!user || !user.token_date) throw { status: 400, message: ApiMessages.INVALID_LINK };

  const tokenDate = new Date(user.token_date);

  if (Date.now() - tokenDate.getTime() > RESET_LINK_EXPIRY_HOURS * 60 * 60 * 1000) {
    throw { status: 400, message: ApiMessages.LINK_EXPIRED };
  }

  if (token !== user.token_code) {
    throw { status: 400, message: ApiMessages.INVALID_LINK };
  }

  next();
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
    throw { status: 400, message: ApiMessages.INVALID_PAGE_STAGE };
  }
};

// Validate page type
const pageType = (req: Request, res: Response, next: NextFunction) => {
  const type = req.body?.page?.type;

  if (type !== "public" && type !== "private") {
    throw { status: 400, message: ApiMessages.INVALID_PAGE_TYPE };
  }

  next();
};

/** @todo: use for edit page */
// Validate page contents (title, brief description, targets, body)
const pageContents = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.stage !== "page-contents") return next();

  const type = req.body?.page?.type;
  const contents = req.body?.page?.contents;

  if (
    !contents ||
    validate.page(type).title(contents.title) ||
    validate.page(type).targets(contents.targets) ||
    validate.page(type).briefDes(contents.briefDes) ||
    !validate.len(contents.body, 0, 200000)
  ) {
    throw { status: 400, message: ApiMessages.INVALID_PAGE_CONTENTS };
  }

  next();
};

/** @todo: use for edit page */
// Validate the page tags for public pages
const publicPageTags = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.stage !== "final-step") return next();

  const tags = req.body?.page?.tags;

  if (validate.page("public").tags(tags)) {
    throw { status: 400, message: ApiMessages.INVALID_PAGE_TAGS };
  }

  next();
};

/** @todo: use for edit page */
// Validate the page url for private pages
const privatePageUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.stage !== "final-step") return next();

  const url = req.body?.page?.url;
  const userId = req.user.id;

  const usedUrls = await DB.findMany<string>(
    `SELECT url from pages WHERE user_id = $1 AND status_id = $2 AND type_id = $3`,
    [userId, PAGE_STATUS.publishedId, PAGE_TYPE.privateId],
  );

  if (validate.page("private").url(url, usedUrls)) {
    throw { status: 400, message: ApiMessages.INVALID_PAGE_URL };
  }

  next();
};

const validator = {
  isId,
  isBodyUserId,
  name,
  email,
  emailAvailability,
  password,
  loginCredentials,
  username,
  usernameAvailability,
  userEmailVerificationCode,
  passwordResetToken,
  // For page creation:
  isStage,
  pageType,
  pageContents,
  publicPageTags,
  privatePageUrl,
};

export default validator;
