import { isMobile } from "react-device-detect";
import "../styles/About/experience.css";
import { DesktopOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function Experience() {
  return (
    <section id="xp" className="experience">
      {/* HEADER */}
      <div className="experience-header">
        <h1>Experience</h1>
        <div
          className="hor-line"
          style={
            !isMobile
              ? { height: "5px", width: "9%" }
              : { width: "33%", height: "5px" }
          }
        />
      </div>

      {/* EXPERIENCE CARD */}
      <div className="experience-card">
        <div className="exp-top">
          <div className="exp-icon">
            <DesktopOutlined
              style={
                !isMobile
                  ? { fontSize: 28, color: "white" }
                  : {
                      fontSize: 28,
                      width: "45px",
                      color: "white",
                      justifyContent: "center",
                      display: "flex",
                    }
              }
            />
          </div>

          <div className="exp-title">
            <h2>React.js Developer</h2>
            <h3>Pointerz Inc. (San Francisco, California, United States)</h3>
            <a
              style={{ color: "blueviolet", cursor: "pointer" }}
              href="https://www.linkedin.com/company/pointerz-inc/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined
                style={
                  !isMobile ? { fontSize: 28 } : { fontSize: 28, width: "34px" }
                }
              />
            </a>
            <div className="exp-meta">
              <span>Dec 2022 – Dec 2025</span>
              <span>Remote</span>
            </div>
          </div>
        </div>

        {/* ABOUT ROLE */}
        <div className="exp-about">
          <h4 style={{marginBottom:"1.5rem"}}>About the Role</h4>
          <p>
            Worked as a Frontend React.js Developer contributing to the design,
            development, and maintenance of scalable production-grade web
            applications. Collaborated closely with backend and product teams to
            deliver responsive, performant, and user-friendly interfaces.
          </p>
        </div>

        {/* RESPONSIBILITIES */}
        <div className="exp-resp">
          <h4>Key Responsibilities</h4>

          <ul>
            <li>
              Developed scalable React.js applications using component-based
              architecture
            </li>
            <li>
              Integrated RESTful APIs and WebSockets for real-time features
            </li>
            <li>Designed Kanban-style boards with Drag & Drop functionality</li>
            <li>
              Built dashboards and data visualizations using Ant Design and
              Chart.js
            </li>
            <li>Improved performance and usability across multiple modules</li>
            <li>
              Debugged and fixed production issues, preventing critical failures
            </li>
            <li>Ensured fully responsive UI across all screen sizes</li>
          </ul>
        </div>
      </div>

      <section id="projects" className="projects">
        <div
          className="sec2"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "40px" }}>
            <b>Projects & Achievements</b>
          </div>
          <div
            className="hor-line"
            style={
              !isMobile
                ? { height: "5px", width: "9%" }
                : { width: "33%", height: "5px" }
            }
          ></div>
        </div>

        <div className="projects-grid">
          {/* 1 */}
          <div className="project-card">
            <div
              className="project-header"
              style={{ display: "flex", gap: "1rem" }}
            >
              <div className="project-number">1</div>
              <h3 style={{ marginTop: 5, marginBottom: 0 }}>
                Taskforce Management Module
              </h3>
            </div>

            <p>
              Designed and developed a Kanban-style task management module with
              Drag & Drop functionality, enabling teams to organize, track, and
              manage workflows efficiently in a production environment.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>Drag & Drop</span>
              <span>Ant Design</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* 2 */}
          <div className="project-card">
            <div
              className="project-header"
              style={{ display: "flex", gap: "1rem" }}
            >
              <div className="project-number">2</div>
              <h3 style={{ marginTop: 5, marginBottom: 0 }}>
                HR Performance Dashboard
              </h3>
            </div>
            <p>
              Built an interactive HR dashboard to visualize employee
              performance data using charts and tables, providing clear insights
              for performance reviews and decision-making.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>Ant Design</span>
              <span>Chart.js</span>
              <span>Data Visualization</span>
            </div>
          </div>

          {/* 3 */}
          <div className="project-card">
            <div
              className="project-header"
              style={{ display: "flex", gap: "1rem" }}
            >
              <div className="project-number">3</div>
              <h3 style={{ marginTop: 5, marginBottom: 0 }}>
                Employee Rewards System
              </h3>
            </div>
            <p>
              Developed a complete rewards management module supporting reward
              assignment, tracking, redemption, and history management,
              improving employee engagement within the platform.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>Component Architecture</span>
              <span>REST APIs</span>
              <span>Pagination</span>
            </div>
          </div>

          {/* 4 */}
          <div className="project-card">
            <div
              className="project-header"
              style={{ display: "flex", gap: "1rem" }}
            >
              <div className="project-number">4</div>
              <h3 style={{ marginTop: 5, marginBottom: 0 }}>
                Survey & Real-Time Interaction Features
              </h3>
            </div>
            <p>
              Implemented dynamic survey components with real-time updates,
              activity logs, and notice boards using WebSockets, improving user
              interaction and system responsiveness.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>Chart.js</span>
              <span>WebSockets</span>
              <span>Real-Time Data</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
