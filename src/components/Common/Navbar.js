import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../../styles/Navbar/navbar.css";

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
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
            <Link to="/" className="link-style">Home</Link>
            <Link to="/projects" className="link-style">Projects</Link>
            <Link to="/about" className="link-style">About</Link>
            <Link to="/contact" className="link-style">Contact</Link>
          </div>
        )}
         {/* HAMBURGER ICON (MOBILE ONLY) */}
        {isMobile && (
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        )}

        {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
      </div>
    </>
  );
}

export default Navbar;
