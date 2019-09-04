import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../lib/keys";

class Nav extends Component {
  state = { section: window.location.pathname.split("/")[2] };

  openSideBar() {
    document.querySelector(".sidebar").classList.add("sidebar--open");
    document.querySelector(".sidebar").classList.remove("sidebar--close");
  }

  closeSideBar() {
    document.querySelector(".sidebar").classList.add("sidebar--close");
    document.querySelector(".sidebar").classList.remove("sidebar--open");
  }

  render() {
    let homeClass = `side-nav__item ${
      this.state.section === "home" ? "side-nav__item--active" : ""
    }`;
    let settingClass = `side-nav__item ${
      this.state.section === "settings" ? "side-nav__item--active" : ""
    }`;
    let pagesClass = `side-nav__item ${
      this.state.section === "pages" ? "side-nav__item--active" : ""
    }`;
    let profileClass = `side-nav__item ${
      this.state.section === "profile" ? "side-nav__item--active" : ""
    }`;
    return (
      <div>
        <div className="row">
          <div className="sidebar__opener">
            <button
              onClick={() => {
                this.openSideBar();
              }}
            >
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </button>
          </div>
        </div>
        <nav className="sidebar">
          <button
            onClick={() => {
              this.closeSideBar();
            }}
            className="sidebar__closer a-6"
          >
            &times;
          </button>

          <ul className="side-nav">
            <li className="side-nav__logo">
              <span>Pagher</span>
            </li>
            <li className={homeClass}>
              <Link
                to="/admin/home"
                className="side-nav__link"
                onClick={() => {
                  this.closeSideBar();
                  this.setState({ section: "home" });
                }}
              >
                <i className="fa fa-home" />Home
              </Link>
            </li>
            <li className={settingClass}>
              <Link
                to="/admin/settings"
                className="side-nav__link"
                onClick={() => {
                  this.closeSideBar();
                  this.setState({ section: "settings" });
                }}
              >
                <i className="fa fa-cogs" />Setting
              </Link>
            </li>
            <li className={pagesClass}>
              <Link
                to="/admin/pages/published"
                className="side-nav__link"
                onClick={() => {
                  this.closeSideBar();
                  this.setState({ section: "pages" });
                }}
              >
                <i className="fa fa-file-text" />Pages
              </Link>
            </li>
            <li className={profileClass}>
              <Link
                to="/admin/profile"
                className="side-nav__link"
                onClick={() => {
                  this.closeSideBar();
                  this.setState({ section: "profile" });
                }}
              >
                <i className="fa fa-user" />Profile
              </Link>
            </li>
            <li className="side-nav__item">
              <a
                href="#"
                className="side-nav__link"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location = `/`;
                }}
              >
                <i className="fa fa-sign-out" />Logout
              </a>
            </li>
          </ul>

          <div className="side-bottom">
            <a href="/new-page/initial-step" className="btn-action">
              Create a page
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
