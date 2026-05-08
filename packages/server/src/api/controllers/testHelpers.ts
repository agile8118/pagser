import type { CpeakRequest as Request, CpeakResponse as Response } from "cpeak";
import { DB, pool } from "../../database/index.js";

const TRUNCATE_TABLES = [
  "user_saved_collections",
  "collection_pages",
  "collections",
  "subscriptions",
  "views",
  "history",
  "read_later",
  "ratings",
  "comments",
  "attach_files",
  "tags",
  "pages",
  "users",
];

export const getEmailCode = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  if (!email) throw { status: 400, message: "email required" };
  const row = await DB.find<{ code: number }>(
    "SELECT code FROM email_codes WHERE email = $1",
    [email],
  );
  if (!row) throw { status: 404, message: "no code found for that email" };
  res.json({ code: row.code });
};

export const resetDb = async (req: Request, res: Response) => {
  await pool.query(
    `TRUNCATE TABLE ${TRUNCATE_TABLES.join(", ")} RESTART IDENTITY CASCADE`,
  );
  res.json({ ok: true });
};
