/* eslint-disable react/prop-types */
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => {
          return (
            <section key={`skill_${index}`}>
              <div className="skill-info">
                <p>{item.skill}</p>
                <p className="percentage">{item.percentage}</p>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress"
                  style={{ width: item.percentage }}
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
