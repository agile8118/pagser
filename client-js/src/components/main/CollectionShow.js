import React, { Component } from "react";

class CollectionShow extends Component {
  state = { confModal: false };

  componentDidMount() {
    // this.props.fetchPages("history", this.props.filterBy);
  }

  componentWillUnmount() {
    // this.props.changeStatus("normal");
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-1-of-2">
            <img src="/images/collection-placeholder.svg" />
          </div>
          <div className="col-lg-1-of-2">
            <div className="collection-show">
              <h2 className="collection-show__name">Collection Name</h2>
              <div className="collection-show__pages-num">34 Pages</div>
              <div className="collection-show__desc">
                Collection description is here and there lorem
              </div>
              <div className="collection-show__creator">
                Created by Joseph H.
              </div>
              <button className="btn btn-blue-o">
                Save to Library{" "}
                <i className="fa fa-plus-square" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CollectionShow;
