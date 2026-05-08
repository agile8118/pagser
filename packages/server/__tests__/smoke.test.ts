import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { ApiMessages } from "@pagser/common";
import { createUser } from "./helpers/auth.js";

describe("smoke: rig is wired up", () => {
  it("supertest can hit the app", async () => {
    // /api/username-availability is public and validates body.username.
    const res = await request(app)
      .post("/api/username-availability")
      .send({ username: "freshname" });
    assert.equal(res.status, 200);
    assert.equal(res.body.message, ApiMessages.USERNAME_AVAILABLE);
  });

  it("the test database is reachable and truncated", async () => {
    const before = await DB.find<{ count: string }>(
      "SELECT COUNT(*)::text AS count FROM users",
    );
    assert.equal(before?.count, "0");

    await createUser({ username: "smokeuser" });

    const after = await DB.find<{ count: string }>(
      "SELECT COUNT(*)::text AS count FROM users",
    );
    assert.equal(after?.count, "1");
  });

  it("page_types reference data survives truncate", async () => {
    const types = await DB.findMany<{ id: number; type: string }>(
      "SELECT id, type FROM page_types ORDER BY id",
    );
    assert.equal(types.length, 2);
    assert.equal(types[0].type, "private");
    assert.equal(types[1].type, "public");
  });
});
