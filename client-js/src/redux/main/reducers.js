import { CHANGE_PAGE } from "./constants";

export const section = (state = {}, action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, section: action.payload };
    default:
      const sections = [
        "home",
        "subscription",
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
        if (window.location.pathname.includes(item)) {
          section = item;
        }
      }

      return { ...state, section };
  }
};
