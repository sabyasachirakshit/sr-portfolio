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
        <a href="/projects" className="btn primary">
          View Projects
        </a>

        <a href="/contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Hero;
