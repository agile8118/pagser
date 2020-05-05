import React, { Component } from "react";
import axios from "axios";
import PageThumbnail from "../partials/PageThumbnail";
import { loadingModal, showSnackBar } from "../../lib/util";

class CollectionShow extends Component {
  state = {
    viewer: "spectator", // Couled be either spectator, authenticated or owner
    btn: "save", // Could be either save, remove, share or stop-sharing
    id: "",
    name: "",
    desc: "",
    pages: [],
    author: "",
    photo: "",
  };

  fetchCollectionData = async (id) => {
    loadingModal("Loading...");
    try {
      const { data } = await axios.get(`/api/collection/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      document.title = `${data.collection.name || ""} | Pagher`;

      this.setState({
        btn: data.btn,
        viewer: data.viewer,
        id: data.collection._id,
        name: data.collection.name,
        desc: data.collection.description,
        photo: data.collection.photo.secure_url,
        author: data.collection.user.name,
        pages: data.collection.pages,
      });

      loadingModal();
    } catch ({ response }) {
      if (response.status === 403) {
        this.props.history.push("/u/collections");
        showSnackBar(
          "Sorry you are not authorized to view that collection.",
          "error",
          4000
        );
      }
    }
  };

  // Send a request to server to either save the collection in library or remove it
  // if it's already saved to the library
  toggleInLibrary = async () => {
    loadingModal("Loading...");
    const { data } = await axios.post(
      `/api/collection/toggle-library/${this.state.id}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    if (data.status === "removed") {
      this.setState({ btn: "save" });
      showSnackBar(
        "The collection was successfully removed from your library.",
        "success"
      );
    }

    if (data.status === "added") {
      this.setState({ btn: "remove" });
      showSnackBar(
        "The collection was successfully added to your library.",
        "success"
      );
    }
    loadingModal();
  };

  // Send a request to server to start or stop sharing the collection
  toggleCLSharing = async () => {
    loadingModal("Loading...");
    const { data } = await axios.post(
      `/api/collection/sharing/${this.state.id}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    if (data.sharing) {
      this.setState({ btn: "stop-sharing" });
      showSnackBar("The collection is now accessable by others.", "success");
    }

    if (!data.sharing) {
      this.setState({ btn: "share" });
      showSnackBar("The collection has been stoped beeing shared.", "success");
    }
    loadingModal();
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchCollectionData(id);
  }

  renderPages() {
    return this.state.pages.map((item) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item._id}
        >
          <PageThumbnail
            status={this.state.status}
            briefDes={item.contents.briefDes}
            title={item.contents.title}
            image={item.cropedPhoto.secure_url}
            target="_blank"
            url={item.url}
            type={item.type}
            authorUsername={item.author.username}
            onClick={() => {}}
          />
        </div>
      );
    });
  }

  render() {
    let button;
    if (this.state.btn === "save")
      button = (
        <button
          className="btn btn-blue-o"
          onClick={() => this.toggleInLibrary()}
        >
          Save to Library <i className="fa fa-plus-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "remove")
      button = (
        <button
          className="btn btn-red-o"
          onClick={() => this.toggleInLibrary()}
        >
          Remove from Library{" "}
          <i className="fa fa-minus-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "share")
      button = (
        <button
          className="btn btn-green-o"
          onClick={() => this.toggleCLSharing()}
        >
          Start sharing this collection{" "}
          <i className="fa fa-share-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "stop-sharing")
      button = (
        <button
          className="btn btn-red-o"
          onClick={() => this.toggleCLSharing()}
        >
          Stop sharing this collection{" "}
          <i className="fa fa-stop-circle" aria-hidden="true" />
        </button>
      );
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-1-of-2">
            <img
              src={this.state.photo}
              onError={(e) => {
                e.target.src = "/images/collection-placeholder.svg";
              }}
            />
          </div>
          <div className="col-lg-1-of-2">
            <div className="collection-show">
              <h2 className="collection-show__name">{this.state.name}</h2>

              <div className="collection-show__desc">{this.state.desc}</div>
              <div className="collection-show__creator">
                Created by {this.state.author}
              </div>
              {button}
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.pages.length > 0 ? (
            <h3 className="heading-tertiary margin-top-4">
              {this.state.pages.length} Page{this.state.pages.length > 1
                ? "s"
                : ""}{" "}
              In This Collection:
            </h3>
          ) : (
            <div className="collection-show__no-page-msg">
              This collection does not have any page.
            </div>
          )}
        </div>
        <div className="row">{this.renderPages()}</div>
      </React.Fragment>
    );
  }
}

export default CollectionShow;
