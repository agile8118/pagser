import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import busboy from "busboy";
import { fileTypeFromBuffer } from "file-type";
import { DB } from "../../database/index.js";
import { ICollection } from "../../database/types.js";
import keys from "../../config/keys.js";

cloudinary.config({
  cloud_name: "dxlsmrixd",
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});

// Create a new collection
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id;
    const { name, description } = req.body;

    if (!name || name.trim().length === 0) {
      return res.status(400).send({ message: "Collection name is required" });
    }

    const collection = await DB.insert<ICollection>(`collections`, {
      name: name.trim(),
      description: description || null,
      user_id: parseInt(userId),
    });

    res.status(201).send({
      message: "Collection created successfully",
      collection,
    });
  } catch (e) {
    next(e);
  }
};

// Fetch one collection
const fetchOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
      [collectionId]
    );

    if (!collection) {
      return res.status(404).send({ message: "Collection not found" });
    }

    // Check if shared or user is owner
    if (!collection.shared && collection.user_id !== parseInt(userId || "0")) {
      return res.status(403).send({ message: "Collection is private" });
    }

    // Fetch pages in collection
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
      [collectionId]
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

    // Determine viewer status
    let viewerStatus: "spectator" | "authenticated" | "owner" = "spectator";
    if (userId && collection.user_id === parseInt(userId)) {
      viewerStatus = "owner";
    } else if (userId) {
      viewerStatus = "authenticated";
    }

    // Determine what action button the viewer should see
    let btn: "save" | "remove" | "share" | "stop-sharing" = "save";
    if (viewerStatus === "owner") {
      btn = collection.shared ? "stop-sharing" : "share";
    } else if (userId) {
      const saved = await DB.find<any>(
        `SELECT id FROM user_saved_collections WHERE user_id = $1 AND collection_id = $2`,
        [userId, collectionId]
      );
      btn = saved ? "remove" : "save";
    }

    res.send({
      collection: {
        id: String(collection.id),
        name: collection.name,
        description: collection.description,
        photo: collection.photo_secure_url
          ? { secure_url: collection.photo_secure_url }
          : { secure_url: "" },
        user: { name: collection.user_name, username: collection.username },
        pages: formattedPages,
      },
      pages: formattedPages,
      viewer: viewerStatus,
      btn,
    });
  } catch (e) {
    next(e);
  }
};

// Add or remove page from collection
const addRemovePage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;
    const pageId = req.params.pageId;

    // Check collection ownership
    const collection = await DB.find<ICollection>(
      `SELECT user_id FROM collections WHERE id = $1`,
      [collectionId]
    );

    if (!collection || collection.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Check if page is in collection
    const existing = await DB.find<any>(
      `SELECT id FROM collection_pages WHERE collection_id = $1 AND page_id = $2`,
      [collectionId, pageId]
    );

    if (existing) {
      // Remove
      await DB.delete(
        `collection_pages`,
        `collection_id = $1 AND page_id = $2`,
        [collectionId, pageId]
      );
      res.send({ message: "success", selected: false, clName: "fa-bookmark" });
    } else {
      // Add with max order index
      const maxOrder = await DB.find<{ max_index: number | null }>(
        `SELECT MAX(order_index) as max_index FROM collection_pages WHERE collection_id = $1`,
        [collectionId]
      );

      const nextOrder = (maxOrder?.max_index || 0) + 1;

      await DB.insert(`collection_pages`, {
        collection_id: parseInt(collectionId),
        page_id: parseInt(pageId),
        order_index: nextOrder,
      });

      res.send({
        message: "success",
        selected: true,
        clName: "fa-bookmark-fill",
      });
    }
  } catch (e) {
    next(e);
  }
};

// Toggle collection in user's saved collections
const toggleLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;

    const existing = await DB.find<any>(
      `SELECT id FROM user_saved_collections WHERE user_id = $1 AND collection_id = $2`,
      [userId, collectionId]
    );

    if (existing) {
      await DB.delete(
        `user_saved_collections`,
        `user_id = $1 AND collection_id = $2`,
        [userId, collectionId]
      );
      res.send({ message: "success", status: "removed" });
    } else {
      await DB.insert(`user_saved_collections`, {
        user_id: parseInt(userId),
        collection_id: parseInt(collectionId),
      });
      res.send({ message: "success", status: "added" });
    }
  } catch (e) {
    next(e);
  }
};

// Toggle collection sharing (public/private)
const sharing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;

    // Check ownership
    const collection = await DB.find<ICollection>(
      `SELECT user_id, shared FROM collections WHERE id = $1`,
      [collectionId]
    );

    if (!collection || collection.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const newShared = !collection.shared;

    await DB.update(
      `collections`,
      { shared: newShared },
      `id = $2`,
      [collectionId]
    );

    res.send({ message: "success", sharing: newShared });
  } catch (e) {
    next(e);
  }
};

// Update collection info
const updateInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;
    const { name, description } = req.body;

    // Check ownership
    const collection = await DB.find<ICollection>(
      `SELECT user_id FROM collections WHERE id = $1`,
      [collectionId]
    );

    if (!collection || collection.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    await DB.update(
      `collections`,
      { name, description },
      `id = $3`,
      [collectionId]
    );

    res.send({ message: "updated" });
  } catch (e) {
    next(e);
  }
};

