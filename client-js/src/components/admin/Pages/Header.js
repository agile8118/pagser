import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const location = window.location.pathname.split("/")[3];
    return (
      <div>
        <div className="center-content">
          <h3 className="heading-tertiary" id="information">
            Pages
          </h3>
        </div>
        <div className="inline-buttons">
          <Link
            to="/admin/pages/published"
            className={`btn-lined  ${
              location === "published" ? "" : "btn-lined-not-active"
            }`}
          >
            <i className="fa fa-check-square margin-right-3px" /> Published
          </Link>
          <Link
            to="/admin/pages/favorited"
            className={`btn-lined  ${
              location === "favorited" ? "" : "btn-lined-not-active"
            }`}
          >
            <i className="fa fa-heart margin-right-3px" /> Favorited
          </Link>
          <Link
            to="/admin/pages/draft"
            className={`btn-lined  ${
              location === "draft" ? "" : "btn-lined-not-active"
            }`}
          >
            <i className="fa fa-file margin-right-3px" /> Draft
          </Link>
          <Link
            to="/admin/pages/trash"
            className={`btn-lined  ${
              location === "trash" ? "" : "btn-lined-not-active"
            }`}
          >
            <i className="fa fa-trash margin-right-3px" /> Trash
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
