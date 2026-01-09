import { isMobile } from "react-device-detect";
import "../styles/About/contact.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="contact"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <div
        className="first-section"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h1 style={isMobile ? { fontSize: "2rem" } : {}}>Get In Touch</h1>
        <div
          className="hor-line"
          style={
            !isMobile
              ? { height: "5px", width: "9%" }
              : { width: "33%", height: "5px" }
          }
        ></div>
        <div className="overview" style={{ marginTop: "1.5rem" }}>
          Want to hire me or just want to say hello? I'd love to hear from you!
        </div>
      </div>

      <div
        className="second-section"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h2>Let's Connect</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div
        className="contact-items"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.6rem",
          marginTop: "2rem",
        }}
      >
        {/* Email */}
        <div className="contact-item">
          <div className="contact-icon email">
            <MailOutlined />
          </div>
          <div className="contact-text">
            <h4>Email</h4>
            <span>sabyasachirakshitacs19@gmail.com</span>
          </div>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <div className="contact-icon github">
            <GithubOutlined />
          </div>
          <div className="contact-text">
            <h4>GitHub</h4>
            <span>github.com/sabyasachirakshit</span>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <div className="contact-icon linkedin">
            <LinkedinOutlined />
          </div>
          <div className="contact-text">
            <h4>LinkedIn</h4>
            <span>linkedin.com/in/sabyasachi-rakshit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
