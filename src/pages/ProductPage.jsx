import { React, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../../src/styles/Product.css";
// import onedrilleft from "../assets/onedrilleft.png";
// import onedrilright from "../assets/onedrilright.png";
// import onedrilup from "../assets/onedrilup.png";
// import chililanding from "../assets/chililanding.png";
// import slicing from "../assets/slicing.png";
// import spinach from "../assets/spinach.png";
// import baling from "../assets/baling.png";
// import child from "../assets/child.png";
// import speaker from "../assets/speaker.png";
// import stove from "../assets/stove.png";
// import ProductComponent1 from "../components/Product/ProductComponent1";
import ProductComponent2 from "../components/Product/ProductComponent2";
import { Link } from "react-router-dom";
import MobileFooter from "../components/MobileFooter";
import MobileProduct from "../components/Product/MobileProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
// import { styled } from "styled-components";
import SideBar from "../components/SideBar";
import LoadingStar from "../components/LoadingStar";
import Star from "../components/Star";

const productBg = [
  "#F0F3FD",
  "#EAEFFC",
  "#E5EAFA",
  "#E0E5F8",
  "#DBE1F7",
  "#D5DCF5",
  "#D0D7F3",
];

function ProductPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // console.log(data.isLoading);

  // console.log("re-rendred");

  const proData = data.data.productBasedPosition;
  console.log(data.data);
  return (
    <>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div>
        {data.isLoading ? (
          <div>
            <LoadingStar />
          </div>
        ) : (
          <>
            <div className="product_container">
              <div className="product_section p-section">
                <div className="product_text">
                  <span>Stacia Corp Products</span>
                  <Star />
                </div>
                <div className="product_description">
                  <p>
                    <div>OverView</div>
                    At Stacia Corp, we develop cutting-edge products that drive
                    innovation across industries. From advanced agricultural
                    machinery to smart home solutions and industrial automation,
                    our products are designed to enhance efficiency,
                    sustainability, and user convenience. Each product is
                    crafted with precision to meet the unique needs of our
                    customers, ensuring quality and performance at every level.
                  </p>
                </div>
              </div>

              <div className="p-section">
                {proData.map((eachProduct, index) => (
                  <div key={index}>
                    {eachProduct.position === 1 && (
                      <div>
                        <div className="p-top">
                          <div className="p-name">{eachProduct.title}</div>
                          <p>{eachProduct.des}</p>
                          <Link
                            to={`/product/${eachProduct._id}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="learn-more-btn"
                          >
                            Learn more
                          </Link>
                        </div>
                        <div className="p-bottom">
                          <div
                            className="p-mask"
                            style={{
                              backgroundImage: `url(${eachProduct.imageUrl})`,
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <div className="product-name">
                              {eachProduct.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                {proData.map((data, index) => {
                  const wordArr = data?.title.split(" ");

                  return (
                    <div
                      style={{ position: "sticky", top: "80px", zIndex: "-1" }}
                    >
                      {data.position !== 1 && (
                        <ProductComponent2
                          bigText1={wordArr[0]}
                          productName={data.title}
                          productImg={data.imageUrl}
                          bigText2={wordArr[1] || wordArr[0]}
                          des={data.des}
                          id={data._id}
                          bgColor={productBg[index % productBg.length]}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <MobileProduct productData={proData} isLoading={data.isLoading} />
          </>
        )}
      </div>
      {/* <div>
        {data.isLoading ? (
          <div>
            <LoadingStar />
          </div>
        ) : (
          <div
            style={{
              position: "sticky",
              top: "80px",
              background: "#fff",
              zIndex: "-1",
            }}
          >
            <div className="">
              <span>Stacia Corp Products</span>
              <Star />
            </div>
            <div className="">
              <p>
                At Stacia Corp, we develop cutting-edge products that drive
                innovation across industries. From advanced agricultural
                machinery to smart home solutions and industrial automation, our
                products are designed to enhance efficiency, sustainability, and
                user convenience. Each product is crafted with precision to meet
                the unique needs of our customers, ensuring quality and
                performance at every level.
              </p>
            </div>
          </div>
        )}
      </div> */}
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProductPage;
