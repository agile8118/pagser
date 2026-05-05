import { strict as assert } from "node:assert";
import request from "supertest";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import {
  makeAttachFile,
  makePublishedPage,
} from "./helpers/factories/index.js";
import { s3Mock, s3PutCalls } from "./helpers/aws-mocks.js";

describe("Page attach files", () => {
  describe("GET /api/pages/:id/attach-files", () => {
    it("happy: returns the list of attach files for the page", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "af-list",
      });
      await makeAttachFile({ pageId: page.id, name: "doc.pdf" });
      await makeAttachFile({ pageId: page.id, name: "img.png" });

      const res = await request(app).get(`/api/pages/${page.id}/attach-files`);
      assert.equal(res.status, 200);
      assert.equal(res.body.attachFiles.length, 2);
      const names = res.body.attachFiles.map((f: any) => f.name).sort();
      assert.deepEqual(names, ["doc.pdf", "img.png"]);
    });
  });

  describe("POST /api/pages/:id/attach-files", () => {
    it("happy: streams a file to S3 and inserts a row in attach_files", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "af-upload",
      });

      const res = await request(app)
        .post(
          `/api/pages/${page.id}/attach-files?filename=${encodeURIComponent("notes.txt")}`,
        )
        .set("authorization", u.token)
        .set("Content-Type", "application/octet-stream")
        .send(Buffer.from("hello world"));

      assert.equal(res.status, 200);
      assert.equal(res.body.message, "file uploaded");
      assert.ok(s3PutCalls().length >= 1, "expected at least one S3 put");

      const row = await DB.find<{ name: string; key: string }>(
        `SELECT name, key FROM attach_files WHERE page_id = $1`,
        [page.id],
      );
      assert.equal(row?.name, "notes.txt");
      assert.equal(row?.key, `${page.id}/notes.txt`);
    });
  });

  describe("GET /api/pages/:id/attach-files/:name", () => {
    it("happy: pipes the S3 object body back to the client", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "af-download",
      });

      const res = await request(app).get(
        `/api/pages/${page.id}/attach-files/notes.txt`,
      );

      assert.equal(res.status, 200);
      // helpers/aws-mocks.ts seeds GetObjectCommand to return "mock-attach-bytes"
      assert.equal(res.text, "mock-attach-bytes");
    });
  });

  describe("DELETE /api/pages/:id/attach-files/:fileId", () => {
    it("happy: removes the row from DB and calls S3 DeleteObject", async () => {
      const u = await createUser();
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "af-delete",
      });
      const file = await makeAttachFile({ pageId: page.id, name: "gone.pdf" });

      const res = await request(app)
        .delete(`/api/pages/${page.id}/attach-files/${file.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);

      const row = await DB.find(
        `SELECT id FROM attach_files WHERE id = $1`,
        [file.id],
      );
      assert.equal(row, null);

      const dels = s3Mock.commandCalls(DeleteObjectCommand);
      const keys = dels.map((d) => d.args[0].input.Key);
      assert.ok(keys.includes(`${page.id}/gone.pdf`));
    });
  });
});
