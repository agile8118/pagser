import React, { Component } from "react";
import { connect } from "react-redux";
import PageThumbnail from "../partials/PageThumbnail";

import { fetchReadLaterPages } from "../../redux/main/actions";

class ReadLater extends Component {
  componentDidMount() {
    this.props.fetchReadLaterPages();
  }

  renderList = () => {
    return this.props.readLaterList.map((item) => {
      return (
        <div
          className="col-lg-1-of-5 col-md-1-of-4 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
          key={item._id}
        >
          <PageThumbnail
            className="page-thumbnail"
            briefDes={item.page.contents.briefDes}
            title={item.page.contents.title}
            image={item.page.cropedPhoto.secure_url}
            target="_blank"
            url={item.page.url}
            type={item.page.type}
            authorUsername={item.page.author.username}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <h3 className="heading-tertiary">Your Reading List:</h3>
        <button className="push-right">Sort By</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    readLaterList: state.readLaters,
  };
};

export default connect(
  mapStateToProps,
  { fetchReadLaterPages }
)(ReadLater);
