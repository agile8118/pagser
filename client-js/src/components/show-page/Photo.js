import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoUpload from "./PhotoUpload";

import * as actions from "../../redux/show-page/actions";

class Photo extends Component {
  render() {
    if (this.props.isPending === false) {
      if (this.props.status === "owner") {
        return <PhotoUpload photo={this.props.photo} pageId={this.props.id} />;
      } else if (
        this.props.status === "spectator" ||
        this.props.status === "authenticated"
      ) {
        if (this.props.photo.secure_url.length > 0) {
          return (
            <div className="page__photo" id="js--page-photo">
              <img
                className="margin-top-1"
                src={this.props.photo.secure_url}
                alt="Page featured image"
                onError={e => {
                  document.querySelector("#js--page-photo").innerHTML = "";
                  document
                    .querySelector("#js--page-photo")
                    .classList.add("margin-top-2");
                }}
              />
            </div>
          );
        } else {
          return <div className="form__group" />;
        }
      } else {
        return <div />;
      }
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    id: state.pageData.id,
    photo: state.pageData.photo,
    status: state.pageData.status,
    isPending: state.pageData.isPending
  };
};

export default connect(mapStateToProps, actions)(Photo);
