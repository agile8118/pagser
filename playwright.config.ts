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
    command: "tsx ./src/index.ts",
    url: "http://localhost:3082",
    reuseExistingServer: false,
    cwd: "packages/server",
    env: {
      DB_DATABASE: "pagser_test",
      NODE_ENV: "test",
      PORT: "3082",
      SKIP_EMAIL: "true",
    },
    timeout: 30_000,
  },
});
