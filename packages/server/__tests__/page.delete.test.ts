import { strict as assert } from "node:assert";
import request from "supertest";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";
import { s3Mock } from "./helpers/aws-mocks.js";

describe("Page delete", () => {
  describe("DELETE /api/pages/:id", () => {
    it("happy: removes the page row and deletes both S3 photo objects", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "to-be-deleted",
        overrides: {
          photo_key: "images/pages/full.jpg",
          cropped_photo_key: "images/pages/cropped.jpg",
        },
      });

      const res = await request(app)
        .delete(`/api/pages/${page.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);

      const row = await DB.find(`SELECT id FROM pages WHERE id = $1`, [page.id]);
      assert.equal(row, null);

      const dels = s3Mock.commandCalls(DeleteObjectCommand);
      const keys = dels.map((c) => c.args[0].input.Key).sort();
      assert.deepEqual(keys, ["images/pages/cropped.jpg", "images/pages/full.jpg"]);
    });

    it("403 when a different user tries to delete the page", async () => {
      const owner = await createUser();
      const intruder = await createUser();
      const page = await makePublishedPage({
        userId: owner.id,
        type: "public",
        url: "owned-by-someone-else",
      });

      const res = await request(app)
        .delete(`/api/pages/${page.id}`)
        .set("authorization", intruder.token)
        .send();

      assert.equal(res.status, 403);

      const row = await DB.find(`SELECT id FROM pages WHERE id = $1`, [page.id]);
      assert.ok(row);
    });
  });
});
