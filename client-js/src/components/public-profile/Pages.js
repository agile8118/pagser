import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../partials/PageThumbnail";
import Loading from "../partials/Loading";

import { fetchPages } from "actions";

class Pages extends Component {
  componentDidMount() {
    this.props.fetchPages("PB-pages");
  }

  renderPages() {
    if (this.props.pages === null)
      return <div>This user doesn't have any public page.</div>;

    if (this.props.pages.length === 0)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return this.props.pages.map((item) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item.id}
        >
          <PageThumbnail
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
  }

  render() {
    return (
      <div className="pb-main">
        <div className="row">{this.renderPages()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

export default connect(
  mapStateToProps,
  { fetchPages }
)(Pages);
