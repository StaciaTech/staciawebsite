import React from "react";
import "../../styles/ReUsableArticle.css";
import { useNavigate } from "react-router-dom";

function ReUsableArticle({ data, path }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="reusable-art-container">
        {data?.map((eachItem, i) => (
          <div key={i} className="reusable-art-card">
            <div className="reusable-art-img-container">
              <img
                src={eachItem.mainImageUrl}
                alt="art-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </div>
            <div className="reusable-art-content-container">
              <div className="reusable-art-title">{eachItem.mainTitle}</div>
              <p className="reusable-art-des">{eachItem.mainDesc}</p>
              <div
                className="reusable-art-know-more pointer"
                onClick={() => {
                  navigate(`${path}/${eachItem._id}`);
                  window.scrollTo(0, 0);
                }}
              >
                Know More
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReUsableArticle;
