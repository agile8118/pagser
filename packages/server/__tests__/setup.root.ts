// Loaded by Mocha via `file:` BEFORE any spec.
// Order matters: AWS mocks must be installed before the app imports the SDK clients.
import "./helpers/aws-mocks.js";

// Now safe to import anything that touches the AWS SDK or DB pool.
import { setupTestDb } from "./helpers/db.js";
import { installAwsDefaults } from "./helpers/aws-mocks.js";

// Top-level await is allowed in ESM and runs before any spec is parsed by Mocha
// because the loader processes this file before discovering specs.
await setupTestDb();
installAwsDefaults();
