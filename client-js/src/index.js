/* **
  NAMING CONVENTIONS

  For each file that returns JSX we use camel case
 ** */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

// COMPONENTS
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

import Profile from "./components/admin/Profile";
import Settings from "./components/admin/settings/Settings";
import AdminHeader from "./components/admin/Header";

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

import ShowPrivate from "./components/show-page/Private";

import EditPage from "./components/edit-page/EditPage";

import Home from "./components/main/Home";
import Subscriptions from "./components/main/Subscriptions";
import HistoryPages from "./components/main/history/Pages";
import HistoryComments from "./components/main/history/Comments";
import ReadLater from "./components/main/ReadLater";
import LikedPages from "./components/main/LikedPages";
import Collections from "./components/main/Collections";
import CollectionShow from "./components/main/CollectionShow";
import Analytics from "./components/main/Analytics";
import PagesPublished from "./components/main/pages/Published";
import PagesDraft from "./components/main/pages/Draft";
import UComments from "./components/main/Comments";
import SideNav from "./components/main/SideNav";

// Stores
import showPageStore from "./reducers/showPageStore";
import mainStore from "./reducers/mainStore";
import adminStore from "./reducers/adminStore";

const container = document.querySelector(".react-container");

const containerName = container ? container.getAttribute("name") : null;

if (containerName === "auth") {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>,
    container
  );
}

if (containerName === "newPage") {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/new-page/initial-step" component={InitialStep} />
        <Route path="/new-page/page-contents" component={PageContents} />
        <Route path="/new-page/final-step" component={FinalStep} />
        <Route path="/new-page/message" component={Message} />
        <Redirect from="/new-page" to="/new-page/initial-step" />
      </Switch>
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

if (containerName === "showPrivate") {
  ReactDOM.render(
    <Provider store={showPageStore}>
      <ShowPrivate />
    </Provider>,
    container
  );
}

if (containerName === "admin") {
  ReactDOM.render(
    <Provider store={adminStore}>
      <BrowserRouter>
        <AdminHeader />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    container
  );
}

if (containerName === "main") {
  ReactDOM.render(
    <Provider store={mainStore}>
      <BrowserRouter>
        <SideNav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/feed/subscriptions" component={Subscriptions} />
          <Route path="/feed/history/pages" component={HistoryPages} />
          <Route path="/feed/history/comments" component={HistoryComments} />
          <Route path="/feed/read-later" component={ReadLater} />
          <Route path="/feed/liked-pages" component={LikedPages} />
          <Route path="/u/collections" component={Collections} />
          <Route path="/collection/:id" component={CollectionShow} />
          <Route path="/u/analytics" component={Analytics} />
          <Route path="/u/pages/published" component={PagesPublished} />
          <Route path="/u/pages/draft" component={PagesDraft} />
          <Route path="/u/comments" component={UComments} />
          <Redirect from="/feed/history" to="/feed/history/pages" />
          <Redirect from="/u/pages" to="/u/pages/published" />
        </Switch>
      </BrowserRouter>
    </Provider>,
    container
  );
}
