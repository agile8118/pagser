import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Input, TAlertType } from "@pagser/reusable";
import { validate } from "@pagser/common";
import util from "../../lib/forms";
import VerifyEmail from "./VerifyEmail";

const Register = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameSuccess, setNameSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordDisabled, setConfirmPasswordDisabled] = useState(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);

  const [usernameIsOK, setUsernameIsOK] = useState<boolean | null>(null);
  const [status, setStatus] = useState("show-form");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<TAlertType>("success");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const onUsernameChange = () => {
  //   var currentUsername = username;
  //   axios
  //     .post(`/usernameAvailability`, {
  //       username: currentUsername,
  //     })
  //     .then((respond) => {
  //       if (respond.data.message === "ok") {
  //         util.inputOK("username");
  //         setUsernameIsOK(true);
  //       } else if (respond.data.message === "taken") {
  //         setUsernameIsOK(false);
  //         util.inputError(
  //           "username",
  //           `${currentUsername} is already taken, please choose another one.`
  //         );
  //       }
  //     });
  // };

  const confirmPasswordReset = () => {
    setConfirmPassword("");
    setConfirmPasswordDisabled(true);
    setConfirmPasswordError("");
  };

  // handle input focus out events
  const onInputFocusOut = (value: string, fieldName: string) => {
    if (fieldName === "name") {
      if (validate.isEmpty(value)) {
        setNameError("Please enter your name.");
      }

      if (!validate.isAlpha(value) && !validate.isEmpty(value)) {
        setNameError("Please enter a valid name that contains only letters.");
      }

      if (!validate.len(value, 3, 30) && !validate.isEmpty(value)) {
        setNameError(
          "Please enter a name that is between 3 and 30 characters."
        );
      }

      if (
        validate.len(value, 3, 30) &&
        !validate.isEmpty(value) &&
        validate.isAlpha(value)
      ) {
        setNameError("");
        setNameSuccess(true);
      }
    }

    if (fieldName === "username") {
      axios
        .post(`/usernameAvailability`, {
          username: value,
        })
        .then((respond) => {
          if (respond.data.message === "ok") {
            // util.inputOK("username");
            setUsernameError("");
            setUsernameIsOK(true);
          } else if (respond.data.message === "taken") {
            setUsernameIsOK(false);
            setUsernameError(
              `${value} is already taken, please choose another one.`
            );
          }
        });

      if (validate.isEmpty(value)) {
        setUsernameIsOK(false);
        setUsernameError("Please choose a username.");
      }

      if (!validate.len(value, 5, 15) && !validate.isEmpty(value)) {
        setUsernameIsOK(false);
        setUsernameError(
          "Please choose a username name between 5 and 15 characters."
        );
      }

      if (!validate.isUsername(value) && !validate.isEmpty(value)) {
        setUsernameIsOK(false);
        setUsernameError(
          "Please choose a username that contains only letters, numbers and underscore."
        );
      }
    }

    if (fieldName === "email") {
      if (validate.isEmpty(value)) {
        setEmailError("Please enter your email.");
      }

      if (!validate.isEmail(value) && !validate.isEmpty(value)) {
        setEmailError("Please enter a valid email address.");
      }

      if (validate.isEmail(value)) {
        setEmailError("");
      }
    }

    if (fieldName === "password") {
      if (validate.isEmpty(value)) {
        setPasswordError("Please choose a password.");
        confirmPasswordReset();
      }
    }

    if (fieldName === "confirmPassword") {
      if (validate.isEmpty(value)) {
        setConfirmPasswordError("Please confirm your password.");
      }
    }
  };

  // handle input change events
  const onInputChange = (value: string, fieldName: string) => {
    if (fieldName === "password") {
      setPassword(value);
      confirmPasswordReset();

      if (!validate.isHardPassword(value) && !validate.isEmpty(value)) {
        setPasswordError(
          "Password should at least contain a capital and a small letter, and a number."
        );
        confirmPasswordReset();
      }

      if (!validate.len(value, 8, 30) && !validate.isEmpty(value)) {
        setPasswordError("Password should contain 8 to 30 characters.");
        confirmPasswordReset();
      }

      if (
        validate.len(value, 8, 30) &&
        !validate.isEmpty(value) &&
        validate.isHardPassword(value)
      ) {
        setPasswordError("");
        setPasswordSuccess(true);
        setConfirmPasswordDisabled(false);
      }
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(value);

      if (password !== value) {
        setConfirmPasswordError("Passwords do not match up.");
      }

      if (!validate.isEmpty(confirmPassword) && password === value) {
        setConfirmPasswordError("");
        setConfirmPasswordSuccess(true);
      }
    }
  };

  const onFormSubmit = () => {
    onInputFocusOut(name, "name");
    onInputFocusOut(username, "username");
    onInputFocusOut(email, "email");
    onInputFocusOut(password, "password");
    onInputFocusOut(confirmPassword, "confirmPassword");

    if (
      usernameIsOK &&
      !validate.isEmpty(name) &&
      validate.isAlpha(name) &&
      validate.len(name, 3, 30) &&
      !validate.isEmpty(username) &&
      validate.len(username, 5, 15) &&
      validate.isUsername(username) &&
      validate.isEmail(email) &&
      validate.isHardPassword(password) &&
      validate.len(password, 8, 30) &&
      password === confirmPassword
    ) {
      setLoading(true);
      const user = { name, email, username, password };
      axios
        .post(`/api/sendcode`, user)
        .then((response) => {
          setLoading(false);
          setAlertMessage(null);
          setStatus("verify-email");
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.data.error === "email is in use") {
            setAlertMessage(
              "This email is already in use, you can login or reset your password in the login tab."
            );
            setAlertType("error");
          } else {
            setAlertMessage("Something went wrong, please try again.");
            setAlertType("error");
          }
        });
    }
  };

  // Render the submit button for the registration section
  const renderButton = () => {
    return (
      <div className="form__group margin-bottom-0">
        <p className="a-9">
          By clicking Sign Up, you agree to our{" "}
          <a href="/terms-of-use" target="_blank" className="button-text">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" target="_blank" className="button-text">
            Privacy Policy
          </a>
          .
        </p>
        <div className="margin-top-1-5 u-flex-text-center">
          <Button
            color="blue"
            size="big"
            rounded={true}
            outlined={true}
            type="submit"
            loading={loading}
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  };

  document.querySelector("#js--login-btn")?.classList.add("display-none");

  let EL;

  if (status === "show-form") {
    const title = document.querySelector("title") as HTMLElement;
    title.innerHTML = "Register | Pagser";

    EL = (
      <div>
        <div className="auth">
          <div className="auth__options">
            <div className="auth__options--register--active" onClick={() => {}}>
              Register
            </div>
            <div
              className="auth__options--login"
              onClick={() => {
                navigate("/login");
              }}
            >
              login
            </div>
          </div>

          <div className="auth__content">
            <h3 className="heading-tertiary">Create your account</h3>
            <p className="small-copy">
              By creating an account you will be able to create pages, favorite
              pages, comment on other pages and more.
            </p>
            <Alert
              message={alertMessage as string}
              onClose={() => {
                setAlertMessage(null);
              }}
              type={alertType}
            />
            <form
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit();
              }}
            >
              <div className="form-group" id="name">
                <Input
                  type="text"
                  onBlur={(value) => {
                    onInputFocusOut(value, "name");
                  }}
                  onChange={(value) => {
                    setName(value);
                  }}
                  label="Full Name"
                  error={nameError}
                  success={nameSuccess}
                  value={name}
                />
              </div>

              <div className="form-group" id="username">
                <Input
                  type="text"
                  onBlur={(value) => {
                    onInputFocusOut(value, "username");
                  }}
                  onChange={(value) => {
                    setUsername(value);
                  }}
                  label="Username"
                  error={usernameError}
                  success={usernameIsOK || false}
                  value={username}
                />
              </div>

              <div className="form-group" id="email">
                <Input
                  type="email"
                  onBlur={(value) => {
                    onInputFocusOut(value, "email");
                  }}
                  onChange={(value) => {
                    setEmail(value);
                  }}
                  label="Email"
                  error={emailError}
                  success={emailSuccess}
                  value={email}
                />
              </div>

              <div className="form-group" id="password">
                <Input
                  type="password"
                  onBlur={(value) => {
                    onInputFocusOut(value, "password");
                  }}
                  onChange={(value) => {
                    onInputChange(value, "password");
                  }}
                  label="Password"
                  error={passwordError}
                  success={passwordSuccess}
                  value={password}
                />
              </div>

              <div className="form-group" id="">
                <Input
                  type="password"
                  onBlur={(value) => {
                    onInputFocusOut(value, "confirmPassword");
                  }}
                  onChange={(value) => {
                    onInputChange(value, "confirmPassword");
                  }}
                  label="Confirm Password"
                  disabled={confirmPasswordDisabled}
                  error={confirmPasswordError}
                  success={confirmPasswordSuccess}
                  value={confirmPassword}
                />
              </div>

              {renderButton()}
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (status === "verify-email") {
    EL = (
      <VerifyEmail
        name={name}
        username={username}
        email={email}
        password={password}
        onEmailChange={(newEmail) => {
          setEmail(newEmail);
        }}
      />
    );
  }

  return EL;
};

export default Register;
