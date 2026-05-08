import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DB } from "../../database/index.js";
import { SettingsAPI } from "@pagser/common";

// Fetch user's email
const fetchUserEmail = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const user = await DB.find<{ email: string }>(
    `SELECT email FROM users WHERE id = $1`,
    [userId],
  );

  if (!user) throw { status: 404, message: "User not found" };

  const body: SettingsAPI.GetEmailResponse = { email: user.email };
  res.json(body);
};

// Update user's email
const updateUserEmail = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { email } = req.body;

  const existing = await DB.find<any>(
    `SELECT id FROM users WHERE email = $1 AND id != $2`,
    [email, userId],
  );

  if (existing) throw { status: 422, message: "Email already in use" };

  await DB.update(`users`, { email }, `id = $2`, [userId]);

  const body: SettingsAPI.UpdateEmailResponse = { message: "Email updated successfully" };
  res.json(body);
};

// Update user's password
const updateUserPassword = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { password } = req.body;

  const hashedPassword = await req.hashPassword({ password });

  await DB.update(`users`, { password: hashedPassword }, `id = $2`, [userId]);

  const body: SettingsAPI.UpdatePasswordResponse = { message: "Password updated successfully" };
  res.json(body);
};

const controller = {
  fetchUserEmail,
  updateUserEmail,
  updateUserPassword,
};

export default controller;
