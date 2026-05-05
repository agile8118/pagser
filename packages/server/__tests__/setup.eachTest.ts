import { truncateAll, closeDb } from "./helpers/db.js";
import { installAwsDefaults } from "./helpers/aws-mocks.js";

beforeEach(async () => {
  await truncateAll();
  installAwsDefaults();
});

after(async () => {
  await closeDb();
});
