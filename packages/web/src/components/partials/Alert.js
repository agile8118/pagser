import React from "react";

const Alert = ({ message, type, onClose, additionalClasses }) => {
  let className = "display-none";
  if (message) {
    if (type === "success") {
      className = "alert alert--success";
    }

    if (type === "error") {
      className = "alert alert--error";
    }

    if (type === "normall") {
      className = "alert alert--normall";
    }

    if (additionalClasses) {
      className += ` ${additionalClasses}`;
    }
  }

  return (
    <div className={className}>
      <span>{message}</span>
      <button onClick={onClose} type="button" className="alert__dismiss">
        <i className="fa fa-remove" />
      </button>
    </div>
  );
};

export default Alert;
