// Benchmarks the API under a realistic mix of traffic, the way real users
// would hit the server, all at the same time:
//
//   70% — anonymous reads: public page views and comment fetches
//   20% — logged-in reads: comments, published pages, history
//    8% — comment posts
//    2% — page creates: the full draft → contents → final step → publish flow
//
// No file uploads or media processing here — APIs only. Needs a seeded
// database (yarn seed from stressor package) since tokens and page URLs come from the manifest.
// Pass --rate for a paced run (e.g. --rate 500), omit it to push max load.
// Pass --compression-enabled to send Accept-Encoding like a real browser would.

import autocannon from "autocannon";
import { readFileSync } from "fs";
import { parseArgs } from "node:util";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    duration: { type: "string", default: "30" },
    rate: { type: "string" },
    "compression-enabled": { type: "boolean", default: false },
    manifest: {
      type: "string",
      default: path.join(__dirname, "../../fixtures/.seed-manifest.json"),
    },
  },
});

// Weighted traffic mix (fractions of --rate, total requests/sec)
const WEIGHTS = {
  "anonymous reads": 0.7,
  "logged-in reads": 0.2,
  "comment posts": 0.08,
  "page creates": 0.02,
};

let manifest;
try {
  manifest = JSON.parse(readFileSync(args.manifest, "utf8"));
} catch {
  console.error(`Could not read seed manifest at ${args.manifest}`);
  console.error("Run `yarn seed:e2e` first (it writes fixtures/.seed-manifest.json).");
  process.exit(1);
}

const publicPages = manifest.pages.filter((p) => p.type === "public");
const tokens = manifest.users.map((u) => u.token);
if (publicPages.length === 0 || tokens.length === 0) {
  console.error("Manifest has no public pages or no user tokens.");
  process.exit(1);
}

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const json = { "content-type": "application/json" };
const encodingHeaders = args["compression-enabled"]
  ? { "accept-encoding": "gzip, deflate, br" }
  : {};

// ── Startup checks ─────────────────────────────────────────────────────────
// Tokens in the manifest go stale whenever the DB is reset after seeding.
const tokenCheck = await fetch(`${args.url}/api/user-pages/published`, {
  headers: { authorization: tokens[0] },
});
if (tokenCheck.status === 401) {
  console.error("Manifest tokens are stale (server returned 401).");
  console.error("Re-run `yarn seed:e2e` against this server to refresh them.");
  process.exit(1);
}

// Find public pages that accept comments (some are seeded with comments disabled).
const commentablePages = [];
for (const page of publicPages) {
  if (commentablePages.length >= 20) break;
  const res = await fetch(`${args.url}/api/comment/${page.id}`, {
    method: "POST",
    headers: { authorization: rand(tokens), ...json },
    body: JSON.stringify({ text: "bench: probing comments" }),
  });
  if (res.status === 201) commentablePages.push(page);
}
if (commentablePages.length === 0) {
  console.error("No page accepted a probe comment — cannot run the comment-post bucket.");
  process.exit(1);
}

// ── Request sets per bucket ────────────────────────────────────────────────
const anonReadRequests = Array.from({ length: 100 }, () => {
  const page = rand(publicPages);
  return Math.random() < 0.5
    ? { method: "GET", path: `/api/public-pages/${page.url}`, headers: { ...encodingHeaders } }
    : { method: "GET", path: `/api/comments/${page.id}?portion=${1 + Math.floor(Math.random() * 3)}`, headers: { ...encodingHeaders } };
});

const authReadRequests = Array.from({ length: 100 }, () => {
  const token = rand(tokens);
  const roll = Math.random();
  const path_ =
    roll < 0.5
      ? `/api/comments/${rand(publicPages).id}?portion=1`
      : roll < 0.75
        ? "/api/user-pages/published"
        : "/api/history";
  return { method: "GET", path: path_, headers: { authorization: token, ...encodingHeaders } };
});

const commentPostRequests = Array.from({ length: 100 }, (_, i) => ({
  method: "POST",
  path: `/api/comment/${rand(commentablePages).id}`,
  headers: { authorization: rand(tokens), ...json, ...encodingHeaders },
  body: JSON.stringify({ text: `bench: mixed-load comment ${i} — lorem ipsum dolor sit amet.` }),
}));

// Page creation is a 4-step sequence; each connection carries the draft id
// through its context. No photos or attach-files — API only.
let slugCounter = 0;
const pageCreateRequests = [
  {
    method: "POST",
    path: "/api/new-page",
    body: JSON.stringify({ page: { type: "private" } }),
    setupRequest: (req, ctx) => {
      ctx.token = rand(tokens);
      return { ...req, headers: { authorization: ctx.token, ...json, ...encodingHeaders } };
    },
    onResponse: (status, body, ctx) => {
      ctx.pageId = status === 201 ? JSON.parse(body).id : null;
    },
  },
  {
    method: "PATCH",
    body: JSON.stringify({
      page: {
        type: "private",
        contents: {
          title: "Benchmark page",
          briefDes: "Created by the mixed-load benchmark.",
          body: "<p>Benchmark body content.</p>",
          targets: "Benchmark audience",
        },
      },
    }),
    setupRequest: (req, ctx) => ({
      ...req,
      path: `/api/new-page/page-contents/${ctx.pageId}`,
      headers: { authorization: ctx.token, ...json, ...encodingHeaders },
    }),
  },
  {
    method: "PATCH",
    setupRequest: (req, ctx) => ({
      ...req,
      path: `/api/new-page/final-step/${ctx.pageId}`,
      headers: { authorization: ctx.token, ...json, ...encodingHeaders },
      body: JSON.stringify({
        page: { type: "private", url: `bench-${Date.now()}-${slugCounter++}` },
      }),
    }),
  },
  {
    method: "POST",
    setupRequest: (req, ctx) => ({
      ...req,
      path: `/api/new-page/${ctx.pageId}`,
      headers: { authorization: ctx.token, ...json, ...encodingHeaders },
    }),
  },
];

// ── Run all buckets in parallel ────────────────────────────────────────────
const totalRate = args.rate ? Number(args.rate) : null;
const duration = Number(args.duration);

const buckets = [
  { name: "anonymous reads", requests: anonReadRequests },
  { name: "logged-in reads", requests: authReadRequests },
  { name: "comment posts", requests: commentPostRequests },
  { name: "page creates", requests: pageCreateRequests },
];

console.log(`Mixed load @ ${args.url} — ${totalRate ? totalRate + " req/s total" : "uncapped"} for ${duration}s`);
for (const b of buckets) {
  b.rate = totalRate ? Math.max(1, Math.round(totalRate * WEIGHTS[b.name])) : undefined;
  b.connections = b.rate ? Math.max(5, Math.ceil(b.rate / 3)) : Math.max(5, Math.round(200 * WEIGHTS[b.name]));
}
console.log();

const run = (bucket) =>
  new Promise((resolve, reject) => {
    autocannon(
      {
        url: args.url,
        requests: bucket.requests,
        connections: bucket.connections,
        duration,
        overallRate: bucket.rate,
      },
      (err, res) => (err ? reject(err) : resolve({ name: bucket.name, res })),
    );
  });

const results = await Promise.all(buckets.map(run));

for (const { name, res } of results) {
  console.log(`\n${name} (${res.connections} connections):`);
  console.log(autocannon.printResult(res, { renderStatusCodes: true }));
}
