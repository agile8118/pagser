import React, { useState } from "react";
import { loadingModal, validate, request, alert } from "@pagser/common";
import { Button, Input } from "@pagser/reusable";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordDisabled, setConfirmPasswordDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const confirmPasswordReset = () => {
    setConfirmPasswordDisabled(true);
    setConfirmPasswordError("");
    setConfirmPassword("");
  };

  const onInputFocusOut = (
    value: string,
    fieldName: "password" | "confirmPassword"
  ) => {
    if (fieldName === "password") {
      if (validate.isEmpty(value)) {
        setPassword("");
        confirmPasswordReset();
        setButtonDisabled(true);
      }
    }

    if (fieldName === "confirmPassword") {
      if (validate.isEmpty(value)) {
        setConfirmPasswordError("Please confirm your password.");
      }
    }
  };

  const onInputChange = (
    value: string,
    fieldName: "password" | "confirmPassword"
  ) => {
    if (fieldName === "password") {
      setPassword(value);
      confirmPasswordReset();
      setButtonDisabled(true);

      if (!validate.isHardPassword(value) && !validate.isEmpty(value)) {
        setPasswordError(
          "Password should contain a capital letter, letters and numbers."
        );
        confirmPasswordReset();
        setButtonDisabled(true);
      }

      if (!validate.len(value, 8, 30) && !validate.isEmpty(value)) {
        setPasswordError("Password should contain 8 to 30 characters.");
        setButtonDisabled(true);
        confirmPasswordReset();
      }

      if (
        validate.len(value, 8, 30) &&
        !validate.isEmpty(value) &&
        validate.isHardPassword(value)
      ) {
        setPasswordError("");
        setConfirmPasswordDisabled(false);
      }
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(value);

      if (password !== value) {
        setConfirmPasswordError("Passwords do not match up.");
        setButtonDisabled(true);
      }

      if (!validate.isEmpty(value) && password === value) {
        setConfirmPasswordError("");
        setButtonDisabled(false);
      }
    }
  };

  const onFormSubmit = async () => {
    loadingModal("Updating your password...");

    try {
      const response = await request.patch(
        `/settings/password`,
        {
          password,
        },
        { auth: true }
      );

      setPassword("");
      setPasswordError("");
      setButtonDisabled(true);
      alert("Password was updated successfully.", "success");
    } catch (e) {}

    loadingModal();
  };

  return (
    <div>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit();
        }}
      >
        <label className="form__label margin-top-2">Change Your Password</label>
        <div className="">
          <Input
            placeholder="New Password"
            type="password"
            error={passwordError}
            onBlur={(value) => {
              onInputFocusOut(value, "password");
            }}
            onChange={(value) => {
              onInputChange(value, "password");
            }}
            value={password}
          />
        </div>
        <div className="margin-top-1">
          <Input
            type="password"
            placeholder="Confirm Password"
            error={confirmPasswordError}
            disabled={confirmPasswordDisabled}
            onBlur={(value) => {
              onInputFocusOut(value, "confirmPassword");
            }}
            onChange={(value) => {
              onInputChange(value, "confirmPassword");
            }}
            value={confirmPassword}
          />
        </div>
        <div className="u-flex-text-right margin-top-2">
          <Button
            color="blue"
            type="submit"
            outlined={true}
            rounded={true}
            disabled={buttonDisabled}
          >
            Change
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Password;
