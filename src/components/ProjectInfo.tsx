import React from "react";

interface ProjectInfoProps {
  projectName: string | null;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectName }) => {
  return (
    <div className="project-info">
      <h2>{projectName}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        quidem dicta ex sapiente beatae culpa esse pariatur, officiis quos
        debitis laborum reiciendis odio quisquam accusantium doloremque, soluta,
        architecto explicabo. Praesentium.
      </p>
    </div>
  );
};

export default ProjectInfo;
