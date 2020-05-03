import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import {
  pageData,
  modals,
  collections,
  section,
  pages,
  sortBy,
  filterBy,
  status,
  selectedPages,
} from "./index";

const showPageStoreRootReducer = combineReducers({
  pageData,
  modals,
  collections,
});

const mainStoreRootReducer = combineReducers({
  section,
  pages,
  filterBy,
  sortBy,
  status,
  selectedPages,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const showPageStore = createStore(
  showPageStoreRootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const mainStore = createStore(
  mainStoreRootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
