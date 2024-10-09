import React from "react";
import "../../styles/Four.css";
import FourCard from "./FourCard";
import p1 from "../../assets/sarabesh.png";
import p2 from "../../assets/lakshman.png";
import p3 from "../../assets/revanth.png";
import p4 from "../../assets/prahalad.png";

const fourData = [
  {
    id: 1,
    pos: "Founder Partner, CEO",
    img: p1,
    name: "Sarabesh Sriram",
    about: `Founder of Stacia Corp, Sastem Global, and Stacia Tech. Expert in mechanical engineering and data science, leading innovations in agriculture and smart homes. His "OneDril" machine revolutionized farming and earned government recognition.`,
  },
  {
    id: 2,
    pos: "Founder Partner, COO",
    img: p2,
    name: "Lakshman PV",
    about:
      "Founder of Stacia Corp and Director at SASTEM Global. Expert in mechanical engineering and business analytics. Leads AI-powered ERP solutions and innovative machinery development for food processing and agriculture sectors.",
  },
  {
    id: 3,
    pos: "Founder Partner, CTO",
    img: p3,
    name: "Revanth S",
    about:
      "Co-founder of Stacia Tech. Specializes in mechanical engineering, software development, and DevOps. Drives ERP systems and digital transformation in manufacturing with a focus on efficient, scalable solutions.",
  },
  {
    id: 4,
    pos: "US Regional Director",
    img: p4,
    name: "Prahlad Saravanapriyan",
    about:
      "Mentor and US Regional Director at StaciaCorp. Expert in robotics, semiconductor systems, and sustainable energy. Founder of FUTURE HQ, educating 1,100+ members on technology. DECA award-winner and Carnatic violinist.",
  },
];

export default function Four() {
  return (
    <div className="four">
      <div className="four2">
        <div className="four-text">Founders</div>
        <div className="four-grid">
          {fourData.map((data, i) => (
            <FourCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
