import React from "react";
import { useContext } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import StaciaLogo from "../assets/StaciaLogo.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { Context } from "../context/context";

function NavBar() {
  const NavbarStates = useContext(Context);
  console.log(NavbarStates.isServiceActive);

  const {
    isServiceActive,
    setIsServiceActive,
    isProductActive,
    setIsProductActive,
    isProjectActive,
    setIsProjectActive,
    isCareerActive,
    setIsCareerActive,
  } = NavbarStates;

  const navigate = useNavigate();

  const homeHandler = () => {
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    navigate("/");
  };
  const serviceActiveHandler = () => {
    setIsServiceActive(true);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    navigate("/service");
  };
  const productActiveHandler = () => {
    setIsServiceActive(false);
    setIsProductActive(true);
    setIsProjectActive(false);
    setIsCareerActive(false);
    navigate("/product");
  };
  const projectactiveHandler = () => {
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(true);
    setIsCareerActive(false);
    navigate("/project");
  };
  const careerActiveHandler = () => {
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(true);
    navigate("/career");
  };

  return (
    <div className="nav-container">
      <div className="nav-items-container">
        <div className="nav-left">
          <img
            src={StaciaLogo}
            alt="Home"
            className="nav-items"
            onClick={homeHandler}
          />
          <div
            className="nav-items"
            onClick={serviceActiveHandler}
            style={isServiceActive ? { opacity: 1 } : { opacity: 0.5 }}
          >
            Services
          </div>
          <div
            className="nav-items"
            onClick={productActiveHandler}
            style={isProductActive ? { opacity: 1 } : { opacity: 0.5 }}
          >
            Products
          </div>
          <div
            className="nav-items"
            onClick={projectactiveHandler}
            style={isProjectActive ? { opacity: 1 } : { opacity: 0.5 }}
          >
            Projects
          </div>
          <div className="nav-items" style={{ opacity: 0.5 }}>
            Resources
          </div>
          <div
            className="nav-items"
            onClick={careerActiveHandler}
            style={isCareerActive ? { opacity: 1 } : { opacity: 0.5 }}
          >
            Careers
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-item-whatsnew">What'sNew</div>
          <div
            style={{
              height: "48px",
              width: "2px",
              backgroundColor: "white",
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
