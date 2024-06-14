import { React, useState, useEffect } from "react";
import "../styles/sideBar.css";
import { useNavigate } from "react-router-dom";
import DarkLogo from "../assets/sideBarStaciaLogoLite.svg";
import whiteLogo from "../assets/MobileNavStraciaLog.svg";
import MoibileNav from "../assets/MobileNav.png";
import ContactIcon from "../assets/ContactIcon.svg";
import Cancle from "../assets/close-delete-remove-3_svgrepo.com.svg";
import ArrowUp from "../assets/arrowUP.svg";

function SideBar() {
  const navigateTo = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (showDropdown) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };
    if (showDropdown) {
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDropdown]);

  return (
    <div
      className="sidebar-container"
      style={
        showDropdown
          ? { backgroundcolor: "#fff" }
          : { backgroundColor: "#0D0225" }
      }
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              style={showDropdown ? { display: "none" } : { display: "block" }}
            >
              <img src={MoibileNav} alt="" />
            </div>
            <div style={{ marginLeft: "10px" }} onClick={() => navigateTo("/")}>
              {showDropdown ? (
                <img src={DarkLogo} alt="" />
              ) : (
                <img src={whiteLogo} alt="" />
              )}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {showDropdown ? (
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                <img
                  src={Cancle}
                  alt=""
                  style={{
                    height: "25px",
                    // objectFit: "cover",
                    // backgroundColor: "red",
                  }}
                />
              </div>
            ) : (
              <div>
                <img
                  src={ContactIcon}
                  alt=""
                  style={{
                    height: "25px",
                    // objectFit: "cover",
                    // backgroundColor: "red",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={showDropdown ? { display: "block" } : { display: "none" }}>
        <div
          className="side-bar-item-containers"
          onClick={() => {
            navigateTo("/");
            window.scrollTo(0, 0);
          }}
        >
          <div className="side-bar-items">Home</div>
          <img className="arrow" src={ArrowUp} alt="" />
        </div>
        <div className="horizontal-line" />
        <div
          className="side-bar-item-containers"
          onClick={() => {
            navigateTo("/services");
            window.scrollTo(0, 0);
          }}
        >
          <div className="side-bar-items">Services</div>
          <img src={ArrowUp} alt="" className="arrow" />
        </div>
        <div className="horizontal-line" />
        <div
          className="side-bar-item-containers"
          onClick={() => {
            navigateTo("/product");
            window.scrollTo(0, 0);
          }}
        >
          <div className="side-bar-items">Products</div>
          <img src={ArrowUp} alt="" className="arrow" />
        </div>
        <div className="horizontal-line" />
        <div
          className="side-bar-item-containers"
          onClick={() => {
            navigateTo("/career");
            window.scrollTo(0, 0);
          }}
        >
          <div className="side-bar-items">career</div>
          <img src={ArrowUp} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
