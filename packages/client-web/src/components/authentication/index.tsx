import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Login from "./Login";

function Authentication(props) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} /> */}
      </Routes>
    </Router>
  );
}

export default Authentication;
