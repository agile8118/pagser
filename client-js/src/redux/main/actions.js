import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
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
} from "./constants";

export const changeSection = (section) => (dispatch, getState) => {
  if (getState().section !== section) {
    dispatch({ type: FETCH_PAGES_PENDING });
  }
  dispatch({ type: CHANGE_PAGE, payload: section });
};

export const fetchPages = (kind, filterBy, sortBy) => async (dispatch) => {
  try {
    loadingModal("Loading...");
    const { data } = await axios.get(
      `/api/${kind}?sortBy=${sortBy}&filterBy=${filterBy}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    loadingModal();

    dispatch({ type: FETCH_PAGES_SUCCESS, payload: data.results });
    if (filterBy) dispatch({ type: FILTER_BY, payload: data.filterBy });
    if (sortBy) dispatch({ type: SORT_BY, payload: data.sortBy });
  } catch (e) {
    console.log(e);
  }
};

export const selectPage = (id) => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};

export const removePages = (kind) => async (dispatch, getState) => {
  try {
    loadingModal("Loading...");
    await axios.delete(`/api/${kind}`, {
      data: { ids: getState().selectedPages },
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    dispatch({
      type: REMOVE_PAGES,
      payload: getState().selectedPages,
    });

    dispatch({ type: EMPTY_LIST });

    dispatch({
      type: CHANGE_STATUS,
      payload: "normal",
    });
    loadingModal();

    if (getState().section === "pages/draft") {
      showSnackBar("Draft Page(s) successfully deleted.", "success");
    } else {
      showSnackBar("Page(s) successfully removed from your list.", "success");
    }
  } catch (e) {}
};

export const changeStatus = (status) => (dispatch) => {
  dispatch({
    type: CHANGE_STATUS,
    payload: status,
  });

  dispatch({
    type: EMPTY_LIST,
    payload: "",
  });
};

export const fetchCollections = (kind, filterBy, sortBy) => async (
  dispatch
) => {
  try {
    loadingModal("Loading...");
    const { data } = await axios.get(
      `/api/collections/${kind}?sortBy=${sortBy}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    loadingModal();

    dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: data.results });
    if (sortBy) dispatch({ type: SORT_BY, payload: data.sortBy });
  } catch (e) {
    console.log(e);
  }
};

export const createCollection = (name, desc) => async (dispatch) => {
  try {
    loadingModal("Loading...");
    const { data } = await axios.post(
      `/api/collection`,
      { name, description: desc },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    loadingModal();
    showSnackBar("Your collection created successfully.", "success");

    dispatch({ type: COLLECTION_CREATION_SUCCESS, payload: data.results });
  } catch (e) {
    console.log(e);
  }
};
