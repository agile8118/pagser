import { pool } from "../src/database/index.js";
import { applySchema } from "../src/database/schema.js";

await applySchema(pool);
await pool.end();
