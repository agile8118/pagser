import {
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_RATED,
  PAGE_FAVORITED,
  FETCH_ATTACH_FILES
} from "./constants";

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
          dislikes: action.payload.page.dislikes
        },
        attachFiles: action.payload.page.attachFiles,
        status: action.payload.viewer.status,
        favorited: action.payload.viewer.favorited,
        isPending: false
      };
    case PAGE_RATED:
      return { ...state, rating: action.payload };
    case PAGE_FAVORITED:
      return { ...state, favorited: action.payload };
    case FETCH_ATTACH_FILES:
      return { ...state, attachFiles: action.payload };
    case FETCH_PAGE_DATA_FAILED:
      if (action.payload === "not found") {
        return { id: "notfound" };
      }
    default:
      return state;
  }
};
