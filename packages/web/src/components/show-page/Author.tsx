import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingModal, alert } from "@pagser/common";
import { ConfirmModal, Button } from "@pagser/reusable";
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
    if (status !== "authenticated")
      return alert("Please login to be able to subscribe to authors.");

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

  return (
    <>
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
          {/* Subscribe button */}
          <div className="page__author__sub">
            {status !== "owner" && (
              <Button
                color={subscribed ? "default" : "blue"}
                rounded={true}
                onClick={onSubscribeClicked}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </Button>
            )}
          </div>
        </div>
        <p className={bioClassName}>{userBio}</p>
      </div>
    </>
  );
};

export default Author;
