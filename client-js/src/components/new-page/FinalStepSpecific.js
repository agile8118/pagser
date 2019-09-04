import React, { Component } from "react";
import axios from "axios";
import util from "../../lib/forms";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName, convertToUrl } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";

class FinalStepSpecific extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      type: "specific",
      username: "",
      comments: "",
      rating: "",
      anonymously: "",
      url: "",
      classes: {
        comments: "fa fa-2x fa-toggle-off",
        rating: "fa fa-2x fa-toggle-off",
        anonymously: "fa fa-2x fa-toggle-off"
      },
      btnDisabled: true,
      loaded: false
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
            username: page.author.username,
            url: page.url || "",
            usedUrls: response.data.urls,
            loaded: true
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
  }

  stateChanged() {
    // decide wether the publish button should be disabled or not
    var urlError = document.querySelector("#js--tags-url-error-message");
    if (
      this.state.url &&
      this.state.url.length > 0 &&
      this.state.usedUrls.indexOf(this.state.url) === -1
    ) {
      this.setState({ btnDisabled: false });
      urlError.innerText = "";
      urlError.classList.add("display-none");
    } else if (this.state.usedUrls.indexOf(this.state.url) !== -1) {
      this.setState({ btnDisabled: true });
      urlError.innerText = `You have already used "${
        this.state.url
      }" url, choose something else.`;
      urlError.classList.remove("display-none");
    } else {
      this.setState({ btnDisabled: true });
    }

    var classes = {};
    if (this.state.comments === true) {
      classes.comments = "fa fa-2x fa-toggle-off";
    } else {
      classes.comments = "fa fa-2x fa-toggle-on";
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

  updatePage(callback) {
    const page = {
      id: getParameterByName("id", window.location.href),
      type: this.state.type,
      configurations: {
        comments: this.state.comments,
        rating: this.state.rating,
        anonymously: this.state.anonymously
      },
      url: this.state.url,
      password: this.state.pass
    };
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(
        `/api/new-page/final-step/${getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          page
        },
        config
      )
      .then(response => {
        callback();
      })
      .catch(response => {
        this.props.history.push(`/new-page/initial-step`);
      });
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
            `/new-page/message?type=specific&status=success&url=${
              response.data.url
            }&username=${response.data.username}`
          );
        })
        .catch(error => {
          if (error.response.data.error === "error with contents") {
            this.props.history.push(
              `/new-page/message?type=specific&status=error-contents&id=${pageId}`
            );
          } else {
            this.props.history.push(
              `/new-page/message?type=specific&status=error`
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
          className="btn-normal btn-normal-sm"
          onClick={() => {
            this.onButtonClicked.apply(this);
          }}
          id="publish-button"
          disabled={this.state.btnDisabled}
        >
          Publish
        </button>
      );
    }
  }

  render() {
    if (this.state.loaded) {
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
                  do some configurations and choose a url
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

                <div>
                  <p className="small-paragraph">
                    Please read{" "}
                    <a href="#" target="_blank">
                      this
                    </a>{" "}
                    quick guide before you change any of the configurations.
                  </p>
                </div>

                <div className="form__group url">
                  <label htmlFor="url" className="form__label">
                    URL
                  </label>
                  <input
                    id="url"
                    type="text"
                    value={this.state.url}
                    className="form__input"
                    onBlur={e => {
                      this.stateChanged("update");
                    }}
                    onChange={e => {
                      var url = convertToUrl(e.target.value);
                      this.setState({ url });
                    }}
                  />
                  <span
                    id="js--tags-url-error-message"
                    className="display-none"
                  />
                  <p className="url__display">
                    pagher.com/{this.state.username}/{this.state.url}
                  </p>
                  <div className="url__note">
                    <strong>Important note about URL:</strong>
                    <p>
                      This URL will be for your page, please copy this becasue
                      the only way other persons can view this page is to have
                      this URL. <br /> You should share this URl in order for
                      others to view it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="center-content">{this.renderButton()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="new-page-container">
            <ProgressBar width={100} />
            <div className="page-new">
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
          </div>
        </div>
      );
    }
  }
}

export default FinalStepSpecific;
