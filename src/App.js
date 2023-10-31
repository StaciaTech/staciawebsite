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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productName" element={<SingleProduct />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/whatsnew" element={<WhatsNewPage />} />
      </Routes>
    </div>
  );
}

export default App;
