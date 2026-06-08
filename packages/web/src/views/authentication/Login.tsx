import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Loading,
  Alert,
  Modal,
  TAlertType,
  Button,
  Input,
} from "@pagser/reusable";
import { request } from "@pagser/common";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<TAlertType>("success");
  const [loading, setLoading] = useState(false);
  const [loadingForgotPassword, setLoadingForgotPassword] = useState(false);

  const [forgotPassMdl, setForgotPassMdl] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fromSession = sessionStorage.getItem("loginMessage");
    if (fromSession) {
      sessionStorage.removeItem("loginMessage");
      setAlertMessage(fromSession);
      setAlertType("normal");
      return;
    }

    const fromCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("loginMessage="))
      ?.split("=")[1];
    if (fromCookie) {
      document.cookie = "loginMessage=; Max-Age=0; Path=/";
      setAlertMessage(decodeURIComponent(fromCookie));
      setAlertType("normal");
    }
  }, []);

  // Call server to send an email to reset the password
  const onForgotPasswordSubmit = () => {
    setLoadingForgotPassword(true);
    axios
      .post(`/api/forgot-password`, {
        email: email,
      })
      .then((response) => {
        setAlertMessage(
          `Instructions on how to reset your password were sent to ${email}`,
        );
        setAlertType("success");
        setForgotPassMdl(false);
        setLoadingForgotPassword(false);
      })
      .catch((error) => {
        setAlertMessage(
          error.response?.data?.message ??
            "Something went wrong on our end. Please try again.",
        );
        setAlertType("error");
        setForgotPassMdl(false);
        setLoadingForgotPassword(false);
      });
  };

  const onFormSubmit = () => {
    setLoading(true);

    axios
      .post(`/api/login`, {
        email,
        password,
      })
      .then(() => {
        window.location.href = `/home`;
      })
      .catch((error) => {
        setLoading(false);
        setAlertMessage(
          error.response?.data?.message ??
            "Something went wrong on our end. Please try again.",
        );
        setAlertType("error");
      });
  };

  const renderButtons = () => {
    return (
      <div>
        <div className="form__group u-flex-text-center">
          <Button
            testId="login-submit"
            type="submit"
            rounded={true}
            outlined={true}
            size="big"
            color="blue"
            loading={loading}
          >
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
        <p>Enter your email address and we'll send you a reset link.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onForgotPasswordSubmit();
          }}
        >
          <div className="form-group">
            <Input
              type="email"
              label="Email"
              onChange={(value) => {
                setEmail(value);
              }}
              value={email}
              required
            />
          </div>
          <div className="u-flex-text-right">
            <Button
              type="submit"
              rounded={true}
              color="blue"
              loading={loadingForgotPassword}
            >
              Send
            </Button>
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
          <div className="auth__options--login--active">Login</div>
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
            <div className="form-group">
              <Input
                testId="login-email"
                type="text"
                onChange={(value) => {
                  setEmail(value);
                }}
                label="Email Address"
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <Input
                testId="login-password"
                type="password"
                onChange={(value) => {
                  setPassword(value);
                }}
                label="Your Password"
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
