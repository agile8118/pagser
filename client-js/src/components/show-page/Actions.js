import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ROOT_URL } from "../../lib/keys";
import { showSnackBar, loadingModal } from "../../lib/util";

import * as actions from "../../redux/specific-page/actions";

class Actions extends Component {
  state = {
    titleTyped: ""
  };

  componentDidMount() {
    if (this.props.type && this.props.type === "public") {
      this.props.fetchPublicPageData();
    }
  }

  onFavoriteButtonClick() {
    loadingModal("Loading...");
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(`/api/pages/${this.props.id}/favorite`, null, config)
      .then(response => {
        loadingModal();
        this.props.pageFavorited(response.data);
      })
      .catch(error => {
        loadingModal();
        if (error.response && error.response.status === 401) {
          showSnackBar("Please login to favorite a page.");
        } else {
          showSnackBar("An unknown error occurred.");
        }
      });
  }

  openModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "block";
  }

  closeModal() {
    const modal = document.querySelector(".mdl");
    modal.style.display = "none";
  }

  onDeletePageSubmit() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .delete(`/api/pages/${this.props.id}`, config)
      .then(response => {
        location.reload();
      })
      .catch(response => {
        console.log(response);
      });
  }

  render() {
    if (this.props.isPending === false) {
      var favBtnClass = "";
      if (this.props.viewer.favorited) {
        favBtnClass = "fa fa-heart";
      } else if (!this.props.viewer.favorited) {
        favBtnClass = "fa fa-heart-o";
      }

      if (this.props.viewer.status === "owner") {
        return (
          <div>
            <div className="mdl">
              <div className="mdl__content">
                <div className="mdl__header">
                  <span
                    className="mdl__close"
                    onClick={() => {
                      this.closeModal.apply(this);
                    }}
                  >
                    &times;
                  </span>
                  <h3 className="heading-tertiary">Delete your page</h3>
                </div>

                <div className="mdl__body">
                  <p>
                    Are you really sure that you want to delete your page? All
                    of the comments and likes will be deleted.
                  </p>

                  <form
                    onSubmit={event => {
                      event.preventDefault();
                      this.onDeletePageSubmit.apply(this);
                    }}
                  >
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Type in your page title to confirm to delete it"
                        className="form__input"
                        onChange={event => {
                          this.setState(
                            { titleTyped: event.target.value },
                            () => {
                              if (
                                this.state.titleTyped.toLowerCase().trim() ===
                                this.props.contents.title.toLowerCase().trim()
                              ) {
                                document.querySelector(
                                  "#deleteButton"
                                ).disabled = false;
                              } else {
                                document.querySelector(
                                  "#deleteButton"
                                ).disabled = true;
                              }
                            }
                          );
                        }}
                        value={this.state.titleTyped}
                        required
                      />
                    </div>
                    <strong>{this.props.contents.title.toLowerCase()}</strong>
                    <div className="right-content">
                      <button
                        type="submit"
                        id="deleteButton"
                        className="btn-round btn-round-danger"
                        disabled
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="page__header__actions">
              <button
                className="btn-icon"
                onClick={() => {
                  if (this.props.type === "public") {
                    var url = `/public-pages/${
                      window.location.pathname.split("/")[2]
                    }/edit?t=public`;
                  } else if (this.props.type === "specific") {
                    var url = `/${window.location.pathname.split("/")[1]}/${
                      window.location.pathname.split("/")[2]
                    }/edit?t=specific`;
                  }
                  window.location = `${url}`;
                }}
              >
                <i className="fa fa-pencil-square-o" />
              </button>
              <button
                className="btn-icon margin-left-07"
                onClick={() => this.openModal.apply(this)}
              >
                <i className="fa fa-trash-o" />
              </button>
            </div>
          </div>
        );
      }
      if (
        this.props.viewer.status === "spectator" ||
        this.props.viewer.status === "authenticated"
      ) {
        return (
          <div className="page__header__actions">
            <button
              className="btn-icon"
              onClick={() => this.onFavoriteButtonClick.apply(this)}
            >
              <i className={favBtnClass} />
            </button>
          </div>
        );
      } else {
        return <div />;
      }
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    id: state.fetchPageData.id,
    viewer: {
      favorited: state.fetchPageData.favorited,
      status: state.fetchPageData.status
    },
    contents: state.fetchPageData.contents,
    isPending: state.fetchPageData.isPending
  };
};

export default connect(
  mapStateToProps,
  actions
)(Actions);
