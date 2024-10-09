import React, { useState } from "react";
import "../styles/footer.css";
import ContactArrow from "../assets/ContactArrow.svg";
import InstaIcon from "../assets/InstaIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FBICon from "../assets/FBIcon.svg";
import LinkedIcon from "../assets/LinkedIcon.svg";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

function Footer() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const closeForm = () => {
    setShowContactForm(false);
  };
  return (
    <div className="footer-contaier">
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <img src={ContactArrow} alt="" />
        <span style={{ color: "#6B6084", marginLeft: "20px" }}>Contact</span>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "100px",
        }}
      >
        <div style={{ fontSize: "100px", fontWeight: 800, color: "#0D0225" }}>
          Keep in touch
        </div>
        <button
          style={{
            height: "40px",
            width: "178px",
            backgroundColor: "#0047FF",
            color: "white",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            fontFamily: "Helvetica",
            cursor: "pointer",
          }}
          onClick={() => setShowContactForm(true)}
        >
          Contact Us
        </button>
      </div>
      <div className="footer-tabs">
        <div>
          <div style={{ color: "#6b6084" }}>Start a Conversation</div>
          <div
            className="footer-gradient-text pointer"
            style={{ marginTop: "44px" }}
          >
            <a href={`mailto:${"contactus@staciacorp.com"}`}>
              contactus@staciacorp.com
            </a>
          </div>
          <div
            className="footer-gradient-text pointer"
            style={{ marginTop: "30px" }}
          >
            +91-9363034150
          </div>
        </div>
        <div className="footer-nav-tabs">
          <div>
            <div>Company</div>
            <div className="footer-grey-tabs">About</div>
            <div
              className="footer-grey-tabs"
              onClick={() => {
                navigate("/career");
                window.scrollTo(0, 0);
              }}
            >
              Careers
            </div>
            <div
              className="footer-grey-tabs"
              onClick={() => setShowContactForm(true)}
            >
              Contact
            </div>
          </div>
          <div>
            <div>Product</div>
            <div
              className="footer-grey-tabs"
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0);
              }}
            >
              Services
            </div>
            <div
              className="footer-grey-tabs"
              onClick={() => {
                navigate("/product");
                window.scrollTo(0, 0);
              }}
            >
              Products
            </div>
            <div
              className="footer-grey-tabs"
              onClick={() => {
                navigate("/project");
                window.scrollTo(0, 0);
              }}
            >
              Projects
            </div>
          </div>
          <div>
            <div>Resources</div>
            <div className="footer-grey-tabs">Community</div>
            <div className="footer-grey-tabs">What's New</div>
            <div
              className="footer-grey-tabs"
              onClick={() => {
                navigate("/case-study");
                window.scrollTo(0, 0);
              }}
            >
              Case Studies
            </div>
          </div>
        </div>
        <div>
          <div>Reach Us</div>
          <div className="footer-grey-tabs pointer">
            <a
              href="https://maps.app.goo.gl/subrLwPjRTJdTcRZ8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-grey-tabs pointer">
                Ground Floor, C-53, Guindy Industrial Estate,
              </div>
              <div
                style={{ marginTop: "10px", marginBottom: "10px" }}
                className="footer-grey-tabs pointer"
              >
                Thiru Vi Ka Industrial Estate, SIDCO Industrial
              </div>
              <div className="footer-grey-tabs-child">
                Estate, Guindy, Chennai - 32, Tamil Nadu
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-others">
        <div>
          ©Copyright Stacia<span style={{ color: "#0047FF" }}>Corp</span>. All
          Rights Reserved
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            opacity: "0.6",
            width: "35%",
          }}
        >
          <div>Terms of service</div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#D9D9D9",
              borderRadius: "50%",
              marginLeft: "35px",
              marginRight: "35px",
            }}
          />
          <div>Privacy Policy</div>
        </div>
        <div className="footer-icons">
          <div>
            <a
              href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstaIcon} alt="" />
            </a>
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer">
              <img src={TwitterIcon} alt="" />
            </a>
          </div>
          <div style={{ marginRight: "20px" }}>
            <a
              href="https://www.facebook.com/staciacorp/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FBICon} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/staciacorp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      {showContactForm && <Contact closeHandle={closeForm} />}
    </div>
  );
}

export default Footer;
