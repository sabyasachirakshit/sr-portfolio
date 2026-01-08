import { isMobile } from "react-device-detect";
import "../styles/About/skills.css";
export default function SkillExpertise() {
  return (
    <div>
      <div
        className="skill-heading"
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <h1>Skills & Expertise</h1>
        <div
          className="hor-line"
          style={
            !isMobile
              ? { height: "5px", width: "9%" }
              : { width: "33%", height: "5px" }
          }
        ></div>
        <div className="overview" style={{marginTop:"1.5rem"}}>
          A comprehensive overview of my technical skills and proficiency levels
          across various technologies
        </div>
      </div>
    </div>
  );
}
