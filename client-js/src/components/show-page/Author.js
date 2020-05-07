import React, { Component } from "react";
import { connect } from "react-redux";
import { ConfirmModal } from "../partials/Modals";
import { loadingModal } from "../../lib/util";

import { subscribe } from "actions";

class Author extends Component {
  state = {
    unSubConfMdl: false,
  };

  onSubscribeClicked = () => {
    if (this.props.subscribed) {
      this.setState({ unSubConfMdl: true });
    } else {
      this.props.subscribe(this.props.author._id);
    }
  };

  render() {
    if (this.props.isPending) return <div />;

    let userBio = this.props.author.biography.length
      ? this.props.author.biography
      : "This user has not added a biography.";
    let bioClassName = this.props.author.biography.length
      ? "page__author__bio"
      : "page__author__bio italic";

    let subBtn = this.props.subscribed ? (
      <button
        className="btn btn-default btn-round"
        onClick={this.onSubscribeClicked}
      >
        Subscribed
      </button>
    ) : (
      <button
        className="btn btn-blue btn-round"
        onClick={this.onSubscribeClicked}
      >
        Subscribe
      </button>
    );
    if (this.props.status === "owner") subBtn = "";

    return (
      <React.Fragment>
        <ConfirmModal
          header={`Unsubscribe from ${this.props.author.username}?`}
          message="Are you sure that you want to unsubscribe from this author?"
          open={this.state.unSubConfMdl}
          onConfirm={() => {
            this.setState({ unSubConfMdl: false });
            loadingModal("Unsubscribing...");
            this.props.subscribe(this.props.author._id);
            loadingModal();
          }}
          onCancel={() => {
            this.setState({ unSubConfMdl: false });
          }}
          btnName="Unsubscribe"
        />
        <div className="page__author">
          <div className="page__author__head">
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
              <div>{this.props.author.subscribersNum} Subscribers</div>
            </div>
            <div className="page__author__sub">{subBtn}</div>
          </div>
          <p className={bioClassName}>{userBio}</p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ pageData }) => {
  return {
    isPending: pageData.isPending,
    author: pageData.author,
    subscribed: pageData.subscribed,
    status: pageData.status,
  };
};

export default connect(
  mapStateToProps,
  { subscribe }
)(Author);
