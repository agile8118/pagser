import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
import { CHANGE_PAGE, FETCH_READ_LATER_PAGES_SUCCESS } from "./constants";

export const changeSection = (section) => (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: section });
};

export const fetchReadLaterPages = () => async (dispatch) => {
  loadingModal("Loading...");
  const { data } = await axios.get("/api/read-later", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  loadingModal();

  dispatch({ type: FETCH_READ_LATER_PAGES_SUCCESS, payload: data.results });
};
