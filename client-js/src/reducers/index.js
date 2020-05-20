import {
  CHANGE_PAGE,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_PENDING,
  FILTER_BY,
  SORT_BY,
  CHANGE_STATUS,
  SELECT_PAGE,
  EMPTY_LIST,
  REMOVE_PAGES,
  // Show Page
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_PHOTO_CHANGED,
  PHOTO_DELETED,
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
  // Comments
  COMMENTS_FETCHING,
  COMMENTS_FETCHED,
  NEW_COMMENTS_FETCHED,
  COMMENT_ADDED,
  REPLY_ADDED,
  REPLIES_FETCH,
  HIDE_REPLIES,
  CHANGE_COMMENT_STATUS,
  COMMENT_RATED,
  COMMENT_EDITED,
  COMMENT_DELETED,
  // Generals
  OPEN_MDL,
  CLOSE_MDL,
  ADD_TO_CL_MDL,
  CONF_MDL,
  UPLOAD_PHOTO_MDL,
  CLOSE_ALL_MDLS,
} from "actions/constants";

/* ----------------------- */
/* Reducers for main page */
/* ----------------------- */
export const section = (state = "", action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      const sections = [
        "home",
        "subscriptions",
        "history/pages",
        "history/comments",
        "read-later",
        "liked-pages",
        "collections",
        "analytics",
        "pages/published",
        "pages/draft",
        "comments",
      ];

      if (window.location.pathname.split("/")[1] === "home") {
        return "home";
      }

      if (window.location.pathname.split("/")[1] === "collection") {
        return null;
      }

      if (window.location.pathname.split("/")[2] === "history") {
        const index = sections.indexOf(
          `${window.location.pathname.split("/")[2]}/${
            window.location.pathname.split("/")[3]
          }`
        );
        return sections[index] || "history/pages";
      }

      if (window.location.pathname.split("/")[2] === "pages") {
        const index = sections.indexOf(
          `${window.location.pathname.split("/")[2]}/${
            window.location.pathname.split("/")[3]
          }`
        );
        return sections[index] || "pages/published";
      }

      const index = sections.indexOf(window.location.pathname.split("/")[2]);
      return sections[index] || "";
  }
};

export const pages = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_PAGES_PENDING:
      return [];
    case FETCH_PAGES_SUCCESS:
      return action.payload;
    case REMOVE_PAGES:
      return state.filter((page) => {
        return action.payload.indexOf(page.id) === -1;
      });
    default:
      return state;
  }
};

