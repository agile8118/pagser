import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeSection } from "../../../redux/main/actions";

const Header = ({ section, changeSection }) => {
  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/u/pages/published"
        className={
          section === "pages/published"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => changeSection("pages/published")}
      >
        <i className="fa fa-check-square margin-right-3px" /> Published Pages
      </Link>
      <Link
        to="/u/pages/draft"
        className={
          section === "pages/draft"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => changeSection("pages/draft")}
      >
        <i className="fa fa-file margin-right-3px" /> Draft Pages
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
