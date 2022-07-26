import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmModal, UploadPhoto } from "@pagser/reusable";

import {
  deletePhoto,
  setPhotoUrl,
  selectPhotoUrl,
  selectLoading,
  selectId,
} from "./pageSlice";
import { selectStatus } from "./userSlice";

const Photo = () => {
  const [uploadPhotoModalOpen, setUploadPhotoModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const pageId = useSelector(selectId);
  const status = useSelector(selectStatus);
  const loading = useSelector(selectLoading);
  const photoUrl = useSelector(selectPhotoUrl);

  const dispatch = useDispatch<any>();

  return (
    <React.Fragment>
      {/* Show the page photo */}
      {!loading && (
        <div className="page__photo">
          <img
            src={photoUrl}
            alt="Page featured image"
            onLoad={(e) => {
              (e.target as HTMLImageElement).classList.remove("display-none");
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).classList.add("display-none");
            }}
          />
        </div>
      )}

      {/* Show additional content if the viewer is owner */}
      {!loading && status === "owner" && (
        <React.Fragment>
          {/* Confirm modal for photo page removal */}
          <ConfirmModal
            header="Remove your page photo"
            message="Are you really sure that you want to delete your page photo?
                  This cannot be undone."
            open={confirmModalOpen}
            onConfirm={() => {
              dispatch(deletePhoto());
              setConfirmModalOpen(false);
            }}
            onCancel={() => setConfirmModalOpen(false)}
          />
          {/* Photo action buttons for owner */}
          {photoUrl ? (
            <React.Fragment>
              <button
                className="btn btn-blue btn-sm btn-round margin-bottom-2 margin-right-1"
                onClick={() => setUploadPhotoModalOpen(true)}
              >
                Change Page Photo
              </button>
              <button
                className="btn btn-sm btn-round btn-red margin-bottom-2"
                onClick={() => setConfirmModalOpen(true)}
              >
                Remove Page Photo
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-blue btn-sm btn-round margin-bottom-2"
              onClick={() => setUploadPhotoModalOpen(true)}
            >
              Upload Page Photo
            </button>
          )}
          {/* Upload photo modal */}
          <UploadPhoto
            open={uploadPhotoModalOpen}
            header="Upload Page Photo"
            text="Upload a beautiful photo to be set as a featured image of your page:"
            cropMsg="Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thumbnail."
            inputLabelName="Choose a photo"
            url={`/api/pages/${pageId}/photo`}
            minWidth={1200}
            minHeight={675}
            size={8000000}
            aspectRatio={48 / 27}
            success={(image) => dispatch(setPhotoUrl(image))}
            onClose={() => {
              setUploadPhotoModalOpen(false);
            }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Photo;
