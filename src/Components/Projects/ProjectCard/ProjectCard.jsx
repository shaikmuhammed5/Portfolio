/* eslint-disable react/prop-types */
import "./ProjectCard.css";

const ProjectCard = ({ title, date, responsibilities }) => {
  return (
    <div className="project-card">
      <h6>{title}</h6>

      <div className="project-duration">{date}</div>

      <ul>
        {responsibilities.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
