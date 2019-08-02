import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName } from "../../lib/util";
import util from "../../lib/forms";
import ProgressBar from "../partials/progress-bar";

class PageContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      title: "",
      briefDes: "",
      targets: "",
      body: "",
      btnDisabled: true,
      loading: false
    };
  }

  componentDidMount() {
    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    // Get the current page data from server and set those data in inputs
    axios
      .get(`/api/new-page/page-contents/${pageId}`, config)
      .then(response => {
        this.setState(
          {
            body: response.data.page.contents.body,
            briefDes: response.data.page.contents.briefDes,
            targets: response.data.page.contents.targets,
            title: response.data.page.contents.title,
            type: response.data.page.type
          },
          () => {
            this.checkIfAllOk.apply(this);
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

  // This will send the current page data to server for saving.
  // This will run when user wants to change the current stage
  // either by going to the next or previous stage
  updatePage(to) {
    const pageId = getParameterByName("id", window.location.href);
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(
        `/api/new-page/page-contents/${pageId}`,
        {
          page: {
            contents: {
              title: this.state.title,
              briefDes: this.state.briefDes,
              body: this.state.body,
              targets: this.state.targets
            }
          }
        },
        config
      )
      .then(response => {
        this.props.history.push(to);
      })
      .catch(response => {
        this.props.history.push(`/new-page/initial-step`);
      });
  }

  onBackButtonClicked() {
    this.updatePage(
      `/new-page/initial-step?id=${getParameterByName(
        "id",
        window.location.href
      )}`
    );
  }

  onNextButtonClicked() {
    this.setState({ loading: true });
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
  }

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  checkTitleValidation() {
    switch (this.state.type) {
      case "specific":
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
  }

  // Check if the brief description provided by user is valid or not.
  // This will run by onblur and onchange event on briefDes input
  checkBriefDesValidation() {
    switch (this.state.type) {
      case "specific":
        if (!util.len(this.state.briefDes, 1, 300)) {
          util.inputError(
            "briefDes",
            "Brief description cannot be blank and should be less that 300 characters",
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
  }

  // Check if the targets provided by user is valid or not.
  // This will run by onblur and onchange event on targets input
  checkTargetsValidation() {
    switch (this.state.type) {
      case "specific":
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
  }

  // Check if the Page Body provided by user is valid or not.
  // This will run by onchange event on TinyMCE input
  checkPageBodyValidation() {
    // Remove all html and extra spaces and then check
    var html = this.state.body;
    var div = document.createElement("div");
    div.innerHTML = html;
    var bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    switch (this.state.type) {
      case "specific":
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
  }

  checkIfAllOk() {
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

    if (this.state.type === "specific") {
      if (
        util.len(title, 1, 50) &&
        util.len(briefDes, 1, 300) &&
        util.len(targets, 0, 300) &&
        util.len(bodyText, 1, 200000)
      ) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
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
            this.onNextButtonClicked.apply(this);
          }}
          disabled={this.state.btnDisabled}
        >
          Next
        </button>
      );
    }
  }

  renderContents() {
    const componentThis = this;
    if (this.state.type) {
      return (
        <div>
          {/* Back button */}
          <button
            className="back-button back-button--new-page"
            onClick={this.onBackButtonClicked.bind(this)}
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
              </label>
              <input
                id="titleInput"
                className="form__input"
                type="text"
                value={this.state.title}
                onChange={e => {
                  this.setState({ title: e.target.value }, () => {
                    this.checkTitleValidation.apply(this);
                  });
                }}
                onBlur={e => {
                  this.checkTitleValidation.apply(this);
                  this.checkIfAllOk.apply(this);
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
                onChange={e => {
                  this.setState({ briefDes: e.target.value }, () => {
                    this.checkBriefDesValidation.apply(this);
                  });
                }}
                onBlur={e => {
                  this.checkBriefDesValidation.apply(this);
                  this.checkIfAllOk.apply(this);
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
                onChange={e => {
                  this.setState({ targets: e.target.value }, () => {
                    this.checkTargetsValidation.apply(this);
                  });
                }}
                onBlur={e => {
                  this.checkTargetsValidation.apply(this);
                  this.checkIfAllOk.apply(this);
                }}
                placeholder="Describe briefly who this page is for"
              />
              <div className="form__input--message">
                <span />
              </div>
            </div>

            {/* Page Body input */}
            <div className="form__group" id="body">
              <label className="form__label">Page Body</label>
              <TinyMCE
                key={componentThis.state.type}
                content={componentThis.state.body}
                config={{
                  skin_url: "/tinymce-skin",
                  plugins:
                    "preview link lists advlist codesample image imagetools",
                  toolbar:
                    "bold italic underline | link codesample image | alignleft aligncenter alignright | bullist numlist | outdent indent",
                  menubar: false,
                  statusbar: false,
                  image_dimensions: false,
                  imagetools_toolbar:
                    "rotateleft rotateright | flipv fliph | imageoptions",
                  height: 350
                }}
                onChange={e => {
                  this.setState({ body: e.target.getContent() }, () => {
                    this.checkPageBodyValidation.apply(this);
                    this.checkIfAllOk.apply(this);
                  });
                }}
                onBlur={e => {}}
              />
              <div className="form__input--message">
                <span />
              </div>
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
    }
  }

  render() {
    return (
      <div>
        <ProgressBar width={50} />
        <div className="page-new">{this.renderContents.apply(this)}</div>
      </div>
    );
  }
}

export default PageContents;
