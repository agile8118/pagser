import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSection, selectSection } from "../side-nav/sideNavSlice";

const Header = () => {
  const dispatch = useDispatch();
  const section = useSelector(selectSection);

  return (
    <div className="lined-btns margin-bottom-2 margin-top-1">
      <Link
        to="/feed/history/pages"
        className={
          section === "history/pages"
            ? "btn-lined btn-lined--active"
            : "btn-lined"
        }
        onClick={() => dispatch(setSection("history/pages"))}
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
        onClick={() => dispatch(setSection("history/comments"))}
      >
        <i className="fa fa-commenting margin-right-3px" /> Comments
      </Link>
    </div>
  );
};

export default Header;
