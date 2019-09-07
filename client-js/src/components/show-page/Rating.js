import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { showSnackBar, loadingModal } from "../../lib/util";
import { ROOT_URL } from "../../lib/keys";

import * as actions from "../../redux/private-page/actions";

class Rating extends Component {
  onDislikeButtonClick() {
    loadingModal("Loading...");
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(`/api/pages/${this.props.id}/rate`, { rate: "dislike" }, config)
      .then(response => {
        loadingModal();
        this.props.ratePage(response.data);
      })
      .catch(error => {
        loadingModal();
        if (error.response.status === 401) {
          showSnackBar("Please login to rate a page.");
        } else {
          showSnackBar("An unknown error occurred.");
        }
      });
  }

  onLikeButtonClick() {
    loadingModal("Loading...");
    const config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .patch(`/api/pages/${this.props.id}/rate`, { rate: "like" }, config)
      .then(response => {
        loadingModal();
        this.props.ratePage(response.data);
      })
      .catch(error => {
        loadingModal();
        if (error.response.status === 401) {
          showSnackBar("Please login to rate a page.");
        } else {
          showSnackBar("An unknown error occurred.");
        }
      });
  }

  render() {
    if (this.props.isPending === false) {
      return (
        <div>
          <div className="page__rating">
            <p>How would you rate this page?</p>
            <div>
              <span>{this.props.rating.likes}</span>
              <button
                className="btn-icon no-transform"
                onClick={() => {
                  this.onLikeButtonClick.apply(this);
                }}
              >
                <i className="fa fa-thumbs-up" />
              </button>
            </div>
            <div>
              <span>{this.props.rating.dislikes}</span>
              <button
                className="btn-icon no-transform"
                onClick={() => {
                  this.onDislikeButtonClick.apply(this);
                }}
              >
                <i className="fa fa-thumbs-down" />
              </button>
            </div>
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
    id: state.fetchPageData.id,
    rating: state.fetchPageData.rating,
    isPending: state.fetchPageData.isPending
  };
};

export default connect(
  mapStateToProps,
  actions
)(Rating);
