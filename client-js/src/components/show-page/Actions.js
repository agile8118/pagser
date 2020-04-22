import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Modal } from "../partials/Modals";
import { showSnackBar, loadingModal } from "../../lib/util";

import {
  fetchPublicPageData,
  favoritePage,
} from "../../redux/show-page/actions";

class Actions extends Component {
  state = {
    titleTyped: "",
    deletePageMdl: false,
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
        authorization: localStorage.getItem("token"),
      },
    };
    axios
      .patch(`/api/pages/${this.props.id}/favorite`, null, config)
      .then((response) => {
        loadingModal();
        this.props.favoritePage(response.data);
      })
      .catch((error) => {
        loadingModal();
        if (error.response && error.response.status === 401) {
          showSnackBar("Please login to favorite a page.");
        } else {
          showSnackBar("An unknown error occurred.");
        }
      });
  }

  onDeletePageSubmit() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    axios
      .delete(`/api/pages/${this.props.id}`, config)
      .then((response) => {
        location.reload();
      })
      .catch((response) => {
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
          <React.Fragment>
            <Modal
              header="Delete your page"
              open={this.state.deletePageMdl}
              onClose={() => {
                this.setState({ deletePageMdl: false });
              }}
            >
              <p>
                Are you really sure that you want to delete your page? All of
                the comments and likes will be deleted.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.onDeletePageSubmit.apply(this);
                }}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Type in your page title to confirm to delete it"
                    className="form__input"
                    onChange={(event) => {
                      this.setState({ titleTyped: event.target.value }, () => {
                        if (
                          this.state.titleTyped
                            .toLowerCase()
                            .replace(/\s/g, "") ===
                          this.props.contents.title
                            .toLowerCase()
                            .replace(/\s/g, "")
                        ) {
                          document.querySelector(
                            "#deleteButton"
                          ).disabled = false;
                        } else {
                          document.querySelector(
                            "#deleteButton"
                          ).disabled = true;
                        }
                      });
                    }}
                    value={this.state.titleTyped}
                    required
                  />
                </div>
                <strong>{this.props.contents.title.toLowerCase()}</strong>
                <div className="right-content">
                  <button
                    className="btn btn-round btn-red"
                    type="submit"
                    id="deleteButton"
                    disabled
                  >
                    Delete
                  </button>
                </div>
              </form>
            </Modal>

            <div className="page__header__actions">
              <button
                className="btn-i btn-i-blue btn-i-big"
                onClick={() => {
                  if (this.props.type === "public") {
                    var url = `/public-pages/${
                      window.location.pathname.split("/")[2]
                    }/edit?t=public`;
                  } else if (this.props.type === "private") {
                    var url = `/${window.location.pathname.split("/")[1]}/${
                      window.location.pathname.split("/")[2]
                    }/edit?t=private`;
                  }
                  window.location = `${url}`;
                }}
              >
                <i className="fa fa-pencil-square-o" />
              </button>
              <button
                className="btn-i btn-i-blue btn-i-big margin-left-07"
                onClick={() => {
                  this.setState({ deletePageMdl: true });
                }}
              >
                <i className="fa fa-trash-o" />
              </button>
            </div>
          </React.Fragment>
        );
      }
      if (
        this.props.viewer.status === "spectator" ||
        this.props.viewer.status === "authenticated"
      ) {
        return (
          <div className="page__header__actions">
            <button
              className="btn-i btn-i-blue btn-i-big"
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

const mapStateToProps = (state) => {
  return {
    id: state.pageData.id,
    viewer: {
      favorited: state.pageData.favorited,
      status: state.pageData.status,
    },
    contents: state.pageData.contents,
    isPending: state.pageData.isPending,
  };
};

export default connect(
  mapStateToProps,
  { fetchPublicPageData, favoritePage }
)(Actions);
