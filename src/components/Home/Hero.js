import About from "../../containers/About";
import Contact from "../../containers/Contact";
import Projects from "../../containers/Projects";
import "../../styles/Home/home.css";

function Hero() {
  return (
    <div className="hero" id="home">
      <h1>
        Hi, I’m <span>Sabyasachi</span>
      </h1>

      <p>React Developer | UI Engineer | Problem Solver</p>

      <div className="hero-buttons">
        <button
          className="btn primary"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>

        <button
          className="btn secondary"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>

      <Projects />
      <hr />

      <About />
      <hr />

      <Contact />
      <hr />
    </div>
  );
}

export default Hero;
