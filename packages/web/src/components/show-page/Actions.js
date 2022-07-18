import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Modal } from "../partials/Modals";
import AddToClMdl from "../modals/AddToCL";

import {
  fetchPublicPageData,
  readLater,
  addToCollectionOpen,
  sendViewRequest,
} from "actions";

class Actions extends Component {
  state = {
    titleTyped: "",
    deletePageMdl: false,
  };

  componentDidMount() {
    if (this.props.type && this.props.type === "public") {
      this.props.fetchPublicPageData();
    }

    // Send a view request to server
    setTimeout(() => {
      this.props.sendViewRequest(this.props.id);
    }, 15000);
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
      const rlBtnClass = this.props.viewer.readLater
        ? "fa fa-bookmark"
        : "fa fa-bookmark-o";

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
            <AddToClMdl />

            <div className="page__header__actions">
              <button
                className="btn-i btn-i-blue btn-i-big"
                onClick={() => {
                  this.props.addToCollectionOpen(this.props.id);
                }}
              >
                <i className="fa fa-th-large" aria-hidden="true" />
              </button>
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
                className="btn-i btn-i-blue btn-i-big"
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
          <React.Fragment>
            <AddToClMdl />
            <div className="page__header__actions">
              <button
                className="btn-i btn-i-blue btn-i-big"
                onClick={() => {
                  this.props.addToCollectionOpen(this.props.id);
                }}
              >
                <i className="fa fa-th-large" aria-hidden="true" />
              </button>
              <button
                className="btn-i btn-i-blue btn-i-big"
                onClick={() => {
                  this.props.readLater(this.props.id);
                }}
              >
                <i className={rlBtnClass} />
              </button>
            </div>
          </React.Fragment>
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
      readLater: state.pageData.readLater,
      status: state.pageData.status,
    },
    contents: state.pageData.contents,
    isPending: state.pageData.isPending,
  };
};

export default connect(
  mapStateToProps,
  { fetchPublicPageData, readLater, addToCollectionOpen, sendViewRequest }
)(Actions);
