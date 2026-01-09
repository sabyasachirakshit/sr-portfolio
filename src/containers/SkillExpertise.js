import { isMobile } from "react-device-detect";
import "../styles/About/skills.css";
export default function SkillExpertise() {
  return (
    <div>
      <div
        className="skill-heading"
        id="skills"
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <h1 style={isMobile?{fontSize:"2rem"}:{}}>Skills & Expertise</h1>
        <div
          className="hor-line"
          style={
            !isMobile
              ? { height: "5px", width: "9%" }
              : { width: "33%", height: "5px" }
          }
        ></div>
        <div className="overview" style={{ marginTop: "1.5rem" }}>
          A comprehensive overview of my technical skills and proficiency levels
          across various technologies
        </div>
      </div>

      <div className="skills-grid " style={{ marginTop: "1.5rem" }}>
        {/* Frontend */}
        <div className="skill-card">
          <h2>Frontend Development</h2>
          <ul>
            <li>React.js (3+ years)</li>
            <li>Redux</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>React Hooks</li>
            <li>Responsive Web Design</li>
            <li>Ant Design (AntD)</li>
            <li>Chart.js (Data Visualization)</li>
            <li>Drag & Drop (Kanban Boards)</li>
            <li>Infinite Scroll & Pagination</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h2>Backend & APIs</h2>
          <ul>
            <li>RESTful APIs</li>
            <li>Node.js (Basic)</li>
            <li>Express.js (Basic)</li>
            <li>WebSockets (Real-time Communication)</li>
            <li>API Data Handling</li>
            <li>Error Handling & Validation</li>
          </ul>
        </div>

        {/* Testing & QA */}
        <div className="skill-card">
          <h2>Testing & Quality Assurance</h2>
          <ul>
            <li>Debugging & Bug Fixing</li>
            <li>Manual Testing</li>
            <li>Bug Hunting & QA Support</li>
            <li>Performance Optimization</li>
            <li>Production Issue Prevention</li>
          </ul>
        </div>

        {/* Tools & Automation */}
        <div className="skill-card">
          <h2>Tools, Automation & Platforms</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>GitHub Copilot</li>
            <li>VS Code</li>
            <li>Python</li>
            <li>Selenium WebDriver</li>
            <li>FlutterFlow</li>
            <li>Supabase (Basic Integration)</li>
            <li>Firebase (Basic Integration)</li>
            <li>AI-Assisted Development Tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
