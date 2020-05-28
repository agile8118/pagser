import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import {
  pageData,
  modals,
  commentsList,
  commentsIsPending,
  commentsLength,
  user,
} from "./index";

const commentReducer = combineReducers({
  list: commentsList,
  isPending: commentsIsPending,
  length: commentsLength,
});

const rootReducer = combineReducers({
  pageData,
  comments: commentReducer,
  user,
  modals,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
