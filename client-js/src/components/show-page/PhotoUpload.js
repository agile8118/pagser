import React, { Component } from "react";
import axios from "axios";
import { loadingModal, showSnackBar } from "../../lib/util";
import InputFile from "../partials/InputFile";
import Loading from "../partials/Loading";

require("../../../../public/cropper.min.js");

class PhotoUpload extends Component {
  state = {
    error: "",
    cropData: { x: 0, y: 0, width: 0, height: 0 },
    photo: this.props.photo.secure_url,
    inputLabelName: "Upload a Photo",
    inputLabelHide: false
  };

  componentDidMount() {
    const loadStyleSheet = src => {
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
            height: cropper.getData().height
          }
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
            height: cropper.getData().height
          }
        });
      }
    });
  }

  onFileInputChange = (e, fileName, imgUrl) => {
    this.setState({ error: "", inputLabelHide: true });
    document.querySelector("#img-preview").src = imgUrl;
    this.show("upload-btn", "inline-block");
    this.show("reset-btn", "inline-block");
    this.show("crop-message", "inline-block");
    this.crop(48 / 27, 1200, 675);
  };

  displayErr(msg) {
    this.setState({ error: msg });
    this.reset();
  }

  show(id, display) {
    const el = document.querySelector(`#${id}`);
    el.style.display = display;
  }

  hide(id) {
    const el = document.querySelector(`#${id}`);
    el.style.display = "none";
  }

  reset() {
    document.querySelector("#img-preview").src = "";
    this.setState({ inputLabelHide: false });
    this.hide("upload-btn");
    this.hide("crop-message");
    this.hide("reset-btn");
  }

  onUploadClick() {
    document
      .querySelector("#js--uploader-options")
      .classList.add("display-none");
    document
      .querySelector("#js--uploader-loading")
      .classList.remove("display-none");
    var formData = new FormData();
    var imagefile = document.querySelector("#image-input");
    formData.append("img", imagefile.files[0]);
    formData.set(
      "cropData",
      `{ "x": "${this.state.cropData.x}", "y": "${this.state.cropData.y}", "width": "${this.state.cropData.width}", "height": "${this.state.cropData.height}" }`
    );

    axios
      .put(`/api/pages/${this.props.pageId}/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        document.querySelector("#reset-btn").click();
        this.closeModal("#mdl2");
        document
          .querySelector("#js--uploader-options")
          .classList.remove("display-none");
        document
          .querySelector("#js--uploader-loading")
          .classList.add("display-none");
        this.setState({
          photo: res.data.image
        });
        showSnackBar("Photo uploaded successfully.", "success");
      })
      .catch(e => {
        document.querySelector("#reset-btn").click();
        this.closeModal("#mdl2");
        document
          .querySelector("#js--uploader-options")
          .classList.remove("display-none");
        document
          .querySelector("#js--uploader-loading")
          .classList.add("display-none");
        showSnackBar("There was problem with uploading.", "error");
      });
  }

  onRemovePhotoClick() {
    loadingModal("Removing the photo...");
    this.closeModal("#mdl3");
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .delete(`/api/pages/${this.props.pageId}/photo`, config)
      .then(res => {
        loadingModal();
        showSnackBar("Photo successfully removed from your page.", "success");

        this.setState({
          photo: ""
        });
      })
      .catch(e => {
        loadingModal();
        showSnackBar("There was problem with removing the photo.", "error");
      });
  }

  openModal(id) {
    const modal = document.querySelector(id);
    modal.style.display = "block";
  }

  closeModal(id) {
    const modal = document.querySelector(id);
    modal.style.display = "none";
  }

  renderButtons() {
    if (this.state.photo.length > 0) {
      return (
        <div>
          <button
            className="btn-normal btn-normal-xs margin-right-1"
            onClick={() => {
              this.openModal.apply(this, ["#mdl2"]);
            }}
          >
            Change Page Photo
          </button>
          <button
            className="btn-normal btn-normal-xs btn-normal-danger"
            onClick={() => {
              this.openModal.apply(this, ["#mdl3"]);
            }}
          >
            Remove Page Photo
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="btn-normal btn-normal-xs"
          onClick={() => {
            this.openModal.apply(this, ["#mdl2"]);
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
      <div>
        {this.renderPhoto.apply(this)}

        <div className="mdl" id="mdl3">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.closeModal.apply(this, ["#mdl3"]);
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Remove your page photo</h3>
            </div>

            <div className="mdl__body">
              <p>
                Are you really sure that you want to delete your page photo?
                This cannot be undo.
              </p>

              <form
                onSubmit={event => {
                  event.preventDefault();
                  this.onRemovePhotoClick.apply(this);
                }}
              >
                <div className="right-content">
                  <button
                    type="submit"
                    id="deleteButton"
                    className="btn-round btn-round-danger"
                  >
                    Remove
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* END MODAL REMOVE PAGE PHOTO */}

        <div className="mdl" id="mdl2">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.closeModal.apply(this, ["#mdl2"]);
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Upload a photo for your page</h3>
            </div>

            <div className="mdl__body">
              <p>
                Upload a beautiful photo to be set as a featured image of your
                page
              </p>
              <br />
              <em
                id="crop-message"
                className="display-none-normall margin-bottom-1 "
              >
                Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thubmnail.
              </em>

              <div>
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
                  onClick={e => {}}
                  onError={msg => {
                    this.displayErr(msg);
                  }}
                />

                <img id="img-preview" src="" />

                <div
                  className="image__upload--options margin-top-2"
                  id="js--uploader-options"
                >
                  <a
                    id="reset-btn"
                    className="btn-round btn-round-sm"
                    onClick={() => {
                      this.reset();
                    }}
                  >
                    Choose another photo
                  </a>
                  <a
                    id="upload-btn"
                    className="btn-round btn-round-sm btn-round-full"
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
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL */}
        <div className="form__group">{this.renderButtons.apply(this)}</div>
      </div>
    );
  }
}

export default PhotoUpload;
