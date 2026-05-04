import { Pool } from "pg";
import fs from "fs";
import path from "path";
import keys from "../config/keys.js";
import bcrypt from "bcrypt";

// Create the database if it doesn't exist
async function createDatabase() {
  const adminPool = new Pool({
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

const databasePath = new URL("./", import.meta.url).pathname;

// Create triggers and tables
(async () => {
  // Grab the tables sql file
  const usersTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/users.sql"))
    .toString();
  const pageTypesTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/page_types.sql"))
    .toString();
  const pageStatusesTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/page_statuses.sql"))
    .toString();
  const pagesTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/pages.sql"))
    .toString();
  const attachFilesTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/attach_files.sql"))
    .toString();
  const tagsTableSQL = fs
    .readFileSync(path.join(databasePath, "./tables/tags.sql"))
    .toString();

  // Grab the triggers sql file
  const triggersSQL = fs
    .readFileSync(path.join(databasePath, "./triggers.sql"))
    .toString();

  try {
    // Drop all out tables
    console.log("\nDropping the tables...");
    await pool.query("DROP TABLE IF EXISTS attach_files");
    console.log("[postgres] attach_files table was dropped.");
    await pool.query("DROP TABLE IF EXISTS pages cascade");
    console.log("[postgres] pages table was dropped.");
    await pool.query("DROP TABLE IF EXISTS page_statuses");
    console.log("[postgres] page_statuses table was dropped.");
    await pool.query("DROP TABLE IF EXISTS page_types");
    console.log("[postgres] page_types table was dropped.");
    await pool.query("DROP TABLE IF EXISTS tags");
    console.log("[postgres] tags table was dropped.");
    await pool.query("DROP TABLE IF EXISTS users");
    console.log("[postgres] users table was dropped.");

    // Execute the sql file to create our tables
    console.log("\nCreating the tables...");
    await pool.query(usersTableSQL);
    console.log("[postgres] users table was created successfully.");
    await pool.query(pageTypesTableSQL);
    console.log("[postgres] page_types table was created successfully.");
    await pool.query(pageStatusesTableSQL);
    console.log("[postgres] page_statuses table was created successfully.");
    await pool.query(pagesTableSQL);
    console.log("[postgres] pages table was created successfully.");
    await pool.query(attachFilesTableSQL);
    console.log("[postgres] attach_files table was created successfully.");
    await pool.query(tagsTableSQL);
    console.log("[postgres] tags table was created successfully.");

    // Execute the sql file to fire up our triggers
    console.log("\nSetting up the triggers...");
    await pool.query(triggersSQL);
    console.log("[postgres] triggers were fired up successfully.");
  } catch (err) {
    console.log(err);
  }
})();

// -----------------------
//     ADDING USERS
// -----------------------

(async () => {
  // Password of all the users will be simply 'string'
  const hashedPassword = await bcrypt.hash("string", 10);

  console.log("\nAdding some users data...");

  pool.query(
    `
  INSERT INTO users (name, username, email, password, verified) 
  VALUES
  ('Joseph H.', 'joseph', 'agile.8272@gmail.com', '${hashedPassword}', true),
  ('Rogers Brown', 'rgGamer', 'pokhraph@gmail.com', '${hashedPassword}', true),
  ('David Miller', 'davidChef', 'antwonders@gmail.com', '${hashedPassword}', true)
  `,
    (err, res) => {
      if (err) return console.log(err);
      console.log(
        "[postgres] 3 users were added to the database with the password 'string'.",
      );

      // pool.end();
    },
  );
})();
