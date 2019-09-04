import React from "react";

const PageThumbnail = props => {
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
  } else {
    return (
      <div className={props.className} onClick={props.onClick}>
        <a href={props.url} target={props.target}>
          <div className="page-thumbnail__photo">
            <img
              src={props.image}
              onError={e => {
                e.target.src = "/images/pages/placeholder.svg";
              }}
            />
          </div>
          <div className="page-thumbnail__details">
            <h4>{props.title}</h4>
            <p>{props.briefDes}</p>
          </div>
          <span className="page-thumbnail__type">{props.type}</span>
        </a>
      </div>
    );
  }
};

export default PageThumbnail;
