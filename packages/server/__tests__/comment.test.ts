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

describe("Comment", () => {
  // ─── POST /api/comment/:pageId ────────────────────────────────────
  describe("POST /api/comment/:pageId", () => {
    it("happy: 201 + persists comment + rich response shape", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-1",
      });

      const res = await request(app)
        .post(`/api/comment/${page.id}`)
        .set("authorization", u.token)
        .send({ text: "  hello world  " });
      assert.equal(res.status, 201);
      assert.equal(res.body.comment.text, "hello world"); // trimmed
      assert.equal(res.body.comment.author.username, u.username);
      assert.equal(res.body.comment.viewer, "owner");
      assert.equal(res.body.comment.likes, 0);
      assert.equal(res.body.comment.inReplyTo, null);
      assert.equal(res.body.inReplyTo, null);

      const row = await DB.find<{ text: string }>(
        "SELECT text FROM comments WHERE id = $1",
        [res.body.comment.id],
      );
      assert.equal(row?.text, "hello world");
    });

    it("happy: reply sets in_reply_to and inReplyTo on response", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-reply",
      });
      const parent = await makeComment({
        pageId: page.id,
        userId: author.id,
      });

      const res = await request(app)
        .post(`/api/comment/${page.id}`)
        .set("authorization", u.token)
        .send({ text: "a reply", inReplyTo: parent.id });
      assert.equal(res.status, 201);
      assert.equal(res.body.comment.inReplyTo, String(parent.id));
      assert.equal(res.body.inReplyTo, String(parent.id));
    });

    it("validation: 400 when text is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .post(`/api/comment/1`)
        .set("authorization", u.token)
        .send({ text: "" });
      assert.equal(res.status, 400);
      assert.equal(res.body.message, "Comment text is required");
    });

    it("validation: 400 when text is whitespace only", async () => {
      const u = await createUser();
      const res = await request(app)
        .post(`/api/comment/1`)
        .set("authorization", u.token)
        .send({ text: "   " });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .post("/api/comment/1")
        .send({ text: "hi" });
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/comments/:pageId ────────────────────────────────────
  describe("GET /api/comments/:pageId", () => {
    it("happy: returns top-level comments, newest first", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-list",
      });
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "first",
      });
      await new Promise((r) => setTimeout(r, 50));
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "second",
      });

      const res = await request(app).get(`/api/comments/${page.id}`);
      assert.equal(res.status, 200);
      assert.equal(res.body.comments.length, 2);
      assert.equal(res.body.comments[0].text, "second");
      assert.equal(res.body.comments[1].text, "first");
      assert.equal(res.body.length, 2); // total count
    });

    it("excludes replies (only top-level)", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-no-replies",
      });
      const parent = await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "top",
      });
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "reply",
        inReplyTo: parent.id,
      });

      const res = await request(app).get(`/api/comments/${page.id}`);
      assert.equal(res.body.comments.length, 1);
      assert.equal(res.body.comments[0].text, "top");
      assert.equal(res.body.comments[0].replies, 1); // reply count
    });

    it("pagination: portion=2 returns next 10", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-page",
      });
      for (let i = 0; i < 12; i++) {
        await makeComment({
          pageId: page.id,
          userId: author.id,
          text: `c${i}`,
        });
      }

      const res = await request(app).get(
        `/api/comments/${page.id}?portion=2`,
      );
      assert.equal(res.body.comments.length, 2);
      assert.equal(res.body.length, 12);
    });

    it("viewer: shows 'owner' for own comments when authenticated", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-viewer",
      });
      await makeComment({ pageId: page.id, userId: u.id, text: "mine" });

      const res = await request(app)
        .get(`/api/comments/${page.id}`)
        .set("authorization", u.token);
      assert.equal(res.body.comments[0].viewer, "owner");
    });

    it("viewer: shows 'spectator' when anonymous", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-anon",
      });
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "x",
      });

      const res = await request(app).get(`/api/comments/${page.id}`);
      assert.equal(res.body.comments[0].viewer, "spectator");
    });

    it("like_count reflects ratings", async () => {
      const author = await createUser();
      const liker = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-likes",
      });
      const c = await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "popular",
      });
      await makeRating({ userId: liker.id, commentId: c.id, liked: true });

      const res = await request(app).get(`/api/comments/${page.id}`);
      assert.equal(res.body.comments[0].likes, 1);
    });
  });

  // ─── GET /api/comment/:id/replies ─────────────────────────────────
  describe("GET /api/comment/:id/replies", () => {
    it("happy: returns replies oldest first", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-rep-list",
      });
      const parent = await makeComment({
        pageId: page.id,
        userId: author.id,
      });
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "first reply",
        inReplyTo: parent.id,
      });
      await new Promise((r) => setTimeout(r, 50));
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "second reply",
        inReplyTo: parent.id,
      });

      const res = await request(app).get(
        `/api/comment/${parent.id}/replies`,
      );
      assert.equal(res.status, 200);
      assert.equal(res.body.replies.length, 2);
      assert.equal(res.body.replies[0].text, "first reply");
      assert.equal(res.body.replies[1].text, "second reply");
      assert.equal(String(res.body.commentId), String(parent.id));
    });

    it("empty array when no replies", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-rep-empty",
      });
      const c = await makeComment({
        pageId: page.id,
        userId: author.id,
      });

      const res = await request(app).get(`/api/comment/${c.id}/replies`);
      assert.deepEqual(res.body.replies, []);
    });
  });

  // ─── PUT /api/comment/:id ─────────────────────────────────────────
  describe("PUT /api/comment/:id", () => {
    it("happy: 200 + text updated + edited=true in DB", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-edit",
      });
      const c = await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "old",
      });

      const res = await request(app)
        .put(`/api/comment/${c.id}`)
        .set("authorization", u.token)
        .send({ text: "new text" });
      assert.equal(res.status, 200);
      assert.equal(res.body.newComment, "new text");

      const row = await DB.find<{ text: string; edited: boolean }>(
        "SELECT text, edited FROM comments WHERE id = $1",
        [c.id],
      );
      assert.equal(row?.text, "new text");
      assert.equal(row?.edited, true);
    });

    it("403 when caller is not the author", async () => {
      const author = await createUser();
      const owner = await createUser();
      const stranger = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-edit-403",
      });
      const c = await makeComment({
        pageId: page.id,
        userId: owner.id,
        text: "mine",
      });

      const res = await request(app)
        .put(`/api/comment/${c.id}`)
        .set("authorization", stranger.token)
        .send({ text: "hijack" });
      assert.equal(res.status, 403);
      assert.equal(res.body.message, "Unauthorized");

      const row = await DB.find<{ text: string }>(
        "SELECT text FROM comments WHERE id = $1",
        [c.id],
      );
      assert.equal(row?.text, "mine");
    });

    it("403 when comment does not exist", async () => {
      const u = await createUser();
      const res = await request(app)
        .put(`/api/comment/999999`)
        .set("authorization", u.token)
        .send({ text: "anything" });
      assert.equal(res.status, 403);
    });

    it("validation: 400 when text is empty", async () => {
      const u = await createUser();
      const res = await request(app)
        .put(`/api/comment/1`)
        .set("authorization", u.token)
        .send({ text: "" });
      assert.equal(res.status, 400);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app)
        .put("/api/comment/1")
        .send({ text: "hi" });
      assert.equal(res.status, 401);
    });
  });

  // ─── DELETE /api/comment/:id ──────────────────────────────────────
  describe("DELETE /api/comment/:id", () => {
    it("happy: removes the comment and its replies", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-del",
      });
      const parent = await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "top",
      });
      await makeComment({
        pageId: page.id,
        userId: author.id,
        text: "reply",
        inReplyTo: parent.id,
      });

      const res = await request(app)
        .delete(`/api/comment/${parent.id}`)
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(String(res.body.commentId), String(parent.id));

      const remaining = await DB.findMany(
        "SELECT id FROM comments WHERE page_id = $1",
        [page.id],
      );
      assert.equal(remaining.length, 0); // parent + reply both gone
    });

    it("403 when caller is not the author", async () => {
      const author = await createUser();
      const owner = await createUser();
      const stranger = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-del-403",
      });
      const c = await makeComment({
        pageId: page.id,
        userId: owner.id,
      });

      const res = await request(app)
        .delete(`/api/comment/${c.id}`)
        .set("authorization", stranger.token);
      assert.equal(res.status, 403);

      const row = await DB.find("SELECT id FROM comments WHERE id = $1", [
        c.id,
      ]);
      assert.ok(row);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).delete("/api/comment/1");
      assert.equal(res.status, 401);
    });
  });

  // ─── GET /api/comments/history ────────────────────────────────────
  describe("GET /api/comments/history", () => {
    it("happy: returns user's comments, newest first, with page metadata", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-hist",
        title: "Title here",
      });
      await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "older",
      });
      await new Promise((r) => setTimeout(r, 50));
      await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "newer",
      });

      const res = await request(app)
        .get("/api/comments/history")
        .set("authorization", u.token);
      assert.equal(res.status, 200);
      assert.equal(res.body.comments.length, 2);
      assert.equal(res.body.comments[0].text, "newer");
      assert.equal(res.body.comments[0].page.url, "c-hist");
      assert.equal(res.body.comments[0].page.author.username, author.username);
    });

    it("reply.name = 'yourself' when user replied to their own comment", async () => {
      const author = await createUser();
      const u = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "c-hist-self",
      });
      const parent = await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "self-parent",
      });
      await makeComment({
        pageId: page.id,
        userId: u.id,
        text: "self-reply",
        inReplyTo: parent.id,
      });

      const res = await request(app)
        .get("/api/comments/history")
        .set("authorization", u.token);
      // Reply is newest; reply.name should be "yourself"
      const reply = res.body.comments.find(
        (c: any) => c.text === "self-reply",
      );
      assert.equal(reply.reply.name, "yourself");
    });

    it("empty array when user has no comments", async () => {
      const u = await createUser();
      const res = await request(app)
        .get("/api/comments/history")
        .set("authorization", u.token);
      assert.deepEqual(res.body.comments, []);
    });

    it("error: 401 when no token", async () => {
      const res = await request(app).get("/api/comments/history");
      assert.equal(res.status, 401);
    });
  });
});
