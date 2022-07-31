import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSection, selectSection } from "../side-nav/sideNavSlice";

const Header = () => {
  const dispatch = useDispatch<any>();
  const section = useSelector(selectSection);

  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/u/pages/published"
        className={
          section === "pages/published"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => dispatch(setSection("pages/published"))}
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
        onClick={() => dispatch(setSection("pages/draft"))}
      >
        <i className="fa fa-file margin-right-3px" /> Draft Pages
      </Link>
    </div>
  );
};

export default Header;
