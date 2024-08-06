import React from "react";
import mobileOneDril from "../../assets/mobileOneDril.png";
import { Link } from "react-router-dom";

export default function MobileProductCard({ proName, proImg, proDesc, proId }) {
  return (
    <div className="mobile-product-card" style={{ backgroundColor: "" }}>
      <div className="mb-product-card-title">{proName}</div>
      <div className="mb-pro-img-box">
        <img src={proImg} alt="" />
      </div>
      <div className="pro-head">{proName}</div>

      <div className="pro-para">
        <p>{proDesc}</p>
      </div>

      <Link
        className="mb-pro-read-more"
        to={`/product/${proId}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        Read more
      </Link>
    </div>
  );
}
