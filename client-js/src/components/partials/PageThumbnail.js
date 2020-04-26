import React from "react";

const PageThumbnail = (props) => {
  if (props.noPhoto) {
    return (
      <div className={props.className} onClick={props.onClick}>
        <a href={props.url} target={props.target}>
          <div className="page-thumbnail__details">
            <h4>{props.title}</h4>
            <p>{props.briefDes}</p>
          </div>
        </a>
      </div>
    );
  }

  let briefDes = props.briefDes;
  let title = props.title;
  let url = "";
  let className = "";
  let target = props.target;

  if (props.type === "private") {
    url = `/${props.authorUsername}/${props.url}`;
  } else if (props.type === "public") {
    url = `/public-pages/${props.url}`;
  }

  if (props.title.length > 25) {
    title = props.title.substring(0, 25) + "...";
  }

  if (props.briefDes.length > 35) {
    briefDes = props.briefDes.substring(0, 35) + "...";
  }

  if (props.briefDes.length === 0) {
    briefDes = <em>No brief description provided.</em>;
  }

  if (props.status === "normal" || !props.status) {
    className = "page-thumbnail";
  } else if (props.status === "editing") {
    className = "page-thumbnail page-thumbnail--shaking";
    url = "javascript:void(0)";
    target = "_self";
  }

  if (props.selected) className += " page-thumbnail--selected";

  return (
    <div className={className} onClick={props.onClick}>
      <a href={url} target={target}>
        <div className="page-thumbnail__photo">
          <img
            src={props.image}
            onError={(e) => {
              e.target.src = "/images/pages/placeholder.svg";
            }}
          />
        </div>
        <div className="page-thumbnail__details">
          <h4>{title}</h4>
          <p>{briefDes}</p>
        </div>
        <span className="page-thumbnail__type">{props.type}</span>
      </a>
    </div>
  );
};

export default PageThumbnail;
