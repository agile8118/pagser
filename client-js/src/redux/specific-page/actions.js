import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import {
  FETCH_PAGE_DATA_SUCCESS,
  FETCH_PAGE_DATA_PENDING,
  FETCH_PAGE_DATA_FAILED,
  PAGE_RATED,
  PAGE_FAVORITED,
  FETCH_ATTACH_FILES
} from "./constants";

export function fetchPublicPageData() {
  return function(dispatch) {
    dispatch({ type: FETCH_PAGE_DATA_PENDING });
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(
        `/api/public-pages/${window.location.pathname.split("/")[2]}`,
        config
      )
      .then(response => {
        dispatch({
          type: FETCH_PAGE_DATA_SUCCESS,
          payload: response.data
        });
      })
      .catch(response => {
        console.log(response);
      });
  };
}

export function fetchSpecificPageData() {
  return function(dispatch) {
    dispatch({ type: FETCH_PAGE_DATA_PENDING });
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(
        `/api/${window.location.pathname.split("/")[1]}/${
          window.location.pathname.split("/")[2]
        }`,
        config
      )
      .then(response => {
        dispatch({
          type: FETCH_PAGE_DATA_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch({
            type: FETCH_PAGE_DATA_FAILED,
            payload: "not found"
          });
        }
      });
  };
}

export function fetchAttachFiles(pageId) {
  return function(dispatch) {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`/api/pages/${pageId}/attach-files`, config)
      .then(response => {
        dispatch({
          type: FETCH_ATTACH_FILES,
          payload: response.data.attachFiles
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function ratePage(obj) {
  return function(dispatch) {
    dispatch({ type: PAGE_RATED, payload: obj });
  };
}

export function pageFavorited(obj) {
  return function(dispatch) {
    dispatch({ type: PAGE_FAVORITED, payload: obj });
  };
}
