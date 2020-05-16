import axios from "axios";
import { loadingModal, showSnackBar } from "lib/util";
import {
  CHANGE_PAGE,
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
  PAGE_PHOTO_CHANGED,
  PHOTO_DELETED,
  PAGE_RATED,
  READ_LATER,
  FETCH_ATTACH_FILES,
  SUBSCRIBE,
  // Comments
  COMMENTS_FETCHED,
  COMMENT_ADDED,
  REPLY_ADDED,
  HIDE_REPLIES,
  REPLIES_FETCH,
  CHANGE_COMMENT_STATUS,
  COMMENT_EDITED,
  // Generals
  ADD_TO_CL_MDL,
  UPLOAD_PHOTO_MDL,
  CONF_MDL,
  CLOSE_ALL_MDLS,
} from "./constants";

/* ----------------------- */
/* Actions for main page */
/* ----------------------- */
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

/* ----------------------- */
/* Actions for show page */
/* ----------------------- */
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

// Fire an action to let reducers know to update the page photo
export const changePagePhoto = (secure_url) => {
  return {
    type: PAGE_PHOTO_CHANGED,
    payload: secure_url,
  };
};

// Send a request to server to delete the page photo
export const deletePagePhoto = () => async (dispatch, getState) => {
  loadingModal("Removing the photo...");
  try {
    await axios.delete(`/api/pages/${getState().pageData.id}/photo`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    loadingModal();
    showSnackBar("Photo successfully removed from your page.", "success");
    dispatch({
      type: PHOTO_DELETED,
    });
  } catch (e) {
    loadingModal();
    showSnackBar("There was problem with removing the photo.", "error");
  }
};

export const ratePage = (obj) => (dispatch) => {
  dispatch({ type: PAGE_RATED, payload: obj });
};

// Send a request to server to add or remove a page from the read later list
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

/* ----------------------- */
/* Comments action creators */
/* ----------------------- */
// Fetch the list of all comments of a page
export const fetchComments = (pageId) => async (dispatch) => {
  const { data } = await axios.get(`/api/comments/${pageId}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  dispatch({
    type: COMMENTS_FETCHED,
    payload: {
      comments: data.comments,
      userId: data.userId,
    },
  });
};

// Send a request to server to add a comment for the page or a comment reply for another comment
export const addComment = (
  comment,
  inReplyTo = null,
  inReplyToCommentReply = null
) => async (dispatch, getState) => {
  loadingModal("Adding your comment...");
  try {
    const { data } = await axios.post(
      `/api/comment/${getState().pageData.id}`,
      { text: comment, inReplyTo, inReplyToCommentReply },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    loadingModal();
    if (data.inReplyTo) {
      dispatch({
        type: REPLY_ADDED,
        payload: data.comment,
      });

      dispatch({
        type: CHANGE_COMMENT_STATUS,
        payload: {
          commentId: inReplyTo,
          status: "hide",
          replyId: inReplyToCommentReply,
        },
      });

      showSnackBar("Your comment reply added successfully.", "success");
    } else {
      dispatch({ type: COMMENT_ADDED, payload: data.comment });
      showSnackBar("Your comment added successfully.", "success");
    }
  } catch (e) {
    loadingModal();
    console.log(e);
    showSnackBar("Sorry an unknown error occurred.", "error");
  }
};

// Send a request to server to edit a comment
export const editComment = (commentId, newComment) => async (dispatch) => {
  loadingModal("Updating your comment...");
  try {
    const { data } = await axios.put(
      `/api/comment/${commentId}`,
      { text: newComment },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    loadingModal();

    dispatch({
      type: COMMENT_EDITED,
      payload: {
        newComment: data.newComment,
        commentId: data.commentId,
        inReplyTo: data.inReplyTo,
      },
    });

    showSnackBar("Your comment updated successfully.", "success");
  } catch (e) {
    loadingModal();
    console.log(e);
    showSnackBar("Sorry an unknown error occurred.", "error");
  }
};

// Fetch all replies of a comment
export const fetchReplies = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/comment/${id}/replies`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  dispatch({
    type: REPLIES_FETCH,
    payload: { replies: data.replies, commentId: data.commentId },
  });
};

// Hide comment replies
export const hideReplies = (id) => {
  return {
    type: HIDE_REPLIES,
    payload: id,
  };
};

// Show/hide add reply form
export const addReplyForm = (commentId, status, inReplyTo, toName = null) => (
  dispatch,
  getState
) => {
  dispatch({
    type: CHANGE_COMMENT_STATUS,
    payload: {
      commentId,
      status: status === "show" ? "add-reply" : "normal",
      replyId: inReplyTo,
      toName,
      userId: getState().user.id,
    },
  });
};

// Show/hide edit comment form, first id is the main comment and
// the last one is the id of the comment reply which is optional
export const editCommentForm = (commentId, status, replyId = null) => (
  dispatch
) => {
  dispatch({
    type: CHANGE_COMMENT_STATUS,
    payload: {
      commentId,
      status: status === "show" ? "edit" : "normal",
      replyId,
    },
  });
};

/* ----------------------- */
/* General action creators */
/* ----------------------- */
// Close all modals
export const closeModal = () => {
  return {
    type: CLOSE_ALL_MDLS,
  };
};

// Open confirmation modal
export const openConfModal = () => {
  return {
    type: CONF_MDL,
  };
};

export const addToCollectionOpen = (pageId) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CL_MDL,
    payload: { open: true, pageId },
  });
};

export const openUploadPhoto = (id) => async (dispatch) => {
  dispatch({
    type: UPLOAD_PHOTO_MDL,
    payload: { open: true, id },
  });
};
