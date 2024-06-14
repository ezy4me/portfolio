import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
interface ProjectInfoProps {
  projectName: string | null;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName }) => {
  return (
    <div className="project-info">
      <div className="project-info__images">
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="1" />
        </div>
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="2" />
        </div>
        <div className="project-info__images-item">
          <img src="/landing_1.png" alt="3" />
        </div>
      </div>

      <div className="project-info__header">
        <p className="project-info__name">{projectName}</p>
        <div className="project-info__actions">
          <button className="btn github-button">
            Github
            <FaGithub />
          </button>
          <button className="btn site-button">
            View
            <FaEye />
          </button>
        </div>
      </div>
      <p className="text">Project</p>
      <div className="project-info__content">
        <div className="tech-stack">
          <p className="text tech-stack__title">Tech-Stack</p>
          <ul className="tech-stack__list">
            <li className="tech-stack__list-item">React</li>
            <li className="tech-stack__list-item">Nest</li>
            <li className="tech-stack__list-item">Postgresql</li>
          </ul>
        </div>
        <div className="project-info__description">
          <p className="text">Description</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
