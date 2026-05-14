import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/u/pages/published"
        className={
          pathname === "/u/pages/published"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
      >
        <i className="fa fa-check-square margin-right-3px" /> Published Pages
      </Link>
      <Link
        to="/u/pages/draft"
        className={
          pathname === "/u/pages/draft"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
      >
        <i className="fa fa-file margin-right-3px" /> Draft Pages
      </Link>
    </div>
  );
};

export default Header;
