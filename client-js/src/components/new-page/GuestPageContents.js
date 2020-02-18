import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName, loadingModal } from "../../lib/util";
import util from "../../lib/forms";
import Loading from "../partials/Loading";
import ChooseUrl from "../partials/ChooseUrl";
import InputFile from "../partials/InputFile";

class GuestPageContents extends Component {
  state = {
    type: null,
    title: "",
    url: "",
    body: "",
    inputLabelName: "Add an Attach File"
  };

  componentDidMount() {}

  // Check if the title provided by user is valid or not.
  // This will run by onblur and onchange event on title input
  checkTitleValidation() {
    if (!util.len(this.state.title, 1, 50)) {
      util.inputError(
        "title",
        "Title cannot be blank and should be less that 50 characters",
        2
      );
    } else {
      util.inputNone("title", 2);
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

    if (
      !util.len(bodyText, 0, 200000) &&
      document.querySelector(".mce-tinymce")
    ) {
      util.inputError(
        "body",
        "Page contents should be less than 200000 charecters",
        3
      );
      document.querySelector(".mce-tinymce").style.border = "1px solid #e74c3c";
    } else if (document.querySelector(".mce-tinymce")) {
      document.querySelector(".mce-tinymce").style.border = "1px solid #CACACA";
      util.inputNone("body", 3);
    }
  }

  checkIfAllOk() {
    const title = this.state.title;

    if (util.len(title, 1, 50)) {
    } else {
    }
  }

  renderContents() {
    const componentThis = this;
    return (
      <div>
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
              className="form__input"
              type="text"
              autoComplete="off"
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
              onChange={e => {
                this.setState({ body: e.target.getContent() }, () => {
                  this.checkPageBodyValidation.apply(this);
                });
              }}
              onBlur={e => {}}
            />
            <div className="form__input--message">
              <span />
            </div>
          </div>

          {/* Attach File */}
          <div className="form__group margin-top-3">
            <InputFile
              label={this.state.inputLabelName}
              id="file-input"
              size={25000000}
              onChange={(e, fileName) => {
                this.setState({ inputLabelName: fileName });
              }}
              onClick={() => {}}
              onError={msg => {}}
            />
          </div>

          <ChooseUrl username="g" onSuccess={() => {}} onError={() => {}} />

          {/* Read more link */}
          <div>
            <p className="small-paragraph">
              See more information on what to provide in each input{" "}
              <a href="#" className="btn-link" target="_blank">
                here.
              </a>
            </p>
          </div>

          {/* Create button */}
          <div className="center-content">
            <button className="btn-normal btn-normal-sm" onClick={() => {}}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="page-new">{this.renderContents.apply(this)}</div>
      </div>
    );
  }
}

export default GuestPageContents;
