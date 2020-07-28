import React, { Component } from "react";
import { getParameterByName } from "../../lib/util";
import { connect } from "react-redux";
import ProgressBar from "../partials/ProgressBar";
import UploadPhoto from "../modals/UploadPhoto";

import { openUploadPhoto, openConfModal, closeModal } from "actions";

class PageThumbnail extends Component {
  state = { error: "" };

  componentDidMount() {}

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
          Upload a beautiful photo to be set as a thumbnail of your page:
        </p>

        <button
          className="btn btn-blue btn-sm btn-round margin-bottom-2"
          onClick={() => this.props.openUploadPhoto()}
        >
          <i className="fa fa-upload" /> Upload a Page Photo
        </button>

        <p className="a-18 italic">
          You can always upload a new photo after you published your page, you
          can also skip uploading a photo for now and do it after you published
          your page.
        </p>

        {/* Upload photo modal */}
        <UploadPhoto
          header="Upload Page Photo"
          text="Upload a stunning photo to be set as a featured image of your page:"
          cropMsg="Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thumbnail."
          inputLabelName="Choose a photo"
          // url={`/api/pages/${props.id}/photo`}
          minWidth={1200}
          minHeight={675}
          size={8000000}
          aspectRatio={48 / 27}
          // success={(image) => props.changePagePhoto(image)}
        />

        {/* Next button */}
        <div className="center-content margin-top-2">
          <button
            className="btn btn-default"
            onClick={() => {
              this.onNextButtonClicked();
            }}
          >
            Skip
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

export default connect(
  mapStateToProps,
  {
    openUploadPhoto,
    openConfModal,
    closeModal,
  }
)(PageThumbnail);
