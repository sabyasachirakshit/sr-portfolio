import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css"

function Navbar() {
  return (
    <div className="navbar" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "white", height: "12vh" }}>
      <div
        className="heading1"
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
        Portfolio
      </div>
      <div className="links" style={{ display: "flex", justifyContent: "space-evenly", width: "30%", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
