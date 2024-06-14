import React from "react";

function ProjectsPage() {
  return (
    <div className="page projects-page">
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
              <span className="card__plus">+</span>
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
              <span className="card__plus">+</span>
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
              <span className="card__plus">+</span>
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
              <span className="card__plus">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
