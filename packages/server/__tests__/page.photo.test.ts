import { strict as assert } from "node:assert";
import request from "supertest";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { makePublishedPage } from "./helpers/factories/index.js";
import { s3Mock } from "./helpers/aws-mocks.js";
import { tinyJpeg } from "./helpers/images.js";

describe("Page photo", () => {
  describe("PUT /api/pages/:id/photo", () => {
    it("happy: uploads full + cropped variant and stores both keys on the page", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "with-photo",
      });

      const res = await request(app)
        .put(`/api/pages/${page.id}/photo?x=0&y=0&width=1&height=1`)
        .set("authorization", u.token)
        .set("Content-Type", "image/jpeg")
        .send(tinyJpeg());

      assert.equal(res.status, 200);
      assert.equal(res.body.message, "image-uploaded");

      const puts = s3Mock.commandCalls(PutObjectCommand);
      assert.ok(puts.length >= 2, `expected ≥2 S3 puts, got ${puts.length}`);

      const row = await DB.find<{
        photo_key: string;
        cropped_photo_key: string;
      }>(
        `SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1`,
        [page.id],
      );
      assert.match(row!.photo_key, /^images\/pages\//);
      assert.match(row!.cropped_photo_key, /^images\/pages\//);
    });
  });

  describe("DELETE /api/pages/:id/photo", () => {
    it("happy: deletes both photo objects from S3 and clears DB columns", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "rm-photo",
        overrides: {
          photo_key: "images/pages/full.jpg",
          photo_url: "https://s3.local/images/pages/full.jpg",
          cropped_photo_key: "images/pages/cropped.jpg",
          cropped_photo_url: "https://s3.local/images/pages/cropped.jpg",
        },
      });

      const res = await request(app)
        .delete(`/api/pages/${page.id}/photo`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);

      const dels = s3Mock.commandCalls(DeleteObjectCommand);
      const keys = dels.map((d) => d.args[0].input.Key).sort();
      assert.deepEqual(keys, [
        "images/pages/cropped.jpg",
        "images/pages/full.jpg",
      ]);

      const row = await DB.find<{
        photo_key: string;
        cropped_photo_key: string;
      }>(
        `SELECT photo_key, cropped_photo_key FROM pages WHERE id = $1`,
        [page.id],
      );
      assert.equal(row?.photo_key, "");
      assert.equal(row?.cropped_photo_key, "");
    });
  });
});
