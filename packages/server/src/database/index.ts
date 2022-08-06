import { Pool } from "pg";
import fs from "fs";
import path from "path";
import { TTables, IUser, IPage } from "./types";

// Make properties of a type optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

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
  return new Promise(function (resolve: (value: any) => void, reject) {
    pool.query(query, function (err, res) {
      if (err) {
        reject(err);
      } else {
        if (res.rows.length === 1) {
          resolve(res.rows[0]);
        } else {
          resolve(res.rows);
        }
      }
    });
  });
};

// Insert an item to the the specified table
const insert = <T>(
  table: TTables,
  data: T extends IUser ? Partial<T> : never
) => {
  return new Promise(function (resolve: (insertedData: T) => void, reject) {
    const _values: any[] = [];
    let _valuesSpecifiers = "";
    let _columns = "";

    // prepare out data for sql based on the data object provided
    Object.keys(data).map((key, index) => {
      _valuesSpecifiers += `$${index + 1}, `;
      _columns += key + ", ";
      _values.push(data[key]);
    });

    // remove the last 2 characters of value specifiers and columns
    _valuesSpecifiers = _valuesSpecifiers.slice(0, -2);
    _columns = _columns.slice(0, -2);

    const query = `INSERT INTO ${table}(${_columns}) VALUES (${_valuesSpecifiers}) RETURNING *`;

    pool.query(query, _values, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows[0]);
      }
    });
  });
};

export const DB = { find, insert };
