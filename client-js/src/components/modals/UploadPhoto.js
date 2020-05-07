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
    status: "clean", // Clould be clean, loading or cropping
    error: "",
    cropData: { x: 0, y: 0, width: 0, height: 0 },
  };

  componentDidMount() {
    // Load Crooper javascript file
    const script = document.createElement("script");
    script.setAttribute("src", "/cropper.min.js");
    document.head.appendChild(script);

    // Load Crooper css file
    const stylesheet = document.createElement("link");
    stylesheet.href = "/cropper.min.css";
    stylesheet.type = "text/css";
    stylesheet.rel = "stylesheet";
    document.head.appendChild(stylesheet);
  }

  // When user selects a photo
  onFileInputChange = (e, fileName, imgUrl) => {
    this.setState({ error: "", status: "cropping" });
    document.querySelector("#img-preview").src = imgUrl;
    this.crop(this.props.aspectRatio, this.props.minWidth, this.props.height);
  };

  // When user clicks on upload button
  onUploadClick = async () => {
    this.setState({ status: "loading" });

    // Prepare the form data to be sent to server
    let formData = new FormData();
    formData.append("img", document.querySelector("#image-input").files[0]);
    formData.set(
      "cropData",
      `{ "x": "${this.state.cropData.x}", "y": "${
        this.state.cropData.y
      }", "width": "${this.state.cropData.width}", "height": "${
        this.state.cropData.height
      }" }`
    );

    try {
      const { data } = await axios.put(this.props.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      });
      document.querySelector("#reset-btn").click();
      this.props.closeModal();
      // Call the success funtion so that the parent component will get notified
      this.props.success(data.image);
      showSnackBar("Photo uploaded successfully.", "success");
      this.setState({ status: "clean" });
    } catch ({ response }) {
      document.querySelector("#reset-btn").click();
      this.setState({ status: "clean" });
      showSnackBar("There was an error with uploading your photo.", "error");
      this.props.closeModal();
    }
  };

  // Reset the photo choosing
  reset() {
    this.setState({ status: "clean" });
    document.querySelector("#img-preview").src = "";
  }

  // Start the cropper on the image preview
  crop(aspect, minW, minH) {
    const image = document.getElementById("img-preview");
    const componentThis = this;
    const cropper = new Cropper(image, {
      aspectRatio: aspect,
      viewMode: 3,
      background: false,
      modal: false,
      zoomable: false,
      minCropBoxWidth: minW,
      minCropBoxHeight: minH,
      cropend: () => {
        this.setState({
          cropData: {
            x: cropper.getData().x,
            y: cropper.getData().y,
            width: cropper.getData().width,
            height: cropper.getData().height,
          },
        });
      },
      ready: function() {
        const self = this;
        document
          .querySelector("#reset-btn")
          .addEventListener("click", function() {
            if (self.cropper) {
              self.cropper.destroy();
            }
          });
        componentThis.setState({
          cropData: {
            x: cropper.getData().x,
            y: cropper.getData().y,
            width: cropper.getData().width,
            height: cropper.getData().height,
          },
        });
      },
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
        <p className="image__upload--text">{this.props.text}</p>
        <p className="image__upload--error">{this.state.error}</p>

        {/* Message to show when user is cropping */}
        <em
          className={`image__upload--crop-msg ${
            this.props.cropMsg && this.state.status === "cropping"
              ? ""
              : "display-none"
          }`}
        >
          {this.props.cropMsg}
        </em>

        {/* Input file */}
        <InputFile
          addClass="margin-bottom-2"
          hide={this.state.status !== "clean"}
          label={this.props.inputLabelName}
          id="image-input"
          size={this.props.size}
          type="image"
          minWidth={this.props.minWidth}
          minHeight={this.props.minHeight}
          onChange={this.onFileInputChange}
          onClick={(e) => {}}
          onError={(error) => {
            this.setState({ error });
            this.reset();
          }}
        />

        {/* Image preview - Sould be in a div tag otherwise Cropper won't work as expected */}
        <div>
          <img id="img-preview" />
        </div>

        {/* Options section */}
        <div
          className={`image__upload--options margin-top-2 ${
            this.state.status === "cropping" ? "" : "display-none"
          }`}
        >
          <a
            id="reset-btn"
            className="btn btn-round btn-blue-o"
            onClick={() => {
              this.reset();
            }}
          >
            Choose another photo
          </a>
          <a className="btn btn-round btn-blue" onClick={this.onUploadClick}>
            Upload
          </a>
        </div>

        {/* Loading section */}
        {this.state.status === "loading" && (
          <div className="image__upload--loading margin-top-2">
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
    id: state.modals.uploadPhoto.id,
    modalOpen: state.modals.uploadPhoto.open,
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(UploadPhoto);
