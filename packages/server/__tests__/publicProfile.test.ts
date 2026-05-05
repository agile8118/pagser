import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { createUser } from "./helpers/auth.js";
import {
  makeCollection,
  makeCollectionPage,
  makeDraftPage,
  makePublishedPage,
} from "./helpers/factories/index.js";

describe("PublicProfile", () => {
  // ─── GET /api/users/:username/pages ──────────────────────────────
  describe("GET /api/users/:username/pages", () => {
    it("happy: returns only published public pages, newest first", async () => {
      const u = await createUser({ username: "pubprof1" });
      await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "first-page",
        title: "First",
      });
      // 100ms delay so created_at differs reliably
      await new Promise((r) => setTimeout(r, 50));
      await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "second-page",
        title: "Second",
      });
      // private published page — should NOT appear
      await makePublishedPage({
        userId: u.id,
        type: "private",
        url: "private-page",
        title: "Private",
      });
      // draft public page — should NOT appear
      await makeDraftPage({ userId: u.id, type: "public" });

      const res = await request(app).get(`/api/users/${u.username}/pages`);
      assert.equal(res.status, 200);
      assert.equal(res.body.pages.length, 2);
      assert.equal(res.body.pages[0].url, "second-page");
      assert.equal(res.body.pages[1].url, "first-page");
      assert.equal(res.body.pages[0].author.username, u.username);
      assert.equal(res.body.pages[0].type, "public");
    });

    it("empty array when user has no public published pages", async () => {
      const u = await createUser({ username: "empty1" });
      const res = await request(app).get(`/api/users/${u.username}/pages`);
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.pages, []);
    });

    it("empty array for unknown username", async () => {
      const res = await request(app).get("/api/users/ghostuser/pages");
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.pages, []);
    });
  });

  // ─── GET /api/users/:username/collections ────────────────────────
  describe("GET /api/users/:username/collections", () => {
    it("happy: returns only shared collections with page counts", async () => {
      const u = await createUser({ username: "colprof1" });
      const sharedColl = await makeCollection({
        userId: u.id,
        name: "Shared",
        shared: true,
      });
      await makeCollection({
        userId: u.id,
        name: "Private",
        shared: false,
      });
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "p1",
      });
      await makeCollectionPage({
        collectionId: sharedColl.id,
        pageId: page.id,
      });

      const res = await request(app).get(
        `/api/users/${u.username}/collections`,
      );
      assert.equal(res.status, 200);
      assert.equal(res.body.collections.length, 1);
      assert.equal(res.body.collections[0].name, "Shared");
      assert.equal(res.body.collections[0].pageCount, 1);
      assert.equal(res.body.collections[0].user.username, u.username);
    });

    it("empty array when user has no shared collections", async () => {
      const u = await createUser({ username: "empty2" });
      const res = await request(app).get(
        `/api/users/${u.username}/collections`,
      );
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.collections, []);
    });
  });
});
