import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName, loadingModal, showSnackBar } from "../../lib/util";
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
    saved: null,
    errors: {
      title: "",
      briefDes: "",
      targets: "",
      body: "",
    },
  };

  title = React.createRef();
  targets = React.createRef();
  briefDes = React.createRef();

  componentDidMount() {
    // Send a request to server automatically to save the changes, we won't send a request
    // if the changes are already saved
    setInterval(() => {
      if (this.state.saved === false) this.updatePage();
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
        this.setState({
          body: response.data.page.contents.body,
          briefDes: response.data.page.contents.briefDes,
          targets: response.data.page.contents.targets,
          title: response.data.page.contents.title,
          type: response.data.page.type,
        });
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
      console.log("OH");

      if (this.state.saved === false)
        return (e.returnValue =
          "Unsaved changes, are you sure you want to close?");
    });
  }

  // This will send the current page data to server for saving.
  // This will run when user wants to change the current stage
  // either by going to the next or previous stage
  async updatePage(to, successMessage) {
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

      if (successMessage) showSnackBar(successMessage, "success");

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
    if (this.checkIfAllOk()) {
      this.updatePage(
        `/new-page/page-thumbnail?id=${getParameterByName(
          "id",
          window.location.href
        )}`
      );
    } else {
      if (!this.checkTitleValidation()) {
        this.title.current.focus();
        return;
      }

      if (!this.checkBriefDesValidation()) {
        this.briefDes.current.focus();
        return;
      }

      if (!this.checkTargetsValidation()) {
        this.targets.current.focus();
        return;
      }

      if (!this.checkPageBodyValidation()) {
        document.getElementById("targetsInput").scrollIntoView();
        document.querySelector("iframe").contentWindow.document.body.focus();
      }
    }
  };

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  checkTitleValidation = () => {
    const minLen = this.state.type === "public" ? 15 : 1;

    if (this.state.title.length < minLen) {
      this.setState({
        errors: {
          ...this.state.errors,
          title:
            this.state.type === "public"
              ? `Title should be more than ${minLen} characters`
              : "Title cannot be be blank",
        },
      });
      return false;
    }

    if (this.state.title.length > 50) {
      this.setState({
        errors: {
          ...this.state.errors,
          title: "Title should be less than 50 characters",
        },
      });
      return false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        title: "",
      },
    });

    return true;
  };

  // Check if the brief description provided by user is valid or not.
  // This will run by onblur and onchange event on briefDes input
  checkBriefDesValidation = () => {
    const minLen = this.state.type === "public" ? 30 : 0;

    if (this.state.briefDes.length < minLen) {
      this.setState({
        errors: {
          ...this.state.errors,
          briefDes:
            this.state.type === "public"
              ? `Brief description should be more than ${minLen} characters`
              : "",
        },
      });
      return false;
    }

    if (this.state.briefDes.length > 300) {
      this.setState({
        errors: {
          ...this.state.errors,
          briefDes: "Brief description should be less than 300 characters",
        },
      });
      return false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        briefDes: "",
      },
    });

    return true;
  };

  // Check if the targets provided by user is valid or not.
  // This will run by onblur and onchange event on targets input
  checkTargetsValidation = () => {
    const minLen = this.state.type === "public" ? 20 : 0;

    if (this.state.targets.length < minLen) {
      this.setState({
        errors: {
          ...this.state.errors,
          targets:
            this.state.type === "public"
              ? `Targets should be more than ${minLen} characters`
              : "",
        },
      });
      return false;
    }

    if (this.state.targets.length > 300) {
      this.setState({
        errors: {
          ...this.state.errors,
          targets: "Targets should be less than 300 characters",
        },
      });
      return false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        targets: "",
      },
    });

    return true;
  };

  // Check if the Page Body provided by user is valid or not.
  // This will run by onchange event on TinyMCE input
  checkPageBodyValidation = () => {
    // Remove all html and extra spaces and then check
    const html = this.state.body;
    let div = document.createElement("div");
    div.innerHTML = html;
    let bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    const minLen = this.state.type === "public" ? 50 : 0;

    if (bodyText.length < minLen && document.querySelector(".mce-tinymce")) {
      document.querySelector(".mce-tinymce").style.border = "1px solid #e74c3c";
      this.setState({
        errors: {
          ...this.state.errors,
          body:
            this.state.type === "public"
              ? `Body should be more than ${minLen} characters`
              : "Body cannot be blank",
        },
      });
      return false;
    }

    if (bodyText.length > 20000 && document.querySelector(".mce-tinymce")) {
      document.querySelector(".mce-tinymce").style.border = "1px solid #e74c3c";
      this.setState({
        errors: {
          ...this.state.errors,
          body: "Body should be less than 20000 characters",
        },
      });
      return false;
    }

    if (document.querySelector(".mce-tinymce")) {
      document.querySelector(".mce-tinymce").style.border = "1px solid #CACACA";
      this.setState({
        errors: {
          ...this.state.errors,
          body: "",
        },
      });
      return true;
    }

    return false;
  };

  // Return true or false to indicate if all the inputs are valid or not
  checkIfAllOk = () => {
    const title = this.state.title;
    const targets = this.state.targets;
    const briefDes = this.state.briefDes;

    // For page body, remove all html and extra spaces and then check
    const html = this.state.body;
    let div = document.createElement("div");
    div.innerHTML = html;
    let bodyText = div.textContent || div.innerText || "";
    bodyText = bodyText.replace(/\s+/g, " ").trim();

    if (this.state.type === "public") {
      if (
        util.len(title, 15, 50) &&
        util.len(briefDes, 30, 300) &&
        util.len(targets, 20, 300) &&
        util.len(bodyText, 50, 20000)
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (this.state.type === "private") {
      if (
        util.len(title, 1, 50) &&
        util.len(briefDes, 0, 300) &&
        util.len(targets, 0, 300) &&
        util.len(bodyText, 1, 200000)
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  renderContents() {
    const componentThis = this;
    let requiredLabel = "";
    if (this.state.type === "private") {
      requiredLabel = <span className="form__label--required-label">*</span>;
    }

    let titleClassName = "form__group";
    titleClassName += this.state.errors.title && " form__group--error";

    let briefDesClassName = "form__group";
    briefDesClassName += this.state.errors.briefDes && " form__group--error";

    let targetsClassName = "form__group";
    targetsClassName += this.state.errors.targets && " form__group--error";

    let bodyClassName = "form__group";
    bodyClassName += this.state.errors.body && " form__group--error";

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
            <div className={titleClassName}>
              <label htmlFor="titleInput" className="form__label">
                Title
                {requiredLabel}
              </label>
              <input
                id="titleInput"
                className="form__input"
                type="text"
                value={this.state.title}
                ref={this.title}
                onChange={(e) => {
                  this.setState({ title: e.target.value, saved: false }, () => {
                    this.checkTitleValidation();
                  });
                }}
                onBlur={this.checkTitleValidation}
                placeholder="Choose a title for your page"
              />
              <div className="form__input--message">
                <span>{this.state.errors.title}</span>
              </div>
            </div>

            {/* Brief Description input */}
            <div className={briefDesClassName}>
              <label htmlFor="briefDesInput" className="form__label">
                Brief Description
              </label>
              <textarea
                id="briefDesInput"
                className="form__textarea"
                rows="3"
                value={this.state.briefDes}
                ref={this.briefDes}
                onChange={(e) => {
                  this.setState(
                    { briefDes: e.target.value, saved: false },
                    () => {
                      this.checkBriefDesValidation();
                    }
                  );
                }}
                onBlur={this.checkBriefDesValidation}
                placeholder="Describe briefly what your page is all about"
              />
              <div className="form__input--message">
                <span>{this.state.errors.briefDes}</span>
              </div>
            </div>

            {/* Targets input */}
            <div className={targetsClassName}>
              <label htmlFor="targetsInput" className="form__label">
                Targets
              </label>
              <textarea
                id="targetsInput"
                className="form__textarea"
                rows="3"
                value={this.state.targets}
                ref={this.targets}
                onChange={(e) => {
                  this.setState(
                    { targets: e.target.value, saved: false },
                    () => {
                      this.checkTargetsValidation();
                    }
                  );
                }}
                onBlur={this.checkTargetsValidation}
                placeholder="Describe briefly who this page is for"
              />
              <div className="form__input--message">
                <span>{this.state.errors.targets}</span>
              </div>
            </div>

            {/* Page Body input */}
            <div className={bodyClassName} id="body">
              <label htmlFor="bodyInput" className="form__label">
                Page Body{requiredLabel}
              </label>
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
                    }
                  );
                }}
                onBlur={(e) => {}}
              />
              <div className="form__input--message">
                <span>{this.state.errors.body}</span>
              </div>
            </div>

            {/* @TODO: fix class names */}
            <div>
              {this.state.saved === false && (
                <p className="text-orange">Saving changes...</p>
              )}

              {this.state.saved === true && (
                <p className="text-green">Changes saved to the cloud!</p>
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
            <div className="center-content">
              <button
                className="btn btn-blue"
                onClick={() => {
                  this.onNextButtonClicked();
                }}
              >
                Next
              </button>
            </div>
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
      <React.Fragment>
        <ProgressBar width={40} />
        <div className="page-new__note-box">
          <h3>A note about saving:</h3>
          <p>
            We <strong>automatically save</strong> what you write and all other
            changes you do, your page is saved as a draft until you decide to
            publish your page. You can publish your page in the last step.
          </p>
          <p>
            You can view all your draft pages{" "}
            <a href="/u/pages/draft" target="_blank">
              here
            </a>
            .
          </p>
        </div>

        <div className="page-new">{this.renderContents()}</div>
      </React.Fragment>
    );
  }
}

export default PageContents;
