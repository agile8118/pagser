import { Request, Response, NextFunction } from "express";
import isEmail from "validator/lib/isEmail";
import { validate } from "@pagser/common";
import { DB } from "../../database";

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

// Validate the user email
const email = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  if (!validate.isEmpty(email) && isEmail(email)) {
    next();
  } else {
    return res.status(400).send({ message: "email error" });
  }

  // validate the the email does not exist
  const results = await DB.find(
    `SELECT email FROM users WHERE email = ${email};`
  );
  console.log(results);
};

const validator = { name, email };

export default validator;
