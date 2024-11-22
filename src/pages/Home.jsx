import React, { useState } from "react";
import UserManagement from "../components/UserManagement/UserManagement";
import RoleManagement from "../components/RoleManagement/RoleManagement";
import "../styles/pages/home.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { FcLike } from "react-icons/fc";

const Home = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); 

  const renderContent = () => {
    if (activeTab === "dashboard") {
      return (
        <>
          <UserManagement />
          <RoleManagement />
        </>
      );
    }


    switch (activeTab) {
      case "user-management":
        return <UserManagement />;
      case "role-management":
        return <RoleManagement />;
      default:
        return <div>Welcome to the Dashboard!</div>;
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="sidebar-home">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div style={{ width: "20%" }} className="sidebar-home-sm">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="render-container">{renderContent()}</div>
      </div>
      <footer className="footer">
        <p>
          <span>
            <FcLike />
          </span>
          Developed by Sahil Kumar, showcasing skills in React, SCSS, and modern
          UI/UX design principles.
        </p>
      </footer>
    </div>
  );
};

export default Home;
