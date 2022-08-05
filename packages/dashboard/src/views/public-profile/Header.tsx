import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type TSection = "collections" | "home" | "pages";

const Header = () => {
  const username = window.location.pathname.split("/")[2];

  const [section, setSection] = useState<TSection | "">("");

  useEffect(() => {
    setSection(getSection() as TSection);
  }, []);

  // Return the current section based on the url
  const getSection = () => {
    if (window.location.pathname.split("/")[1] === "users") {
      if (!window.location.pathname.split("/")[3]) return "home";
      if (window.location.pathname.split("/")[3] === "collections")
        return "collections";
      if (window.location.pathname.split("/")[3] === "pages") return "pages";
    }
  };

  return (
    <div className="lined-btns-2">
      <Link
        to={`/users/${username}/`}
        className={`btn-lined ${section === "home" ? "btn-lined--active" : ""}`}
        onClick={() => setSection("home")}
      >
        Home
      </Link>
      <Link
        to={`/users/${username}/pages`}
        className={`btn-lined ${
          section === "pages" ? "btn-lined--active" : ""
        }`}
        onClick={() => setSection("pages")}
      >
        Pages
      </Link>
      <Link
        to={`/users/${username}/collections`}
        className={`btn-lined ${
          section === "collections" ? "btn-lined--active" : ""
        }`}
        onClick={() => setSection("collections")}
      >
        Collections
      </Link>
    </div>
  );
};

export default Header;
