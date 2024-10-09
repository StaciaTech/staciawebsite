import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import StaciaLogo from "../assets/newLogoStavia.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { NavLink, Link } from "react-router-dom";
import droparrow from "../assets/droparrow.png";
import MobileNav from "../assets/MobileNav.png";
import ActiveStar from "../assets/ActiveStar.png";
import WhatsNew from "./WhatsNew";
import Modal from "react-modal";
import Contact from "./Contact";
function NavBar() {
  const [openWhatsNew, setOpenWhatsNew] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const closeHandle = () => {
    setShowContact(false);
  };

  return (
    <div className="nav-container">
      <div className="nav-items-container">
        <div className="nav-left">
          <div className="mobile-nav">
            <img src={MobileNav} alt="" />
          </div>
          <Link
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            style={{ marginRight: "2.5rem" }}
          >
            <img src={StaciaLogo} alt="Home" className="nav-logo" />
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink
              to={"/services"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="nav-items"
            >
              Services
            </NavLink>
            <NavLink
              to={"/product"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="nav-items"
            >
              Products
            </NavLink>
            <NavLink
              to={"/project"}
              className="nav-items"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Projects
            </NavLink>
            <div className="dropdown">
              <input type="checkbox" name="" id="btn" className="check" />
              <div className="dropdown-name">Resource</div>
              <div className="dropdown-links">
                <NavLink
                  to={"/article"}
                  className="drop-items"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Articles
                </NavLink>
                <NavLink
                  to={"/case-study"}
                  className="drop-items"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Case studies
                </NavLink>
              </div>
            </div>
            {/* <div className="nav-items" style={{ opacity: 0.5 }}>
            Resources
          </div> */}
            <NavLink
              to={"/career"}
              className="nav-items"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Careers
            </NavLink>

            <div
              className="mobile-whatsnew"
              style={{ marginLeft: "25px" }}
              onClick={() => setOpenWhatsNew(!openWhatsNew)}
            >
              {openWhatsNew ? (
                <div
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  What' New
                </div>
              ) : (
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.50)",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  What' New
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="nav-right">
          {/* <Link to={"/community"} className="nav-item-whatsnew">
            Community
          </Link> */}
          {/* <div
            style={{
              height: "48px",
              width: "2px",
              backgroundColor: "#fff",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          ></div> */}
          <img
            src={ContactIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => setShowContact(true)}
          />
          {showContact && <Contact closeHandle={closeHandle} />}
          {/* <Modal
            isOpen={showContact}
            onRequestClose={() => setShowContact(false)}
            style={{
              overlay: {
                position: "fixed",
                zIndex: 1020,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#0D0225",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              content: {
                background: "white",
                width: "80%",
                maxHeight: "80%",
                padding: "6.25rem",
                position: "relative",
                borderRadius: "0.5rem",
              },
            }}
          ></Modal> */}
        </div>
      </div>
      {openWhatsNew ? <WhatsNew /> : ""}
    </div>
  );
}

export default NavBar;
