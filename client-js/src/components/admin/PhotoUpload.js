import React, { Component } from "react";
import axios from "axios";
import { show, hide } from "../../lib/util";
import { Modal } from "../partials/Modals";
import Loading from "../partials/Loading";
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
    inputLabelHide: false,
    uploadPhotoMdl: false,
  };

  // Is used to avoid memory leak
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    // Get the user photo from server
    axios
      .get(`/api/profile`, config)
      .then((response) => {
        const user = response.data.user;
        if (this._isMounted) {
          this.setState({
            photo: user.photo.secure_url || "/images/users/placeholder.png",
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      });
  }

  // Set the _isMounted as false so that no ajax request will be made after the unmount
  componentWillUnmount() {
    this._isMounted = false;
  }

  // When user selects a photo
  onFileInputChange = (e, fileName, imgUrl) => {
    this.setState({ error: "", inputLabelHide: true });
    document.querySelector("#img-preview").src = imgUrl;
    show("#upload-btn");
    show("#reset-btn");
    this.crop(1 / 1, 250, 250);
  };

  onUploadClick = async () => {
    hide("#js--uploader-options");
    show("#js--uploader-loading");
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
      const { data } = await axios.put(`/api/profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      });

      document.querySelector("#reset-btn").click();
      show("#js--uploader-options");
      hide("#js--uploader-loading");
      window.location.hash = "photo";
      window.location.hash = "";

      this.setState({
        photo: data.image,
        alertMessage: "Profile picture uploaded successfully.",
        alertType: "success",
        uploadPhotoMdl: false,
      });
    } catch (error) {
      document.querySelector("#reset-btn").click();
      show("#js--uploader-options");
      hide("#js--uploader-loading");

      this.setState({
        alertMessage: "There was problem with uploading.",
        alertType: "error",
        uploadPhotoMdl: false,
      });
    }
  };

  reset() {
    this.setState({ inputLabelHide: false });
    document.querySelector("#img-preview").src = "";
    hide("#upload-btn");
    hide("#reset-btn");
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

  render() {
    return (
      <React.Fragment>
        <div className="center-content margin-top-3">
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
            className="profile__img"
            src={this.state.photo}
            onError={() => {
              this.setState({ photo: "/images/users/placeholder.png" });
            }}
          />
          <br />
          <a
            href="javascript:void(0)"
            onClick={() => {
              this.setState({
                uploadPhotoMdl: true,
              });
            }}
            className="btn-text btn-text-underlined"
          >
            Change or upload a new photo
          </a>
        </div>

        <Modal
          header="Upload a profile photo"
          open={this.state.uploadPhotoMdl}
          onClose={() => {
            this.setState({ uploadPhotoMdl: false });
          }}
        >
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
                onClick={this.onUploadClick}
              >
                Upload
              </a>
            </div>

            <div
              className="image__upload--loading margin-top-2 display-none"
              id="js--uploader-loading"
            >
              <div className="center-content">
                <Loading />
              </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoUpload;
