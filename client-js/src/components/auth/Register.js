import React, { Component } from "react";
import axios from "axios";
import util from "../../lib/forms";
import { Modal } from "../partials/Modals";
import Alert from "../partials/Alert";

class Register extends Component {
  constructor(props) {
    super(props);

    this.firstDigit = React.createRef();
    this.secondDigit = React.createRef();
    this.thirdDigit = React.createRef();
    this.fourthDigit = React.createRef();
    this.fifthDigit = React.createRef();

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      usernameIsOK: null,
      status: "showform",
      alertMessage: null,
      alertType: "success",
      digits: {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
      },
      loading: false,
      changeEmailMdl: false,
    };
  }

  onUsernameChange() {
    var currentUsername = this.state.username;
    axios
      .post(`/usernameAvailability`, {
        username: currentUsername,
      })
      .then((respond) => {
        if (respond.data.message === "ok") {
          util.inputOK("username");
          this.setState({ usernameIsOK: true });
        } else if (respond.data.message === "taken") {
          this.setState({ usernameIsOK: false });
          util.inputError(
            "username",
            `${currentUsername} is already taken, please choose another one.`
          );
        }
      });
  }

  // handle input focus out event
  onInputFocusOut(value, fieldName) {
    if (fieldName === "name") {
      if (util.isEmpty(value)) {
        util.inputError("name", "Please enter your name.");
      }

      if (!util.isAlpha(value) && !util.isEmpty(value)) {
        util.inputError(
          "name",
          "Please enter a valid name that contains only letters."
        );
      }

      if (!util.len(value, 3, 30) && !util.isEmpty(value)) {
        util.inputError(
          "name",
          "Please enter a name between 3 and 30 charecters."
        );
      }

      if (
        util.len(value, 3, 30) &&
        !util.isEmpty(value) &&
        util.isAlpha(value)
      ) {
        util.inputOK("name");
      }
    }

    if (fieldName === "username") {
      axios
        .post(`/usernameAvailability`, {
          username: value,
        })
        .then((respond) => {
          if (respond.data.message === "ok") {
            util.inputOK("username");
            this.setState({ usernameIsOK: true });
          } else if (respond.data.message === "taken") {
            this.setState({ usernameIsOK: false });
            util.inputError(
              "username",
              `${value} is already taken, please choose another one.`
            );
          }
        });

      if (util.isEmpty(value)) {
        this.setState({ usernameIsOK: false });
        util.inputError("username", "Please choose a username.");
      }

      if (!util.len(value, 5, 15) && !util.isEmpty(value)) {
        this.setState({ usernameIsOK: false });
        util.inputError(
          "username",
          "Please choose a username name between 5 and 15 charecters."
        );
      }

      if (!util.isUsername(value) && !util.isEmpty(value)) {
        this.setState({ usernameIsOK: false });
        util.inputError(
          "username",
          "Please choose a username that contains only letters, numbers and underscore."
        );
      }
    }

    if (fieldName === "email") {
      if (util.isEmpty(value)) {
        util.inputError("email", "Please enter your email.");
      }

      if (!util.isEmail(value) && !util.isEmpty(value)) {
        util.inputError("email", "Please enter a valid email.");
      }

      if (util.isEmail(value)) {
        util.inputNone("email");
      }
    }

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

  // handle input change event
  onInputChange(value, fieldName) {
    if (fieldName === "password") {
      this.setState({ password: value });
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
      this.setState({ confirmPassword: value });

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
    var event = new Event("blur");
    var input1 = document.querySelector("#name").children[0];
    var input2 = document.querySelector("#username").children[0];
    var input3 = document.querySelector("#email").children[0];
    var input4 = document.querySelector("#password").children[0];
    var input5 = document.querySelector("#confirm-password").children[0];
    input1.dispatchEvent(event);
    input2.dispatchEvent(event);
    input3.dispatchEvent(event);
    input4.dispatchEvent(event);

    if (!input5.disabled) {
      input5.dispatchEvent(event);
    }

    const name = this.state.name;
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if (
      this.state.usernameIsOK &&
      !util.isEmpty(name) &&
      util.isAlpha(name) &&
      util.len(name, 3, 30) &&
      !util.isEmpty(username) &&
      util.len(username, 5, 15) &&
      util.isUsername(username) &&
      util.isEmail(email) &&
      util.isHardPassword(password) &&
      util.len(password, 8, 30) &&
      password === confirmPassword
    ) {
      this.setState({ loading: true });
      const user = { name, email, username, password };
      axios
        .post(`/api/sendcode`, user)
        .then((response) => {
          this.setState({ loading: false });
          this.setState({
            alertMessage: null,
            status: "verifyemail",
          });
        })
        .catch((error) => {
          this.setState({ loading: false });
          if (error.response.data.error === "email is in use") {
            this.setState({
              alertMessage:
                "This email is in use, you can login or reset your password in login tab.",
              alertType: "error",
            });
          } else {
            this.setState({
              alertMessage: "Something went wrong, please try again.",
              alertType: "error",
            });
          }
        });
    }
  }

  resendCode() {
    this.setState({ loading: true });
    axios
      .post(`/api/sendcode`, {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      })
      .then((response) => {
        this.setState({
          loading: false,
          alertMessage: "New code has been sent to your email.",
          alertType: "success",
        });
        this.resetDigits();
      })
      .catch((error) => {
        this.setState({
          loading: false,
          alertMessage: "Something went wrong, please try again.",
          alertType: "error",
        });
        this.resetDigits();
      });
  }

  onVerifyCodeSubmit() {
    this.setState({ loading: true });

    const code = `${this.state.digits.first}${this.state.digits.second}${this.state.digits.third}${this.state.digits.fourth}${this.state.digits.fifth}`;

    axios
      .post(`/register/validatecode`, {
        code: Number(code),
      })
      .then((response) => {
        axios
          .post(`/register`, {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            code: Number(code),
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            window.location = `/home`;
          })
          .catch((error) => {
            this.setState({
              loading: false,
              alertMessage: "Something went wrong, please try again.",
              alertType: "error",
            });
            this.resetDigits();
          });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          alertMessage:
            "The code is invalid, make sure that you put the exact code we've sent to your email. You may want to resend the code.",
          alertType: "error",
        });
        this.resetDigits();
      });
  }

  onChangeEmailSubmit() {
    const email = document.querySelector("#change-email-input").value;
    axios
      .post(`/api/sendcode`, {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email,
      })
      .then((response) => {
        this.setState({
          email,
          alertMessage: "New code has been sent to your email.",
          alertType: "success",
          changeEmailMdl: false,
        });
        this.resetDigits();
      })
      .catch((error) => {
        if (error.response.data.error === "email is in use") {
          this.setState({
            alertMessage:
              "This email is already in use, please login with this email or choose another one.",
            alertType: "error",
            changeEmailMdl: false,
          });
          this.resetDigits();
        } else {
          this.setState({
            alertMessage: "Something went wrong, please try again.",
            alertType: "error",
          });
          this.resetDigits();
        }
      });
  }

  // Reset the digts code
  resetDigits() {
    this.setState({
      digits: {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
      },
    });
    this.firstDigit.current.focus();
  }

  // Move to the specified diget
  moveDigit(number) {}

  // Check if all digits are entered
  checkDigits() {
    const first = this.state.digits.first;
    const second = this.state.digits.second;
    const third = this.state.digits.third;
    const fourth = this.state.digits.fourth;
    const fifth = this.state.digits.fifth;
    if (
      first.length === 1 &&
      second.length === 1 &&
      third.length === 1 &&
      fourth.length === 1 &&
      fifth.length === 1
    ) {
      this.onVerifyCodeSubmit();
    }
  }

  // When a digit is changed
  onDigitChanged(event, number) {
    const valueEntered = event.target.value;
    if (/^\d+$/.test(valueEntered)) {
      switch (number) {
        case "first":
          this.setState(
            (prevState) => ({
              digits: {
                ...prevState.digits,
                first: valueEntered,
              },
            }),
            () => {
              this.checkDigits();
            }
          );
          this.secondDigit.current.focus();
          break;
        case "second":
          this.setState(
            (prevState) => ({
              digits: {
                ...prevState.digits,
                second: valueEntered,
              },
            }),
            () => {
              this.checkDigits();
            }
          );
          this.thirdDigit.current.focus();
          break;
        case "third":
          this.setState(
            (prevState) => ({
              digits: {
                ...prevState.digits,
                third: valueEntered,
              },
            }),
            () => {
              this.checkDigits();
            }
          );
          this.fourthDigit.current.focus();
          break;
        case "fourth":
          this.setState(
            (prevState) => ({
              digits: {
                ...prevState.digits,
                fourth: valueEntered,
              },
            }),
            () => {
              this.checkDigits();
            }
          );
          this.fifthDigit.current.focus();
          break;
        case "fifth":
          this.setState(
            (prevState) => ({
              digits: {
                ...prevState.digits,
                fifth: valueEntered,
              },
            }),
            () => {
              this.checkDigits();
            }
          );
          break;
      }
    }
  }

  // When user presses a key in a digit
  onDigitKeyDown(event, number) {
    // Backspace key pressed
    if (event.keyCode === 8) {
      switch (number) {
        case "first":
          this.setState((prevState) => ({
            digits: {
              ...prevState.digits,
              first: "",
            },
          }));
          break;
        case "second":
          this.setState((prevState) => ({
            digits: {
              ...prevState.digits,
              second: "",
            },
          }));
          this.firstDigit.current.focus();
          break;
        case "third":
          this.setState((prevState) => ({
            digits: {
              ...prevState.digits,
              third: "",
            },
          }));
          this.secondDigit.current.focus();
          break;
        case "fourth":
          this.setState((prevState) => ({
            digits: {
              ...prevState.digits,
              fourth: "",
            },
          }));
          this.thirdDigit.current.focus();
          break;
        case "fifth":
          this.setState((prevState) => ({
            digits: {
              ...prevState.digits,
              fifth: "",
            },
          }));
          this.fourthDigit.current.focus();
          break;
      }
    }

    // Left arrow key pressed
    if (event.keyCode === 37) {
      switch (number) {
        case "second":
          this.firstDigit.current.focus();
          break;
        case "third":
          this.secondDigit.current.focus();
          break;
        case "fourth":
          this.thirdDigit.current.focus();
          break;
        case "fifth":
          this.fourthDigit.current.focus();
          break;
      }
    }

    // Right arrow key pressed
    if (event.keyCode === 39) {
      switch (number) {
        case "first":
          this.secondDigit.current.focus();
          break;
        case "second":
          this.thirdDigit.current.focus();
          break;
        case "third":
          this.fourthDigit.current.focus();
          break;
        case "fourth":
          this.fifthDigit.current.focus();
          break;
      }
    }
  }

  // Render the submit button for registeration section
  renderButton() {
    if (this.state.loading === false) {
      return (
        <div className="form__group margin-bottom-0">
          <p className="a-9">
            By clicking Sign Up, you agree to our{" "}
            <a href="/terms-of-use" target="_blank">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
            .
          </p>
          <button
            action="submit"
            className="btn btn-round btn-blue-o btn-big margin-top-1-5"
          >
            Sign Up
          </button>
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

  // Render buttons for verify email part
  renderButtons() {
    if (this.state.loading === false) {
      return (
        <div className="margin-top-3">
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.setState({ changeEmailMdl: true });
            }}
            className="btn-text btn-text-underlined"
          >
            Change your email
          </a>
          <br />
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.resendCode();
            }}
            className="btn-text btn-text-underlined"
          >
            Resend code
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
    document.querySelector("#js--login-btn").classList.add("display-none");
    if (this.state.status === "showform") {
      document.querySelector("title").innerHTML = "Register | Pagser";
      return (
        <div>
          <div className="auth">
            <div className="auth__options">
              <div
                className="auth__options--register--active"
                onClick={() => {}}
              >
                Register
              </div>
              <div
                className="auth__options--login"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                login
              </div>
            </div>

            <div className="auth__content">
              <h3 className="heading-tertiary">Create your account</h3>
              <p className="small-copy">
                By creating an account you will be able to create pages,
                favorite pages, comment on other pages and more.
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
                <div className="form__group" id="name">
                  <input
                    type="text"
                    className="form__input"
                    onBlur={(event) => {
                      this.onInputFocusOut.apply(this, [
                        event.target.value,
                        "name",
                      ]);
                    }}
                    onChange={(event) => {
                      this.setState({ name: event.target.value });
                    }}
                    placeholder="Full Name"
                    value={this.state.name}
                  />
                  <div className="form__input--message">
                    <span />
                  </div>
                </div>

                <div className="form__group" id="username">
                  <input
                    type="text"
                    className="form__input"
                    onBlur={(event) => {
                      this.onInputFocusOut.apply(this, [
                        event.target.value,
                        "username",
                      ]);
                    }}
                    onChange={(event) => {
                      this.setState({ username: event.target.value });
                    }}
                    placeholder="Username"
                    value={this.state.username}
                  />
                  <div className="form__input--message">
                    <span />
                  </div>
                </div>

                <div className="form__group" id="email">
                  <input
                    type="text"
                    className="form__input"
                    onBlur={(event) => {
                      this.onInputFocusOut.apply(this, [
                        event.target.value,
                        "email",
                      ]);
                    }}
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                    placeholder="Email Address"
                    value={this.state.email}
                  />
                  <div className="form__input--message">
                    <span />
                  </div>
                </div>

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

                {this.renderButton.apply(this)}
              </form>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.status === "verifyemail") {
      return (
        <div>
          <Modal
            header="Change your email"
            open={this.state.changeEmailMdl}
            onClose={() => {
              this.setState({ changeEmailMdl: false });
            }}
          >
            <p>
              Put your email address here and we will send a new code to that.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.onChangeEmailSubmit.apply(this);
              }}
            >
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form__input"
                  id="change-email-input"
                  required
                />
              </div>
              <div className="right-content">
                <button type="submit" className="btn btn-blue btn-round">
                  Change
                </button>
              </div>
            </form>
          </Modal>

          <div className="auth">
            <h3 className="heading-tertiary">Verify your email address</h3>
            <p className="small-copy">
              {this.state.email} - The last step is to enter the 5 digits code
              we have just sent to your email to verify your email address.
            </p>
            <Alert
              message={this.state.alertMessage}
              onClose={() => {
                this.setState({ alertMessage: null });
              }}
              type={this.state.alertType}
            />
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.onVerifyCodeSubmit.apply(this);
              }}
            >
              <div className="form__group">
                <div className="input-digits">
                  <input
                    type="tel"
                    autoFocus
                    value={this.state.digits.first}
                    ref={this.firstDigit}
                    onKeyDown={(event) => {
                      this.onDigitKeyDown(event, "first");
                    }}
                    onChange={(event) => {
                      this.onDigitChanged(event, "first");
                    }}
                    disabled={this.state.loading}
                    maxLength="1"
                  />
                  <input
                    type="tel"
                    value={this.state.digits.second}
                    ref={this.secondDigit}
                    onKeyDown={(event) => {
                      this.onDigitKeyDown(event, "second");
                    }}
                    onChange={(event) => {
                      this.onDigitChanged(event, "second");
                    }}
                    disabled={this.state.loading}
                    maxLength="1"
                  />
                  <input
                    type="tel"
                    value={this.state.digits.third}
                    ref={this.thirdDigit}
                    onKeyDown={(event) => {
                      this.onDigitKeyDown(event, "third");
                    }}
                    onChange={(event) => {
                      this.onDigitChanged(event, "third");
                    }}
                    disabled={this.state.loading}
                    maxLength="1"
                  />
                  <input
                    type="tel"
                    value={this.state.digits.fourth}
                    ref={this.fourthDigit}
                    onKeyDown={(event) => {
                      this.onDigitKeyDown(event, "fourth");
                    }}
                    onChange={(event) => {
                      this.onDigitChanged(event, "fourth");
                    }}
                    disabled={this.state.loading}
                    maxLength="1"
                  />
                  <input
                    type="tel"
                    value={this.state.digits.fifth}
                    ref={this.fifthDigit}
                    onKeyDown={(event) => {
                      this.onDigitKeyDown(event, "fifth");
                    }}
                    onChange={(event) => {
                      this.onDigitChanged(event, "fifth");
                    }}
                    disabled={this.state.loading}
                    maxLength="1"
                  />
                </div>
              </div>
              {this.renderButtons.apply(this)}
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Register;