// Remove pages from collection
const removePages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;
    const { pageIds } = req.body;

    if (!pageIds || !Array.isArray(pageIds) || pageIds.length === 0) {
      return res.status(400).send({ message: "Invalid pageIds" });
    }

    // Check ownership
    const collection = await DB.find<ICollection>(
      `SELECT user_id FROM collections WHERE id = $1`,
      [collectionId]
    );

    if (!collection || collection.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const placeholders = pageIds.map((_, i) => `$${i + 1}`).join(",");
    const query = `
      DELETE FROM collection_pages
      WHERE collection_id = $${pageIds.length + 1} AND page_id IN (${placeholders})
    `;

    await DB.query(query, [...pageIds, collectionId]);

    res.send({ message: "success" });
  } catch (e) {
    next(e);
  }
};

// Delete collection
const deleteCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    const collectionId = req.params.id;

    // Check ownership
    const collection = await DB.find<ICollection>(
      `SELECT user_id FROM collections WHERE id = $1`,
      [collectionId]
    );

    if (!collection || collection.user_id !== parseInt(userId)) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    await DB.delete(`collections`, `id = $1`, [collectionId]);

    res.send({ message: "success" });
  } catch (e) {
    next(e);
  }
};

// Fetch created collections
const fetchCreated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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

    res.send({
      createdCollections: collections,
      sortBy,
    });
  } catch (e) {
    next(e);
  }
};

// Fetch created and saved collections
const fetchCreatedAndSaved = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      [userId]
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
      [userId]
    );

    res.send({
      createdCollections,
      savedCollections: savedCollections.map((col: any) => ({
        id: col.id,
        name: col.name,
        description: col.description,
        photo_secure_url: col.photo_secure_url,
        pages_count: col.pages_count,
        user: {
          name: col.user_name,
          username: col.username,
        },
      })),
    });
  } catch (e) {
    next(e);
  }
};

// Fetch saved (shared) collections
const fetchSaved = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      [userId]
    );

    res.send({
      savedCollections: collections.map((col: any) => ({
        id: col.id,
        name: col.name,
        description: col.description,
        photo_secure_url: col.photo_secure_url,
        pages_count: col.pages_count,
        user: {
          name: col.user_name,
          username: col.username,
        },
      })),
    });
  } catch (e) {
    next(e);
  }
};

// Fetch shared collections for a public user
const fetchShared = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      [username]
    );

    const formattedCollections = (collections || []).map((col: any) => ({
      id: col.id,
      name: col.name,
      description: col.description,
      photo: col.photo_secure_url ? { secure_url: col.photo_secure_url } : null,
      pageCount: parseInt(col.page_count || "0"),
      user: { username: col.username },
    }));

    res.send({ collections: formattedCollections });
  } catch (e) {
    next(e);
  }
};

// Fetch collections a page belongs to (for "Add to Collection" modal)
const fetchCreatedFAP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      [pageId, userId]
    );

    res.send({
      collections: collections.map((col: any) => ({
        id: col.id,
        name: col.name,
        selected: col.selected,
      })),
    });
  } catch (e) {
    next(e);
  }
};

// Upload collection cover photo
const uploadPhoto = async (req: Request, res: Response, next: NextFunction) => {
  const collectionId = req.params.id;
  const userId = req.user.id;

  const collection = await DB.find<ICollection>(
    `SELECT user_id, photo_key FROM collections WHERE id = $1`,
    [collectionId]
  );

  if (!collection || collection.user_id !== parseInt(userId)) {
    return res.status(403).send({ message: "Unauthorized" });
  }

  const prevPhotoKey = collection.photo_key;
  const MAX_FILE_SIZE = 8 * 1024 * 1024;
  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  const bb = busboy({ headers: req.headers });

  let size = 0;
  let hasCheckedFileType = false;

  const cloudinaryStream = cloudinary.uploader.upload_stream(
    {
      timeout: 60000,
      folder: "images/collections/",
      transformation: [{ width: 800, crop: "scale" }],
    },
    async (error, response) => {
      if (error) return next(error);
      if (response) {
        try {
          await DB.update<ICollection>(
            "collections",
            {
              photo_url: response.secure_url,
              photo_key: response.public_id,
            },
            "id = $3",
            [collectionId]
          );
          res.send({ message: "image-uploaded", image: response.secure_url });
        } catch (e) {
          next(e);
        }
      }
    }
  );

  bb.on("file", (name, file, info) => {
    const { mimeType } = info;

    cloudinaryStream.on("drain", () => {
      file.resume();
    });

    file.on("data", async (data) => {
      size += data.length;
      if (size > MAX_FILE_SIZE) {
        file.destroy();
        cloudinaryStream.destroy();
        return bb.emit(
          "error",
          new Error(`Maximum file size is: ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
        );
      }

      if (!hasCheckedFileType) {
        const fileType = await fileTypeFromBuffer(data);
        if (
          (fileType && !ALLOWED_FILE_TYPES.includes(fileType.mime)) ||
          !ALLOWED_FILE_TYPES.includes(mimeType)
        ) {
          file.destroy();
          cloudinaryStream.destroy();
          return bb.emit(
            "error",
            new Error(`Only these file types are allowed: ${ALLOWED_FILE_TYPES}`)
          );
        }
        hasCheckedFileType = true;
      }

      if (!cloudinaryStream.write(data)) {
        file.pause();
      }
    });

    file.on("close", async () => {
      try {
        if (prevPhotoKey) await cloudinary.uploader.destroy(prevPhotoKey);
      } catch (_) {}
      cloudinaryStream.end();
    });
  });

  bb.on("error", (err: Error) => {
    req.unpipe(bb);
    bb.removeAllListeners();
    if (!cloudinaryStream.destroyed) cloudinaryStream.destroy();
    return next({ customError: err.message, status: 400 });
  });

  req.pipe(bb);
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
  uploadPhoto,
};

export default controller;
