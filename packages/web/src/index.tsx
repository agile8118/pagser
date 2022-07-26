import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Authentication from "./components/authentication";

import Actions from "./components/show-page/Actions";
import Photo from "./components/show-page/Photo";
import { store as showPageStore } from "./components/show-page/store";

// import { store } from "./store/store";

// {/* <Provider store={store}> */}
// {/* </Provider> */}
{
  /* <BrowserRouter basename="/"> */
}
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

  // if (document.querySelector("#author")) {
  //   ReactDOM.render(
  //     <Provider store={showPageStore}>
  //       <Author />
  //     </Provider>,
  //     document.querySelector("#author")
  //   );
  // }
  // if (document.querySelector("#rating")) {
  //   ReactDOM.render(
  //     <Provider store={showPageStore}>
  //       <Rating />
  //     </Provider>,
  //     document.querySelector("#rating")
  //   );
  // }
  // if (document.querySelector("#comments")) {
  //   ReactDOM.render(
  //     <Provider store={showPageStore}>
  //       <Comments />
  //     </Provider>,
  //     document.querySelector("#comments")
  //   );
  // }
  // ReactDOM.render(
  //   <Provider store={showPageStore}>
  //     <Photo />
  //   </Provider>,
  //   document.querySelector("#photo")
  // );
  // ReactDOM.render(
  //   <Provider store={showPageStore}>
  //     <AttachFiles />
  //   </Provider>,
  //   document.querySelector("#attachFiles")
  // );
}
