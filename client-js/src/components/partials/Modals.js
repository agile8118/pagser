import React from "react";

export const Modal = ({ children, header, open, onClose }) => {
  const className = open ? "mdl" : "mdl display-none";
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
  onConfirm
}) => {
  const className = open ? "mdl" : "mdl display-none";
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
          <p>{message}</p>

          <form
            onSubmit={e => {
              e.preventDefault();
              onConfirm();
            }}
          >
            <div className="right-content">
              <button type="submit" className="btn-round btn-round-danger">
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
