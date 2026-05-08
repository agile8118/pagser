export namespace CollectionAPI {
  export interface CollectionRecord {
    id: number; name: string; description?: string | null;
    user_id: number; photo_key?: string | null; photo_url?: string | null;
    shared: boolean; created_at: Date | string; updated_at: Date | string;
  }

  export interface CollectionSummary {
    id: number; name: string; description: string | null;
    photo_secure_url: string | null; pages_count: number;
  }

  export interface SavedCollectionSummary {
    id: number; name: string; description: string | null;
    photo_secure_url: string | null; pages_count: number;
    user: { name: string; username: string; };
  }

  export interface SharedCollectionItem {
    id: number; name: string; description: string | null;
    photo: { secure_url: string; } | null;
    pageCount: number;
    user: { username: string; };
  }

  export interface CollectionPageItem {
    id: string; url: string; type: "public" | "private";
    contents: { title: string; briefDes: string; };
    photo: { secure_url: string; } | null;
    author: { username: string; };
  }

  // POST /api/collection
  export interface CreateBody { name: string; description?: string; }
  export interface CreateResponse { message: string; collection: CollectionRecord; }

  // GET /api/collection/:id
  export interface FetchOneResponse {
    collection: {
      id: string; name: string; description: string | null;
      photo: { secure_url: string; };
      user: { name: string; username: string; };
      pages: CollectionPageItem[];
    };
    pages: CollectionPageItem[];
    viewer: "spectator" | "authenticated" | "owner";
    btn: "save" | "remove" | "share" | "stop-sharing";
  }

  // POST /api/collection/add-remove/:id/:pageId
  export interface AddRemovePageResponse { message: string; selected: boolean; clName: string; }

  // POST /api/collection/toggle-library/:id
  export interface ToggleLibraryResponse { message: string; status: "added" | "removed"; }

  // POST /api/collection/sharing/:id
  export interface SharingResponse { message: string; sharing: boolean; }

  // PUT /api/collection/info/:id
  export interface UpdateInfoBody { name: string; description?: string; }
  export interface UpdateInfoResponse { message: string; }

  // PUT /api/collection/remove-pages/:id
  export interface RemovePagesBody { pageIds: string[]; }
  export interface RemovePagesResponse { message: string; }

  // DELETE /api/collection/:id
  export interface DeleteCollectionResponse { message: string; }

  // GET /api/collections/created
  export interface FetchCreatedResponse { createdCollections: CollectionSummary[]; sortBy: string; }

  // GET /api/collections/created/:pageId
  export interface FetchCreatedFAPResponse {
    collections: { id: number; name: string; selected: boolean; }[];
  }

  // GET /api/collections/created-saved
  export interface FetchCreatedAndSavedResponse {
    createdCollections: CollectionSummary[];
    savedCollections: SavedCollectionSummary[];
  }

  // GET /api/collections/saved
  export interface FetchSavedResponse { savedCollections: SavedCollectionSummary[]; }

  // GET /api/collections/shared/:username
  export interface FetchSharedResponse { collections: SharedCollectionItem[]; }

  // PUT /api/collection/photo/:id
  export interface UploadPhotoResponse { message: string; image: string; }
}
