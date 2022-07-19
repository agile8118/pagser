import React, { useState, useEffect } from "react";
import axios from "axios";
import util from "../../lib/forms";
import { Input } from "@pagser/reusable";
import { getParameterByName } from "../../lib";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordDisabled, setConfirmPasswordDisabled] = useState(true);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [status, setStatus] = useState("show-form");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    checkAll();
  }, [password, confirmPassword]);

  const checkAll = () => {
    if (
      util.isHardPassword(password) &&
      !util.isEmpty(password) &&
      password === confirmPassword
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const confirmPasswordReset = () => {
    setConfirmPassword("");
    setConfirmPasswordDisabled(true);
    setConfirmPasswordError("");
  };

  const onInputFocusOut = (value, fieldName) => {
    if (fieldName === "password") {
      if (util.isEmpty(value)) {
        setPasswordError("Please choose a password.");
        confirmPasswordReset();
      }
    }

    if (fieldName === "confirmPassword") {
      if (util.isEmpty(value)) {
        setConfirmPasswordError("Please choose a password.");
      }
    }
  };

  const onInputChange = (value, fieldName) => {
    if (fieldName === "password") {
      setPassword(value);
      confirmPasswordReset();

      if (!util.isHardPassword(value) && !util.isEmpty(value)) {
        setPasswordError(
          "Password should contain a capital letter, letters and numbers."
        );
        confirmPasswordReset();
      }

      if (!util.len(value, 8, 30) && !util.isEmpty(value)) {
        setPasswordError("Password should contain 8 to 30 characters.");
        confirmPasswordReset();
      }

      if (
        util.len(value, 8, 30) &&
        !util.isEmpty(value) &&
        util.isHardPassword(value, 8, 30)
      ) {
        setPasswordSuccess(true);
        setPasswordError("");
        setConfirmPasswordDisabled(false);
      }
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(value);

      if (password !== value) {
        setConfirmPasswordError("Passwords do not match up.");
      }

      if (!util.isEmpty(confirmPassword) && password === value) {
        setConfirmPasswordError("");
        setConfirmPasswordSuccess(true);
      }
    }
  };

  const onFormSubmit = () => {
    axios
      .post(`/api/resetpassword`, {
        userId: getParameterByName("i"),
        token: { code: getParameterByName("t") },
        password: password,
      })
      .then((response) => {
        setStatus("success");
      })
      .catch((error) => {
        if (error.response.data.error === "invalid link") {
          setStatus("error");
          setMessage(
            "The link you've clicked on is not valid, make sure that you open the exact link we've sent to your email."
          );
        }
        if (error.response.data.error === "link expired") {
          setStatus("error");
          setMessage(
            "The link you've clicked on has expired. Please request for a password reset once again."
          );
        }
      });
  };

  let EL;

  if (status === "show-form") {
    const titleEl = document.querySelector("title") as HTMLElement;
    titleEl.innerHTML = `Reset Password | Pagser`;

    EL = (
      <div className="auth">
        <h3 className="heading-tertiary">Create a new password</h3>
        <p className="small-copy">
          After resetting your account, you will prompted to login with your new
          password.
        </p>
        <form
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit();
          }}
        >
          <div className="form-group">
            <Input
              type="password"
              value={password}
              error={passwordError}
              onChange={(value) => {
                onInputChange(value, "password");
              }}
              success={passwordSuccess}
              onBlur={(value) => {
                onInputFocusOut(value, "password");
              }}
              label="Password"
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              error={confirmPasswordError}
              value={confirmPassword}
              success={confirmPasswordSuccess}
              onChange={(value) => {
                onInputChange(value, "confirmPassword");
              }}
              onBlur={(value) => {
                onInputFocusOut(value, "confirmPassword");
              }}
              disabled={confirmPasswordDisabled}
              label="Confirm Password"
            />
          </div>

          <div className="form__group">
            <button
              type="submit"
              className="btn btn-blue btn-round"
              disabled={btnDisabled}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (status === "error") {
    EL = (
      <div className="middle-box middle-box--absolute middle-box--error">
        {message}
      </div>
    );
  }

  if (status === "success") {
    EL = (
      <div className="middle-box middle-box--absolute middle-box--success">
        You have successfully reset your password. Now you can go ahead and
        login to your account with your new password.
      </div>
    );
  }

  return EL;
};

export default ForgotPassword;
