import { strict as assert } from "node:assert";
import request from "supertest";
import { SendEmailCommand } from "@aws-sdk/client-ses";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import {
  createUser,
  login,
  registerFlow,
  extractCodeFromLastSesEmail,
} from "./helpers/auth.js";
import { sesMock, sesSentEmails } from "./helpers/aws-mocks.js";

// Shared body builder for sendCode/register validators.
let bodyCounter = 0;
const validBody = () => {
  bodyCounter += 1;
  const u = `${Date.now()}${bodyCounter}`.slice(-10);
  return {
    name: "Joe Tester",
    email: `e${u}@test.local`,
    username: `u${u}`.slice(0, 15),
    password: "Aa1!aaaa",
  };
};

describe("Authentication", () => {
  // ─── POST /api/username-availability ─────────────────────────────────
  describe("POST /api/username-availability", () => {
    it("happy: 200 ok when username is well-formed and free", async () => {
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "freshuser" });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "ok");
    });

    it("validation: 400 when username is empty", async () => {
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "username error");
    });

    it("validation: 400 when username is too short (<5 chars)", async () => {
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "abcd" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "username error");
    });

    it("validation: 400 when username is too long (>15 chars)", async () => {
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "a".repeat(16) });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "username error");
    });

    it("validation: 400 when username has invalid chars (space)", async () => {
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "no spaces" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "username error");
    });

    it("availability: 422 when username already in use", async () => {
      await createUser({ username: "taken1" });
      const res = await request(app)
        .post("/api/username-availability")
        .send({ username: "taken1" });
      assert.equal(res.status, 422);
      assert.equal(res.body.message, "username is in use");
    });
  });

  // ─── POST /api/send-code ─────────────────────────────────────────────
  describe("POST /api/send-code", () => {
    it("happy: 200 + SES email with 5-digit code in <h1>", async () => {
      const body = validBody();
      const res = await request(app).post("/api/send-code").send(body);
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "code sent");

      const calls = sesMock.commandCalls(SendEmailCommand);
      assert.equal(calls.length, 1);
      const input = calls[0].args[0].input;
      assert.deepEqual(input.Destination?.ToAddresses, [body.email]);
      assert.equal(input.Message?.Subject?.Data, "Verify your email address");
      assert.match(
        String(input.Message?.Body?.Html?.Data),
        /<h1[^>]*>\d{5}<\/h1>/,
      );
    });

    it("validation: 400 when name is empty", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), name: "" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "name error");
    });

    it("validation: 400 when name has digits", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), name: "Joe7" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "name error");
    });

    it("validation: 400 when name is too short (<3)", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), name: "Jo" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "name error");
    });

    it("validation: 400 when email is malformed", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), email: "not-an-email" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "email error");
    });

    it("availability: 422 when email is already in use", async () => {
      const existing = await createUser();
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), email: existing.email });
      assert.equal(res.status, 422);
      assert.equal(res.body.message, "email is in use");
    });

    it("validation: 400 when password is too short (<8)", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), password: "Aa1!aa" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "password error");
    });

    it("validation: 400 when password lacks uppercase (not hard)", async () => {
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), password: "aa1!aaaa" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "password error");
    });

    it("validation: 400 when password equals username", async () => {
      const same = "SameAs12";
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), username: same, password: same });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "password error");
    });

    it("availability: 422 when username is already taken", async () => {
      await createUser({ username: "snd1user" });
      const res = await request(app)
        .post("/api/send-code")
        .send({ ...validBody(), username: "snd1user" });
      assert.equal(res.status, 422);
      assert.equal(res.body.message, "username is in use");
    });

    it("error: 500 when SES rejects the email", async () => {
      sesMock.on(SendEmailCommand).rejects(new Error("ses-down"));
      const res = await request(app)
        .post("/api/send-code")
        .send(validBody());
      assert.equal(res.status, 500);
    });
  });

  // ─── POST /api/register ──────────────────────────────────────────────
  describe("POST /api/register", () => {
    it("happy: 201 + auth token after sendCode -> register on same agent", async () => {
      const r = await registerFlow();
      assert.ok(r.token, "token should be present");

      const row = await DB.find<{
        id: string;
        username: string;
        verified: boolean;
      }>(
        `SELECT id, username, verified FROM users WHERE email = $1`,
        [r.email],
      );
      assert.ok(row, "user should be persisted");
      assert.equal(row?.username, r.username);
      assert.equal(row?.verified, true);
    });

    it("error: 400 invalid code when wrong digits supplied", async () => {
      const agent = request.agent(app);
      const body = validBody();
      const send = await agent.post("/api/send-code").send(body);
      assert.equal(send.status, 200);

      const realCode = extractCodeFromLastSesEmail();
      const wrongCode = realCode === 99999 ? 11111 : 99999;

      const res = await agent
        .post("/api/register")
        .send({ ...body, userEmailVerificationCode: wrongCode });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "invalid code");
    });

    it("success: 201 when a different agent uses a valid code (codes are DB-scoped, not session-scoped)", async () => {
      const agentA = request.agent(app);
      const body = validBody();
      await agentA.post("/api/send-code").send(body);
      const code = extractCodeFromLastSesEmail();

      const agentB = request.agent(app);
      const res = await agentB
        .post("/api/register")
        .send({ ...body, userEmailVerificationCode: code });
      assert.equal(res.status, 201);
    });

    it("availability: 422 when email is claimed between sendCode and register", async () => {
      const agent = request.agent(app);
      const body = validBody();
      await agent.post("/api/send-code").send(body);
      const code = extractCodeFromLastSesEmail();

      // Race: another user takes the email after sendCode succeeds.
      await createUser({ email: body.email });

      const res = await agent
        .post("/api/register")
        .send({ ...body, userEmailVerificationCode: code });
      assert.equal(res.status, 422);
      assert.equal(res.body.message, "email is in use");
    });
  });

  // ─── POST /api/login ─────────────────────────────────────────────────
  describe("POST /api/login", () => {
    it("happy: 200 + token when credentials are valid", async () => {
      const u = await createUser();
      const res = await request(app)
        .post("/api/login")
        .send({ email: u.email, password: u.password });
      assert.equal(res.status, 200);
      assert.ok(res.body.token);
    });

    it("error: 401 when password is wrong", async () => {
      const u = await createUser();
      const res = await request(app)
        .post("/api/login")
        .send({ email: u.email, password: "WrongPass1!" });
      assert.equal(res.status, 401);
    });

    it("error: 401 when email is unknown", async () => {
      const res = await request(app)
        .post("/api/login")
        .send({ email: "nobody@nowhere.local", password: "Aa1!aaaa" });
      assert.equal(res.status, 401);
    });

    it("error: 400 when body is missing email/password", async () => {
      // validator.loginCredentials returns 400 if either field is absent.
      const res = await request(app).post("/api/login").send({});
      assert.equal(res.status, 400);
    });
  });

  // ─── POST /api/forgot-password ───────────────────────────────────────
  describe("POST /api/forgot-password", () => {
    it("happy: 200 + token persisted + SES sent with reset link", async () => {
      const u = await createUser();
      const res = await request(app)
        .post("/api/forgot-password")
        .send({ email: u.email });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "code was sent");

      const row = await DB.find<{ token_code: string; token_date: string }>(
        `SELECT token_code, token_date FROM users WHERE id = $1`,
        [u.id],
      );
      assert.ok(row?.token_code, "token_code should be set");
      assert.equal(row?.token_code.length, 36); // 18 bytes hex = 36 chars
      assert.ok(row?.token_date, "token_date should be set");

      const calls = sesMock.commandCalls(SendEmailCommand);
      assert.equal(calls.length, 1);
      const html = String(calls[0].args[0].input.Message?.Body?.Html?.Data);
      assert.match(html, /forgot-password\?t=[a-f0-9]{36}&i=\d+/);
    });

    it("error: 404 when no user with that email", async () => {
      const res = await request(app)
        .post("/api/forgot-password")
        .send({ email: "ghost@test.local" });
      assert.equal(res.status, 404);
      assert.equal(res.body.message, "no email found");
    });

    it("validation: 400 when email is malformed", async () => {
      const res = await request(app)
        .post("/api/forgot-password")
        .send({ email: "not-an-email" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "email error");
    });
  });

  // ─── PATCH /api/reset-password ───────────────────────────────────────
  describe("PATCH /api/reset-password", () => {
    async function arrangeTokenForUser(userId: string, opts: { ageMs?: number } = {}) {
      const code = "abc123def456abc123def456abc123def456"; // 36 chars (matches forgot-password format)
      const date = new Date(Date.now() - (opts.ageMs ?? 0));
      await DB.update(
        "users",
        { token_code: code, token_date: date },
        `id = $3`,
        [userId],
      );
      return code;
    }

    it("happy: 200 + new password works for login", async () => {
      const u = await createUser();
      const code = await arrangeTokenForUser(u.id);
      const newPassword = "Newpw1!aaaa";

      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: u.id, password: newPassword, token: code });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "password updated");

      // login with new password works
      const token = await login(u.email, newPassword);
      assert.ok(token);
    });

    it("validation: 400 when user_id is non-numeric", async () => {
      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: "abc", password: "Newpw1!aaaa", token: "x" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "id error");
    });

    it("validation: 400 when password is too weak", async () => {
      const u = await createUser();
      const code = await arrangeTokenForUser(u.id);
      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: u.id, password: "weak", token: code });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "password error");
    });

    it("error: 400 invalid link when user does not exist", async () => {
      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: "999999", password: "Newpw1!aaaa", token: "anything" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "invalid link");
    });

    it("error: 400 invalid link when token does not match", async () => {
      const u = await createUser();
      await arrangeTokenForUser(u.id);
      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: u.id, password: "Newpw1!aaaa", token: "wrong-token" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "invalid link");
    });

    it("edge: 400 link expired when token is older than 10 minutes", async () => {
      const u = await createUser();
      const code = await arrangeTokenForUser(u.id, { ageMs: 11 * 60 * 1000 });
      const res = await request(app)
        .patch("/api/reset-password")
        .send({ user_id: u.id, password: "Newpw1!aaaa", token: code });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "link expired");
    });
  });

  // ─── POST /auth (getAuth) ────────────────────────────────────────────
  describe("POST /auth", () => {
    it("happy: 200 + { user: { id, photo } } with valid token", async () => {
      const u = await createUser();
      const token = await login(u.email, u.password);
      const res = await request(app)
        .post("/auth")
        .set("authorization", token)
        .send();
      assert.equal(res.status, 200);
      assert.equal(String(res.body.user.id), u.id);
      assert.ok("photo" in res.body.user);
    });

    it("error: 401 when no token is provided", async () => {
      const res = await request(app).post("/auth").send();
      assert.equal(res.status, 401);
    });

    it("error: 401 when token is malformed", async () => {
      const res = await request(app)
        .post("/auth")
        .set("authorization", "this-is-not-a-valid-token")
        .send();
      assert.equal(res.status, 401);
    });

    it("error: 401 when token references a deleted user", async () => {
      const u = await createUser();
      const { token } = u;
      // delete the user; token is still cryptographically valid
      await DB.delete("users", "id = $1", [u.id]);

      const res = await request(app)
        .post("/auth")
        .set("authorization", token)
        .send();
      assert.equal(res.status, 401);
    });
  });
});
