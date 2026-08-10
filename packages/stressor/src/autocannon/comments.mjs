import autocannon from "autocannon";
import { parseArgs } from "node:util";

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    connections: { type: "string", default: "10" },
    amount: { type: "string" },
    duration: { type: "string", default: "20" },
    "page-id": { type: "string" },
    portion: { type: "string", default: "1" },
    token: { type: "string" },
    rate: { type: "string" },
  },
});

if (!args["page-id"]) {
  console.error("Required: --page-id <id>");
  console.error("Example:");
  console.error(
    "node src/autocannon/comments.mjs --url http://localhost:3080 --connections 10 --duration 20 --page-id 42 --portion 2");
  process.exit(1);
}

const endpoint = `${args.url}/api/comments/${args["page-id"]}?portion=${args.portion}`;

console.log(`Endpoint: GET ${endpoint}${args.token ? " (authenticated)" : " (anonymous)"}`);
console.log(`Config:   ${args.connections} connections, ${args.amount ? args.amount + " requests" : args.duration + "s"}\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: endpoint,
      method: "GET",
      headers: args.token ? { authorization: args.token } : {},
      connections: Number(args.connections),
      amount: args.amount ? Number(args.amount) : undefined,
      duration: Number(args.duration),
      overallRate: args.rate ? Number(args.rate) : undefined,
    },
    (err, res) => (err ? reject(err) : resolve(res))
  );

  autocannon.track(instance);
});
