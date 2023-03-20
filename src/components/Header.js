import React from "react";
import "../styles/Header.scss";

import bairesdevLogoBlue from "../assets/images/bairesdev-logo-blue.svg";
import profilePhoto from "../assets/images/profile-photo.jpg";
import { ArrowDropDown, Help, Translate } from "@material-ui/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="company-logo">
          <img className="image" src={bairesdevLogoBlue} alt="General_CompanyName"></img>
        </div>
        <ul className="ul-items">
          <li to="/test-lab">Home</li>
          <li to="/test-lab">My skills</li>
          <li to="/test-lab">Refer</li>
          <li to="/test-lab" className="color-text">
            Test Lab
          </li>
          <li to="/test-lab" className="lang">
            <Translate className="lang-icon" />
            En
          </li>
          <li>
            <Help className="help-icon" />
          </li>
          <li className="user-profile-dropdown">
            <div className="profile-photo-container">
              <img className="profile-image" src={profilePhoto} alt="General_CompanyName"></img>
            </div>
            <div className="username-container">
              <div className="username">Joao</div>
              <ArrowDropDown className="arrowdropdown-icon" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
