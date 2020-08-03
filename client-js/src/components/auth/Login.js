import React, { Component } from "react";
import axios from "axios";
import { getParameterByName } from "../../lib/util";
import Alert from "../partials/Alert";
import { Modal } from "../partials/Modals";
import Loading from "../partials/Loading.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
    alertMessage: null,
    alertType: "success",
    loading: false,
    forgotPassMdl: false,
  };

  componentDidMount() {
    const redirectedFrom = getParameterByName(
      "redirected",
      window.location.href
    );
    switch (redirectedFrom) {
      case "new-page":
        this.setState({
          alertMessage:
            "Please login in order to be able to create a new page.",
          alertType: "normall",
        });
        break;
      case "admin":
        this.setState({
          alertMessage: "Please login to access the admin area.",
          alertType: "normall",
        });
        break;
      case "access":
        this.setState({
          alertMessage: "Please login to access that page.",
          alertType: "normall",
        });
        break;
    }
  }

  // Call server to send an email to reset the password
  onForgotPasswordSubmit() {
    const email = document.querySelector("#forgotpassword-email").children[0]
      .value;
    axios
      .post(`/api/forgotpassword`, {
        email,
      })
      .then((response) => {
        this.setState({
          alertMessage: `Instructions on how to reset your password were sent to ${this.state.email}`,
          alertType: "success",
          forgotPassMdl: false,
        });
      })
      .catch((error) => {
        this.setState({
          alertMessage: `No one with email ${this.state.email} founded.`,
          alertType: "error",
          forgotPassMdl: false,
        });
      });
  }

  onFormSubmit() {
    this.setState({ loading: true });
    axios
      .post(`/login`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location = `/home`;
      })
      .catch((error) => {
        this.setState({
          loading: false,
          alertMessage: `Incorrect password or email address.`,
          alertType: "error",
        });
      });
  }

  renderButtons() {
    if (this.state.loading === false) {
      return (
        <div>
          <div className="form__group">
            <button
              action="submit"
              className="btn btn-round btn-blue-o btn-big"
            >
              Sign In
            </button>
          </div>
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.setState({ forgotPassMdl: true });
            }}
            className="btn-text btn-text-underlined"
          >
            Forgot your password?
          </a>
        </div>
      );
    } else {
      return (
        <div className="margin-top-3">
          <div className="center-content">
            <Loading />
          </div>
        </div>
      );
    }
  }

  render() {
    document.querySelector("#js--login-btn").classList.add("display-none");
    document.querySelector("title").innerHTML = "Login | Pagher";
    return (
      <React.Fragment>
        <Modal
          header="Reset your password"
          open={this.state.forgotPassMdl}
          onClose={() => {
            this.setState({ forgotPassMdl: false });
          }}
        >
          <p>Put your email address here and we will send you instructions.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.onForgotPasswordSubmit.apply(this);
            }}
          >
            <div className="form__group" id="forgotpassword-email">
              <input
                type="email"
                placeholder="Email"
                className="form__input"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
                value={this.state.email}
                required
              />
            </div>
            <div className="right-content">
              <button type="submit" className="btn btn-round btn-blue">
                Send
              </button>
            </div>
          </form>
        </Modal>

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
            <Alert
              message={this.state.alertMessage}
              onClose={() => {
                this.setState({ alertMessage: null });
              }}
              type={this.state.alertType}
            />
            <form
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                this.onFormSubmit.apply(this);
              }}
            >
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  onChange={(event) => {
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
                  onChange={(event) => {
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
      </React.Fragment>
    );
  }
}

export default Login;
