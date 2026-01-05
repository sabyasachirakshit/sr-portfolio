import "../../styles/Footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-about">
          <h2 className="footer-name">Sabyasachi</h2>
          <p className="footer-desc">
            Creative Developer & Designer passionate about building beautiful
            digital experiences.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
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
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
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
                  .getElementById("contact")
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
            <span className="icon">🐙</span>
            <span className="icon">in</span>
            <span className="icon">✉</span>
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
