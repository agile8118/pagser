import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import {
  makePublishedPage,
  makeReadLater,
} from "./helpers/factories/index.js";

describe("ReadLater", () => {
  // ─── PATCH /api/read-later/:id (toggle) ───────────────────────────
  describe("PATCH /api/read-later/:id", () => {
    it("happy: first toggle adds to list, returns readLater=true", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl1",
      });

      const res = await request(app)
        .patch(`/api/read-later/${page.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.status, 200);
      assert.equal(res.body.readLater, true);

      const row = await DB.find(
        "SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2",
        [u.id, page.id],
      );
      assert.ok(row);
    });

    it("toggle: second call removes from list, returns readLater=false", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl2",
      });
      await makeReadLater({ userId: u.id, pageId: page.id });

      const res = await request(app)
        .patch(`/api/read-later/${page.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.body.readLater, false);

      const row = await DB.find(
        "SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2",
        [u.id, page.id],
      );
      assert.equal(row, null);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).patch("/api/read-later/1").send();
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/read-later (bulk) ────────────────────────────────
  describe("DELETE /api/read-later", () => {
    it("happy: removes only listed pages from caller's read-later", async () => {
      const author = await createUser();
      const u = await createUser();
      const p1 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl-bulk-1",
      });
      const p2 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl-bulk-2",
      });
      await makeReadLater({ userId: u.id, pageId: p1.id });
      await makeReadLater({ userId: u.id, pageId: p2.id });

      const res = await request(app)
        .delete("/api/read-later")
        .set("authorization", u.token)
        .send({ ids: [p1.id] });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "success");

      const remaining = await DB.findMany<{ page_id: number }>(
        "SELECT page_id FROM read_later WHERE user_id = $1",
        [u.id],
      );
      assert.equal(remaining.length, 1);
      assert.equal(remaining[0].page_id, Number(p2.id));
    });

    it("isolation: cannot remove another user's entries", async () => {
      const author = await createUser();
      const a = await createUser();
      const b = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl-iso",
      });
      await makeReadLater({ userId: a.id, pageId: page.id });

      await request(app)
        .delete("/api/read-later")
        .set("authorization", b.token)
        .send({ ids: [page.id] });

      const remaining = await DB.findMany(
        "SELECT id FROM read_later WHERE user_id = $1 AND page_id = $2",
        [a.id, page.id],
      );
      assert.equal(remaining.length, 1);
    });

    it("validation: 400 when ids is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/read-later")
        .set("authorization", u.token)
        .send({ ids: [] });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .delete("/api/read-later")
        .send({ ids: [1] });
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/read-later ──────────────────────────────────────────
  describe("GET /api/read-later", () => {
    it("happy: returns user's read-later list with sortBy/filterBy echo", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl-fetch",
        title: "Fetched",
      });
      await makeReadLater({ userId: u.id, pageId: page.id });

      const res = await request(app)
        .get("/api/read-later")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.pages.length, 1);
      assert.equal(res.body.pages[0].url, "rl-fetch");
      assert.equal(res.body.filterBy, "all");
      assert.equal(res.body.sortBy, "date-added-asc");
    });

    it("filter: filterBy=private excludes public pages", async () => {
      const author = await createUser();
      const u = await createUser();
      const pub = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rl-pub",
      });
      const priv = await makePublishedPage({
        userId: author.id,
        type: "private",
        url: "rl-priv",
      });
      await makeReadLater({ userId: u.id, pageId: pub.id });
      await makeReadLater({ userId: u.id, pageId: priv.id });

      const res = await request(app)
        .get("/api/read-later?filterBy=private")
        .set("authorization", u.token);
      assert.equal(res.body.pages.length, 1);
      assert.equal(res.body.pages[0].type, "private");
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/read-later");
      assert.equal(res.status, 401);
    });
  });
});
