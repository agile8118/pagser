import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getParameterByName, loadingModal, showSnackBar } from "../../lib/util";
import ProgressBar from "../partials/ProgressBar";
import UploadPhoto from "../modals/UploadPhoto";
import { ConfirmModal } from "../partials/Modals";
import Loading from "../partials/Loading";

import { openUploadPhoto, openConfModal, closeModal } from "actions";

class PageThumbnail extends Component {
  state = { photo: "", loaded: false, error: "" };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `/api/new-page/page-thumbnail/${getParameterByName(
          "id",
          window.location.href
        )}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      this.setState({
        photo: data.page.photo.secure_url,
        loaded: true,
      });
    } catch (error) {
      if (error.response.status === 401) {
        window.location.href = "/login?redirected=new-page";
      } else {
        this.props.history.push(`/new-page/initial-step`);
      }
    }
  }

  // Delete the photo user's uploaded
  async deletePagePhoto() {
    loadingModal("Removing the photo...");

    try {
      await axios.delete(
        `/api/pages/${getParameterByName(
          "id",
          window.location.href
        )}/photo?type=draft`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      this.setState({ photo: "" });
      loadingModal();
      showSnackBar("Photo successfully removed..", "success");
    } catch (e) {
      loadingModal();
      showSnackBar("There was problem with removing the photo.", "error");
    }
  }

  onBackButtonClicked = () => {
    this.props.history.push(
      `/new-page/page-contents?id=${getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  onNextButtonClicked = () => {
    this.props.history.push(
      `/new-page/attach-files?id=${getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  renderContents() {
    if (!this.state.loaded)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return (
      <React.Fragment>
        {/* Back button */}
        <button
          className="btn-text btn-text-big a-11"
          onClick={this.onBackButtonClicked}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>

        {/* Stage title */}
        <div className="center-content">
          <h3 className="heading-tertiary">Choose a page thumbnail</h3>
        </div>

        <p className="a-18">
          {this.state.photo
            ? "This photo you've uploaded will be used for your page thumbnail:"
            : "Upload a beautiful photo to be set as a thumbnail of your page:"}
        </p>

        {this.state.photo && (
          <img className="margin-bottom-1" src={this.state.photo} />
        )}

        <button
          className="btn btn-blue btn-sm btn-round margin-bottom-2 margin-right-1"
          onClick={() => this.props.openUploadPhoto()}
        >
          {/* <i className="fa fa-upload" />{" "} */}
          {this.state.photo ? "Change Page Photo" : "Upload a Page Photo"}
        </button>

        {this.state.photo && (
          <button
            className="btn btn-red btn-sm btn-round margin-bottom-2"
            onClick={() => this.props.openConfModal()}
          >
            Remove Page Photo
          </button>
        )}

        <p className="a-18 italic">
          {this.state.photo
            ? "You can always change or remove your page photo after you published your page."
            : "You can always upload a new photo after you published your page, you can also skip uploading a photo for now and do it after you published your page."}
        </p>

        {/* Upload photo modal */}
        <UploadPhoto
          header="Upload Page Photo"
          text="Upload a stunning photo to be set as a featured image of your page:"
          cropMsg="Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thumbnail."
          inputLabelName="Choose a photo"
          url={`/api/pages/${getParameterByName(
            "id",
            window.location.href
          )}/photo?type=draft`}
          minWidth={1200}
          minHeight={675}
          size={8000000}
          aspectRatio={48 / 27}
          success={(imageUrl) => {
            this.setState({ photo: imageUrl });
          }}
        />

        {/* Confirm modal for photo page removal */}
        {this.state.photo && (
          <ConfirmModal
            header="Remove your page photo"
            message="Are you sure that you want to delete your page photo?
                  This cannot be undo."
            open={this.props.confMdl}
            onConfirm={() => {
              this.deletePagePhoto();
              this.props.closeModal();
            }}
            onCancel={() => this.props.closeModal()}
          />
        )}

        {/* Next button */}
        <div className="center-content margin-top-2">
          <button
            className={this.state.photo ? "btn btn-blue" : "btn btn-default"}
            onClick={() => {
              this.onNextButtonClicked();
            }}
          >
            {this.state.photo ? "Next" : "Skip"}
          </button>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <ProgressBar width={60} />
        <div className="page-new">{this.renderContents()}</div>

        <div className="page-new__note-box">
          <h3>Why it's important to choose a thumbnail for your page?</h3>
          <p>
            A good page thumbnail will really help to increase your page views
            and let other users to distinguish your page more and make it more
            recognizable if they add it to their collections or other places.
          </p>
          <p>
            <strong>
              We highly recommend that you choose a photo for your page
              thumbnail.
            </strong>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    confMdl: state.modals.confirmation.open,
  };
};

export default connect(mapStateToProps, {
  openUploadPhoto,
  openConfModal,
  closeModal,
})(PageThumbnail);
