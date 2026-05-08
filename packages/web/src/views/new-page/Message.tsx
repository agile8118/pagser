import React from "react";
import { util } from "@pagser/common";

const Message = () => {
  const status = util.getParameterByName("status", window.location.href);
  const type = util.getParameterByName("type", window.location.href);
  const url = util.getParameterByName("url", window.location.href);
  const id = util.getParameterByName("id", window.location.href);
  const username = util.getParameterByName("username", window.location.href);

  if (type === "public" && status === "success") {
    return (
      <div>
        <div className="middle-box middle-box--success margin-bottom-1">
          You have successfully published your public page. You can view it
          using the link below. Other users can like, dislike, and comment on
          your page if those features are enabled, and you will receive
          notifications about their activity. You can view all the public and
          private pages you've created in{" "}
          <strong>
            <a className="white-link" href="/u/pages">
              the pages section.
            </a>
          </strong>
        </div>
        <div className="center-content middle-box--link">
          <a className="blue-link" href={`/public-pages/${url}`}>
            View your public page
          </a>
        </div>
      </div>
    );
  }

  if (type === "private" && status === "success") {
    return (
      <div>
        <div className="middle-box middle-box--success margin-bottom-1">
          You have successfully created your private page. You can view it using
          the link below. You can view all the public and private pages you've
          created in{" "}
          <strong>
            <a className="white-link" href="/u/pages">
              the pages section.
            </a>
          </strong>
          To share this page with others, send them the link shown below:
          <div className="middle-box__displayed-link">
            {window.location.host}/{username}/{url}
          </div>
        </div>
        <div className="center-content middle-box--link">
          <a className="blue-link" href={`/${username}/${url}`}>
            View your private page
          </a>
        </div>
      </div>
    );
  }

  if (status === "error-contents") {
    return (
      <div>
        <div className="middle-box middle-box--error margin-bottom-1">
          There was something wrong with the contents you've provided, please
          review your page contents and make sure that everything is OK.
        </div>
        <div className="center-content middle-box--link">
          <a className="blue-link" href={`/new-page/initial-step?id=${id}`}>
            Review your page
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="middle-box middle-box--error margin-bottom-1">
        Sorry, something went wrong on our end. We will look into it as soon as
        possible. In the meantime, please create your page again or view your
        draft pages using the links below. We apologize for the inconvenience.
      </div>
      <div className="center-content middle-box--link">
        <a className="blue-link" href={`/new-page/initial-step`}>
          Create a new page
        </a>
        <br />

        <a className="blue-link" href="/u/pages/draft">
          View your draft pages
        </a>
      </div>
    </div>
  );
};

export default Message;
