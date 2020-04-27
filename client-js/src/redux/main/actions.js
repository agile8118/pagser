import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
import {
  CHANGE_PAGE,
  FETCH_PAGES_SUCCESS,
  FILTER_BY,
  SORT_BY,
  CHANGE_STATUS,
  SELECT_PAGE,
  EMPTY_LIST,
  REMOVE_PAGES,
} from "./constants";

export const changeSection = (section) => (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: section });
};

export const fetchPages = (kind, filterBy, sortBy) => async (dispatch) => {
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

    dispatch({
      type: EMPTY_LIST,
      payload: "",
    });

    dispatch({
      type: CHANGE_STATUS,
      payload: "normal",
    });
    loadingModal();
    showSnackBar("Page(s) successfully removed from your list.", "success");
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
