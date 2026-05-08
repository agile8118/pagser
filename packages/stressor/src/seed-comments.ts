import { Pool } from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIXTURES = path.join(__dirname, "../fixtures");
const SEED_IMAGES_BASE = path.join(__dirname, "../../server/public/seed-images");

const COMMENT_TEXTS: string[] = JSON.parse(
  fs.readFileSync(path.join(FIXTURES, "comments.json"), "utf8"),
);

const MANIFEST_PATH = path.join(FIXTURES, ".seed-manifest.json");

const TARGET_COMMENTS = 200_000;
const BATCH_SIZE = 1_000;

const pool = new Pool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE ?? "pagser_test",
});

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randDate(): Date {
  const now = Date.now();
  const sixMonthsAgo = now - 6 * 30 * 24 * 60 * 60 * 1000;
  return new Date(sixMonthsAgo + Math.random() * (now - sixMonthsAgo));
}

function listImages(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f !== ".gitkeep" && /\.(jpe?g|png|gif|webp)$/i.test(f));
  } catch {
    return [];
  }
}

interface CommentRow {
  text: string;
  page_id: number;
  user_id: number;
  in_reply_to: number | null;
  in_reply_to_comment_reply: number | null;
  created_at: Date;
}

async function insertBatch(
  rows: CommentRow[],
): Promise<number[]> {
  const placeholders: string[] = [];
  const values: unknown[] = [];

  rows.forEach((row, idx) => {
    const b = idx * 6;
    placeholders.push(
      `($${b + 1}, $${b + 2}, $${b + 3}, $${b + 4}, $${b + 5}, $${b + 6}, $${b + 6})`,
    );
    values.push(
      row.text,
      row.page_id,
      row.user_id,
      row.in_reply_to,
      row.in_reply_to_comment_reply,
      row.created_at,
    );
  });

  const res = await pool.query(
    `INSERT INTO comments (text, page_id, user_id, in_reply_to, in_reply_to_comment_reply, created_at, updated_at)
     VALUES ${placeholders.join(", ")} RETURNING id`,
    values,
  );

  return res.rows.map((r) => r.id as number);
}

async function seedComments(userIds: number[], pageIds: number[]): Promise<void> {
  const commentsPerPage = Math.ceil(TARGET_COMMENTS / pageIds.length);
  const topLevelPerPage = Math.round(commentsPerPage * 0.8);
  const repliesPerPage = Math.round(commentsPerPage * 0.15);
  const nestedPerPage = commentsPerPage - topLevelPerPage - repliesPerPage;

  let totalInserted = 0;

  // Maps page_id → top-level comment IDs (collected from RETURNING)
  const topLevelIdsByPage = new Map<number, number[]>();
  // Maps page_id → reply IDs
  const replyIdsByPage = new Map<number, number[]>();

  console.log(
    `Seeding ~${TARGET_COMMENTS.toLocaleString()} comments across ${pageIds.length} pages…`,
  );
  console.log(
    `  Per page: ${topLevelPerPage} top-level, ${repliesPerPage} replies, ${nestedPerPage} nested`,
  );

  // ── Phase 1: top-level comments ──────────────────────────────────────────
  console.log("Phase 1: inserting top-level comments…");
  let buffer: CommentRow[] = [];

  for (const pageId of pageIds) {
    const ids: number[] = [];
    topLevelIdsByPage.set(pageId, ids);

    for (let i = 0; i < topLevelPerPage; i++) {
      buffer.push({
        text: rand(COMMENT_TEXTS),
        page_id: pageId,
        user_id: rand(userIds),
        in_reply_to: null,
        in_reply_to_comment_reply: null,
        created_at: randDate(),
      });

      if (buffer.length === BATCH_SIZE) {
        const returned = await insertBatch(buffer);
        // Distribute returned IDs back to their respective pages
        let bufIdx = 0;
        for (const row of buffer) {
          topLevelIdsByPage.get(row.page_id)!.push(returned[bufIdx++]);
        }
        totalInserted += returned.length;
        process.stdout.write(`\r  ${totalInserted.toLocaleString()} inserted…`);
        buffer = [];
      }
    }
  }

  // Flush remaining top-level
  if (buffer.length > 0) {
    const returned = await insertBatch(buffer);
    let bufIdx = 0;
    for (const row of buffer) {
      topLevelIdsByPage.get(row.page_id)!.push(returned[bufIdx++]);
    }
    totalInserted += returned.length;
    buffer = [];
  }
  console.log(`\n  Phase 1 done: ${totalInserted.toLocaleString()} top-level comments.`);

  // ── Phase 2: reply comments ───────────────────────────────────────────────
  console.log("Phase 2: inserting reply comments…");
  let replyInserted = 0;

  for (const pageId of pageIds) {
    const parentIds = topLevelIdsByPage.get(pageId)!;
    if (parentIds.length === 0) continue;

    const replyIds: number[] = [];
    replyIdsByPage.set(pageId, replyIds);

    for (let i = 0; i < repliesPerPage; i++) {
      buffer.push({
        text: rand(COMMENT_TEXTS),
        page_id: pageId,
        user_id: rand(userIds),
        in_reply_to: rand(parentIds),
        in_reply_to_comment_reply: null,
        created_at: randDate(),
      });

      if (buffer.length === BATCH_SIZE) {
        const returned = await insertBatch(buffer);
        let bufIdx = 0;
        for (const row of buffer) {
          replyIdsByPage.get(row.page_id)?.push(returned[bufIdx++]);
        }
        replyInserted += returned.length;
        process.stdout.write(`\r  ${replyInserted.toLocaleString()} replies inserted…`);
        buffer = [];
      }
    }
  }

  if (buffer.length > 0) {
    const returned = await insertBatch(buffer);
    let bufIdx = 0;
    for (const row of buffer) {
      replyIdsByPage.get(row.page_id)?.push(returned[bufIdx++]);
    }
    replyInserted += returned.length;
    buffer = [];
  }
  totalInserted += replyInserted;
  console.log(`\n  Phase 2 done: ${replyInserted.toLocaleString()} replies.`);

  // ── Phase 3: nested replies ───────────────────────────────────────────────
  console.log("Phase 3: inserting nested replies…");
  let nestedInserted = 0;

  for (const pageId of pageIds) {
    const parentIds = topLevelIdsByPage.get(pageId)!;
    const replyIds = replyIdsByPage.get(pageId) ?? [];
    if (parentIds.length === 0 || replyIds.length === 0) continue;

    for (let i = 0; i < nestedPerPage; i++) {
      const replyId = rand(replyIds);
      buffer.push({
        text: rand(COMMENT_TEXTS),
        page_id: pageId,
        user_id: rand(userIds),
        in_reply_to: rand(parentIds),
        in_reply_to_comment_reply: replyId,
        created_at: randDate(),
      });

      if (buffer.length === BATCH_SIZE) {
        const returned = await insertBatch(buffer);
        nestedInserted += returned.length;
        process.stdout.write(`\r  ${nestedInserted.toLocaleString()} nested inserted…`);
        buffer = [];
      }
    }
  }

  if (buffer.length > 0) {
    const returned = await insertBatch(buffer);
    nestedInserted += returned.length;
    buffer = [];
  }
  totalInserted += nestedInserted;
  console.log(`\n  Phase 3 done: ${nestedInserted.toLocaleString()} nested replies.`);
  console.log(`Total comments inserted: ${totalInserted.toLocaleString()}`);
}

