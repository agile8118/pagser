import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { PagesAPI } from "@pagser/common";
import { PAGE_STATUS, PAGE_TYPE } from "../src/database/types.js";
import { createUser } from "./helpers/auth.js";
import { makeDraftPage, makeTag } from "./helpers/factories/index.js";

describe("Page publish", () => {
  describe("POST /api/new-page/:id", () => {
    it("public: status transitions to published, URL slug derived from title", async () => {
      const u = await createUser();
      const draft = await makeDraftPage({
        userId: u.id,
        type: "public",
        overrides: { title: "Hello World" },
      });

      const res = await request(app)
        .post(`/api/new-page/${draft.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.PublishPageResponse;
      assert.equal(body.username, u.username);
      assert.match(body.url, /hello-world/i);

      const row = await DB.find<{ status_id: number; url: string }>(
        `SELECT status_id, url FROM pages WHERE id = $1`,
        [draft.id],
      );
      assert.equal(row?.status_id, PAGE_STATUS.publishedId);
      assert.match(row!.url, /hello-world/i);
    });

    it("private: uses user-provided URL and deletes draft tags", async () => {
      const u = await createUser();
      const draft = await makeDraftPage({
        userId: u.id,
        type: "private",
        overrides: { url: "my-private-page", title: "Private" },
      });
      // Tags should not survive a private publish.
      await makeTag({ pageId: draft.id, name: "leftover" });

      const res = await request(app)
        .post(`/api/new-page/${draft.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.PublishPageResponse;
      assert.equal(body.url, "my-private-page");

      const row = await DB.find<{ status_id: number; url: string }>(
        `SELECT status_id, url FROM pages WHERE id = $1`,
        [draft.id],
      );
      assert.equal(row?.status_id, PAGE_STATUS.publishedId);
      assert.equal(row?.url, "my-private-page");

      const tags = await DB.findMany<{ id: string }>(
        `SELECT id FROM tags WHERE page_id = $1`,
        [draft.id],
      );
      assert.equal(tags.length, 0);
    });
  });
});
