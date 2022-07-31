import React, { useState, useEffect } from "react";
import { Loading, Input, Button, Textarea } from "@pagser/reusable";
import { alert, validate, request } from "@pagser/common";
import Photo from "./Photo";

const Info = () => {
  const [loading, setLoading] = useState(false); // loading when loading content
  const [loadingSaving, setLoadingSaving] = useState(false); // loading when saving changes
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [headline, setHeadline] = useState("");
  const [headlineError, setHeadlineError] = useState("");
  const [biography, setBiography] = useState("");
  const [biographyError, setBiographyError] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");

  useEffect(() => {
    document.title = "Profile | Pagser";

    setLoading(true);

    (async () => {
      try {
        const response = (await request.get(`/profile`, { auth: true })) as any;
        const user = response.user;

        setName(user.name);
        setHeadline(user.headline);
        setBiography(user.biography);
        setUsername(user.username);
        setWebsite(user.links.website);
        setTwitter(user.links.twitter);
        setYoutube(user.links.youtube);
        setLinkedin(user.links.linkedin);
        setFacebook(user.links.facebook);
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      }
    })();

    setLoading(false);
  }, []);

  // Name changes handle
  useEffect(() => {
    if (validate.isEmpty(name)) {
      setNameError("You must enter your name.");
    }

    if (!validate.isAlpha(name) && !validate.isEmpty(name)) {
      setNameError("Your name should contains only letters.");
    }

    if (!validate.len(name, 3, 30) && !validate.isEmpty(name)) {
      setNameError("Your name should be between 3 and 30 characters.");
    }

    if (
      validate.len(name, 3, 30) &&
      !validate.isEmpty(name) &&
      validate.isAlpha(name)
    ) {
      setNameError("");
    }
  }, [name]);

  useEffect(() => {
    if (!validate.letterPercentage(headline, 60)) {
      setHeadlineError("More than 60% of your headline must be letters.");
    }

    if (validate.letterPercentage(headline, 60)) {
      setHeadlineError("");
    }
  }, [headline]);

  useEffect(() => {
    if (!validate.letterPercentage(biography, 70)) {
      setBiographyError("More than 70% of your biography must be letters.");
    }

    if (validate.letterPercentage(biography, 70)) {
      setBiographyError("");
    }
  }, [biography]);

  useEffect(() => {
    checkIfAllOk();
  }, [name, headline, biography]);

  const checkIfAllOk = () => {
    if (
      validate.len(name, 3, 30) &&
      !validate.isEmpty(name) &&
      validate.isAlpha(name) &&
      validate.letterPercentage(headline, 60) &&
      validate.letterPercentage(biography, 70)
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const onSaveClick = async () => {
    setLoadingSaving(true);

    try {
      const response = (await request.patch(
        `/profile`,
        {
          name,
          headline,
          biography,
          links: { website, twitter, linkedin, youtube, facebook },
        },
        { auth: true }
      )) as any;

      alert("Your profile was updated successfully.", "success");
    } catch (e) {}

    setLoadingSaving(false);
  };

  if (loading)
    return (
      <div>
        <div className="center-content">
          <h3 className="heading-tertiary" id="information">
            Your Information
          </h3>
        </div>
        <br />
        <div className="center-content">
          <Loading />
        </div>
      </div>
    );

  return (
    <div className="row">
      <div className="admin">
        <div className="center-content">
          <h3 className="heading-tertiary" id="information">
            Your Information
          </h3>
        </div>

        {/* Name: */}
        <div className="form-group">
          <Input
            value={name}
            error={nameError}
            label="Name"
            placeholder="Full name"
            onChange={(value) => {
              setName(value);
            }}
          />
        </div>

        {/* Headline: */}
        <div className="form-group">
          <Input
            maxLength={50}
            label="Headline"
            error={headlineError}
            placeholder="Describe yourself in few words"
            value={headline}
            onChange={(value) => {
              setHeadline(value);
            }}
          />
        </div>

        {/* Biography: */}
        <div className="form-group">
          <label className="form__label"></label>
          <Textarea
            label="Biography"
            maxLength={250}
            error={biographyError}
            value={biography}
            onChange={(value) => {
              setBiography(value);
            }}
            placeholder="Add more information about yourself"
            rows={4}
          />
        </div>

        <div className="form__group">
          <label className="form__label">Links</label>
          <div className="form__group--sm">
            <input
              type="text"
              maxLength={100}
              placeholder="Website (http://www.example.com)"
              className="form__input"
              value={website}
              onChange={(event) => {
                setWebsite(event.target.value);
              }}
            />
          </div>

          <div className="form__group--sm">
            <div className="input__group">
              <div>https://twitter.com/</div>
              <input
                maxLength={100}
                type="text"
                placeholder="Twitter Profile"
                value={twitter}
                className="form__input"
                onChange={(event) => {
                  setTwitter(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="form__group--sm">
            <div className="input__group">
              <div>https://youtube.com/</div>
              <input
                maxLength={100}
                type="text"
                placeholder="Youtube Profile"
                value={youtube}
                className="form__input"
                onChange={(event) => {
                  setYoutube(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="form__group--sm">
            <div className="input__group">
              <div>https://linkedin.com/</div>
              <input
                maxLength={100}
                type="text"
                placeholder="LinkedIn Profile"
                value={linkedin}
                className="form__input"
                onChange={(event) => {
                  setLinkedin(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="form__group--sm">
            <div className="input__group">
              <div>https://facebook.com/</div>
              <input
                type="text"
                maxLength={100}
                placeholder="Facebook Profile"
                value={facebook}
                className="form__input"
                onChange={(event) => {
                  setFacebook(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="u-flex-text-right">
          <Button
            outlined={true}
            color="blue"
            rounded={true}
            disabled={btnDisabled}
            loading={loadingSaving}
            onClick={() => onSaveClick()}
          >
            Save
          </Button>
        </div>
        <Photo />
        <div className="right-content margin-top-4">
          <a
            href={`/users/${username}`}
            target="_blank"
            className="btn-text btn-text-underlined"
          >
            View public profile <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
