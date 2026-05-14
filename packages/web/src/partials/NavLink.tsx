import React from "react";

const LIBRARY_PATHS = ["/home", "/feed/", "/u/", "/collection/"];
const onLibraryPage = () =>
  LIBRARY_PATHS.some((p) => window.location.pathname.startsWith(p));

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onLibraryPage()) {
      e.preventDefault();
      window.history.pushState(null, "", href);
    }
  };
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default NavLink;
