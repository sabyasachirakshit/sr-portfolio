import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Saby.</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
