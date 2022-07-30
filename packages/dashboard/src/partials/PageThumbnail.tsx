import React, { ReactElement } from "react";

interface IProps {
  id: string;
  status: "normal" | "editing";
  type: "public" | "private" | "draft";
  selected: boolean;
  noPhoto?: boolean;
  briefDes: string;
  title: string;
  target: string;
  label?: string;
  url: string;
  image: string;
  authorUsername: string;
  onClick: () => void;
}

const PageThumbnail = (props: IProps) => {
  if (props.noPhoto) {
    let briefDes: string | ReactElement = props.briefDes;
    let title = props.title;
    let url = "";
    let className = "";
    let target = props.target;

    if (props.title.length > 25) {
      title = props.title.substring(0, 25) + "...";
    }

    if (props.briefDes.length > 35) {
      briefDes = props.briefDes.substring(0, 35) + "...";
    }

    if (props.briefDes.length === 0) {
      briefDes = <em>No brief description provided.</em>;
    }

    if (props.type === "draft") {
      url = `/new-page/page-contents?id=${props.id}`;
    }

    if (props.status === "normal" || !props.status) {
      className = "page-thumbnail page-thumbnail-no-photo";
    } else if (props.status === "editing") {
      className =
        "page-thumbnail page-thumbnail-no-photo page-thumbnail--shaking";
      url = "javascript:void(0)";
      target = "_self";
    }

    if (props.status === "editing" && props.selected)
      className += " page-thumbnail--selected";

    return (
      <div className={className} onClick={props.onClick}>
        <a href={url} target={target}>
          <div className="page-thumbnail__details">
            <h4>{title}</h4>
            <p>{briefDes}</p>
          </div>
          {props.label && (
            <span className="page-thumbnail__type">{props.label}</span>
          )}
        </a>
      </div>
    );
  }

  let briefDes: string | ReactElement = props.briefDes;
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

  if (props.status === "editing" && props.selected)
    className += " page-thumbnail--selected";

  return (
    <div className={className} onClick={props.onClick}>
      <a href={url} target={target}>
        <div className="page-thumbnail__photo">
          <img
            src={props.image}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/pages/placeholder.svg";
            }}
          />
        </div>
        <div className="page-thumbnail__details">
          <h4>{title}</h4>
          <p>{briefDes}</p>
        </div>
        <span className="page-thumbnail__type">
          {props.label ? props.label : props.type}
        </span>
      </a>
    </div>
  );
};

export default PageThumbnail;
