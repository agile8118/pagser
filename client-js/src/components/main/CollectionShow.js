import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PageThumbnail from "../partials/PageThumbnail";
import { ConfirmModal } from "../partials/Modals";
import UploadPhoto from "../modals/UploadPhoto";
import { loadingModal, showSnackBar } from "../../lib/util";

import { openUploadPhoto } from "actions";

class CollectionShow extends Component {
  state = {
    infoStatus: "normal", // Could be either normal or editing
    pagesStatus: "normal", // Could be either normal or editing
    viewer: "spectator", // Could be either spectator, authenticated or owner
    btn: "save", // Could be either save, remove, share or stop-sharing
    id: "",
    inputName: "",
    inputDesc: "",
    name: "",
    desc: "",
    pages: [],
    selectedPages: [],
    author: "",
    photo: "",
    confCLDeletionMdl: false,
    confCLStopSharingMdl: false,
    confRemovePagesMdl: false,
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
      this.setState({ btn: "share", confCLStopSharingMdl: false });
      showSnackBar("The collection has been stoped beeing shared.", "success");
    }
    loadingModal();
  };

  // Send a request to server update the name and description
  updateInfo = async () => {
    loadingModal("Saving...");
    const { data } = await axios.put(
      `/api/collection/info/${this.state.id}`,
      { name: this.state.inputName, description: this.state.inputDesc },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    loadingModal();
    showSnackBar("Collection info updated successfully", "success");

    this.setState({
      infoStatus: "normal",
      name: this.state.inputName,
      desc: this.state.inputDesc,
    });
  };

  // Send the request to delete collection adn then redirect
  deleteCollection = async () => {
    loadingModal("Loading...");
    await axios.delete(`/api/collection/${this.state.id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    loadingModal();
    showSnackBar("Your collection was deleted successfully.", "success");
    this.props.history.push("/u/collections");
  };

  // Send a request to server to remove selected pages from collection
  removePages = async () => {
    this.setState({ confRemovePagesMdl: false });
    loadingModal("Loading...");
    try {
      const { data } = await axios.put(
        `/api/collection/remove-pages/${this.state.id}`,
        { pageIds: this.state.selectedPages },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(data);

      loadingModal();
      showSnackBar(
        "Page(s) removed from your collection successfully.",
        "success"
      );

      const newArr = this.state.pages.filter((page) => {
        return this.state.selectedPages.indexOf(page._id) === -1;
      });

      this.setState({
        pages: newArr,
        selectedPages: [],
        pagesStatus: "normal",
      });
    } catch (e) {
      loadingModal();
      showSnackBar("Sorry an error occurred please try again.", "error");
    }
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
            selected={
              this.state.selectedPages.indexOf(item._id) > -1 ? true : false
            }
            status={this.state.pagesStatus}
            briefDes={item.contents.briefDes}
            title={item.contents.title}
            image={item.cropedPhoto.secure_url}
            target="_blank"
            url={item.url}
            type={item.type}
            authorUsername={item.author.username}
            onClick={() => {
              if (this.state.pagesStatus === "editing") {
                const index = this.state.selectedPages.indexOf(item._id);
                if (index === -1) {
                  // Add the page to the selected list
                  this.setState({
                    selectedPages: [...this.state.selectedPages, item._id],
                  });
                } else {
                  // Remove the page from the selected list
                  this.setState({
                    selectedPages: [
                      ...this.state.selectedPages.slice(0, index),
                      ...this.state.selectedPages.slice(index + 1),
                    ],
                  });
                }
              }
            }}
          />
        </div>
      );
    });
  }

  // Render the share, stop-sharing, save or remove buttons
  renderBtn() {
    if (this.state.btn === "save")
      return (
        <button
          className="btn btn-blue-o"
          onClick={() => this.toggleInLibrary()}
        >
          Save to Library <i className="fa fa-plus-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "remove")
      return (
        <button
          className="btn btn-red-o"
          onClick={() => this.toggleInLibrary()}
        >
          Remove from Library{" "}
          <i className="fa fa-minus-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "share")
      return (
        <button
          className="btn btn-green-o"
          onClick={() => this.toggleCLSharing()}
        >
          Start sharing this collection{" "}
          <i className="fa fa-share-square" aria-hidden="true" />
        </button>
      );

    if (this.state.btn === "stop-sharing")
      return (
        <button
          className="btn btn-red-o"
          onClick={() => this.setState({ confCLStopSharingMdl: true })}
        >
          Stop sharing this collection{" "}
          <i className="fa fa-stop-circle" aria-hidden="true" />
        </button>
      );
  }

  // Render the collection image, viwer should be able to update it if their owner
  renderImg() {
    if (this.state.viewer === "owner") {
      return (
        <React.Fragment>
          <UploadPhoto
            header="Upload a Photo"
            text="Upload a photo for your collection:"
            inputLabelName="Choose a photo"
            url={`/api/collection/photo/${this.state.id}`}
            minWidth={960}
            minHeight={540}
            size={8000000}
            aspectRatio={16 / 9}
            success={(photo) => this.setState({ photo })}
          />
          <a
            className="img-upload-btn"
            href="javascript:void(0)"
            onClick={() => this.props.openUploadPhoto()}
          >
            <img
              src={this.state.photo}
              onError={(e) => {
                e.target.src = "/images/collection-placeholder.svg";
              }}
            />
            <div className="img-upload-btn__cover">
              <div className="img-upload-btn__content">
                <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload a
                New Photo
              </div>
            </div>
          </a>
        </React.Fragment>
      );
    }

    return (
      <img
        src={this.state.photo}
        onError={(e) => {
          e.target.src = "/images/collection-placeholder.svg";
        }}
      />
    );
  }

  // Info actions buttons for owner
  renderActionBtns = () => {
    if (this.state.viewer === "owner" && this.state.infoStatus === "normal")
      return (
        <div className="collection-show__actions">
          <button
            className="btn-i btn-i-blue btn-i-big"
            onClick={() =>
              this.setState({
                infoStatus: "editing",
                inputName: this.state.name,
                inputDesc: this.state.desc,
              })
            }
          >
            <i className="fa fa-pencil" />
          </button>
          <button
            className="btn-i btn-i-red btn-i-big"
            onClick={() => this.setState({ confCLDeletionMdl: true })}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      );
  };

  // Edit form for collection name and description. Only for owner
  renderEditForm = () => {
    if (this.state.viewer === "owner" && this.state.infoStatus === "editing")
      return (
        <form
          className="form margin-bottom-2 margin-top-3"
          onSubmit={(e) => {
            e.preventDefault();
            this.updateInfo();
          }}
        >
          <div className="form__group">
            <input
              type="text"
              placeholder="Collection name"
              className="form__input form__input--lined"
              value={this.state.inputName}
              required
              autoFocus
              onChange={(e) => this.setState({ inputName: e.target.value })}
            />
          </div>
          <div className="form__group">
            <textarea
              type="text"
              rows={1}
              className="form__input form__input--lined"
              placeholder="Add a description"
              value={this.state.inputDesc}
              onChange={(e) => this.setState({ inputDesc: e.target.value })}
            />
          </div>
          <div className="right-content">
            <button
              type="button"
              className="btn btn-default btn-sm margin-right-1"
              onClick={() => this.setState({ infoStatus: "normal" })}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-blue btn-sm">
              Save
            </button>
          </div>
        </form>
      );
  };

  render() {
    return (
      <React.Fragment>
        <ConfirmModal
          header="Delete your collection"
          open={this.state.confCLDeletionMdl}
          btnName="Delete"
          onConfirm={() => {
            this.deleteCollection();
          }}
          onCancel={() => {
            this.setState({ confCLDeletionMdl: false });
          }}
        >
          <p>Are you sure that you want to delete your collection? </p>

          {this.state.pages.length > 0 && (
            <p>
              All the pages you have saved on this collection will be removed
              from your library if you don't have them saved somewhere else.
            </p>
          )}

          {this.state.btn === "stop-sharing" && (
            <p>
              This collection is being shared for others. If you delete the
              collection all the people that have saved your collection won't be
              able to access it any longer.
            </p>
          )}

          <strong>You cannot undo this action.</strong>
        </ConfirmModal>
        <ConfirmModal
          header="Stop sharing your collection"
          open={this.state.confCLStopSharingMdl}
          btnName="Stop Sharing"
          onConfirm={() => {
            this.toggleCLSharing();
          }}
          onCancel={() => {
            this.setState({ confCLStopSharingMdl: false });
          }}
        >
          <p>Are you sure that you want to make your collection private? </p>

          <p>
            If you stop the collection from being shared, all the people that
            have saved your collection won't be able to access it and the
            collection won't be shown on your public profile any longer until
            you make it public again.
          </p>
        </ConfirmModal>
        <ConfirmModal
          header="Remove pages"
          open={this.state.confRemovePagesMdl}
          btnName="Remove"
          onConfirm={() => {
            this.removePages();
          }}
          onCancel={() => {
            this.setState({ confRemovePagesMdl: false });
          }}
        >
          <p>
            Are you sure that you want to remove the selected page(s) from your
            collection?{" "}
          </p>

          <p>You cannot undo this action.</p>
        </ConfirmModal>
        <div className="row">
          <div className="col-lg-1-of-2">{this.renderImg()}</div>
          <div className="col-lg-1-of-2">
            <div className="collection-show">
              {this.renderActionBtns()}

              {this.state.infoStatus === "normal" && (
                <React.Fragment>
                  <h2 className="collection-show__name">{this.state.name}</h2>
                  <div className="collection-show__desc">{this.state.desc}</div>
                </React.Fragment>
              )}

              {this.renderEditForm()}

              <div className="collection-show__creator">
                Created by{" "}
                {this.state.viewer === "owner" ? "You" : this.state.author}
              </div>
              {this.renderBtn()}
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.pages.length > 0 ? (
            <React.Fragment>
              <div className="header-nav margin-top-4">
                <h3 className="heading-tertiary">
                  {this.state.pages.length} Page{this.state.pages.length > 1
                    ? "s"
                    : ""}{" "}
                  In This Collection:
                </h3>
                {this.state.pagesStatus === "editing" && (
                  <div className="header-nav__label">
                    {this.state.selectedPages.length} page{this.state
                      .selectedPages.length > 1
                      ? "s"
                      : ""}{" "}
                    selected
                  </div>
                )}
                {this.state.viewer === "owner" && (
                  <div className="header-nav__actions">
                    {this.state.pagesStatus === "normal" ? (
                      <button
                        className="btn-text"
                        onClick={() =>
                          this.setState({ pagesStatus: "editing" })
                        }
                      >
                        Edit
                      </button>
                    ) : (
                      <React.Fragment>
                        <button
                          className="btn-text btn-text-red"
                          disabled={this.state.selectedPages.length === 0}
                          onClick={() =>
                            this.setState({ confRemovePagesMdl: true })
                          }
                        >
                          Remove
                        </button>
                        <button
                          className="btn-text"
                          onClick={() =>
                            this.setState({
                              pagesStatus: "normal",
                              selectedPages: [],
                            })
                          }
                        >
                          Done
                        </button>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </div>
              {this.state.pagesStatus === "editing" && (
                <div className="center-content a-15">
                  <button
                    className="btn-text"
                    disabled={
                      this.state.selectedPages.length !== 1 ||
                      this.state.pages[0]._id === this.state.selectedPages[0]
                    }
                    onClick={() => {
                      const newArr = [...this.state.pages];
                      const idx = newArr.findIndex(
                        (p) => p._id === this.state.selectedPages[0]
                      );
                      const temp = newArr[idx];
                      newArr[idx] = newArr[idx - 1];
                      newArr[idx - 1] = temp;
                      /** @TODO send a request to server to update the order */
                      this.setState({ pages: newArr });
                    }}
                  >
                    <i className="fa fa-arrow-circle-left" aria-hidden="true" />{" "}
                    Move Left
                  </button>
                  <button
                    className="btn-text"
                    disabled={
                      this.state.selectedPages.length !== 1 ||
                      this.state.pages[this.state.pages.length - 1]._id ===
                        this.state.selectedPages[0]
                    }
                    onClick={() => {
                      const newArr = [...this.state.pages];
                      const idx = newArr.findIndex(
                        (p) => p._id === this.state.selectedPages[0]
                      );
                      const temp = newArr[idx];
                      newArr[idx] = newArr[idx + 1];
                      newArr[idx + 1] = temp;
                      /** @TODO send a request to server to update the order */
                      this.setState({ pages: newArr });
                    }}
                  >
                    Move Right{" "}
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )}
            </React.Fragment>
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

export default connect(
  null,
  { openUploadPhoto }
)(CollectionShow);
