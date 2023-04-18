import React, { useEffect, useState } from "react";
import SubscriptionThumbnail from "./SubscriptionThumbnail";
import { loadingModal, alert, request } from "@pagser/common";
import { Loading } from "@pagser/reusable";

interface ISubscription {
  _id: string;
  author: {
    name: string;
    username: string;
    headline: string;
    photo: { secure_url: string };
  };
}

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      document.title = "Subscriptions | Pagser";

      setLoading(true);
      const response = (await request.get(`/subscriptions`, {
        auth: true,
      })) as any;

      setSubscriptions(response.subs);

      setLoading(false);
    })();
  }, []);

  const renderSubscriptions = () => {
    if (subscriptions.length === 0)
      return <p className="a-13">You haven't subscribed to any author yet.</p>;

    return subscriptions.map((item) => {
      return (
        <SubscriptionThumbnail
          key={item._id}
          name={item.author.name}
          username={item.author.username}
          headline={item.author.headline}
          image={item.author.photo.secure_url}
        />
      );
    });
  };

  return (
    <div className="row">
      <div className="header-nav">
        <h3 className="heading-tertiary">Your Subscriptions:</h3>
      </div>
      {loading && (
        <div className="center-content margin-top-1">
          <Loading />
        </div>
      )}

      {!loading && <div className="row">{renderSubscriptions()}</div>}
    </div>
  );
};

export default Subscriptions;
