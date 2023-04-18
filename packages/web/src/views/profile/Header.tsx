import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [section, setSection] = useState(
    window.location.pathname.split("/")[1]
  );

  let settingClass = `btn-lined ${
    section === "settings" ? "btn-lined--active" : ""
  }`;

  let profileClass = `btn-lined ${
    section === "profile" ? "btn-lined--active" : ""
  }`;
  return (
    <div className="admin__header">
      <div className="row">
        <div className="lined-btns lined-btns-big margin-bottom-2 margin-top-1">
          <Link
            to="/profile"
            className={profileClass}
            onClick={() => {
              setSection("profile");
            }}
          >
            <i className="fa fa-user margin-right-3px" /> Profile
          </Link>
          <Link
            to="/settings"
            className={settingClass}
            onClick={() => {
              setSection("settings");
            }}
          >
            <i className="fa fa-cogs margin-right-3px" /> Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
