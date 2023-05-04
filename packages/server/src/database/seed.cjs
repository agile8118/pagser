const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const pool = new Pool({
  user: "joseph",
  host: "localhost",
  database: "pagser",
  password: "",
  port: 5432,
});

// Create triggers and tables
(async () => {
  // Grab the tables sql file
  const usersTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/users.sql"))
    .toString();
  const pageTypesTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/page_types.sql"))
    .toString();
  const pageStatusesTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/page_statuses.sql"))
    .toString();
  const pagesTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/pages.sql"))
    .toString();
  const attachFilesTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/attach_files.sql"))
    .toString();
  const tagsTableSQL = fs
    .readFileSync(path.join(__dirname, "./tables/tags.sql"))
    .toString();

  // Grab the triggers sql file
  const triggersSQL = fs
    .readFileSync(path.join(__dirname, "./triggers.sql"))
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
        "[postgres] 3 users were added to the database with the password 'string'."
      );

      // pool.end();
    }
  );
})();
