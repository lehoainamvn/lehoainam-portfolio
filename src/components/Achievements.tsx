import React from "react";
import "./styles/Career.css";

const achievements = [
  {
    title: "Academic Achievement Scholarship",
    period: "2022–2023, 2024–2025",
    description: "Awarded by Thu Dau Mot University for top academic performance in Information Technology.",
    link: "https://drive.google.com/drive/folders/14o9HR7QxgIntLZZa_Xz2qkJLAFXyViYt?usp=sharing"
  },
  {
    title: "Research Project",
    period: "2024–2025, 2025–2026",
    description: "University-level IT scientific research projects covering AI vision systems and data processing.",
    link: "https://drive.google.com/drive/folders/1oIDrwMb_xJg-mPQ_9PypiPM_A_YQ5we9?usp=sharing"
  },
  {
    title: "English Proficiency Certificate (EPT)",
    period: "Verified Certificate",
    description: "Official English proficiency certification for technical reading, writing, and professional communication.",
    link: "https://drive.google.com/file/d/1q0Bz1t6IqgHCda75HXP4IvnAZHVzHDgw/view?usp=sharing"
  }
];

const Achievements: React.FC = () => {
  return (
    <div className="career-section section-container" id="achievements" style={{ paddingTop: "4rem" }}>
      <div className="career-container">
        <h2>
          Achievements <span>&</span>
          <br /> Certifications
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          {achievements.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "10px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                transition: "all 0.3s ease"
              }}
            >
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--accentColor)", fontFamily: "monospace" }}>{item.period}</span>
                <h3 style={{ fontSize: "1.2rem", color: "#fff", marginTop: "0.4rem", fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#aaa", marginTop: "0.6rem", lineHeight: "1.6" }}>{item.description}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  color: "var(--accentColor)",
                  textDecoration: "none",
                  fontWeight: 600,
                  marginTop: "0.5rem"
                }}
              >
                View Document on Google Drive ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
