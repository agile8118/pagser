import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { PagesAPI } from "@pagser/common";
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
      const body = res.body as PagesAPI.FetchPrivatePageResponse;
      assert.equal(body.page.contents.title, "Private page");
      assert.equal(body.viewer.status, "owner");
    });

    it("happy: authenticated non-owner can view private page via link", async () => {
      const owner = await createUser();
      const visitor = await createUser();
      const page = await makePublishedPage({
        userId: owner.id,
        type: "private",
        url: "shared-private",
        title: "Shared private page",
      });

      const res = await request(app)
        .get(`/api/${owner.username}/${page.url}`)
        .set("authorization", visitor.token);

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.FetchPrivatePageResponse;
      assert.equal(body.page.contents.title, "Shared private page");
      assert.equal(body.viewer.status, "authenticated");
    });

    it("happy: unauthenticated user can view private page via link", async () => {
      const owner = await createUser();
      const page = await makePublishedPage({
        userId: owner.id,
        type: "private",
        url: "public-link-private",
        title: "Link-shared private page",
      });

      const res = await request(app)
        .get(`/api/${owner.username}/${page.url}`);

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.FetchPrivatePageResponse;
      assert.equal(body.page.contents.title, "Link-shared private page");
      assert.equal(body.viewer.status, "spectator");
    });
  });
});
