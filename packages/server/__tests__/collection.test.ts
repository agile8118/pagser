import { strict as assert } from "node:assert";
import request from "supertest";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import app from "../src/app.js";
import { DB } from "../src/database/index.js";
import { ApiMessages, CollectionAPI } from "@pagser/common";
import { createUser } from "./helpers/auth.js";
import {
  makeCollection,
  makeCollectionPage,
  makePublishedPage,
  makeSavedCollection,
} from "./helpers/factories/index.js";
import { s3Mock } from "./helpers/aws-mocks.js";
import { tinyJpeg } from "./helpers/images.js";

describe("Collection", () => {
  describe("POST /api/collection", () => {
    it("happy: creates a collection owned by the caller", async () => {
      const u = await createUser();
      const res = await request(app)
        .post("/api/collection")
        .set("authorization", u.token)
        .send({ name: "My Collection", description: "Some desc" });

      assert.equal(res.status, 201);
      const body = res.body as CollectionAPI.CreateResponse;
      assert.equal(body.collection.name, "My Collection");

      const row = await DB.find<{ user_id: number; name: string }>(
        `SELECT user_id, name FROM collections WHERE id = $1`,
        [body.collection.id],
      );
      assert.equal(row?.name, "My Collection");
      assert.equal(String(row?.user_id), u.id);
    });
  });

  describe("GET /api/collection/:id", () => {
    it("happy: owner sees their collection with viewer=owner", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id, name: "Mine" });

      const res = await request(app)
        .get(`/api/collection/${c.id}`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.FetchOneResponse;
      assert.equal(body.collection.name, "Mine");
      assert.equal(body.viewer, "owner");
      assert.equal(body.btn, "share");
    });
  });

  describe("POST /api/collection/add-remove/:id/:pageId", () => {
    it("happy: adds a page to the collection on first call", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id });
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "addable",
      });

      const res = await request(app)
        .post(`/api/collection/add-remove/${c.id}/${page.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.AddRemovePageResponse;
      assert.equal(body.selected, true);

      const row = await DB.find(
        `SELECT id FROM collection_pages WHERE collection_id = $1 AND page_id = $2`,
        [c.id, page.id],
      );
      assert.ok(row);
    });
  });

  describe("POST /api/collection/toggle-library/:id", () => {
    it("happy: adds collection to caller's saved library", async () => {
      const owner = await createUser();
      const saver = await createUser();
      const c = await makeCollection({ userId: owner.id, shared: true });

      const res = await request(app)
        .post(`/api/collection/toggle-library/${c.id}`)
        .set("authorization", saver.token)
        .send();

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.ToggleLibraryResponse;
      assert.equal(body.status, "added");

      const row = await DB.find(
        `SELECT id FROM user_saved_collections WHERE user_id = $1 AND collection_id = $2`,
        [saver.id, c.id],
      );
      assert.ok(row);
    });
  });

  describe("POST /api/collection/sharing/:id", () => {
    it("happy: owner toggles shared from false to true", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id, shared: false });

      const res = await request(app)
        .post(`/api/collection/sharing/${c.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.SharingResponse;
      assert.equal(body.sharing, true);

      const row = await DB.find<{ shared: boolean }>(
        `SELECT shared FROM collections WHERE id = $1`,
        [c.id],
      );
      assert.equal(row?.shared, true);
    });
  });

  describe("PUT /api/collection/info/:id", () => {
    it("happy: owner updates name and description", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id, name: "Old" });

      const res = await request(app)
        .put(`/api/collection/info/${c.id}`)
        .set("authorization", u.token)
        .send({ name: "New name", description: "New desc" });

      assert.equal(res.status, 200);
      const row = await DB.find<{ name: string; description: string }>(
        `SELECT name, description FROM collections WHERE id = $1`,
        [c.id],
      );
      assert.equal(row?.name, "New name");
      assert.equal(row?.description, "New desc");
    });
  });

  describe("PUT /api/collection/remove-pages/:id", () => {
    it("happy: owner removes selected pages from the collection", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id });
      const p1 = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "rem-1",
      });
      const p2 = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "rem-2",
      });
      await makeCollectionPage({ collectionId: c.id, pageId: p1.id });
      await makeCollectionPage({ collectionId: c.id, pageId: p2.id });

      const res = await request(app)
        .put(`/api/collection/remove-pages/${c.id}`)
        .set("authorization", u.token)
        .send({ pageIds: [p1.id] });

      assert.equal(res.status, 200);

      const remaining = await DB.findMany<{ page_id: number }>(
        `SELECT page_id FROM collection_pages WHERE collection_id = $1`,
        [c.id],
      );
      assert.equal(remaining.length, 1);
      assert.equal(String(remaining[0].page_id), String(p2.id));
    });
  });

  describe("DELETE /api/collection/:id", () => {
    it("happy: owner deletes their collection", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id });

      const res = await request(app)
        .delete(`/api/collection/${c.id}`)
        .set("authorization", u.token)
        .send();

      assert.equal(res.status, 200);

      const row = await DB.find(
        `SELECT id FROM collections WHERE id = $1`,
        [c.id],
      );
      assert.equal(row, null);
    });
  });

  describe("GET /api/collections/created", () => {
    it("happy: lists collections created by caller", async () => {
      const u = await createUser();
      await makeCollection({ userId: u.id, name: "A" });
      await makeCollection({ userId: u.id, name: "B" });

      const res = await request(app)
        .get("/api/collections/created")
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.FetchCreatedResponse;
      assert.equal(body.createdCollections.length, 2);
    });
  });

  describe("GET /api/collections/created/:pageId", () => {
    it("happy: returns caller's collections with `selected` flag for a page", async () => {
      const u = await createUser();
      const cIn = await makeCollection({ userId: u.id, name: "In" });
      const cOut = await makeCollection({ userId: u.id, name: "Out" });
      const page = await makePublishedPage({
        userId: u.id,
        type: "public",
        url: "fap-target",
      });
      await makeCollectionPage({ collectionId: cIn.id, pageId: page.id });

      const res = await request(app)
        .get(`/api/collections/created/${page.id}`)
        .set("authorization", u.token);

      assert.equal(res.status, 200);
      const fapBody = res.body as CollectionAPI.FetchCreatedFAPResponse;
      const byName = Object.fromEntries(
        fapBody.collections.map((c) => [c.name, c.selected]),
      );
      assert.equal(byName.In, true);
      assert.equal(byName.Out, false);
    });
  });

  describe("GET /api/collections/created-saved", () => {
    it("happy: returns both created and saved collections", async () => {
      const owner = await createUser();
      const me = await createUser();
      const mine = await makeCollection({ userId: me.id, name: "Mine" });
      const theirs = await makeCollection({
        userId: owner.id,
        shared: true,
        name: "Theirs",
      });
      await makeSavedCollection({ userId: me.id, collectionId: theirs.id });

      const res = await request(app)
        .get("/api/collections/created-saved")
        .set("authorization", me.token);

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.FetchCreatedAndSavedResponse;
      assert.equal(body.createdCollections.length, 1);
      assert.equal(String(body.createdCollections[0].id), String(mine.id));
      assert.equal(body.savedCollections.length, 1);
      assert.equal(body.savedCollections[0].name, "Theirs");
    });
  });

  describe("GET /api/collections/saved", () => {
    it("happy: returns only collections the caller has saved", async () => {
      const owner = await createUser();
      const me = await createUser();
      const c = await makeCollection({
        userId: owner.id,
        shared: true,
        name: "Shared one",
      });
      await makeSavedCollection({ userId: me.id, collectionId: c.id });

      const res = await request(app)
        .get("/api/collections/saved")
        .set("authorization", me.token);

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.FetchSavedResponse;
      assert.equal(body.savedCollections.length, 1);
      assert.equal(body.savedCollections[0].user.username, owner.username);
    });
  });

  describe("GET /api/collections/shared/:username", () => {
    it("happy: anonymous viewer sees a user's shared collections", async () => {
      const owner = await createUser();
      await makeCollection({
        userId: owner.id,
        shared: true,
        name: "Public coll",
      });
      await makeCollection({
        userId: owner.id,
        shared: false,
        name: "Hidden",
      });

      const res = await request(app).get(
        `/api/collections/shared/${owner.username}`,
      );

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.FetchSharedResponse;
      assert.equal(body.collections.length, 1);
      assert.equal(body.collections[0].name, "Public coll");
    });
  });

  describe("PUT /api/collection/photo/:id", () => {
    it("happy: owner uploads a photo and DB stores the S3 url", async () => {
      const u = await createUser();
      const c = await makeCollection({ userId: u.id });

      const res = await request(app)
        .put(`/api/collection/photo/${c.id}?x=0&y=0&width=1&height=1`)
        .set("authorization", u.token)
        .set("Content-Type", "image/jpeg")
        .send(tinyJpeg());

      assert.equal(res.status, 200);
      const body = res.body as CollectionAPI.UploadPhotoResponse;
      assert.equal(body.message, ApiMessages.IMAGE_UPLOADED);

      const puts = s3Mock.commandCalls(PutObjectCommand);
      assert.ok(puts.length >= 1);
      assert.match(String(puts[0].args[0].input.Key), /^images\/collections\//);

      const row = await DB.find<{ photo_key: string }>(
        `SELECT photo_key FROM collections WHERE id = $1`,
        [c.id],
      );
      assert.match(row!.photo_key, /^images\/collections\//);
    });
  });
});
