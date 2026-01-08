import About from "../../containers/About";
import Contact from "../../containers/Contact";
import Projects from "../../containers/Projects";
import "../../styles/Home/home.css";
import { isMobile } from "react-device-detect";
import cvPdf from "../../media/SabyasachiRakshit_CV.pdf";

function Hero() {
  return (
    <div
      className="hero"
      id="home"
      style={!isMobile ? { marginTop: "5%" } : { marginTop: "7%" }}
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
          style={{
            color: "#2563eb",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Welcome to my portfolio
        </span>
      </div>

      <h1 style={isMobile ? { fontSize: "23px" } : {}}>
        Hi, I’m <span>Sabyasachi Rakshit</span>
      </h1>

      <p>React js Developer</p>

      <i>
        I design beautiful and responsive web page applications using React JS
      </i>

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
          onClick={() => {
            const link = document.createElement("a");
            link.href = cvPdf;
            link.download = "Sabyasachi_Rakshit_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download CV
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
