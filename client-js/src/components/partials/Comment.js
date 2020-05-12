import React from "react";
import { connect } from "react-redux";

import { fetchReplies } from "actions";

const Comment = (props) => {
  const editDeleteBtns = (
    <React.Fragment>
      <button className="btn-i btn-i-big btn-i-blue" onClick={() => {}}>
        <i className="fa fa-pencil-square-o" />
      </button>
      <button className="btn-i btn-i-big btn-i-blue" onClick={() => {}}>
        <i className="fa fa-trash" />
      </button>
    </React.Fragment>
  );

  const ratingBtns = (
    <div className="comment__ratings">
      <div>
        <span>1</span>
        <button className="btn-i btn-i-big btn-i-blue">
          <i className="fa fa-thumbs-up" />
        </button>
      </div>
      <div>
        <span>0</span>
        <button className="btn-i btn-i-big btn-i-blue">
          <i className="fa fa-thumbs-down" />
        </button>
      </div>
    </div>
  );

  const replyBtn = (
    <a
      className="btn-i btn-i-big btn-i-blue"
      href="#add-comment"
      onClick={() => {}}
    >
      <i className="fa fa-reply" />
    </a>
  );

  let replies;
  if (typeof props.replies === "number" && props.replies > 0) {
    replies = (
      <div className="right-content">
        <a
          href="javascript:void(0)"
          className="btn btn-text  comment__view-replys"
          onClick={() => {
            props.fetchReplies(props.id);
          }}
        >
          View all {props.replies} replies
          <i className="fa fa-caret-down" aria-hidden="true" />
        </a>
      </div>
    );
  } else if (props.replies && props.replies.length > 0) {
    replies = props.replies.map((comment) => {
      return (
        <div className="comment comment-reply" key={comment.id}>
          <div className="comment__header">
            <div className="display-flex">
              <img
                className="comment__header__image"
                src={comment.author.photo}
                alt="comment's author image"
                onError={(e) => {
                  e.target.src = "/images/users/placeholder.png";
                }}
              />
              <div className="comment__header__name-and-date">
                <span>{comment.author.name}</span>
                <span>{comment.date}</span>
              </div>
            </div>
            <div className="comment__header__actions">
              {comment.viewer !== "owner" && ratingBtns}
              {comment.viewer === "owner" && editDeleteBtns}
              {replyBtn}
            </div>
          </div>
          <div className="comment__body">
            <p>{comment.text}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="display-flex">
          <img
            className="comment__header__image"
            src={props.photo}
            alt="comment's author image"
            onError={(e) => {
              e.target.src = "/images/users/placeholder.png";
            }}
          />
          <div className="comment__header__name-and-date">
            <span>{props.name}</span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className="comment__header__actions">
          {props.viewer !== "owner" && ratingBtns}
          {props.viewer === "owner" && editDeleteBtns}
          {replyBtn}
        </div>
      </div>
      <div className="comment__body">
        <p>{props.text}</p>
      </div>
      {replies}
    </div>
  );
};

export default connect(
  null,
  { fetchReplies }
)(Comment);
