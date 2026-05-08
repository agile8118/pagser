export namespace UserPagesAPI {
  export interface PageContents { title: string; briefDes: string; }

  export interface PublishedPageItem {
    id: string;
    url: string;
    type: "public" | "private";
    contents: PageContents;
    photo_url: string | null;
    author: { username: string; };
  }

  export interface DraftPageItem {
    id: string;
    contents: { title: string; briefDes: string; };
    updatedAt: string;
  }

  // GET /api/user-pages/published
  export interface FetchPublishedPagesResponse {
    results: PublishedPageItem[];
    filterBy: string;
  }

  // DELETE /api/user-pages/published
  export interface DeletePublishedPagesBody { ids: string[]; }
  export interface DeletePublishedPagesResponse { message: string; }

  // GET /api/user-pages/draft
  export interface FetchDraftPagesResponse { results: DraftPageItem[]; }

  // DELETE /api/user-pages/draft
  export interface DeleteDraftPagesBody { ids: string[]; }
  export interface DeleteDraftPagesResponse { message: string; }
}
