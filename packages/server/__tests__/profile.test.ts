import { strict as assert } from "node:assert";
import request from "supertest";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { createUser } from "./helpers/auth.js";
import { s3Mock } from "./helpers/aws-mocks.js";
import { tinyJpeg } from "./helpers/images.js";

describe("Profile", () => {
  describe("GET /api/profile", () => {
    it("happy: returns the user's profile with empty links object", async () => {
      const u = await createUser();
      const res = await request(app)
        .get("/api/profile")
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      assert.equal(res.body.user.username, u.username);
      assert.equal(res.body.user.email, u.email);
      assert.equal(res.body.user.links.website, "");
    });
  });

  describe("PATCH /api/profile", () => {
    it("happy: updates name, headline, and links", async () => {
      const u = await createUser();
      const res = await request(app)
        .patch("/api/profile")
        .set("authorization", u.token)
        .send({
          name: "New Name",
          headline: "Building stuff",
          biography: "Hello world",
          links: { website: "https://example.com" },
        });

      assert.equal(res.status, 200);
      assert.equal(res.body.user.name, "New Name");
      assert.equal(res.body.user.headline, "Building stuff");
      assert.equal(res.body.user.links.website, "https://example.com");

      const row = await DB.find<{ name: string; links_website: string }>(
        `SELECT name, links_website FROM users WHERE id = $1`,
        [u.id],
      );
      assert.equal(row?.name, "New Name");
      assert.equal(row?.links_website, "https://example.com");
    });
  });

  describe("PUT /api/profile/photo", () => {
    it("happy: uploads a new profile photo to S3 and stores the URL", async () => {
      const u = await createUser();

      const res = await request(app)
        .put("/api/profile/photo?x=0&y=0&width=1&height=1")
        .set("authorization", u.token)
        .set("Content-Type", "image/jpeg")
        .send(tinyJpeg());

      assert.equal(res.status, 200);
      assert.equal(res.body.message, "image-uploaded");
      assert.match(res.body.image, /^https:\/\/.+\/images\/users\/.+\.jpg$/);

      const puts = s3Mock.commandCalls(PutObjectCommand);
      assert.ok(puts.length >= 1, "expected at least one S3 put");
      assert.match(String(puts[0].args[0].input.Key), /^images\/users\//);

      const row = await DB.find<{ photo_key: string; photo_url: string }>(
        `SELECT photo_key, photo_url FROM users WHERE id = $1`,
        [u.id],
      );
      assert.match(row!.photo_key, /^images\/users\//);
      assert.equal(row!.photo_url, res.body.image);
    });
  });
});
