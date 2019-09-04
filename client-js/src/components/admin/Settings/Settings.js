import React from "react";
import Email from "./Email";
import Password from "./Password";

const Settings = () => {
  return (
    <div>
      <div className="center-content">
        <h3 className="heading-tertiary" id="information">
          Account and password
        </h3>
      </div>
      <Email />
      <Password />
    </div>
  );
};

export default Settings;
