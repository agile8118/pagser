import React, { useEffect } from "react";
import PageThumbnail from "../../../partials/PageThumbnail";
import { Dropdown, Loading } from "@pagser/reusable";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFilterBy,
  selectLoading,
  selectPages,
  fetchPages,
  TFilterBy,
} from "../pagesSlice";
const Published = () => {
  const dispatch = useDispatch<any>();
  const loading = useSelector(selectLoading);
  const filterBy = useSelector(selectFilterBy);
  const pages = useSelector(selectPages);

  useEffect(() => {
    document.title = "Published Pages | Pagser";
    dispatch(fetchPages("user-pages/published", filterBy));
  }, []);

  const renderDropdowns = () => {
    if (filterBy === "all" && pages.length === 0) return "";
    return (
      <Dropdown
        num="1"
        select={filterBy}
        onChange={(name) => {
          dispatch(fetchPages("user-pages/published", name as TFilterBy));
        }}
      >
        <div data-role-name="btn-name" data-icon-class="fa fa-filter">
          Filter By
        </div>
        <div data-role-name="item" data-name="all">
          All Pages
        </div>
        <div data-role-name="item" data-name="private">
          Private Pages
        </div>
        <div data-role-name="item" data-name="public">
          Public Pages
        </div>
      </Dropdown>
    );
  };

  const renderList = () => {
    if (pages.length > 0) {
      return pages.map((item) => {
        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={item.id}
          >
            <PageThumbnail
              id={item.id}
              status="normal"
              briefDes={item.contents.briefDes}
              title={item.contents.title}
              image={item.photo?.secure_url}
              target="_blank"
              url={item.url}
              type={item.type}
              authorUsername={item.author?.username}
            />
          </div>
        );
      });
    } else {
      if (filterBy === "public") {
        return (
          <p className="a-13">You haven't published any public page yet.</p>
        );
      }

      if (filterBy === "private") {
        return (
          <p className="a-13">You haven't published any private page yet. </p>
        );
      }
      return <p className="a-13">You haven't published any page yet.</p>;
    }
  };

  return (
    <div className="row">
      <Header />
      <div className="header-nav">
        <h3 className="heading-tertiary">Your Published Pages:</h3>
        {!loading && (
          <div className="header-nav__actions">{renderDropdowns()}</div>
        )}
      </div>
      {loading && (
        <div className="center-content margin-top-1">
          <Loading />
        </div>
      )}
      {!loading && <div className="row">{renderList()}</div>}
    </div>
  );
};

export default Published;
