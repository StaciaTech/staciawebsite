import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/career.css";
import CareerComponent from "../components/CareerComponent";
import LifeStaciaImg1 from "../assets/life@staciaImg1.png";
import LifeStaciaImg2 from "../assets/life@staciaImg2.png";
import LifeStaciaImg3 from "../assets/life@staciaImg3.png";
import LifeStaciaImg4 from "../assets/careerGroup.png";
import { allJobs } from "../data/JobsData";
import CareerMobileCulture from "../components/careers/careerMobileCulture";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import Star from "../components/Star";

function CareerPage() {
  const [Jobs] = useState(allJobs);
  const [showApplication, setShowApplication] = useState(false);
  // console.log(showApplication);
  return (
    <div className={showApplication ? "fixed" : ""}>
      <NavBar />
      <SideBar />
      <div className="career-hero-section">
        <div className="career-hero-contents">
          <div className="career-title-section">
            <div className="career-title">
              <span>Careers</span>
              <Star />
            </div>
            <div style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}>
              In Stacia Corp
            </div>
          </div>
          <div className="career-info-section">
            <p className="career-info-section-heading">
              Come, join us!
              <span style={{ color: "#0047FF" }}>We're hiring.</span>
            </p>
            <p className="career-hero-info">
              "At our core, we are driven by the belief that everyone should
              have the opportunity to discover and pursue their dream job. Our
              relentless dedication is focused on making this a reality. Join us
              now and take the first step toward your dream career!"
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
          className="career-headings"
        >
          Opportunities
        </div>
        {Jobs.map((eachJob, index) => (
          <CareerComponent
            key={index}
            data={eachJob}
            showApplication={showApplication}
            setShowApplication={setShowApplication}
          />
        ))}
      </div>
      <div className="life-at-stacia">
        <div className="career-headings">Life @ Stacia Corp</div>
        {/* <div className="career-image-box-full">
          <div className="career-image-box-left">
            <img src={LifeStaciaImg1} alt="" />
          </div>
          <div className="career-image-box-right">
            <div className="image-box">
              <img src={LifeStaciaImg2} alt="" />
            </div>
            <div className="career-image-box">
              <img src={LifeStaciaImg3} alt="" />
            </div>
            <div className="career-image-box case-col-span">
              <img src={LifeStaciaImg4} alt="" />
            </div>
          </div>
        </div> */}
        <div className="image-layout-container">
          <div className="img-container1">
            <img src={LifeStaciaImg1} alt="" className="Life-Img" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div className="img-container2">
              <img src={LifeStaciaImg2} alt="" className="Life-Img" />
            </div>
            <div className="img-container3">
              <img src={LifeStaciaImg3} alt="" className="Life-Img" />
            </div>
          </div>
          <div className="img-container4">
            <img src={LifeStaciaImg4} alt="" className="Life-Img" />
          </div>
        </div>
      </div>
      <div style={{ margin: "1rem" }}>
        <CareerMobileCulture />
      </div>
      <div
        style={{
          marginLeft: "80px",
          marginRight: "80px",
          marginBottom: "10rem",
        }}
      >
        <div className="our-cultures">
          <div className="career-headings">Our Culture</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // flexWrap: "wrap",
              flex: "1 fr",
            }}
          >
            <div>
              <div className="culture-titles">Office Environment</div>
              <p className="culture-contents">
                At Stacia Corp, our office environment is designed to inspire
                innovation, creativity, foster collaboration, and support
                productivity. We believe that where you work is just as
                important as how you work, which is why we’ve created a dynamic
                and welcoming space that reflects our commitment to innovation
                and teamwork. Open, Collaborative Spaces.
              </p>
            </div>
            <div>
              <div className="culture-titles">Working Model</div>
              <p className="culture-contents">
                At Stacia Corp, we believe that flexibility and collaboration
                are key to driving innovation and productivity. Our working
                model is built around agile principles. Teams are empowered to
                move quickly, adapt to changing needs, and continuously improve
                processes. With regular check-ins, feedback loops, and sprint
                planning, we ensure that we remain responsive to both internal
                and client needs.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // flexWrap: "wrap",
              flex: "1 fr",
            }}
          >
            <div>
              <div className="culture-titles">Co-workers Environment</div>
              <p className="culture-contents">
                At Stacia Corp, we pride ourselves on fostering a positive,
                inclusive, and supportive co-worker environment where everyone
                feels valued and empowered to succeed. Our team is more than
                just colleagues—we are a community of talented individuals
                working together to achieve great things.
              </p>
            </div>
            <div>
              <div className="culture-titles">Open Communication</div>
              <p className="culture-contents">
                Transparent communication is key to our success. We maintain an
                open-door policy that encourages feedback, discussion, and the
                sharing of ideas. This approach ensures that every voice is
                heard and valued, creating a more cohesive team. Our diverse
                workforce brings a wealth of perspectives and experiences,
                enriching our collaborative efforts. We embrace this diversity,
                recognizing that it leads to more creative problem-solving and
                innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default CareerPage;
