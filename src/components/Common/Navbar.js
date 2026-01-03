import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css";

function Navbar() {
  const linkStyle = {
    fontWeight: "600",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-heading1">
          <span className="port">Port</span>

          <span className="folio">folio</span>
        </div>
        <div
          className="links"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30%",
            padding: "1.3rem",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
