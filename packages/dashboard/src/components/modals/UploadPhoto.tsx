import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal, Loading, InputFile, Button } from "@pagser/reusable";
import { alert, request } from "@pagser/common";

interface IProps {
  header: string;
  text: string;
  cropMsg?: string;
  inputLabelName: string;
  url: string;
  minWidth: number;
  minHeight: number;
  size: number;
  aspectRatio: number;
  success: (imageUrl: string) => void;
  onClose: () => void;
  open: boolean;
}

const UploadPhoto = (props: IProps) => {
  const [status, setStatus] = useState<"clean" | "loading" | "cropping">(
    "clean"
  );
  const [error, setError] = useState("");
  const [cropData, setCropData] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    // Load Crooper javascript file
    const script = document.createElement("script");
    script.setAttribute("src", "/cropper.min.js");
    document.head.appendChild(script);

    // Load Crooper css file
    const stylesheet = document.createElement("link");
    stylesheet.href = "/cropper.min.css";
    stylesheet.type = "text/css";
    stylesheet.rel = "stylesheet";
    document.head.appendChild(stylesheet);
  }, []);

  // When user selects a photo
  const onFileInputChange = (e, fileName, imgUrl) => {
    setError("");
    setStatus("cropping");
    (document.querySelector("#img-preview") as HTMLImageElement).src = imgUrl;
    crop(props.aspectRatio, props.minWidth, props.minHeight);
  };

  // When user clicks on upload button
  const onUploadClick = async () => {
    setStatus("loading");

    // Prepare the form data to be sent to server
    let formData = new FormData();
    // @ts-ignore
    formData.append("img", document.querySelector("#image-input").files[0]);
    formData.set(
      "cropData",
      `{ "x": "${cropData.x}", "y": "${cropData.y}", "width": "${cropData.width}", "height": "${cropData.height}" }`
    );

    try {
      const response = (await request.put(props.url, formData, {
        auth: true,
        contentType: "multipart/form-data",
      })) as any;
      // @ts-ignore
      document.querySelector("#reset-btn").click();
      props.onClose();
      // Call the success function so that the parent component will get notified
      props.success(response.image);
      alert("Photo was uploaded successfully.", "success");
      setStatus("clean");
    } catch (e) {
      // @ts-ignore
      document.querySelector("#reset-btn").click();
      setStatus("clean");
      alert("There was an error with uploading your photo.", "error");
      props.onClose();
    }
  };

  // Reset the photo choosing
  const reset = () => {
    setStatus("clean");
    // @ts-ignore
    document.querySelector("#img-preview").src = "";
  };

  // Start the cropper on the image preview
  const crop = (aspect: number, minW: number, minH: number) => {
    const image = document.getElementById("img-preview");
    // @ts-ignore
    const cropper = new Cropper(image, {
      aspectRatio: aspect,
      viewMode: 3,
      background: false,
      modal: false,
      zoomable: false,
      minCropBoxWidth: minW,
      minCropBoxHeight: minH,
      cropend: () => {
        setCropData({
          x: cropper.getData().x,
          y: cropper.getData().y,
          width: cropper.getData().width,
          height: cropper.getData().height,
        });
      },
      ready: function () {
        const self = this;
        // @ts-ignore
        document
          .querySelector("#reset-btn")
          .addEventListener("click", function () {
            if (self.cropper) {
              self.cropper.destroy();
            }
          });
        setCropData({
          x: cropper.getData().x,
          y: cropper.getData().y,
          width: cropper.getData().width,
          height: cropper.getData().height,
        });
      },
    });
  };

  return createPortal(
    <Modal
      header={props.header}
      open={props.open}
      onClose={() => {
        props.onClose();
        setError("");
      }}
    >
      <p className="image__upload--text">{props.text}</p>
      <p className="image__upload--error">{error}</p>

      {/* Message to show when user is cropping */}
      <em
        className={`image__upload--crop-msg ${
          props.cropMsg && status === "cropping" ? "" : "display-none"
        }`}
      >
        {props.cropMsg}
      </em>

      {/* Input file */}
      <InputFile
        addClass="margin-bottom-2"
        hide={status !== "clean"}
        label={props.inputLabelName}
        id="image-input"
        size={props.size}
        type="image"
        minWidth={props.minWidth}
        minHeight={props.minHeight}
        onChange={onFileInputChange}
        onClick={(e) => {}}
        onError={(error) => {
          setError(error);
          reset();
        }}
      />

      {/* Image preview - Should be in a div tag otherwise Cropper won't work as expected */}
      <div>
        <img id="img-preview" />
      </div>

      {/* Options section */}
      <div
        className={`image__upload--options margin-top-2 ${
          status === "cropping" ? "" : "display-none"
        }`}
      >
        <Button
          id="reset-btn"
          rounded={true}
          color="blue"
          outlined={true}
          onClick={() => {
            reset();
          }}
        >
          Choose another photo
        </Button>

        <Button
          color="blue"
          rounded={true}
          onClick={() => {
            onUploadClick();
          }}
        >
          Upload
        </Button>
      </div>

      {/* Loading section */}
      {status === "loading" && (
        <div className="image__upload--loading margin-top-2">
          <div className="center-content">
            <Loading />
          </div>
        </div>
      )}
    </Modal>,
    document.querySelector("#modal-root") as HTMLElement
  );
};

export default UploadPhoto;
