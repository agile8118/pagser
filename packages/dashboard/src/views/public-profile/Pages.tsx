import React, { useEffect } from "react";
import PageThumbnail from "../../partials/PageThumbnail";
import { Loading } from "@pagser/reusable";

import { fetchPages, selectPages, selectLoading } from "../main/pagesSlice";
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

    if (pages === null)
      return (
        <div className="center-content">
          <div className="a-14">User doesn't have any public page.</div>
        </div>
      );

    /** @todo: fix the any type */
    return pages.map((item: any) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item.id}
        >
          <PageThumbnail
            status="normal"
            id={item.id}
            briefDes={item.briefDes}
            title={item.title}
            image={item.photo}
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
