import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// import Authentication from "./views/authentication";
const Authentication = React.lazy(
  () =>
    import("./views/authentication" /* webpackChunkName: "authentication" */)
);

const Library = React.lazy(
  () => import("./views/library" /* webpackChunkName: "library" */)
);

const NewPage = React.lazy(
  () => import("./views/new-page" /* webpackChunkName: "new-page" */)
);

const Profile = React.lazy(
  () => import("./views/profile" /* webpackChunkName: "profile" */)
);

const PublicProfile = React.lazy(
  () =>
    import("./views/public-profile" /* webpackChunkName: "public-profile" */)
);

// // import Actions from "./views/show-page/Actions";
// // import Photo from "./views/show-page/Photo";
// // import AttachFiles from "./views/show-page/AttachFiles";
// // import Author from "./views/show-page/Author";
// // import Ratings from "./views/show-page/Ratings";
// // import Comments from "./views/show-page/Comments";
// // import ShowPrivate from "./views/show-page/Private";

import { store as showPageStore } from "./views/show-page/store";

const container = document.querySelector(".react-container") as HTMLElement;
const containerName = container ? container.getAttribute("name") : null;

if (containerName === "authentication") {
  (async () => {
    // const Authentication = (await import("./views/authentication" /* webpackChunkName: "authentication" */)).default;
    const authenticationRoot = ReactDOM.createRoot(container);
    authenticationRoot.render(
      <React.Suspense fallback={<div />}>
        <React.StrictMode>
          <Authentication />
        </React.StrictMode>
      </React.Suspense>
    );
  })();
}

// ---------- SHOW PUBLIC  ----------- //
if (containerName === "show-public") {
  (async () => {
    const Actions = (
      await import(
        "./views/show-page/Actions" /* webpackChunkName: "actions" */
      )
    ).default;
    const Photo = (
      await import("./views/show-page/Photo" /* webpackChunkName: "photo" */)
    ).default;
    const AttachFiles = (
      await import(
        "./views/show-page/AttachFiles" /* webpackChunkName: "attach-files" */
      )
    ).default;
    const Author = (
      await import("./views/show-page/Author" /* webpackChunkName: "author" */)
    ).default;
    const Ratings = (
      await import(
        "./views/show-page/Ratings" /* webpackChunkName: "ratings" */
      )
    ).default;
    const Comments = (
      await import(
        "./views/show-page/Comments" /* webpackChunkName: "comments" */
      )
    ).default;

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
  })();
}
// ---------- END SHOW PUBLIC  ----------- //

if (containerName === "show-private") {
  (async () => {
    const ShowPrivate = (
      await import(
        "./views/show-page/Private" /* webpackChunkName: "show-private" */
      )
    ).default;

    const showPrivateRoot = ReactDOM.createRoot(container);
    showPrivateRoot.render(
      <Provider store={showPageStore}>
        <ShowPrivate />
      </Provider>
    );
  })();
}

if (containerName === "main") {
  (async () => {
    // const Authentication = (await import("./views/authentication" /* webpackChunkName: "authentication" */)).default;
    const authenticationRoot = ReactDOM.createRoot(container);
    authenticationRoot.render(
      <React.Suspense fallback={<div />}>
        <React.StrictMode>
          <Library />
        </React.StrictMode>
      </React.Suspense>
    );
  })();
}

if (containerName === "new-page") {
  (async () => {
    // const Authentication = (await import("./views/authentication" /* webpackChunkName: "authentication" */)).default;
    const authenticationRoot = ReactDOM.createRoot(container);
    authenticationRoot.render(
      <React.Suspense fallback={<div />}>
        {/* <React.StrictMode> */}
        <NewPage />
        {/* </React.StrictMode> */}
      </React.Suspense>
    );
  })();
}

if (containerName === "profile") {
  (async () => {
    // const Authentication = (await import("./views/authentication" /* webpackChunkName: "authentication" */)).default;
    const authenticationRoot = ReactDOM.createRoot(container);
    authenticationRoot.render(
      <React.Suspense fallback={<div />}>
        <React.StrictMode>
          <Profile />
        </React.StrictMode>
      </React.Suspense>
    );
  })();
}

if (containerName === "public-profile") {
  (async () => {
    // const Authentication = (await import("./views/authentication" /* webpackChunkName: "authentication" */)).default;
    const authenticationRoot = ReactDOM.createRoot(container);
    authenticationRoot.render(
      <React.Suspense fallback={<div />}>
        <React.StrictMode>
          <PublicProfile />
        </React.StrictMode>
      </React.Suspense>
    );
  })();
}
