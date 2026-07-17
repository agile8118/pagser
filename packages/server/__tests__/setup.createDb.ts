import { createDatabase } from "../src/database/schema.js";

const DB_TARGET = process.env.DB_TARGET;

if (DB_TARGET !== "test" && DB_TARGET !== "playwright") {
  console.error(
    `[setup] Refusing to run against the regular database (DB_TARGET: "${DB_TARGET}"). ` +
    `Use: npm test`
  );
  process.exit(1);
}

await createDatabase();