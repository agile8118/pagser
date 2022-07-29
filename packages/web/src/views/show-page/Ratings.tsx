import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingModal, alert, request } from "@pagser/common";
import {
  selectLoading,
  selectId,
  selectRatings,
  setRatings,
} from "./pageSlice";

const Ratings = () => {
  const loading = useSelector(selectLoading);
  const pageId = useSelector(selectId);
  const ratings = useSelector(selectRatings);

  const dispatch = useDispatch<any>();

  const onRateButtonClick = async (action: "like" | "dislike") => {
    loadingModal("Loading...");

    try {
      const response = (await request.patch(
        `/rate/page/${pageId}`,
        { rate: action },
        { auth: true }
      )) as any;

      dispatch(setRatings(response));
    } catch (e: any) {
      if (e.status === 401) {
        alert("Please login to rate a page.");
      } else {
        alert("An unknown error occurred.");
      }
    }
    loadingModal();
  };

  if (loading) return <div />;

  return (
    <div>
      <div className="page__rating">
        <p>How would you rate this page?</p>
        <div>
          <span>{ratings.likes}</span>
          <button
            className="btn-i btn-i-big btn-i-blue"
            onClick={() => {
              onRateButtonClick("like");
            }}
          >
            <i className="fa fa-thumbs-up" />
          </button>
        </div>
        <div>
          <span>{ratings.dislikes}</span>
          <button
            className="btn-i btn-i-big btn-i-blue"
            onClick={() => {
              onRateButtonClick("dislike");
            }}
          >
            <i className="fa fa-thumbs-down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
