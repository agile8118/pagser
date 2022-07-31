import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../main/store";

import Header from "./Header";
import Home from "./Home";
import Pages from "./Pages";
import Collections from "./Collections";

function PublicProfile() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/users/:username/pages" element={<Pages />} />
          <Route
            path="/users/:username/collections"
            element={<Collections />}
          />
          <Route path="/users/:username" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default PublicProfile;
