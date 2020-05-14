import React, { useRef } from "react";
import { connect } from "react-redux";
import CommentActions from "./CommentActions";
import ReplyForm from "./addReplyForm";

import { addReplyForm, addComment } from "actions";

const CommentReply = (props) => {
  const addReplyInput = useRef();

  return (
    <React.Fragment key={props.id}>
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
            <CommentActions
              viewer={props.viewer}
              ref={addReplyInput}
              onReply={() => {
                props.addReplyForm(
                  props.parentCommentId,
                  "show",
                  props.id,
                  props.name
                );
              }}
            />
          </div>
        </div>
        <div className="comment__body">
          <p>{props.text}</p>
        </div>
      </div>
      {props.status === "add-reply" && (
        <ReplyForm
          ref={addReplyInput}
          toName={props.toName}
          onSubmit={(text) => {
            props.addComment(text, props.parentCommentId, props.id);
          }}
          onCancel={() => {
            props.addReplyForm(props.parentCommentId, "hide", props.id);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default connect(
  null,
  { addReplyForm, addComment }
)(CommentReply);
