import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css";

function Navbar() {
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
          <Link to="/" className="link-style">
            Home
          </Link>
          <Link to="/projects" className="link-style">
            Projects
          </Link>
          <Link to="/about" className="link-style">
            About
          </Link>
          <Link to="/contact" className="link-style">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
