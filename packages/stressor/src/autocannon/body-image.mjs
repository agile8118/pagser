import autocannon from "autocannon";
import { readFileSync } from "fs";
import { parseArgs } from "node:util";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    connections: { type: "string", default: "10" },
    duration: { type: "string", default: "20" },
    "page-id": { type: "string" },
    token: { type: "string" },
    image: { type: "string", default: path.join(__dirname, "image.jpg") },
    rate: { type: "string" },
  },
});

if (!args["page-id"]) {
  console.error("Required: --page-id <id>");
  console.error("Example:");
  console.error(
    "node src/autocannon/body-image.mjs --url http://localhost:3080 --connections 10 --duration 20 --page-id 42");
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

const imageBuffer = readFileSync(args.image);
const endpoint = `${args.url}/api/pages/${args["page-id"]}/body-image`;

console.log(`Image:    ${args.image} (${(imageBuffer.length / 1024).toFixed(1)} KB)`);
console.log(`Endpoint: POST ${endpoint}`);
console.log(`Config:   ${args.connections} connections, ${args.duration}s\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: endpoint,
      method: "POST",
      headers: {
        authorization: token,
        "content-type": "image/jpeg",
      },
      body: imageBuffer,
      connections: Number(args.connections),
      duration: Number(args.duration),
      overallRate: args.rate ? Number(args.rate) : undefined,
    },
    (err, res) => (err ? reject(err) : resolve(res))
  );

  autocannon.track(instance);
});
