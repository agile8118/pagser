// import { Request, Response, NextFunction } from "express";

import type {
  Cpeak,
  CpeakRequest as Request,
  CpeakResponse as Response,
  Next as NextFunction,
} from "cpeak";
import { DB } from "../../database/index.js";

// Fetch user's email
const fetchUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;

    const user = await DB.find<{ email: string }>(
      `SELECT email FROM users WHERE id = $1`,
      [userId],
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ email: user.email });
  } catch (e) {
    next(e);
  }
};

// Update user's email
const updateUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const { email } = req.body;

    // Check if email already exists
    const existing = await DB.find<any>(
      `SELECT id FROM users WHERE email = $1 AND id != $2`,
      [email, userId],
    );

    if (existing) {
      return res.status(422).json({ message: "Email already in use" });
    }

    await DB.update(`users`, { email }, `id = $2`, [userId]);

    res.json({ message: "Email updated successfully" });
  } catch (e) {
    next(e);
  }
};

// Update user's password
const updateUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const { password } = req.body;

    const hashedPassword = await req.hashPassword({ password });

    await DB.update(`users`, { password: hashedPassword }, `id = $2`, [userId]);

    res.json({ message: "Password updated successfully" });
  } catch (e) {
    next(e);
  }
};

const controller = {
  fetchUserEmail,
  updateUserEmail,
  updateUserPassword,
};

export default controller;
