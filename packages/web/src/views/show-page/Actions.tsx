import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Input, Button, AddToCollection } from "@pagser/reusable";
import { request, alert } from "@pagser/common";

import {
  selectContents,
  selectId,
  fetchPublicPage,
  selectLoading,
  toggleReadLater,
} from "./pageSlice";
import { selectStatus, selectReadLater } from "./userSlice";

interface IProps {
  type: "public" | "private";
}

const Actions = (props: IProps) => {
  const [titleTyped, setTitleTyped] = useState("");
  const [deletePageMdl, setDeletePageMdl] = useState(false);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);
  const [addToCollectionModal, setAddToCollectionModal] = useState(false);

  const pageId = useSelector(selectId);
  const { title } = useSelector(selectContents);
  const status = useSelector(selectStatus);
  const readLater = useSelector(selectReadLater);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (props.type === "public") {
      dispatch(fetchPublicPage());
    }
  }, []);

  useEffect(() => {
    if (!pageId) return;
    const timer = setTimeout(() => sendViewRequest(pageId), 15000);
    return () => clearTimeout(timer);
  }, [pageId]);

  useEffect(() => {
    if (
      titleTyped.toLowerCase().replace(/\s/g, "") ===
      title.toLowerCase().replace(/\s/g, "")
    ) {
      setDeleteButtonDisabled(false);
    } else {
      setDeleteButtonDisabled(true);
    }
  }, [titleTyped]);

  const sendViewRequest = async (pageId: string) => {
    await request.post(`/views/${pageId}`, null, { auth: true });
  };

  const onDeletePageSubmit = async () => {
    await request.delete(`/pages/${pageId}`, { auth: true });
    location.reload();
  };

  const renderContent = () => {
    if (status === "owner") {
      return (
        <React.Fragment>
          <Modal
            header="Delete your page"
            open={deletePageMdl}
            onClose={() => {
              setDeletePageMdl(false);
            }}
          >
            <p className="margin-bottom-08">
              Are you sure you want to delete your page? Comments and likes will
              also be deleted.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                onDeletePageSubmit();
              }}
            >
              <div className="margin-bottom-08">
                <Input
                  type="text"
                  placeholder="Type the page title to confirm deletion"
                  onChange={(value) => {
                    setTitleTyped(value);
                  }}
                  value={titleTyped}
                  required
                />
              </div>
              <strong>{title.toLowerCase()}</strong>
              <div className="u-flex-text-right">
                <Button
                  color="red"
                  rounded={true}
                  type="submit"
                  id="deleteButton"
                  disabled={deleteButtonDisabled}
                >
                  Delete
                </Button>
              </div>
            </form>
          </Modal>

          <button
            className="btn-i btn-i-blue btn-i-big"
            onClick={() => {
              let url;
              if (props.type === "public") {
                url = `/public-pages/${
                  window.location.pathname.split("/")[2]
                }/edit?t=public`;
              } else if (props.type === "private") {
                url = `/${window.location.pathname.split("/")[1]}/${
                  window.location.pathname.split("/")[2]
                }/edit?t=private`;
              }
              window.location.href = `${url}`;
            }}
          >
            <i className="fa fa-pencil-square-o" />
          </button>
          <button
            className="btn-i btn-i-blue btn-i-big"
            onClick={() => {
              setDeletePageMdl(true);
            }}
          >
            <i className="fa fa-trash-o" />
          </button>
        </React.Fragment>
      );
    }

    return (
      <button
        className="btn-i btn-i-blue btn-i-big"
        onClick={() => {
          if (status === "spectator") {
            alert("Please log in to add pages to read later list.");
          } else {
            dispatch(toggleReadLater(pageId));
          }
        }}
      >
        <i className={rlBtnClass} />
      </button>
    );
  };

  if (loading) return <div />;

  // read later button class
  const rlBtnClass = readLater ? "fa fa-bookmark" : "fa fa-bookmark-o";

  return (
    <React.Fragment>
      <AddToCollection
        open={addToCollectionModal}
        pageId={pageId}
        onClose={() => {
          setAddToCollectionModal(false);
        }}
      />

      <div className="page__header__actions">
        <button
          className="btn-i btn-i-blue btn-i-big"
          onClick={() => {
            if (status === "spectator") {
              alert("Please log in to add pages to collections.");
            } else {
              setAddToCollectionModal(true);
            }
          }}
        >
          <i className="fa fa-th-large" aria-hidden="true" />
        </button>

        {renderContent()}
      </div>
    </React.Fragment>
  );
};

export default Actions;
