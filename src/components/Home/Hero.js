import "../../styles/Home/home.css";

function Hero() {
  return (
    <div className="hero">
      <h1>
        Hi, I’m <span>Sabyasachi</span>
      </h1>

      <p>
        React Developer | UI Engineer | Problem Solver
      </p>

      <div className="hero-buttons">
        <button
          className="btn primary"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>

        <button
          className="btn secondary"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>

      <div id="projects" className="projects">
        <h2>Projects</h2>
      </div>
      <hr />

      <div id="about" className="about">
        <h2>About</h2>
      </div>
      <hr />

      <div id="contact" className="contact">
        <h2>Contact</h2>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
