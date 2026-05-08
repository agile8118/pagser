import { strict as assert } from "node:assert";
import request from "supertest";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { PagesAPI } from "@pagser/common";
import { PAGE_STATUS, PAGE_TYPE } from "../src/database/types.js";
import { createUser } from "./helpers/auth.js";
import { makeDraftPage } from "./helpers/factories/index.js";

describe("Page draft", () => {
  describe("POST /api/new-page", () => {
    it("happy: creates a draft page row and returns its id", async () => {
      const u = await createUser();
      const res = await request(app)
        .post("/api/new-page")
        .set("authorization", u.token)
        .send({ page: { type: "public" } });

      assert.equal(res.status, 201);
      const body = res.body as PagesAPI.NewDraftPageResponse;
      assert.equal(body.message, "created");
      assert.ok(body.id);

      const row = await DB.find<{ status_id: number; type_id: number }>(
        `SELECT status_id, type_id FROM pages WHERE id = $1`,
        [body.id],
      );
      assert.equal(row?.status_id, PAGE_STATUS.draftId);
      assert.equal(row?.type_id, PAGE_TYPE.publicId);
    });
  });

  describe("GET /api/new-page/:stage/:id", () => {
    it("happy: page-contents stage returns title/body for the draft", async () => {
      const u = await createUser();
      const draft = await makeDraftPage({
        userId: u.id,
        type: "public",
        overrides: {
          title: "Draft title",
          brief_description: "Brief des",
          body: "<p>hi</p>",
        },
      });

      const res = await request(app)
        .get(`/api/new-page/page-contents/${draft.id}`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.FetchDraftPageContentsResponse;
      assert.equal(body.page.title, "Draft title");
      assert.equal(body.page.brief_description, "Brief des");
    });
  });

  describe("PATCH /api/new-page/:stage/:id", () => {
    it("happy: page-contents stage persists title/body to the row", async () => {
      const u = await createUser();
      const draft = await makeDraftPage({ userId: u.id, type: "public" });

      const res = await request(app)
        .patch(`/api/new-page/page-contents/${draft.id}`)
        .set("authorization", u.token)
        .send({
          page: {
            type: "public",
            contents: {
              title: "New Title",
              briefDes: "Updated brief",
              body: "<p>updated body</p>",
              targets: "Target audience info",
            },
          },
        });

      assert.equal(res.status, 200);
      const body = res.body as PagesAPI.UpdateDraftPageResponse;
      assert.equal(body.message, "updated");

      const row = await DB.find<{ title: string; brief_description: string }>(
        `SELECT title, brief_description FROM pages WHERE id = $1`,
        [draft.id],
      );
      assert.equal(row?.title, "New Title");
      assert.equal(row?.brief_description, "Updated brief");
    });
  });
});
