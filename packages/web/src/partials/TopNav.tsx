import React, { useState, useEffect, useRef } from "react";
import { request, USER_PLACEHOLDER_IMAGE } from "@pagser/common";

interface User {
  id: number;
  photo_url: string | null;
}

interface Props {
  onHamburgerClick: () => void;
}

function TopNav({ onHamburgerClick }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const notifDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRefSm = useRef<HTMLDivElement>(null);
  const notifDropdownRefSm = useRef<HTMLDivElement>(null);

  const hideCreatePage = window.location.pathname.includes("/new-page");

  useEffect(() => {
    request.get<User | null>("/me")
      .then((data) => setUser(data))
      .catch(() => {})
      .finally(() => setAuthLoading(false));
  }, []);


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const outsideUser =
        (!userDropdownRef.current || !userDropdownRef.current.contains(e.target as Node)) &&
        (!userDropdownRefSm.current || !userDropdownRefSm.current.contains(e.target as Node));
      if (outsideUser) setUserDropdownOpen(false);

      const outsideNotif =
        (!notifDropdownRef.current || !notifDropdownRef.current.contains(e.target as Node)) &&
        (!notifDropdownRefSm.current || !notifDropdownRefSm.current.contains(e.target as Node));
      if (outsideNotif) setNotifDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function applyTheme(next: "light" | "dark") {
    const existing = document.querySelector("link[href='/dark-style.css']");
    if (next === "dark" && !existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/dark-style.css";
      document.head.appendChild(link);
    } else if (next === "light" && existing) {
      document.head.removeChild(existing);
    }
    localStorage.setItem("theme", next);
    setTheme(next);
    window.dispatchEvent(new CustomEvent("pagser:themechange", { detail: next }));
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.href = "/";
  }

  const photoUrl = user?.photo_url || USER_PLACEHOLDER_IMAGE;
  const logoSrc = theme === "dark" ? "/images/pagser-logo-light.svg" : "/images/pagser-logo.svg";

  return (
    <>
      {/* Desktop nav */}
      <nav className="navigation navigation-md">
        <a
          href="javascript:void(0)"
          onClick={onHamburgerClick}
          className="navigation__link navigation__link--icon"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
        <a href="/" className="navigation__logo">
          <img id="pagserLogoMd" src={logoSrc} alt="Pagser logo" />
          Pagser
        </a>

        <div className="navigation__right">
          {!hideCreatePage && (
            <a href="/new-page/initial-step" className="navigation__link navigation-btn">
              Create a Page
            </a>
          )}

          {!authLoading && (user ? (
            <>
              <div
                ref={notifDropdownRef}
                className={`nav-dropdown nav-dropdown-notification ${notifDropdownOpen ? "dropdown--open" : "dropdown--close"}`}
              >
                <div className="nav-dropdown__button" onClick={() => { setNotifDropdownOpen((o) => !o); setUserDropdownOpen(false); }}>
                  <a href="javascript:void(0);">
                    <i className="fa fa-bell-o" aria-hidden="true" />
                  </a>
                </div>
                <div className="nav-dropdown__content">
                  You don't have any notifications yet.
                </div>
              </div>

              <div
                ref={userDropdownRef}
                className={`nav-dropdown ${userDropdownOpen ? "dropdown--open" : "dropdown--close"}`}
              >
                <div className="nav-dropdown__button" onClick={() => { setUserDropdownOpen((o) => !o); setNotifDropdownOpen(false); }}>
                  <a href="javascript:void(0);">
                    <img
                      className="js--user-image"
                      src={photoUrl}
                      onError={(e) => { (e.target as HTMLImageElement).src = USER_PLACEHOLDER_IMAGE; }}
                    />
                  </a>
                </div>
                <div className="nav-dropdown__content">
                  <a href="/profile"><i className="fa fa-user" /> Profile</a>
                  <a href="/settings"><i className="fa fa-cogs" /> Setting</a>
                  <a href="javascript:void(0);" onClick={handleLogout}>
                    <i className="fa fa-sign-out" /> Logout
                  </a>
                  <span className="switch-theme__text">Theme:</span>
                  <div className="switch-theme">
                    <span className="switch-theme__light" />
                    <label className="switch">
                      <input
                        type="checkbox"
                        className="js--themeSwitch"
                        checked={theme === "dark"}
                        onChange={(e) => applyTheme(e.target.checked ? "dark" : "light")}
                      />
                      <span className="slider round" />
                    </label>
                    <span className="switch-theme__dark" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <a href="/login" className="navigation__link" id="js--login-md">Login</a>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="navigation navigation-sm">
        <a
          href="javascript:void(0)"
          onClick={onHamburgerClick}
          className="navigation__link navigation__link--icon"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </a>
        <a href="/" className="navigation__logo">
          <img id="pagserLogoSm" src={logoSrc} alt="Pagser logo" />
          Pagser
        </a>
        <div className="navigation__right">
          {!hideCreatePage && (
            <a href="/new-page/initial-step" className="navigation__right-link navigation-btn">
              <i className="fa fa-pencil-square-o" />
            </a>
          )}

          {!authLoading && (user ? (
            <>
              <div
                ref={notifDropdownRefSm}
                className={`nav-dropdown nav-dropdown-notification ${notifDropdownOpen ? "dropdown--open" : "dropdown--close"}`}
              >
                <div className="nav-dropdown__button" onClick={() => { setNotifDropdownOpen((o) => !o); setUserDropdownOpen(false); }}>
                  <a href="javascript:void(0);">
                    <i className="fa fa-bell-o" aria-hidden="true" />
                  </a>
                </div>
                <div className="nav-dropdown__content">
                  You don't have any notifications yet.
                </div>
              </div>

              <div
                ref={userDropdownRefSm}
                className={`nav-dropdown ${userDropdownOpen ? "dropdown--open" : "dropdown--close"}`}
              >
                <div className="nav-dropdown__button" onClick={() => { setUserDropdownOpen((o) => !o); setNotifDropdownOpen(false); }}>
                  <a href="javascript:void(0);">
                    <img
                      className="js--user-image"
                      src={photoUrl}
                      onError={(e) => { (e.target as HTMLImageElement).src = USER_PLACEHOLDER_IMAGE; }}
                    />
                  </a>
                </div>
                <div className="nav-dropdown__content">
                  <a href="/profile"><i className="fa fa-user" /> Profile</a>
                  <a href="/settings"><i className="fa fa-cogs" /> Setting</a>
                  <a href="javascript:void(0);" onClick={handleLogout}>
                    <i className="fa fa-sign-out" /> Logout
                  </a>
                  <span className="switch-theme__text">Theme:</span>
                  <div className="switch-theme">
                    <span className="switch-theme__light" />
                    <label className="switch">
                      <input
                        type="checkbox"
                        className="js--themeSwitch"
                        checked={theme === "dark"}
                        onChange={(e) => applyTheme(e.target.checked ? "dark" : "light")}
                      />
                      <span className="slider round" />
                    </label>
                    <span className="switch-theme__dark" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <a href="/login" className="navigation__right-link" id="js--login-sm">Login</a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default TopNav;
