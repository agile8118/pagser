import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { makeSubscription } from "./helpers/factories/index.js";

describe("Subscription", () => {
  // ─── POST /api/subscription/:id (toggle) ──────────────────────────
  describe("POST /api/subscription/:id", () => {
    it("happy: 200 + subscribed=true + subNum=1 on first toggle", async () => {
      const subscriber = await createUser();
      const author = await createUser();
      const res = await request(app)
        .post(`/api/subscription/${author.id}`)
        .set("authorization", subscriber.token)
        .send();
      assert.equal(res.status, 200);
      assert.equal(res.body.subscribed, true);
      assert.equal(res.body.subNum, 1);

      const row = await DB.find<{ id: number }>(
        "SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2",
        [subscriber.id, author.id],
      );
      assert.ok(row);
    });

    it("toggle: second call removes the subscription, subscribed=false", async () => {
      const subscriber = await createUser();
      const author = await createUser();
      await makeSubscription({
        subscriberId: subscriber.id,
        authorId: author.id,
      });

      const res = await request(app)
        .post(`/api/subscription/${author.id}`)
        .set("authorization", subscriber.token)
        .send();
      assert.equal(res.status, 200);
      assert.equal(res.body.subscribed, false);
      assert.equal(res.body.subNum, 0);

      const row = await DB.find(
        "SELECT id FROM subscriptions WHERE subscriber_id = $1 AND author_id = $2",
        [subscriber.id, author.id],
      );
      assert.equal(row, null);
    });

    it("subNum reflects total subscribers across users", async () => {
      const author = await createUser();
      const a = await createUser();
      const b = await createUser();
      await makeSubscription({ subscriberId: a.id, authorId: author.id });

      const res = await request(app)
        .post(`/api/subscription/${author.id}`)
        .set("authorization", b.token)
        .send();
      assert.equal(res.body.subNum, 2);
    });

    it("edge: 400 cannot subscribe to yourself", async () => {
      const u = await createUser();
      const res = await request(app)
        .post(`/api/subscription/${u.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "Cannot subscribe to yourself");
    });

    it("error: 401 when no token", async () => {
      const author = await createUser();
      const res = await request(app)
        .post(`/api/subscription/${author.id}`)
        .send();
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/subscriptions ───────────────────────────────────────
  describe("GET /api/subscriptions", () => {
    it("happy: returns all authors current user follows, newest first", async () => {
      const subscriber = await createUser();
      const a = await createUser({ name: "Alice", username: "alicee" });
      const b = await createUser({ name: "Bob", username: "bobbb" });
      await makeSubscription({ subscriberId: subscriber.id, authorId: a.id });
      await makeSubscription({ subscriberId: subscriber.id, authorId: b.id });

      const res = await request(app)
        .get("/api/subscriptions")
        .set("authorization", subscriber.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.subs.length, 2);
      // newest-first order: b was inserted last → at index 0
      assert.equal(res.body.subs[0].username, "bobbb");
      assert.equal(res.body.subs[1].username, "alicee");
      assert.ok("name" in res.body.subs[0]);
      assert.ok("photo_url" in res.body.subs[0]);
    });

    it("empty list when no subscriptions", async () => {
      const u = await createUser();
      const res = await request(app)
        .get("/api/subscriptions")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.subs, []);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/subscriptions");
      assert.equal(res.status, 401);
    });
  });
});
