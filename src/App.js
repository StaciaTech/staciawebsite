import "./App.css";
import { Routes, Route } from "react-router-dom";
import CareerPage from "./pages/CareerPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import WhatsNewPage from "./pages/WhatsNewPage";
import ResourcePage from "./pages/ResourcePage";
import SingleProduct from "./components/Product/SingleProduct";
import StackingAndResizingCards from "./components/Home/ImageSlider";
import CaseStudy from "./pages/CaseStudy";
import CaseTechnology from "./components/CaseStudy/CaseTechnology";
// import Box1 from "./pages/Box1";
import SpecificService from "./components/Services/SpecificService";
import ArticlesPage from "./pages/ArticlesPage";
// import StackScroll from "./pages/StackScroll";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* Lwdnkjgkufefkl */}
      {/* <StackScroll /> */}
      {/* <Box1 /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:title/:id" element={<SpecificService />} />
        <Route path="/whatsnew" element={<WhatsNewPage />} />
        <Route path="/article" element={<ArticlesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from 'react';
// import ImageSlider from './components/Home/ImageSlider';
// import p1 from "../src/assets/baling.png"
// import p2 from "../src/assets/speaker.png"
// import p3 from "../src/assets/spinach.png"

// function App() {
//   const images = [ p1,p2, p3 ];
//   const textItems = [
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque exercitationem quae animi saepe, libero, laudantium tenetur odio corrupti eos distinctio excepturi nesciunt recusandae reiciendis qui autem a reprehenderit commodi?',
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque exercitationem quae animi saepe, libero, laudantium tenetur odio corrupti eos distinctio excepturi nesciunt recusandae reiciendis qui autem a reprehenderit commodi?',
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eaque exercitationem quae animi saepe, libero, laudantium tenetur odio corrupti eos distinctio excepturi nesciunt recusandae reiciendis qui autem a reprehenderit commodi?',

//   ];
//   const slideInterval = 3000;

//   return (
//     <div className="App">
//       <h1>Image Slider with Text</h1>
//       <ImageSlider images={images} textItems={textItems} slideInterval={slideInterval} />
//     </div>
//   );
// }

// export default App;
