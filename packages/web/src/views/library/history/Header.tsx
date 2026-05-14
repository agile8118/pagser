import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/feed/history/pages"
        className={
          pathname === "/feed/history/pages"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
      >
        <i className="fa fa-file margin-right-3px" /> Reads
      </Link>
      <Link
        to="/feed/history/comments"
        className={
          pathname === "/feed/history/comments"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
      >
        <i className="fa fa-commenting margin-right-3px" /> Comments
      </Link>
    </div>
  );
};

export default Header;
