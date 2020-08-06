import React, { Component } from "react";
import tagsInput from "tags-input";
import axios from "axios";
import { getParameterByName, loadingModal } from "../../lib/util";

class FinalStepPublic extends Component {
  state = {
    type: "public",
    comments: this.props.comments,
    rating: this.props.rating,
    links: this.props.links,
    anonymously: this.props.anonymously,
    tags: this.props.tags,
    errors: {
      tags: null,
    },
  };

  async componentDidMount() {
    // To fix width issue client-js/node_modules/tags-input/tags-input.js and in setInputWidth
    // function change the value to a higher value (5 -> 10)
    tagsInput(document.querySelector('input[type="tags"]'));

    const self = this;
    document.querySelector("#tags").addEventListener("change", function () {
      self.setState({ tags: this.value }, () => {
        self.updatePage();
        self.checkTagsValidation();
      });
    });
  }

  async updatePage(callback) {
    if (callback) loadingModal("Loading...");

    try {
      const page = {
        type: "public",
        configurations: {
          comments: this.state.comments,
          rating: this.state.rating,
          links: this.state.links,
          anonymously: this.state.anonymously,
        },
        tags: this.state.tags,
      };

      await axios.patch(
        `/api/new-page/final-step/${getParameterByName(
          "id",
          window.location.href
        )}`,
        { page },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (callback) callback();
    } catch (e) {
      loadingModal();
      this.props.history.push(`/new-page/initial-step`);
    }
  }

  // Check if the tags are valid
  checkTagsValidation = () => {
    if (this.state.tags.split(",").length < 5) {
      this.setState({
        errors: {
          ...this.state.errors,
          tags: "Please choose at least 5 tags",
        },
      });
      return false;
    }

    if (this.state.tags.replace(/,/g, "").length >= 200) {
      this.setState({
        errors: {
          ...this.state.errors,
          tags: "Tags must be less than 200 characters",
        },
      });
      return false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        tags: null,
      },
    });
    return true;
  };

  // Toggle each switch button
  onSwitchClicked(role) {
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
      case "links":
        this.setState({ links: !this.state.links }, () => {
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
  }

  onBackButtonClicked = () => {
    this.updatePage(() => {
      loadingModal();
      this.props.history.push(
        `/new-page/attach-files?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    });
  };

  onPublishButtonClicked = () => {
    if (!this.checkTagsValidation())
      return document.querySelector("#tags").focus();

    this.updatePage(async () => {
      try {
        const pageId = getParameterByName("id", window.location.href);

        await axios.post(`/api/new-page/${pageId}`, null, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });

        loadingModal();
        this.props.history.push(
          `/new-page/message?type=public&status=success&url=${response.data}`
        );
      } catch (e) {
        loadingModal();
        if (error.response.data.error === "error with contents") {
          this.props.history.push(
            `/new-page/message?type=public&status=error-contents&id=${pageId}`
          );
        } else {
          this.props.history.push(`/new-page/message?type=public&status=error`);
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn-text btn-text-big a-11"
          onClick={this.onBackButtonClicked}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>
        <div className="center-content">
          <h3 className="heading-tertiary">
            Do some configurations and choose some tags
          </h3>
        </div>

        <div className="page-new__final-step">
          <div className="switches">
            <div className="form__group" className="switches__entity">
              <label>Disable Comments</label>
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
              <label>Do Not Display Related Pages and Tags</label>
              <button
                className="btn-i btn-i-blue"
                onClick={() => this.onSwitchClicked("links")}
              >
                <i
                  className={
                    !this.state.links
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
          <div className="form__group">
            <label className="form__label" htmlFor="tags">
              Tags
            </label>
            <input
              type="tags"
              className="tags-input"
              id="tags"
              defaultValue={this.state.tags}
            />
            <span
              className={`a-10 ${!this.state.errors.tags && "display-none"}`}
            >
              {this.state.errors.tags}
            </span>
          </div>

          <div className="margin-top-1">
            <p className="small-paragraph">
              Please read{" "}
              <a href="#" target="_blank">
                this
              </a>{" "}
              quick guide before you change any of the configurations and choose
              any tags.
            </p>
          </div>
        </div>

        <div className="center-content">
          <button
            onClick={this.onPublishButtonClicked}
            className="btn btn-blue"
          >
            Publish
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FinalStepPublic;
