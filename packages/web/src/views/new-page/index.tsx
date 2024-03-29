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
import AttachFiles from "./AttachFiles";
import FinalStep from "./FinalStep";
import Message from "./Message";

function NewPage() {
  return (
    <Router>
      <Routes>
        <Route path="/new-page/initial-step" element={<InitialStep />} />
        <Route path="/new-page/page-contents" element={<PageContents />} />
        <Route path="/new-page/page-thumbnail" element={<PageThumbnail />} />
        <Route path="/new-page/attach-files" element={<AttachFiles />} />
        <Route path="/new-page/attach-files" element={<AttachFiles />} />
        <Route path="/new-page/final-step" element={<FinalStep />} />
        <Route path="/new-page/message" element={<Message />} />

        <Route
          path="/new-page"
          element={<Navigate to="/new-page/initial-step" replace />}
        />
      </Routes>
    </Router>
  );
}

export default NewPage;
