import React, { ForwardedRef, MutableRefObject } from "react";
import { Dropdown } from "@pagser/reusable";
import { TStatus, TViewer } from "../../views/show-page/commentsSlice";

interface IProps {
  status: TStatus;
  likes: number;
  viewer: TViewer;
  id: string;
  onLike: () => void;
  onReply: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

// @TODO: fix the any type
const CommentActions = React.forwardRef((props: IProps, ref: any) => {
  if (props.status === "edit") return <div />;
  return (
    <React.Fragment>
      <div className="comment__ratings">
        <div>
          <span>{props.likes}</span>
          <button
            className="btn-i btn-i-big btn-i-blue"
            onClick={() => props.onLike()}
          >
            <i className="fa fa-thumbs-up" />
          </button>
        </div>
      </div>

      <a
        className="btn-i btn-i-big btn-i-blue"
        href="javascript:void(0)"
        onClick={() => {
          props.onReply();
          if (ref.current) ref.current?.focus();
        }}
      >
        <i className="fa fa-reply" />
      </a>

      {props.viewer === "owner" && (
        <Dropdown
          type="mini"
          className="btn-i btn-i-big btn-i-blue comment__ellipsis"
          num={props.id}
          onChange={(name) => {
            if (name === "edit") props.onEdit();
            if (name === "delete") props.onDelete();
          }}
        >
          <div data-role-name="btn-name" data-icon-class="fa fa-ellipsis-v" />
          <div data-role-name="item" data-name="edit">
            <i className="fa fa-pencil-square-o margin-right-07" /> Edit
          </div>
          <div data-role-name="item" data-name="delete">
            <i className="fa fa-trash margin-right-07" /> Delete
          </div>
        </Dropdown>
      )}
    </React.Fragment>
  );
});

export default CommentActions;
