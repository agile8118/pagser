import React from "react";
import { connect } from "react-redux";
import { ConfirmModal } from "../partials/Modals";
import UploadPhoto from "../modals/UploadPhoto";

import {
  openUploadPhoto,
  deletePagePhoto,
  changePagePhoto,
  openConfModal,
  closeModal,
} from "actions";

const Photo = (props) => {
  return (
    <React.Fragment>
      {/* Show the page photo */}
      {!props.isPending && (
        <div className="page__photo">
          <img
            src={props.photo.secure_url}
            alt="Page featured image"
            onLoad={(e) => {
              e.target.classList.remove("display-none");
            }}
            onError={(e) => {
              e.target.classList.add("display-none");
            }}
          />
        </div>
      )}

      {/* Show additional content if the viewer is owner */}
      {!props.isPending &&
        props.status === "owner" && (
          <React.Fragment>
            {/* Confirm modal for photo page removal */}
            <ConfirmModal
              header="Remove your page photo"
              message="Are you really sure that you want to delete your page photo?
                  This cannot be undo."
              open={props.confMdl}
              onConfirm={() => {
                props.deletePagePhoto();
                props.closeModal();
              }}
              onCancel={() => props.closeModal()}
            />
            {/* Photo action buttons for owner */}
            {props.photo.secure_url ? (
              <React.Fragment>
                <button
                  className="btn btn-blue btn-sm btn-round margin-bottom-2 margin-right-1"
                  onClick={() => props.openUploadPhoto()}
                >
                  Change Page Photo
                </button>
                <button
                  className="btn btn-sm btn-round btn-red margin-bottom-2"
                  onClick={() => props.openConfModal()}
                >
                  Remove Page Photo
                </button>
              </React.Fragment>
            ) : (
              <button
                className="btn btn-blue btn-sm btn-round margin-bottom-2"
                onClick={() => props.openUploadPhoto()}
              >
                Upload Page Photo
              </button>
            )}
            {/* Upload photo modal */}
            <UploadPhoto
              header="Upload Page Photo"
              text="Upload a beautiful photo to be set as a featured image of your page:"
              cropMsg="Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thubmnail."
              inputLabelName="Choose a photo"
              url={`/api/pages/${props.id}/photo`}
              minWidth={1200}
              minHeight={675}
              size={8000000}
              aspectRatio={48 / 27}
              success={(image) => props.changePagePhoto(image)}
            />
          </React.Fragment>
        )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.pageData.id,
    photo: state.pageData.photo,
    status: state.pageData.status,
    isPending: state.pageData.isPending,
    confMdl: state.modals.confirmation.open,
  };
};

export default connect(
  mapStateToProps,
  {
    openUploadPhoto,
    deletePagePhoto,
    changePagePhoto,
    openConfModal,
    closeModal,
  }
)(Photo);
