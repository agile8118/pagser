import React from "react";
import { COLLECTION_PLACEHOLDER_IMAGE } from "@pagser/common";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  refresh?: boolean;
  target?: string;
  pageNum: number;
  img: string;
  name: string;
  desc: string;
  author: string;
  onClick?: () => void;
}

const Collection = (props: IProps) => {
  let numText =
    props.pageNum && props.pageNum > 1
      ? `${props.pageNum} pages`
      : `${props.pageNum || 0} page`;

  const name =
    props.name.length > 25 ? props.name.substring(0, 25) + "..." : props.name;
  const desc =
    props.desc.length > 35 ? props.desc.substring(0, 35) + "..." : props.desc;

  const content = (
    <React.Fragment>
      <div className="collection-thumbnail__photo">
        <img
          src={props.img}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              COLLECTION_PLACEHOLDER_IMAGE;
          }}
        />
        <div className="collection-thumbnail__num-label">
          {numText}{" "}
          {props.pageNum > 0 && (
            <i className="fa fa-newspaper-o" aria-hidden="true" />
          )}
        </div>
        <div className="collection-thumbnail__view-label">
          <i className="fa fa-eye" aria-hidden="true" />
          View
        </div>
      </div>
      <div className="collection-thumbnail__details">
        <div className="collection-thumbnail__name">{name}</div>
        <div className="collection-thumbnail__desc">{desc}</div>
        <div className="collection-thumbnail__author">{props.author}</div>
      </div>
    </React.Fragment>
  );

  return (
    <div className="collection-thumbnail" onClick={props.onClick}>
      {props.refresh ? (
        <a href={`/collection/${props.id}`} target={props.target}>
          {content}
        </a>
      ) : (
        <Link to={`/collection/${props.id}`}>{content}</Link>
      )}
    </div>
  );
};

export default Collection;
