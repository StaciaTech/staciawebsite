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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SpecificService() {
  const { id } = useParams();
  const navigateTo = useNavigate();
  // console.log(id);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const serviceData = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(fetchServices());
    // setLoading(serviceData.isLoading);
  }, []);

  const servData = serviceData.data.serviceBasedPosition;

  const [singleService, setSingleService] = useState();

  const [accordion, setAccordion] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;

  const FetchEachService = async () => {
    try {
      const res = await axios.get(`${apiUrl}/service/findService/${id}`);
      // console.log(res.data.selectedService);
      setSingleService(res.data.selectedService);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchEachService();
  }, []);

  const RemainingServices = servData?.filter((eachServ) => eachServ._id !== id);

  return (
    <>
      <NavBar />
      <SideBar />

      <div>
        <div className="service-hero-container">
          <div className="service-hero-section">
            <div className="service-title">{singleService?.title}</div>
            <div className="service-section1-content-box">
              <div className="service-section-left">
                <div className="service-overview-title">Overview</div>
                <p>{singleService?.des}</p>
                {/* <div className="get-a-free-quote">Get a free quote</div> */}
              </div>
              <div className="service-section-right">
                <div className="service-section-right-imgbox">
                  {/* <img src={singleService?.image} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="specific-service-section2">
          <div className="whatwedo">What We Do ?</div>
          <div className="what-we-do-grid">
            {singleService?.form.map((data, i) => (
              <WhatWeDoCard
                key={i}
                title={data?.heading}
                desc={data?.description}
              />
            ))}
          </div>
          <div className="what-we-do-accordion-container">
            {singleService?.form.map((data, i) => (
              <WhatWeDoAccordion
                key={i}
                title={data?.heading}
                desc={data?.description}
              />
            ))}
          </div>
        </div>
      </div>
      <>
        <div className="remaining-products-card-container-holder">
          <div>Other Products</div>
          <div className="remaining-products-card-container">
            {RemainingServices?.map((eachPro, i) => (
              <>
                {i < 6 && (
                  // <div key={i}>
                  <div className="single-product-card" key={i}>
                    <div
                      // style={{ width: "100%", height: "20rem" }}
                      className="single-product-card-img-container pointer"
                      onClick={() => {
                        navigateTo(`/product/${eachPro._id}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img
                        src={eachPro.imageUrl}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="single-product-card-title pointer"
                      onClick={() => {
                        navigateTo(`/product/${eachPro._id}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {eachPro.title}
                    </div>
                    <p className="single-product-card-des">{eachPro.des}</p>
                  </div>
                  // </div>
                )}
              </>
            ))}
          </div>
        </div>
      </>
      <Footer />
      <MobileFooter />
    </>
  );
}
