import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

interface Props {
  open: boolean;
}

function SideNav({ open }: Props) {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const onNavigate = () => {
      setPathname(window.location.pathname);
      setNotFound(false);
    };
    const onNotFound = () => setNotFound(true);
    window.addEventListener("popstate", onNavigate);
    window.addEventListener("pagser:notfound", onNotFound);
    return () => {
      window.removeEventListener("popstate", onNavigate);
      window.removeEventListener("pagser:notfound", onNotFound);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 700;
    document.body.style.marginLeft = !isMobile && open ? "24rem" : "0";
  }, [open]);

  function cls(...paths: string[]) {
    if (notFound) return "sidenav__link";
    const active = paths.some((p) =>
      p.endsWith("/") ? pathname.startsWith(p) : pathname === p
    );
    return active ? "sidenav__link sidenav__link--active" : "sidenav__link";
  }

  return (
    <div
      className={`sidenav ${open ? "sidenav--open" : "sidenav--close"}`}
      id="js--sidenav"
    >
      <div className="sidenav__section">
        <NavLink href="/home" className={cls("/home")}>
          <i className="fa fa-home" />
          Home
        </NavLink>
        <NavLink href="/feed/subscriptions" className={cls("/feed/subscriptions")}>
          <i className="fa fa-file-text" />
          Subscriptions
        </NavLink>
        <NavLink href="/feed/history/pages" className={cls("/feed/history/pages", "/feed/history/comments")}>
          <i className="fa fa-history" />
          History
        </NavLink>
        <NavLink href="/feed/read-later" className={cls("/feed/read-later")}>
          <i className="fa fa-bookmark" />
          Read Later
        </NavLink>
        <NavLink href="/feed/liked-pages" className={cls("/feed/liked-pages")}>
          <i className="fa fa-thumbs-up" />
          Liked Pages
        </NavLink>
        <NavLink href="/u/collections" className={cls("/u/collections", "/collection/")}>
          <i className="fa fa-th-large" />
          Collections
        </NavLink>
      </div>
      <div className="sidenav__section">
        <NavLink href="/u/dashboard" className={cls("/u/dashboard")}>
          <i className="fa fa-dashboard" />
          Dashboard
        </NavLink>
        <NavLink href="/u/analytics" className={cls("/u/analytics")}>
          <i className="fa fa-line-chart" />
          Analytics
        </NavLink>
        <NavLink href="/u/monetization" className={cls("/u/monetization")}>
          <i className="fa fa-dollar" />
          Monetization
        </NavLink>
        <NavLink href="/u/pages" className={cls("/u/pages", "/u/pages/published", "/u/pages/draft")}>
          <i className="fa fa-envelope-open" />
          Your Pages
        </NavLink>
      </div>
      <div className="sidenav__footer">
        <ul>
          <li><a href="javascript:void(0);">Support</a></li>
          <li><a href="javascript:void(0);">Contact us</a></li>
          <li><a href="/terms-of-use">Terms of Use</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
        <span>&copy; 2026 Cododev Technology Inc.</span>
      </div>
    </div>
  );
}

export default SideNav;