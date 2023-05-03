import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import sendEmail from "../services/mailgun.js";
import { tokenForUser, handleServerError } from "../../lib/util.js";
import { DB } from "../../database/index.js";
import { IUser } from "../../database/types.js";
import keys from "../../config/keys.js";

// Sends a message to client to indicate that the username is available
const usernameAvailability = (req: Request, res: Response) => {
  res.status(200).send({ message: "username is available" });
};

// Send a code to the user email address to verify that user owns the email
const sendCode = async (req: Request, res: Response) => {
  const email = req.body.email;
  const code = Math.floor(Math.random() * 90000) + 10000; // generates a 5 digit number
  const html = `
  <strong>Please verify your email address by entering this code:</strong>
  <h1 style="letter-spacing: 4px;">${code}</h1>
  <div style="text-align:center;margin-top: 20px;font-size: 12px;color: #555;">
    If you did not request to create an account at pagser.com with this email address, 
    please ignore this email.
  </div>
  `;

  req.session.userEmailVerificationCode = code;

  try {
    await sendEmail(email, "Verify your email address", html);
    res.status(200).send({ message: "code sent" });
  } catch (e) {
    handleServerError(e, res);
  }
};

// Registers a user and sends back a token
const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const name = req.body.name;

  try {
    // hash the user password, the second argument is 'salt round'
    const hash = await bcrypt.hash(password, 10);

    // insert the user in the database and use 'hash' as for the user's password
    const user = await DB.insert<IUser>("users", {
      name,
      email,
      username,
      password: hash,
      verified: true,
    });

    res.status(201).send({ token: tokenForUser(user.id) });
  } catch (e) {
    handleServerError(e, res);
  }
};

// Logs a user in and gives them a token
const login = async (req: Request, res: Response) => {
  // after validating their email and password (in the middleware), give the a token
  if (req.user && req.user.id) res.send({ token: tokenForUser(req.user.id) });
};

// Sends an email to user's email address for them to use to reset their password
const forgotPassword = async (req: Request, res: Response) => {
  const email = req.body.email;

  try {
    const user = await DB.find<any>(
      `SELECT id FROM users WHERE email = '${email}'`
    );

    if (!user) return res.status(404).send({ message: "no email found" });

    const code = crypto.randomBytes(18).toString("hex");
    const link = `${keys.domain}/forgot-password?t=${code}&i=${user.id}`;
    const html = `
    <strong>Please click on the link below to reset your password: </strong>
    <br />
    <a href="${link}">${link}</a>
    <div style="margin-top: 0.5rem;">
      <em>Link is valid for just 10 minutes.</em>
    </div>
    <div style="text-align:center;margin-top: 20px;font-size: 12px;color: #555;">
      If you didn't request for a password reset, feel free to ignore this email.
    </div>`;

    await DB.update(
      "users",
      { token_code: code, token_date: new Date() },
      `email = '${email}'`
    );

    await sendEmail(email, "Reset your password", html);
    res.status(200).send({ message: "code was sent" });
  } catch (e) {
    handleServerError(e, res);
  }
};

// Using the token that waws sent in their email address, reset their password and update the database
const resetPassword = async (req: Request, res: Response) => {
  const password = req.body.password;
  const userId = req.body.user_id;

  try {
    // find the user
    const user = await DB.find(
      "SELECT token_code, token_date FROM users WHERE id = $1",
      [userId]
    );

    if (!user) return res.status(400).send({ message: "invalid link" });

    // hash the user password, the second argument is 'salt round'
    const hash = await bcrypt.hash(password, 10);

    // update user password password
    await DB.update("users", { password: hash }, `id = $2`, [userId]);

    res.status(200).send({ message: "password updated" });
  } catch (e) {
    handleServerError(e, res);
  }
};

// Return the id and photo of the user if authenticated
const getAuth = async (req: Request, res: Response) => {
  if (req.user.id) {
    const user = await DB.find<IUser>(
      "SELECT id, photo_url FROM users WHERE id = $1",
      [req.user.id]
    );

    res.status(200).send({ user: { id: user.id, photo: user.photo_url } });
  } else {
    res.status(400).send();
  }
};

const controller = {
  sendCode,
  usernameAvailability,
  register,
  login,
  forgotPassword,
  resetPassword,
  getAuth,
};

export default controller;
