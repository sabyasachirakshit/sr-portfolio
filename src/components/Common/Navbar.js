import { useState } from "react";
import { isMobile } from "react-device-detect";
import "../../styles/Navbar/navbar.css";
import {
  CloseOutlined,
  MenuOutlined
} from "@ant-design/icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
   const NAV_LINKS = [
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

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
              <button
                key={link.id}
                className="link-style"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* MOBILE HAMBURGER / CLOSE ICON */}
        {isMobile && (
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="mobile-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