export const selectedPages = (state = [], action = {}) => {
  switch (action.type) {
    case SELECT_PAGE:
      const index = state.indexOf(action.payload);
      if (index === -1) {
        // Add the page to the selected list
        return [...state, action.payload];
      } else {
        // Remove the page from the selected list
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
    case EMPTY_LIST:
      return [];
    default:
      return state;
  }
};

export const status = (state = "normal", action = {}) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const sortBy = (state = "date-added-asc", action = {}) => {
  switch (action.type) {
    case SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

export const filterBy = (state = "all", action = {}) => {
  switch (action.type) {
    case FILTER_BY:
      return action.payload;
    default:
      return state;
  }
};

/* ----------------------- */
/* Reducers for show page */
/* ----------------------- */
export const pageData = (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_PAGE_DATA_PENDING:
      return { ...state, isPending: true };
    case FETCH_PAGE_DATA_SUCCESS:
      return {
        ...state,
        id: action.payload.page.id,
        type: action.payload.page.type,
        contents: action.payload.page.contents,
        photo: action.payload.page.photo,
        author: action.payload.page.author,
        configurations: action.payload.page.configurations,
        date: action.payload.page.date,
        rating: {
          likes: action.payload.page.likes,
          dislikes: action.payload.page.dislikes,
        },
        attachFiles: action.payload.page.attachFiles,
        status: action.payload.viewer.status,
        readLater: action.payload.viewer.readLater,
        subscribed: action.payload.viewer.subscribed,
        isPending: false,
      };
    case PAGE_PHOTO_CHANGED:
      return { ...state, photo: { secure_url: action.payload, public_id: "" } };
    case PHOTO_DELETED:
      return { ...state, photo: { secure_url: "", public_id: "" } };
    case PAGE_RATED:
      return { ...state, rating: action.payload };
    case READ_LATER:
      return { ...state, readLater: action.payload };
    case FETCH_ATTACH_FILES:
      return { ...state, attachFiles: action.payload };
    case SUBSCRIBE:
      return {
        ...state,
        subscribed: action.payload.subscribed,
        author: { ...state.author, subscribersNum: action.payload.subNum },
      };
    case FETCH_PAGE_DATA_FAILED:
      if (action.payload === "not found") {
        return { id: "notfound" };
      }
    default:
      return state;
  }
};

/* ----------------------- */
/* Reducers for comments  */
/* ----------------------- */
export const commentsList = (state = [], action = {}) => {
  switch (action.type) {
    // Return the list of all comments
    case COMMENTS_FETCHED:
      return action.payload.comments;

    case NEW_COMMENTS_FETCHED:
      return [...state, ...action.payload.comments];

    // Add and show comment replies
    case REPLIES_FETCH:
      return [...state].map((c) => {
        if (c.id === action.payload.commentId) {
          c.showReplies = true;
          c.replies = action.payload.replies;
        }
        return c;
      });

    // Hide comment replies
    case HIDE_REPLIES:
      return [...state].map((c) => {
        if (c.id === action.payload) {
          c.showReplies = false;
          c.highlightedReplies = [];
        }
        return c;
      });

    // Add the newly added comment to the comment list
    case COMMENT_ADDED:
      return [action.payload, ...state];

    // Show/hide add reply or edit form
    case CHANGE_COMMENT_STATUS:
      const status = action.payload.status; // possible values: add-reply edit normal
      return [...state].map((c) => {
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

    // Add the reply to comment replies
    case REPLY_ADDED:
      return [...state].map((c) => {
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

    // Update the comment text
    case COMMENT_EDITED:
      return [...state].map((c) => {
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

    // Remove a parent comment from the list
    case COMMENT_DELETED:
      const index = state.findIndex((c) => c.id === action.payload.commentId);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case COMMENT_RATED:
      return [...state].map((c) => {
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
                rep.likes = action.payload.likes;
              }
              return rep;
            });
            // If we need to change the text of a main comment
          } else {
            c.likes = action.payload.likes;
          }
        }
        return c;
      });
    default:
      return state;
  }
};

export const commentsIsPending = (state = true, action = {}) => {
  switch (action.type) {
    case COMMENTS_FETCHING:
      return true;
    case COMMENTS_FETCHED:
      return false;
    case NEW_COMMENTS_FETCHED:
      return false;
    default:
      return state;
  }
};

export const commentsLength = (state = null, action = {}) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.payload.length;
    default:
      return state;
  }
};

/* ----------------------- */
/* Reducers for user  */
/* ----------------------- */
export const user = (state = {}, action = {}) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return { ...state, id: action.payload.userId };
    default:
      return state;
  }
};

/* ----------------------- */
/* UI reducers */
/* ----------------------- */
export const modals = (
  state = {
    addToCL: { open: false, pageId: null }, // Id is for a page
    uploadPhoto: { open: false, id: null }, // Id could be for user, collection or page
    confirmation: { open: false },
    confDeleteComment: { open: false, id: null }, // Id is for a comment
  },
  action = {}
) => {
  switch (action.type) {
    case OPEN_MDL:
      return {
        ...state,
        [action.payload.name]: {
          open: true,
          id: action.payload.id,
        },
      };
    case CLOSE_MDL:
      return {
        ...state,
        [action.payload.name]: {
          open: false,
          id: null,
        },
      };
    case ADD_TO_CL_MDL:
      return {
        ...state,
        addToCL: {
          ...state.addToCL,
          open: action.payload.open,
          pageId: action.payload.pageId,
        },
      };
    case UPLOAD_PHOTO_MDL:
      return {
        ...state,
        uploadPhoto: {
          ...state.uploadPhoto,
          open: action.payload.open,
          id: action.payload.id,
        },
      };
    case CONF_MDL:
      return { ...state, confirmation: { open: true } };
    case CLOSE_ALL_MDLS:
      return {
        ...state,
        addToCL: { ...state.addToCL, open: false },
        uploadPhoto: { ...state.uploadPhoto, open: false },
        confirmation: { open: false },
        confMdlDeleteComment: { open: false, commentId: null },
      };
    default:
      return state;
  }
};
