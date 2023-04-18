import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Info from "./Info";
import Settings from "./settings/Settings";
import Header from "./Header";

function Profile() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profile" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default Profile;
