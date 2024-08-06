import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import Skeleton from "react-loading-skeleton";
import StackCard from "../components/Home/StackCard";
import { useScroll } from "framer-motion";

const StackScroll = () => {
  const proDetails = [
    {
      id: 1,
      background: "linear-gradient(259deg, #003362 -8.27%, #81497B 95.27%)",
    },
    {
      id: 2,
      background: "linear-gradient(259deg, #7AA00C -8.27%, #FCDF00 86.58%)",
    },
    {
      id: 3,
      background: "linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)",
    },
    {
      id: 4,
      background: "linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)",
    },
  ];

  const dispatch = useDispatch();

  const homeData = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const homeProductData = homeData.data.productPSPosition;
  // console.log(homeProductData);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {homeData.isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="stack-scroll" style={{ width: "90%" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li className="card1" id="card_1">
                <div
                  className="card__content"
                  style={{
                    background: proDetails[1 % proDetails.length].background,
                  }}
                >
                  <div className="card-img-box">
                    <div
                      style={{ backgroundColor: "#fff3" }}
                      className="card-img-cover loading"
                    >
                      <Skeleton />
                    </div>
                  </div>
                  <div className="card-content-box">
                    <h1
                      style={{ backgroundColor: "#fff3", borderRadius: "10px" }}
                      className="loading"
                    >
                      <Skeleton count={1} />
                    </h1>
                    <h3
                      style={{ backgroundColor: "#fff3", borderRadius: "10px" }}
                      className="loading"
                    >
                      <Skeleton count={2} />
                    </h3>
                    <div className="content1">
                      <p className="loading">
                        <Skeleton count={2} />
                      </p>
                    </div>
                    <div className="content1">
                      <p className="loading">
                        <Skeleton count={2} />
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="stack-scroll">
            <ul id="cards">
              <div
                style={{
                  display: "flex",
                  columnGap: "8rem",
                  color: "#fff",
                  // marginTop: "1rem",
                  // marginBottom: "3rem",
                  justifyContent: "center",
                  position: "sticky",
                  top: "14%",
                }}
              >
                {homeProductData.map((eachHomeProduct, i) => {
                  // console.log(eachHomeProduct.title);
                  return <div>{eachHomeProduct.title}</div>;
                })}
              </div>
              {homeProductData.map((eachHomeProduct, i) => {
                // console.log(homeProductData);
                const targetScale = 1 - (homeProductData.length - i) * 0.05;
                return (
                  <StackCard
                    eachHomeProduct={eachHomeProduct}
                    key={i}
                    i={i}
                    proDetails={proDetails}
                    range={[i * 0.16, 1]}
                    targetScale={targetScale}
                    progress={scrollYProgress}
                  />
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default StackScroll;
