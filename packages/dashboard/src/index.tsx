import React from "react";
import ReactDOM from "react-dom/client";

import NewPage from "./views/new-page";
import Main from "./views/main";
import Profile from "./views/profile";
import PublicProfile from "./views/public-profile";

const container = document.querySelector(".react-container") as HTMLElement;
const containerName = container ? container.getAttribute("name") : null;
let root = ReactDOM.createRoot(container);

if (containerName === "main") {
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}

if (containerName === "new-page") {
  root.render(
    <React.StrictMode>
      <NewPage />
    </React.StrictMode>
  );
}

if (containerName === "profile") {
  root.render(
    <React.StrictMode>
      <Profile />
    </React.StrictMode>
  );
}

if (containerName === "public-profile") {
  root.render(
    <React.StrictMode>
      <PublicProfile />
    </React.StrictMode>
  );
}
