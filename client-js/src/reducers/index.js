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
  COMMENTS_FETCHED,
  COMMENT_ADDED,
  REPLY_ADDED,
  REPLIES_FETCH,
  HIDE_REPLIES,
  ADD_REPLY,
  // Generals
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
        "history",
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

export const comments = (state = [], action = {}) => {
  switch (action.type) {
    // Return the list of all comments
    case COMMENTS_FETCHED:
      return action.payload.comments;
    // Add and show comment replies
    case REPLIES_FETCH:
      return [...state].map((c) => {
        if (c.id === action.payload.commentId) {
          c.replies = action.payload.replies;
          c.showReplies = true;
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
    // Show add reply form
    case ADD_REPLY:
      console.log(action.payload);

      const status = action.payload.status === "show" ? "add-reply" : "normal";
      const a = [...state];
      return a.map((c) => {
        if (c.id === action.payload.commentId) {
          if (action.payload.replyId) {
            if (
              typeof c.replies === "number" &&
              c.highlightedReplies.length > 0
            ) {
              c.highlightedReplies = c.highlightedReplies.map((rep) => {
                if (rep.id === action.payload.replyId) {
                  rep.status = status;
                  rep.toName = action.payload.toName;
                }
                return rep;
              });
            } else {
              c.replies = c.replies.map((rep) => {
                if (rep.id === action.payload.replyId) {
                  rep.status = status;
                  console.log(rep.status);
                  console.log(status);

                  rep.toName = action.payload.toName;
                }
                return rep;
              });
            }
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
    // case COMMENT_EDITED:
    // case COMMENT_DELETED:
    // case COMMENT_RATED:
    default:
      return state;
  }
};

export const user = (state = {}, action = {}) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return { ...state, id: action.payload.userId };
    default:
      return state;
  }
};

/* ----------------------- */
/* General reducers */
/* ----------------------- */
export const modals = (
  state = {
    addToCL: { open: false, pageId: null },
    uploadPhoto: { open: false, id: null }, // Id could be for user, collection or page
    confirmation: { open: false },
  },
  action = {}
) => {
  switch (action.type) {
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
      };
    default:
      return state;
  }
};
