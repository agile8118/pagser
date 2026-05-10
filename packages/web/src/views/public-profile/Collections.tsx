import React, { useState, useEffect } from "react";
import { request, CollectionAPI } from "@pagser/common";
import { Loading } from "@pagser/reusable";
import Collection from "../../partials/CollectionThumbnail";

const Collections = () => {
  const [collections, setCollections] = useState<any[] | null>(null);

  useEffect(() => {
    fetchCollections();
  }, []);

  // Send a request to fetch the list of collections
  const fetchCollections = async () => {
    const response = await request.get<CollectionAPI.FetchSharedResponse>(
      `/collections/shared/${window.location.pathname.split("/")[2]}`,
      {
        auth: true,
      },
    );

    setCollections(response.collections);
  };

  // Render list of collections
  const renderCollections = () => {
    if (collections === null)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    if (collections.length === 0)
      return (
        <div className="center-content">
          <div className="a-14">This user hasn't shared any collections.</div>
        </div>
      );

    return collections.map((cl) => {
      return (
        <Collection
          key={cl.id}
          id={cl.id}
          name={cl.name}
          img={cl.photo?.secure_url || ""}
          desc={cl.description}
          pageNum={cl.pageCount}
          author={cl.user?.username}
          refresh={true}
          target="_blank"
        />
      );
    });
  };

  return (
    <div className="pb-main">
      <div className="row">
        <div className="collection-container">{renderCollections()}</div>
      </div>
    </div>
  );
};

export default Collections;
