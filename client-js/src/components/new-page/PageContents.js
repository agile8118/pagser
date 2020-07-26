import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName, loadingModal } from "../../lib/util";
import util from "../../lib/forms";
import ProgressBar from "../partials/ProgressBar";
import Loading from "../partials/Loading";

class PageContents extends Component {
  state = {
    type: null,
    title: "",
    briefDes: "",
    targets: "",
    body: "",
    btnDisabled: true,
    saved: true,
  };

  componentDidMount() {
    // Send a request to server automatically to save the changes, we won't send a request
    // if the changes are already saved
    setInterval(() => {
      if (!this.state.saved) this.updatePage();
    }, 5000);

    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // Get the current page data from server and set those data in inputs
    axios
      .get(`/api/new-page/page-contents/${pageId}`, config)
      .then((response) => {
        this.setState(
          {
            body: response.data.page.contents.body,
            briefDes: response.data.page.contents.briefDes,
            targets: response.data.page.contents.targets,
            title: response.data.page.contents.title,
            type: response.data.page.type,
          },
          () => {
            this.checkIfAllOk();
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
  }

  componentWillUpdate() {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      if (!this.state.saved)
        return (e.returnValue =
          "Unsaved changes, are you sure you want to close?");
    });
  }

  // This will send the current page data to server for saving.
  // This will run when user wants to change the current stage
  // either by going to the next or previous stage
  async updatePage(to) {
    if (to) loadingModal("Loading...");

    try {
      await axios.patch(
        `/api/new-page/page-contents/${getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          page: {
            contents: {
              title: this.state.title,
              briefDes: this.state.briefDes,
              body: this.state.body,
              targets: this.state.targets,
            },
          },
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      this.setState({ saved: true });

      if (to) {
        loadingModal();
        this.props.history.push(to);
      }
    } catch (e) {
      if (to) {
        loadingModal();
        this.props.history.push(`/new-page/initial-step`);
      }
    }
  }

  onBackButtonClicked = () => {
    this.updatePage(
      `/new-page/initial-step?id=${getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  onNextButtonClicked = () => {
    const type = getParameterByName("type", window.location.href);
    if (type) {
      this.updatePage(
        `/new-page/final-step?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    } else {
      this.updatePage(
        `/new-page/final-step?id=${getParameterByName(
          "id",
          window.location.href
        )}?type=${this.state.type}`
      );
    }
  };

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  checkTitleValidation = () => {
    switch (this.state.type) {
      case "private":
        if (!util.len(this.state.title, 1, 50)) {
          util.inputError(
            "title",
            "Title cannot be blank and should be less that 50 characters",
            2
          );
        } else {
          util.inputNone("title", 2);
        }
        break;
      case "public":
        if (!util.len(this.state.title, 15, 50)) {
          util.inputError(
            "title",
            "Title must be greater that 15 and less that 50 characters",
            2
          );
        } else {
          util.inputNone("title", 2);
        }
        break;
    }
  };

  // Check if the brief description provided by user is valid or not.
  // This will run by onblur and onchange event on briefDes input
  checkBriefDesValidation = () => {
    switch (this.state.type) {
      case "private":
        if (!util.len(this.state.briefDes, 0, 300)) {
          util.inputError(
            "briefDes",
            "Brief description should be less that 300 characters",
            2
          );
        } else {
          util.inputNone("briefDes", 2);
        }
        break;
      case "public":
        if (!util.len(this.state.briefDes, 30, 300)) {
          util.inputError(
            "briefDes",
            "Brief description must be greater that 30 and less that 300 characters",
            2
          );
        } else {
          util.inputNone("briefDes", 2);
        }
        break;
    }
  };

  // Check if the targets provided by user is valid or not.
  // This will run by onblur and onchange event on targets input
  checkTargetsValidation = () => {
    switch (this.state.type) {
      case "private":
        if (!util.len(this.state.targets, 0, 300)) {
          util.inputError(
            "targets",
            "Define targets in less that 300 characters",
            2
          );
        } else {
          util.inputNone("targets", 2);
        }
        break;
      case "public":
        if (!util.len(this.state.targets, 20, 300)) {
          util.inputError(
            "targets",
            "Define targets in greater that 20 and less that 300 characters",
            2
          );
        } else {
          util.inputNone("targets", 2);
        }
        break;
    }
  };

  // Check if the Page Body provided by user is valid or not.
  // This will run by onchange event on TinyMCE input
  checkPageBodyValidation = () => {
    // Remove all html and extra spaces and then check
    var html = this.state.body;
    var div = document.createElement("div");
    div.innerHTML = html;
    var bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    switch (this.state.type) {
      case "private":
        if (
          !util.len(bodyText, 1, 200000) &&
          document.querySelector(".mce-tinymce")
        ) {
          util.inputError(
            "body",
            "Page contents cannot be blank and should be less than 200000 charecters",
            3
          );
          document.querySelector(".mce-tinymce").style.border =
            "1px solid #e74c3c";
        } else if (document.querySelector(".mce-tinymce")) {
          document.querySelector(".mce-tinymce").style.border =
            "1px solid #CACACA";
          util.inputNone("body", 3);
        }
        break;
      case "public":
        if (
          !util.len(bodyText, 50, 20000) &&
          document.querySelector(".mce-tinymce")
        ) {
          util.inputError(
            "body",
            "Page contents must be between 50 and 20000 charecters",
            3
          );
          document.querySelector(".mce-tinymce").style.border =
            "1px solid #e74c3c";
        } else if (document.querySelector(".mce-tinymce")) {
          document.querySelector(".mce-tinymce").style.border =
            "1px solid #CACACA";
          util.inputNone("body", 3);
        }
        break;
    }
  };

  checkIfAllOk = () => {
    var title = this.state.title;
    var targets = this.state.targets;
    var briefDes = this.state.briefDes;
    var body = this.state.body;

    // For page body, remove all html and extra spaces and then check
    var html = this.state.body;
    var div = document.createElement("div");
    div.innerHTML = html;
    var bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    if (this.state.type === "public") {
      if (
        util.len(title, 15, 50) &&
        util.len(briefDes, 30, 300) &&
        util.len(targets, 20, 300) &&
        util.len(bodyText, 50, 20000)
      ) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    }

    if (this.state.type === "private") {
      if (
        util.len(title, 1, 50) &&
        util.len(briefDes, 0, 300) &&
        util.len(targets, 0, 300) &&
        util.len(bodyText, 1, 200000)
      ) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    }
  };

  // Render the next button, if button get clicked it will render a loading icon
  // instead while loading
  renderButton() {
    return (
      <button
        className="btn btn-blue"
        onClick={() => {
          this.onNextButtonClicked();
        }}
        disabled={this.state.btnDisabled}
      >
        Next
      </button>
    );
  }

  renderContents() {
    const componentThis = this;
    let requiredLabel = "";
    if (this.state.type === "private") {
      requiredLabel = <span className="form__label--required-label">*</span>;
    }
    if (this.state.type) {
      return (
        <div>
          {/* Back button */}
          <button
            className="btn-text btn-text-big a-11"
            onClick={this.onBackButtonClicked}
          >
            <i className="fa fa-arrow-left" aria-hidden="true" /> Back
          </button>

          {/* Stage title */}
          <div className="center-content">
            <h3 className="heading-tertiary">Fill out your page content</h3>
          </div>

          <div className="page-new__contents">
            {/* Title input */}
            <div className="form__group" id="title">
              <label htmlFor="titleInput" className="form__label">
                Title
                {requiredLabel}
              </label>
              <input
                id="titleInput"
                className="form__input"
                type="text"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({ title: e.target.value, saved: false }, () => {
                    this.checkTitleValidation();
                  });
                }}
                onBlur={(e) => {
                  this.checkTitleValidation();
                  this.checkIfAllOk();
                }}
                placeholder="Choose a title for your page"
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            {/* Brief Description input */}
            <div className="form__group" id="briefDes">
              <label htmlFor="briefDesInput" className="form__label">
                Brief Description
              </label>
              <textarea
                id="briefDesInput"
                className="form__textarea"
                rows="3"
                value={this.state.briefDes}
                onChange={(e) => {
                  this.setState(
                    { briefDes: e.target.value, saved: false },
                    () => {
                      this.checkBriefDesValidation();
                    }
                  );
                }}
                onBlur={(e) => {
                  this.checkBriefDesValidation();
                  this.checkIfAllOk();
                }}
                placeholder="Describe briefly what your page is all about"
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            {/* Targets input */}
            <div className="form__group" id="targets">
              <label htmlFor="targetsInput" className="form__label">
                Targets
              </label>
              <textarea
                id="targetsInput"
                className="form__textarea"
                rows="3"
                value={this.state.targets}
                onChange={(e) => {
                  this.setState(
                    { targets: e.target.value, saved: false },
                    () => {
                      this.checkTargetsValidation();
                    }
                  );
                }}
                onBlur={(e) => {
                  this.checkTargetsValidation();
                  this.checkIfAllOk();
                }}
                placeholder="Describe briefly who this page is for"
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            {/* Page Body input */}
            <div className="form__group" id="body">
              <label className="form__label">Page Body{requiredLabel}</label>
              <TinyMCE
                key={componentThis.state.type}
                content={componentThis.state.body}
                config={{
                  skin_url: "/tinymce-skin",
                  plugins:
                    "preview link lists advlist codesample image imagetools",
                  toolbar:
                    "formatselect | bold italic underline | link codesample image | alignleft aligncenter alignright | bullist numlist | outdent indent",
                  block_formats: "Paragraph=p; Header=h2;",
                  menubar: false,
                  statusbar: false,
                  image_dimensions: false,
                  imagetools_toolbar:
                    "rotateleft rotateright | flipv fliph | imageoptions",
                  height: 350,
                }}
                onInit={() => {
                  if (localStorage.getItem("theme") === "dark") {
                    document.querySelector(
                      "iframe"
                    ).contentDocument.children[0].children[1].style.background =
                      "#555";
                    document.querySelector(
                      "iframe"
                    ).contentDocument.children[0].children[1].style.color =
                      "#fff";
                  }
                }}
                onChange={(e) => {
                  this.setState(
                    { body: e.target.getContent(), saved: false },
                    () => {
                      this.checkPageBodyValidation();
                      this.checkIfAllOk();
                    }
                  );
                }}
                onBlur={(e) => {}}
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            <div>
              {!this.state.saved ? (
                <p>Saving changes...</p>
              ) : (
                <p>Changes saved!</p>
              )}
            </div>

            {/* Read more link */}
            <div>
              <p className="small-paragraph">
                See more information on what to provide in each input{" "}
                <a href="#" className="btn-link" target="_blank">
                  here.
                </a>
              </p>
            </div>

            {/* Next button */}
            <div className="center-content">{this.renderButton()}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="center-content">
          <Loading />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <ProgressBar width={50} />
        <div className="page-new">{this.renderContents()}</div>
      </div>
    );
  }
}

export default PageContents;
