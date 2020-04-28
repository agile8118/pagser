import React from "react";
import Email from "./Email";
import Password from "./Password";

const Settings = () => {
  return (
    <div className="row">
      <div className="admin">
        <div className="center-content">
          <h3 className="heading-tertiary" id="information">
            Website and User Settings
          </h3>
        </div>
        <Email />
        <Password />
      </div>
    </div>
  );
};

export default Settings;
