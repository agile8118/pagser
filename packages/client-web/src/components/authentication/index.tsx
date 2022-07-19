import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

function Authentication(props) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} /> */}
      </Routes>
    </Router>
  );
}

export default Authentication;
