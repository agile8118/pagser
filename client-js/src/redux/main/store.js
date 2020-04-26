import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import {
  section,
  readLaters,
  sortBy,
  filterBy,
  status,
  selectedPages,
} from "./reducers";
const rootReducer = combineReducers({
  section,
  readLaters,
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
