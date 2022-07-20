import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Alert,
  Modal,
  Loading,
  Input,
  Button,
  TAlertType,
} from "@pagser/reusable";

interface IProps {
  name: string;
  email: string;
  username: string;
  password: string;
  onEmailChange: (email: string) => void;
}

const VerifyEmail = (props: IProps) => {
  const firstDigitRef = useRef<HTMLInputElement>(null);
  const secondDigitRef = useRef<HTMLInputElement>(null);
  const thirdDigitRef = useRef<HTMLInputElement>(null);
  const fourthDigitRef = useRef<HTMLInputElement>(null);
  const fifthDigitRef = useRef<HTMLInputElement>(null);

  const [firstDigit, setFirstDigit] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [thirdDigit, setThirdDigit] = useState("");
  const [fourthDigit, setFourthDigit] = useState("");
  const [fifthDigit, setFifthDigit] = useState("");

  const [changedEmail, setChangedEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingChangeEmail, setLoadingChangeEmail] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<TAlertType>("success");
  const [changeEmailMdl, setChangeEmailMdl] = useState(false);

  useEffect(() => {
    checkDigits();
  }, [firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit]);

  // Reset the digits inputs
  const resetDigits = () => {
    setFirstDigit("");
    setSecondDigit("");
    setThirdDigit("");
    setFourthDigit("");
    setFifthDigit("");
    firstDigitRef.current?.focus();
  };

  const resendCode = () => {
    setLoading(true);
    axios
      .post(`/api/sendcode`, {
        name: props.name,
        username: props.username,
        password: props.password,
        email: props.email,
      })
      .then((response) => {
        setLoading(false);
        setAlertMessage("New code has been sent to your email.");
        setAlertType("success");
        resetDigits();
      })
      .catch((error) => {
        setLoading(false);
        setAlertMessage("Something went wrong, please try again.");
        setAlertType("error");
        resetDigits();
      });
  };

  const onVerifyCodeSubmit = () => {
    setLoading(true);

    const code = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}`;

    axios
      .post(`/register/validatecode`, {
        code: Number(code),
      })
      .then((response) => {
        axios
          .post(`/register`, {
            name: props.name,
            username: props.username,
            password: props.password,
            email: props.email,
            code: Number(code),
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            window.location.href = `/home`;
          })
          .catch((error) => {
            setLoading(false);
            setAlertMessage("Something went wrong, please try again.");
            setAlertType("error");
            resetDigits();
          });
      })
      .catch((error) => {
        setLoading(false);
        setAlertMessage(
          "The code is invalid, make sure that you put the exact code we've sent to your email. You may want to resend the code."
        );
        setAlertType("error");
        resetDigits();
      });
  };

  const onChangeEmailSubmit = () => {
    setLoadingChangeEmail(true);
    axios
      .post(`/api/sendcode`, {
        name: props.name,
        username: props.username,
        password: props.password,
        email: changedEmail,
      })
      .then((response) => {
        props.onEmailChange(changedEmail);
        setAlertMessage("New code has been sent to your email.");
        setAlertType("success");
        setChangeEmailMdl(false);
        setChangedEmail("");
        resetDigits();
        setLoadingChangeEmail(false);
      })
      .catch((error) => {
        if (error.response.data.error === "email is in use") {
          setAlertMessage(
            `${changedEmail} is already in use, please login with this email or choose another one.`
          );
          setAlertType("error");
          setChangeEmailMdl(false);
          resetDigits();
          setLoadingChangeEmail(false);
          setChangedEmail("");
        } else {
          setAlertMessage("Something went wrong, please try again.");
          setAlertType("error");
          resetDigits();
          setLoadingChangeEmail(false);
          setChangedEmail("");
        }
      });
  };

  // Move to the specified diget
  const moveDigit = (number) => {};

  // Check if all digits are entered
  const checkDigits = () => {
    if (
      firstDigit.length === 1 &&
      secondDigit.length === 1 &&
      thirdDigit.length === 1 &&
      fourthDigit.length === 1 &&
      fifthDigit.length === 1
    ) {
      onVerifyCodeSubmit();
    }
  };

  // When a digit is changed
  const onDigitChanged = (valueEntered: string, number: string) => {
    if (/^\d+$/.test(valueEntered)) {
      switch (number) {
        case "first":
          setFirstDigit(valueEntered);
          secondDigitRef.current?.focus();
          break;
        case "second":
          setSecondDigit(valueEntered);
          thirdDigitRef.current?.focus();
          break;
        case "third":
          setThirdDigit(valueEntered);
          fourthDigitRef.current?.focus();
          break;
        case "fourth":
          setFourthDigit(valueEntered);
          fifthDigitRef.current?.focus();
          break;
        case "fifth":
          setFifthDigit(valueEntered);
          break;
      }
    }
  };

  // When user presses a key in a digit
  const onDigitKeyDown = (event, number: string) => {
    // Backspace key pressed
    if (event.keyCode === 8) {
      switch (number) {
        case "first":
          setFirstDigit("");
          break;
        case "second":
          setSecondDigit("");
          firstDigitRef.current?.focus();
          break;
        case "third":
          setThirdDigit("");
          secondDigitRef.current?.focus();
          break;
        case "fourth":
          setFourthDigit("");
          thirdDigitRef.current?.focus();
          break;
        case "fifth":
          setFifthDigit("");
          fourthDigitRef.current?.focus();
          break;
      }
    }

    // Left arrow key pressed
    if (event.keyCode === 37) {
      switch (number) {
        case "second":
          firstDigitRef.current?.focus();
          break;
        case "third":
          secondDigitRef.current?.focus();
          break;
        case "fourth":
          thirdDigitRef.current?.focus();
          break;
        case "fifth":
          fourthDigitRef.current?.focus();
          break;
      }
    }

    // Right arrow key pressed
    if (event.keyCode === 39) {
      switch (number) {
        case "first":
          secondDigitRef.current?.focus();
          break;
        case "second":
          thirdDigitRef.current?.focus();
          break;
        case "third":
          fourthDigitRef.current?.focus();
          break;
        case "fourth":
          fifthDigitRef.current?.focus();
          break;
      }
    }
  };

  // Render buttons for verify email part
  const renderButtons = () => {
    if (loading === false) {
      return (
        <div className="margin-top-3">
          <a
            href="javascript:void(0)"
            onClick={() => {
              setChangeEmailMdl(true);
            }}
            className="btn-text btn-text-underlined"
          >
            Change your email
          </a>
          <br />
          <a
            href="javascript:void(0)"
            onClick={() => {
              resendCode();
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
            <Loading />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal
        header="Change your email"
        open={changeEmailMdl}
        onClose={() => {
          setChangeEmailMdl(false);
        }}
      >
        <p>Put your email address here and we will send a new code to that.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onChangeEmailSubmit();
          }}
        >
          <div className="form-group">
            <Input
              required={true}
              type="email"
              value={changedEmail}
              onChange={(value) => {
                setChangedEmail(value);
              }}
              label="Email"
            />
          </div>
          <div className="u-flex-text-right">
            <Button
              type="submit"
              rounded={true}
              color="blue"
              loading={loadingChangeEmail}
            >
              Change
            </Button>
          </div>
        </form>
      </Modal>

      <div className="auth">
        <h3 className="heading-tertiary">Verify your email address</h3>
        <p className="small-copy">
          {props.email} - The last step is to enter the 5 digits code we have
          just sent to your email to verify your email address.
        </p>
        <Alert
          additionalClasses="u-margin-bottom-2"
          message={alertMessage as string}
          onClose={() => {
            setAlertMessage(null);
          }}
          type={alertType}
        />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onVerifyCodeSubmit();
          }}
        >
          <div className="form__group">
            <div className="input-digits">
              <input
                type="tel"
                autoFocus
                value={firstDigit}
                ref={firstDigitRef}
                onKeyDown={(event) => {
                  onDigitKeyDown(event, "first");
                }}
                onChange={(event) => {
                  onDigitChanged(event.target.value, "first");
                }}
                disabled={loading}
                maxLength={1}
              />
              <input
                type="tel"
                value={secondDigit}
                ref={secondDigitRef}
                onKeyDown={(event) => {
                  onDigitKeyDown(event, "second");
                }}
                onChange={(event) => {
                  onDigitChanged(event.target.value, "second");
                }}
                disabled={loading}
                maxLength={1}
              />
              <input
                type="tel"
                value={thirdDigit}
                ref={thirdDigitRef}
                onKeyDown={(event) => {
                  onDigitKeyDown(event, "third");
                }}
                onChange={(event) => {
                  onDigitChanged(event.target.value, "third");
                }}
                disabled={loading}
                maxLength={1}
              />
              <input
                type="tel"
                value={fourthDigit}
                ref={fourthDigitRef}
                onKeyDown={(event) => {
                  onDigitKeyDown(event, "fourth");
                }}
                onChange={(event) => {
                  onDigitChanged(event.target.value, "fourth");
                }}
                disabled={loading}
                maxLength={1}
              />
              <input
                type="tel"
                value={fifthDigit}
                ref={fifthDigitRef}
                onKeyDown={(event) => {
                  onDigitKeyDown(event, "fifth");
                }}
                onChange={(event) => {
                  onDigitChanged(event.target.value, "fifth");
                }}
                disabled={loading}
                maxLength={1}
              />
            </div>
          </div>
          {renderButtons()}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
