import {
  CHANGE_PAGE,
  COLLECTION_CREATION_SUCCESS,
  FETCH_COLLECTIONS_SUCCESS,
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
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
  COLLECTIONS_MODAL,
} from "actions/constants";

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

// *****

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

export const modals = (state = {}, action = {}) => {
  switch (action.type) {
    case COLLECTIONS_MODAL:
      return { ...state, collectionMdl: action.payload };
    default:
      return state;
  }
};

export const collections = (state = {}, action = {}) => {
  switch (action.type) {
    // case COLLECTIONS_MODAL:
    //   return { ...state, collectionMdl: action.payload };
    default:
      return state;
  }
};
