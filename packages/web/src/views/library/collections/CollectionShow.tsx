import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageThumbnail from "../../../partials/PageThumbnail";
import {
  UploadPhoto,
  ConfirmModal,
  Input,
  Textarea,
  Loading,
} from "@pagser/reusable";
import { loadingModal, alert, request } from "@pagser/common";

const CollectionShow = () => {
  const [infoStatus, setInfoStatus] = useState<"normal" | "editing">("normal");
  const [pagesStatus, setPagesStatus] = useState<"normal" | "editing">(
    "normal"
  );
  const [viewer, setViewer] = useState<"spectator" | "authenticated" | "owner">(
    "spectator"
  );
  const [btn, setBtn] = useState<"save" | "remove" | "share" | "stop-sharing">(
    "save"
  );
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");
  const [uploadPhotoMdl, setUploadPhotoMdl] = useState(false);
  const [confCLDeletionMdl, setConfCLDeletionMdl] = useState(false);
  const [confCLStopSharingMdl, setConfCLStopSharingMdl] = useState(false);
  const [confRemovePagesMdl, setConfRemovePagesMdl] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) fetchCollectionData(params.id);
  }, []);

  const fetchCollectionData = async (id: string) => {
    setLoading(true);
    try {
      const response = (await request.get(`/collection/${id}`, {
        auth: true,
      })) as any;

      document.title = `${response.collection.name || ""} | Pagser`;

      setBtn(response.btn);
      setViewer(response.viewer);
      setId(response.collection._id);
      setName(response.collection.name);
      setDesc(response.collection.description);
      setPhoto(response.collection.photo.secure_url);
      setAuthor(response.collection.user.name);
      setPages(response.collection.pages);
    } catch (e: any) {
      if (e.status === 403) {
        navigate("/u/collections");
        alert("Sorry you are not authorized to view that collection.", "error");
      }
    }
    setLoading(false);
  };

  // Sends a request to server to either save the collection in library or remove it
  // if it's already saved to the library
  const toggleInLibrary = async () => {
    loadingModal("Loading...");
    try {
      const response = (await request.post(
        `/collection/toggle-library/${id}`,
        {},
        {
          auth: true,
        }
      )) as any;

      if (response.status === "removed") {
        setBtn("save");
        alert(
          "The collection was successfully removed from your library.",
          "success"
        );
      }

      if (response.status === "added") {
        setBtn("remove");
        alert(
          "The collection was successfully added to your library.",
          "success"
        );
      }
    } catch (e) {}

    loadingModal();
  };

  // Send a request to server to start or stop sharing the collection
  const toggleCLSharing = async () => {
    loadingModal("Loading...");

    try {
      const response = (await request.post(
        `/collection/sharing/${id}`,
        {},
        {
          auth: true,
        }
      )) as any;

      if (response.sharing) {
        setBtn("stop-sharing");
        alert("The collection is now accessible by others.", "success");
      }

      if (!response.sharing) {
        setBtn("share");
        setConfCLStopSharingMdl(false);
        alert("The collection has stopped from being shared.", "success");
      }
    } catch (e) {}

    loadingModal();
  };

  // Sends a request to server to update the name and the description of a collection
  const updateInfo = async () => {
    loadingModal("Saving...");

    try {
      await request.put(
        `/collection/info/${id}`,
        { name: inputName, description: inputDesc },
        {
          auth: true,
        }
      );

      alert("Collection info was updated successfully", "success");

      setInfoStatus("normal");
      setName(inputName);
      setDesc(inputDesc);
    } catch (e) {}

    loadingModal();
  };

  // Send the request to delete collection adn then redirect
  const deleteCollection = async () => {
    loadingModal("Loading...");
    try {
      await request.delete(`/collection/${id}`, {
        auth: true,
      });
      loadingModal();
      alert("Your collection was deleted successfully.", "success");
      navigate("/u/collections");
    } catch (e) {}
  };

  // Send a request to server to remove selected pages from collection
  const removePages = async () => {
    setConfRemovePagesMdl(false);
    loadingModal("Loading...");

    try {
      (await request.put(
        `/api/collection/remove-pages/${id}`,
        { pageIds: selectedPages },
        {
          auth: true,
        }
      )) as any;

      loadingModal();
      alert("Page(s) removed from your collection successfully.", "success");

      const newArr = pages.filter((page) => {
        return selectedPages.indexOf(page._id) === -1;
      });

      setPages(newArr);
      setSelectedPages([]);
      setPagesStatus("normal");
    } catch (e) {
      loadingModal();
      alert("Sorry an error occurred please try again.", "error");
    }
  };

  const renderPages = () => {
    return pages.map((item) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item._id}
        >
          <PageThumbnail
            id={item.id}
            selected={selectedPages.indexOf(item._id) > -1 ? true : false}
            status={pagesStatus}
            briefDes={item.contents.briefDes}
            title={item.contents.title}
            image={item.cropedPhoto.secure_url}
            target="_blank"
            url={item.url}
            type={item.type}
            authorUsername={item.author.username}
            onClick={() => {
              if (pagesStatus === "editing") {
                const index = selectedPages.indexOf(item._id);
                if (index === -1) {
                  // Add the page to the selected list
                  setSelectedPages([...selectedPages, item._id]);
                } else {
                  // Remove the page from the selected list
                  setSelectedPages([
                    ...selectedPages.slice(0, index),
                    ...selectedPages.slice(index + 1),
                  ]);
                }
              }
            }}
          />
        </div>
      );
    });
  };

  // Render the share, stop-sharing, save or remove buttons
  const renderBtn = () => {
    if (btn === "save")
      return (
        <button className="btn btn-blue-o" onClick={() => toggleInLibrary()}>
          Save to Library <i className="fa fa-plus-square" aria-hidden="true" />
        </button>
      );

    if (btn === "remove")
      return (
        <button className="btn btn-red-o" onClick={() => toggleInLibrary()}>
          Remove from Library{" "}
          <i className="fa fa-minus-square" aria-hidden="true" />
        </button>
      );

    if (btn === "share")
      return (
        <button className="btn btn-green-o" onClick={() => toggleCLSharing()}>
          Start sharing this collection{" "}
          <i className="fa fa-share-square" aria-hidden="true" />
        </button>
      );

    if (btn === "stop-sharing")
      return (
        <button
          className="btn btn-red-o"
          onClick={() => setConfCLStopSharingMdl(true)}
        >
          Stop sharing this collection{" "}
          <i className="fa fa-stop-circle" aria-hidden="true" />
        </button>
      );
  };

  // Render the collection image, viewer should be able to update it if their owner
  const renderImg = () => {
    if (viewer === "owner") {
      return (
        <React.Fragment>
          <UploadPhoto
            open={uploadPhotoMdl}
            header="Upload a Photo"
            text="Upload a photo for your collection:"
            inputLabelName="Choose a photo"
            url={`/collection/photo/${id}`}
            minWidth={960}
            minHeight={540}
            size={8000000}
            aspectRatio={16 / 9}
            success={(photo) => setPhoto(photo)}
            onClose={() => {
              setUploadPhotoMdl(false);
            }}
          />
          <a
            className="img-upload-btn"
            href="javascript:void(0)"
            onClick={() => setUploadPhotoMdl(true)}
          >
            <img
              src={photo}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/collection-placeholder.svg";
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
        src={photo}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "/images/collection-placeholder.svg";
        }}
      />
    );
  };

  // Info actions buttons for owner
  const renderActionBtns = () => {
    if (viewer === "owner" && infoStatus === "normal")
      return (
        <div className="collection-show__actions">
          <button
            className="btn-i btn-i-blue btn-i-big"
            onClick={() => {
              setInfoStatus("editing");
              setInputName(name);
              setInputDesc(desc);
            }}
          >
            <i className="fa fa-pencil" />
          </button>
          <button
            className="btn-i btn-i-red btn-i-big"
            onClick={() => setConfCLDeletionMdl(true)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      );
  };

  // Edit form for collection name and description. Only for owner
  const renderEditForm = () => {
    if (viewer === "owner" && infoStatus === "editing")
      return (
        <form
          className="form margin-bottom-2 margin-top-3"
          onSubmit={(e) => {
            e.preventDefault();
            updateInfo();
          }}
        >
          <div className="form__group">
            <Input
              lined={true}
              type="text"
              placeholder="Collection name"
              value={inputName}
              required
              autoFocus
              onChange={(value) => setInputName(value)}
            />
          </div>
          <div className="form__group">
            <Textarea
              rows={1}
              // className="form__input form__input--lined"
              placeholder="Add a description"
              value={inputDesc}
              onChange={(value) => setInputDesc(value)}
            />
          </div>
          <div className="right-content">
            <button
              type="button"
              className="btn btn-default btn-sm margin-right-1"
              onClick={() => setInfoStatus("normal")}
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

  if (loading) {
    return (
      <div className="center-content margin-top-1">
        <Loading />
      </div>
    );
  }

  return (
    <React.Fragment>
      <ConfirmModal
        header="Delete your collection"
        open={confCLDeletionMdl}
        btnName="Delete"
        onConfirm={() => {
          deleteCollection();
        }}
        onCancel={() => {
          setConfCLDeletionMdl(false);
        }}
      >
        <p>Are you sure that you want to delete your collection? </p>

        {pages.length > 0 && (
          <p>
            All the pages you have saved on this collection will be removed from
            your library if you don't have them saved somewhere else.
          </p>
        )}

        {btn === "stop-sharing" && (
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
        open={confCLStopSharingMdl}
        btnName="Stop Sharing"
        onConfirm={() => {
          toggleCLSharing();
        }}
        onCancel={() => {
          setConfCLStopSharingMdl(false);
        }}
      >
        <p>Are you sure that you want to make your collection private? </p>

        <p>
          If you stop the collection from being shared, all the people that have
          saved your collection won't be able to access it and the collection
          won't be shown on your public profile any longer until you make it
          public again.
        </p>
      </ConfirmModal>
      <ConfirmModal
        header="Remove pages"
        open={confRemovePagesMdl}
        btnName="Remove"
        onConfirm={() => {
          removePages();
        }}
        onCancel={() => {
          setConfRemovePagesMdl(false);
        }}
      >
        <p>
          Are you sure that you want to remove the selected page(s) from your
          collection?{" "}
        </p>

        <p>You cannot undo this action.</p>
      </ConfirmModal>
      <div className="row">
        <div className="col-lg-1-of-2 col-md-1-of-2">{renderImg()}</div>
        <div className="col-lg-1-of-2 col-md-1-of-2">
          <div className="collection-show">
            {renderActionBtns()}

            {infoStatus === "normal" && (
              <React.Fragment>
                <h2 className="collection-show__name">{name}</h2>
                <div className="collection-show__desc">{desc}</div>
              </React.Fragment>
            )}

            {renderEditForm()}

            <div className="collection-show__creator">
              Created by {viewer === "owner" ? "You" : author}
            </div>
            {renderBtn()}
          </div>
        </div>
      </div>
      {/* PAGES */}
      <div className="row">
        {pages.length > 0 ? (
          <React.Fragment>
            <div className="header-nav margin-top-4">
              <h3 className="heading-tertiary">
                {pages.length} Page
                {pages.length > 1 ? "s" : ""} In This Collection:
              </h3>
              {pagesStatus === "editing" && (
                <div className="header-nav__label">
                  {selectedPages.length} page
                  {selectedPages.length > 1 ? "s" : ""} selected
                </div>
              )}
              {viewer === "owner" && (
                <div className="header-nav__actions">
                  {pagesStatus === "normal" ? (
                    <button
                      className="btn-text"
                      onClick={() => setPagesStatus("editing")}
                    >
                      Edit
                    </button>
                  ) : (
                    <React.Fragment>
                      <button
                        className="btn-text btn-text-red"
                        disabled={selectedPages.length === 0}
                        onClick={() => setConfRemovePagesMdl(true)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn-text"
                        onClick={() => {
                          setPagesStatus("normal");
                          setSelectedPages([]);
                        }}
                      >
                        Done
                      </button>
                    </React.Fragment>
                  )}
                </div>
              )}
            </div>
            {pagesStatus === "editing" && (
              <div className="center-content a-15">
                <button
                  className="btn-text"
                  disabled={
                    selectedPages.length !== 1 ||
                    pages[0]._id === selectedPages[0]
                  }
                  onClick={() => {
                    const newArr = [...pages];
                    const idx = newArr.findIndex(
                      (p) => p._id === selectedPages[0]
                    );
                    const temp = newArr[idx];
                    newArr[idx] = newArr[idx - 1];
                    newArr[idx - 1] = temp;
                    /** @todo send a request to server to update the order */
                    setPages(newArr);
                  }}
                >
                  <i className="fa fa-arrow-circle-left" aria-hidden="true" />{" "}
                  Move Left
                </button>
                <button
                  className="btn-text"
                  disabled={
                    selectedPages.length !== 1 ||
                    pages[pages.length - 1]._id === selectedPages[0]
                  }
                  onClick={() => {
                    const newArr = [...pages];
                    const idx = newArr.findIndex(
                      (p) => p._id === selectedPages[0]
                    );
                    const temp = newArr[idx];
                    newArr[idx] = newArr[idx + 1];
                    newArr[idx + 1] = temp;
                    /** @todo send a request to server to update the order */
                    setPages(newArr);
                  }}
                >
                  Move Right{" "}
                  <i className="fa fa-arrow-circle-right" aria-hidden="true" />
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
      <div className="row">{renderPages()}</div>
    </React.Fragment>
  );
};

export default CollectionShow;
