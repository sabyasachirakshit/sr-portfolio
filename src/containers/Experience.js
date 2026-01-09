import { isMobile } from "react-device-detect";
import "../styles/About/experience.css";
import {DesktopOutlined, LinkedinOutlined} from "@ant-design/icons"

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
          <div className="exp-icon"><DesktopOutlined /></div>

          <div className="exp-title">
            <h2>React.js Developer</h2>
            <h3>Pointerz Inc. (San Francisco, California, United States)</h3>
            <LinkedinOutlined style={{fontSize:28}}/>
            <div className="exp-meta">
              <span>Dec 2022 – Dec 2025</span>
              <span>Remote</span>
            </div>
          </div>
        </div>

        {/* ABOUT ROLE */}
        <div className="exp-about">
          <h4>About the Role</h4>
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
            <li>Developed scalable React.js applications using component-based architecture</li>
            <li>Integrated RESTful APIs and WebSockets for real-time features</li>
            <li>Designed Kanban-style boards with Drag & Drop functionality</li>
            <li>Built dashboards and data visualizations using Ant Design and Chart.js</li>
            <li>Improved performance and usability across multiple modules</li>
            <li>Debugged and fixed production issues, preventing critical failures</li>
            <li>Ensured fully responsive UI across all screen sizes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
