import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
import {
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
} from "./constants";

export const fetchPublicPageData = () => async (dispatch) => {
  dispatch({ type: FETCH_PAGE_DATA_PENDING });
  const { data } = await axios.get(
    `/api/public-pages/${window.location.pathname.split("/")[2]}`,
    {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }
  );

  dispatch({
    type: FETCH_PAGE_DATA_SUCCESS,
    payload: data,
  });
};

export const fetchPrivatePageData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PAGE_DATA_PENDING });
    const { data } = await axios.get(
      `/api/${window.location.pathname.split("/")[1]}/${
        window.location.pathname.split("/")[2]
      }`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({
      type: FETCH_PAGE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({
        type: FETCH_PAGE_DATA_FAILED,
        payload: "not found",
      });
    }
  }
};

export const fetchAttachFiles = (pageId, message) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/pages/${pageId}/attach-files`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    loadingModal();
    showSnackBar(message, "success");
    dispatch({
      type: FETCH_ATTACH_FILES,
      payload: data.attachFiles,
    });
  } catch (error) {
    loadingModal();
    showSnackBar("Sorry, an unknown error occurred.", "error");
  }
};

export const ratePage = (obj) => (dispatch) => {
  dispatch({ type: PAGE_RATED, payload: obj });
};

// Send a requst to server to add or remove a page from the read later list
export const readLater = (id) => async (dispatch) => {
  try {
    loadingModal("Loading...");
    const { data } = await axios.patch(`/api/read-later/${id}`, null, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    loadingModal();

    if (data.readLater)
      showSnackBar("Page added to the read later list.", "success");
    else showSnackBar("Page removed from the read later list.", "success");

    dispatch({ type: READ_LATER, payload: data.readLater });
  } catch (e) {
    loadingModal();
    if (e.response && e.response.status === 401) {
      showSnackBar(
        "Please login to be able to add pages to the read later list."
      );
    } else {
      showSnackBar("An unknown error occurred.");
    }
  }
};

// Send a request to server to either subscribe to or unsubscribe from the author
export const subscribe = (authorId) => async (dispatch) => {
  const { data } = await axios.post(
    `/api/subscription/${authorId}`,
    {},
    {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }
  );

  dispatch({
    type: SUBSCRIBE,
    payload: data,
  });
};
