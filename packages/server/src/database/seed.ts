import { Pool } from "pg";
import keys from "../config/keys.js";
import { hashPassword } from "cpeak";
import { createDatabase, applySchema } from "./schema.js";

// Create the database if it doesn't exist
await createDatabase();

const pool = new Pool({
  user: keys.dbUser as string,
  host: keys.dbHost as string,
  database: keys.dbDatabase as string,
  password: keys.dbPassword as string,
  port: Number(keys.dbPort),
  ssl:
    process.env.NODE_ENV_DB === "production"
      ? {
          rejectUnauthorized: false,
        }
      : false,
});

// Test the database connection
try {
  const client = await pool.connect();
  console.log(`[postgres] connected to database: ${keys.dbDatabase}`);
  client.release();
} catch (err) {
  console.error("[postgres] database connection failed:", err);
  process.exit(1);
}

// Drop, create, and trigger setup
try {
  await applySchema(pool, { verbose: true });
} catch (err) {
  console.log(err);
}

// -----------------------
//     ADDING USERS
// -----------------------

const hashedPassword = await hashPassword("string");

console.log("\nAdding some users data...");

const usersResult = await pool.query(
  `
  INSERT INTO users (name, username, email, password, verified)
  VALUES
  ('Joseph', 'joseph', 'joseph.test@pagser.local', $1, true),
  ('Rogers Brown', 'rgGamer', 'rogers.test@pagser.local', $1, true),
  ('David Miller', 'davidChef', 'david.test@pagser.local', $1, true)
  RETURNING id
  `,
  [hashedPassword],
);
console.log(
  "[postgres] 3 users were added to the database with the password 'string'.",
);

const josephId = usersResult.rows[0].id;

const pages = [
  {
    title: "Getting Started with Node.js",
    url: "getting-started-with-nodejs",
    brief_description:
      "A practical introduction to Node.js for backend developers.",
    targets: "Developers new to Node.js who want to build their first server.",
    body: "<p>Node.js is a JavaScript runtime built on Chrome's V8 engine. In this guide we cover installation, your first HTTP server, and the module system.</p>",
    tags: ["nodejs", "javascript", "backend"],
  },
  {
    title: "Understanding PostgreSQL Indexes",
    url: "understanding-postgresql-indexes",
    brief_description: "How indexes work and when to use them in PostgreSQL.",
    targets: "Backend developers looking to optimize slow queries.",
    body: "<p>An index is a data structure that speeds up SELECT queries at the cost of additional writes. B-tree, Hash, GIN, and GiST are the most common types.</p>",
    tags: ["postgresql", "database", "performance"],
  },
  {
    title: "TypeScript Generics in Practice",
    url: "typescript-generics-in-practice",
    brief_description:
      "Real-world patterns for writing reusable typed code with generics.",
    targets: "TypeScript developers who want to go beyond basic types.",
    body: "<p>Generics allow you to write functions and classes that work with any type while still preserving type safety. This post covers constrained generics, conditional types, and mapped types.</p>",
    tags: ["typescript", "javascript"],
  },
];

console.log("\nAdding benchmark pages...");

for (const p of pages) {
  const pageResult = await pool.query(
    `INSERT INTO pages (title, url, type_id, status_id, user_id, brief_description, targets, body)
     VALUES ($1, $2, 2, 1, $3, $4, $5, $6)
     RETURNING id`,
    [p.title, p.url, josephId, p.brief_description, p.targets, p.body],
  );
  const pageId = pageResult.rows[0].id;
  await pool.query(
    `INSERT INTO tags (page_id, name) SELECT $1, unnest($2::text[])`,
    [pageId, p.tags],
  );
}
console.log(
  `[postgres] ${pages.length} pages were added to the database with the user 'Joseph' as the author.`,
);

await pool.end();
