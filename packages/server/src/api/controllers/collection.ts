import type {
  CpeakRequest as Request,
  CpeakResponse as Response,
} from "cpeak";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { DB } from "../../database/index.js";
import { ICollection } from "../../database/types.js";
import { CollectionAPI } from "@pagser/common";
import {
  storageClient as s3Client,
  storageBucket,
} from "../services/storage.js";

// Create a new collection
const create = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { name, description } = req.body;

  if (!name || name.trim().length === 0) {
    throw { status: 400, message: "Collection name is required" };
  }

  const collection = await DB.insert<ICollection>(`collections`, {
    name: name.trim(),
    description: description || null,
    user_id: parseInt(userId),
  });

  const body: CollectionAPI.CreateResponse = { message: "Collection created successfully", collection };
  res.status(201).json(body);
};

// Fetch one collection
const fetchOne = async (req: Request, res: Response) => {
  const collectionId = req.params.id;
  const userId = req.user?.id;

  const collection = await DB.find<any>(
    `
    SELECT c.id, c.name, c.description, c.photo_key, c.photo_url as photo_secure_url,
           c.user_id, c.shared, c.created_at, c.updated_at,
           u.username, u.name as user_name
    FROM collections c
    JOIN users u ON c.user_id = u.id
    WHERE c.id = $1
    `,
    [collectionId],
  );

  if (!collection) throw { status: 404, message: "Collection not found" };

  if (!collection.shared && collection.user_id !== parseInt(userId || "0")) {
    throw { status: 403, message: "Collection is private" };
  }

  const pages = await DB.findMany<any>(
    `
    SELECT
      p.id,
      p.url,
      p.title,
      p.brief_description,
      p.cropped_photo_url as photo_url,
      pt.type,
      u.username,
      cp.order_index,
      json_build_object(
        'title', p.title,
        'briefDes', p.brief_description
      ) as contents
    FROM collection_pages cp
    JOIN pages p ON cp.page_id = p.id
    JOIN page_types pt ON p.type_id = pt.id
    JOIN users u ON p.user_id = u.id
    WHERE cp.collection_id = $1
    ORDER BY cp.order_index ASC
    `,
    [collectionId],
  );

  const formattedPages = pages.map((p: any) => ({
    id: p.id,
    url: p.url,
    type: p.type,
    contents: p.contents,
    photo: p.photo_url
      ? {
          secure_url: p.photo_url,
        }
      : null,
    author: {
      username: p.username,
    },
  }));

  let viewerStatus: "spectator" | "authenticated" | "owner" = "spectator";
  if (userId && collection.user_id === parseInt(userId)) {
    viewerStatus = "owner";
  } else if (userId) {
    viewerStatus = "authenticated";
  }

  let btn: "save" | "remove" | "share" | "stop-sharing" = "save";
  if (viewerStatus === "owner") {
    btn = collection.shared ? "stop-sharing" : "share";
  } else if (userId) {
    const saved = await DB.find<any>(
      `SELECT id FROM user_saved_collections WHERE user_id = $1 AND collection_id = $2`,
      [userId, collectionId],
    );
    btn = saved ? "remove" : "save";
  }

  const body: CollectionAPI.FetchOneResponse = {
    collection: {
      id: String(collection.id),
      name: collection.name,
      description: collection.description,
      photo: collection.photo_secure_url
        ? { secure_url: collection.photo_secure_url }
        : null,
      user: { name: collection.user_name, username: collection.username },
      pages: formattedPages,
    },
    pages: formattedPages,
    viewer: viewerStatus,
    btn,
  };
  res.json(body);
};

