import React, { useRef } from "react";
import { connect } from "react-redux";
import CommentReply from "./CommentReply";
import CommentActions from "./CommentActions";
import CommentBody from "./CommentBody";
import ReplyForm from "./AddReplyForm";

import {
  fetchReplies,
  hideReplies,
  addReplyForm,
  addComment,
  editCommentForm,
  openMdl,
  likeComment,
} from "actions";

const Comment = (props) => {
  const addReplyInput = useRef();

  // Number of comment replies
  const repliesNum =
    typeof props.replies === "number" ? props.replies : props.replies.length;

  // Button to either show or hide the replies
  const showHideRepliesBtn = !props.showReplies ? (
    <a
      href="javascript:void(0)"
      className="btn btn-text comment__view-replies"
      onClick={() => {
        props.fetchReplies(props.id);
      }}
    >
      {repliesNum > 1 ? `View all ${repliesNum} replies` : "View reply"}
      <i className="fa fa-caret-down" aria-hidden="true" />
    </a>
  ) : (
    <a
      href="javascript:void(0)"
      className="btn btn-text comment__view-replies"
      onClick={() => {
        props.hideReplies(props.id);
      }}
    >
      {repliesNum > 1 ? `Hide all ${repliesNum} replies` : "Hide reply"}
      <i className="fa fa-caret-up" aria-hidden="true" />
    </a>
  );

  // Render the comment replies along with show hide replies button
  const replies = (
    <React.Fragment>
      {repliesNum > 0 && (
        <div className="right-content">{showHideRepliesBtn}</div>
      )}

      {props.showReplies &&
        repliesNum > 0 &&
        props.replies.map((comment) => {
          return (
            <CommentReply
              key={comment.id}
              parentCommentId={props.id}
              id={comment.id}
              author={comment.author}
              pageAuthorId={props.pageAuthorId}
              date={comment.date}
              text={comment.text}
              status={comment.status}
              likes={comment.likes}
              viewer={comment.viewer}
              inReplyToUser={comment.inReplyToUser}
              toName={comment.toName}
            />
          );
        })}

      {props.highlightedReplies &&
        !props.showReplies &&
        props.highlightedReplies.map((comment) => {
          return (
            <CommentReply
              key={comment.id}
              parentCommentId={props.id}
              id={comment.id}
              author={comment.author}
              pageAuthorId={props.pageAuthorId}
              date={comment.date}
              text={comment.text}
              status={comment.status}
              likes={comment.likes}
              viewer={comment.viewer}
              inReplyToUser={comment.inReplyToUser}
              toName={comment.toName}
            />
          );
        })}
    </React.Fragment>
  );

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="display-flex">
          <img
            className="comment__header__image"
            src={props.author.photo}
            alt="comment's author image"
            onError={(e) => {
              e.target.src = "/images/users/placeholder.png";
            }}
          />
          <div className="comment__header__name-and-date">
            <span className="comment__header__name">
              <a target="_blank" href={`/users/${props.author.username}`}>
                {props.author.name}
              </a>
              {props.author.id === props.pageAuthorId && (
                <span className="comment__header__author-label">
                  <span>-------</span>Author
                </span>
              )}
            </span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className="comment__header__actions">
          <CommentActions
            id={props.id}
            viewer={props.viewer}
            ref={addReplyInput}
            status={props.status}
            likes={props.likes}
            onReply={() => {
              props.addReplyForm(props.id, "show");
            }}
            onLike={() => {
              props.likeComment(props.id);
            }}
            onEdit={() => {
              props.editCommentForm(props.id, "show");
            }}
            onDelete={() => {
              props.openMdl("confDeleteComment", props.id);
            }}
          />
        </div>
      </div>
      <CommentBody
        status={props.status} // Edit or normal
        text={props.text}
        id={props.id} // comment id (parent comment)
      />
      {props.status == "add-reply" && (
        <ReplyForm
          ref={addReplyInput}
          onSubmit={(text) => {
            props.addComment(text, props.id);
          }}
          onCancel={() => {
            props.addReplyForm(props.id, "hide");
          }}
        />
      )}
      <div className="comment-replies">{replies}</div>
    </div>
  );
};

export default connect(null, {
  fetchReplies,
  hideReplies,
  addReplyForm,
  addComment,
  editCommentForm,
  openMdl,
  likeComment,
})(Comment);
