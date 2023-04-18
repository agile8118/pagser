import React, { useState, useEffect } from "react";
import PageThumbnail from "../../../partials/PageThumbnail";
import Header from "./Header";
import { ConfirmModal, Loading } from "@pagser/reusable";
import { useDispatch, useSelector } from "react-redux";

import {
  selectStatus,
  selectFilterBy,
  selectLoading,
  selectSelectedPages,
  selectPages,
  fetchPages,
  setStatus,
  selectSortBy,
  selectPage,
  removePages,
} from "../pagesSlice";

const Published = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const dispatch = useDispatch<any>();
  const status = useSelector(selectStatus);
  const loading = useSelector(selectLoading);
  const selectedPages = useSelector(selectSelectedPages);
  const pages = useSelector(selectPages);

  useEffect(() => {
    document.title = "Draft Pages | Pagser";
    dispatch(fetchPages("user-pages/draft"));

    return () => {
      dispatch(setStatus("normal"));
    };
  }, []);

  const renderList = () => {
    if (pages.length > 0) {
      return pages.map((item) => {
        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={item.id}
          >
            <PageThumbnail
              id={item.id}
              target="_blank"
              noPhoto={true}
              label={`Last updated: ${item.updatedAt}`}
              type="draft"
              status={status}
              selected={selectedPages.indexOf(item.id) > -1 ? true : false}
              title={item.contents.title}
              briefDes={item.contents.briefDes}
              onClick={() => {
                if (status === "editing") dispatch(selectPage(item.id));
              }}
            />
          </div>
        );
      });
    } else {
      return <p className="a-13">You don't have any draft page.</p>;
    }
  };

  const removeBtn = status === "editing" && (
    <button
      className="btn-text btn-text-red"
      disabled={selectedPages.length > 0 ? false : true}
      onClick={() => {
        setConfirmationModalOpen(true);
      }}
    >
      Delete
    </button>
  );

  const doneBtn = status === "editing" && (
    <button
      className="btn-text"
      onClick={() => {
        dispatch(setStatus("normal"));
      }}
    >
      Done
    </button>
  );

  const editBtn = pages.length > 0 && status === "normal" && (
    <button
      className="btn-text"
      onClick={() => {
        dispatch(setStatus("editing"));
      }}
    >
      Edit <i className="fa fa-pencil-square" aria-hidden="true" />
    </button>
  );

  return (
    <React.Fragment>
      <ConfirmModal
        header="Delete Draft Pages?"
        open={confirmationModalOpen}
        btnName="Delete"
        onConfirm={() => {
          dispatch(removePages("user-pages/draft"));
          setConfirmationModalOpen(false);
        }}
        onCancel={() => {
          setConfirmationModalOpen(false);
        }}
      >
        <p>
          Are you sure that you want to delete the selected draft page
          {selectedPages.length > 1 ? "s " : ""}
          ? <br /> You have selected {selectedPages.length} draft page
          {selectedPages.length > 1 ? "s " : ""} and you cannot undo the action.
        </p>
      </ConfirmModal>
      <div className="row">
        <Header />
        <div className="header-nav">
          <h3 className="heading-tertiary">Your Draft Pages:</h3>
          {!loading && (
            <div className="header-nav__actions">
              {removeBtn}
              {doneBtn}
              {editBtn}
            </div>
          )}
        </div>
        {loading && (
          <div className="center-content margin-top-1">
            <Loading />
          </div>
        )}
        {!loading && <div className="row">{renderList()}</div>}
      </div>
    </React.Fragment>
  );
};

export default Published;