// Add or remove page from collection
const addRemovePage = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;
  const pageId = req.params.pageId;

  const collection = await DB.find<ICollection>(
    `SELECT user_id FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const existing = await DB.find<any>(
    `SELECT id FROM collection_pages WHERE collection_id = $1 AND page_id = $2`,
    [collectionId, pageId],
  );

  if (existing) {
    await DB.delete(
      `collection_pages`,
      `collection_id = $1 AND page_id = $2`,
      [collectionId, pageId],
    );
    const off: CollectionAPI.AddRemovePageResponse = { message: "success", selected: false, clName: "fa-bookmark" };
    res.json(off);
  } else {
    const maxOrder = await DB.find<{ max_index: number | null }>(
      `SELECT MAX(order_index) as max_index FROM collection_pages WHERE collection_id = $1`,
      [collectionId],
    );

    const nextOrder = (maxOrder?.max_index || 0) + 1;

    await DB.insert(`collection_pages`, {
      collection_id: parseInt(collectionId),
      page_id: parseInt(pageId),
      order_index: nextOrder,
    });

    const on: CollectionAPI.AddRemovePageResponse = { message: "success", selected: true, clName: "fa-bookmark-fill" };
    res.json(on);
  }
};

// Toggle collection in user's saved collections
const toggleLibrary = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;

  const existing = await DB.find<any>(
    `SELECT id FROM user_saved_collections WHERE user_id = $1 AND collection_id = $2`,
    [userId, collectionId],
  );

  if (existing) {
    await DB.delete(
      `user_saved_collections`,
      `user_id = $1 AND collection_id = $2`,
      [userId, collectionId],
    );
    const removed: CollectionAPI.ToggleLibraryResponse = { message: "success", status: "removed" };
    res.json(removed);
  } else {
    await DB.insert(`user_saved_collections`, {
      user_id: parseInt(userId),
      collection_id: parseInt(collectionId),
    });
    const added: CollectionAPI.ToggleLibraryResponse = { message: "success", status: "added" };
    res.json(added);
  }
};

// Toggle collection sharing (public/private)
const sharing = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;

  const collection = await DB.find<ICollection>(
    `SELECT user_id, shared FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const newShared = !collection.shared;

  await DB.update(`collections`, { shared: newShared }, `id = $2`, [
    collectionId,
  ]);

  const body: CollectionAPI.SharingResponse = { message: "success", sharing: newShared };
  res.json(body);
};

// Update collection info
const updateInfo = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;
  const { name, description } = req.body;

  const collection = await DB.find<ICollection>(
    `SELECT user_id FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  await DB.update(`collections`, { name, description }, `id = $3`, [
    collectionId,
  ]);

  const body: CollectionAPI.UpdateInfoResponse = { message: "updated" };
  res.json(body);
};

// Remove pages from collection
const removePages = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;
  const { pageIds } = req.body;

  if (!pageIds || !Array.isArray(pageIds) || pageIds.length === 0) {
    throw { status: 400, message: "Invalid pageIds" };
  }

  const collection = await DB.find<ICollection>(
    `SELECT user_id FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  const placeholders = pageIds.map((_, i) => `$${i + 1}`).join(",");
  const query = `
    DELETE FROM collection_pages
    WHERE collection_id = $${pageIds.length + 1} AND page_id IN (${placeholders})
  `;

  await DB.query(query, [...pageIds, collectionId]);

  const body: CollectionAPI.RemovePagesResponse = { message: "success" };
  res.json(body);
};

// Delete collection
const deleteCollection = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const collectionId = req.params.id;

  const collection = await DB.find<ICollection>(
    `SELECT user_id, photo_key FROM collections WHERE id = $1`,
    [collectionId],
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    throw { status: 403, message: "Unauthorized" };
  }

  await DB.delete(`collections`, `id = $1`, [collectionId]);

  if (collection.photo_key) {
    await s3Client
      .send(
        new DeleteObjectCommand({
          Bucket: storageBucket,
          Key: collection.photo_key,
        }),
      )
      .catch(() => {});
  }

  const body: CollectionAPI.DeleteCollectionResponse = { message: "success" };
  res.json(body);
};

// Fetch created collections
const fetchCreated = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const sortBy = (req.query.sortBy || "date-created") as string;

  let query = `
    SELECT c.id, c.name, c.description, c.photo_url as photo_secure_url,
           COUNT(cp.id)::int as pages_count
    FROM collections c
    LEFT JOIN collection_pages cp ON cp.collection_id = c.id
    WHERE c.user_id = $1
    GROUP BY c.id
  `;

  if (sortBy === "a-z") {
    query += ` ORDER BY c.name ASC`;
  } else {
    query += ` ORDER BY c.created_at DESC`;
  }

  const collections = await DB.findMany<any>(query, [userId]);

  const body: CollectionAPI.FetchCreatedResponse = { createdCollections: collections, sortBy };
  res.json(body);
};

