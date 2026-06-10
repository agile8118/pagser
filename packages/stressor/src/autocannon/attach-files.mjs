/**
 * Stress test for POST /api/pages/:id/attach-files
 *
 * Each request gets a unique ?filename= so the server's duplicate-name check
 * never fires. Bump the 5-file cap in uploader.ts before running.
 *
 * Example:
 *   node src/autocannon/attach-files.mjs --url http://localhost:3080 --connections 5 --duration 20 --page-id 42
 */

import autocannon from "autocannon";
import { readFileSync } from "fs";
import { parseArgs } from "node:util";
import path from "path";
import { fileURLToPath } from "url";
import { randomBytes } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    connections: { type: "string", default: "10" },
    duration: { type: "string", default: "20" },
    "page-id": { type: "string" },
    token: { type: "string" },
    file: { type: "string", default: path.join(__dirname, "image.jpg") },
    rate: { type: "string" },
  },
});

if (!args["page-id"]) {
  console.error("Required: --page-id <id>");
  console.error("Example:");
  console.error(
    "  node src/autocannon/attach-files.mjs --url http://localhost:3080 --connections 5 --duration 20 --page-id 42"
  );
  process.exit(1);
}

async function login() {
  const res = await fetch(`${args.url}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "joseph.test@pagser.local", password: "string" }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.token;
}

const token = args.token ?? await login();

const fileBuffer = readFileSync(args.file);
const basePath = `/api/pages/${args["page-id"]}/attach-files`;

console.log(`File:     ${args.file} (${(fileBuffer.length / 1024).toFixed(1)} KB)`);
console.log(`Endpoint: POST ${args.url}${basePath}?filename=<random>.jpg`);
console.log(`Config:   ${args.connections} connections, ${args.duration}s\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: args.url,
      connections: Number(args.connections),
      duration: Number(args.duration),
      overallRate: args.rate ? Number(args.rate) : undefined,
      requests: [
        {
          method: "POST",
          path: basePath,
          headers: {
            authorization: token,
            "content-type": "image/jpeg",
          },
          body: fileBuffer,
          setupRequest(req) {
            req.path = `${basePath}?filename=${randomBytes(8).toString("hex")}.jpg`;
            return req;
          },
        },
      ],
    },
    (err) => (err ? reject(err) : resolve())
  );

  autocannon.track(instance);
});
