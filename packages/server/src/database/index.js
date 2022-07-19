const mysql = require("mysql");
const keys = require("../config/keys");

// Create the MySQL connection
let connection = mysql.createConnection(keys.mysql_url);

// Show a message if connected to the database
connection.connect((e) => {
  if (e) throw e;
  console.log("Successfully connected to the MySQL database.");
});

// Create the user's table
connection.query(
  `CREATE TABLE IF NOT EXISTS users (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      username VARCHAR(200) NOT NULL,
      email VARCHAR(200) NOT NULL,
      password VARCHAR(200) NOT NULL,
      biography VARCHAR(200),
      headline VARCHAR(200),
      links_website VARCHAR(200),
      links_facebook VARCHAR(200),
      links_youtube VARCHAR(200),
      links_twitter VARCHAR(200),
      links_linkedin VARCHAR(200),
      photo_public_id VARCHAR(200),
      photo_secure_url VARCHAR(200),
      verified BOOLEAN,
      token_code VARCHAR(200),
      token_date DATE,
      created_date TIMESTAMP DEFAULT NOW() NOT NULL,
      UNIQUE (username)
   );`,
  (e) => {
    if (e) throw e;
  }
);

// // Create the page's table
// connection.query(
//   `CREATE TABLE IF NOT EXISTS pages (
//       id INTEGER AUTO_INCREMENT PRIMARY KEY,
//       type VARCHAR(200) NOT NULL,
//       tags VARCHAR(200) NOT NULL,
//       url VARCHAR(200) NOT NULL,
//       user_id INT,
//       created_date TIMESTAMP DEFAULT NOW() NOT NULL,
//       last_updated TIMESTAMP DEFAULT NOW() NOT NULL,
//       FOREIGN KEY (user_id) REFERENCES users(id)
//    );`,
//   (e) => {
//     if (e) throw e;
//   }
// );

module.exports = (DB) => {
  // Count how many documents there is in a particular collection
  DB.countDocuments = (table) => {
    return new Promise((resolve, reject) => {
      let query = `SELECT COUNT(*) AS count FROM ${table}`;
      connection.query(query, (e, result) => {
        if (e) reject(e);
        resolve(result[0].count);
      });
    });
  };

  // Find the documents we need
  DB.find = (table, queryObj, options) => {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM ${table} ORDER BY ${
        Object.keys(options.sort)[0]
      } LIMIT ${options.skip}, ${options.limit}`;

      connection.query(query, (e, results) => {
        if (e) reject(e);
        resolve(results);
      });
    });
  };
};
