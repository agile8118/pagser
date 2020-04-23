import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeSection } from "../../redux/main/actions";

class SideNav extends Component {
  render() {
    document.querySelector("body").style.marginLeft = "24rem";
    return (
      <div className="sidenav sidenav--open" id="js--sidenav">
        <div className="sidenav__section">
          <Link
            to="/home"
            className={
              this.props.section === "home"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("home")}
          >
            <i className="fa fa-home" />Home
          </Link>
          <Link
            to="/feed/subscriptions"
            className={
              this.props.section === "subscriptions"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("subscriptions")}
          >
            <i className="fa fa-file-text" />Subscriptions
          </Link>
          <Link
            to="/feed/history"
            className={
              this.props.section === "history"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("history")}
          >
            <i className="fa fa-history" />History
          </Link>
          <Link
            to="/feed/read-later"
            className={
              this.props.section === "read-later"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("read-later")}
          >
            <i className="fa fa-bookmark" />Read Later
          </Link>
          <Link
            to="/feed/liked-pages"
            className={
              this.props.section === "liked-pages"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("liked-pages")}
          >
            <i className="fa fa-thumbs-up" />Liked Pages
          </Link>
          <Link
            to="/u/collections"
            className={
              this.props.section === "collections"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("collections")}
          >
            <i className="fa fa-th-large" />Collections
          </Link>
        </div>
        <div className="sidenav__section">
          <Link
            to="/u/analytics"
            className={
              this.props.section === "analytics"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("analytics")}
          >
            <i className="fa fa-line-chart" />Analytics
          </Link>
          <Link
            to="/u/pages"
            className={
              this.props.section === "pages"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("pages")}
          >
            <i className="fa fa-envelope-open" />Your Pages
          </Link>
          <Link
            to="/u/comments"
            className={
              this.props.section === "comments"
                ? "sidenav__link sidenav__link--active"
                : "sidenav__link"
            }
            onClick={() => this.props.changeSection("comments")}
          >
            <i className="fa fa-comments" />Comments
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
          <span>&copy; 2020 Pagher, Inc.</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.section.section,
  };
};

export default connect(
  mapStateToProps,
  { changeSection }
)(SideNav);
