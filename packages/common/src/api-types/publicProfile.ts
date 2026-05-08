export namespace PublicProfileAPI {
  export interface PublicPageItem {
    id: string; type: "public"; url: string;
    author: { username: string; };
    date: string;
    photo_url: string | null;
    contents: { title: string; briefDes: string; };
  }

  export interface PublicCollectionItem {
    id: number; name: string; description: string | null;
    photo: { secure_url: string; } | null;
    pageCount: number;
    user: { username: string; };
  }

  // GET /api/users/:username/pages
  export interface FetchPagesResponse { pages: PublicPageItem[]; }

  // GET /api/users/:username/collections
  export interface FetchCollectionsResponse { collections: PublicCollectionItem[]; }
}