async function updatePhotos(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
  const avatarFiles = listImages(path.join(SEED_IMAGES_BASE, "avatars"));
  const pageFiles = listImages(path.join(SEED_IMAGES_BASE, "pages"));

  const fallbackAvatar = "/images/users/placeholder.png";
  const fallbackPage = "/images/pages/placeholder.png";

  console.log(
    `\nUpdating photos: ${avatarFiles.length} avatars, ${pageFiles.length} page thumbnails…`,
  );

  // Update user avatars
  for (let i = 0; i < userIds.length; i++) {
    const file =
      avatarFiles.length > 0
        ? avatarFiles[i % avatarFiles.length]
        : null;
    const url = file ? `/seed-images/avatars/${file}` : fallbackAvatar;
    await pool.query(
      "UPDATE users SET photo_url = $1, photo_key = NULL WHERE id = $2",
      [url, userIds[i]],
    );
  }
  console.log(`  ${userIds.length} user avatars updated.`);

  // Update page thumbnails
  for (let i = 0; i < pageIds.length; i++) {
    const file =
      pageFiles.length > 0
        ? pageFiles[i % pageFiles.length]
        : null;
    const url = file ? `/seed-images/pages/${file}` : fallbackPage;
    await pool.query(
      `UPDATE pages
       SET photo_url = $1, cropped_photo_url = $1, photo_key = NULL, cropped_photo_key = NULL
       WHERE id = $2`,
      [url, pageIds[i]],
    );
  }
  console.log(`  ${pageIds.length} page thumbnails updated.`);
}

async function main(): Promise<void> {
  // Verify manifest exists (phase 1 must have run first)
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(
      `Manifest not found at ${MANIFEST_PATH}. Run the E2E seed phase first (npm run seed:e2e).`,
    );
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8")) as {
    users: Array<{ username: string }>;
    pages: Array<{ id: number }>;
  };

  // Fetch real IDs from DB (source of truth)
  const usersResult = await pool.query<{ id: number }>(
    "SELECT id FROM users ORDER BY id",
  );
  const pagesResult = await pool.query<{ id: number }>(
    "SELECT id FROM pages WHERE status_id = (SELECT id FROM page_statuses WHERE status = 'published') ORDER BY id",
  );

  const userIds = usersResult.rows.map((r) => r.id);
  const pageIds = pagesResult.rows.map((r) => r.id);

  console.log(`Found ${userIds.length} users and ${pageIds.length} published pages in DB.`);

  if (userIds.length === 0 || pageIds.length === 0) {
    throw new Error("No users or pages found. Run the E2E seed phase first.");
  }

  await seedComments(userIds, pageIds);
  await updatePhotos(userIds, pageIds);

  await pool.end();
  console.log("\nSeed complete.");
}

main().catch((err) => {
  console.error(err);
  pool.end();
  process.exit(1);
});
