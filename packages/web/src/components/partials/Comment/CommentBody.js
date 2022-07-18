import React from "react";
import { connect } from "react-redux";

import { editComment, editCommentForm } from "actions";

const CommentBody = (props) => {
  return (
    <div className="comment__body">
      {props.status === "edit" ? (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();

            const value = e.target.children[0].children[1]
              ? e.target.children[0].children[1].value
              : e.target.children[0].children[0].value;

            props.editComment(props.id, value);
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
                props.editCommentForm(props.id, "hide", props.replyId)
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
  );
};

export default connect(
  null,
  { editComment, editCommentForm }
)(CommentBody);
