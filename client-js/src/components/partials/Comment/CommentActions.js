import React from "react";

const CommentActions = React.forwardRef((props, ref) => (
  <React.Fragment>
    {props.viewer !== "owner" && (
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
    )}
    {props.viewer === "owner" && (
      <React.Fragment>
        <button className="btn-i btn-i-big btn-i-blue" onClick={() => {}}>
          <i className="fa fa-pencil-square-o" />
        </button>
        <button className="btn-i btn-i-big btn-i-blue" onClick={() => {}}>
          <i className="fa fa-trash" />
        </button>
      </React.Fragment>
    )}
    <a
      className="btn-i btn-i-big btn-i-blue"
      href="javascript:void(0)"
      onClick={() => {
        props.onReply();
        if (ref.current) ref.current.focus();
      }}
    >
      <i className="fa fa-reply" />
    </a>
  </React.Fragment>
));

export default CommentActions;
