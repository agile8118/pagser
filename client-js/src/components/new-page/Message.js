import React, { Component } from "react";
import { ROOT_URL } from "../../lib/keys";
import { getParameterByName } from "../../lib/util";

class Message extends Component {
  render() {
    const status = getParameterByName("status", window.location.href);
    const type = getParameterByName("type", window.location.href);
    const url = getParameterByName("url", window.location.href);
    const id = getParameterByName("id", window.location.href);
    const username = getParameterByName("username", window.location.href);
    if (type === "public" && status === "success") {
      return (
        <div>
          <div className="middle-box middle-box--success margin-bottom-1">
            You have successfully published your public page, you can view that
            from the link below. Other users can like, dislike or comment on
            your page if you haven not disabled them, so make sure that you keep
            track of them in your admin area. Also you can <strong>edit</strong>,{" "}
            <strong>set a feature image</strong> or{" "}
            <strong>add attach files</strong> for your page in view section of
            your page.
          </div>
          <div className="center-content middle-box--link">
            <a className="btn-link" href={`/public-pages/${url}`}>
              View your public page
            </a>
          </div>
        </div>
      );
    }
    if (type === "public" && status === "error") {
      return (
        <div>
          <div className="middle-box middle-box--error margin-bottom-1">
            Sorry something went wrong. Please create your page from scratch via
            the link below.
          </div>
          <div className="center-content middle-box--link">
            <a className="btn-link" href={`/new-page/initial-step`}>
              Create a new page
            </a>
          </div>
        </div>
      );
    }
    if (type === "specific" && status === "success") {
      return (
        <div>
          <div className="middle-box middle-box--success margin-bottom-1">
            You have successfully published your specific page, you can view
            that from the link below. To share this page for the persons you
            want, you should share the link of your page (link below). Also, you
            can <strong>edit</strong>, <strong>set a featured image</strong> or{" "}
            <strong>add attach files</strong> for your page in view section of
            your page.
          </div>
          <div className="center-content middle-box--link">
            <a className="btn-link" href={`/${username}/${url}`}>
              View your specific page
            </a>
          </div>
        </div>
      );
    }
    if (type === "specific" && status === "error") {
      return (
        <div>
          <div className="middle-box middle-box--error margin-bottom-1">
            Sorry something went wrong. Please create your page from scratch via
            the link below.
          </div>
          <div className="center-content middle-box--link">
            <a className="btn-link" href={`/new-page/initial-step`}>
              Create a new page
            </a>
          </div>
        </div>
      );
    }

    if (status === "error-contents") {
      return (
        <div>
          <div className="middle-box middle-box--error margin-bottom-1">
            There was something wrong with the contents you have supplied,
            please review your page contents and make sure that everything is
            alright.
          </div>
          <div className="center-content middle-box--link">
            <a className="btn-link" href={`/new-page/initial-step?id=${id}`}>
              Review your page
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Message;
