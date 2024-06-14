import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

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
        <Profile />
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
