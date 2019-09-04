/* **
  NAMING CONVENTIONS

  For each file that returns JSX we use camel case
 ** */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

// COMPONENTS
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

import Home from "./components/admin/Home";
import Profile from "./components/admin/Profile";
import Settings from "./components/admin/Settings/Settings";
import Nav from "./components/admin/Nav";
import PagesPublished from "./components/admin/Pages/Published";
import PagesFavorited from "./components/admin/Pages/Favorited";
import PagesTrash from "./components/admin/Pages/Trash";
import PagesDraft from "./components/admin/Pages/Draft";

import InitialStep from "./components/new-page/InitialStep";
import PageContents from "./components/new-page/PageContents";
import FinalStep from "./components/new-page/FinalStep";
import Message from "./components/new-page/Message";

import Actions from "./components/show-page/Actions";
import Author from "./components/show-page/Author";
import Rating from "./components/show-page/Rating";
import Comments from "./components/show-page/Comments";
import Photo from "./components/show-page/Photo";
import AttachFiles from "./components/show-page/AttachFiles";

import ShowSpecific from "./components/show-page/Specific";

import EditPage from "./components/edit-page/EditPage";

// REDUCERS
import { fetchPageData } from "./redux/specific-page/reducers";
const showPageReducers = combineReducers({ fetchPageData });
const showPageStore = createStore(
  showPageReducers,
  {},
  applyMiddleware(reduxThunk)
);

const container = document.querySelector(".react-container");

if (container) {
  const containerName = container.getAttribute("name");

  if (containerName === "auth") {
    ReactDOM.render(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </Switch>
        </div>
      </BrowserRouter>,
      container
    );
  }

  if (containerName === "newPage") {
    ReactDOM.render(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/new-page/initial-step" component={InitialStep} />
            <Route path="/new-page/page-contents" component={PageContents} />
            <Route path="/new-page/final-step" component={FinalStep} />
            <Route path="/new-page/message" component={Message} />
            <Redirect from="/new-page" to="/new-page/initial-step" />
          </Switch>
        </div>
      </BrowserRouter>,
      container
    );
  }

  if (containerName === "editPage") {
    ReactDOM.render(<EditPage />, container);
  }

  if (containerName === "showPage") {
    ReactDOM.render(
      <Provider store={showPageStore}>
        <Actions type="public" />
      </Provider>,
      document.querySelector("#actions")
    );
    if (document.querySelector("#author")) {
      ReactDOM.render(
        <Provider store={showPageStore}>
          <Author />
        </Provider>,
        document.querySelector("#author")
      );
    }
    if (document.querySelector("#rating")) {
      ReactDOM.render(
        <Provider store={showPageStore}>
          <Rating />
        </Provider>,
        document.querySelector("#rating")
      );
    }
    if (document.querySelector("#comments")) {
      ReactDOM.render(
        <Provider store={showPageStore}>
          <Comments />
        </Provider>,
        document.querySelector("#comments")
      );
    }
    ReactDOM.render(
      <Provider store={showPageStore}>
        <Photo />
      </Provider>,
      document.querySelector("#photo")
    );
    ReactDOM.render(
      <Provider store={showPageStore}>
        <AttachFiles />
      </Provider>,
      document.querySelector("#attachFiles")
    );
  }

  if (containerName === "showSpecific") {
    ReactDOM.render(
      <Provider store={showPageStore}>
        <ShowSpecific />
      </Provider>,
      container
    );
  }

  if (containerName === "admin") {
    ReactDOM.render(
      <BrowserRouter>
        <div className="admin">
          <Nav />
          <div className="admin__empty" />
          <div className="admin__content">
            <div className="row">
              <div className="">
                <div className="row">
                  <Switch>
                    <Route exact path="/admin/home" component={Home} />
                    <Route path="/admin/profile" component={Profile} />
                    <Route path="/admin/settings" component={Settings} />
                    <Route
                      path="/admin/pages/published"
                      component={PagesPublished}
                    />
                    <Route
                      path="/admin/pages/favorited"
                      component={PagesFavorited}
                    />
                    <Route path="/admin/pages/draft" component={PagesDraft} />
                    <Route path="/admin/pages/trash" component={PagesTrash} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>,
      container
    );
  }
}
