// Benchmarks login throughput: POST /api/login, repeated with one fixed
// set of credentials. req.login() bcrypt-compares the password against the
// stored hash, so this is CPU-bound rather than DB-bound — expect far lower
// throughput than read endpoints.
//
// EMAIL/PASSWORD below must match a real user in whatever DB --url points
// at. Defaults to the seeded account documented in README.md. Override with
// --email/--password to test against different data.

import autocannon from "autocannon";
import { parseArgs } from "node:util";

const EMAIL = "chris@pagser.local";
const PASSWORD = "Aa1!aaaa";

const { values: args } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3080" },
    connections: { type: "string", default: "10" },
    amount: { type: "string" },
    duration: { type: "string", default: "20" },
    rate: { type: "string" },
    email: { type: "string", default: EMAIL },
    password: { type: "string", default: PASSWORD },
  },
});

const endpoint = `${args.url}/api/login`;

console.log(`Endpoint: POST ${endpoint} (${args.email}, bcrypt-bound)`);
console.log(`Config:   ${args.connections} connections, ${args.amount ? args.amount + " requests" : args.duration + "s"}\n`);

await new Promise((resolve, reject) => {
  const instance = autocannon(
    {
      url: endpoint,
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: args.email, password: args.password }),
      connections: Number(args.connections),
      amount: args.amount ? Number(args.amount) : undefined,
      duration: Number(args.duration),
      overallRate: args.rate ? Number(args.rate) : undefined,
    },
    (err, res) => (err ? reject(err) : resolve(res))
  );

  autocannon.track(instance);
});
