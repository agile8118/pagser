import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loading, Alert, Modal, TAlertType, Button } from "@pagser/reusable";
import { getParameterByName } from "../../lib";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<TAlertType>("success");
  const [loading, setLoading] = useState(false);
  const [forgotPassMdl, setForgotPassMdl] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const redirectedFrom = getParameterByName(
      "redirected",
      window.location.href
    );
    switch (redirectedFrom) {
      case "new-page":
        setAlertMessage(
          "Please login in order to be able to create a new page."
        );
        setAlertType("normall");
        break;
      case "admin":
        setAlertMessage("Please login to access the admin area.");
        setAlertType("normall");
        break;
      case "access":
        setAlertMessage("Please login to proceed.");
        setAlertType("normall");
        break;
    }
  }, []);

  // Call server to send an email to reset the password
  const onForgotPasswordSubmit = () => {
    const emailElement = document?.querySelector("#forgotpassword-email")
      ?.children[0] as HTMLInputElement;
    const email = emailElement.value;

    axios
      .post(`/api/forgotpassword`, {
        email,
      })
      .then((response) => {
        setAlertMessage(
          `Instructions on how to reset your password were sent to ${email}`
        );
        setAlertType("success");
        setForgotPassMdl(false);
      })
      .catch((error) => {
        setAlertMessage(`No one with the email ${email} was founded.`);
        setAlertType("error");
        setForgotPassMdl(false);
      });
  };

  const onFormSubmit = () => {
    setLoading(true);

    axios
      .post(`/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location.href = `/home`;
      })
      .catch((error) => {
        setLoading(false);
        setAlertMessage("Incorrect password or email address.");
        setAlertType("error");
      });
  };

  const renderButtons = () => {
    if (loading === false) {
      return (
        <div>
          <div className="form__group u-flex-text-center">
            <Button rounded={true} outlined={true} size="big" color="blue">
              Sign In
            </Button>
          </div>
          <button
            type="button"
            onClick={() => {
              setForgotPassMdl(true);
            }}
            className="button-text"
          >
            Forgot your password?
          </button>
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
  };

  document.querySelector("#js--login-btn")?.classList.add("display-none");
  const title = document.querySelector("title") as HTMLElement;
  title.innerHTML = "Login | Pagser";

  return (
    <React.Fragment>
      <Modal
        header="Reset your password"
        open={forgotPassMdl}
        onClose={() => {
          setForgotPassMdl(false);
        }}
      >
        <p>Put your email address here and we'll send you the instructions.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onForgotPasswordSubmit();
          }}
        >
          <div className="form__group" id="forgotpassword-email">
            <input
              type="email"
              placeholder="Email"
              className="form__input"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
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
              navigate("/register");
            }}
          >
            Register
          </div>
          <div className="auth__options--login--active">login</div>
        </div>

        <div className="auth__content">
          <h3 className="heading-tertiary">Log into your account</h3>
          <p className="small-copy">
            We are happy to see you logging in! Login to manage all of your
            pages. You can reset your password if you {"don't "} remember it.
          </p>
          <Alert
            message={alertMessage || undefined}
            onClose={() => {
              setAlertMessage("");
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
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email Address"
                value={email}
                required
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Your Password"
                value={password}
              />
            </div>

            {renderButtons()}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