// Fetch created and saved collections
const fetchCreatedAndSaved = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const createdCollections = await DB.findMany<any>(
    `
    SELECT c.id, c.name, c.description, c.photo_url as photo_secure_url,
           COUNT(cp.id)::int as pages_count
    FROM collections c
    LEFT JOIN collection_pages cp ON cp.collection_id = c.id
    WHERE c.user_id = $1
    GROUP BY c.id
    ORDER BY c.created_at DESC
    `,
    [userId],
  );

  const savedCollections = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.name,
      c.description,
      c.photo_url as photo_secure_url,
      u.name as user_name,
      u.username,
      COUNT(cp.id)::int as pages_count
    FROM user_saved_collections usc
    JOIN collections c ON usc.collection_id = c.id
    JOIN users u ON c.user_id = u.id
    LEFT JOIN collection_pages cp ON cp.collection_id = c.id
    WHERE usc.user_id = $1 AND c.shared = true
    GROUP BY c.id, u.name, u.username, usc.created_at
    ORDER BY usc.created_at DESC
    `,
    [userId],
  );

  const body: CollectionAPI.FetchCreatedAndSavedResponse = {
    createdCollections,
    savedCollections: savedCollections.map((col: any) => ({
      id: col.id,
      name: col.name,
      description: col.description,
      photo_secure_url: col.photo_secure_url,
      pages_count: col.pages_count,
      user: { name: col.user_name, username: col.username },
    })),
  };
  res.json(body);
};

// Fetch saved (shared) collections
const fetchSaved = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const collections = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.name,
      c.description,
      c.photo_url as photo_secure_url,
      u.name as user_name,
      u.username,
      COUNT(cp.id)::int as pages_count
    FROM user_saved_collections usc
    JOIN collections c ON usc.collection_id = c.id
    JOIN users u ON c.user_id = u.id
    LEFT JOIN collection_pages cp ON cp.collection_id = c.id
    WHERE usc.user_id = $1 AND c.shared = true
    GROUP BY c.id, u.name, u.username, usc.created_at
    ORDER BY usc.created_at DESC
    `,
    [userId],
  );

  const body: CollectionAPI.FetchSavedResponse = {
    savedCollections: collections.map((col: any) => ({
      id: col.id,
      name: col.name,
      description: col.description,
      photo_secure_url: col.photo_secure_url,
      pages_count: col.pages_count,
      user: { name: col.user_name, username: col.username },
    })),
  };
  res.json(body);
};

// Fetch shared collections for a public user
const fetchShared = async (req: Request, res: Response) => {
  const username = req.params.username;

  const collections = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.name,
      c.description,
      c.photo_url as photo_secure_url,
      u.username,
      (SELECT COUNT(*) FROM collection_pages WHERE collection_id = c.id) as page_count
    FROM collections c
    JOIN users u ON c.user_id = u.id
    WHERE u.username = $1 AND c.shared = true
    ORDER BY c.created_at DESC
    `,
    [username],
  );

  const formattedCollections = (collections || []).map((col: any) => ({
    id: col.id,
    name: col.name,
    description: col.description,
    photo: col.photo_secure_url ? { secure_url: col.photo_secure_url } : null,
    pageCount: parseInt(col.page_count || "0"),
    user: { username: col.username },
  }));

  const body: CollectionAPI.FetchSharedResponse = { collections: formattedCollections };
  res.json(body);
};

// Fetch collections a page belongs to (for "Add to Collection" modal)
const fetchCreatedFAP = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const pageId = req.params.pageId;

  const collections = await DB.findMany<any>(
    `
    SELECT
      c.id,
      c.name,
      CASE WHEN cp.id IS NOT NULL THEN true ELSE false END as selected
    FROM collections c
    LEFT JOIN collection_pages cp ON c.id = cp.collection_id AND cp.page_id = $1
    WHERE c.user_id = $2
    ORDER BY c.created_at DESC
    `,
    [pageId, userId],
  );

  const body: CollectionAPI.FetchCreatedFAPResponse = {
    collections: collections.map((col: any) => ({ id: col.id, name: col.name, selected: col.selected })),
  };
  res.json(body);
};

const controller = {
  create,
  fetchOne,
  addRemovePage,
  toggleLibrary,
  sharing,
  updateInfo,
  removePages,
  deleteCollection,
  fetchCreated,
  fetchCreatedAndSaved,
  fetchSaved,
  fetchShared,
  fetchCreatedFAP,
};

export default controller;
