import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MainProjectComponent from "../components/MainProjectComponent";
import FeatureProjectComponent from "../components/FeatureProjectComponent";
import OtherProjectsComponent from "../components/OtherProjectsComponent";
import "../styles/projects.css";

function ProjectPage() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="project-hero-section">
          <div className="project-hero-title">Stacia Corp Projects</div>
        </div>
        <div>
          <div>
            <MainProjectComponent />
          </div>
          <div>
            <FeatureProjectComponent />
          </div>
          <div>
            <OtherProjectsComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
