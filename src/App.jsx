import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
  {/* Navbar at the top */}
  <Navbar />

  {/* Main content area that grows to fill available space */}
  <div className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>

  
  </div>

  {/* Footer at the bottom */}
  <Footer />
</div>
  );
}

export default App;