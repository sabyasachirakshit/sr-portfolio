import About from "../../containers/About";
import "../../styles/Home/home.css";
import { isMobile } from "react-device-detect";
import cvPdf from "../../media/SabyasachiRakshit_CV.pdf";
import { notification } from "antd";
import pic1 from "../../media/pic1.jpg";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import SkillExpertise from "../../containers/SkillExpertise";

function Hero() {
  const [api, contextHolder] = notification.useNotification();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "Sabyasachi_Rakshit_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    api.success({
      message: "CV downloaded",
      description: "Please check your Downloads folder.",
      placement: "bottomRight",
    });
  };

  return (
    <>
      {contextHolder}
      <div
        className="hero"
        id="home"
        style={!isMobile ? { marginTop: "5%" } : { marginTop: "12%" }}
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

        <div className="hero-buttons" style={{ marginBottom: "2rem" }}>
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

          <button className="btn secondary" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
        <div
          className="my-social-links"
          style={{ display: "flex", gap: "18px", marginBottom: "2rem" }}
        >
          <div className="git">
            <a
              href="https://github.com/sabyasachirakshit"
              target="_blank"
              rel="noopener noreferrer"
              className="git"
              style={{ color: "black" }}
              aria-label="GitHub"
            >
              <GithubOutlined style={{ fontSize: 30 }} />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/sabyasachi-rakshit/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
              aria-label="LinkedIn"
            >
              <LinkedinOutlined style={{ fontSize: 30 }} />
            </a>
          </div>
          <div className="mail">
            <a
              href="sabyasachirakshitacs19@gmail.com"
              className="mail"
              style={{ color: "black" }}
              aria-label="Email"
            >
              <MailOutlined style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>

        <img src={pic1} alt="pic1" style={{ borderRadius: 20 }} />

        <About />
        <SkillExpertise />
      </div>
    </>
  );
}

export default Hero;
