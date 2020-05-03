import React, { Component } from "react";
import axios from "axios";
import Collection from "../partials/CollectionThumbnail";
import { Modal } from "../partials/Modals";
import Dropdown from "../partials/Dropdown";
import { loadingModal, showSnackBar } from "../../lib/util";

class Collections extends Component {
  state = {
    newCollectionMdl: false,
    name: "",
    description: "",
    savedCollections: [],
    createdCollections: [],
    sortByCC: "date-created",
    sortBySC: "date-added",
  };

  createCollection = async (e) => {
    e.preventDefault();
    loadingModal("Loading...");
    const { data } = await axios.post(
      `/api/collection`,
      { name: this.state.name, description: this.state.description },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    loadingModal();
    showSnackBar("Your collection created successfully.", "success");

    this.fetchCollections("created", "date-created");

    this.setState({
      newCollectionMdl: false,
      name: "",
      description: "",
    });
  };

  fetchCollections = async (kind, sortBy) => {
    loadingModal("Loading...");
    const { data } = await axios.get(
      `/api/collections/${kind}?sortBy=${sortBy}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    switch (kind) {
      case "created-saved":
        this.setState({
          savedCollections: data.savedCollections,
          createdCollections: data.createdCollections,
        });
        break;
      case "saved":
        this.setState({
          savedCollections: data.collections,
        });
        break;
      case "created":
        this.setState({
          createdCollections: data.collections,
          sortByCC: data.sortBy,
        });
        break;
    }

    loadingModal();
  };

  componentDidMount() {
    this.fetchCollections("created-saved");
  }

  renderCollections(kind) {
    return this.state[kind].map((cl) => {
      return (
        <div
          key={cl._id}
          className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
        >
          <Collection
            id={cl._id}
            name={cl.name}
            img={cl.photo.secure_url}
            desc={cl.description}
            pageNum={cl.pages.length}
            author={cl.user.name}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          header="Create a New Collection"
          open={this.state.newCollectionMdl}
          onClose={() => {
            this.setState({ newCollectionMdl: false });
          }}
        >
          <form className="form" onSubmit={this.createCollection}>
            <div className="form__group">
              <label>Name</label>
              <input
                type="text"
                placeholder="The name of your collection"
                className="form__input"
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
                value={this.state.name}
                required
              />
            </div>
            <div className="form__group">
              <label>Description (optional)</label>
              <textarea
                placeholder="Describe what this collection is for, contains, etc."
                className="form__input"
                value={this.state.description}
                rows={4}
                onChange={(event) => {
                  this.setState({ description: event.target.value });
                }}
              />
            </div>
            <div className="right-content">
              <button className="btn btn-blue" type="submit">
                Create
              </button>
            </div>
          </form>
        </Modal>
        <div className="row">
          <div className="header-nav margin-bottom-1">
            <h3 className="heading-tertiary">Collections You've Created:</h3>
            <div className="header-nav__actions">
              {this.state.createdCollections.length > 1 && (
                <Dropdown
                  num="1"
                  select={this.state.sortByCC}
                  onChange={(name) => {
                    this.fetchCollections("created", name);
                  }}
                >
                  <div
                    data-role-name="btn-name"
                    data-icon-class="fa fa-sort-amount-asc"
                  >
                    Sort By
                  </div>
                  <div data-role-name="item" data-name="date-created">
                    Date Created
                  </div>
                  <div data-role-name="item" data-name="a-z">
                    A - Z
                  </div>
                </Dropdown>
              )}
              <button
                className="btn-text"
                onClick={() => {
                  this.setState({ newCollectionMdl: true });
                }}
              >
                Create a new collection{" "}
                <i className="fa fa-plus" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="row">
            {this.renderCollections("createdCollections")}
          </div>
        </div>
        <div className="row">
          <div className="header-nav margin-bottom-1">
            <h3 className="heading-tertiary">Collections You've Saved:</h3>
            <div className="header-nav__actions">
              {/* {this.state.savedCollections.length > 1 && (
                <Dropdown
                  num="2"
                  select={this.state.sortBySC}
                  onChange={(name) => {
                    this.fetchCollections("saved", name);
                  }}
                >
                  <div
                    data-role-name="btn-name"
                    data-icon-class="fa fa-sort-amount-asc"
                  >
                    Sort By
                  </div>
                  <div data-role-name="item" data-name="date-added">
                    Date Added
                  </div>
                  <div data-role-name="item" data-name="a-z">
                    A - Z
                  </div>
                  <div data-role-name="item" data-name="date-created">
                    Date Created
                  </div>
                </Dropdown>
              )} */}
            </div>
          </div>
          <div className="row">
            {this.renderCollections("savedCollections")}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Collections;
