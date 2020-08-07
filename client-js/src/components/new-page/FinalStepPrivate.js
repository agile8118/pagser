import React, { Component } from "react";
import axios from "axios";
import { getParameterByName, loadingModal, convertToUrl } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";
import Loading from "../partials/Loading";

class FinalStepPrivate extends Component {
  state = {
    type: "private",
    username: this.props.username,
    comments: this.props.comments,
    rating: this.props.rating,
    anonymously: this.props.anonymously,
    url: this.props.url,
    usedUrls: this.props.usedUrls,
    errors: {
      url: null,
    },
  };

  url = React.createRef();

  // Toggle each switch button
  onSwitchClicked = (role) => {
    switch (role) {
      case "comments":
        this.setState({ comments: !this.state.comments }, () => {
          this.updatePage(() => {
            loadingModal();
          });
        });
        break;
      case "rating":
        this.setState({ rating: !this.state.rating }, () => {
          this.updatePage(() => {
            loadingModal();
          });
        });
        break;
      case "anonymously":
        this.setState({ anonymously: !this.state.anonymously }, () => {
          this.updatePage(() => {
            loadingModal();
          });
        });
        break;
    }
  };

  // Check to see if a chosen URL is valid
  checkUrlValidation = () => {
    if (
      this.state.url &&
      this.state.url.length > 0 &&
      this.state.usedUrls.indexOf(this.state.url) === -1
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          url: null,
        },
      });
      return true;
    } else if (this.state.usedUrls.indexOf(this.state.url) !== -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          url: `You have already used "${this.state.url}" url, choose something else.`,
        },
      });
      return false;
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          url: "Please choose a URL for your page.",
        },
      });
      return false;
    }
  };

  // Sends a request to server to update the draft page
  async updatePage(callback) {
    if (callback) loadingModal("Loading...");

    const page = {
      id: getParameterByName("id", window.location.href),
      type: this.state.type,
      configurations: {
        comments: this.state.comments,
        rating: this.state.rating,
        anonymously: this.state.anonymously,
      },
      url: this.state.url,
      password: this.state.pass,
    };

    try {
      await axios.patch(
        `/api/new-page/final-step/${getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          page,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      if (callback) callback();
    } catch (e) {
      if (callback) loadingModal();
      this.props.history.push(`/new-page/initial-step`);
    }
  }

  onSubmitButtonClicked = () => {
    if (!this.checkUrlValidation()) return this.url.current.focus();

    this.updatePage(async () => {
      try {
        const pageId = getParameterByName("id", window.location.href);

        const { data } = await axios.post(`/api/new-page/${pageId}`, null, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });

        loadingModal();
        this.props.history.push(
          `/new-page/message?type=private&status=success&url=${data.url}&username=${data.username}`
        );
      } catch (error) {
        loadingModal();
        if (error.response.data.error === "error with contents") {
          this.props.history.push(
            `/new-page/message?type=private&status=error-contents&id=${pageId}`
          );
        } else {
          this.props.history.push(
            `/new-page/message?type=private&status=error`
          );
        }
      }
    });
  };

  onBackButtonClicked() {
    this.updatePage(() => {
      loadingModal();
      this.props.history.push(
        `/new-page/attach-files?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn-text btn-text-big a-11"
          onClick={this.onBackButtonClicked.bind(this)}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>

        <div className="center-content">
          <h3 className="heading-tertiary">
            Do some configurations and choose a url
          </h3>
        </div>

        <div className="page-new__final-step">
          <div className="switches">
            <div className="form__group" className="switches__entity">
              <label>Disable Comments</label>
              <div className="tooltip tooltip-top tooltip--info">
                <a href="#!">
                  <i className="fa fa-question-circle" aria-hidden="true" />
                </a>
                <span className="tooltip__text">
                  lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                  sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adip
                </span>
              </div>
              <button
                className="btn-i btn-i-blue"
                onClick={() => this.onSwitchClicked("comments")}
              >
                <i
                  className={
                    !this.state.comments
                      ? "fa fa-2x fa-toggle-on"
                      : "fa fa-2x fa-toggle-off"
                  }
                  aria-hidden="true"
                />
              </button>
              <input type="hidden" value="false" />
            </div>

            <div className="form__group" className="switches__entity">
              <label>Disable Rating</label>
              <div className="tooltip tooltip-top tooltip--info">
                <a href="#!">
                  <i className="fa fa-question-circle" aria-hidden="true" />
                </a>
                <span className="tooltip__text">
                  lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                  sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adip
                </span>
              </div>
              <button
                className="btn-i btn-i-blue"
                onClick={() => this.onSwitchClicked("rating")}
              >
                <i
                  className={
                    !this.state.rating
                      ? "fa fa-2x fa-toggle-on"
                      : "fa fa-2x fa-toggle-off"
                  }
                  aria-hidden="true"
                />
              </button>
              <input type="hidden" value="false" />
            </div>

            <div className="form__group" className="switches__entity">
              <label>Create This Page Anonymously</label>
              <div className="tooltip tooltip-top tooltip--info">
                <a href="#!">
                  <i className="fa fa-question-circle" aria-hidden="true" />
                </a>
                <span className="tooltip__text">
                  lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                  sit amet, consectetur adiplorem ipsum dolor sit amet,
                  consectetur adip
                </span>
              </div>
              <button
                className="btn-i btn-i-blue"
                onClick={() => this.onSwitchClicked("anonymously")}
              >
                <i
                  className={
                    this.state.anonymously
                      ? "fa fa-2x fa-toggle-on"
                      : "fa fa-2x fa-toggle-off"
                  }
                  aria-hidden="true"
                />
              </button>
              <input type="hidden" value="false" />
            </div>
          </div>

          <div className="form__group url">
            <label htmlFor="url" className="form__label">
              URL
            </label>
            <input
              type="text"
              ref={this.url}
              value={this.state.url || ""}
              className="form__input"
              placeholder="Choose a URL for your page"
              onBlur={() => {
                this.updatePage();
                this.checkUrlValidation();
              }}
              onChange={(e) => {
                this.setState({ url: convertToUrl(e.target.value) }, () => {
                  // check for URL validation on change
                  this.checkUrlValidation();
                });
              }}
            />
            <span
              className={`a-10 ${!this.state.errors.url && "display-none"}`}
            >
              {this.state.errors.url}
            </span>
            <p className="url__display">
              pagher.com/{this.state.username}/{this.state.url}
            </p>
            <div className="url__note">
              <strong>Important note about URL:</strong>
              <p>
                This URL will be for your page, please copy this because the
                only way other persons can view this page is to have this URL.{" "}
                <br /> You should share this URl in order for others to view it.
              </p>
            </div>
          </div>
        </div>

        <div className="center-content">
          <button className="btn btn-blue" onClick={this.onSubmitButtonClicked}>
            Publish
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FinalStepPrivate;
