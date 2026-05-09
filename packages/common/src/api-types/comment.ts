export namespace CommentAPI {
  export interface CommentAuthor {
    id: string; name: string; username: string; photo: string;
  }

  export interface CommentItem {
    id: string; text: string;
    author: CommentAuthor;
    date: string; likes: number;
    status: "normal";
    replies: number | CommentItem[];
    showReplies: boolean;
    highlightedReplies: ReplyItem[];
    viewer: "owner" | "spectator";
    readByPageOwner: boolean;
    lovedByPageOwner: boolean;
    inReplyTo: string | null;
  }

  export interface ReplyItem {
    id: string; text: string;
    author: CommentAuthor;
    date: string; likes: number;
    status: "normal";
    viewer: "owner" | "spectator";
    toName: string;
    inReplyTo: string;
    inReplyToCommentReply: number | null;
    inReplyToUser?: string;
    readByPageOwner: boolean;
    lovedByPageOwner: boolean;
  }

  export interface CommentHistoryItem {
    id: string; text: string; date: string;
    reply: { name: string | null; username: string | null; };
    page: { type: string; title: string; url: string; author: { username: string; }; };
  }

  // POST /api/comment/:pageId
  export interface AddCommentBody { text: string; inReplyTo?: string; inReplyToCommentReply?: string; }
  export interface AddCommentResponse { comment: CommentItem; inReplyTo: string | null; }

  // GET /api/comments/:pageId
  export interface FetchCommentsResponse {
    comments: CommentItem[];
    userId: string | undefined;
    length: number;
  }

  // GET /api/comment/:id/replies
  export interface FetchRepliesResponse { replies: ReplyItem[]; commentId: string; }

  // PUT /api/comment/:id
  export interface UpdateCommentBody { text: string; }
  export interface UpdateCommentResponse { commentId: string; newComment: string; inReplyTo: number | null; }

  // DELETE /api/comment/:id
  export interface DeleteCommentResponse { commentId: string; parent: number | null; }

  // GET /api/comments/history
  export interface CommentsHistoryResponse { comments: CommentHistoryItem[]; }
}
