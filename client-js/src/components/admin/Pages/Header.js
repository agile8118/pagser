import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const location = window.location.pathname.split("/")[3];
  return (
    <div>
      <div className="center-content">
        <h3 className="heading-tertiary" id="information">
          Pages
        </h3>
      </div>
      <div className="a-12">
        <Link
          to="/admin/pages/published"
          className={`btn-lined  ${
            location === "published" ? "btn-lined-active" : ""
          }`}
        >
          <i className="fa fa-check-square margin-right-3px" /> Published
        </Link>
        <Link
          to="/admin/pages/favorited"
          className={`btn-lined  ${
            location === "favorited" ? "btn-lined-active" : ""
          }`}
        >
          <i className="fa fa-heart margin-right-3px" /> Favorited
        </Link>
        <Link
          to="/admin/pages/draft"
          className={`btn-lined  ${
            location === "draft" ? "btn-lined-active" : ""
          }`}
        >
          <i className="fa fa-file margin-right-3px" /> Draft
        </Link>
        <Link
          to="/admin/pages/trash"
          className={`btn-lined  ${
            location === "trash" ? "btn-lined-active" : ""
          }`}
        >
          <i className="fa fa-trash margin-right-3px" /> Trash
        </Link>
      </div>
    </div>
  );
};

export default Header;
