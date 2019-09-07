import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import tagsInput from "tags-input";
import axios from "axios";
import { showSnackBar, convertToUrl } from "../../lib/util";
import { ROOT_URL } from "../../lib/keys";
import util from "../../lib/forms";
import sendPageData from "./sendPageData";

class EditPage extends Component {
  state = {
    id: this.props.page._id,
    title: this.props.page.contents.title,
    tags: this.props.page.tags,
    briefDes: this.props.page.contents.briefDes,
    targets: this.props.page.contents.targets,
    body: this.props.page.contents.body,
    type: this.props.page.type,
    comments: this.props.page.configurations.comments,
    rating: this.props.page.configurations.rating,
    tags: this.props.page.tags,
    links: this.props.page.configurations.links,
    anonymously: this.props.page.configurations.anonymously,
    url: this.props.page.url || "",
    usedUrls: this.props.usedUrls,
    btnDisabled: false,
    classes: {
      comments: "",
      rating: "",
      anonymously: "",
      links: ""
    }
  };

  componentDidMount() {
    if (this.state.type === "public") {
      tagsInput(document.querySelector('input[type="tags"]'));

      var tags = document.querySelector("#tags");
      var self = this;
      tags.addEventListener("change", log);
      function log(e) {
        self.setState({ tags: this.value });
        self.checkIfAllOk.apply(self);
      }
    }

    this.switchClasses();
  }

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  checkTitleValidation() {
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
  }

  // Check if the brief description provided by user is valid or not.
  // This will run by onblur and onchange event on briefDes input
  checkBriefDesValidation() {
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
  }

  // Check if the targets provided by user is valid or not.
  // This will run by onblur and onchange event on targets input
  checkTargetsValidation() {
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
  }

  checkIfAllOk() {
    var title = this.state.title;
    var targets = this.state.targets;
    var briefDes = this.state.briefDes;
    var body = this.state.body;
    var tags = this.state.tags;
    var url = this.state.url;

    // for page body, remove all html and extra spaces and then check
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
        util.len(bodyText, 50, 20000) &&
        this.state.tags.split(",").length > 4 &&
        this.state.tags.replace(/,/g, "").length <= 200
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
        util.len(bodyText, 1, 20000) &&
        this.state.url &&
        this.state.url.length > 0 &&
        this.state.usedUrls.indexOf(this.state.url) === -1
      ) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    }
  }

  switchClasses() {
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

  onSwithClicked(e) {
    if (e.target.classList.contains("fa-toggle-off")) {
      e.target.classList.remove("fa-toggle-off");
      e.target.classList.add("fa-toggle-on");

      switch (e.target.getAttribute("role")) {
        case "comments":
          this.setState({ comments: false }, () => {
            this.switchClasses();
          });
          break;
        case "rating":
          this.setState({ rating: false }, () => {
            this.switchClasses();
          });
          break;
        case "links":
          this.setState({ links: false }, () => {
            this.switchClasses();
          });
          break;
        case "anonymously":
          this.setState({ anonymously: true }, () => {
            this.switchClasses();
          });
          break;
      }
    } else {
      e.target.classList.remove("fa-toggle-on");
      e.target.classList.add("fa-toggle-off");

      switch (e.target.getAttribute("role")) {
        case "comments":
          this.setState({ comments: true }, () => {
            this.switchClasses();
          });
          break;
        case "rating":
          this.setState({ rating: true }, () => {
            this.switchClasses();
          });
          break;
        case "links":
          this.setState({ links: true }, () => {
            this.switchClasses();
          });
          break;
        case "anonymously":
          this.setState({ anonymously: false }, () => {
            this.switchClasses();
          });
          break;
      }
    }
  }

  renderConfigurations() {
    if (this.state.type === "public") {
      return (
        <div>
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
            <input
              type="tags"
              className="tags-input"
              id="tags"
              defaultValue={this.props.page.tags}
            />
            <span id="js--tags-error-message" className="display-none" />
          </div>
        </div>
      );
    } else {
      return (
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

          <div className="form__group url">
            <label htmlFor="url" className="form__label">
              URL
            </label>
            <input
              id="url"
              type="text"
              value={this.state.url}
              className="form__input"
              onBlur={e => {}}
              onChange={e => {
                var url = convertToUrl(e.target.value);
                this.setState({ url }, () => {
                  this.checkIfAllOk.apply(this);
                });
              }}
            />
            <span id="js--url-error-message" className="display-none" />
            <p className="url__display">
              pagher.com/{window.location.pathname.split("/")[1]}/{
                this.state.url
              }
            </p>
          </div>
        </div>
      );
    }
  }

  renderContents() {
    const componentThis = this;
    if (this.state.type) {
      return (
        <div>
          <button
            className="back-button back-button--new-page"
            onClick={() => {
              if (this.props.page.type === "public") {
                var url = `/public-pages/${
                  window.location.pathname.split("/")[2]
                }`;
              } else if (this.props.page.type === "private") {
                var url = `/${window.location.pathname.split("/")[1]}/${
                  window.location.pathname.split("/")[2]
                }`;
              }
              window.location = `${url}`;
            }}
          >
            <i className="fa fa-arrow-left" aria-hidden="true" /> Back
          </button>

          <div className="center-content">
            <h3 className="heading-tertiary">Update your page</h3>
          </div>
          <div className="page-new__contents">
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

            {/********************/}
            {this.renderConfigurations.apply(this)}
            {/********************/}

            <div>
              <p className="small-paragraph">
                See more information on what to provide in each input{" "}
                <a href="#" target="_blank">
                  here.
                </a>
              </p>
            </div>
            <div className="center-content">
              <button
                className="btn-normal btn-normal-sm"
                onClick={() => {
                  this.onFormSubmit.apply(this);
                }}
                disabled={this.state.btnDisabled}
              >
                Update
              </button>
            </div>
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

  onFormSubmit() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .put(
        `/api/pages/${this.state.id}`,
        {
          page: {
            username: window.location.pathname.split("/")[1],
            type: this.state.type,
            contents: {
              title: this.state.title,
              briefDes: this.state.briefDes,
              targets: this.state.targets,
              body: this.state.body
            },
            configurations: {
              comments: this.state.comments,
              rating: this.state.rating,
              anonymously: this.state.anonymously,
              links: this.state.links || undefined
            },
            url: this.state.url,
            tags: this.state.tags || null
          }
        },
        config
      )
      .then(response => {
        if (response.data.type === "public") {
          var url = `/public-pages/${response.data.url}`;
        } else if (response.data.type === "private") {
          var url = `/${window.location.pathname.split("/")[1]}/${
            response.data.url
          }`;
        }
        window.location = `${url}`;
      })
      .catch(response => {
        showSnackBar("An unknown error occurred.");
      });
  }

  render() {
    return (
      <div>
        <div className="page-new">{this.renderContents.apply(this)}</div>
      </div>
    );
  }
}

export default sendPageData(EditPage);
