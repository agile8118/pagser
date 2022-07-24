import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import InitialStep from "./InitialStep";
import PageContents from "./PageContents";
import PageThumbnail from "./PageThumbnail";
// import PageNewAttachFiles from "./components/new-page/AttachFiles";
// import FinalStep from "./components/new-page/FinalStep";
// import Message from "./components/new-page/Message";

function NewPage() {
  return (
    <Router>
      <Routes>
        <Route path="/new-page/initial-step" element={<InitialStep />} />
        <Route path="/new-page/page-contents" element={<PageContents />} />
        <Route path="/new-page/page-thumbnail" element={<PageThumbnail />} />

        <Route
          path="/new-page"
          element={<Navigate to="/new-page/initial-step" replace />}
        />
      </Routes>
    </Router>
  );
}

// <Route path="/new-page/page-contents" element={<PageContents />} />
// <Route path="/new-page/page-thumbnail" element={<PageThumbnail />} />
//{" "}
{
  /* <Route path="/new-page/attach-files" element={<PageNewAttachFiles />} /> */
}
// <Route path="/new-page/final-step" element={<FinalStep />} />
// <Route path="/new-page/message" element={<Message />} />
export default NewPage;
