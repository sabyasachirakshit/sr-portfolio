import About from "../../containers/About";
import Contact from "../../containers/Contact";
import Projects from "../../containers/Projects";
import "../../styles/Home/home.css";
import { isMobile } from "react-device-detect";

function Hero() {
  return (
    <div
      className="hero"
      id="home"
      style={!isMobile ? { marginTop: "5%" } : { marginTop: "10%" }}
    >
      <div
        className="welcome-tag"
        style={{
          width: "max-content",
          padding: "8px 18px",
          borderRadius: "999px",
          backgroundColor: "#e6f0ff",
        }}
      >
        <span
          style={
            !isMobile
              ? {
                  color: "#2563eb",
                  fontSize: "14px",
                  fontWeight: 500,
                }
              : { color: "#2563eb", fontSize: "7px", fontWeight: 500 }
          }
        >
          Welcome to my portfolio
        </span>
      </div>

      <h1>
        Hi, I’m <span>Sabyasachi Rakshit</span>
      </h1>

      <p>React js Developer</p>

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
