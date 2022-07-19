import React, { useState, useEffect } from "react";
import axios from "axios";
import util from "../../lib/forms";
import { getParameterByName } from "../../lib";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("showform");
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

  const onInputFocusOut = (value, fieldName) => {
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
  };

  const onInputChange = (value, fieldName) => {
    if (fieldName === "password") {
      setPassword(value);

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
        const confirmPasswordEl = document.querySelector("#confirm-password")
          ?.children[0] as HTMLInputElement;
        confirmPasswordEl.disabled = false;
        confirmPasswordEl.classList.remove("form__input--disabled");
      }
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(value);

      if (password !== value) {
        util.inputError("confirm-password", "Passwords do not match up.");
      }

      if (!util.isEmpty(confirmPassword) && password === value) {
        util.inputOK("confirm-password");
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

  if (status === "showform") {
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
          <div className="form__group" id="password">
            <input
              type="password"
              className="form__input"
              onBlur={(event) => {
                onInputFocusOut(event.target.value, "password");
              }}
              onChange={(event) => {
                onInputChange(event.target.value, "password");
              }}
              placeholder="Password"
              value={password}
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
                onInputFocusOut(event.target.value, "confirmPassword");
              }}
              onChange={(event) => {
                onInputChange(event.target.value, "confirmPassword");
              }}
              placeholder="Confirm Password"
              value={confirmPassword}
            />
            <div className="form__input--message">
              <span />
            </div>
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
