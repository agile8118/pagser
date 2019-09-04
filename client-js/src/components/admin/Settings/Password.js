import React, { Component } from "react";
import axios from "axios";
import util from "../../../lib/forms";
import { ROOT_URL } from "../../../lib/keys";
import Alert from "../../partials/Alert";
import Loading from "../../partials/loading";

class Password extends Component {
  state = {
    password: "",
    confirmPassword: "",
    alertMessage: null,
    alertType: "success"
  };

  onInputFocusOut(value, fieldName) {
    if (fieldName === "password") {
      if (util.isEmpty(value)) {
        util.inputNone("password");
        util.confirmPasswordReset.apply(this);
        util.disableButton("change-password");
      }
    }

    if (fieldName === "confirmPassword") {
      if (util.isEmpty(value)) {
        util.inputError("confirm-password", "Please confirm your password.");
      }
    }
  }

  onInputChange(value, fieldName) {
    if (fieldName === "password") {
      this.setState({ password: value });
      util.confirmPasswordReset.apply(this);
      util.disableButton("change-password");

      if (!util.isHardPassword(value) && !util.isEmpty(value)) {
        util.inputError(
          "password",
          "Password should contain a capital letter, letters and numbers."
        );
        util.confirmPasswordReset.apply(this);
        util.disableButton("change-password");
      }

      if (!util.len(value, 8, 30) && !util.isEmpty(value)) {
        util.inputError(
          "password",
          "Password should contain 8 to 30 charecters."
        );
        util.confirmPasswordReset.apply(this);
        util.disableButton("change-password");
      }

      if (
        util.len(value, 8, 30) &&
        !util.isEmpty(value) &&
        util.isHardPassword(value, 8, 30)
      ) {
        util.inputOK("password");
        document.querySelector(
          "#confirm-password"
        ).children[0].disabled = false;
        document
          .querySelector("#confirm-password")
          .children[0].classList.remove("form__input--disabled");
      }
    }

    if (fieldName === "confirmPassword") {
      this.setState({ confirmPassword: value });

      if (this.state.password !== value) {
        util.inputError("confirm-password", "Passwords do not match up.");
        util.disableButton("change-password");
      }

      if (
        !util.isEmpty(this.state.confirmPassword) &&
        this.state.password === value
      ) {
        util.inputOK("confirm-password");
        util.enableButton("change-password");
      }
    }
  }

  onFormSubmit() {
    console.log("Submitted");
    document.querySelector("#dialogModal").classList.remove("display-none");

    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(
        `/api/account/password`,
        {
          password: this.state.password
        },
        config
      )
      .then(response => {
        document.querySelector("#dialogModal").classList.add("display-none");
        util.confirmPasswordReset.apply(this);
        util.inputNone("password");
        this.setState({
          password: "",
          confirmPassword: "",
          alertMessage: "Password updated successfully.",
          alertType: "success"
        });
        util.disableButton("change-password");
      })
      .catch(error => {
        document.querySelector("#dialogModal").classList.add("display-none");
        console.log("err");
      });
  }

  renderLoadingDialog() {
    return (
      <div
        className="cupertino-modal-container cupertino-modal-container--light display-none"
        id="dialogModal"
      >
        <div className="cupertino-modal cupertino-modal--loading">
          <div className="cupertino-modal__content">
            <h3>Updating your password...</h3>
          </div>
          <div className="center-content">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLoadingDialog()}
        <form
          method="post"
          onSubmit={event => {
            event.preventDefault();
            this.onFormSubmit.apply(this);
          }}
        >
          <Alert
            message={this.state.alertMessage}
            onClose={() => {
              this.setState({ alertMessage: null });
            }}
            type={this.state.alertType}
            additionalClasses="margin-top-4"
          />{" "}
          <label className="form__label margin-top-2">Change password</label>
          <div className="=" id="password">
            <input
              type="password"
              className="form__input"
              onBlur={event => {
                this.onInputFocusOut.apply(this, [
                  event.target.value,
                  "password"
                ]);
              }}
              onChange={event => {
                this.onInputChange.apply(this, [
                  event.target.value,
                  "password"
                ]);
              }}
              placeholder="Password"
              value={this.state.password}
            />
            <div className="form__input--message">
              <span />
            </div>
          </div>
          <div className="margin-top-1" id="confirm-password">
            <input
              type="password"
              className="form__input form__input--disabled"
              disabled
              onBlur={event => {
                this.onInputFocusOut.apply(this, [
                  event.target.value,
                  "confirmPassword"
                ]);
              }}
              onChange={event => {
                this.onInputChange.apply(this, [
                  event.target.value,
                  "confirmPassword"
                ]);
              }}
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
            />
            <div className="form__input--message">
              <span />
            </div>
          </div>
          <button
            className="btn-round btn-round-normal float-right margin-top-1 btn-disabled"
            id="change-password"
            disabled
          >
            Change Password
          </button>
        </form>
      </div>
    );
  }
}

export default Password;
