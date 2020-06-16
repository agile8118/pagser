import React from "react";

const SubscriptionThumbnail = (props) => {
  return (
    <div className="sub-thumbnail">
      <a
        href={`/users/${props.username}`}
        target="_blank"
        className="sub-thumbnail__info"
      >
        <img className="sub-thumbnail__info-image" src={props.image} />
        <div className="sub-thumbnail__info-text">
          <div className="sub-thumbnail__info-name">{props.name}</div>
          <div className="sub-thumbnail__info-headline">{props.headline}</div>
        </div>
      </a>
      <a
        href={`/users/${props.username}/pages`}
        className="btn btn-default btn-round"
      >
        View latest pages
      </a>
    </div>
  );
};

export default SubscriptionThumbnail;
