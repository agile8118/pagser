import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeSection } from "actions";

const Header = ({ section, changeSection }) => {
  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/feed/history/pages"
        className={
          section === "history/pages"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => changeSection("history/pages")}
      >
        <i className="fa fa-file margin-right-3px" /> Reads
      </Link>
      <Link
        to="/feed/history/comments"
        className={
          section === "history/comments"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => changeSection("history/comments")}
      >
        <i className="fa fa-commenting margin-right-3px" /> Comments
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
