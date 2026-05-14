import { pool } from "../src/database/index.js";
import { truncateAll } from "../src/database/schema.js";
import { installAwsDefaults } from "./helpers/aws-mocks.js";

beforeEach(async () => {
  await truncateAll(pool);
  installAwsDefaults();
});

after(async () => {
  await pool.end();
});
