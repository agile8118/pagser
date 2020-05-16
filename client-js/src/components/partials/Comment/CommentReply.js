import React, { useRef } from "react";
import { connect } from "react-redux";
import CommentActions from "./CommentActions";
import ReplyForm from "./addReplyForm";

import {
  addReplyForm,
  addComment,
  editCommentForm,
  editComment,
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
              status={props.status}
              onReply={() => {
                props.addReplyForm(
                  props.parentCommentId,
                  "show",
                  props.id,
                  props.name
                );
              }}
              onEdit={() => {
                props.editCommentForm(
                  props.parentCommentId,
                  "show",
                  props.id,
                  props.inReplyToUser
                );
              }}
            />
          </div>
        </div>
        <div className="comment__body">
          {props.status === "edit" ? (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                props.editComment(
                  props.id,
                  e.target.children[0].children[1].value
                );
              }}
            >
              <div className="form__group">
                {props.inReplyToUser && (
                  <span
                    className="form__input__text-label"
                    ref={(elem) => {
                      // Add a left padding to the input because of the name label
                      if (elem)
                        elem.nextSibling.style.paddingLeft = `${elem.clientWidth +
                          10}px`;
                    }}
                  >
                    {props.inReplyToUser}
                  </span>
                )}
                <textarea
                  rows={1}
                  required
                  className="form__input form__input--lined"
                  ref={(el) => {
                    if (el) {
                      el.value = props.text;
                      el.focus();
                    }
                  }}
                />
              </div>

              <div className="right-content">
                <button
                  type="button"
                  onClick={() =>
                    props.editCommentForm(
                      props.parentCommentId,
                      "hide",
                      props.id
                    )
                  }
                  className="btn btn-sm btn-default  margin-right-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-sm btn-blue ">
                  Update
                </button>
              </div>
            </form>
          ) : (
            <p>
              {props.inReplyToUser && (
                <span className="a-17">{props.inReplyToUser}</span>
              )}
              {props.text}
            </p>
          )}
        </div>
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
  { addReplyForm, addComment, editCommentForm, editComment }
)(CommentReply);
