/**
 @TODO this file will be in use once we wanted to show comments on user pages
 in one place 
**/

import React, { Component } from "react";

class Comments extends Component {
  state = { comments: [] };

  componentDidMount() {}

  renderComments() {
    if (this.state.comments.length === 0)
      return (
        <p className="a-13">There are no unread comments on your pages.</p>
      );

    return <div />;
  }

  render() {
    return (
      <div className="row">
        <div className="header-nav">
          <h3 className="heading-tertiary a-16">
            <button className="btn btn-default btn-sm">Unread</button> comments
            on{" "}
            <button className="btn btn-default btn-sm">All your pages</button>:
          </h3>
          <div className="header-nav__actions" />
        </div>
        <div className="row">{this.renderComments()}</div>
      </div>
    );
  }
}

export default Comments;
