import React, { useState, useEffect } from "react";
import { request, alert, redirectToLogin, SettingsAPI } from "@pagser/common";
import { Loading, Input, Button } from "@pagser/reusable";

const Email = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await request.get<SettingsAPI.GetEmailResponse>(`/settings/email`, {
          auth: true,
          alert: false,
        });
        setEmail(response.email);
      } catch (e: any) {
        if (e.status === 401) {
          redirectToLogin("Please log in to access your profile.");
        }
      }

      setLoading(false);
    })();
  }, []);

  const onFormSubmit = () => {};

  if (loading) {
    return (
      <>
        <div className="form__group margin-bottom-0">
          <label className="form__label">Change Your Email</label>
        </div>
        <div className="left-content">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit();
      }}
    >
      <div className="form-roup">
        <Input
          label="Change Your Email"
          type="text"
          value={email}
          placeholder="Your New Email"
          onChange={(value) => {
            setEmail(value);
          }}
        />
      </div>
      <div className="u-flex-text-right margin-top-2">
        <Button
          rounded={true}
          outlined={true}
          color="blue"
          onClick={() => {
            alert("This section is still under development.");
          }}
          type="submit"
        >
          Change
        </Button>
      </div>
    </form>
  );
};

export default Email;
