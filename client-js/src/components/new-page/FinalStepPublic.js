import React, { Component } from "react";
import tagsInput from "tags-input";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";

class FinalStepPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      type: "public",
      comments: "",
      rating: "",
      links: "",
      anonymously: "",
      tags: "",
      classes: {
        comments: "fa fa-2x fa-toggle-off",
        rating: "fa fa-2x fa-toggle-off",
        links: "fa fa-2x fa-toggle-off",
        anonymously: "fa fa-2x fa-toggle-off"
      },
      btnDisabled: true
    };
  }

  componentDidMount() {
    const pageId = getParameterByName("id", window.location.href) || "id";
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`/api/new-page/final-step/${pageId}`, config)
      .then(response => {
        const page = response.data.page;
        this.setState(
          {
            type: page.type,
            comments: page.configurations.comments,
            rating: page.configurations.rating,
            anonymously: page.configurations.anonymously,
            links: page.configurations.links
          },
          () => {
            this.stateChanged("classes");
          }
        );
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=new-page";
        } else {
          this.props.history.push(`/new-page/initial-step`);
        }
      });

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
    const pageId = getParameterByName("id", window.location.href);
    const page = {
      type: "public",
      configurations: {
        comments: this.state.comments,
        rating: this.state.rating,
        links: this.state.links,
        anonymously: this.state.anonymously
      },
      tags: this.state.tags
    };
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(`/api/new-page/final-step/${pageId}`, { page }, config)
      .then(response => {
        callback();
      })
      .catch(response => {
        console.log(response);
        // this.props.history.push(`/new-page/initial-step`);
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
    this.setState({ loading: true });
    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    this.updatePage(() => {
      axios
        .post(`/api/new-page/${pageId}`, null, config)
        .then(response => {
          this.props.history.push(
            `/new-page/message?type=public&status=success&url=${response.data}`
          );
        })
        .catch(error => {
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
      this.props.history.push(
        `/new-page/page-contents?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    });
  }

  onSwithClicked(e) {
    if (e.target.classList.contains("fa-toggle-off")) {
      e.target.classList.remove("fa-toggle-off");
      e.target.classList.add("fa-toggle-on");

      switch (e.target.getAttribute("role")) {
        case "comments":
          this.setState({ comments: false }, () => {
            this.stateChanged();
          });
          break;
        case "rating":
          this.setState({ rating: false }, () => {
            this.stateChanged();
          });
          break;
        case "links":
          this.setState({ links: false }, () => {
            this.stateChanged();
          });
          break;
        case "anonymously":
          this.setState({ anonymously: true }, () => {
            this.stateChanged();
          });
          break;
      }
    } else {
      e.target.classList.remove("fa-toggle-on");
      e.target.classList.add("fa-toggle-off");

      switch (e.target.getAttribute("role")) {
        case "comments":
          this.setState({ comments: true }, () => {
            this.stateChanged();
          });
          break;
        case "rating":
          this.setState({ rating: true }, () => {
            this.stateChanged();
          });
          break;
        case "links":
          this.setState({ links: true }, () => {
            this.stateChanged();
          });
          break;
        case "anonymously":
          this.setState({ anonymously: false }, () => {
            this.stateChanged();
          });
          break;
      }
    }
  }

  // Render the next button, if button get clicked it will render a loading icon
  // instead while loading
  renderButton() {
    if (this.state.loading) {
      return (
        <div>
          <div className="center-content">
            <div className="lds-css ng-scope">
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.onButtonClicked.apply(this);
          }}
          className="btn-normal btn-normal-sm"
          id="publish-button"
          disabled={this.state.btnDisabled}
        >
          Publish
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="new-page-container">
          <ProgressBar width={100} />
          <div className="page-new">
            <button
              className="back-button back-button--new-page"
              onClick={this.onBackButtonClicked.bind(this)}
            >
              <i className="fa fa-arrow-left" aria-hidden="true" /> Back
            </button>
            <div className="center-content">
              <h3 className="heading-tertiary">
                do some configurations and choose some tags
              </h3>
            </div>

            <div className="page-new__final-step">
              <div className="switches">
                <div
                  className="form__group"
                  id="swith-on-off"
                  className="switches__entity"
                >
                  <label>Disable Comments</label>
                  <i
                    className={this.state.classes.comments}
                    role="comments"
                    aria-hidden="true"
                    onClick={this.onSwithClicked.bind(this)}
                  />
                  <input type="hidden" value="false" />
                </div>

                <div
                  className="form__group"
                  id="swith-on-off"
                  className="switches__entity"
                >
                  <label>Disable Rating</label>
                  <i
                    className={this.state.classes.rating}
                    role="rating"
                    aria-hidden="true"
                    onClick={this.onSwithClicked.bind(this)}
                  />
                  <input type="hidden" value="false" />
                </div>

                <div
                  className="form__group"
                  id="swith-on-off"
                  className="switches__entity"
                >
                  <label>Do Not Display Related Pages and Tags</label>
                  <i
                    className={this.state.classes.links}
                    role="links"
                    aria-hidden="true"
                    onClick={this.onSwithClicked.bind(this)}
                  />
                  <input type="hidden" value="false" />
                </div>

                <div
                  className="form__group"
                  id="swith-on-off"
                  className="switches__entity"
                >
                  <label>Create This Page Anonymously</label>
                  <i
                    className={this.state.classes.anonymously}
                    role="anonymously"
                    aria-hidden="true"
                    onClick={this.onSwithClicked.bind(this)}
                  />
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
