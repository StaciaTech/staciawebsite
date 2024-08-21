import React, { useEffect } from "react";
import arrow from "../../assets/arrow.png";
import activearrow from "../../assets/active-arrow.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchHomeServices } from "../../redux/slice/HomeSlices/homeServiceSlice";
import { fetchServices } from "../../redux/slice/serviceSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ServiceDisplay() {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  const homeServData = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const homeServiceData = homeServData.data.servicePSPosition;

  const [currentSlide, setCurrentSlide] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countRef.current === homeServiceData?.length - 1) {
        countRef.current = 0;
      } else {
        countRef.current += 1;
      }
      setCurrentSlide(countRef.current);
    }, 2000);

    return () => clearInterval(timer);
  }, [homeServiceData]);

  return (
    <>
      {homeServData.isLoading ? (
        <div>
          <div>
            <div className="our-service-display-title">Our Services</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "400px",
                  backgroundColor: "#efefef",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="service-display">
            <div className="our-service-display-title">Our Services</div>
            <div className="service-display1">
              <div className="service-left">
                <div className="service-img-box">
                  <img
                    src={homeServiceData[currentSlide]?.image}
                    alt={homeServiceData[currentSlide]?.title}
                  />
                </div>
              </div>
              <div className="service-right">
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#0D022566",
                    marginBottom: "10px",
                  }}
                ></div>
                {homeServiceData.map((data, i) => (
                  <div className="service-text-box" key={i}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      {homeServiceData[currentSlide].title === data.title ? (
                        <div className="service-text">
                          {homeServiceData[currentSlide].title}
                        </div>
                      ) : (
                        <div className="service-text1">{data.title}</div>
                      )}
                      {homeServiceData[currentSlide].title === data.title ? (
                        <img
                          src={activearrow}
                          alt=""
                          onClick={() =>
                            navigateTo(`/services/${data.title}/${data._id}`)
                          }
                        />
                      ) : (
                        <img
                          src={arrow}
                          alt=""
                          onClick={() =>
                            navigateTo(`/services/${data.title}/${data._id}`)
                          }
                        />
                      )}
                    </div>
                    {homeServiceData[currentSlide].title === data.title ? (
                      <div className="box-line"></div>
                    ) : (
                      <div className="box-line1"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
