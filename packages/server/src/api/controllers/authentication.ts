import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import crypto from "crypto";
import sendEmail from "../services/email.js";
import { DB } from "../../database/index.js";
import { IUser } from "../../database/types.js";
import keys from "../../config/keys.js";

// Sends a message to client to indicate that the username is available
const usernameAvailability = (req: Request, res: Response) => {
  res.status(200).json({ message: "ok" });
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

  await DB.delete("email_codes", "email = $1", [email]);
  await DB.insert("email_codes", {
    email,
    code,
    expires_at: new Date(Date.now() + 10 * 60 * 1000),
  });
  await sendEmail(email, "Verify your email address", html);
  res.status(200).json({ message: "code sent" });
};

// Registers a user and sends back a token
const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const name = req.body.name;

  // hash the user password, the second argument is 'salt round'
  const hash = await req.hashPassword({ password });

  // insert the user in the database and use 'hash' as for the user's password
  const user = await DB.insert<IUser>("users", {
    name,
    email,
    username,
    password: hash,
    verified: true,
  });

  // issue a token for the newly registered user
  const token = await req.login({ password, hashedPassword: hash, userId: String(user.id) });
  res.status(201).json({ token });
};

// Logs a user in and gives them a token
const login = async (req: Request, res: Response) => {
  if (req.user && req._token) res.json({ token: req._token });
};

// Sends an email to user's email address for them to use to reset their password
const forgotPassword = async (req: Request, res: Response) => {
  const email = req.body.email;

  const user = await DB.find<any>(
    `SELECT id FROM users WHERE email = '${email}'`,
  );

  if (!user) throw { status: 404, message: "no email found" };

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
    `email = '${email}'`,
  );

  await sendEmail(email, "Reset your password", html);
  res.status(200).json({ message: "code was sent" });
};

// Using the token that waws sent in their email address, reset their password and update the database
const resetPassword = async (req: Request, res: Response) => {
  const password = req.body.password;
  const userId = req.body.user_id;

  // find the user
  const user = await DB.find(
    "SELECT token_code, token_date FROM users WHERE id = $1",
    [userId],
  );

  if (!user) throw { status: 400, message: "invalid link" };

  // hash the user password, the second argument is 'salt round'
  const hash = await req.hashPassword({ password });

  // update user password
  await DB.update("users", { password: hash }, `id = $2`, [userId]);

  res.status(200).json({ message: "password updated" });
};

// Return the id and photo of the user if authenticated
const getAuth = async (req: Request, res: Response) => {
  if (req.user.id) {
    const user = await DB.find<IUser>(
      "SELECT id, photo_url FROM users WHERE id = $1",
      [req.user.id],
    );

    res.status(200).json({ user: { id: user.id, photo: user.photo_url } });
  } else {
    res.status(400).json({});
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
