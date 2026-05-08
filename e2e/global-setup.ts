import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverDir = path.join(__dirname, "../packages/server");
const testEnv = { ...process.env, DB_DATABASE: "pagser_test", NODE_ENV: "test" };

export default function globalSetup() {
  // Create pagser_test database if it doesn't exist
  execSync("node --import tsx/esm __tests__/setup.createDb.ts", {
    cwd: serverDir,
    env: testEnv,
    stdio: "inherit",
  });

  // Apply schema (drops and recreates all tables)
  execSync("node --import tsx/esm scripts/setup-test-schema.ts", {
    cwd: serverDir,
    env: testEnv,
    stdio: "inherit",
  });
}
