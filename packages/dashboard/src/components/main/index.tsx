import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import SideNav from "./features/sideNav/SideNav";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <SideNav />
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

export default Main;
