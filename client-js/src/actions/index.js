import axios from "axios";
import { loadingModal, showSnackBar } from "lib/util";
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

export const closeModal = () => {
  return {
    type: COLLECTIONS_MODAL,
    payload: false,
  };
};

export const addToCollection = () => async (dispatch, getState) => {
  // const { data } = await axios.post(
  //   `/api/collections/created/${getState().pageData.id}`,
  //   {},
  //   {
  //     headers: {
  //       authorization: localStorage.getItem("token"),
  //     },
  //   }
  // );

  // dispatch({
  //   type: FETCH_COLLECTIONS,
  //   payload: data,
  // });

  dispatch({
    type: COLLECTIONS_MODAL,
    payload: true,
  });
};
