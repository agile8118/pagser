import { Request, Response, NextFunction } from "express";
import vl from "validator";
import { validate } from "@pagser/common";
import { DB } from "../../database";
import { handleServerError } from "../../lib/util";

// Validate id
const isId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.user_id;

  if (vl.isNumeric(id)) {
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

  if (validate.isEmpty(email) || !vl.isEmail(email))
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

  const user = await DB.find(
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

const validator = {
  isId,
  name,
  email,
  emailAvailability,
  password,
  username,
  usernameAvailability,
  userEmailVerificationCode,
  passwordResetToken,
};

export default validator;
