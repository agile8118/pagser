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
    amount: { type: "string" },
    duration: { type: "string", default: "20" },
    rate: { type: "string" },
    manifest: {
      type: "string",
      default: path.join(__dirname, "../../fixtures/.seed-manifest.json"),
    },
  },
});

let manifest;
try {
  manifest = JSON.parse(readFileSync(args.manifest, "utf8"));
} catch {
  console.error(`Could not read seed manifest at ${args.manifest}`);
  console.error("Run `yarn seed:e2e` first (it writes fixtures/.seed-manifest.json).");
  process.exit(1);
}

const publicPages = manifest.pages.filter((p) => p.type === "public");
if (publicPages.length === 0) {
  console.error("Manifest has no public pages.");
  process.exit(1);
}

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const requests = Array.from({ length: 100 }, () => ({
  method: "GET",
  path: `/public-pages/${rand(publicPages).url}`,
}));

console.log(`Endpoint: GET ${args.url}/public-pages/:url (server-rendered, ${publicPages.length} public pages)`);
console.log(`Config:   ${args.connections} connections, ${args.amount ? args.amount + " requests" : args.duration + "s"}\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: args.url,
      requests,
      connections: Number(args.connections),
      amount: args.amount ? Number(args.amount) : undefined,
      duration: Number(args.duration),
      overallRate: args.rate ? Number(args.rate) : undefined,
    },
    (err, res) => (err ? reject(err) : resolve(res))
  );

  autocannon.track(instance);
});
