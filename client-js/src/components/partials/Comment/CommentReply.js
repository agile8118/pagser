import React, { useRef } from "react";
import { connect } from "react-redux";
import CommentActions from "./CommentActions";
import CommentBody from "./CommentBody";
import ReplyForm from "./addReplyForm";

import {
  addReplyForm,
  addComment,
  editCommentForm,
  editComment,
  openMdl,
  likeComment,
} from "actions";

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
              id={props.id}
              viewer={props.viewer}
              ref={addReplyInput}
              likes={props.likes}
              status={props.status}
              onReply={() => {
                props.addReplyForm(
                  props.parentCommentId,
                  "show",
                  props.id,
                  props.name
                );
              }}
              onLike={() => {
                props.likeComment(props.id, props.parentCommentId);
              }}
              onEdit={() => {
                props.editCommentForm(props.parentCommentId, "show", props.id);
              }}
              onDelete={() => {
                props.openMdl("confDeleteComment", props.id);
              }}
            />
          </div>
        </div>
        <CommentBody
          status={props.status} // Edit or normal
          inReplyToUser={props.inReplyToUser}
          text={props.text}
          id={props.parentCommentId} // comment id (parent comment)
          replyId={props.id} // comment id (reply comment)
        />
      </div>
      {props.status === "add-reply" && (
        <ReplyForm
          ref={addReplyInput}
          toName={props.toName}
          onSubmit={(text) => {
            props.addComment(text, props.parentCommentId, props.id, props.name);
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
  {
    addReplyForm,
    addComment,
    editCommentForm,
    editComment,
    openMdl,
    likeComment,
  }
)(CommentReply);
