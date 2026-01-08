import About from "../../containers/About";
import Contact from "../../containers/Contact";
import Projects from "../../containers/Projects";
import "../../styles/Home/home.css";

function Hero() {
  return (
    <div className="hero" id="home" style={{ marginTop: "5%" }}>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
        Welcome to my portfolio
      </span>
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
