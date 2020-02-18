import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Loading from "../partials/Loading";
import InputFile from "../partials/InputFile";
import { loadingModal, showSnackBar } from "../../lib/util";

import * as actions from "../../redux/show-page/actions";

class AttachFiles extends Component {
  state = {
    inputLabelName: "Upload a File",
    error: ""
  };

  onFileInputChange = (e, fileName) => {
    this.setState({ inputLabelName: fileName, error: "" });
    this.show("upload-btn-file", "inline-block");
    this.show("reset-btn-file", "inline-block");
  };

  onInputFileClick = () => {
    this.setState({ error: "" });
  };

  show(id, display) {
    const el = document.querySelector(`#${id}`);
    el.style.display = display;
  }

  hide(id) {
    const el = document.querySelector(`#${id}`);
    el.style.display = "none";
  }

  reset() {
    document
      .querySelector("#js--mdl4-options")
      .classList.remove("display-none");
    document.querySelector("#js--mdl4-loading").classList.add("display-none");
    this.setState({ inputLabelName: "Upload a File", error: "" });
    this.hide("upload-btn-file");
    this.hide("reset-btn-file");
  }

  displayErr(msg) {
    this.setState({ error: msg, inputLabelName: "Upload a File" });
    this.hide("upload-btn-file");
    this.hide("reset-btn-file");
  }

  openModal(id) {
    const modal = document.querySelector(id);
    modal.style.display = "block";
  }

  closeModal(id) {
    this.setState({ error: "" });
    const modal = document.querySelector(id);
    modal.style.display = "none";
  }

  onUploadClick() {
    this.setState({ error: "" });
    document.querySelector("#js--mdl4-options").classList.add("display-none");
    document
      .querySelector("#js--mdl4-loading")
      .classList.remove("display-none");

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      }
    };

    let formData = new FormData();
    const file = document.querySelector("#file-input").files[0];
    formData.append("file", file);

    axios
      .post(`/api/pages/${this.props.id}/attach-files`, formData, config)
      .then(response => {
        this.reset();
        this.closeModal("#mdl4");
        this.props.fetchAttachFiles(
          this.props.id,
          "File uploaded successfully."
        );
      })
      .catch(error => {
        this.reset();
        this.setState({
          error: "Sorry and unexpected error happened, please try again."
        });
      });
  }

  renderFiles() {
    var componentThis = this;
    if (this.props.viewer.status === "owner") {
      return this.props.attachFiles.map(file => {
        return (
          <a
            className="file-link"
            key={file.name}
            href={`/api/pages/${this.props.id}/attach-files/${file.name}`}
          >
            <i className="fa fa-download" />
            {" " + file.name}
            <button
              className="delete-x-button"
              onClick={e => {
                e.preventDefault();
                loadingModal("Deleting the attach file...");

                const config = {
                  headers: {
                    authorization: localStorage.getItem("token")
                  }
                };

                axios
                  .delete(
                    `/api/pages/${this.props.id}/attach-files/${file._id}`,
                    config
                  )
                  .then(response => {
                    componentThis.props.fetchAttachFiles(
                      componentThis.props.id,
                      "File deleted successfully."
                    );
                  })
                  .catch(error => {
                    loadingModal();
                  });
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </a>
        );
      });
    } else {
      return this.props.attachFiles.map(file => {
        return (
          <a
            className="file-link"
            key={file.name}
            href={`/api/pages/${this.props.id}/attach-files/${file.name}`}
          >
            <i className="fa fa-download" />
            {" " + file.name}
          </a>
        );
      });
    }
  }

  renderButton() {
    if (this.props.viewer.status === "owner") {
      return (
        <div>
          <div>
            <button
              className="btn-normal btn-normal-xs"
              onClick={() => {
                this.openModal("#mdl4");
              }}
            >
              <i className="fa fa-upload" /> Add an attach file
            </button>
          </div>
          <div className="mdl" id="mdl4">
            <div className="mdl__content">
              <div className="mdl__header">
                <span
                  className="mdl__close"
                  onClick={() => {
                    this.closeModal.apply(this, ["#mdl4"]);
                  }}
                >
                  &times;
                </span>
                <h3 className="heading-tertiary">Add an attach file</h3>
              </div>

              <div className="mdl__body">
                <p>
                  You can upload maximum of 5 files 10MB each for every page.
                </p>
                <br />
                <div className="left-content">
                  <p className="image__upload--error">{this.state.error}</p>
                </div>

                <InputFile
                  addClass="margin-bottom-2"
                  label={this.state.inputLabelName}
                  id="file-input"
                  size={10000000}
                  onChange={this.onFileInputChange}
                  onClick={this.onInputFileClick}
                  onError={msg => {
                    this.displayErr(msg);
                  }}
                />

                <div
                  className="image__upload--options right-content"
                  id="js--mdl4-options"
                >
                  <a
                    id="reset-btn-file"
                    className="btn-round btn-round-sm"
                    onClick={() => {
                      this.reset();
                      this.closeModal("#mdl4");
                    }}
                  >
                    Cancel
                  </a>
                  <a
                    id="upload-btn-file"
                    className="btn-round btn-round-sm btn-round-full"
                    onClick={() => {
                      this.onUploadClick.apply(this);
                    }}
                  >
                    Upload
                  </a>
                </div>

                <div
                  className="image__upload--loading margin-top-1 center-content display-none"
                  id="js--mdl4-loading"
                >
                  <Loading />
                </div>
                {/* END MODAL LOADING */}
              </div>
            </div>
          </div>
          {/* END MODAL ADD ATTACH FILE */}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    if (!this.props.isPending) {
      return (
        <div className="page__attach-files">
          <div className="file-links" id="js--file-links">
            {this.renderFiles.apply(this)}
          </div>
          {this.renderButton.apply(this)}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    id: state.pageData.id,
    attachFiles: state.pageData.attachFiles || "",
    viewer: {
      status: state.pageData.status
    },
    isPending: state.pageData.isPending
  };
};

export default connect(mapStateToProps, actions)(AttachFiles);
