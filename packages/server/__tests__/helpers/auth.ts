import { createHmac, randomBytes } from "node:crypto";
import request from "supertest";
import type { Test } from "supertest";
import app from "../../src/app.js";
import { DB } from "../../src/database/index.js";
import { hashPassword } from "cpeak";
import type { IUser } from "../../src/database/types.js";
import { sesSentEmails } from "./aws-mocks.js";
import keys from "../../src/config/keys.js";

export type TestUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  token: string;
};

let counter = 0;
function unique() {
  counter += 1;
  return `${Date.now()}${counter}`;
}

async function createToken(userId: string): Promise<string> {
  const secret = keys.tokenSecret as string;
  const tokenId = randomBytes(20).toString("hex");
  const sig = createHmac("sha256", secret).update(tokenId).digest("hex");
  const token = `${tokenId}.${sig}`;
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await DB.insert("tokens", { id: tokenId, user_id: userId, expires_at: expiresAt });
  return token;
}

export async function createUser(
  overrides: Partial<Omit<TestUser, "token">> = {},
): Promise<TestUser> {
  const u = unique();
  const username = (overrides.username ?? `u${u}`).slice(0, 15);
  const email = overrides.email ?? `u${u}@test.local`;
  const password = overrides.password ?? "Aa1!aaaa";
  const name = overrides.name ?? "Test User";
  const hash = await hashPassword(password);
  const row = await DB.insert<IUser>("users", {
    name,
    username,
    email,
    password: hash,
    verified: true,
  });
  const id = String(row.id);
  const token = await createToken(id);
  return { id, username, email, password, name, token };
}

export function withAuth(token: string, req: Test): Test {
  return req.set("authorization", token);
}

// Drives the real /api/login endpoint to exercise the local strategy.
export async function login(email: string, password: string): Promise<string> {
  const res = await request(app)
    .post("/api/login")
    .send({ email, password });
  if (res.status !== 200) {
    throw new Error(`login failed: ${res.status} ${JSON.stringify(res.body)}`);
  }
  return res.body.token as string;
}

// Drives /api/send-code then /api/register on a single supertest agent so the session
// cookie carries the verification code. Captures the code from the SES mock's last email.
export async function registerFlow(
  opts: Partial<{ name: string; email: string; username: string; password: string }> = {},
): Promise<{ token: string; email: string; username: string; password: string; name: string }> {
  const u = unique();
  const name = opts.name ?? "Test User";
  const username = (opts.username ?? `r${u}`).slice(0, 15);
  const email = opts.email ?? `r${u}@test.local`;
  const password = opts.password ?? "Aa1!aaaa";

  const agent = request.agent(app);

  const send = await agent
    .post("/api/send-code")
    .send({ name, email, username, password });
  if (send.status !== 200) {
    throw new Error(`send-code failed: ${send.status} ${JSON.stringify(send.body)}`);
  }

  const code = extractCodeFromLastSesEmail();
  if (code == null) {
    throw new Error("could not extract verification code from SES mock");
  }

  const reg = await agent
    .post("/api/register")
    .send({ name, email, username, password, userEmailVerificationCode: code });
  if (reg.status !== 201) {
    throw new Error(`register failed: ${reg.status} ${JSON.stringify(reg.body)}`);
  }
  return { token: reg.body.token, email, username, password, name };
}

export function extractCodeFromLastSesEmail(): number | null {
  const calls = sesSentEmails();
  const last = calls[calls.length - 1];
  if (!last) return null;
  const html = last.args[0].input.Message?.Body?.Html?.Data ?? "";
  const m = html.match(/<h1[^>]*>(\d{5})<\/h1>/);
  return m ? Number(m[1]) : null;
}
