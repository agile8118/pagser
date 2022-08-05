import { Pool } from "pg";
import fs from "fs";
import path from "path";

const pool = new Pool({
  user: "joseph",
  host: "localhost",
  database: "pagser",
  password: "",
  port: 5432,
});

// Grab the tables sql file
const tablesSQL = fs
  .readFileSync(path.join(__dirname, "./tables.sql"))
  .toString();

// Grab the triggers sql file
const triggersSQL = fs
  .readFileSync(path.join(__dirname, "./triggers.sql"))
  .toString();

// Execute the sql file to create our tables
pool.query(tablesSQL, (err, res) => {
  if (err) return console.log(err);
  console.log("[postgres] tables were created successfully.");
});

// Execute the sql file to fire up our triggers
pool.query(triggersSQL, (err, res) => {
  if (err) return console.log(err);
  console.log("[postgres] triggers were fired up successfully.");
});

// Fetch from the database, returns an array if there were more than one
// record or an object if there was only one record
const find = (query: string) => {
  return new Promise(function (resolve, reject) {
    pool.query(query, function (err, res) {
      if (err) {
        reject(err);
      } else {
        // if (res. === 1) {
        //   resolve(res[0]);
        // } else {
        // }
        resolve(res);
      }
    });
  });
};

export const DB = { find };
