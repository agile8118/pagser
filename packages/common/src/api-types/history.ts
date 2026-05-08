export namespace HistoryAPI {
  export interface HistoryPageItem {
    id: string; url: string; type: "public" | "private";
    contents: { title: string; briefDes: string; };
    photo_url: string | null;
    author: { username: string; };
    dateVisited: string;
  }

  // GET /api/history
  export interface FetchHistoryResponse { results: HistoryPageItem[]; filterBy: string; }

  // DELETE /api/history
  export interface RemoveHistoryBody { ids: string[]; }
  export interface RemoveHistoryResponse { message: string; }
}
