import React, { Component } from "react";
import { connect } from "react-redux";
import { ConfirmModal } from "../partials/Modals";
import Comment from "../partials/Comment/";
import Loading from "../partials/Loading";
import { isBottom } from "../../lib/util";

import {
  fetchComments,
  fetchNewComments,
  addComment,
  closeModal,
  deleteComment,
  closeMdl,
} from "actions";

class Comments extends Component {
  state = {
    commentText: "",
  };

  componentDidMount() {
    if (this.props.pageId) this.props.fetchComments(this.props.pageId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.comments.length !== prevProps.comments.length) {
      document.addEventListener("scroll", this.trackScrolling);
    }

    if (prevProps.pageId !== this.props.pageId) {
      this.props.fetchComments(this.props.pageId);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("comments2");

    if (
      isBottom(wrappedElement) &&
      this.props.comments.length > 1 &&
      this.props.comments.length % 10 === 0
    ) {
      this.props.fetchNewComments(this.props.pageId);
      document.removeEventListener("scroll", this.trackScrolling);
    }
  };

  // Render the list of comments
  renderComments = () => {
    if (this.props.comments.length === 0)
      return (
        <div className="no-comment-message margin-top-2">
          <p>No comment yet. Be the first one to comment on this page.</p>
        </div>
      );

    if (this.props.comments.length > 0)
      return this.props.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            showReplies={comment.showReplies}
            status={comment.status} // Could be either add-reply or edit
            viewer={comment.viewer}
            author={comment.author}
            pageAuthorId={this.props.pageAuthorId}
            date={comment.date}
            text={comment.text}
            likes={comment.likes}
            replies={comment.replies || []}
            highlightedReplies={comment.highlightedReplies}
          />
        );
      });
  };

  // Render add comment form, doesn't show the form if user is not logged in
  renderAddComment = () => {
    if (!this.props.userId)
      return (
        <div className="page__comments__add">
          <label className="form__label">Add a new comment</label>

          <p className="normal-paragraph">
            Please <a href="/login">login</a> if you want to add your comment
            for this page or reply to others.
          </p>
        </div>
      );

    return (
      <div className="page__comments__add" id="add-comment">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addComment(this.state.commentText);
            this.setState({ commentText: "" });
          }}
        >
          <label className="form__label display-inline-block">
            Add a new comment
          </label>

          <textarea
            value={this.state.commentText}
            className="form__textarea"
            rows="5"
            placeholder="Type your comment about the page..."
            onChange={(e) => {
              this.setState({ commentText: e.target.value });
            }}
          />
          <br />

          <div className="right-content">
            <button
              className="btn btn-round btn-blue-o"
              disabled={this.state.commentText.length > 0 ? false : true}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <ConfirmModal
          header="Delete Your Comment?"
          open={this.props.confMdl.open}
          btnName="Delete"
          onConfirm={() => this.props.deleteComment()}
          onCancel={() => this.props.closeMdl("confDeleteComment")}
        >
          <p>
            Are you sure that you want to delete your comment? All the other
            replies associated with this comment will also get removed.<br />
            You <strong>cannot undo</strong> this action.
          </p>
        </ConfirmModal>
        <div className="page__comments" id="comments2">
          <div className="row">
            <div className="comments-wrapper">
              <h2 className="heading-tertiary center-content">
                {this.props.length} Comments
              </h2>
              {(!this.props.isPending || this.props.comments.length > 0) &&
                this.renderAddComment()}
              {(!this.props.isPending || this.props.comments.length > 0) &&
                this.renderComments()}
              {this.props.isPending && (
                <div className="center-content">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.list || [],
    length: state.comments.length,
    isPending: state.comments.isPending,
    pageId: state.pageData.id,
    pageAuthorId: state.pageData.author ? state.pageData.author._id : null,
    userId: state.user.id,
    confMdl: state.modals.confDeleteComment,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchComments,
    fetchNewComments,
    addComment,
    closeModal,
    deleteComment,
    closeMdl,
  }
)(Comments);
