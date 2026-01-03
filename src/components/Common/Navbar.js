import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../../styles/Navbar/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-heading1">
          <span className="port">Port</span>
          <span className="folio">folio</span>
        </div>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <div className="links">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="link-style">
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* MOBILE HAMBURGER / CLOSE ICON */}
        {isMobile && (
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-link"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
