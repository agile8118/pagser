import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import {
  makeHistoryEntry,
  makePublishedPage,
} from "./helpers/factories/index.js";

describe("History", () => {
  // ─── GET /api/history ─────────────────────────────────────────────
  describe("GET /api/history", () => {
    it("happy: returns visited pages, newest visit first", async () => {
      const author = await createUser();
      const viewer = await createUser();
      const p1 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "h1",
        title: "First visited",
      });
      const p2 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "h2",
        title: "Second visited",
      });
      await makeHistoryEntry({ userId: viewer.id, pageId: p1.id });
      await new Promise((r) => setTimeout(r, 50));
      await makeHistoryEntry({ userId: viewer.id, pageId: p2.id });

      const res = await request(app)
        .get("/api/history")
        .set("authorization", viewer.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.results.length, 2);
      assert.equal(res.body.results[0].url, "h2");
      assert.equal(res.body.results[1].url, "h1");
      assert.equal(res.body.filterBy, "all");
    });

    it("filter: filterBy=public excludes private pages", async () => {
      const author = await createUser();
      const viewer = await createUser();
      const pub = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "pub1",
      });
      const priv = await makePublishedPage({
        userId: author.id,
        type: "private",
        url: "priv1",
      });
      await makeHistoryEntry({ userId: viewer.id, pageId: pub.id });
      await makeHistoryEntry({ userId: viewer.id, pageId: priv.id });

      const res = await request(app)
        .get("/api/history?filterBy=public")
        .set("authorization", viewer.token);
      assert.equal(res.body.results.length, 1);
      assert.equal(res.body.results[0].type, "public");
      assert.equal(res.body.filterBy, "public");
    });

    it("isolation: user only sees their own history", async () => {
      const author = await createUser();
      const a = await createUser();
      const b = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "iso1",
      });
      await makeHistoryEntry({ userId: a.id, pageId: page.id });

      const res = await request(app)
        .get("/api/history")
        .set("authorization", b.token);
      assert.deepEqual(res.body.results, []);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/history");
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/history ──────────────────────────────────────────
  describe("DELETE /api/history", () => {
    it("happy: removes only the listed page IDs from caller's history", async () => {
      const author = await createUser();
      const viewer = await createUser();
      const p1 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "d1",
      });
      const p2 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "d2",
      });
      await makeHistoryEntry({ userId: viewer.id, pageId: p1.id });
      await makeHistoryEntry({ userId: viewer.id, pageId: p2.id });

      const res = await request(app)
        .delete("/api/history")
        .set("authorization", viewer.token)
        .send({ ids: [p1.id] });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "success");

      const remaining = await DB.findMany<{ page_id: number }>(
        "SELECT page_id FROM history WHERE user_id = $1",
        [viewer.id],
      );
      assert.equal(remaining.length, 1);
      assert.equal(remaining[0].page_id, Number(p2.id));
    });

    it("isolation: cannot remove another user's history", async () => {
      const author = await createUser();
      const a = await createUser();
      const b = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "iso2",
      });
      await makeHistoryEntry({ userId: a.id, pageId: page.id });

      const res = await request(app)
        .delete("/api/history")
        .set("authorization", b.token)
        .send({ ids: [page.id] });
      assert.equal(res.status, 200);

      // a's entry still there
      const remaining = await DB.findMany(
        "SELECT id FROM history WHERE user_id = $1 AND page_id = $2",
        [a.id, page.id],
      );
      assert.equal(remaining.length, 1);
    });

    it("validation: 400 when ids array is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/history")
        .set("authorization", u.token)
        .send({ ids: [] });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "Invalid ids array");
    });

    it("validation: 400 when ids is missing", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/history")
        .set("authorization", u.token)
        .send({});
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).delete("/api/history").send({ ids: [1] });
      assert.equal(res.status, 401);
    });
  });
});
