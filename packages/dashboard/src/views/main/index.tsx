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
import HistoryPages from "./history/Pages";
import HistoryComments from "./history/Comments";
import ReadLater from "./read-later/ReadLater";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <SideNav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/feed/subscriptions" element={<Subscriptions />} />
          <Route path="/feed/history/pages" element={<HistoryPages />} />
          <Route path="/feed/history/comments" element={<HistoryComments />} />
          <Route path="/feed/read-later" element={<ReadLater />} />

          <Route path="/u/dashboard" element={<Dashboard />} />
          <Route path="/u/analytics" element={<Analytics />} />
          <Route path="/u/monetization" element={<Monetization />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default Main;
