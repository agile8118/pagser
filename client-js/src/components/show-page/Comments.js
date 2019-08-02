import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ROOT_URL } from "../../lib/keys";
import { showSnackBar } from "../../lib/util";
import sendPageId from "./sendPageId";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: null,
      commentText: "",
      userId: null,
      modalCommentId: null,
      modalUpdateCommentId: null,
      modalCommentText: "",
      commentPage: 1,
      commentPages: null,
      sendReplyToName: null,
      sendReplyToId: null
    };
  }

  componentDidMount() {
    this.fetchComments.apply(this);
  }

  fetchComments() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(
        `/api/pages/${this.props.id}/comments?page=${this.state.commentPage}`,
        config
      )
      .then(response => {
        this.setState({
          comments: response.data.comments,
          commentPage: Number(response.data.page),
          commentPages: Number(response.data.pages),
          userId: response.data.userId
        });
      })
      .catch(response => {
        console.log(response);
      });
  }

  onCommentPageChange(page) {
    if (page === "next") {
      this.setState({ commentPage: this.state.commentPage + 1 }, () => {
        this.fetchComments.apply(this);
      });
    } else if (page === "previous") {
      this.setState({ commentPage: this.state.commentPage - 1 }, () => {
        this.fetchComments.apply(this);
      });
    } else {
      this.setState({ commentPage: page }, () => {
        this.fetchComments.apply(this);
      });
    }
  }

  openModal(mdl) {
    const modal = document.querySelector(mdl);
    modal.style.display = "block";
  }

  closeModal(mdl) {
    const modal = document.querySelector(mdl);
    modal.style.display = "none";
  }

  renderCommentActions(comment) {
    if (comment.viewer === "owner") {
      return (
        <div className="comment__header__actions">
          {this.renderCommentReplyButton(comment)}

          <button
            className="btn-icon margin-left-07"
            onClick={() => {
              this.setState(
                {
                  modalCommentText: comment.text,
                  modalUpdateCommentId: comment.id
                },
                () => {
                  this.openModal.apply(this, ["#commentUpdate"]);
                }
              );
            }}
          >
            <i className="fa fa-pencil-square-o" />
          </button>

          <button
            className="btn-icon margin-left-07"
            onClick={() => {
              this.setState({ modalCommentId: comment.id }, () => {
                this.openModal.apply(this, ["#commentDelete"]);
              });
            }}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="comment__header__actions">
          {this.renderCommentReplyButton(comment)}
        </div>
      );
    }
  }

  renderCommentReplyButton(comment) {
    if (!comment.inReplyTo && this.state.userId) {
      return (
        <a
          className="btn-icon"
          href="#add-comment"
          onClick={() => {
            this.setState({
              sendReplyToName: comment.author.name,
              sendReplyToId: comment.id
            });
          }}
        >
          <i className="fa fa-reply" />
        </a>
      );
    } else {
      return <div />;
    }
  }

  renderComments() {
    if (this.state.comments && this.state.comments.length > 0) {
      return this.state.comments.map(comment => {
        return (
          <div className="comment" key={comment.id}>
            <div className="comment__header">
              <div className="display-flex">
                <img
                  className="comment__header__image"
                  src={comment.author.photo.secure_url}
                  alt="comment's author image"
                  onError={e => {
                    e.target.src = "/images/users/placeholder.png";
                  }}
                />
                <div className="comment__header__name-and-date">
                  <span>{comment.author.name}</span>
                  <span>{comment.date}</span>
                </div>
              </div>
              {this.renderCommentActions.apply(this, [comment])}
            </div>
            <div className="comment__body">
              <p>{comment.text}</p>
            </div>
            {this.renderCommentReplyes(comment.replyes)}
          </div>
        );
      });
    } else if (this.state.comments && this.state.comments.length === 0) {
      return (
        <div className="no-comment-message">
          <p>No comments yet. Be the first one to comment on this page.</p>
        </div>
      );
    }
  }

  renderCommentReplyes(comments) {
    if (comments && comments.length > 0) {
      return comments.map(comment => {
        return (
          <div className="comment comment-reply" key={comment.id}>
            <div className="comment__header">
              <div className="display-flex">
                <img
                  className="comment__header__image"
                  src={comment.author.photo.secure_url}
                  alt="comment's author image"
                  onError={e => {
                    e.target.src = "/images/users/placeholder.png";
                  }}
                />
                <div className="comment__header__name-and-date">
                  <span>{comment.author.name}</span>
                  <span>{comment.date}</span>
                </div>
              </div>
              {this.renderCommentActions.apply(this, [comment])}
            </div>
            <div className="comment__body">
              <p>{comment.text}</p>
            </div>
          </div>
        );
      });
    } else {
      return <div />;
    }
  }

  renderAddComment() {
    if (this.state.userId) {
      return (
        <div className="page__comments__add" id="add-comment">
          <form
            method="post"
            onSubmit={e => {
              e.preventDefault();
              this.onFormSubmit.apply(this);
            }}
          >
            <div>
              <label className="form__label display-inline-block">
                Add a new comment
              </label>
              {this.renderWhomSendReplyTo()}
            </div>

            <textarea
              value={this.state.commentText}
              className="form__textarea"
              rows="5"
              placeholder="Type your opinion..."
              onChange={e => {
                this.setState({ commentText: e.target.value });
              }}
            />
            <br />

            <div className="right-content">
              <button className="btn-round btn-round-normal">Submit</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="page__comments__add">
          <label className="form__label">Add a new comment</label>

          <p className="normal-paragraph">
            Please <a href="/login">login</a> if you want to add your comment
            for this page or reply to others.
          </p>
        </div>
      );
    }
  }

  renderWhomSendReplyTo() {
    if (this.state.sendReplyToId) {
      return (
        <div className="comment-in-reply-to-label">
          in reply to {this.state.sendReplyToName}{" "}
          <button
            className="delete-x-button-white"
            onClick={() => {
              this.setState({ sendReplyToName: null, sendReplyToId: null });
            }}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
      );
    }
  }

  onFormSubmit() {
    if (this.state.commentText.length > 0) {
      const config = {
        headers: {
          authorization: localStorage.getItem("token")
        }
      };
      axios
        .post(
          `/api/pages/${this.props.id}/comments`,
          { text: this.state.commentText, inReplyTo: this.state.sendReplyToId },
          config
        )
        .then(response => {
          if (response.data.inReplyTo) {
            var newComments = this.state.comments.map(c => {
              if (c.id === response.data.inReplyTo) {
                c.replyes.push(response.data);
                return c;
              } else {
                return c;
              }
            });
            this.setState({
              comments: newComments,
              commentText: "",
              sendReplyToId: null,
              sendReplyToName: null
            });
            showSnackBar("Your comment reply added successfully.", "success");
          } else {
            this.setState({
              comments: [response.data, ...this.state.comments],
              commentText: "",
              sendReplyToName: null,
              sendReplyToId: null
            });
            window.location.hash = "comments2";
            window.location.hash = "comments";
            showSnackBar("Your comment added successfully.", "success");
          }
        })
        .catch(response => {
          showSnackBar("Sorry an unkown error occurred.", "error");
        });
    }
  }

  renderModals() {
    return (
      <div>
        <div className="mdl" id="commentDelete">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.setState({ modalCommentId: null }, () => {
                    this.closeModal.apply(this, ["#commentDelete"]);
                  });
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Delete your comment</h3>
            </div>

            <div className="mdl__body">
              <p className="margin-bottom-1">
                Are you sure that you want to delete your comment? You cannot
                undo this.
              </p>

              <form
                onSubmit={event => {
                  event.preventDefault();

                  const config = {
                    headers: {
                      authorization: localStorage.getItem("token")
                    }
                  };
                  axios
                    .delete(
                      `/api/pages/${this.props.id}/comments/${
                        this.state.modalCommentId
                      }`,
                      config
                    )
                    .then(response => {
                      if (response.data.reply) {
                        var array = [...this.state.comments]; // make a separate copy of the array
                        var newComments = array.map(comment => {
                          if (comment.id === response.data.commentId) {
                            const newReplys = comment.replyes.filter(c => {
                              return c.id !== response.data.deletedCommentId;
                            });
                            comment.replyes = newReplys;
                            return comment;
                          } else {
                            return comment;
                          }
                        });
                        this.closeModal.apply(this, ["#commentDelete"]);
                        this.setState({ comments: newComments }, () => {
                          showSnackBar(
                            "Your comment deleted successfully.",
                            "success"
                          );
                        });
                      } else {
                        var array = [...this.state.comments]; // make a separate copy of the array
                        var newComments = array.filter(comment => {
                          return comment.id !== response.data.commentId;
                        });
                        this.closeModal.apply(this, ["#commentDelete"]);
                        this.setState({ comments: newComments }, () => {
                          showSnackBar(
                            "Your comment deleted successfully.",
                            "success"
                          );
                        });
                      }
                    })
                    .catch(response => {
                      showSnackBar("An unknown error occurred.");
                    });
                }}
              >
                <div className="right-content">
                  <button
                    type="submit"
                    id="deleteButton"
                    className="btn-round btn-round-danger"
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mdl" id="commentUpdate">
          <div className="mdl__content">
            <div className="mdl__header">
              <span
                className="mdl__close"
                onClick={() => {
                  this.setState(
                    { modalCommentText: "", modalUpdateCommentId: null },
                    () => {
                      this.closeModal.apply(this, ["#commentUpdate"]);
                    }
                  );
                }}
              >
                &times;
              </span>
              <h3 className="heading-tertiary">Update your comment</h3>
            </div>

            <div className="mdl__body">
              <form
                onSubmit={event => {
                  event.preventDefault();

                  const config = {
                    headers: {
                      authorization: localStorage.getItem("token")
                    }
                  };

                  axios
                    .put(
                      `/api/pages/${this.props.id}/comments/${
                        this.state.modalUpdateCommentId
                      }`,
                      { text: this.state.modalCommentText },
                      config
                    )
                    .then(response => {
                      if (response.data.reply) {
                        var array = [...this.state.comments]; // make a separate copy of the array
                        var newComments = array.map(comment => {
                          if (comment.id !== response.data.comment.inReplyTo) {
                            return comment;
                          } else {
                            const newReplyes = comment.replyes.map(c => {
                              if (c.id === response.data.comment._id) {
                                c.text = response.data.comment.text;
                                return c;
                              } else {
                                return c;
                              }
                            });

                            comment.replyes = newReplyes;
                            return comment;
                          }
                        });
                        this.closeModal.apply(this, ["#commentUpdate"]);
                        this.setState({ comments: newComments }, () => {
                          showSnackBar(
                            "Your comment updated successfully.",
                            "success"
                          );
                        });
                      } else {
                        var array = [...this.state.comments]; // make a separate copy of the array
                        var newComments = array.filter(comment => {
                          if (comment.id !== this.state.modalUpdateCommentId) {
                            return comment;
                          } else {
                            comment.text = response.data.text;
                            return comment;
                          }
                        });
                        this.closeModal.apply(this, ["#commentUpdate"]);
                        this.setState({ comments: newComments }, () => {
                          showSnackBar(
                            "Your comment updated successfully.",
                            "success"
                          );
                        });
                      }
                    })
                    .catch(response => {
                      showSnackBar("An unknown error occurred.");
                    });
                }}
              >
                <div>
                  <label className="form__label">Edit your comment</label>
                  <textarea
                    required
                    value={this.state.modalCommentText}
                    className="form__textarea"
                    rows="5"
                    onChange={e => {
                      this.setState({ modalCommentText: e.target.value });
                    }}
                  />
                  <br />
                </div>
                <div className="right-content">
                  <button type="submit" className="btn-round">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderPagination() {
    const pages = this.state.commentPages;
    const page = this.state.commentPage;

    if (this.state.comments.length > 0) {
      if (page === pages) {
        var nextButton = (
          <a href={null} className="pagination__arrow visibility-hidden">
            &gt;
          </a>
        );
      } else {
        var nextButton = (
          <a
            onClick={() => this.onCommentPageChange.apply(this, ["next"])}
            href={null}
            className="pagination__arrow"
          >
            &gt;
          </a>
        );
      }

      if (page === 1) {
        var previousButton = (
          <a href={null} className="pagination__arrow visibility-hidden">
            &lt;
          </a>
        );
      } else {
        var previousButton = (
          <a
            href={null}
            onClick={() => this.onCommentPageChange.apply(this, ["previous"])}
            className="pagination__arrow"
          >
            &lt;
          </a>
        );
      }

      var array = Array.apply(null, { length: pages + 1 }).map(
        Number.call,
        Number
      );

      array.shift();
      var numbers = array.map(num => {
        if (page === num) {
          return (
            <a
              key={num}
              href={null}
              onClick={() => {
                this.onCommentPageChange.apply(this, [num]);
              }}
              className="pagination__number pagination__number--active"
            >
              {num}
            </a>
          );
        } else {
          return (
            <a
              key={num}
              href={null}
              onClick={() => {
                this.onCommentPageChange.apply(this, [num]);
              }}
              className="pagination__number"
            >
              {num}
            </a>
          );
        }
      });

      return (
        <div className="pagination">
          {previousButton}
          {numbers}
          {nextButton}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    if (this.state.comments != null) {
      return (
        <div>
          <div className="page__comments" id="comments2">
            <div className="row">
              <div className="col-2" />
              <div className="col-7">
                <h2 className="heading-tertiary center-content">Comments</h2>
                {this.renderComments.apply(this)}
                {this.renderPagination.apply(this)}
                {this.renderAddComment.apply(this)}
              </div>

              <div className="col-3" />
            </div>
          </div>
          {this.renderModals.apply(this)}
        </div>
      );
    } else {
      return (
        <div className="page__comments" id="comments2">
          <div className="row">
            <div className="col-2" />
            <div className="col-7">
              <h2 className="heading-tertiary center-content">Comments</h2>
              <div>
                <div className="center-content">
                  <div className="lds-css ng-scope">
                    <div className="lds-spinner">
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3" />
          </div>
        </div>
      );
    }
  }
}

export default sendPageId(Comments);
