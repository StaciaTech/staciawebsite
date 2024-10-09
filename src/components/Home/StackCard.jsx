import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransform, motion } from "framer-motion";
function StackCard({
  eachHomeProduct,
  i,
  proDetails,
  range,
  progress,
  targetScale,
}) {
  const navigateTo = useNavigate();
  const scale = useTransform(progress, range, [1, targetScale]);
  const topPosition = `calc(100% - 90% + ${40 * i}px)`;
  return (
    <motion.li
      style={{
        scale,
        position: "sticky",
        top: topPosition,
      }}
    >
      <div
        className="card__content"
        style={{
          background: proDetails[i % proDetails.length].background,
        }}
      >
        <div className="card-img-box">
          <div className="card-img-cover">
            <img src={eachHomeProduct.imageUrl} alt="" />
          </div>
        </div>
        <div className="card-content-box">
          <h1>{eachHomeProduct.title}</h1>
          <h3>{eachHomeProduct.domainName}</h3>
          <div className="content1">
            <p>{eachHomeProduct.pDes1}</p>
          </div>
          <div className="content1">
            <p>{eachHomeProduct.pDes2}</p>
          </div>
          <div
            className="learn-more"
            onClick={() => {
              navigateTo(`/product/${eachHomeProduct._id}`);
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
          >
            Learn more
          </div>
        </div>
      </div>
    </motion.li>
  );
}
export default StackCard;
