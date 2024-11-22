import React from "react";
import UserManagement from "../components/UserManagement/UserManagement";
import RoleManagement from "../components/RoleManagement/RoleManagement";
import "../styles/pages/home.scss";
import Header from "../components/Header/Header";
import { FcLike } from "react-icons/fc";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <UserManagement />
      <RoleManagement />
      <div className="footer">
        <p>
          <span>
            <FcLike />
          </span>
          Developed by Sahil Kumar, showcasing skills in React, SCSS, and modern
          UI/UX design principles.
        </p>
      </div>
    </div>
  );
};

export default Home;
