import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";

describe("Page edit", () => {
  describe("GET /api/pages/:id/edit", () => {
    it("happy: owner gets the page payload for editing", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "edit-target",
        title: "Editable",
      });

      const res = await request(app)
        .get(`/api/pages/${page.id}/edit`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      assert.equal(res.body.page.title, "Editable");
      assert.equal(res.body.page.type, "public");
    });
  });

  describe("PUT /api/pages/:id", () => {
    it("happy: owner updates title and brief_description", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "to-update",
      });

      const res = await request(app)
        .put(`/api/pages/${page.id}`)
        .set("authorization", u.token)
        .send({
          page: {
            title: "New title",
            briefDes: "New brief description",
            body: "<p>updated body</p>",
            targets: "New targets",
            tags: ["tag1"],
            configurations: {
              anonymously: false,
              comments: false,
              rating: false,
              links: false,
            },
          },
        });

      assert.equal(res.status, 200);
      assert.equal(res.body.username, u.username);

      const row = await DB.find<{ title: string; brief_description: string }>(
        `SELECT title, brief_description FROM pages WHERE id = $1`,
        [page.id],
      );
      assert.equal(row?.title, "New title");
      assert.equal(row?.brief_description, "New brief description");
    });
  });

  describe("GET /api/:username/:url/edit", () => {
    it("happy: private page edit lookup by username + url returns the page", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "private",
        url: "secret-edit",
        title: "Secret",
      });

      const res = await request(app)
        .get(`/api/${u.username}/${page.url}/edit`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      assert.equal(res.body.page.title, "Secret");
      assert.equal(res.body.page.type, "private");
    });
  });
});
