export namespace RatingAPI {
  export interface LikedPageItem {
    id: string; url: string; type: "public" | "private";
    contents: { title: string; briefDes: string; };
    photo_url: string | null;
    author: { username: string; };
  }

  // PATCH /api/rate/page/:id
  export interface RatePageBody { rate: "like" | "dislike"; }
  export interface RatePageResponse { likes: number; dislikes: number; }

  // PATCH /api/rate/comment/:id
  export interface RateCommentResponse { likes: number; }

  // GET /api/liked-pages
  export interface FetchLikedPagesResponse { results: LikedPageItem[]; filterBy: string; }

  // DELETE /api/liked-pages
  export interface RemoveLikedPagesBody { ids: string[]; }
  export interface RemoveLikedPagesResponse { message: string; }
}
