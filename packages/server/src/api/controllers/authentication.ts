import { Request, Response } from "express";
import bcrypt from "bcrypt";
import sendEmail from "../services/mailgun";
import { tokenForUser, handleServerError } from "../../lib/util";
import { DB } from "../../database";
import { IUser } from "../../database/types";

// Sends a message to client to indicate that the username is available
const usernameAvailability = (req: Request, res: Response) => {
  res.status(200).send({ message: "username is available" });
};

// Send a code to the user email address to verify that user owns the email
const sendCode = (req: Request, res: Response) => {
  const email = req.body.email;
  const code = Math.floor(Math.random() * 90000) + 10000; // generates a 5 digit number
  const html = `
  <p>Please verify your email address by entering this code:</p>
  <h1 style="letter-spacing: 4px;">${code}</h1>
  <p>If you did not request to create an account at pagser.com with this email address, 
  please ignore this email.</p>
  `;

  req.session.userEmailVerificationCode = code;

  sendEmail(email, "Verify your email address", html, (msg, info) => {
    if (msg === "success") {
      res.status(200).send({ message: "code sent" });
    } else {
      handleServerError(info, res);
    }
  });
};

// Registers a user and sends back a token
const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const name = req.body.name;

  try {
    const salt = await bcrypt.genSalt(10);
    // hash (encrypt) the user password using the salt
    const hash = await bcrypt.hash(password, salt);

    // insert the user in the database and use 'hash' as for the user's password
    const user = await DB.insert<IUser>("users", {
      name,
      email,
      username,
      password: hash,
      verified: true,
    });

    res.send({ token: tokenForUser(user.id) });
  } catch (e) {
    handleServerError(e, res);
  }
};

// Logs a user in and gives them a token
const login = async (req: Request, res: Response) => {};

export const requireAuth = passport.authenticate("jwt", { session: false });
export const requireSignIn = passport.authenticate("local", { session: false });

const controller = { sendCode, usernameAvailability, register, login };

export default controller;
