import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";

describe("Page private view", () => {
  describe("GET /api/:username/:url", () => {
    it("happy: owner reads their private page contents and configurations", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "private",
        url: "my-private",
        title: "Private page",
      });

      const res = await request(app)
        .get(`/api/${u.username}/${page.url}`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      assert.equal(res.body.page.contents.title, "Private page");
      assert.equal(res.body.viewer.status, "owner");
    });
  });
});
