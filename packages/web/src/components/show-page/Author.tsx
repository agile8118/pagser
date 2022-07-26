import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request, loadingModal, isBottom } from "@pagser/common";
import { ConfirmModal } from "@pagser/reusable";
import { subscribe, selectLoading, selectId, selectAuthor } from "./pageSlice";
import { selectStatus, selectSubscribed } from "./userSlice";

const Author = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const status = useSelector(selectStatus);
  const loading = useSelector(selectLoading);
  const subscribed = useSelector(selectSubscribed);
  const author = useSelector(selectAuthor);

  const dispatch = useDispatch<any>();

  const onSubscribeClicked = () => {
    if (subscribed) {
      setConfirmationModalOpen(true);
    } else {
      dispatch(subscribe());
    }
  };

  if (loading) return <div />;

  let userBio = author.biography.length
    ? author.biography
    : "This user has not added a biography.";
  let bioClassName = author.biography.length
    ? "page__author__bio"
    : "page__author__bio italic";

  // subscribe button
  let subBtn = subscribed ? (
    <button className="btn btn-default btn-round" onClick={onSubscribeClicked}>
      Subscribed
    </button>
  ) : (
    <button className="btn btn-blue btn-round" onClick={onSubscribeClicked}>
      Subscribe
    </button>
  );
  if (status === "owner") subBtn = <React.Fragment />;

  return (
    <React.Fragment>
      <ConfirmModal
        header={`Unsubscribe from ${author.username}?`}
        message="Are you sure that you want to unsubscribe from this author?"
        open={confirmationModalOpen}
        onConfirm={() => {
          setConfirmationModalOpen(false);
          loadingModal("Unsubscribing...");
          dispatch(subscribe());
          loadingModal();
        }}
        onCancel={() => {
          setConfirmationModalOpen(false);
        }}
        btnName="Unsubscribe"
      />
      <div className="page__author">
        <div className="page__author__head">
          <img
            src={author.photoUrl}
            id="user-photo"
            alt="Author image"
            onError={() => {
              (document.querySelector("#user-photo") as HTMLImageElement).src =
                "/images/users/placeholder.png";
            }}
          />
          <div className="page__author__details">
            <a
              href={`/users/${author.username}`}
              target="_blank"
              className="black-link"
            >
              {author.name}
            </a>
            <div>{author.subscribersCount} Subscribers</div>
          </div>
          <div className="page__author__sub">{subBtn}</div>
        </div>
        <p className={bioClassName}>{userBio}</p>
      </div>
    </React.Fragment>
  );
};

export default Author;
