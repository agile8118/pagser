import { Pool } from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIXTURES = path.join(__dirname, "../fixtures");
const SEED_IMAGES_BASE = path.join(
  __dirname,
  "../../server/public/seed-images",
);

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
  database: process.env.DB_DATABASE ?? "pagser",
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

async function insertBatch(rows: CommentRow[]): Promise<number[]> {
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

async function seedComments(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
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
  console.log(
    `\n  Phase 1 done: ${totalInserted.toLocaleString()} top-level comments.`,
  );

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
        process.stdout.write(
          `\r  ${replyInserted.toLocaleString()} replies inserted…`,
        );
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
        process.stdout.write(
          `\r  ${nestedInserted.toLocaleString()} nested inserted…`,
        );
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
  console.log(
    `\n  Phase 3 done: ${nestedInserted.toLocaleString()} nested replies.`,
  );
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
      avatarFiles.length > 0 ? avatarFiles[i % avatarFiles.length] : null;
    const url = file ? `/seed-images/avatars/${file}` : fallbackAvatar;
    await pool.query(
      "UPDATE users SET photo_url = $1, photo_key = NULL WHERE id = $2",
      [url, userIds[i]],
    );
  }
  console.log(`  ${userIds.length} user avatars updated.`);

  // Update page thumbnails
  for (let i = 0; i < pageIds.length; i++) {
    const file = pageFiles.length > 0 ? pageFiles[i % pageFiles.length] : null;
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

const COLLECTION_TEMPLATES = [
  // Space & Astronomy
  {
    name: "Deep Space",
    description:
      "Black holes, dark matter, galaxy formation — writing that takes you to the edges of the observable universe.",
  },
  {
    name: "Space Exploration",
    description:
      "Missions past and future: Mars, the Moon, the outer planets, and the engineering that makes it possible.",
  },
  {
    name: "Cosmology and Origins",
    description:
      "The Big Bang, inflation, the Hubble tension — what we know and don't know about how everything began.",
  },
  {
    name: "Amateur Astronomy",
    description:
      "Telescopes, dark-sky sites, and the joy of looking up with your own eyes.",
  },
  {
    name: "Astrobiology",
    description:
      "The search for life beyond Earth — what we're looking for, where we're looking, and what finding it would mean.",
  },
  // Greek Mythology
  {
    name: "Greek Mythology Essentials",
    description:
      "The gods, the heroes, the monsters — the stories that have shaped Western imagination for three millennia.",
  },
  {
    name: "The Trojan Cycle",
    description:
      "Everything from the apple of discord to the wanderings of Odysseus — the greatest story arc of antiquity.",
  },
  {
    name: "Tragedy and the Stage",
    description:
      "Sophocles, Aeschylus, Euripides — the plays that invented drama and still perform better than almost anything written since.",
  },
  {
    name: "Myth and Philosophy",
    description:
      "How Greek myths encode questions about virtue, fate, justice, and the right way to live.",
  },
  {
    name: "Women in Greek Myth",
    description:
      "Medea, Antigone, Clytemnestra, Penelope — the female figures who survive and resist in a tradition dominated by heroes.",
  },
  // Literature and Shakespeare
  {
    name: "The Shakespeare Tragedies",
    description:
      "Hamlet, Lear, Macbeth, Othello — four plays that have never been matched for sustained dramatic intelligence.",
  },
  {
    name: "Victorian Fiction",
    description:
      "Dickens, Eliot, Hardy, the Brontes — novels that took the measure of a society in transformation.",
  },
  {
    name: "Poetry Worth Reading",
    description:
      "Donne to Keats to Bishop — poems that earn their difficulty and reward close attention.",
  },
  {
    name: "The Novel and Its Forms",
    description:
      "What the novel can do that no other form can — and the writers who've pushed those limits.",
  },
  {
    name: "Reading Deeply",
    description:
      "On annotation, rereading, slow reading, and the habits that separate readers who remember from readers who forget.",
  },
  // North American History
  {
    name: "The American Civil War",
    description:
      "Causes, campaigns, and consequences — the conflict that remade the United States and left problems unsolved for generations.",
  },
  {
    name: "Canada: Nation in the Making",
    description:
      "Confederation, the fur trade, Vimy Ridge, the quiet revolution — the story of a country that built itself differently.",
  },
  {
    name: "Indigenous Histories",
    description:
      "The deep history of North America before and after European contact — told from perspectives the textbooks omitted.",
  },
  {
    name: "The Long Twentieth Century",
    description:
      "The New Deal, the Cold War, civil rights, Vietnam — the decades that shaped contemporary North America.",
  },
  {
    name: "Colonial Encounters",
    description:
      "How European expansion transformed the continent — the trade networks, the diseases, the diplomacy, and the violence.",
  },
  // Hockey
  {
    name: "NHL History",
    description:
      "The Original Six, expansion, the dynasties — a century of professional hockey in North America.",
  },
  {
    name: "Hockey Analytics",
    description:
      "Corsi, expected goals, RAPM — how numbers changed the way teams are built and games are understood.",
  },
  {
    name: "The Game at Every Level",
    description:
      "From neighbourhood rinks to the Stanley Cup Final — writing about hockey as a lived experience.",
  },
  {
    name: "Women's Hockey",
    description:
      "From the first women's leagues to the PWHL — the long fight for a professional game.",
  },
  {
    name: "Great Moments in Hockey",
    description:
      "The Miracle on Ice, the Summit Series, overtime goals — the games people remember for a lifetime.",
  },
  // Software Engineering
  {
    name: "Engineering Fundamentals",
    description:
      "Core concepts every software engineer should have solid opinions about — databases, networking, testing, and system design.",
  },
  {
    name: "Career and Growth",
    description:
      "Honest writing about navigating a tech career — promotions, pivots, burnout, and what nobody tells you at the start.",
  },
  {
    name: "Architecture and Scale",
    description:
      "How systems evolve from a single server to something that handles millions of requests.",
  },
  {
    name: "DevOps and Reliability",
    description:
      "CI/CD pipelines, on-call culture, incident management, and keeping things running.",
  },
  {
    name: "Open Source and Community",
    description:
      "Lessons from maintaining and contributing to open source projects large and small.",
  },
  {
    name: "Leadership and Management",
    description:
      "What it means to lead a technical team — hiring, feedback, roadmaps, and the conversations everyone avoids.",
  },
];

async function seedCollections(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
  const pageFiles = listImages(path.join(SEED_IMAGES_BASE, "pages"));
  const fallback = "/images/pages/placeholder.png";

  console.log(`\nSeeding collections for ${userIds.length} users…`);

  for (let ui = 0; ui < userIds.length; ui++) {
    const userId = userIds[ui];
    const count = 15 + Math.floor(Math.random() * 16); // 15–30

    // Shuffle templates so each user gets a different order
    const templates = [...COLLECTION_TEMPLATES]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    for (let ci = 0; ci < templates.length; ci++) {
      const tmpl = templates[ci];
      const shared = Math.random() < 0.4; // ~40% shared
      const photoUrl =
        pageFiles.length > 0
          ? `/seed-images/pages/${pageFiles[(ui * 30 + ci) % pageFiles.length]}`
          : fallback;

      const res = await pool.query<{ id: number }>(
        `INSERT INTO collections (name, description, user_id, photo_url, photo_key, shared)
         VALUES ($1, $2, $3, $4, NULL, $5) RETURNING id`,
        [tmpl.name, tmpl.description, userId, photoUrl, shared],
      );
      const colId = res.rows[0].id;

      const pageCount = 8 + Math.floor(Math.random() * 23); // 8–30
      const shuffled = [...pageIds]
        .sort(() => Math.random() - 0.5)
        .slice(0, pageCount);
      for (let pi = 0; pi < shuffled.length; pi++) {
        await pool.query(
          `INSERT INTO collection_pages (collection_id, page_id, order_index) VALUES ($1, $2, $3)`,
          [colId, shuffled[pi], pi + 1],
        );
      }
    }

    process.stdout.write(`\r  ${ui + 1}/${userIds.length} users done…`);
  }
  console.log();
}

async function seedSubscriptions(userIds: number[]): Promise<void> {
  console.log(`\nSeeding subscriptions (each user follows at least 20)…`);
  const rows: Array<[number, number]> = [];

  for (const userId of userIds) {
    const others = userIds.filter((id) => id !== userId);
    const count = 20 + Math.floor(Math.random() * (others.length - 20 + 1));
    const targets = [...others].sort(() => Math.random() - 0.5).slice(0, count);
    for (const authorId of targets) {
      rows.push([userId, authorId]);
    }
  }

  // Bulk insert in batches of 1000
  for (let i = 0; i < rows.length; i += 1000) {
    const batch = rows.slice(i, i + 1000);
    const placeholders = batch
      .map((_, idx) => `($${idx * 2 + 1}, $${idx * 2 + 2})`)
      .join(", ");
    const values = batch.flat();
    await pool.query(
      `INSERT INTO subscriptions (subscriber_id, author_id) VALUES ${placeholders} ON CONFLICT DO NOTHING`,
      values,
    );
  }
  console.log(`  ${rows.length.toLocaleString()} subscription rows inserted.`);
}

async function seedHistory(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
  console.log(`\nSeeding read history (1–50 pages per user)…`);
  const rows: Array<[number, number, Date]> = [];

  for (const userId of userIds) {
    const count = 1 + Math.floor(Math.random() * 50);
    const pages = [...pageIds].sort(() => Math.random() - 0.5).slice(0, count);
    for (const pageId of pages) {
      rows.push([userId, pageId, randDate()]);
    }
  }

  for (let i = 0; i < rows.length; i += 1000) {
    const batch = rows.slice(i, i + 1000);
    const placeholders = batch
      .map(
        (_, idx) =>
          `($${idx * 3 + 1}, $${idx * 3 + 2}, $${idx * 3 + 3}, $${idx * 3 + 3})`,
      )
      .join(", ");
    const values = batch.flatMap(([u, p, d]) => [u, p, d]);
    await pool.query(
      `INSERT INTO history (user_id, page_id, created_at, updated_at) VALUES ${placeholders} ON CONFLICT DO NOTHING`,
      values,
    );
  }
  console.log(`  ${rows.length.toLocaleString()} history rows inserted.`);
}

async function seedRatings(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
  console.log(`\nSeeding page likes (10–30 per user)…`);
  const rows: Array<[number, number]> = [];

  for (const userId of userIds) {
    const count = 10 + Math.floor(Math.random() * 21);
    const pages = [...pageIds].sort(() => Math.random() - 0.5).slice(0, count);
    for (const pageId of pages) {
      rows.push([userId, pageId]);
    }
  }

  for (let i = 0; i < rows.length; i += 1000) {
    const batch = rows.slice(i, i + 1000);
    const placeholders = batch
      .map((_, idx) => `($${idx * 2 + 1}, $${idx * 2 + 2}, TRUE)`)
      .join(", ");
    const values = batch.flat();
    await pool.query(
      `INSERT INTO ratings (user_id, page_id, liked) VALUES ${placeholders} ON CONFLICT DO NOTHING`,
      values,
    );
  }
  console.log(`  ${rows.length.toLocaleString()} likes inserted.`);
}

async function seedReadLater(
  userIds: number[],
  pageIds: number[],
): Promise<void> {
  console.log(`\nSeeding read later (1–50 pages per user)…`);
  const rows: Array<[number, number]> = [];

  for (const userId of userIds) {
    const count = 1 + Math.floor(Math.random() * 50);
    const pages = [...pageIds].sort(() => Math.random() - 0.5).slice(0, count);
    for (const pageId of pages) {
      rows.push([userId, pageId]);
    }
  }

  for (let i = 0; i < rows.length; i += 1000) {
    const batch = rows.slice(i, i + 1000);
    const placeholders = batch
      .map((_, idx) => `($${idx * 2 + 1}, $${idx * 2 + 2})`)
      .join(", ");
    const values = batch.flat();
    await pool.query(
      `INSERT INTO read_later (user_id, page_id) VALUES ${placeholders} ON CONFLICT DO NOTHING`,
      values,
    );
  }
  console.log(`  ${rows.length.toLocaleString()} read-later rows inserted.`);
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

  console.log(
    `Found ${userIds.length} users and ${pageIds.length} published pages in DB.`,
  );

  if (userIds.length === 0 || pageIds.length === 0) {
    throw new Error("No users or pages found. Run the E2E seed phase first.");
  }

  await seedComments(userIds, pageIds);
  await updatePhotos(userIds, pageIds);
  await seedCollections(userIds, pageIds);
  await seedSubscriptions(userIds);
  await seedHistory(userIds, pageIds);
  await seedReadLater(userIds, pageIds);
  await seedRatings(userIds, pageIds);

  await pool.end();
  console.log("\nSeed complete.");
}

main().catch((err) => {
  console.error(err);
  pool.end();
  process.exit(1);
});
