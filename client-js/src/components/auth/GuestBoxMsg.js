import React from "react";

const GuestBoxMsg = () => {
  return (
    <div className="guest-box-msg">
      <h4 className="heading-fourth">Create a page as a guest</h4>
      <p className="small-copy">
        You can create a private page as a guest without needing to login. A
        couple of things to keep in mind though:
      </p>
      <ul>
        <li>No one can like, dislike or comment on the page.</li>
        <li>
          You cannot <strong>edit, delete or manage</strong> the page after you
          created it.
        </li>
        <li>
          The page will get <strong>removed</strong> if it gets no views after 1
          month.
        </li>
      </ul>
      <br />
      <a href="/new-page/guest" className="btn-round btn-round-full">
        Start
      </a>
    </div>
  );
};

export default GuestBoxMsg;
