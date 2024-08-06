import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../../styles/Services/SpecificServices.css";
import machine from "../../assets/serviceHeroImg.png";
import WhatWeDoCard from "./WhatWeDoCard";
import AccordionOpen from "../../assets/Expand.png";
import AccordionClose from "../../assets/CloseAccordion.png";
import WhatWeDoAccordion from "./WhatWeDoAccordion";
import MobileFooter from "../MobileFooter";
import { fetchServices } from "../../redux/slice/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar";
import LoadingStar from "../LoadingStar";

const services = [
  {
    feature: true,
    whatWeDo: [
      {
        title: "Ready to Manufacture Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Innovative Machine Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Problem Solving",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "End-of-Arm Tooling",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Designers on Demand",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Concept Development",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
    ],
    img: s1,
    serviceTitle: "Project Documentation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    feature: false,
    whatWeDo: [
      {
        title: "Ready to Manufacture Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Innovative Machine Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Problem Solving",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "End-of-Arm Tooling",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Designers on Demand",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Concept Development",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
    ],
    img: s2,
    serviceTitle: "Machine Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    feature: false,
    whatWeDo: [
      {
        title: "Ready to Manufacture Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Innovative Machine Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Problem Solving",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "End-of-Arm Tooling",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Designers on Demand",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Concept Development",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
    ],
    img: s3,
    serviceTitle: "Cad Modeling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    feature: false,
    whatWeDo: [
      {
        title: "Ready to Manufacture Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Innovative Machine Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Problem Solving",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "End-of-Arm Tooling",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Designers on Demand",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Concept Development",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
    ],
    img: s4,
    serviceTitle: "3D Modeling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    feature: false,
    whatWeDo: [
      {
        title: "Ready to Manufacture Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Innovative Machine Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Problem Solving",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "End-of-Arm Tooling",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Designers on Demand",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
      {
        title: "Concept Development",
        desc: "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
      },
    ],
    img: s5,
    serviceTitle: "Ansys",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
];

export default function SpecificService() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const specificServData = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(fetchServices());
    // setLoading(specificServData.isLoading);
  }, []);

  const servDataEach = specificServData.data.serviceBasedPosition;
  console.log(servDataEach);
  console.log(specificServData.isLoading);

  const { id } = useParams();

  const [accordion, setAccordion] = useState(0);

  return (
    <>
      <NavBar />
      <SideBar />

      {specificServData.isLoading ? (
        <div>
          <LoadingStar />
        </div>
      ) : (
        <div>
          {servDataEach.map(
            (reqObj) =>
              reqObj._id === id && (
                <div>
                  <div className="service-hero-container">
                    <div className="service-hero-section">
                      <div className="service-title">{reqObj.title}</div>
                      <div className="service-section1-content-box">
                        <div className="service-section-left">
                          <div className="service-overview-title">Overview</div>
                          <p>{reqObj.des}</p>
                          <div className="get-a-free-quote">
                            Get a free quote
                          </div>
                        </div>
                        <div className="service-section-right">
                          <div className="service-section-right-imgbox">
                            <img src={reqObj.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="specific-service-section2">
                    <div className="whatwedo">What We Do ?</div>
                    <div className="what-we-do-grid">
                      {/* {thisService.whatWeDo.map((data) => (
            <WhatWeDoCard title={data.title} desc={data.desc} />
          ))} */}
                    </div>
                    <div className="what-we-do-accordion-container">
                      {/* {thisService.whatWeDo.map((data) => (
            <WhatWeDoAccordion title={data.title} desc={data.desc} />
          ))} */}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      )}

      <Footer />
      <MobileFooter />
    </>
  );
}
