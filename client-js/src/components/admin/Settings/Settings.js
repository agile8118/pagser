import React, { Component } from "react";
import axios from "axios";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import Email from "./Email";
import Password from "./Password";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: ""
    };
  }

  render() {
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
  }
}

export default Settings;
