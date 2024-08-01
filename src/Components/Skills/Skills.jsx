import { useState } from "react";
import { SKILLS } from "../../Utils/Data";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skill-container" id="skill">
      <h5>Technical Profile</h5>

      <div className="skill-content">
        <div className="skills">
          {SKILLS.map((item) => {
            return (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            );
          })}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
