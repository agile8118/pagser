// Loaded by Mocha via `file:` BEFORE any spec.
// Order matters: AWS mocks must be installed before the app imports the SDK clients.
import "./helpers/aws-mocks.js";

// Now safe to import anything that touches the AWS SDK or DB pool.
import { pool } from "../src/database/index.js";
import { applySchema } from "../src/database/schema.js";
import { installAwsDefaults } from "./helpers/aws-mocks.js";

await applySchema(pool);
installAwsDefaults();
