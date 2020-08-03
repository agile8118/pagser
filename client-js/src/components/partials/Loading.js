import React from "react";

const Loading = ({ className }) => {
  return (
    <div className={`lds-css ng-scope ${className}`}>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
