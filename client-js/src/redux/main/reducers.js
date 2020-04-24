import { CHANGE_PAGE, FETCH_READ_LATER_PAGES_SUCCESS } from "./constants";

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
        "pages",
        "comments",
      ];

      let section = "";
      for (let item of sections) {
        if (window.location.pathname.split("/")[1] === "home") {
          section = "home";
          break;
        }
        if (window.location.pathname.split("/")[2] === item) {
          section = item;
          break;
        }
      }

      return section;
  }
};

export const readLaters = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_READ_LATER_PAGES_SUCCESS:
      console.log(action.payload);

      return action.payload;
    default:
      return state;
  }
};
