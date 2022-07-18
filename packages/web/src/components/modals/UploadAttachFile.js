import React, { Component } from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import axios from "axios";
import { Modal } from "../partials/Modals";
import Loading from "../partials/Loading";
import InputFile from "../partials/InputFile";
import { showSnackBar } from "../../lib/util";

import { closeModal } from "actions";

class UploadPhoto extends Component {
  state = {
    status: "clean", // Could be clean, loading or onFile
    error: "",
    inputLabelName: "Upload a File",
  };

  // When user selects a file
  onFileInputChange = (e, fileName) => {
    this.setState({ error: "", inputLabelName: fileName, status: "onFile" });
  };

  // When user clicks on upload button
  onUploadClick = async () => {
    this.setState({ status: "loading" });

    // Prepare the form data to be sent to server
    let formData = new FormData();
    const file = document.querySelector("#file-input").files[0];
    formData.append("file", file);

    try {
      await axios.post(this.props.url, formData, {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });

      this.props.closeModal();
      // Call the success function so that the parent component will get notified
      this.props.success();
      this.reset();
    } catch (error) {
      let msg = "There was an error with uploading your photo.";
      if (error.response && error.response.data)
        msg = error.response.data.error;

      showSnackBar(msg, "error");
      this.reset();
      this.props.closeModal();
    }
  };

  // Reset the photo choosing
  reset() {
    this.setState({
      status: "clean",
      inputLabelName: "Upload a File",
    });
  }

  render() {
    return createPortal(
      <Modal
        header={this.props.header}
        open={this.props.modalOpen}
        onClose={() => {
          this.props.closeModal();
          this.setState({ error: "" });
        }}
      >
        <p className="">{this.props.text}</p>
        <p className="image__upload--error">{this.state.error}</p>

        {/* Input file */}
        <InputFile
          addClass={
            this.state.status === "clean"
              ? "margin-bottom-2"
              : "margin-bottom-0"
          }
          label={this.state.inputLabelName}
          id="file-input"
          size={this.props.size}
          onChange={this.onFileInputChange}
          onClick={(e) => {
            this.setState({ error: "" });
          }}
          onError={(error) => {
            this.setState({
              error,
              inputLabelName: "Upload a File",
            });
            this.reset();
          }}
        />

        {/* Options section */}
        <div
          className={`image__upload--options margin-top-2 ${
            this.state.status === "onFile" ? "" : "display-none"
          }`}
        >
          <a
            className="btn btn-round btn-blue-o"
            onClick={() => {
              this.reset();
              this.props.closeModal();
            }}
          >
            Cancel
          </a>
          <a className="btn btn-round btn-blue" onClick={this.onUploadClick}>
            Upload
          </a>
        </div>

        {/* Loading section */}
        {this.state.status === "loading" && (
          <div className="image__upload--loading margin-top-1">
            <div className="center-content">
              <Loading />
            </div>
          </div>
        )}
      </Modal>,
      document.querySelector("#modal-root")
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.modals.uploadAttachFile.id,
    modalOpen: state.modals.uploadAttachFile.open,
  };
};

export default connect(mapStateToProps, { closeModal })(UploadPhoto);
