import "../styles/About/about.css";

export default function About() {
  return (
    <div id="about" className="about" style={{ marginTop: "1rem" }}>
      <div className="about-me-header">
        <div style={{ fontSize: "40px" }}>
          <b>About Me</b>
        </div>
        <div
          className="hor-line"
          style={{ height: "5px", width: "9%", backgroundColor: "red" }}
        ></div>
      </div>

      <div className="desc">
        I'm a passionate React.js developer with over 3 years of experience
        building web applications that combine beautiful design with powerful
        functionality. My journey in tech started with a curiosity about how
        things work, and has evolved into a career focused on creating
        responsive beautiful web applicationbs. I specialize in modern web technologies
        and have a keen eye for design. Whether it's crafting pixel-perfect
        interfaces or architecting scalable systems, I bring dedication and
        creativity to every project.
      </div>
    </div>
  );
}
