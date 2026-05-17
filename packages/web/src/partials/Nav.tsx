import React, { useState, useEffect } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const LIBRARY_PATHS = ["/home", "/feed/", "/u/", "/collection/"];

function Nav() {
  const isMobile = window.innerWidth <= 700;
  const isLibraryPage = LIBRARY_PATHS.some((p) => window.location.pathname.startsWith(p));
  const [sidenavOpen, setSidenavOpen] = useState(!isMobile && isLibraryPage);

  useEffect(() => {
    const onNotFound = () => setSidenavOpen(false);
    window.addEventListener("pagser:notfound", onNotFound);
    return () => window.removeEventListener("pagser:notfound", onNotFound);
  }, []);

  return (
    <>
      <TopNav onHamburgerClick={() => setSidenavOpen((o) => !o)} />
      <SideNav open={sidenavOpen} />
      <div id="modal-root" />
    </>
  );
}

export default Nav;
