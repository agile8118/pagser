import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    document.title = "Dashboard | Pagser";
  }, []);

  return (
    <div className="row">
      <div className="header-nav margin-top-2">
        <h3 className="heading-tertiary center-content italic">
          The dashboard section is still under development.
        </h3>
      </div>
    </div>
  );
};
