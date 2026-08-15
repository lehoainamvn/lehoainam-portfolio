import "./styles/Career.css";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Work <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {PORTFOLIO_DATA.experience.map((exp) => (
            <div className="career-info-box" key={exp.id}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <span className="career-date">{exp.period}</span>
                </div>
              </div>
              <div className="career-details">
                <ul className="career-ul">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
