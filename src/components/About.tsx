import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Career Objective</h3>
        <p className="para">
          Final-year Information Technology student pursuing a career as a Java Backend Software Engineer, with hands-on experience in Java, Spring Boot, REST APIs, PostgreSQL, and JWT-based authentication. Experienced in system analysis, automated testing, and AI integration. Seeking a Fresher Java Developer role.
        </p>
        <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#aaa" }}>
          <strong>Thu Dau Mot University</strong> — Information Technology (2022 – 2027) | <strong style={{ color: "#4ade80" }}>GPA: 8.51 / 10</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
