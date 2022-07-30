import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectSection, setSection } from "./sideNavSlice";

const SideNav = () => {
  (document.querySelector("body") as HTMLBodyElement).style.marginLeft =
    "24rem";
  const dispatch = useDispatch();
  const section = useSelector(selectSection);

  return (
    <div className="sidenav sidenav--open" id="js--sidenav">
      <div className="sidenav__section">
        <Link
          to="/home"
          className={
            section === "home"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("home"))}
        >
          <i className="fa fa-home" />
          Home
        </Link>
        <Link
          to="/feed/subscriptions"
          className={
            section === "subscriptions"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("subscriptions"))}
        >
          <i className="fa fa-file-text" />
          Subscriptions
        </Link>
        <Link
          to="/feed/history/pages"
          className={
            section === "history/pages" || section === "history/comments"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("history/pages"))}
        >
          <i className="fa fa-history" />
          History
        </Link>
        <Link
          to="/feed/read-later"
          className={
            section === "read-later"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("read-later"))}
        >
          <i className="fa fa-bookmark" />
          Read Later
        </Link>
        <Link
          to="/feed/liked-pages"
          className={
            section === "liked-pages"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("liked-pages"))}
        >
          <i className="fa fa-thumbs-up" />
          Liked Pages
        </Link>
        <Link
          to="/u/collections"
          className={
            section === "collections"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("collections"))}
        >
          <i className="fa fa-th-large" />
          Collections
        </Link>
      </div>
      <div className="sidenav__section">
        <Link
          to="/u/dashboard"
          className={
            section === "dashboard"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("dashboard"))}
        >
          <i className="fa fa-dashboard" />
          Dashboard
        </Link>
        <Link
          to="/u/analytics"
          className={
            section === "analytics"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("analytics"))}
        >
          <i className="fa fa-line-chart" />
          Analytics
        </Link>
        <Link
          to="/u/monetization"
          className={
            section === "monetization"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("monetization"))}
        >
          <i className="fa fa-dollar" />
          Monetization
        </Link>
        <Link
          to="/u/pages"
          className={
            section === "pages/published" ||
            section === "pages/draft" ||
            section === "pages/trash"
              ? "sidenav__link sidenav__link--active"
              : "sidenav__link"
          }
          onClick={() => dispatch(setSection("pages/published"))}
        >
          <i className="fa fa-envelope-open" />
          Your Pages
        </Link>
      </div>
      <div className="sidenav__footer">
        <ul className="">
          <li className="">
            <a href="javascript:void(0);">Support</a>
          </li>
          <li className="">
            <a href="javascript:void(0);">Contact us</a>
          </li>
          <li className="">
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li className="">
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
        <span>&copy; 2022 Pagser.com</span>
      </div>
    </div>
  );
};

export default SideNav;
