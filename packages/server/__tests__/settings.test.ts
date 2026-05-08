import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { SettingsAPI } from "@pagser/common";
import { createUser, login } from "./helpers/auth.js";

describe("Settings", () => {
  describe("GET /api/settings/email", () => {
    it("happy: returns the user's email", async () => {
      const u = await createUser();
      const res = await request(app)
        .get("/api/settings/email")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      const body = res.body as SettingsAPI.GetEmailResponse;
      assert.equal(body.email, u.email);
    });
  });

  describe("PATCH /api/settings/email", () => {
    it("happy: updates the user's email", async () => {
      const u = await createUser();
      const res = await request(app)
        .patch("/api/settings/email")
        .set("authorization", u.token)
        .send({ email: "new@test.local" });
      assert.equal(res.status, 200);

      const row = await DB.find<{ email: string }>(
        `SELECT email FROM users WHERE id = $1`,
        [u.id],
      );
      assert.equal(row?.email, "new@test.local");
    });

    it("conflict: 422 when email is taken by another user", async () => {
      const a = await createUser();
      const b = await createUser();
      const res = await request(app)
        .patch("/api/settings/email")
        .set("authorization", b.token)
        .send({ email: a.email });
      assert.equal(res.status, 422);
    });
  });

  describe("PATCH /api/settings/password", () => {
    it("happy: new password works at login", async () => {
      const u = await createUser();
      const newPassword = "Brandnew1!";
      const res = await request(app)
        .patch("/api/settings/password")
        .set("authorization", u.token)
        .send({ password: newPassword });
      assert.equal(res.status, 200);

      const token = await login(u.email, newPassword);
      assert.ok(token);
    });
  });
});
