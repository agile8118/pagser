import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
import { CHANGE_PAGE } from "./constants";

export const changeSection = (section) => (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: section });
};
