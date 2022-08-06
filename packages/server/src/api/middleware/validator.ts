import { Request, Response, NextFunction } from "express";
import isEmail from "validator/lib/isEmail";
import { validate } from "@pagser/common";
import { DB } from "../../database";
import { handleServerError } from "../../lib/util";

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
    const results = await DB.find(
      `SELECT username FROM users WHERE username='${username}'`
    );

    if (!results.length) {
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

  if (validate.isEmpty(email) || !isEmail(email))
    return res.status(400).send({ message: "email error" });

  // validate the the email does not exist
  try {
    const results = await DB.find(
      `SELECT email FROM users WHERE email='${email}'`
    );

    if (!results.length) {
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

const validator = {
  name,
  email,
  password,
  username,
  usernameAvailability,
  userEmailVerificationCode,
};

export default validator;
