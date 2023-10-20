import React from "react";
import { useState } from "react";
import { allJobs } from "../data/JobsData";

function CareerComponent() {
  const [Jobs] = useState(allJobs);
  // console.log(Jobs);
  //console.log(allJobs);
  return (
    <div>
      <div className="opportunities-container">
        <div
          style={{
            textAlign: "center",
          }}
          className="career-headings"
        >
          Opportunities
        </div>
        <div className="line-style" />
        {Jobs.map((eachJob, index) => {
          // console.log(eachJob);
          const { jobName } = eachJob;
          console.log(jobName, "job name");
          return (
            <div key={index}>
              <div className="opportunity-items">
                <div className="opportunity-titles">{jobName}</div>
              </div>
              <div className="line-style" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CareerComponent;
