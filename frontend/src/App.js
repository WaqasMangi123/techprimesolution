import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Services from "./components/services";
import OurClients from "./components/ourclient";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import WebDevelopment from "./components/webdevelopment";
import AppDevelopment from "./components/appdevelopment";
import DesktopApplicationDevelopment from "./components/desktopapplicationdevelopment";
import MachineLearning from "./components/machinelearning";
import DigitalMarketing from "./components/digitalmarketing";
import GraphicDesign from "./components/graphicdesign"; // Import new page
import ThreeDModeling from "./components/3dmodeling"; // Import new page
import GameDevelopment from "./components/gamedevelopment"; // Import new page
import Blog from "./components/blog"; // Import new page
import CustomSoftwareDevelopment from "./components/customsoftwaredevelopment"; // Import new page
import UIUX from "./components/uiux"; // Import new page
import Career from "./components/career"; // Import new page
import FoundingMember from "./components/foundingmembers"; // Import new page
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourclients" element={<OurClients />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/desktopapplicationdevelopment" element={<DesktopApplicationDevelopment />} />
          <Route path="/machinelearning" element={<MachineLearning />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} /> {/* Add Route for Graphic Design */}
          <Route path="/3dmodeling" element={<ThreeDModeling />} /> {/* Add Route for 3D Modeling */}
          <Route path="/gamedevelopment" element={<GameDevelopment />} /> {/* Add Route for Game Development */}
          <Route path="/blog" element={<Blog />} /> {/* Add Route for Blog */}
          <Route path="/customesoftwaredevelopment" element={<CustomSoftwareDevelopment />} /> {/* Add Route for Custom Software Development */}
          <Route path="/uiux" element={<UIUX />} /> {/* Add Route for UI/UX */}
          <Route path="/career" element={<Career />} /> {/* Add Route for Career */}
          <Route path="/foundingmembers" element={<FoundingMember />} /> {/* Add Route for Founding Member */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
