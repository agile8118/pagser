import React, { useState, useEffect } from "react";
import axios from "axios";
import { request, alert } from "@pagser/common";
import { Loading, Input, Button } from "@pagser/reusable";

const Email = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = (await request.get(`/settings/email`, {
          auth: true,
        })) as any;
        setEmail(response.email);
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = "/login?redirected=admin";
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
            alert("Sorry this part is still under development.");
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
