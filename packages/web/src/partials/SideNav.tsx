import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

interface Props {
  open: boolean;
}

function link(pathname: string, path: string, ...activePaths: string[]) {
  const checks = activePaths.length ? activePaths : [path];
  const active = checks.some((p) => pathname.startsWith(p));
  return active ? "sidenav__link sidenav__link--active" : "sidenav__link";
}

function SideNav({ open }: Props) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onNavigate);
    return () => window.removeEventListener("popstate", onNavigate);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 700;
    document.body.style.marginLeft = !isMobile && open ? "24rem" : "0";
  }, [open]);

  return (
    <div
      className={`sidenav ${open ? "sidenav--open" : "sidenav--close"}`}
      id="js--sidenav"
    >
      <div className="sidenav__section">
        <NavLink href="/home" className={link(pathname,"/home")}>
          <i className="fa fa-home" />
          Home
        </NavLink>
        <NavLink href="/feed/subscriptions" className={link(pathname,"/feed/subscriptions")}>
          <i className="fa fa-file-text" />
          Subscriptions
        </NavLink>
        <NavLink href="/feed/history/pages" className={link(pathname,"/feed/history/")}>
          <i className="fa fa-history" />
          History
        </NavLink>
        <NavLink href="/feed/read-later" className={link(pathname,"/feed/read-later")}>
          <i className="fa fa-bookmark" />
          Read Later
        </NavLink>
        <NavLink href="/feed/liked-pages" className={link(pathname,"/feed/liked-pages")}>
          <i className="fa fa-thumbs-up" />
          Liked Pages
        </NavLink>
        <NavLink href="/u/collections" className={link(pathname,"/u/collections")}>
          <i className="fa fa-th-large" />
          Collections
        </NavLink>
      </div>
      <div className="sidenav__section">
        <NavLink href="/u/dashboard" className={link(pathname,"/u/dashboard")}>
          <i className="fa fa-dashboard" />
          Dashboard
        </NavLink>
        <NavLink href="/u/analytics" className={link(pathname,"/u/analytics")}>
          <i className="fa fa-line-chart" />
          Analytics
        </NavLink>
        <NavLink href="/u/monetization" className={link(pathname,"/u/monetization")}>
          <i className="fa fa-dollar" />
          Monetization
        </NavLink>
        <NavLink href="/u/pages" className={link(pathname,"/u/pages")}>
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
