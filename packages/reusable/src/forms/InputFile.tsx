import React from "react";
import { alert } from "@pagser/common";

interface IProps {
  addClass?: string;
  hide?: boolean;
  label: string;
  id: string;
  size: number;
  type?: "image";
  minWidth?: number;
  minHeight?: number;
  onChange: (
    event: React.FormEvent<HTMLInputElement>,
    fileName: string,
    imgUrl?: string
  ) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onError: (message: string) => void;
}

const InputFile = ({
  addClass,
  hide,
  label,
  id,
  size,
  type,
  minWidth,
  minHeight,
  onChange,
  onClick,
  onError,
}: IProps) => {
  let className = "file__upload--label";
  if (addClass) className += ` ${addClass}`;
  if (hide) className += " display-none";

  return (
    <React.Fragment>
      <label htmlFor={id} className={className}>
        <i className="fa fa-cloud-upload" aria-hidden="true" />{" "}
        <span>{label}</span>
      </label>
      <input
        id={id}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          const inputEl = document.querySelector(`#${id}`) as HTMLInputElement;
          const inputFiles = inputEl.files;
          let inputFile;
          if (inputFiles) inputFile = inputFiles[0];

          const fileSize = inputFile?.size;
          const fileName = inputFile?.name;
          const fileType = inputFile?.type;

          if (!fileSize || !fileName || !fileType) {
            alert(
              "Sorry, something unexpected happened. Please try again or contact our support.",
              "error"
            );
            return;
          }

          // Always validate file size
          if (fileSize > size)
            return onError(`File size must be less than ${size / 1000000}MB.`);

          // Validate file type if 'type' property has been specified
          switch (type) {
            case "image":
              if (!minHeight || !minWidth) {
                throw new Error(
                  "Please specify minHeight and minWidth for the component with the type of 'image'."
                );
              }
              // Validate if the file is image
              if (
                fileType !== "image/jpg" &&
                fileType !== "image/png" &&
                fileType !== "image/jpeg"
              )
                return onError("Only jpeg/jpg/png images are allowed.");
              // Validate if the image has the min width and height
              // @ts-ignore
              const imgUrl = URL.createObjectURL(e.target.files[0]);
              let image = new Image();
              image.onload = function () {
                if (
                  (this as any).height < minHeight ||
                  (this as any).width < minWidth
                ) {
                  onError(
                    `Please upload an image with the minimum dimensions of at least ${minWidth} * ${minHeight} pixels.`
                  );
                } else {
                  onChange(e, fileName, imgUrl);
                }
              };
              image.src = imgUrl;
              break;
            default:
              onChange(e, fileName);
          }
        }}
        onClick={(e) => {
          // Reset the input file value before choosing a new file
          // @ts-ignore
          document.querySelector(`#${id}`).value = null;
          onClick(e);
        }}
        type="file"
        name="file"
        placeholder={label}
      />
    </React.Fragment>
  );
};

export default InputFile;
