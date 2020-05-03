import React from "react";
import { Link } from "react-router-dom";

const Collection = (props) => {
  let numText =
    props.pageNum && props.pageNum > 1
      ? `${props.pageNum} pages`
      : `${props.pageNum || 0} page`;

  return (
    <div className="collection-thumbnail">
      <Link to={`/collection/${props.id}`}>
        <div className="collection-thumbnail__photo">
          <img
            src={props.img}
            onError={(e) => {
              e.target.src = "/images/collection-placeholder.svg";
            }}
          />
          <div className="collection-thumbnail__num-label">
            {numText}{" "}
            {props.pageNum > 0 && (
              <i className="fa fa-newspaper-o" aria-hidden="true" />
            )}
          </div>
          <div className="collection-thumbnail__view-label">
            <i className="fa fa-eye" aria-hidden="true" />View
          </div>
        </div>
        <div className="collection-thumbnail__details">
          <div className="collection-thumbnail__name">{props.name}</div>
          <div className="collection-thumbnail__desc">{props.desc}</div>
          <div className="collection-thumbnail__author">{props.author}</div>
        </div>
      </Link>
    </div>
  );
};

export default Collection;
