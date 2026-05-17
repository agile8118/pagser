import React, { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("pagser:notfound"));
  }, []);

  return (
    <div className="not-found">
      <div className="not-found__number">404</div>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__subtitle">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-blue btn-big btn-round">
        <i className="fa fa-home" aria-hidden="true" /> Go Home
      </a>
    </div>
  );
}

export default NotFound;