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
  const tablesSQL = fs
    .readFileSync(path.join(__dirname, "./tables.sql"))
    .toString();

  // Grab the triggers sql file
  const triggersSQL = fs
    .readFileSync(path.join(__dirname, "./triggers.sql"))
    .toString();

  try {
    await pool.query("DROP TABLE IF EXISTS users");
    console.log("[postgres] users table was dropped.");

    // Execute the sql file to create our tables
    await pool.query(tablesSQL);
    console.log("[postgres] tables were created successfully.");

    // Execute the sql file to fire up our triggers
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

      pool.end();
    }
  );
})();
