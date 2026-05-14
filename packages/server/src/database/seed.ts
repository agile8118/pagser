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

await pool.query(
  `
  INSERT INTO users (name, username, email, password, verified)
  VALUES
  ('Joseph', 'joseph', 'agile.8272@gmail.com', $1, true),
  ('Rogers Brown', 'rgGamer', 'pokhraph@gmail.com', $1, true),
  ('David Miller', 'davidChef', 'antwonders@gmail.com', $1, true)
  `,
  [hashedPassword],
);
console.log(
  "[postgres] 3 users were added to the database with the password 'string'.",
);

await pool.end();
