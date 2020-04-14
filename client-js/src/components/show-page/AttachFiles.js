import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Loading from "../partials/Loading";
import InputFile from "../partials/InputFile";
import { Modal } from "../partials/Modals";
import { loadingModal } from "../../lib/util";

import * as actions from "../../redux/show-page/actions";

class AttachFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLabelName: "Upload a File",
      attachFileMdl: false,
      error: "",
    };

    this.uploadBtn = React.createRef();
    this.cancelBtn = React.createRef();
    this.mdlLoading = React.createRef();
    this.mdlOptions = React.createRef();
  }

  onFileInputChange = (e, fileName) => {
    this.setState({ inputLabelName: fileName, error: "" });
    this.cancelBtn.current.classList.remove("display-none");
    this.uploadBtn.current.classList.remove("display-none");
  };

  onUploadClick = async () => {
    this.setState({ error: "" });
    this.mdlOptions.current.classList.add("display-none");
    this.mdlLoading.current.classList.remove("display-none");

    let formData = new FormData();
    const file = document.querySelector("#file-input").files[0];
    formData.append("file", file);

    try {
      await axios.post(`/api/pages/${this.props.id}/attach-files`, formData, {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });

      this.reset();
      this.setState({ attachFileMdl: false });
      this.props.fetchAttachFiles(this.props.id, "File uploaded successfully.");
    } catch ({ response }) {
      this.reset();
      this.setState({
        error: response.data.error,
      });
    }
  };

  reset() {
    this.mdlOptions.current.classList.remove("display-none");
    this.mdlLoading.current.classList.add("display-none");
    this.uploadBtn.current.classList.add("display-none");
    this.cancelBtn.current.classList.add("display-none");

    this.setState({ inputLabelName: "Upload a File", error: "" });
  }

  // Render all attach files of the page
  renderFiles() {
    if (this.props.viewer.status === "owner")
      // If user is the owner of the page
      return this.props.attachFiles.map((file) => {
        return (
          <a
            className="file-link"
            key={file.name}
            href={`/api/pages/${this.props.id}/attach-files/${file.name}`}
          >
            <i className="fa fa-download" />
            {" " + file.name}
            <button
              className="btn-i"
              onClick={async (e) => {
                e.preventDefault();
                loadingModal("Deleting the attach file...");

                await axios.delete(
                  `/api/pages/${this.props.id}/attach-files/${file._id}`,
                  {
                    headers: {
                      authorization: localStorage.getItem("token"),
                    },
                  }
                );

                this.props.fetchAttachFiles(
                  this.props.id,
                  "File deleted successfully."
                );
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </a>
        );
      });
    // If user is not the owner of the page
    return this.props.attachFiles.map((file) => {
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

  // Render the add an attach file buttton
  renderButton() {
    if (this.props.viewer.status === "owner")
      // If user is the owner of the page
      return (
        <React.Fragment>
          <button
            className="btn btn-round btn-blue btn-sm"
            onClick={() => {
              this.setState({ attachFileMdl: true });
            }}
          >
            <i className="fa fa-upload" /> Add an attach file
          </button>

          <Modal
            header="Add an attach file"
            open={this.state.attachFileMdl}
            onClose={() => {
              this.setState({ attachFileMdl: false });
            }}
          >
            <p>You can upload maximum of 5 files 10MB each for every page.</p>
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
              onClick={() => {
                this.setState({ error: "" });
              }}
              onError={(msg) => {
                this.setState({
                  error: msg,
                  inputLabelName: "Upload a File",
                });
                this.cancelBtn.current.classList.add("display-none");
                this.uploadBtn.current.classList.add("display-none");
              }}
            />

            <div
              ref={this.mdlOptions}
              className="image__upload--options right-content"
            >
              <a
                ref={this.cancelBtn}
                className="btn btn-round btn-blue-o display-none"
                onClick={() => {
                  this.reset();
                  this.setState({ attachFileMdl: false });
                }}
              >
                Cancel
              </a>
              <a
                ref={this.uploadBtn}
                className="btn btn-round btn-blue display-none"
                onClick={this.onUploadClick}
              >
                Upload
              </a>
            </div>

            <div
              ref={this.mdlLoading}
              className="image__upload--loading margin-top-1 center-content display-none"
            >
              <Loading />
            </div>
          </Modal>
        </React.Fragment>
      );
    // If viewer is not the owner of the page just return a simple div
    return <div />;
  }

  render() {
    if (!this.props.isPending)
      return (
        <div className="page__attach-files">
          <div className="file-links">{this.renderFiles.apply(this)}</div>
          {this.renderButton.apply(this)}
        </div>
      );
    // If it is still loading...
    return <div />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.pageData.id,
    attachFiles: state.pageData.attachFiles || "",
    viewer: {
      status: state.pageData.status,
    },
    isPending: state.pageData.isPending,
  };
};

export default connect(
  mapStateToProps,
  actions
)(AttachFiles);
