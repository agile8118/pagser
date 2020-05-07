import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import { Modal } from "../partials/Modals";
import Loading from "../partials/Loading";
import { showSnackBar } from "../../lib/util";

import { closeModal } from "actions";

class ClModal extends Component {
  state = {
    name: "",
    status: "normal", // status could be normal, loading or creating. We'll show different elements depending on the value
    collections: [],
  };

  // Fetch all the collections user has created
  fetchCollections = async () => {
    this.setState({ status: "loading" });
    const { data } = await axios.get(
      `/api/collections/created/${this.props.pageId}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    this.setState({ collections: data.collections, status: "normal" });
  };

  // Send a request to user to creat a new collection
  createCollection = async () => {
    this.setState({ status: "loading" });

    const { data } = await axios.post(
      `/api/collection`,
      { name: this.state.name },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    // Add the page in the newly created collection
    this.togglePageInCL(data.collection._id);
  };

  // Send the request to server to either remove the page from selected collection
  // or add it to that collection
  togglePageInCL = async (clId) => {
    this.setState({ status: "loading" });
    const { data } = await axios.post(
      `/api/collection/add-remove/${clId}/${this.props.pageId}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    // Show a right message to user based on server response
    if (data.selected)
      showSnackBar(
        `Page successfully added to ${data.clName} collection.`,
        "success"
      );
    else
      showSnackBar(
        `Page successfully removed from ${data.clName} collection.`,
        "success"
      );

    // Fetch collections again
    this.fetchCollections();
  };

  // Check to see if the modal is opened or not, if so fetch the collections
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.modalOpen && this.props.modalOpen) {
      this.fetchCollections();
    }
  }

  render() {
    return createPortal(
      <Modal
        header="Page in Collections:"
        type="small"
        open={this.props.modalOpen}
        onClose={() => {
          this.props.closeModal();
          this.setState({ name: "", status: "normal", collections: [] });
        }}
      >
        {!this.state.collections ||
          (this.state.status === "loading" && (
            <div className="center-content margin-top-5px">
              <Loading />
            </div>
          ))}
        {this.state.collections &&
          this.state.status === "normal" && (
            <button
              className="btn btn-blue-o btn-block margin-bottom-08"
              onClick={() => this.setState({ status: "creating" })}
              type="button"
            >
              Create a new collection{" "}
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          )}

        {this.state.status === "creating" && (
          <div className="right-content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.createCollection();
              }}
            >
              <input
                type="text"
                name="name"
                className="form__input form__input--lined margin-bottom-1"
                autoComplete="off"
                autoFocus
                placeholder="Collection name"
                required
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <button
                className="btn btn-default margin-right-1 btn-sm"
                onClick={() => this.setState({ name: "", status: "normal" })}
                type="button"
              >
                Cancel
              </button>
              <button
                className="btn btn-blue-o margin-bottom-1 btn-sm"
                type="submit"
              >
                Create and add
              </button>
            </form>
          </div>
        )}

        {this.state.collections &&
          this.state.status === "normal" &&
          this.state.collections.map((cl) => {
            return (
              <a
                href="javascript:void(0)"
                className={`selectable-item ${
                  cl.selected ? "selectable-item--selected" : ""
                }`}
                onClick={() => this.togglePageInCL(cl.id)}
                key={cl.id}
              >
                {cl.name} <span />
              </a>
            );
          })}
      </Modal>,
      document.querySelector("#modal-root")
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageId: state.modals.addToCL.pageId,
    modalOpen: state.modals.addToCL.open,
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(ClModal);
