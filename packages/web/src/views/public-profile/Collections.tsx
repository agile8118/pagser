import React, { useState, useEffect } from "react";
import { request } from "@pagser/common";
import { Loading } from "@pagser/reusable";
import Collection from "../../partials/CollectionThumbnail";

const Collections = () => {
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  // Send a request to fetch the list of collections
  const fetchCollections = async () => {
    const response = (await request.get(
      `/collections/shared/${window.location.pathname.split("/")[2]}`,
      {
        auth: true,
      }
    )) as any;

    setCollections(response.collections);
  };

  // Render list of collections
  const renderCollections = () => {
    if (collections === null)
      return (
        <div className="center-content">
          <div className="a-14">User hasn't shared any collection.</div>
        </div>
      );

    if (collections.length === 0)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return collections.map((cl) => {
      return (
        <div
          key={cl._id}
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
        >
          <Collection
            id={cl._id}
            name={cl.name}
            img={cl.photo.secure_url}
            desc={cl.description}
            pageNum={cl.pages.length}
            author={cl.user.name}
            refresh={true}
            target="_blank"
          />
        </div>
      );
    });
  };

  return (
    <div className="pb-main">
      <div className="row">{renderCollections()}</div>
    </div>
  );
};

export default Collections;
