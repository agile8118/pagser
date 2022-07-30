import React, { useState, useEffect } from "react";
import { Loading, Button, ConfirmModal, Input } from "@pagser/reusable";
import { util, request, loadingModal, alert, tagsInput } from "@pagser/common";
import { useNavigate } from "react-router-dom";

interface IProps {
  comments: boolean;
  rating: boolean;
  anonymously: boolean;
  links: boolean;
  tags: string;
}

const FinalStepPublic = (props: IProps) => {
  const [comments, setComments] = useState(props.comments);
  const [rating, setRating] = useState(props.rating);
  const [links, setLinks] = useState(props.links);
  const [anonymously, setAnonymously] = useState(props.anonymously);
  const [tags, setTags] = useState(props.tags);
  const [tagsError, setTagsError] = useState("");
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // To fix width issue client-js/node_modules/tags-input/tags-input.js and in setInputWidth
    // function change the value to a higher value (5 -> 10)
    if (!document.querySelector("div.tags-input"))
      tagsInput(document.querySelector('input[type="tags"]'));

    (document.querySelector("#tags") as HTMLInputElement).addEventListener(
      "change",
      function () {
        setTags(this.value);
      }
    );
  }, []);

  useEffect(() => {
    loadingModal("Loading...");
    updatePage(() => {
      loadingModal();
    });
  }, [comments, rating, links, anonymously]);

  useEffect(() => {
    if (tags) {
      updatePage();
      checkTagsValidation();
    }
  }, [tags]);

  const updatePage = async (callback?: () => void) => {
    try {
      const page = {
        type: "public",
        configurations: {
          comments: comments,
          rating: rating,
          links: links,
          anonymously: anonymously,
        },
        tags: tags,
      };

      await request.patch(
        `/new-page/final-step/${util.getParameterByName(
          "id",
          window.location.href
        )}`,
        { page },
        {
          auth: true,
        }
      );
      if (callback) callback();
    } catch (e) {
      loadingModal();
      navigate(`/new-page/initial-step`);
    }
  };

  // Check if the tags are valid
  const checkTagsValidation = () => {
    if (tags.split(",").length < 5) {
      setTagsError("Please choose at least 5 tags.");
      return false;
    }

    if (tags.replace(/,/g, "").length >= 200) {
      setTagsError("Tags must be less than 200 characters.");
      return false;
    }

    setTagsError("");
    return true;
  };

  // Toggle each switch button
  const onSwitchClicked = (
    role: "comments" | "rating" | "links" | "anonymously"
  ) => {
    switch (role) {
      case "comments":
        setComments(!comments);
        break;
      case "rating":
        setRating(!rating);
        break;
      case "links":
        setLinks(!links);

        break;
      case "anonymously":
        setAnonymously(!anonymously);
        break;
    }
  };

  const onBackButtonClicked = () => {
    updatePage(() => {
      loadingModal();
      navigate(
        `/new-page/attach-files?id=${util.getParameterByName(
          "id",
          window.location.href
        )}`
      );
    });
  };

  const onPublishButtonClicked = () => {
    if (!checkTagsValidation())
      return (document.querySelector("#tags") as HTMLInputElement).focus();

    setPublishBtnLoading(true);
    updatePage(async () => {
      const pageId = util.getParameterByName("id", window.location.href);
      try {
        const response = (await request.post(`/new-page/${pageId}`, null, {
          auth: true,
        })) as any;

        navigate(
          `/new-page/message?type=public&status=success&url=${response.url}`
        );
      } catch (error: any) {
        if (error.message.error === "error with contents") {
          navigate(
            `/new-page/message?type=public&status=error-contents&id=${pageId}`
          );
        } else {
          navigate(`/new-page/message?type=public&status=error`);
        }
      }
      loadingModal();
      setPublishBtnLoading(false);
    });
  };

  return (
    <React.Fragment>
      {/* Back button */}
      <button
        className="button-text button-text--big a-11"
        onClick={() => {
          onBackButtonClicked();
        }}
      >
        <i className="fa fa-arrow-left" aria-hidden="true" /> Back
      </button>

      <div className="center-content">
        <h3 className="heading-tertiary">Configurations and Tags</h3>
      </div>

      <div className="page-new__final-step">
        <div className="new-page-final-step__switches">
          <div className="new-page-final-step__switch">
            <label>Disable Comments</label>
            <div className="tooltip tooltip-top tooltip--info">
              <a href="#" className="tooltip__icon">
                ?
              </a>
              <span className="tooltip__text">
                lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                sit amet, consectetur adiplorem ipsum dolor sit amet,
                consectetur adip
              </span>
            </div>
            <button
              className="btn-i btn-i-blue"
              onClick={() => onSwitchClicked("comments")}
            >
              <i
                className={
                  !comments ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"
                }
                aria-hidden="true"
              />
            </button>
            <input type="hidden" value="false" />
          </div>

          <div className="new-page-final-step__switch">
            <label>Disable Rating</label>
            <div className="tooltip tooltip-top tooltip--info">
              <a href="#" className="tooltip__icon">
                ?
              </a>
              <span className="tooltip__text">
                lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                sit amet, consectetur adiplorem ipsum dolor sit amet,
                consectetur adip
              </span>
            </div>
            <button
              className="btn-i btn-i-blue"
              onClick={() => onSwitchClicked("rating")}
            >
              <i
                className={
                  !rating ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"
                }
                aria-hidden="true"
              />
            </button>
            <input type="hidden" value="false" />
          </div>

          <div className="new-page-final-step__switch">
            <label>Do Not Display Related Pages and Tags</label>
            <div className="tooltip tooltip-top tooltip--info">
              <a href="#" className="tooltip__icon">
                ?
              </a>
              <span className="tooltip__text">
                lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                sit amet, consectetur adiplorem ipsum dolor sit amet,
                consectetur adip
              </span>
            </div>
            <button
              className="btn-i btn-i-blue"
              onClick={() => onSwitchClicked("links")}
            >
              <i
                className={
                  !links ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off"
                }
                aria-hidden="true"
              />
            </button>
            <input type="hidden" value="false" />
          </div>

          <div className="new-page-final-step__switch">
            <label>Create This Page Anonymously</label>
            <div className="tooltip tooltip-top tooltip--info">
              <a href="#" className="tooltip__icon">
                ?
              </a>
              <span className="tooltip__text">
                lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                sit amet, consectetur adiplorem ipsum dolor sit amet,
                consectetur adip
              </span>
            </div>
            <button
              className="btn-i btn-i-blue"
              onClick={() => onSwitchClicked("anonymously")}
            >
              <i
                className={
                  anonymously
                    ? "fa fa-2x fa-toggle-on"
                    : "fa fa-2x fa-toggle-off"
                }
                aria-hidden="true"
              />
            </button>
            <input type="hidden" value="false" />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="tags">
            Tags
          </label>
          <input
            type="tags"
            className="tags-input"
            id="tags"
            defaultValue={tags}
          />
          {/* <span className={`a-10 ${!tagsError && "display-none"}`}>
            {tagsError}
          </span> */}

          {tagsError && (
            <span className="input-error">
              <i className="fa fa-exclamation-circle"></i>
              {tagsError}
            </span>
          )}
        </div>

        <div className="margin-top-1">
          <p className="small-paragraph">
            Please read{" "}
            <a href="#" target="_blank" className="button-text">
              this
            </a>{" "}
            quick guide before you change any of the configurations and choose
            any tags.
          </p>
        </div>
      </div>

      {/* Publish button */}
      <div className="u-flex-text-center">
        <Button
          onClick={() => {
            onPublishButtonClicked();
          }}
          loading={publishBtnLoading}
          color="green"
        >
          Publish
          <i className="fa fa-globe button__icon-right"></i>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default FinalStepPublic;
