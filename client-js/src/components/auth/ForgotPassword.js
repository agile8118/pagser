import React, { Component } from "react";
import axios from "axios";
import util from "../../lib/forms";
import { getParameterByName } from "../../lib/util";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      status: "showform",
      message: "",
      btnDisabled: true,
    };
  }

  checkAll() {
    if (
      util.isHardPassword(this.state.password) &&
      !util.isEmpty(this.state.password) &&
      this.state.password === this.state.confirmPassword
    ) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  onInputFocusOut(value, fieldName) {
    if (fieldName === "password") {
      if (util.isEmpty(value)) {
        util.inputError("password", "Please choose a password.");
        util.confirmPasswordReset.apply(this);
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
      this.setState({ password: value }, () => {
        this.checkAll.apply(this);
      });

      util.confirmPasswordReset.apply(this);

      if (!util.isHardPassword(value) && !util.isEmpty(value)) {
        util.inputError(
          "password",
          "Password should contain a capital letter, letters and numbers."
        );
        util.confirmPasswordReset.apply(this);
      }

      if (!util.len(value, 8, 30) && !util.isEmpty(value)) {
        util.inputError(
          "password",
          "Password should contain 8 to 30 charecters."
        );
        util.confirmPasswordReset.apply(this);
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
      this.setState({ confirmPassword: value }, () => {
        this.checkAll.apply(this);
      });

      if (this.state.password !== value) {
        util.inputError("confirm-password", "Passwords do not match up.");
      }

      if (
        !util.isEmpty(this.state.confirmPassword) &&
        this.state.password === value
      ) {
        util.inputOK("confirm-password");
      }
    }
  }

  onFormSubmit() {
    axios
      .post(`/api/resetpassword`, {
        userId: getParameterByName("i"),
        token: { code: getParameterByName("t") },
        password: this.state.password,
      })
      .then((response) => {
        this.setState({ status: "success" });
      })
      .catch((error) => {
        if (error.response.data.error === "invalid link") {
          this.setState({
            status: "error",
            message:
              "The link you've clicked on is not valid, make sure that you open the exact link we've sent to your email.",
          });
        }
        if (error.response.data.error === "link expired") {
          this.setState({
            status: "error",
            message:
              "The link you've clicked on has expired. Please request for a password reset once again.",
          });
        }
      });
  }
  render() {
    if (this.state.status === "showform") {
      document.querySelector("title").innerHTML = `Reset Password | Pagher`;
      return (
        <div className="auth">
          <h3 className="heading-tertiary">Create a new password</h3>
          <p className="small-copy">
            After resetting your account, you will prompted to login with your
            new password.
          </p>
          <form
            method="post"
            onSubmit={(event) => {
              event.preventDefault();
              this.onFormSubmit.apply(this);
            }}
          >
            <div className="form__group" id="password">
              <input
                type="password"
                className="form__input"
                onBlur={(event) => {
                  this.onInputFocusOut.apply(this, [
                    event.target.value,
                    "password",
                  ]);
                }}
                onChange={(event) => {
                  this.onInputChange.apply(this, [
                    event.target.value,
                    "password",
                  ]);
                }}
                placeholder="Password"
                value={this.state.password}
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            <div className="form__group" id="confirm-password">
              <input
                type="password"
                className="form__input form__input--disabled"
                disabled
                onBlur={(event) => {
                  this.onInputFocusOut.apply(this, [
                    event.target.value,
                    "confirmPassword",
                  ]);
                }}
                onChange={(event) => {
                  this.onInputChange.apply(this, [
                    event.target.value,
                    "confirmPassword",
                  ]);
                }}
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            <div className="form__group">
              <button
                action="submit"
                className="btn btn-blue btn-round"
                disabled={this.state.btnDisabled}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      );
    }
    if (this.state.status === "error") {
      return (
        <div className="middle-box middle-box--absolute middle-box--error">
          {this.state.message}
        </div>
      );
    }
    if (this.state.status === "success") {
      return (
        <div className="middle-box middle-box--absolute middle-box--success">
          You have successfully reset your password. Now you can go ahead and
          login to your account with your new password.
        </div>
      );
    }
  }
}

export default ForgotPassword;
