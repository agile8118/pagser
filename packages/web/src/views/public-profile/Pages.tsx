import React, { useEffect } from "react";
import PageThumbnail from "../../partials/PageThumbnail";
import { Loading } from "@pagser/reusable";

import { fetchPages, selectPages, selectLoading } from "../library/pagesSlice";
import { useDispatch, useSelector } from "react-redux";

const Pages = () => {
  const loading = useSelector(selectLoading);
  const pages = useSelector(selectPages);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPages("PB-pages"));
  }, []);

  const renderPages = () => {
    if (loading)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    if (pages === null || pages.length === 0)
      return (
        <div className="center-content">
          <div className="a-14">This user doesn't have any public pages.</div>
        </div>
      );

    return pages.map((item) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item.id}
        >
          <PageThumbnail
            status="normal"
            id={item.id}
            briefDes={item.contents?.briefDes}
            title={item.contents?.title}
            image={item.photo_url || undefined}
            target="_blank"
            url={item.url}
            type="public"
            label={item.date}
          />
        </div>
      );
    });
  };

  return (
    <div className="pb-main">
      <div className="row">{renderPages()}</div>
    </div>
  );
};

export default Pages;
