import React, { useState, useEffect } from "react";
import axios from "axios";
import { validate, util, ApiMessages } from "@pagser/common";
import { Input, Button } from "@pagser/reusable";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

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
      validate.isHardPassword(password) &&
      !validate.isEmpty(password) &&
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

  const onInputChange = (value, fieldName) => {
    if (fieldName === "password") {
      setPassword(value);
      confirmPasswordReset();

      if (!validate.isHardPassword(value) && !validate.isEmpty(value)) {
        setPasswordError(
          "Password must contain an uppercase letter, a lowercase letter, and a number."
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
        setPasswordSuccess(true);
        setPasswordError("");
        setConfirmPasswordDisabled(false);
      }
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(value);

      if (password !== value) {
        setConfirmPasswordError("Passwords do not match.");
      }

      if (!validate.isEmpty(confirmPassword) && password === value) {
        setConfirmPasswordError("");
        setConfirmPasswordSuccess(true);
      }
    }
  };

  const onFormSubmit = () => {
    setLoading(true);
    axios
      .patch(`/api/reset-password`, {
        userId: util.getParameterByName("i"),
        token: { code: util.getParameterByName("t") },
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setStatus("success");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.message === ApiMessages.INVALID_LINK) {
          setStatus("error");
          setMessage(
            "The link is invalid. Please make sure you are using the exact link we sent to your email."
          );
        }
        if (error.response.data.message === ApiMessages.LINK_EXPIRED) {
          setStatus("error");
          setMessage(
            "The link has expired. Please request a password reset."
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
          After resetting your password, you will be prompted to log in with
          your new password.
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

          <div className="form__group u-flex-text-center">
            <Button
              type="submit"
              loading={loading}
              rounded={true}
              disabled={btnDisabled}
              color="blue"
            >
              Reset
            </Button>
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
        Your password has been reset. You can now log in with your new password.
      </div>
    );
  }

  return EL;
};

export default ForgotPassword;
