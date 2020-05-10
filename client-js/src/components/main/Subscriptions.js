import React, { Component } from "react";
import axios from "axios";
import SubscriptionThumbnail from "../partials/SubscriptionThumbnail";
import { loadingModal, showSnackBar } from "../../lib/util";

class Subscriptions extends Component {
  state = { subscriptions: [] };

  async componentDidMount() {
    document.title = "Subscriptions | Pagher";

    loadingModal("Loading...");
    try {
      const { data } = await axios.get(`/api/subscriptions`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      this.setState({
        subscriptions: data.subs,
      });

      loadingModal();
    } catch ({ response }) {
      showSnackBar("Sorry an unkown error occurred.", "error");
    }
  }

  renderSubsccriptions() {
    if (this.state.subscriptions.length === 0)
      return <p className="a-13">You haven't subscribed to any author yet.</p>;

    return this.state.subscriptions.map((item) => {
      return (
        <SubscriptionThumbnail
          key={item._id}
          name={item.author.name}
          username={item.author.username}
          headline={item.author.headline}
          image={item.author.photo.secure_url}
        />
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="header-nav">
          <h3 className="heading-tertiary">Your Subscriptions:</h3>
        </div>
        <div className="row">{this.renderSubsccriptions()}</div>
      </div>
    );
  }
}

export default Subscriptions;
