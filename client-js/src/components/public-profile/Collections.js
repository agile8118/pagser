import React, { Component } from "react";
import axios from "axios";
import Loading from "../partials/Loading";
import Collection from "../partials/CollectionThumbnail.js";

class Collections extends Component {
  state = {
    collections: [],
  };

  // Send a request to fetch the list of collections
  fetchCollections = async () => {
    const { data } = await axios.get(
      `/api/collections/shared/${window.location.pathname.split("/")[2]}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    this.setState({
      collections: data.collections,
    });
  };

  componentDidMount() {
    this.fetchCollections();
  }

  // Render list of collections
  renderCollections() {
    if (this.state.collections === null)
      return (
        <div className="center-content">
          <div className="a-14">User hasn't shared any collection.</div>
        </div>
      );

    if (this.state.collections.length === 0)
      return (
        <div className="center-content">
          <Loading />
        </div>
      );

    return this.state.collections.map((cl) => {
      return (
        <div
          key={cl._id}
          className="col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1"
        >
          <Collection
            id={cl._id}
            name={cl.name}
            img={cl.photo.secure_url}
            desc={cl.description}
            pageNum={cl.pages.length}
            author={cl.user.name}
            refresh={true}
            target="_blank"
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pb-main">
        <div className="row">{this.renderCollections()}</div>
      </div>
    );
  }
}

export default Collections;
