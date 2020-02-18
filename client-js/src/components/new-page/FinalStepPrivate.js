import React, { Component } from "react";
import axios from "axios";
import { getParameterByName, loadingModal } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";
import ChooseUrl from "../partials/ChooseUrl";

class FinalStepPrivate extends Component {
  state = {
    type: "private",
    username: "",
    comments: "",
    rating: "",
    anonymously: "",
    url: "",
    usedUrls: [],
    btnDisabled: true,
    loaded: false
  };

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
        this.setState({
          type: page.type,
          comments: page.configurations.comments,
          rating: page.configurations.rating,
          anonymously: page.configurations.anonymously,
          username: page.author.username,
          url: page.url || "",
          usedUrls: response.data.urls,
          loaded: true
        });
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=new-page";
        } else {
          this.props.history.push(`/new-page/initial-step`);
        }
      });
  }

  onSwithClicked = e => {
    switch (e.target.getAttribute("role")) {
      case "comments":
        this.setState({ comments: !this.state.comments });
        break;
      case "rating":
        this.setState({ rating: !this.state.rating });
        break;
      case "anonymously":
        this.setState({ anonymously: !this.state.anonymously });
        break;
    }
  };

  // Sends a request to server to update the draft page
  updatePage(callback) {
    loadingModal("Loading...");
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

  onSubmitButtonClicked = () => {
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
          loadingModal();
          this.props.history.push(
            `/new-page/message?type=private&status=success&url=${response.data.url}&username=${response.data.username}`
          );
        })
        .catch(error => {
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
        });
    });
  };

  onBackButtonClicked() {
    this.updatePage(() => {
      loadingModal();
      this.props.history.push(
        `/new-page/page-contents?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    });
  }

  renderButton() {
    return (
      <button
        className="btn-normal btn-normal-sm"
        onClick={this.onSubmitButtonClicked}
        disabled={this.state.btnDisabled}
      >
        Publish
      </button>
    );
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
                  <div className="form__group" className="switches__entity">
                    <label>Disable Comments</label>
                    <i
                      className={
                        !this.state.comments
                          ? "fa fa-2x fa-toggle-on"
                          : "fa fa-2x fa-toggle-off"
                      }
                      role="comments"
                      aria-hidden="true"
                      onClick={this.onSwithClicked}
                    />
                    <input type="hidden" value="false" />
                  </div>

                  <div className="form__group" className="switches__entity">
                    <label>Disable Rating</label>
                    <i
                      className={
                        !this.state.rating
                          ? "fa fa-2x fa-toggle-on"
                          : "fa fa-2x fa-toggle-off"
                      }
                      role="rating"
                      aria-hidden="true"
                      onClick={this.onSwithClicked}
                    />
                    <input type="hidden" value="false" />
                  </div>

                  <div className="form__group" className="switches__entity">
                    <label>Create This Page Anonymously</label>
                    <i
                      className={
                        this.state.anonymously
                          ? "fa fa-2x fa-toggle-on"
                          : "fa fa-2x fa-toggle-off"
                      }
                      role="anonymously"
                      aria-hidden="true"
                      onClick={this.onSwithClicked}
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
                  <ChooseUrl
                    url={this.state.url}
                    username={this.state.username}
                    usedUrls={this.state.usedUrls}
                    onError={() => {
                      this.setState({ btnDisabled: true });
                    }}
                    onSuccess={url => {
                      this.setState({ btnDisabled: false, url });
                    }}
                  />
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

export default FinalStepPrivate;
