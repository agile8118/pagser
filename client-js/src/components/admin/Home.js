import React, { Component } from "react";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="box__to-action">
          <h4 className="heading-fourth">
            Create a page for whomever you want
          </h4>
          <p>
            In pagher you can create a page for anyone with any content you
            desire. This is great if you want to share a content with the whole
            world, just very specific persons or even yourself. Just click on
            the button below to discover this feature more.
          </p>
          <a
            className="btn-normal btn-normal-link"
            href="/new-page/initial-step"
          >
            Create a page
          </a>
        </div>

        <div className="recent-comments">
          <h5 className="heading-fifth">Recent comments on your pages</h5>
          <p>
            This part is coming soon, where you can keep track of the comments
            of your pages.
          </p>
        </div>

        <div className="recent-likes">
          <h5 className="heading-fifth">Recent persons who like your pages</h5>
          <p>
            This part is coming soon, where you can see the recents users who
            like your pages.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
