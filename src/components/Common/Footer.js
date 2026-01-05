import "../../styles/Footer/footer.css";
import { notification } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const [api, contextHolder] = notification.useNotification();

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("sabyasachirakshitacs19@gmail.com");

    api.success({
      message: "Email copied",
      description: "Email address copied to clipboard.",
      placement: "bottomRight",
    });
  };
  return (
    <footer className="footer">
      {contextHolder}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-about">
          <h2 className="footer-name">Sabyasachi</h2>
          <p className="footer-desc">
            React.js developer with hands-on experience in building responsive
            and component-based user interfaces using modern JavaScript (ES6+).
            Familiar with React hooks, state management, and reusable component
            design, with a focus on clean code and maintainable architecture and
            making responsive web screens using media queries. Comfortable
            working with REST APIs, version control, and modern frontend
            workflows, and continuously improving skills through practical
            implementation and learning.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links" style={{ paddingRight: "7rem" }}>
          <h3>Quick Links</h3>
          <ul>
            <li
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </li>
            
            <li
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="social-icons">
            <a
              href="https://github.com/sabyasachirakshit"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              style={{ color: "white" }}
              aria-label="GitHub"
            >
              <GithubOutlined />
            </a>

            <a
              href="https://www.linkedin.com/in/sabyasachi-rakshit/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
              className="icon"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </a>

            <span
              className="icon"
              style={{ color: "white", cursor: "pointer" }}
              aria-label="Copy Email"
              title="Click to copy email"
              onClick={handleEmailCopy}
            >
              <MailOutlined />
            </span>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © 2026 Sabyasachi. All rights reserved.
      </div>
    </footer>
  );
}
