import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/services.css";
import ServiceHeroImg from "../assets/serviceHeroImg.png";
import ServiceComponent from "../components/ServiceComponent";
import ServiceFeatureComponent from "../components/ServiceFeatureComponent";

function ServicePage() {
  return (
    <>
      <div style={{ position: "sticky", top: "0px", zIndex: 1 }}>
        <NavBar />
      </div>
      <div className="service-hero-container">
        <div className="service-hero-secton">
          <div>
            <div className="service-title">Our Services</div>
            <div className="service-overview-title">overview</div>
            <div className="service-hero-content">
              Lorem ipsum dolor sit amet consectetur. Eget ut risus venenatis ut
              tincidunt porttitor vitae mauris rhoncus. Habitant pharetra
              tincidunt cras sed faucibus morbi tincidunt nibh. Integer risus
              pellentesque phasellus ultrices pellentesque odio eget. Egestas ut
              facilisi orci id dui odio at. Turpis elit fames in lobortis.
              Pharetra orci vitae sed nisi suspendisse dignissim in. Quis eu
              morbi cras orci sit. Lorem ipsum dolor sit amet consectetur. Eget
              ut risus venenatis ut tincidunt porttitor vitae mauris rhoncus.
              Habitant pharetra tincidunt cras sed faucibus morbi tincidunt
              nibh. Integer risus pellentesque
            </div>
          </div>
          <div>
            <img src={ServiceHeroImg} alt="" className="service-hero-img" />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "80px", marginRight: "80px" }}>
        <ServiceFeatureComponent />
        <div>
          <ServiceComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;
