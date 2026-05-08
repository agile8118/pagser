import pkg from "pg";

const DB_NAME = process.env.DB_DATABASE;

if (!DB_NAME || DB_NAME !== "pagser_test") {
  console.error(
    `[setup] Tests must run with DB_DATABASE=pagser_test (got: "${DB_NAME}"). ` +
    `Use: npm test`
  );
  process.exit(1);
}

const adminPool = new pkg.Pool({
  user: process.env.DB_USER || "joseph",
  host: process.env.DB_HOST || "localhost",
  database: "postgres",
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT) || 5432,
  ssl: false,
});

const result = await adminPool.query(
  `SELECT 1 FROM pg_database WHERE datname = $1`,
  [DB_NAME],
);

if (result.rowCount === 0) {
  await adminPool.query(`CREATE DATABASE ${DB_NAME}`);
  console.log(`[postgres] created test database: ${DB_NAME}`);
}

await adminPool.end();