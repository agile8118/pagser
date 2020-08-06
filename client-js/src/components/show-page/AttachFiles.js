import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Loading from "../partials/Loading";
import InputFile from "../partials/InputFile";
import { Modal } from "../partials/Modals";
import { ConfirmModal } from "../partials/Modals";
import UploadAttachFile from "../modals/UploadAttachFile";

import { loadingModal } from "../../lib/util";

import * as actions from "actions";

class AttachFiles extends Component {
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
              onClick={(e) => {
                // This will prevent the file from starting to get downloaded
                e.preventDefault();
                this.props.openConfDeleteAttachFile(file._id, file.name);
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

  // Render the add an attach file button
  renderButton() {
    if (
      this.props.viewer.status === "owner" &&
      this.props.attachFiles.length < 5
    )
      // If user is the owner of the page
      return (
        <React.Fragment>
          <button
            className="btn btn-round btn-blue btn-sm"
            onClick={() => {
              this.props.openUploadAttachFile();
            }}
          >
            <i className="fa fa-upload" /> Add an attach file
          </button>

          <UploadAttachFile
            header="Add an attach file"
            text="You can upload maximum of 5 files 10MB each for every page."
            size={10000000}
            url={`/api/pages/${this.props.id}/attach-files`}
            success={() => {
              this.props.fetchAttachFiles(
                this.props.id,
                "File uploaded successfully."
              );
            }}
          />
        </React.Fragment>
      );
    // If viewer is not the owner of the page just return a simple div
    return <div />;
  }

  render() {
    if (!this.props.isPending)
      return (
        <div className="page__attach-files">
          <ConfirmModal
            header="Remove the attach file"
            open={this.props.confMdl.open}
            onConfirm={async () => {
              this.props.closeModal();

              loadingModal("Deleting the attach file...");
              await axios.delete(
                `/api/pages/${this.props.id}/attach-files/${this.props.confMdl.id}`,
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
            onCancel={() => this.props.closeModal()}
          >
            <p>
              Are you sure that you want to delete this attach file{" "}
              <strong>'{this.props.confMdl.name}'</strong>? Action cannot be
              undone.
            </p>
          </ConfirmModal>

          <div className="file-links">{this.renderFiles.apply(this)}</div>
          {this.renderButton.apply(this)}
          {this.props.attachFiles.length === 5 &&
            this.props.viewer.status === "owner" && (
              <em>
                You can only have 5 attach files for each page, if you want to
                upload a new one remove one of the attach files first.
              </em>
            )}
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
    confMdl: state.modals.confDeleteAttachFile || {},
  };
};

export default connect(mapStateToProps, actions)(AttachFiles);
