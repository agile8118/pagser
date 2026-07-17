import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:3082",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  globalSetup: "./e2e/global-setup.ts",
  workers: 1,
  webServer: {
    command: "./env.sh DB_TARGET=playwright NODE_ENV=test PORT=3082 SKIP_EMAIL=true tsx ./src/index.ts",
    url: "http://localhost:3082",
    reuseExistingServer: false,
    cwd: "packages/server",
    timeout: 30_000,
  },
});
