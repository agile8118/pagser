import React from "react";

export const Modal = ({ children, header, open, type, onClose }) => {
  let className = open ? "mdl" : "mdl display-none";
  if (type === "small") className += " mdl-sm";
  return (
    <div className={className}>
      <div className="mdl__content">
        <div className="mdl__header">
          <span className="mdl__close" onClick={onClose}>
            &times;
          </span>
          <h3 className="heading-tertiary">{header}</h3>
        </div>

        <div className="mdl__body">{children}</div>
      </div>
    </div>
  );
};

export const ConfirmModal = ({
  header,
  message,
  open,
  onCancel,
  onConfirm,
  btnName,
  children,
}) => {
  const className = open ? "mdl mdl-conf" : "mdl mdl-conf display-none";
  return (
    <div className={className}>
      <div className="mdl__content">
        <div className="mdl__header">
          <span className="mdl__close" onClick={onCancel}>
            &times;
          </span>
          <h3 className="heading-tertiary">{header}</h3>
        </div>

        <div className="mdl__body">
          {message || children}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onConfirm();
            }}
          >
            <div className="right-content">
              <button type="submit" className="btn btn-round btn-red">
                {btnName ? btnName : "Remove"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
