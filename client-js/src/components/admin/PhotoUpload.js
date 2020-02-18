import React, { Component } from "react";
import axios from "axios";
import { ROOT_URL } from "../../lib/keys";
import util from "../../lib/forms";
import Alert from "../partials/Alert";
import InputFile from "../partials/InputFile";

class PhotoUpload extends Component {
  state = {
    error: "",
    cropData: { x: 0, y: 0, width: 0, height: 0 },
    alertMessage: null,
    alertType: "success",
    photo: "/images/users/placeholder.png",
    inputLabelName: "Upload Your Picture",
    inputLabelHide: false
  };
  // Is used to avoid memory leak
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    // Get the user photo from server
    axios
      .get(`/api/profile`, config)
      .then(response => {
        const user = response.data.user;
        if (this._isMounted) {
          this.setState({
            photo: user.photo.secure_url || "/images/users/placeholder.png"
          });
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  // Set the _isMounted as false so that no ajax request will be made after the unmount
  componentWillUnmount() {
    this._isMounted = false;
  }

  // Crop the photo
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

  // When user selects a photo
  onFileInputChange = (e, fileName, imgUrl) => {
    this.setState({ error: "", inputLabelHide: true });
    document.querySelector("#img-preview").src = imgUrl;
    this.show("upload-btn", "inline-block");
    this.show("reset-btn", "inline-block");
    this.crop(1 / 1, 250, 250);
  };

  // Show error as for the wrong file selected
  displayErr(msg) {
    this.setState({ error: msg });
    this.reset();
  }

  // Show an element
  show(id, display) {
    const el = document.querySelector(`#${id}`);
    el.style.display = display;
  }

  // Hide an element
  hide(id) {
    const el = document.querySelector(`#${id}`);
    el.style.display = "none";
  }

  reset() {
    document.querySelector("#img-preview").src = "";
    this.setState({ inputLabelHide: false });
    this.hide("upload-btn");
    this.hide("reset-btn");
  }

  onUploadClick() {
    document
      .querySelector("#js--uploader-options")
      .classList.add("display-none");
    document
      .querySelector("#js--uploader-loading")
      .classList.remove("display-none");
    // Prepare the form data to be sent to server
    let formData = new FormData();
    const imagefile = document.querySelector("#image-input");
    formData.append("img", imagefile.files[0]);
    formData.set(
      "cropData",
      `{ "x": "${this.state.cropData.x}", "y": "${this.state.cropData.y}", "width": "${this.state.cropData.width}", "height": "${this.state.cropData.height}" }`
    );

    axios
      .put(`/api/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        document.querySelector("#reset-btn").click();
        this.closeModal();
        document
          .querySelector("#js--uploader-options")
          .classList.remove("display-none");
        document
          .querySelector("#js--uploader-loading")
          .classList.add("display-none");
        this.setState({
          photo: res.data.image
        });

        this.setState({
          alertMessage: "Profile picture uploaded successfully.",
          alertType: "success"
        });

        window.location.hash = "photo";
        window.location.hash = "";
      })
      .catch(e => {
        document.querySelector("#reset-btn").click();
        this.closeModal();
        document
          .querySelector("#js--uploader-options")
          .classList.remove("display-none");
        document
          .querySelector("#js--uploader-loading")
          .classList.add("display-none");

        this.setState({
          alertMessage: "There was problem with uploading.",
          alertType: "error"
        });
      });
  }

  // Open the modal
  openModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "block";
  }

  // Close the modal
  closeModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "none";
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div className="center-content admin__photo-section">
          <h3 className="heading-tertiary" id="photo">
            Photo
          </h3>
          <Alert
            message={this.state.alertMessage}
            onClose={() => {
              this.setState({ alertMessage: null });
            }}
            type={this.state.alertType}
            additionalClasses="margin-top-2"
          />
          <img
            src={this.state.photo}
            onError={() => {
              this.setState({ photo: "/images/users/placeholder.png" });
            }}
          />
          <br />
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.openModal.apply(this);
            }}
            className="btn-link"
          >
            Change or upload a new photo
          </a>
        </div>
        <div className="mdl">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.closeModal.apply(this);
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Upload a profile photo</h3>
            </div>

            <div className="mdl__body">
              <p>Upload a beautiful non-pixled photo of yourself</p>
              <br />

              <div>
                <div className="left-content">
                  <p className="image__upload--error">{this.state.error}</p>
                </div>

                <InputFile
                  addClass="margin-bottom-2"
                  hide={this.state.inputLabelHide}
                  label={this.state.inputLabelName}
                  id="image-input"
                  size={5000000}
                  type="image"
                  minWidth={250}
                  minHeight={250}
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
                  className="image__upload--loading margin-top-2 display-none"
                  id="js--uploader-loading"
                >
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
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL */}
      </div>
    );
  }
}

export default PhotoUpload;
