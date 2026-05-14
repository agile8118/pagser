import fs from "fs";
import path from "path";
import pkg from "pg";
import type { Pool } from "pg";
import keys from "../config/keys.js";

const databasePath = new URL("./", import.meta.url).pathname;

const read = (relative: string) =>
  fs.readFileSync(path.join(databasePath, relative)).toString();

const DROP_ORDER = [
  "email_codes",
  "tokens",
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
  "pages",
  "page_statuses",
  "page_types",
  "tags",
  "users",
];

const CREATE_ORDER: Array<[name: string, file: string]> = [
  ["users", "tables/users.sql"],
  ["page_types", "tables/page_types.sql"],
  ["page_statuses", "tables/page_statuses.sql"],
  ["pages", "tables/pages.sql"],
  ["attach_files", "tables/attach_files.sql"],
  ["tags", "tables/tags.sql"],
  ["comments", "tables/comments.sql"],
  ["ratings", "tables/ratings.sql"],
  ["read_later", "tables/read_later.sql"],
  ["history", "tables/history.sql"],
  ["views", "tables/views.sql"],
  ["subscriptions", "tables/subscriptions.sql"],
  ["collections", "tables/collections.sql"],
  ["collection_pages", "tables/collection_pages.sql"],
  ["user_saved_collections", "tables/user_saved_collections.sql"],
  ["tokens", "tables/tokens.sql"],
  ["email_codes", "tables/email_codes.sql"],
];

// Create the database if it doesn't exist
export async function createDatabase() {
  const adminPool = new pkg.Pool({
    user: keys.dbUser,
    host: keys.dbHost,
    database: "postgres", // default DB
    password: keys.dbPassword,
    port: Number(keys.dbPort),
    ssl:
      process.env.NODE_ENV_DB === "production"
        ? {
            rejectUnauthorized: false,
          }
        : false,
  });

  const result = await adminPool.query(
    `
    SELECT 1 FROM pg_database WHERE datname = $1
  `,
    [keys.dbDatabase],
  );

  if (result.rowCount === 0) {
    await adminPool.query(`CREATE DATABASE ${keys.dbDatabase};`);
    console.log(`[postgres] created database: ${keys.dbDatabase}`);
  }

  await adminPool.end();
}

const TABLES_TO_TRUNCATE = [
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

export async function truncateAll(pool: Pool) {
  await pool.query(
    `TRUNCATE TABLE ${TABLES_TO_TRUNCATE.join(", ")} RESTART IDENTITY CASCADE`,
  );
}

export async function applySchema(pool: Pool, opts: { verbose?: boolean } = {}) {
  const log = opts.verbose ? console.log : () => {};

  log("\nDropping the tables...");
  for (const name of DROP_ORDER) {
    await pool.query(`DROP TABLE IF EXISTS ${name} CASCADE`);
    log(`[postgres] ${name} table was dropped.`);
  }

  log("\nCreating the tables...");
  for (const [name, file] of CREATE_ORDER) {
    await pool.query(read(file));
    log(`[postgres] ${name} table was created successfully.`);
  }

  log("\nSetting up the triggers...");
  await pool.query(read("triggers.sql"));
  log("[postgres] triggers were fired up successfully.");
}
