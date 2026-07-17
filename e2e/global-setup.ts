import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverDir = path.join(__dirname, "../packages/server");

export default function globalSetup() {
  // Create the Playwright database if it doesn't exist
  execSync("./env.sh DB_TARGET=playwright NODE_ENV=test node --import tsx/esm __tests__/setup.createDb.ts", {
    cwd: serverDir,
    stdio: "inherit",
  });

  // Apply schema (drops and recreates all tables)
  execSync("./env.sh DB_TARGET=playwright NODE_ENV=test node --import tsx/esm scripts/setup-test-schema.ts", {
    cwd: serverDir,
    stdio: "inherit",
  });
}
