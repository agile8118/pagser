import React from "react";

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
  onError
}) => {
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
        onChange={e => {
          const fileSize = document.querySelector(`#${id}`).files[0].size;
          const fileName = document.querySelector(`#${id}`).files[0].name;
          const fileType = document.querySelector(`#${id}`).files[0].type;

          // Always validate file size
          if (fileSize > size)
            return onError(`File size must be less than ${size / 1000000}MB.`);

          // Validate file type if 'type' property has been specified
          switch (type) {
            case "image":
              // Validate if the file is image
              if (
                fileType !== "image/jpg" &&
                fileType !== "image/png" &&
                fileType !== "image/jpeg"
              )
                return onError("Only jpeg/jpg/png images are allowed.");
              // Validate if the image has the min width and height
              const imgUrl = URL.createObjectURL(e.target.files[0]);
              let image = new Image();
              image.onload = function() {
                if (this.height < minHeight || this.width < minWidth) {
                  onError(
                    `Please upload an image with minilam dimention of at least ${minWidth} * ${minHeight} pixels.`
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
        onClick={e => {
          // Reset the input file value before choosing a new file
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
