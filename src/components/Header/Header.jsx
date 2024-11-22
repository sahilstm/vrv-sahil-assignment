import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../assests/logo/logo.png";
import "../../styles/components/header.scss";
import profile from "../../assests/profile.png";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const count = 4;

  return (
    <div>
      <header className="header">
        <Container>
          <div className="header-container">
            <img src={logo} className="logo" alt="logo" />
            <nav className={`nav`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className="user-link" to="/">
                    <div className="icon">
                      <IoSettingsOutline />
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="user-link" to="/">
                    <div className="notification-bell">
                      <FaRegBell />
                      {count > 0 && (
                        <span className="notification-count">{count}</span>
                      )}
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="user-link-name" to="/">
                    Sahil Kumar
                  </Link>
                  <img src={profile} alt="profile" className="profile" />
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
