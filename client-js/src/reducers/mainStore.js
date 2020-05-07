import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import {
  section,
  pages,
  sortBy,
  filterBy,
  status,
  selectedPages,
  modals,
} from "./index";

const rootReducer = combineReducers({
  modals,
  section,
  pages,
  filterBy,
  sortBy,
  status,
  selectedPages,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
