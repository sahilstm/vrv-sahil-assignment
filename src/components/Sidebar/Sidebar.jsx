import React from "react";
import { IoHome } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import "../../styles/components/sidebar.scss";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <IoHome /> },
    { id: "user-management", label: "User Management", icon: <MdManageAccounts /> },
    { id: "role-management", label: "Role Management", icon: <BiBookContent /> },
  ];

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-container">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="sidebar-item"
            style={{
              backgroundColor: activeTab === item.id ? "#101754" : "transparent",
            }}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <p className="sidebar-text">{item.label}</p>
          </div>
        ))}
      </div>
    
    </div>
    </>
  );
};

export default Sidebar;
