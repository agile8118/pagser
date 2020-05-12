import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ConfirmModal, Modal } from "../partials/Modals";
import Comment from "../partials/Comment";
import Loading from "../partials/Loading";
import { showSnackBar, loadingModal } from "../../lib/util";

import { fetchComments, addComment } from "actions";

class Comments extends Component {
  state = {
    commentText: "",
  };

  componentDidMount() {
    this.props.fetchComments(this.props.pageId);
  }

  // Render the list of comments
  renderComments = () => {
    if (this.props.comments && this.props.comments.length === 0)
      return (
        <div className="no-comment-message margin-top-2">
          <p>No comment yet. Be the first one to comment on this page.</p>
        </div>
      );

    if (this.props.comments && this.props.comments.length > 0)
      return this.props.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            viewer={comment.viewer}
            photo={comment.author.photo}
            name={comment.author.name}
            date={comment.date}
            text={comment.text}
            replies={comment.replies}
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
            this.props.addComment(this.props.pageId, this.state.commentText);
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
    console.log(this.props);

    return (
      <React.Fragment>
        <div className="page__comments" id="comments2">
          <div className="row">
            <div className="comments-wrapper">
              <h2 className="heading-tertiary center-content">Comments</h2>
              {this.props.comments && this.renderAddComment()}
              {this.props.comments && this.renderComments()}
              {!this.props.comments && (
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
    comments: state.comments,
    pageId: state.pageData.id,
    userId: state.user.id,
  };
};

export default connect(
  mapStateToProps,
  { fetchComments, addComment }
)(Comments);
