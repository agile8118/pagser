import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = { section: window.location.pathname.split("/")[1] };

  render() {
    let settingClass = `btn-lined ${
      this.state.section === "settings" ? "btn-lined--active" : ""
    }`;

    let profileClass = `btn-lined ${
      this.state.section === "profile" ? "btn-lined--active" : ""
    }`;
    return (
      <div className="admin__header">
        <div className="row">
          <div className="lined-btns lined-btns-big margin-bottom-2 margin-top-1">
            <Link
              to="/profile"
              className={profileClass}
              onClick={() => {
                this.setState({ section: "profile" });
              }}
            >
              <i className="fa fa-user margin-right-3px" /> Profile
            </Link>
            <Link
              to="/settings"
              className={settingClass}
              onClick={() => {
                this.setState({ section: "settings" });
              }}
            >
              <i className="fa fa-cogs margin-right-3px" /> Settings
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
