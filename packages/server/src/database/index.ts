import pkg from "pg";
import { TTables, IUser, IPage, IAttachFile } from "./types.js";

/**
 * @important Run the seed.js file first to get our tables, triggers and some starter data
 */

// Make properties of a type optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Connect to the postgres database
const pool = new pkg.Pool({
  user: "joseph",
  host: "localhost",
  database: "pagser",
  password: "",
  port: 5432,
});

// Fetch from the database, returns an array if there were more than one
// record or an object if there was only one record
const find = <T>(query: string, values: any[] = []) => {
  return new Promise(function (resolve: (value: T | null) => void, reject) {
    pool.query(query, values, function (err, res) {
      if (err) {
        reject(err);
      } else {
        if (res.rows.length === 1) return resolve(res.rows[0] as T);
        if (!res.rows || !res.rows.length) return resolve(null);
        resolve(res.rows as any);
      }
    });
  });
};

// Insert an item to the the specified table
const insert = <T>(
  table: TTables,
  data: T extends IUser
    ? Partial<T>
    : T extends IPage
    ? Partial<T>
    : T extends IAttachFile
    ? Partial<T>
    : never
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

// Update an item in a specific table
const update = <T>(
  table: TTables,
  data: Partial<T>,
  where: string,
  valuesForWhere: any[] = []
) => {
  return new Promise(function (resolve: (result: any) => void, reject) {
    let _columnsWithValueSpecifiers = "";
    let _values: any[] = [];

    // prepare our data for sql based on the data object provided
    Object.keys(data).map((key, index) => {
      _columnsWithValueSpecifiers += `${key} = $${index + 1}, `;
      _values.push(data[key]);
    });

    // remove the last 2 characters
    _columnsWithValueSpecifiers = _columnsWithValueSpecifiers.slice(0, -2);

    // values in the where condition
    if (valuesForWhere.length) {
      _values = [..._values, ...valuesForWhere];
    }

    const query = `UPDATE ${table} SET ${_columnsWithValueSpecifiers} WHERE ${where}`;

    pool.query(query, _values, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

// Delete from the database
const del = <T>(table: TTables, where: string, values: any[] = []) => {
  return new Promise(function (resolve: (value: T | null) => void, reject) {
    pool.query(
      `DELETE FROM ${table} WHERE ${where} RETURNING *`,
      values,
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          if (res.rows.length === 1) return resolve(res.rows[0] as T);
          if (!res.rows || !res.rows.length) return resolve(null);
          resolve(res.rows as any);
        }
      }
    );
  });
};

// For any general query, will be used for less common and more advanced queries
const query = (query: string, values: any[] = []) => {
  return new Promise(function (resolve: (value: any) => void, reject) {
    pool.query(query, values, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

export const DB = { find, insert, update, delete: del, query };
