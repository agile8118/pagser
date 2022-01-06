import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../partials/PageThumbnail";
import Dropdown from "../partials/Dropdown";

import { fetchPages } from "actions";

class History extends Component {
  componentDidMount() {
    document.title = "Liked Pages | Pagser";
    this.props.fetchPages("liked-pages", this.props.filterBy);
  }

  renderDropdowns = () => {
    if (this.props.filterBy === "all" && this.props.pages.length === 0)
      return "";
    return (
      <Dropdown
        num="1"
        select={this.props.filterBy}
        onChange={(name) => {
          this.props.fetchPages("liked-pages", name, this.props.sortBy);
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

  renderList = () => {
    if (this.props.pages.length > 0) {
      return this.props.pages.map((item) => {
        return (
          <div
            className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
            key={item.id}
          >
            <PageThumbnail
              status="normal"
              briefDes={item.contents.briefDes}
              title={item.contents.title}
              image={item.photo.secure_url}
              target="_blank"
              url={item.url}
              type={item.type}
              authorUsername={item.author.username}
            />
          </div>
        );
      });
    } else {
      if (this.props.filterBy === "public") {
        return <p className="a-13">You haven't liked any public page yet.</p>;
      }

      if (this.props.filterBy === "private") {
        return <p className="a-13">You haven't liked any private page yet. </p>;
      }
      return <p className="a-13">Your haven't liked any page yet.</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="header-nav">
            <h3 className="heading-tertiary">Pages You Have Liked:</h3>
            <div className="header-nav__actions">{this.renderDropdowns()}</div>
          </div>
          <div className="row">{this.renderList()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    filterBy: state.filterBy,
  };
};

export default connect(mapStateToProps, { fetchPages })(History);
