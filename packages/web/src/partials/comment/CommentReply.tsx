import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import CommentActions from "./CommentActions";
import CommentBody from "./CommentBody";
import AddReplyForm from "./AddReplyForm";

import {
  IReply,
  IAuthor,
  TStatus,
  TViewer,
  fetchReplies,
  addComment,
  changeCommentStatus,
  hideReplies,
  likeComment,
} from "../../views/show-page/commentsSlice";

interface IProps {
  id: string; // comment id
  parentCommentId: string;
  pageAuthorId: string;
  author: IAuthor;
  date: string;
  viewer: TViewer;
  status: TStatus;
  likes: number;
  text: string;
  toName: string;
  inReplyToUser?: string;
  replies?: number | IReply[];
  highlightedReplies?: IReply[];
  showReplies?: boolean;
  openDeleteConfirmation?: (id: string) => void;
}

const CommentReply = (props: IProps) => {
  const dispatch = useDispatch<any>();
  const addReplyInput = useRef<HTMLInputElement>();

  return (
    <React.Fragment key={props.id}>
      <div className="comment">
        <div className="comment__header">
          <div className="display-flex">
            <img
              className="comment__header__image"
              src={props.author.photo}
              alt="comment's author image"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/users/placeholder.png";
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
              likes={props.likes}
              status={props.status}
              onReply={() => {
                dispatch(
                  changeCommentStatus({
                    commentId: props.parentCommentId,
                    status: "add-reply",
                    replyId: props.id,
                    toName: props.author.name, // ?!
                    // @TODO: pass userId
                  })
                );
                // props.addReplyForm(
                //   props.parentCommentId,
                //   "show",
                //   props.id,
                //   props.name
                // );
              }}
              onLike={() => {
                dispatch(likeComment(props.id, props.parentCommentId));
              }}
              onEdit={() => {
                dispatch(
                  changeCommentStatus({
                    commentId: props.parentCommentId,
                    status: "edit",
                    replyId: props.id,
                  })
                );

                // props.editCommentForm(props.parentCommentId, "show", props.id);
              }}
              onDelete={() => {
                if (props.openDeleteConfirmation)
                  props.openDeleteConfirmation(props.id);
                // props.openMdl("confDeleteComment", props.id);
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
        <AddReplyForm
          ref={addReplyInput}
          toName={props.toName}
          onSubmit={(text) => {
            dispatch(addComment(text, props.parentCommentId, props.id));
          }}
          onCancel={() => {
            dispatch(
              changeCommentStatus({
                commentId: props.parentCommentId,
                status: "normal",
                replyId: props.id,
                // @TODO: pass userId
              })
            );
            // props.addReplyForm(props.parentCommentId, "hide", props.id);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default CommentReply;
