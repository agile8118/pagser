import React, { Component } from "react";
import { connect } from "react-redux";
import { ROOT_URL } from "../../lib/keys";

import * as actions from "../../redux/specific-page/actions";

class Author extends Component {
  render() {
    if (this.props.isPending === false) {
      if (this.props.author.biography.length > 0) {
        var userBio = this.props.author.biography;
        var bioClassName = "";
      } else {
        var userBio = "This user has not add any biography.";
        var bioClassName = "italic";
      }
      return (
        <div className={`page__author ${this.props.class}`}>
          <img
            src={this.props.author.photo.secure_url}
            id="user-photo"
            alt="Author image"
            onError={() => {
              document.querySelector("#user-photo").src =
                "/images/users/placeholder.png";
            }}
          />
          <div className="page__author__details">
            <a
              href={`/users/${this.props.author.username}`}
              target="_blank"
              className="black-link"
            >
              {this.props.author.name}
            </a>
            <p className={bioClassName}>{userBio}</p>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    author: state.fetchPageData.author,
    isPending: state.fetchPageData.isPending
  };
};

export default connect(
  mapStateToProps,
  actions
)(Author);
