export namespace ReadLaterAPI {
  export interface ReadLaterPageItem {
    id: string; url: string; type: "public" | "private";
    contents: { title: string; briefDes: string; };
    photo_url: string | null;
    author: { username: string; };
    dateVisited: string;
  }

  // PATCH /api/read-later/:id
  export interface ToggleResponse { readLater: boolean; }

  // DELETE /api/read-later
  export interface RemoveBody { ids: string[]; }
  export interface RemoveResponse { message: string; }

  // GET /api/read-later
  export interface FetchResponse {
    pages: ReadLaterPageItem[];
    sortBy: string;
    filterBy: string;
  }
}
