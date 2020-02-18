import React from "react";

const InputFile = ({
  addClass,
  label,
  id,
  size,
  onChange,
  onClick,
  onError
}) => {
  let className = "file__upload--label";
  if (addClass) className += ` ${addClass}`;

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
          if (fileSize > size) {
            onError(`File size must be less than ${size / 1000000}MB.`);
          } else {
            const fileName = document.querySelector(`#${id}`).files[0].name;
            onChange(e, fileName);
          }
        }}
        onClick={e => {
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
