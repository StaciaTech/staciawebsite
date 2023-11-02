import React from "react";
import "../styles/projects.css";
import DefalutImg from "../assets/ProjectFeatureImg1.png";
import { ProjectMainData } from "../data/projectData";
import { useState } from "react";

function MainProjectComponent() {
  const [MainProject] = useState(ProjectMainData);
  console.log(MainProject);
  return (
    <div>
      {MainProject.map((eachProject, index) => {
        const {
          Image1,
          Image2,
          Image3,
          Image4,
          Image5,
          heading1,
          heading2,
          para1,
          para2,
          para3,
        } = eachProject;
        console.log(heading1);
        return (
          <div key={index}>
            <div>
              <img
                src={Image1 ? Image1 : DefalutImg}
                alt=""
                className="main-img-1"
              />
            </div>
            <div className="info-container">
              <div className="main-project-heading1">{heading1}</div>
              <div className="main-project-heading2">{heading2}</div>
              <div className="main-info-para">{para1}</div>
              <div
                className="main-info-para"
                style={{ marginTop: "50px", marginBottom: "50px" }}
              >
                {para2}
              </div>
              <div className="main-info-para">{para3}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <img
                src={Image2 ? Image2 : DefalutImg}
                alt=""
                className="main-img-2"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainProjectComponent;
