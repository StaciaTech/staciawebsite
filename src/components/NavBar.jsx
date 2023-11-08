import React from "react";
import "../styles/navbar.css";
import StaciaLogo from "../assets/StaciaLogo.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-items-container">
        <div className="nav-left">
          <Link to={"/"}>
            <img src={StaciaLogo} alt="Home" />
          </Link>

          <NavLink to={"/service"} className="nav-items">
            Services
          </NavLink>
          <NavLink to={"/product"} className="nav-items">
            Products
          </NavLink>
          <NavLink to={"/project"} className="nav-items">
            Projects
          </NavLink>
          <NavLink to={"/resource"} className="nav-items">
            Resource
          </NavLink>
          {/* <div className="nav-items" style={{ opacity: 0.5 }}>
            Resources
          </div> */}
          <NavLink to={"/career"} className="nav-items">
            Careers
          </NavLink>
        </div>
        <div className="nav-right">
          <Link to={"/whatsNew"} className="nav-item-whatsnew">
            What'sNew
          </Link>
          <div
            style={{
              height: "48px",
              width: "2px",
              backgroundColor: "#fff",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          ></div>
          <img src={ContactIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
