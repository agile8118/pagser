import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeSection } from "actions";

const Header = (props) => {
  const username = window.location.pathname.split("/")[2];

  return (
    <div className="lined-btns-2">
      <Link
        to={`/users/${username}/`}
        className={`btn-lined ${
          props.section === "home" ? "btn-lined--active" : ""
        }`}
        onClick={() => props.changeSection("home")}
      >
        Home
      </Link>
      <Link
        to={`/users/${username}/pages`}
        className={`btn-lined ${
          props.section === "pages" ? "btn-lined--active" : ""
        }`}
        onClick={() => props.changeSection("pages")}
      >
        Pages
      </Link>
      <Link
        to={`/users/${username}/collections`}
        className={`btn-lined ${
          props.section === "collections" ? "btn-lined--active" : ""
        }`}
        onClick={() => props.changeSection("collections")}
      >
        Collections
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    section: state.section,
  };
};

export default connect(
  mapStateToProps,
  { changeSection }
)(Header);
