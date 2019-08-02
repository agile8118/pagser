import React, { Component } from "react";
import axios from "axios";
import { getParameterByName } from "../../lib/util";
import Alert from "../partials/Alert";
import redirectToAdmin from "./redirectToAdmin";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false
    };

    this.alert = new Alert();
  }

  openModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "block";
  }

  closeModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "none";
  }

  // Call server to send an email to reset the password
  onForgotPasswordSubmit() {
    const email = document.querySelector("#forgotpassword-email").children[0]
      .value;
    axios
      .post(`/api/forgotpassword`, {
        email
      })
      .then(response => {
        this.closeModal();
        this.alert.changeMessage(
          `Instructions on how to reset your password were sent to ${
            this.state.email
          }`,
          "success"
        );
      })
      .catch(error => {
        this.closeModal();
        this.alert.changeMessage(
          `No one with email ${this.state.email} founded.`,
          "error"
        );
      });
  }

  onFormSubmit() {
    this.setState({ loading: true });
    axios
      .post(`/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        window.location = `/admin`;
      })
      .catch(error => {
        this.setState({ loading: false });
        this.alert.changeMessage(
          `Incorrect password or email address.`,
          "error"
        );
      });
  }

  renderRedirectError() {
    const redirectedFrom = getParameterByName(
      "redirected",
      window.location.href
    );
    switch (redirectedFrom) {
      case "new-page":
        return (
          <div className="message-box message-box--normall message-box--redirect-to-login">
            Please login in order to be able to create a new page.
          </div>
        );
        break;
      case "admin":
        return (
          <div className="message-box message-box--normall message-box--redirect-to-login">
            Please login to access the admin area.
          </div>
        );
        break;
      case "access":
        return (
          <div className="message-box message-box--normall message-box--redirect-to-login">
            Please login to access that page.
          </div>
        );
        break;
      default:
        return <div />;
    }
  }

  renderButtons() {
    if (this.state.loading === false) {
      return (
        <div>
          <div className="form__group">
            <button action="submit" className="btn-round">
              Sign In
            </button>
          </div>
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.openModal.apply(this);
            }}
            className="btn-link"
          >
            Forgot your password?
          </a>
        </div>
      );
    } else {
      return (
        <div className="margin-top-3">
          <div className="center-content">
            <div className="lds-css ng-scope">
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    document.querySelector("#js--login-btn").innerHTML = "";
    document.querySelector("title").innerHTML = "Login | Pagher";
    return (
      <div>
        {/* Modal forgot password */}
        <div className="mdl">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.closeModal.apply(this);
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Reset your password</h3>
            </div>

            <div className="mdl__body">
              <p>
                Put your email address here and we will send you instructions.
              </p>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  this.onForgotPasswordSubmit.apply(this);
                }}
              >
                <div className="form__group" id="forgotpassword-email">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form__input"
                    onChange={event => {
                      this.setState({ email: event.target.value });
                    }}
                    value={this.state.email}
                    required
                  />
                </div>
                <div className="right-content">
                  <button type="submit" className="btn-round">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End modal forgot password */}

        <div className="auth">
          <div className="auth__options">
            <div
              className="auth__options--register"
              onClick={() => {
                this.props.history.push("/register");
              }}
            >
              Register
            </div>
            <div className="auth__options--login--active">login</div>
          </div>

          <div className="auth__content">
            <h3 className="heading-tertiary">Log into your account</h3>
            <p className="small-copy">
              We are happy to see you loging in! Login to manage all of your
              pages. You can reset your password if you {"don't "} remember it.
            </p>
            {this.renderRedirectError()}
            <Alert />
            <form
              method="post"
              onSubmit={event => {
                event.preventDefault();
                this.onFormSubmit.apply(this);
              }}
            >
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                  placeholder="Email Address"
                  value={this.state.email}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                  placeholder="Your Password"
                  value={this.state.password}
                />
              </div>

              {this.renderButtons.apply(this)}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
