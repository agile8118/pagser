import {
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
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
