import React, { useState } from "react";
import { createPortal } from "react-dom";
import { alert, request } from "@pagser/common";
import Modal from "./Modal";
import Loading from "../Loading";
import InputFile from "../forms/InputFile";
import Button from "../forms/Button";

interface IProps {
  header: string;
  text: string;
  size: number;
  url: string;
  success: () => void;
  onClose: () => void;
  open: boolean;
}

const UploadPhoto = (props: IProps) => {
  const [status, setStatus] = useState<"clean" | "loading" | "onFile">("clean");
  const [error, setError] = useState("");
  const [inputLabelName, setInputLabelName] = useState("Upload a File");

  // When user selects a file
  const onFileInputChange = (e, fileName: string) => {
    setStatus("onFile");
    setError("");
    setInputLabelName(fileName);
  };

  // When user clicks on upload button
  const onUploadClick = async () => {
    setStatus("loading");

    // Prepare the form data to be sent to server
    let formData = new FormData();
    // @ts-ignore
    const file = document.querySelector("#file-input").files[0];
    formData.append("file", file);

    try {
      await request.post(props.url, formData, {
        auth: true,
        contentType: "multipart/form-data",
      });

      props.onClose();
      // Call the success function so that the parent component will get notified
      props.success();
      reset();
    } catch (e: any) {
      let msg = "There was an error with uploading your photo.";
      if (e.message) msg = e.message;

      alert(msg, "error");
      reset();
      props.onClose();
    }
  };

  // Reset the photo choosing
  const reset = () => {
    setStatus("clean");
    setInputLabelName("Upload a File");
  };

  return (
    <Modal
      header={props.header}
      open={props.open}
      onClose={() => {
        props.onClose();
        setError("");
      }}
    >
      <p className="">{props.text}</p>
      <p className="image__upload--error">{error}</p>

      {/* Input file */}
      <InputFile
        addClass={status === "clean" ? "margin-bottom-2" : "margin-bottom-0"}
        label={inputLabelName}
        id="file-input"
        size={props.size}
        onChange={onFileInputChange}
        onClick={(e) => {
          setError("");
        }}
        onError={(error) => {
          setError(error);
          setInputLabelName("Upload a File");
          reset();
        }}
      />

      {/* Options section */}
      <div
        className={`image__upload--options ${
          status === "onFile" ? "" : "display-none"
        }`}
      >
        <Button
          color="blue"
          rounded={true}
          outlined={true}
          onClick={() => {
            reset();
            props.onClose();
          }}
        >
          Cancel
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
        <div className="image__upload--loading margin-top-1">
          <div className="center-content">
            <Loading />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default UploadPhoto;
