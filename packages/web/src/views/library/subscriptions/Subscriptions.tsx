import React, { useEffect, useState } from "react";
import SubscriptionThumbnail from "./SubscriptionThumbnail";
import { loadingModal, alert, request, SubscriptionAPI, USER_PLACEHOLDER_IMAGE } from "@pagser/common";
import { Loading } from "@pagser/reusable";

interface ISubscription {
  id: string;
  name: string;
  username: string;
  headline: string | null;
  photo_url: string | null;
}

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      document.title = "Subscriptions | Pagser";

      setLoading(true);
      const response = await request.get<SubscriptionAPI.FetchSubscriptionsResponse>(`/subscriptions`, {
        auth: true,
      });

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
          key={item.id}
          name={item.name}
          username={item.username}
          headline={item.headline || ""}
          image={item.photo_url || USER_PLACEHOLDER_IMAGE}
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
