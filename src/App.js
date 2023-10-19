import "./App.css";
import { Routes, Route } from "react-router-dom";
import CareerPage from "./pages/CareerPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import WhatsNewPage from "./pages/WhatsNewPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/whatsnew" element={<WhatsNewPage />} />
      </Routes>
    </>
  );
}

export default App;
