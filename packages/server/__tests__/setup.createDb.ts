import { createDatabase } from "../src/database/schema.js";

const DB_NAME = process.env.DB_DATABASE;

if (!DB_NAME || DB_NAME !== "pagser_test") {
  console.error(
    `[setup] Tests must run with DB_DATABASE=pagser_test (got: "${DB_NAME}"). ` +
    `Use: npm test`
  );
  process.exit(1);
}

await createDatabase();