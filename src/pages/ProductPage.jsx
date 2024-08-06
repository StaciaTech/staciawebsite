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
      {data.isLoading ? (
        <div>
          <LoadingStar />
        </div>
      ) : (
        <div>
          <div className="product_container">
            <div className="product_section p-section">
              <div className="product_text">Stacia Corp Products</div>
              <div className="product_description">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error consectetur dolores possimus quasi accusantium, suscipit
                  doloribus placeat rerum corrupti. Laudantium illo sunt dolore,
                  similique repellendus blanditiis ex dolorem facere quasi?
                </p>
              </div>
            </div>

            {/* product 1 */}
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
                            backgroundImage: `url(${eachProduct.image})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          {/* <img src={onedrilup} alt=""  /> */}
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
              {proData.map((data, index) => (
                <div style={{ position: "sticky", top: "11%" }}>
                  {data.position !== 1 && (
                    <ProductComponent2
                      bigText1={data.title}
                      productName={data.title}
                      productImg={data.image}
                      bigText2={data.title}
                      des={data.des}
                      id={data._id}
                      bgColor={productBg[index % productBg.length]}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <MobileProduct productData={proData} isLoading={data.isLoading} />
        </div>
      )}
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProductPage;
