import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css"

function Navbar() {
  const linkStyle = {
    fontWeight: "600",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer"
  };
  return (
    <>
    <div className="navbar">
      <div
        className="navbar-heading1"
        style={{
          padding: "1rem",
          fontSize: 24,
          marginLeft: "1rem",
          color: "transparent",
          fontWeight: "700",
          color: "#4f46e5",
          letterSpacing: "0.5px",
          display: "inline-block"
        }}
      >
        <span
          style={{
            background: "linear-gradient(90deg, #4f46e5, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Port
        </span>

        <span
          style={{
            background: "linear-gradient(90deg, #6366f1, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          folio
        </span>
      </div>
      <div className="links" style={{ display: "flex", justifyContent: "space-evenly", width: "30%", padding: "1.3rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </div>
    </>
    
  );
}

export default Navbar;
