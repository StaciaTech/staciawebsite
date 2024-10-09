import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import ProductDefault from "../assets/projectDefaultImage.png";
import { ProjectData } from "../data/projectData";
import { useState } from "react";
import WorkInProgress from "../components/WorkInProgress";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import SideBar from "../components/SideBar";
import MobileFooter from "../components/MobileFooter";

function ProjectPage() {
  const [projectData] = useState(ProjectData);
  const firstproduct = projectData.Projects[0];
  // console.log(firstproduct);
  const { title, Image1 } = firstproduct;

  const ArtData = [
    {
      title: "lorem ipsum",
      des: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et",
    },
    {
      title: "lorem ipsum",
      des: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et",
    },
    {
      title: "lorem ipsum",
      des: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et",
    },
    {
      title: "lorem ipsum",
      des: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et",
    },
  ];

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="project-section">
        <div className="projecct-section-overlay">
          {/* <div className="projecct-title">
            <span>Our Projects</span>
          </div> */}
          {/* <div style={{ width: "100%" }}>
            <img src={WorkInProgress} alt="" />
          </div> */}
          <WorkInProgress />
        </div>
      </div>
      {/* <div>
        <ReUsableArticle data={ArtData} path={"/single-project"} />
      </div> */}
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProjectPage;
