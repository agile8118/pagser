import React, { Component } from "react";
import axios from "axios";
import { loadingModal, showSnackBar, show, hide } from "../../lib/util";
import { ConfirmModal, Modal } from "../partials/Modals";
import InputFile from "../partials/InputFile";
import UploadPhoto from "../modals/UploadPhoto";
import Loading from "../partials/Loading";

class PhotoUpload extends Component {
  state = {
    error: "",
    cropData: { x: 0, y: 0, width: 0, height: 0 },
    photo: this.props.photo.secure_url,
    inputLabelName: "Upload a Photo",
    inputLabelHide: false,
    rmPhotoConfMdl: false,
    uploadPhotoMdl: false,
  };

  componentDidMount() {
    const loadStyleSheet = (src) => {
      if (document.createStylesheet) {
        document.createStylesheet(src);
      } else {
        const stylesheet = document.createElement("link");
        stylesheet.href = src;
        stylesheet.type = "text/css";
        stylesheet.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(stylesheet);
      }
    };

    loadStyleSheet("/cropper.min.css");
  }

  onFileInputChange = (e, fileName, imgUrl) => {
    this.setState({ error: "", inputLabelHide: true });
    document.querySelector("#img-preview").src = imgUrl;
    show("#upload-btn");
    show("#reset-btn");
    show("#crop-message");
    this.crop(48 / 27, 1200, 675);
  };

  onUploadClick() {
    hide("#js--uploader-options");
    show("#js--uploader-loading");
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

    axios
      .put(`/api/pages/${this.props.pageId}/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        document.querySelector("#reset-btn").click();
        show("#js--uploader-options");
        hide("#js--uploader-loading");
        this.setState({
          photo: res.data.image,
          uploadPhotoMdl: false,
        });
        showSnackBar("Photo uploaded successfully.", "success");
      })
      .catch((e) => {
        document.querySelector("#reset-btn").click();
        this.setState({ uploadPhotoMdl: false });
        show("#js--uploader-options");
        hide("#js--uploader-loading");
        showSnackBar(
          "There was a problem with uploading, please try again.",
          "error"
        );
      });
  }

  onRemovePhotoClick = () => {
    loadingModal("Removing the photo...");
    this.setState({ rmPhotoConfMdl: false });

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    axios
      .delete(`/api/pages/${this.props.pageId}/photo`, config)
      .then((res) => {
        loadingModal();
        showSnackBar("Photo successfully removed from your page.", "success");

        this.setState({
          photo: "",
        });
      })
      .catch((e) => {
        loadingModal();
        showSnackBar("There was problem with removing the photo.", "error");
      });
  };

  reset() {
    document.querySelector("#img-preview").src = "";
    this.setState({ inputLabelHide: false });
    hide("#upload-btn");
    hide("#reset-btn");
    hide("#crop-message");
  }

  // Start the cropper on the image preview
  crop(aspect, minW, minH) {
    var image = document.getElementById("img-preview");
    var componentThis = this;
    var cropper = new Cropper(image, {
      aspectRatio: aspect,
      viewMode: 3,
      background: false,
      modal: false,
      zoomable: false,
      minCropBoxWidth: minW,
      minCropBoxHeight: minH,
      cropend: function() {
        componentThis.setState({
          cropData: {
            x: cropper.getData().x,
            y: cropper.getData().y,
            width: cropper.getData().width,
            height: cropper.getData().height,
          },
        });
      },
      ready: function() {
        var self = this;
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

  renderButtons() {
    if (this.state.photo.length > 0) {
      return (
        <React.Fragment>
          <button
            className="btn btn-blue btn-sm btn-round margin-right-1"
            onClick={() => {
              this.setState({ uploadPhotoMdl: true });
            }}
          >
            Change Page Photo
          </button>
          <button
            className="btn btn-sm btn-round btn-red"
            onClick={() => {
              this.setState({ rmPhotoConfMdl: true });
            }}
          >
            Remove Page Photo
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <button
          className="btn btn-blue btn-sm btn-round"
          onClick={() => {
            this.setState({ uploadPhotoMdl: true });
          }}
        >
          Upload Page Photo
        </button>
      );
    }
  }

  renderPhoto() {
    if (this.state.photo.length > 0) {
      return (
        <div className="page__photo">
          <img
            className="margin-top-1"
            src={this.state.photo}
            alt="Page featured image"
          />
        </div>
      );
    } else {
      return <div className="form__group" />;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPhoto.apply(this)}

        <ConfirmModal
          header="Remove your page photo"
          message="Are you really sure that you want to delete your page photo?
                This cannot be undo."
          open={this.state.rmPhotoConfMdl}
          onConfirm={this.onRemovePhotoClick}
          onCancel={() => {
            this.setState({ rmPhotoConfMdl: false });
          }}
        />

        <Modal
          header="Upload a photo for your page"
          open={this.state.uploadPhotoMdl}
          onClose={() => {
            this.setState({ uploadPhotoMdl: false });
          }}
        >
          <p>
            Upload a beautiful photo to be set as a featured image of your page
          </p>
          <br />
          <em id="crop-message" className="display-none margin-bottom-1">
            Choose an area to be shown as for the page thumbnail, this won't
            crop your image, this is just the area that will be shown as the
            thubmnail.
          </em>

          <div className="left-content">
            <p className="image__upload--error">{this.state.error}</p>
          </div>

          <InputFile
            addClass="margin-bottom-2"
            hide={this.state.inputLabelHide}
            label={this.state.inputLabelName}
            id="image-input"
            size={8000000}
            type="image"
            minWidth={1200}
            minHeight={675}
            onChange={this.onFileInputChange}
            onClick={(e) => {}}
            onError={(msg) => {
              this.setState({ error: msg });
              this.reset();
            }}
          />

          <img id="img-preview" src="" />

          <div
            className="image__upload--options margin-top-2"
            id="js--uploader-options"
          >
            <a
              id="reset-btn"
              className="btn btn-round btn-blue-o display-none"
              onClick={() => {
                this.reset();
              }}
            >
              Choose another photo
            </a>
            <a
              id="upload-btn"
              className="btn btn-round btn-blue display-none"
              onClick={this.onUploadClick.bind(this)}
            >
              Upload
            </a>
          </div>

          <div
            className="image__upload--loading margin-top-2 center-content display-none"
            id="js--uploader-loading"
          >
            <Loading />
          </div>
        </Modal>

        <div className="form__group">{this.renderButtons.apply(this)}</div>
      </React.Fragment>
    );
  }
}

export default PhotoUpload;
