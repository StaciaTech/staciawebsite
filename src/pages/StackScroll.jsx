import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/slice/productSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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

  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  const homeData = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const homeProductData = homeData.data.productPSPosition;

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
        <div className="stack-scroll">
          <ul id="cards">
            {homeProductData.map((eachHomeProduct, index) => (
              <li className="card" id="card_1" key={index}>
                <div
                  className="card__content"
                  style={{
                    background:
                      proDetails[index % proDetails.length].background,
                  }}
                >
                  <div className="card-img-box">
                    <div className="card-img-cover">
                      <img src={eachHomeProduct.image} alt="" />
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
                      onClick={() =>
                        navigateTo(`/product/${eachHomeProduct._id}`)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      Learn more
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default StackScroll;
