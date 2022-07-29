import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { alert, request, util, loadingModal } from "@pagser/common";

export type TStatus = "add-reply" | "edit" | "normal";

export interface IAuthor {
  id: string;
  name: string;
  photo: string;
  username: string;
}

export type TViewer = "owner" | "spectator";

export interface IReply {
  id: string;
  author: IAuthor;
  viewer: TViewer;
  text: string;
  date: string;
  likes: number;
  status: TStatus;
  toName: string;
  inReplyTo: string; // id
  inReplyToUser?: string; // user name
}

interface IComment {
  id: string;
  author: IAuthor;
  viewer: "owner" | "spectator";
  text: string;
  date: string;
  likes: number;
  status: TStatus;
  replies: IReply[] | number;
  showReplies: boolean;
  highlightedReplies: IReply[]; // will be used to show the recently added comment
}

interface CommentsState {
  loading: boolean;
  list: IComment[];
  totalCount: number; // total number of comments for a page
}

const initialState: CommentsState = {
  loading: true,
  list: [],
  totalCount: 0,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.list = action.payload;
    },
    // when fetch new comments (in the infinite loading)
    addComments: (state, action: PayloadAction<IComment[]>) => {
      state.list = [...state.list, ...action.payload];
    },
    // adds a new comment
    setNewComment: (state, action: PayloadAction<IComment>) => {
      state.list = [action.payload, ...state.list];
    },
    // adds a new reply
    setNewReply: (state, action: PayloadAction<IReply>) => {
      state.list = [...state.list].map((c) => {
        if (c.id === action.payload.inReplyTo) {
          if (typeof c.replies === "number") {
            c.replies += 1;
          } else {
            c.replies.push(action.payload);
          }
          c.highlightedReplies.push(action.payload);
        }
        return c;
      });
    },
    changeCommentStatus: (
      state,
      action: PayloadAction<{
        commentId: string | null;
        status: TStatus;
        replyId?: string | null;
        userId?: string;
        toName?: string;
      }>
    ) => {
      const status = action.payload.status;
      state.list = [...state.list].map((c) => {
        // If commentId matched the comment in store, go for it and do the changes
        // otherwise just return the comment without any modification
        if (c.id === action.payload.commentId) {
          // If we need to change the status of a reply
          if (action.payload.replyId) {
            // Change the status of a reply in 'replies' store or in 'highlightedReplies' store
            let type =
              typeof c.replies === "number" && c.highlightedReplies.length > 0
                ? "highlightedReplies"
                : "replies";
            c[type] = c[type].map((rep) => {
              if (rep.id === action.payload.replyId) {
                // Change the status of the reply comment to either show the reply form or hide it
                rep.status = status;
                // This will be the label value shown on add reply form to inform users
                // who they're replying to, we won't show this label if user is replying to him/her self.
                if (
                  status === "add-reply" &&
                  action.payload.userId !== rep.author.id
                )
                  rep.toName = action.payload.toName;
              }
              return rep;
            });
            // If we need to change the status of a main comment
          } else {
            c.status = status;
          }
        }
        return c;
      });
    },
    setFetchedReplies: (
      state,
      action: PayloadAction<{ replies: IReply[]; commentId: string }>
    ) => {
      state.list = [...state.list].map((c) => {
        if (c.id === action.payload.commentId) {
          c.showReplies = true;
          c.replies = action.payload.replies;
        }
        return c;
      });
    },
    // accepts commentId
    hideReplies: (state, action: PayloadAction<string>) => {
      state.list = [...state.list].map((c) => {
        if (c.id === action.payload) {
          c.showReplies = false;
          c.highlightedReplies = [];
        }
        return c;
      });
    },
    setLikes: (
      state,
      action: PayloadAction<{
        likes: number;
        inReplyTo?: string;
        commentId: string;
      }>
    ) => {
      state.list = [...state.list].map((c) => {
        const mainId = action.payload.inReplyTo
          ? action.payload.inReplyTo
          : action.payload.commentId;
        // Find the main comment
        if (c.id === mainId) {
          // If we need to change the likes of a reply
          if (action.payload.inReplyTo) {
            // Change the likes of a reply in 'replies' store or in 'highlightedReplies' store
            let type =
              typeof c.replies === "number" && c.highlightedReplies.length > 0
                ? "highlightedReplies"
                : "replies";
            c[type] = c[type].map((rep) => {
              if (rep.id === action.payload.commentId) {
                // Change the likes of the reply comment
                rep.likes = action.payload.likes;
              }
              return rep;
            });
            // If we need to change the likes of a main comment
          } else {
            c.likes = action.payload.likes;
          }
        }
        return c;
      });
    },
    setEditedComment: (
      state,
      action: PayloadAction<{
        newComment: string;
        commentId: string;
        inReplyTo: string;
      }>
    ) => {
      state.list = [...state.list].map((c) => {
        const mainId = action.payload.inReplyTo
          ? action.payload.inReplyTo
          : action.payload.commentId;
        // Find the main comment
        if (c.id === mainId) {
          // If we need to change the text of a reply
          if (action.payload.inReplyTo) {
            // Change the text of a reply in 'replies' store or in 'highlightedReplies' store
            let type =
              typeof c.replies === "number" && c.highlightedReplies.length > 0
                ? "highlightedReplies"
                : "replies";
            c[type] = c[type].map((rep) => {
              if (rep.id === action.payload.commentId) {
                // Change the text of the reply comment
                rep.text = action.payload.newComment;
                rep.status = "normal";
              }
              return rep;
            });
            // If we need to change the text of a main comment
          } else {
            c.text = action.payload.newComment;
            c.status = "normal";
          }
        }
        return c;
      });
    },
    deleteAMainComment: (state, action: PayloadAction<string>) => {
      const index = state.list.findIndex((c) => c.id === action.payload);
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

// Fetches new comments including when user scrolls to the bottom
export const fetchComments = (): AppThunk => async (dispatch, getState) => {
  const pageId = getState().page.id;
  const commentsLength = getState().comments.list.length;
  const portion = commentsLength / 10 + 1;

  const response = (await request.get(
    `/comments/${pageId}?portion=${portion}`,
    {
      auth: true,
    }
  )) as any;

  if (commentsLength) {
    dispatch(addComments(response.comments));
  } else {
    dispatch(setComments(response.comments));
  }

  dispatch(setTotalCount(response.length));
  dispatch(setLoading(false));
};

// Sends a request to server to add a comment for the page or a comment reply for another comment
export const addComment =
  (
    comment: string,
    inReplyTo: string | null = null,
    inReplyToCommentReply: string | null = null
  ): AppThunk =>
  async (dispatch, getState) => {
    loadingModal("Adding your comment...");

    try {
      const response = (await request.post(
        `/comment/${getState().page.id}`,
        { text: comment, inReplyTo, inReplyToCommentReply },
        {
          auth: true,
        }
      )) as any;

      if (response.inReplyTo) {
        dispatch(setNewReply(response.comment));

        dispatch(
          changeCommentStatus({
            commentId: inReplyTo,
            status: "normal",
            replyId: inReplyToCommentReply,
            userId: getState().user.id,
          })
        );

        alert("Your reply was added successfully.", "success");
      } else {
        dispatch(setNewComment(response.comment));
        alert("Your comment was added successfully.", "success");
      }
    } catch (e) {
      alert("Sorry an unknown error occurred.", "error");
    }

    loadingModal();
  };

// Fetches all replies of a comment
export const fetchReplies =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    const response = (await request.get(`/comment/${id}/replies`, {
      auth: true,
    })) as any;

    dispatch(
      setFetchedReplies({
        replies: response.replies,
        commentId: response.commentId,
      })
    );
  };

