import React from "react";
import { useDispatch } from "react-redux";
import {
  TStatus,
  changeCommentStatus,
  editComment,
} from "../../views/show-page/commentsSlice";

interface IProps {
  status: TStatus;
  inReplyToUser?: string;
  text: string;
  id: string;
  replyId?: string;
}

const CommentBody = (props: IProps) => {
  const dispatch = useDispatch<any>();

  return (
    <div className="comment__body">
      {props.status === "edit" ? (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();

            // @ts-ignore
            const value = e.target.children[0].children[1]
              ? // @ts-ignore
                e.target.children[0].children[1].value
              : // @ts-ignore
                e.target.children[0].children[0].value;

            dispatch(editComment(props.id, value));
          }}
        >
          <div className="form__group">
            {props.inReplyToUser && (
              <span
                className="form__input__text-label"
                ref={(elem) => {
                  // Add a left padding to the input because of the name label
                  if (elem)
                    // @ts-ignore
                    elem.nextSibling.style.paddingLeft = `${
                      elem.clientWidth + 10
                    }px`;
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
                dispatch(
                  changeCommentStatus({
                    commentId: props.id,
                    status: "normal",
                    replyId: props.replyId,
                  })
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
  );
};

export default CommentBody;
