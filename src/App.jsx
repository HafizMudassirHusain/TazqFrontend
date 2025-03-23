import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactSupport from "./pages/ContactSupport";
import ProjectDetails from "./pages/ProjectDetails";
import AppDev from "./pages/AppDev";
import ContentWri from "./pages/ContentWri";
import WebDevelopPrice from "./pages/WebDevelopPricing";
import DigitalMarketingPrice from "./pages/digitalMarketingPricing";
import GraphicDesignPrice from "./pages/GraphicDesigningPricing";
import VideosEditingPrice from "./pages/VideoEditingPricing";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black ">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:category" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactSupport />} />
          <Route path="/appdevprice" element={<AppDev />} />
          <Route path="/contentwriterprice" element={<ContentWri />} />
          <Route path="/webdevelopprice" element={<WebDevelopPrice />} />
          <Route path="/digitalmarketprice" element={<DigitalMarketingPrice />} />
          <Route path="/graphicdesignprice" element={<GraphicDesignPrice />} />
          <Route path="/videoeditingprice" element={<VideosEditingPrice />} />

        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
