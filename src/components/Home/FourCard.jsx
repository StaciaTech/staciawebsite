import React from "react";
import p1 from "../../assets/p1.png";

export default function FourCard({ data }) {
  return (
    <div className="four-card">
      <div className="four-pos">{data.pos}</div>
      <a href={data.proId} target="/blank">
        <div className="four-img">
          <img src={data.img} alt="" />
        </div>
      </a>
      <div className="four-para">
        <div className="four-name">{data.name}</div>
        <p>{data.about}</p>
      </div>
    </div>
  );
}
