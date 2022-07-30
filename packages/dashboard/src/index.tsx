import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import NewPage from "./views/new-page";
import Main from "./views/main";
// import { store } from "./store/store";

// {/* <Provider store={store}> */}
// {/* </Provider> */}
{
  /* <BrowserRouter basename="/"> */
}
const container = document.querySelector(".react-container") as HTMLElement;
const containerName = container ? container.getAttribute("name") : null;
let root = ReactDOM.createRoot(container);

if (containerName === "main") {
  // root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}

if (containerName === "new-page") {
  // root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <NewPage />
    </React.StrictMode>
  );
}
