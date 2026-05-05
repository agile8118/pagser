import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";

describe("Page public view", () => {
  describe("GET /api/public-pages/:url", () => {
    it("happy: returns page contents and author info for anonymous viewer", async () => {
      const author = await createUser();
      await makePublishedPage({
        userId: author.id,
        type: "public",
        url: "intro-to-pagser",
        title: "Intro to Pagser",
        briefDes: "A brief description for the public page test.",
      });

      const res = await request(app).get("/api/public-pages/intro-to-pagser");
      assert.equal(res.status, 200);
      assert.equal(res.body.page.contents.title, "Intro to Pagser");
      assert.equal(res.body.page.author.username, author.username);
      assert.equal(res.body.viewer.status, "spectator");
    });

    it("404 when the URL does not exist", async () => {
      const res = await request(app).get("/api/public-pages/does-not-exist");
      assert.equal(res.status, 404);
    });
  });
});
