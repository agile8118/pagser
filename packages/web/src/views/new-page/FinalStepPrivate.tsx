import React, { useState, useEffect } from "react";
import { Loading, Button, ConfirmModal, Input } from "@pagser/reusable";
import { util, request, loadingModal, alert } from "@pagser/common";
import { useNavigate } from "react-router-dom";

interface IProps {
  username: string;
  comments: boolean;
  rating: boolean;
  anonymously: boolean;
  url: string;
  usedUrls: string[];
}

const FinalStepPrivate = (props: IProps) => {
  const [comments, setComments] = useState(props.comments);
  const [rating, setRating] = useState(props.rating);
  const [anonymously, setAnonymously] = useState(props.anonymously);
  const [url, setUrl] = useState(props.url);
  const [urlError, setUrlError] = useState("");
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadingModal("Loading...");
    updatePage(() => {
      loadingModal();
    });
  }, [rating, comments, anonymously]);

  useEffect(() => {
    // check for URL validation on change
    if (url) checkUrlValidation();
  }, [url]);

  // Toggle each switch button
  const onSwitchClicked = (role: "comments" | "rating" | "anonymously") => {
    switch (role) {
      case "comments":
        setComments(!comments);
        break;
      case "rating":
        setRating(!rating);
        break;
      case "anonymously":
        setAnonymously(!anonymously);
        break;
    }
  };

  // Check to see if a chosen URL is valid
  const checkUrlValidation = () => {
    if (url && url.length > 0 && props.usedUrls.indexOf(url) === -1) {
      setUrlError("");
      return true;
    } else if (props.usedUrls.indexOf(url) !== -1) {
      setUrlError(`You have already used "${url}" url, choose something else.`);
      return false;
    } else {
      setUrlError("Please choose a URL for your page.");
      return false;
    }
  };

  // Sends a request to the server to update the draft page
  const updatePage = async (callback?: () => void) => {
    const page = {
      id: util.getParameterByName("id", window.location.href),
      type: "private",
      configurations: {
        comments: comments,
        rating: rating,
        anonymously: anonymously,
      },
      url: url,
    };

    try {
      await request.patch(
        `/new-page/final-step/${util.getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          page,
        },
        {
          auth: true,
        }
      );

      if (callback) callback();
    } catch (e) {
      if (callback) loadingModal();
      navigate(`/new-page/initial-step`);
    }
  };

  const onSubmitButtonClicked = () => {
    if (!checkUrlValidation())
      return (document.querySelector("#url") as HTMLInputElement).focus();

    setPublishBtnLoading(true);
    updatePage(async () => {
      const pageId = util.getParameterByName("id", window.location.href);
      try {
        const response = (await request.post(`/new-page/${pageId}`, null, {
          auth: true,
        })) as any;

        navigate(
          `/new-page/message?type=private&status=success&url=${response.url}&username=${response.username}`
        );
      } catch (error: any) {
        if (error.message.error === "error with contents") {
          navigate(
            `/new-page/message?type=private&status=error-contents&id=${pageId}`
          );
        } else {
          navigate(`/new-page/message?type=private&status=error`);
        }
      }

      setPublishBtnLoading(false);
      loadingModal();
    });
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
        <h3 className="heading-tertiary">Configurations and URL</h3>
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

        <div className="form-group">
          <Input
            id="url"
            label="URL"
            placeholder="Choose a URL for your page."
            type="text"
            error={urlError}
            value={url}
            onBlur={() => {
              updatePage();
              checkUrlValidation();
            }}
            onChange={(value) => {
              setUrl(util.convertToUrl(value));
            }}
          />

          <p className="url__display">
            pagser.com/{props.username}/{url}
          </p>
          <div className="url__note">
            <strong>Important note about URL:</strong>
            <p>
              This URL will be for your page, please copy this because the only
              way other persons can view this page is to have this URL. <br />{" "}
              You should share this URL in order for others to view it.
            </p>
          </div>
        </div>
      </div>

      {/* Publish button */}
      <div className="u-flex-text-center">
        <Button
          onClick={() => {
            onSubmitButtonClicked();
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

export default FinalStepPrivate;
