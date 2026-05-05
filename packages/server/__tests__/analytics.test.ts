import { strict as assert } from "node:assert";
import request from "supertest";

import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";

describe("Analytics", () => {
  describe("POST /api/views/:id", () => {
    it("happy: anonymous view inserts a row keyed by IP", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "anon-view-page",
      });

      const res = await request(app).post(`/api/views/${page.id}`).send();
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "success");

      const rows = await DB.findMany(
        "SELECT user_id, ip FROM views WHERE page_id = $1",
        [page.id],
      );
      assert.equal(rows.length, 1);
    });

    it("authenticated: view is keyed by user_id when a token is provided", async () => {
      const author = await createUser();
      const viewer = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "auth-view-page",
      });

      const res = await request(app)
        .post(`/api/views/${page.id}`)
        .set("authorization", viewer.token)
        .send();
      assert.equal(res.status, 200);

      const row = await DB.find<{ user_id: number | null }>(
        "SELECT user_id FROM views WHERE page_id = $1",
        [page.id],
      );
      assert.ok(row);
      assert.equal(String(row?.user_id), viewer.id);
    });

    it("upsert: anonymous view from same IP does not duplicate", async () => {
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "upsert-anon-view",
      });

      await request(app).post(`/api/views/${page.id}`).send();
      await request(app).post(`/api/views/${page.id}`).send();

      const rows = await DB.findMany(
        "SELECT id FROM views WHERE page_id = $1",
        [page.id],
      );
      assert.equal(rows.length, 1);
    });

    it("edge: View too recent when session.viewStartTrack < 10s ago", async () => {
      // We can't directly set the session; instead we verify the documented
      // behavior by hitting fetchPublicPageData first (which sets viewStartTrack)
      // and then immediately trying to track a view on the same agent.
      const author = await createUser();
      const page = await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "too-recent-view",
      });

      const agent = request.agent(app);
      await agent.get(`/api/public-pages/${page.url}`);
      const res = await agent.post(`/api/views/${page.id}`).send();
      assert.equal(res.status, 200);
      assert.equal(res.body.message, "View too recent");

      // No view row should have been recorded since the page was just opened
      const rows = await DB.findMany(
        "SELECT id FROM views WHERE page_id = $1",
        [page.id],
      );
      assert.equal(rows.length, 0);
    });
  });
});
