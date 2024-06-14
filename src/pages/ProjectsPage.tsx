// ProjectsPage.tsx
import ProjectInfo from "@/components/ProjectInfo";
import { useModal } from "@/utils/ModalProvider";

const ProjectsPage = () => {
  const { showModal } = useModal();

  const onProjectInfo = (projectName: string) => {
    showModal(<ProjectInfo projectName={projectName} />);
  };

  return (
    <div className="page projects-page">
      <div className="page__header">
        <h1 className="page__title">// Projects</h1>
      </div>
      <div className="page__content">
        <div className="projects">
          <div
            className="card"
            style={{
              backgroundImage: "url('/landing_1.png')",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <p className="card__text">Project 1</p>
            <div className="card__overlay">
              <span
                className="card__plus"
                onClick={() => onProjectInfo("Project 1")}>
                +
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundImage: "url('/landing_2.png')",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <p className="card__text">Project 2</p>
            <div className="card__overlay">
              <span
                className="card__plus"
                onClick={() => onProjectInfo("Project 2")}>
                +
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundImage: "url('/landing_3.png')",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <p className="card__text">Project 3</p>
            <div className="card__overlay">
              <span
                className="card__plus"
                onClick={() => onProjectInfo("Project 3")}>
                +
              </span>
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundImage: "url('/landing_4.png')",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <p className="card__text">Project 4</p>
            <div className="card__overlay">
              <span
                className="card__plus"
                onClick={() => onProjectInfo("Project 4")}>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
