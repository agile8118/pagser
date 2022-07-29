import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Authentication from "./views/authentication";

import Actions from "./views/show-page/Actions";
import Photo from "./views/show-page/Photo";
import AttachFiles from "./views/show-page/AttachFiles";
import Author from "./views/show-page/Author";
import Ratings from "./views/show-page/Ratings";
import Comments from "./views/show-page/Comments";
import ShowPrivate from "./views/show-page/Private";

import { store as showPageStore } from "./views/show-page/store";

const container = document.querySelector(".react-container") as HTMLElement;
const containerName = container ? container.getAttribute("name") : null;

if (containerName === "authentication") {
  const authenticationRoot = ReactDOM.createRoot(container);
  authenticationRoot.render(
    <React.StrictMode>
      <Authentication />
    </React.StrictMode>
  );
}

if (containerName === "show-public") {
  const actionsRoot = ReactDOM.createRoot(
    document.querySelector("#actions") as HTMLElement
  );
  actionsRoot.render(
    <Provider store={showPageStore}>
      <Actions type="public" />
    </Provider>
  );

  const photoRoot = ReactDOM.createRoot(
    document.querySelector("#photo") as HTMLElement
  );
  photoRoot.render(
    <Provider store={showPageStore}>
      <Photo />
    </Provider>
  );

  const attachFilesRoot = ReactDOM.createRoot(
    document.querySelector("#attach-files") as HTMLElement
  );
  attachFilesRoot.render(
    <Provider store={showPageStore}>
      <AttachFiles />
    </Provider>
  );

  if (document.querySelector("#author")) {
    const authorRoot = ReactDOM.createRoot(
      document.querySelector("#author") as HTMLElement
    );

    authorRoot.render(
      <Provider store={showPageStore}>
        <Author />
      </Provider>
    );
  }

  if (document.querySelector("#rating")) {
    const ratingRoot = ReactDOM.createRoot(
      document.querySelector("#rating") as HTMLElement
    );

    ratingRoot.render(
      <Provider store={showPageStore}>
        <Ratings />
      </Provider>
    );
  }

  if (document.querySelector("#comments")) {
    const commentsRoot = ReactDOM.createRoot(
      document.querySelector("#comments") as HTMLElement
    );

    commentsRoot.render(
      <Provider store={showPageStore}>
        <Comments />
      </Provider>
    );
  }
}

if (containerName === "show-private") {
  const showPrivateRoot = ReactDOM.createRoot(container);
  showPrivateRoot.render(
    <Provider store={showPageStore}>
      <ShowPrivate />
    </Provider>
  );
}
