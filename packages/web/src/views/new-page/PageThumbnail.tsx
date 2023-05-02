import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { util, request, loadingModal, alert } from "@pagser/common";
import { Loading, Button, ConfirmModal, UploadPhoto } from "@pagser/reusable";
import ProgressBar from "./ProgressBar";

const PageThumbnail = () => {
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const [uploadPhotoMdl, setUploadPhotoMdl] = useState(false);
  const [confirmationMdl, setConfirmationMdl] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = (await request.get(
          `/new-page/page-thumbnail/${util.getParameterByName(
            "id",
            window.location.href
          )}`,
          { auth: true }
        )) as any;

        setPhoto(response?.page?.photo_url);
        setLoading(false);
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = "/login?redirected=new-page";
        } else {
          navigate(`/new-page/initial-step`);
        }
      }
    })();
  }, []);

  // Delete the photo user's uploaded
  const deletePagePhoto = async () => {
    loadingModal("Removing the photo...");

    try {
      await request.delete(
        `/pages/${util.getParameterByName(
          "id",
          window.location.href
        )}/photo?type=draft`,
        { auth: true }
      );

      setPhoto("");
      loadingModal();
      alert("Photo was successfully removed.", "success");
    } catch (e) {
      loadingModal();
      alert("There was problem with removing the photo.", "error");
    }
  };

  const onBackButtonClicked = () => {
    navigate(
      `/new-page/page-contents?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const onNextButtonClicked = () => {
    navigate(
      `/new-page/attach-files?id=${util.getParameterByName(
        "id",
        window.location.href
      )}`
    );
  };

  const renderContents = () => {
    if (loading)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return (
      <React.Fragment>
        {/* Back button */}
        <button
          className="button-text button-text--big a-11"
          onClick={() => {
            onBackButtonClicked();
          }}
        >
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>

        {/* Stage title */}
        <div className="center-content">
          <h3 className="heading-tertiary">Choose a Page Thumbnail</h3>
        </div>

        <p className="a-18">
          {photo
            ? "This photo will be used for your page thumbnail:"
            : "Upload a beautiful photo to set as a thumbnail of your page:"}
        </p>

        {photo && <img src={photo} />}

        <div className="new-page-thumbnail__action-buttons">
          {photo && (
            <Button
              size="small"
              rounded={true}
              color="red"
              onClick={() => {
                setConfirmationMdl(true);
              }}
            >
              <i className="fa fa-trash button__icon-left" />
              Remove Page Photo
            </Button>
          )}

          <Button
            color="blue"
            rounded={true}
            size="small"
            onClick={() => {
              setUploadPhotoMdl(true);
            }}
          >
            <i className="fa fa-upload button__icon-left" />
            {photo ? "Change Page Photo" : "Upload a Page Photo"}
          </Button>
        </div>

        <p className="a-18 italic">
          {photo
            ? "You can always change or remove your page photo after you published your page."
            : "You can always upload a new photo after you published your page, you can also skip uploading a photo for now and do it after publishing the page."}
        </p>

        {/* Upload photo modal */}
        <UploadPhoto
          open={uploadPhotoMdl}
          onClose={() => {
            setUploadPhotoMdl(false);
          }}
          header="Upload Page Photo"
          text="Upload a stunning photo to set as the featured image of your page:"
          cropMsg="Choose an area to be shown as for the page thumbnail, this won't
                crop your image, this is just the area that will be shown as the
                thumbnail."
          inputLabelName="Choose a photo"
          url={`/pages/${util.getParameterByName(
            "id",
            window.location.href
          )}/photo?type=draft`}
          minWidth={1200}
          minHeight={675}
          size={8000000}
          aspectRatio={48 / 27}
          success={(imageUrl) => {
            setPhoto(imageUrl);
          }}
        />

        {/* Confirm modal for photo page removal */}
        {photo && (
          <ConfirmModal
            header="Remove your page photo"
            message="Are you sure that you want to delete your page photo?
                  This cannot be undo."
            open={confirmationMdl}
            onConfirm={() => {
              deletePagePhoto();
              setConfirmationMdl(false);
            }}
            onCancel={() => {
              setConfirmationMdl(false);
            }}
          />
        )}

        {/* Next button */}
        <div className="u-flex-text-center">
          <Button
            onClick={() => {
              onNextButtonClicked();
            }}
            color={photo ? "blue" : "default"}
          >
            {photo ? "Next" : "Skip"}

            <i className="fa fa-arrow-circle-right button__icon-right"></i>
          </Button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ProgressBar width={60} />
      <div className="page-new">{renderContents()}</div>

      <div className="page-new__note-box">
        <h3>Why it's important to choose a thumbnail for your page?</h3>
        <p>
          A good page thumbnail will help to increase your page views and let
          other users distinguish your page more and make it more recognizable
          if they add it to their collections or other places.
        </p>
        <p>
          <strong>
            We highly suggest you choose a photo for your page thumbnail.
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default PageThumbnail;
