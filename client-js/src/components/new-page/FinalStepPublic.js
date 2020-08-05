import React, { Component } from "react";
import tagsInput from "tags-input";
import axios from "axios";
import { getParameterByName, loadingModal } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";
import Loading from "../partials/Loading";

class FinalStepPublic extends Component {
  state = {
    type: "public",
    comments: "",
    rating: "",
    links: "",
    anonymously: "",
    tags: "",
    btnDisabled: true,
  };

  componentDidMount() {
    const pageId = getParameterByName("id", window.location.href) || "id";
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`/api/new-page/final-step/${pageId}`, config)
      .then((response) => {
        const page = response.data.page;
        this.setState(
          {
            type: page.type,
            comments: page.configurations.comments,
            rating: page.configurations.rating,
            anonymously: page.configurations.anonymously,
            links: page.configurations.links,
          },
          () => {
            this.stateChanged("classes");
          }
        );
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=new-page";
        } else {
          this.props.history.push(`/new-page/initial-step`);
        }
      });

    // To fix width issue client-js/node_modules/tags-input/tags-input.js and in setInputWidth
    // function change the value to a higher value (5 -> 10)
    tagsInput(document.querySelector('input[type="tags"]'));

    var tags = document.querySelector("#tags");
    tags.addEventListener("change", log);
    var self = this;
    function log(e) {
      self.setState({ tags: this.value }, () => {
        self.stateChanged();
      });
    }
  }

  updatePage(callback) {
    loadingModal("Loading...");
    const pageId = getParameterByName("id", window.location.href);
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
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    axios
      .patch(`/api/new-page/final-step/${pageId}`, { page }, config)
      .then((response) => {
        callback();
      })
      .catch((response) => {
        loadingModal();
        this.props.history.push(`/new-page/initial-step`);
      });
  }

  stateChanged() {
    const tags = this.state.tags.split(",");
    const tagError = document.querySelector("#js--tags-url-error-message");
    if (tags.length > 4 && this.state.tags.replace(/,/g, "").length <= 200) {
      this.setState({ btnDisabled: false });
      tagError.innerText = "";
      tagError.classList.add("display-none");
    } else if (this.state.tags.replace(/,/g, "").length > 200) {
      tagError.innerText = "Tags must be less than 200 characters";
      tagError.classList.remove("display-none");
      this.setState({ btnDisabled: true });
    } else {
      this.setState({ btnDisabled: true });
    }
    var classes = {};
    if (this.state.comments === true) {
      classes.comments = "fa fa-2x fa-toggle-off";
    } else {
      classes.comments = "fa fa-2x fa-toggle-on";
    }

    if (this.state.links === true) {
      classes.links = "fa fa-2x fa-toggle-off";
    } else {
      classes.links = "fa fa-2x fa-toggle-on";
    }

    if (this.state.anonymously === true) {
      classes.anonymously = "fa fa-2x fa-toggle-on";
    } else {
      classes.anonymously = "fa fa-2x fa-toggle-off";
    }

    if (this.state.rating === true) {
      classes.rating = "fa fa-2x fa-toggle-off";
    } else {
      classes.rating = "fa fa-2x fa-toggle-on";
    }
    this.setState({ classes });
  }

  onButtonClicked() {
    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    this.updatePage(() => {
      axios
        .post(`/api/new-page/${pageId}`, null, config)
        .then((response) => {
          loadingModal();
          this.props.history.push(
            `/new-page/message?type=public&status=success&url=${response.data}`
          );
        })
        .catch((error) => {
          loadingModal();
          if (error.response.data.error === "error with contents") {
            this.props.history.push(
              `/new-page/message?type=public&status=error-contents&id=${pageId}`
            );
          } else {
            this.props.history.push(
              `/new-page/message?type=public&status=error`
            );
          }
        });
    });
  }

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

  onSwitchClicked(role) {
    switch (role) {
      case "comments":
        this.setState({ comments: !this.state.comments });
        break;
      case "rating":
        this.setState({ rating: !this.state.rating });
        break;
      case "links":
        this.setState({ links: !this.state.links });
        break;
      case "anonymously":
        this.setState({ anonymously: !this.state.anonymously });
        break;
    }
  }

  renderButton() {
    return (
      <button
        onClick={() => {
          this.onButtonClicked.apply(this);
        }}
        className="btn btn-blue"
        id="publish-button"
        disabled={this.state.btnDisabled}
      >
        Publish
      </button>
    );
  }

  render() {
    let loadingClass = "";
    let contentClass = "";
    if (this.state.rating === false || this.state.rating === true) {
      loadingClass = "display-none";
      contentClass = "";
    } else {
      contentClass = "display-none";
      loadingClass = "";
    }
    return (
      <div id="new-page-container">
        <ProgressBar width={100} />
        <div className="page-new">
          <div className={`center-content ${loadingClass}`}>
            <Loading />
          </div>
          <div className={contentClass}>
            <button
              className="btn-text btn-text-big a-11"
              onClick={this.onBackButtonClicked.bind(this)}
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
                        this.state.comments
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
                        this.state.rating
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
                        this.state.links
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
                  Tags <span>(Minimum to 5)</span>
                </label>
                <input type="tags" className="tags-input" id="tags" />
                <span id="js--tags-url-error-message" className="display-none">
                  Tags must be less than 200 characters
                </span>
              </div>

              <div>
                <p className="small-paragraph">
                  Please read{" "}
                  <a href="#" target="_blank">
                    this
                  </a>{" "}
                  quick guide before you change any of the configurations and
                  choose any tags.
                </p>
              </div>
            </div>

            <div className="center-content">{this.renderButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalStepPublic;
