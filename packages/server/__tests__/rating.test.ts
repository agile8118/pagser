import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import {
  makeComment,
  makePublishedPage,
  makeRating,
} from "./helpers/factories/index.js";

describe("Rating", () => {
  // ─── PATCH /api/rate/page/:id ─────────────────────────────────────
  describe("PATCH /api/rate/page/:id", () => {
    it("happy: like creates rating, response shows likes=1 dislikes=0", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-1",
      });

      const res = await request(app)
        .patch(`/api/rate/page/${page.id}`)
        .set("authorization", u.token)
        .send({ rate: "like" });
      assert.equal(res.status, 200);
      assert.equal(res.body.likes, 1);
      assert.equal(res.body.dislikes, 0);

      const row = await DB.find<{ liked: boolean }>(
        "SELECT liked FROM ratings WHERE user_id = $1 AND page_id = $2",
        [u.id, page.id],
      );
      assert.equal(row?.liked, true);
    });

    it("toggle: same vote (like→like) removes the rating", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-2",
      });
      await makeRating({ userId: u.id, pageId: page.id, liked: true });

      const res = await request(app)
        .patch(`/api/rate/page/${page.id}`)
        .set("authorization", u.token)
        .send({ rate: "like" });
      assert.equal(res.body.likes, 0);

      const row = await DB.find(
        "SELECT id FROM ratings WHERE user_id = $1 AND page_id = $2",
        [u.id, page.id],
      );
      assert.equal(row, null);
    });

    it("flip: opposite vote (like→dislike) flips the rating", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-3",
      });
      await makeRating({ userId: u.id, pageId: page.id, liked: true });

      const res = await request(app)
        .patch(`/api/rate/page/${page.id}`)
        .set("authorization", u.token)
        .send({ rate: "dislike" });
      assert.equal(res.body.likes, 0);
      assert.equal(res.body.dislikes, 1);

      const row = await DB.find<{ liked: boolean }>(
        "SELECT liked FROM ratings WHERE user_id = $1 AND page_id = $2",
        [u.id, page.id],
      );
      assert.equal(row?.liked, false);
    });

    it("counts aggregate across multiple users", async () => {
      const author = await createUser();
      const a = await createUser();
      const b = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-4",
      });
      await makeRating({ userId: a.id, pageId: page.id, liked: true });

      const res = await request(app)
        .patch(`/api/rate/page/${page.id}`)
        .set("authorization", b.token)
        .send({ rate: "dislike" });
      assert.equal(res.body.likes, 1);
      assert.equal(res.body.dislikes, 1);
    });

    it("validation: 400 when rate is not like/dislike", async () => {
      const u = await createUser();
      const res = await request(app)
        .patch(`/api/rate/page/1`)
        .set("authorization", u.token)
        .send({ rate: "neutral" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "Invalid rate value");
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .patch("/api/rate/page/1")
        .send({ rate: "like" });
      assert.equal(res.status, 401);
    });
  });

  // ─── PATCH /api/rate/comment/:id ──────────────────────────────────
  describe("PATCH /api/rate/comment/:id", () => {
    it("happy: like creates rating, returns likes=1", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-c-1",
      });
      const comment = await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "hi",
      });

      const res = await request(app)
        .patch(`/api/rate/comment/${comment.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.status, 200);
      assert.equal(res.body.likes, 1);
    });

    it("toggle: second like unlikes (removes rating)", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-c-2",
      });
      const comment = await makeComment({
        pageId: page.id,
        userId: author.id,
      });
      await makeRating({ userId: u.id, commentId: comment.id, liked: true });

      const res = await request(app)
        .patch(`/api/rate/comment/${comment.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.body.likes, 0);
    });

    it("flip: pre-existing dislike flips to like", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "rate-c-3",
      });
      const comment = await makeComment({
        pageId: page.id,
        userId: author.id,
      });
      await makeRating({ userId: u.id, commentId: comment.id, liked: false });

      const res = await request(app)
        .patch(`/api/rate/comment/${comment.id}`)
        .set("authorization", u.token)
        .send();
      assert.equal(res.body.likes, 1);

      const row = await DB.find<{ liked: boolean }>(
        "SELECT liked FROM ratings WHERE user_id = $1 AND comment_id = $2",
        [u.id, comment.id],
      );
      assert.equal(row?.liked, true);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).patch("/api/rate/comment/1").send();
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/liked-pages ─────────────────────────────────────────
  describe("GET /api/liked-pages", () => {
    it("happy: returns only pages the user liked (not disliked)", async () => {
      const author = await createUser();
      const u = await createUser();
      const liked = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "liked-1",
      });
      const disliked = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "disliked-1",
      });
      await makeRating({ userId: u.id, pageId: liked.id, liked: true });
      await makeRating({ userId: u.id, pageId: disliked.id, liked: false });

      const res = await request(app)
        .get("/api/liked-pages")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.results.length, 1);
      assert.equal(res.body.results[0].url, "liked-1");
      assert.equal(res.body.filterBy, "all");
    });

    it("filter: filterBy=public excludes private", async () => {
      const author = await createUser();
      const u = await createUser();
      const pub = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "liked-pub",
      });
      const priv = await makePublishedPage({
        userId: author.id,
        type: "private",
        url: "liked-priv",
      });
      await makeRating({ userId: u.id, pageId: pub.id, liked: true });
      await makeRating({ userId: u.id, pageId: priv.id, liked: true });

      const res = await request(app)
        .get("/api/liked-pages?filterBy=public")
        .set("authorization", u.token);
      assert.equal(res.body.results.length, 1);
      assert.equal(res.body.results[0].type, "public");
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/liked-pages");
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/liked-pages ──────────────────────────────────────
  describe("DELETE /api/liked-pages", () => {
    it("happy: bulk-removes only liked ratings for caller", async () => {
      const author = await createUser();
      const u = await createUser();
      const p1 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "lp-1",
      });
      const p2 = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "lp-2",
      });
      await makeRating({ userId: u.id, pageId: p1.id, liked: true });
      await makeRating({ userId: u.id, pageId: p2.id, liked: true });

      const res = await request(app)
        .delete("/api/liked-pages")
        .set("authorization", u.token)
        .send({ ids: [p1.id, p2.id] });
      assert.equal(res.status, 200);

      const remaining = await DB.findMany(
        "SELECT id FROM ratings WHERE user_id = $1",
        [u.id],
      );
      assert.equal(remaining.length, 0);
    });

    it("does NOT remove dislikes (only liked = true)", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "lp-keep-dislike",
      });
      await makeRating({ userId: u.id, pageId: page.id, liked: false });

      await request(app)
        .delete("/api/liked-pages")
        .set("authorization", u.token)
        .send({ ids: [page.id] });

      const remaining = await DB.findMany(
        "SELECT id FROM ratings WHERE user_id = $1",
        [u.id],
      );
      assert.equal(remaining.length, 1);
    });

    it("validation: 400 when ids is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .delete("/api/liked-pages")
        .set("authorization", u.token)
        .send({ ids: [] });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .delete("/api/liked-pages")
        .send({ ids: [1] });
      assert.equal(res.status, 401);
    });
  });
});
