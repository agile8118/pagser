import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  workers: 1,
  timeout: 60_000,
  use: {
    baseURL: "http://localhost:3082",
  },
  webServer: {
    command: "tsx ./src/index.ts",
    url: "http://localhost:3082",
    reuseExistingServer: true,
    cwd: "../../packages/server",
    env: {
      DB_DATABASE: "pagser",
      NODE_ENV: "test",
      PORT: "3082",
    },
    timeout: 30_000,
  },
});
