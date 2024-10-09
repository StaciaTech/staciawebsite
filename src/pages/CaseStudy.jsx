import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/CaseStudy.css";
import { Outlet } from "react-router-dom";
import ResourceNavBar from "../components/Resource/ResourceNavBar";
import CaseStudyCard from "../components/CaseStudy/CaseStudyCard";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";
import CsImg from "../assets/csimg2.png";

const ArtData = [
  {
    mainTitle:
      "Mechanization and Precision Sowing in Sesame Cultivation in India",
    mainDesc:
      "India is one of the largest producers of sesame, with cultivation spread across various states under diverse climatic conditions such as summer, rainfed, cold weather, and rain fallow regions. Approximately 1.8 million hectares of land are used for sesame cultivation each year. However, the average yield remains less than 500 kg per acre due to outdated farming practices such as broadcasting.",
    mainImageUrl: CsImg,
  },
];

export default function CaseStudy() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="case-study-section1">
        <div className="case-study-section-overlay">
          <div className="case-study-title1">
            <span>Case Study</span>
          </div>
          {/* <div className="case-study-text">Case Study</div>
          <div className="case-study-text">Lorem</div> */}
        </div>
      </div>
      {/* <div className="case-study-section2">
        <ResourceNavBar />

      </div> */}
      <div>
        <ReUsableArticle data={ArtData} path={"/single-caseStudy"} />
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}
