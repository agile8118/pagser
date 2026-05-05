import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import {
  makeDraftPage,
  makePublishedPage,
} from "./helpers/factories/index.js";

describe("UserPages", () => {
  // ─── GET /api/user-pages/published ────────────────────────────────
  describe("GET /api/user-pages/published", () => {
    it("happy: returns only the caller's published pages, newest first", async () => {
      const u = await createUser();
      await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "up-1",
        title: "First",
      });
      await new Promise((r) => setTimeout(r, 50));
      await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "up-2",
        title: "Second",
      });
      // Draft for same user — should NOT appear
      await makeDraftPage({ userId: u.id });
      // Another user's published page — should NOT appear
      const other = await createUser();
      await makePublishedPage({
        userId: other.id,
        type: "public",
        url: "up-other",
      });

      const res = await request(app)
        .get("/api/user-pages/published")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.results.length, 2);
      assert.equal(res.body.results[0].url, "up-2");
      assert.equal(res.body.results[1].url, "up-1");
    });

    it("filter: filterBy=private excludes public pages", async () => {
      const u = await createUser();
      await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "up-pub",
      });
      await makePublishedPage({
        userId: u.id,
        type: "private",
        url: "up-priv",
      });

      const res = await request(app)
        .get("/api/user-pages/published?filterBy=private")
        .set("authorization", u.token);
      assert.equal(res.body.results.length, 1);
      assert.equal(res.body.results[0].type, "private");
      assert.equal(res.body.filterBy, "private");
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/user-pages/published");
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/user-pages/published ─────────────────────────────
  describe("DELETE /api/user-pages/published", () => {
    it("happy: deletes caller's published pages by id", async () => {
      const u = await createUser();
      const p = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "up-del-1",
      });

      const res = await request(app)
        .delete("/api/user-pages/published")
        .set("authorization", u.token)
        .send({ ids: [p.id] });
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "success");

      const row = await DB.find("SELECT id FROM pages WHERE id = $1", [p.id]);
      assert.equal(row, null);
    });

    it("isolation: cannot delete another user's published pages", async () => {
      const a = await createUser();
      const b = await createUser();
      const page = await makePublishedPage({
        userId: a.id,
        type: "public",
        url: "up-iso",
      });

      await request(app)
        .delete("/api/user-pages/published")
        .set("authorization", b.token)
        .send({ ids: [page.id] });

      const row = await DB.find("SELECT id FROM pages WHERE id = $1", [
        page.id,
      ]);
      assert.ok(row);
    });

    it("scope: does NOT delete drafts even if id is included", async () => {
      const u = await createUser();
      const draft = await makeDraftPage({ userId: u.id });

      await request(app)
        .delete("/api/user-pages/published")
        .set("authorization", u.token)
        .send({ ids: [draft.id] });

      const row = await DB.find("SELECT id FROM pages WHERE id = $1", [
        draft.id,
      ]);
      assert.ok(row, "draft page should still exist after published-delete");
    });

    it("validation: 400 when ids is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/user-pages/published")
        .set("authorization", u.token)
        .send({ ids: [] });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .delete("/api/user-pages/published")
        .send({ ids: [1] });
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/user-pages/draft ────────────────────────────────────
  describe("GET /api/user-pages/draft", () => {
    it("happy: returns drafts with title, newest first", async () => {
      const u = await createUser();
      const d1 = await makeDraftPage({
        userId: u.id,
        overrides: { title: "Draft One" },
      });
      void d1;
      await new Promise((r) => setTimeout(r, 50));
      await makeDraftPage({
        userId: u.id,
        overrides: { title: "Draft Two" },
      });

      const res = await request(app)
        .get("/api/user-pages/draft")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.results.length, 2);
      assert.equal(res.body.results[0].contents.title, "Draft Two");
    });

    it("filter: drafts without title are NOT returned", async () => {
      const u = await createUser();
      // No title — controller filters via WHERE title IS NOT NULL
      await makeDraftPage({ userId: u.id });

      const res = await request(app)
        .get("/api/user-pages/draft")
        .set("authorization", u.token);
      assert.deepEqual(res.body.results, []);
    });

    it("isolation: only the caller's drafts", async () => {
      const a = await createUser();
      const b = await createUser();
      await makeDraftPage({
        userId: a.id,
        overrides: { title: "A's draft" },
      });

      const res = await request(app)
        .get("/api/user-pages/draft")
        .set("authorization", b.token);
      assert.deepEqual(res.body.results, []);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/user-pages/draft");
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/user-pages/draft ─────────────────────────────────
  describe("DELETE /api/user-pages/draft", () => {
    it("happy: deletes caller's drafts by id", async () => {
      const u = await createUser();
      const d = await makeDraftPage({ userId: u.id });

      const res = await request(app)
        .delete("/api/user-pages/draft")
        .set("authorization", u.token)
        .send({ ids: [d.id] });
      assert.equal(res.status, 200);

      const row = await DB.find("SELECT id FROM pages WHERE id = $1", [d.id]);
      assert.equal(row, null);
    });

    it("scope: does NOT delete published pages even if id is included", async () => {
      const u = await createUser();
      const pub = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "up-draft-scope",
      });

      await request(app)
        .delete("/api/user-pages/draft")
        .set("authorization", u.token)
        .send({ ids: [pub.id] });

      const row = await DB.find("SELECT id FROM pages WHERE id = $1", [
        pub.id,
      ]);
      assert.ok(row, "published page should still exist after draft-delete");
    });

    it("validation: 400 when ids is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/user-pages/draft")
        .set("authorization", u.token)
        .send({ ids: [] });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .delete("/api/user-pages/draft")
        .send({ ids: [1] });
      assert.equal(res.status, 401);
    });
  });
});
