import React, { useState, useEffect } from "react";
import { UploadPhoto } from "@pagser/reusable";
import { request } from "@pagser/common";

const Photo = () => {
  const [photo, setPhoto] = useState("/images/users/placeholder.png");
  const [uploadPhotoModal, setUploadPhotoModal] = useState(false);

  // Is used to avoid memory leak.
  // This was used when the component was class based, we need to figure out
  // whether or not it's still needed in the function based components with hooks.
  let _isMounted = false;

  useEffect(() => {
    (async () => {
      _isMounted = true;
      try {
        // Get the user photo from server
        const response = (await request.get(`/profile`, { auth: true })) as any;

        const user = response.user;
        if (_isMounted) {
          setPhoto(user.photo.secure_url || "/images/users/placeholder.png");
        }
      } catch (e: any) {
        if (e.status === 401) {
          window.location.href = "/login?redirected=admin";
        }
      }
    })();

    return () => {
      // Set the _isMounted as false so that no ajax request will be made after the unmount
      _isMounted = false;
    };
  }, []);

  return (
    <React.Fragment>
      <div className="center-content margin-top-3">
        <h3 className="heading-tertiary" id="photo">
          Photo
        </h3>
        <img
          className="profile__img"
          src={photo}
          onError={() => {
            setPhoto("/images/users/placeholder.png");
          }}
        />
        <br />
        <a
          href="javascript:void(0)"
          onClick={() => {
            setUploadPhotoModal(true);
          }}
          className="btn-text btn-text-underlined"
        >
          Change or upload a new photo
        </a>
      </div>

      <UploadPhoto
        open={uploadPhotoModal}
        header="Upload a Profile Photo"
        text="Upload a beautiful non-pixelated photo of yourself:"
        inputLabelName="Choose your photo"
        url="/profile/photo"
        minWidth={250}
        minHeight={250}
        size={5000000}
        aspectRatio={1 / 1}
        success={(photo) => {
          setPhoto(photo);
        }}
        onClose={() => {
          setUploadPhotoModal(false);
        }}
      />
    </React.Fragment>
  );
};

export default Photo;
