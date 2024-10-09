import React from "react";
import "../../styles/Testimonials.css";
import t1 from "../../assets/t1.png";

export default function TestimonialCard({ eachTestimonial }) {
  return (
    <div className="testimonial-card">
      <div className="test-top">
        <div className="test-img">
          <img src={eachTestimonial.image} alt="" />
        </div>
        <div className="test-name">
          <p>{eachTestimonial.name}</p>
        </div>
      </div>
      <div className="test-line"></div>
      <div className="test-bottom">
        <p>{`"${eachTestimonial.text}"`}</p>
      </div>
    </div>
  );
}
