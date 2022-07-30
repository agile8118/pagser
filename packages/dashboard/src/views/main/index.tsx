import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import SideNav from "./side-nav/SideNav";

import Home from "./home/Home";
import Dashboard from "./dashboard/Dashboard";
import Analytics from "./analytics/Analytics";
import Monetization from "./monetization/Monetization";
import Subscriptions from "./subscriptions/Subscriptions";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <SideNav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/feed/subscriptions" element={<Subscriptions />} />
          <Route path="/u/dashboard" element={<Dashboard />} />
          <Route path="/u/analytics" element={<Analytics />} />
          <Route path="/u/monetization" element={<Monetization />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default Main;
