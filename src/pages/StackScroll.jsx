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
    {
      id: 5,
      background: "linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)",
    },
    {
      id: 6,
      background: "linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)",
    },
  ];
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const homeProductData = homeData?.data?.productPSPosition || [];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={containerRef} className="stack-scroll-container">
      <div className="stack-scroll">
        <ul id="cards">
          {homeProductData.map((eachHomeProduct, i) => {
            const targetScale = 1 - (homeProductData.length - i) * 0.05;
            return (
              <StackCard
                key={eachHomeProduct.id}
                eachHomeProduct={eachHomeProduct}
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
    </div>
  );
};
export default StackScroll;
