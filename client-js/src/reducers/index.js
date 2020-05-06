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
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_PHOTO_CHANGED,
  PHOTO_DELETED,
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
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
      console.log("***");

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
