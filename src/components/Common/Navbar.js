import { Link } from "react-router-dom";
import "../../styles/Navbar/navbar.css"

function Navbar() {
  return (
    <div className="navbar" style={{display:"flex",justifyContent:"space-between"}}>
      <div>Portfolio</div>

      <div className="links" style={{display:"flex",justifyContent:"space-evenly",width:"30%"}}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
