import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../../partials/PageThumbnail";
import Dropdown from "../../partials/Dropdown";
import Header from "./Header";

import { fetchPages } from "../../../redux/main/actions";

class Published extends Component {
  componentDidMount() {
    this.props.fetchPages("user-pages/published", this.props.filterBy);
  }

  renderDropdowns = () => {
    if (this.props.filterBy === "all" && this.props.pages.length === 0)
      return "";
    return (
      <Dropdown
        num="1"
        select={this.props.filterBy}
        onChange={(name) => {
          this.props.fetchPages("user-pages/published", name);
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
            className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
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
        return (
          <p className="a-13">You haven't published any public page yet.</p>
        );
      }

      if (this.props.filterBy === "private") {
        return (
          <p className="a-13">You haven't published any private page yet. </p>
        );
      }
      return <p className="a-13">You haven't published any page yet.</p>;
    }
  };

  render() {
    return (
      <div className="row">
        <Header />
        <div className="header-nav">
          <h3 className="heading-tertiary">Your Published Pages:</h3>
          <div className="header-nav__actions">{this.renderDropdowns()}</div>
        </div>
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    filterBy: state.filterBy,
  };
};

export default connect(
  mapStateToProps,
  { fetchPages }
)(Published);