// Sends a request to server to like or unlike a comment
export const likeComment =
  (commentId: string, inReplyTo?: string): AppThunk =>
  async (dispatch, getState) => {
    const response = (await request.patch(`/rate/comment/${commentId}`, null, {
      auth: true,
    })) as any;

    dispatch(setLikes({ likes: response.likes, inReplyTo, commentId }));
  };

// Sends a request to server to edit a comment
export const editComment =
  (commentId: string, newComment: string): AppThunk =>
  async (dispatch, getState) => {
    loadingModal("Updating your comment...");
    const response = (await request.put(
      `/comment/${commentId}`,
      { text: newComment },
      {
        auth: true,
      }
    )) as any;

    dispatch(
      setEditedComment({
        newComment: response.newComment,
        commentId: response.commentId,
        inReplyTo: response.inReplyTo,
      })
    );

    alert("Your comment updated successfully.", "success");

    loadingModal();
  };

// Sends a request to server to delete a comment
export const deleteComment =
  (commentId: string, callback: () => void): AppThunk =>
  async (dispatch, getState) => {
    loadingModal("Deleting your comment...");

    const response = (await request.delete(`/comment/${commentId}`, {
      auth: true,
    })) as any;

    loadingModal();

    // If the comment deleted was a reply comment
    if (typeof response.parent !== "boolean" && response.parent) {
      // Fetch replies of that comment again
      dispatch(fetchReplies(response.parent));
    } else {
      // In this case the comment that was deleted is a main comment, so we remove
      // it entirely from the store along with all of its replies
      dispatch(deleteAMainComment(response.commentId));
    }

    // Might be used to close the modal
    callback();

    alert("Your comment was deleted successfully.", "success");
  };

export const {
  setLoading,
  setComments,
  setTotalCount,
  addComments,
  setNewComment,
  setNewReply,
  changeCommentStatus,
  setFetchedReplies,
  hideReplies,
  setLikes,
  setEditedComment,
  deleteAMainComment,
} = commentsSlice.actions;

export const selectLoading = (state: RootState) => state.comments.loading;
export const selectComments = (state: RootState) => state.comments.list;
export const selectTotalCount = (state: RootState) => state.comments.totalCount;

export default commentsSlice.reducer;
