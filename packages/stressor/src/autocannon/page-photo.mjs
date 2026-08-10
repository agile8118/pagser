import autocannon from "autocannon";
import { readFileSync } from "fs";
import { parseArgs } from "node:util";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    connections: { type: "string", default: "1" },
    amount: { type: "string" },
    duration: { type: "string", default: "60" },
    "page-id": { type: "string" },
    x: { type: "string", default: "77" },
    y: { type: "string", default: "446" },
    width: { type: "string", default: "8039" },
    height: { type: "string", default: "4522" },
    token: { type: "string" },
    image: { type: "string", default: path.join(__dirname, "image.jpg") },
    rate: { type: "string", default: "1" },
  },
});

if (!args["page-id"]) {
  console.error("Required: --page-id <id>");
  console.error("Example:");
  console.error(
    "node src/autocannon/page-photo.mjs --url http://localhost:3080 --page-id 3 --image /path/to/photo.jpg"
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

const imageBuffer = readFileSync(args.image);
const endpoint = `${args.url}/api/pages/${args["page-id"]}/photo?x=${args.x}&y=${args.y}&width=${args.width}&height=${args.height}`;

console.log(`Image:    ${args.image} (${(imageBuffer.length / 1024 / 1024).toFixed(1)} MB)`);
console.log(`Endpoint: POST ${endpoint}`);
console.log(`Config:   ${args.connections} connections, ${args.amount ? args.amount + " requests" : args.duration + "s"}, rate=${args.rate}/s\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: endpoint,
      method: "PUT",
      headers: {
        authorization: token,
        "content-type": "image/jpeg",
      },
      body: imageBuffer,
      connections: Number(args.connections),
      amount: args.amount ? Number(args.amount) : undefined,
      duration: Number(args.duration),
      overallRate: Number(args.rate),
    },
    (err, res) => (err ? reject(err) : resolve(res))
  );

  autocannon.track(instance);
});
