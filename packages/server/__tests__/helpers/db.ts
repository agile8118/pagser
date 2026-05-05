import { pool } from "../../src/database/index.js";
import { applySchema } from "../../src/database/schema.js";

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

export async function setupTestDb() {
  await applySchema(pool);
}

export async function truncateAll() {
  await pool.query(
    `TRUNCATE TABLE ${TABLES_TO_TRUNCATE.join(", ")} RESTART IDENTITY CASCADE`,
  );
}

export async function closeDb() {
  await pool.end();
}

export async function reseedReference() {
  await pool.query(`DELETE FROM page_types`);
  await pool.query(
    `INSERT INTO page_types (id, type) VALUES (1, 'private'), (2, 'public')`,
  );
  await pool.query(`SELECT setval('page_types_id_seq', 2, true)`);
  await pool.query(`DELETE FROM page_statuses`);
  await pool.query(
    `INSERT INTO page_statuses (id, status) VALUES (1, 'published'), (2, 'draft')`,
  );
  await pool.query(`SELECT setval('page_statuses_id_seq', 2, true)`);
}
