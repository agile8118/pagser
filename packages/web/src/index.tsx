import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Authentication from "./components/authentication";

import Actions from "./components/show-page/Actions";
import Photo from "./components/show-page/Photo";
import AttachFiles from "./components/show-page/AttachFiles";
import Author from "./components/show-page/Author";
import Ratings from "./components/show-page/Ratings";

import { store as showPageStore } from "./components/show-page/store";

const container = document.querySelector(".react-container") as HTMLElement;
const containerName = container ? container.getAttribute("name") : null;
let root;

if (containerName === "authentication") {
  root = ReactDOM.createRoot(container);

  root.render(
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
      document.querySelector("#author") as HTMLElement
    );

    ratingRoot.render(
      <Provider store={showPageStore}>
        <Ratings />
      </Provider>
    );
  }

  // if (document.querySelector("#comments")) {
  //   ReactDOM.render(
  //     <Provider store={showPageStore}>
  //       <Comments />
  //     </Provider>,
  //     document.querySelector("#comments")
  //   );
  // }
}
