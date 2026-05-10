import React, {
  ReactElement,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingModal, alert } from "@pagser/common";
import { ConfirmModal, Button, Loading, Textarea } from "@pagser/reusable";

import {
  selectLoading,
  fetchComments,
  selectComments,
  selectTotalCount,
  deleteComment,
  addComment,
} from "./commentsSlice";
import {
  selectLoading as selectPageLoading,
  selectAuthor,
  selectId,
} from "./pageSlice";
import { selectStatus } from "./userSlice";

import Comment from "../../partials/comment";

const Comments = () => {
  const pageLoading = useSelector(selectPageLoading);
  const pageId = useSelector(selectId);
  const loading = useSelector(selectLoading);
  const comments = useSelector(selectComments);
  const userStatus = useSelector(selectStatus);
  const totalCount = useSelector(selectTotalCount);
  const pageAuthor = useSelector(selectAuthor);

  const dispatch = useDispatch<any>();

  const [newComment, setNewComment] = useState("");
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false); // delete comment confirmation
  const [confirmationModalCommentId, setConfirmationModalCommentId] =
    useState(""); // id of the comment to be deleted

  const loadingRef = useRef(loading);
  const commentsLengthRef = useRef(comments.length);
  const totalCountRef = useRef(totalCount);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);
  useEffect(() => {
    commentsLengthRef.current = comments.length;
  }, [comments.length]);
  useEffect(() => {
    totalCountRef.current = totalCount;
  }, [totalCount]);

  useEffect(() => {
    if (!pageLoading) {
      dispatch(fetchComments());
    }
  }, [pageLoading]);

  const trackScrolling = useCallback(() => {
    // console.log("scrolling");
    const nearBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 200;
    if (
      nearBottom &&
      !loadingRef.current &&
      commentsLengthRef.current < totalCountRef.current
    ) {
      dispatch(fetchComments());
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", trackScrolling);
    return () => window.removeEventListener("scroll", trackScrolling);
  }, [trackScrolling]);

  useEffect(() => {
    if (!loading) {
      trackScrolling();
    }
  }, [loading, trackScrolling]);

  // Render the list of comments
  const renderComments = () => {
    if (comments.length > 0)
      return comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            showReplies={comment.showReplies}
            status={comment.status} // Could be either add-reply or edit
            viewer={comment.viewer}
            author={comment.author}
            pageAuthorId={pageAuthor.id}
            date={comment.date}
            text={comment.text}
            likes={comment.likes}
            replies={comment.replies || []}
            highlightedReplies={comment.highlightedReplies}
            openDeleteConfirmation={(id: string) => {
              setConfirmationModalOpen(true);
              setConfirmationModalCommentId(id);
            }}
          />
        );
      });
  };

  // Render add comment form, doesn't show the form if user is not logged in
  const renderAddComment = () => {
    if (!userStatus || userStatus === "spectator")
      return (
        <div className="page__comments__add">
          <label className="form__label">Add a new comment</label>

          <p className="normal-paragraph">
            Please <a href="/login">log in</a> if you want to comment on this
            page or reply to others.
          </p>
        </div>
      );

    return (
      <div className="page__comments__add" id="add-comment">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addComment(newComment));
            setNewComment("");
          }}
        >
          <div className="form-group">
            <Textarea
              label="Add a New Comment"
              value={newComment}
              rows={5}
              placeholder="Type your comment about the page..."
              onChange={(value) => {
                setNewComment(value);
              }}
            />
          </div>

          <div className="u-flex-text-right">
            <Button
              type="submit"
              rounded={true}
              color="blue"
              disabled={newComment.length > 0 ? false : true}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      <ConfirmModal
        header="Delete Your Comment?"
        open={confirmationModalOpen}
        btnName="Delete"
        onConfirm={() =>
          dispatch(
            deleteComment(confirmationModalCommentId, () => {
              setConfirmationModalCommentId("");
              setConfirmationModalOpen(false);
            }),
          )
        }
        onCancel={() => {
          setConfirmationModalOpen(false);
          setConfirmationModalCommentId("");
        }}
      >
        <p>
          Are you sure you want to delete this comment? All replies to it will
          also be removed.
          <br />
          You <strong>cannot undo</strong> this action.
        </p>
      </ConfirmModal>
      <div className="page__comments" id="comments2">
        <div className="row">
          <div className="comments-wrapper">
            <h2 className="heading-tertiary center-content">
              {totalCount} Comments
            </h2>
            {!loading && renderAddComment()}

            {!loading && comments.length === 0 && (
              <div className="no-comment-message margin-top-2">
                <p>No comments yet. Be the first to comment on this page!</p>
              </div>
            )}

            {renderComments()}

            {loading && (
              <div className="center-content">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comments;
