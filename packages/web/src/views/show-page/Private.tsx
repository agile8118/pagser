import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "@pagser/reusable";
import {
  fetchPrivatePage,
  selectLoading,
  selectId,
  selectContents,
  selectDate,
  selectConfigurations,
  IConfigurations,
} from "./pageSlice";
import Actions from "./Actions";
import Author from "./Author";
import Ratings from "./Ratings";
import Photo from "./Photo";
import AttachFiles from "./AttachFiles";
import Comments from "./Comments";

const Private = () => {
  const loading = useSelector(selectLoading);
  const pageId = useSelector(selectId);
  const contents = useSelector(selectContents);
  const date = useSelector(selectDate);
  const configurations = useSelector(selectConfigurations) as IConfigurations;

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPrivatePage());
  }, []);

  const renderBody = () => {
    return <p dangerouslySetInnerHTML={{ __html: contents.body as string }} />;
  };

  const renderComment = () => {
    if (configurations.comments) {
      return <Comments />;
    } else {
      return (
        <p className="normal-paragraph disabled-message-comments center-content">
          Comments are disabled for this page.
        </p>
      );
    }
  };

  const renderRatings = () => {
    if (configurations.rating) {
      return <Ratings />;
    } else {
      return (
        <p className="normal-paragraph disabled-message">
          Ratings are disabled for this page.
        </p>
      );
    }
  };

  const renderAuthor = () => {
    if (!configurations.anonymously) {
      return <Author />;
    } else {
      return (
        <p className="normal-paragraph disabled-message">
          This page has been created anonymously.
        </p>
      );
    }
  };

  const renderBriefDes = () => {
    if (
      contents.briefDescription &&
      contents.briefDescription.replace(/ /g, "").length > 0
    ) {
      return (
        <div>
          <strong>What's this page about?</strong>
          {contents.briefDescription}
        </div>
      );
    } else {
      return <div />;
    }
  };

  const renderTarget = () => {
    if (contents.targets && contents.targets.replace(/ /g, "").length > 0) {
      return (
        <div>
          <strong>Who's this page for?</strong>
          {contents.targets}
        </div>
      );
    } else {
      return <div />;
    }
  };

  if (loading) {
    return (
      <div className="center-content margin-top-2">
        <Loading />
      </div>
    );
  }

  // not found
  if (pageId === "0") {
    (document.querySelector("body") as HTMLElement).classList.add("body-grey");
    (document.querySelector("title") as HTMLElement).innerHTML =
      "Page Not Found | Pagser";
    return (
      <h3 className="a-1 center-content">
        Sorry but no page with this URL was found. <br /> Maybe the author has
        deleted this page.
      </h3>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="page">
          <div className="page__header">
            <Actions type="private" />
            <h1 className="page__header__title">{contents.title}</h1>
            <span className="page__header__time">{date}</span>
          </div>

          <Photo />

          <div className="page__contents">
            <div className="page__information">
              {renderBriefDes()}
              {renderTarget()}
            </div>
            <hr />
            <div className="page__body">{renderBody()}</div>

            <AttachFiles />
          </div>

          {renderAuthor()}

          {renderRatings()}
        </div>
      </div>

      {renderComment()}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Private;
