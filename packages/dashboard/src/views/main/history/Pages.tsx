import React, { useState, useEffect } from "react";
import PageThumbnail from "../../../partials/PageThumbnail";
import { Dropdown, ConfirmModal, Loading } from "@pagser/reusable";
import Header from "./Header";
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
  TFilterBy,
  selectPage,
  removePages,
} from "../pagesSlice";

const Pages = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const dispatch = useDispatch<any>();
  const status = useSelector(selectStatus);
  const loading = useSelector(selectLoading);
  const filterBy = useSelector(selectFilterBy);
  const sortBy = useSelector(selectSortBy);
  const selectedPages = useSelector(selectSelectedPages);
  const pages = useSelector(selectPages);

  useEffect(() => {
    document.title = "History | Pagser";
    dispatch(fetchPages("history", filterBy));

    return () => {
      dispatch(setStatus("normal"));
    };
  }, []);

  const renderDropdowns = () => {
    if (filterBy === "all" && pages.length === 0) return "";
    if (status === "normal")
      return (
        <Dropdown
          num="1"
          select={filterBy}
          onChange={(name) => {
            dispatch(fetchPages("history", name as TFilterBy, sortBy));
          }}
        >
          <div data-role-name="btn-name" data-icon-class="fa fa-filter">
            Filter By
          </div>
          <div data-role-name="item" data-name="all">
            All Pages
          </div>
          <div data-role-name="item" data-name="private">
            Private Pages
          </div>
          <div data-role-name="item" data-name="public">
            Public Pages
          </div>
        </Dropdown>
      );
  };

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
              selected={selectedPages.indexOf(item.id) > -1 ? true : false}
              status={status}
              briefDes={item.contents.briefDes}
              title={item.contents.title}
              image={item.photo.secure_url}
              target="_blank"
              url={item.url}
              type={item.type}
              label={item.dateVisited}
              authorUsername={item.author.username}
              onClick={() => {
                if (status === "editing") dispatch(selectPage(item.id));
              }}
            />
          </div>
        );
      });
    } else {
      if (filterBy === "public") {
        return (
          <p className="a-13">
            You don't have any public page on your history.
          </p>
        );
      }

      if (filterBy === "private") {
        return (
          <p className="a-13">
            You don't have any private page on your history.
          </p>
        );
      }
      return <p className="a-13">Your reading history list is empty.</p>;
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
      Remove
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
        header="Remove From History?"
        open={confirmationModalOpen}
        onConfirm={() => {
          dispatch(removePages("history"));
          setConfirmationModalOpen(false);
        }}
        onCancel={() => {
          setConfirmationModalOpen(false);
        }}
      >
        <p>
          Are you sure that you want to remove the selected page
          {selectedPages.length > 1 ? "s" : ""} from your history? <br /> You
          have selected {selectedPages.length} page
          {selectedPages.length > 1 ? "s" : ""} and you cannot undo the action.
        </p>
      </ConfirmModal>
      <div className="row">
        <Header />
        <div className="header-nav">
          <h3 className="heading-tertiary">Your Reading History:</h3>
          {!loading && (
            <div className="header-nav__actions">
              {renderDropdowns()}
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

export default Pages;
