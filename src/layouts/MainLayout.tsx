import { FaHome, FaUser, FaMailBulk, FaBook } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <Link
        to="/"
        className={`sidebar__item ${
          currentPath === "/" ? "sidebar__item--active" : ""
        }`}>
        <FaHome className="sidebar__icon" />
        <span className="sidebar__text">Home</span>
      </Link>
      <Link
        to="/about"
        className={`sidebar__item ${
          currentPath === "/about" ? "sidebar__item--active" : ""
        }`}>
        <FaUser className="sidebar__icon" />
        <span className="sidebar__text">About</span>
      </Link>
      <Link
        to="/contact"
        className={`sidebar__item ${
          currentPath === "/contact" ? "sidebar__item--active" : ""
        }`}>
        <FaMailBulk className="sidebar__icon" />
        <span className="sidebar__text">Contact</span>
      </Link>
      <Link
        to="/projects"
        className={`sidebar__item ${
          currentPath === "/projects" ? "sidebar__item--active" : ""
        }`}>
        <FaBook className="sidebar__icon" />
        <span className="sidebar__text">Projects</span>
      </Link>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
};

const MainLayout = () => {
  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <div className="layout__header">
            <h1 className="layout__title">My Portfolio</h1>
          </div>
          <div className="layout__body">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
