import React from "react";
import { motion } from "framer-motion";
import { 
  FaPalette, 
  FaMobileAlt, 
  FaUsers, 
  FaPencilRuler, 
  FaCode, 
  FaChartLine, 
  FaUniversalAccess,  // New Icon for Accessibility Design
  FaBrush             // New Icon for Design System & Branding
} from "react-icons/fa";

import "./uiux.css";

const UIUX = () => {
  return (
    <>
      {/* Block 1 - Hero Section */}
      <div className="uiux-container">
        <motion.div
          className="uiux-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            UI/UX Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            Crafting intuitive and visually stunning user interfaces that enhance user experiences and drive engagement.
          </motion.p>
        </motion.div>
      </div>

      {/* Block 2 - Why UI/UX Matters */}
      <div className="block-2-wrapper">
        <div className="block-2-container">
          <motion.div
            className="block-2-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2>Why UI/UX Matters?</h2>
            <p>
              A well-designed UI/UX enhances usability, improves accessibility, and increases engagement. Our expert designers craft experiences that are both visually stunning and functionally efficient.
            </p>
            <ul className="block-2-list">
              <li>🔹 Enhanced User Experience</li>
              <li>🔹 Increased Customer Satisfaction</li>
              <li>🔹 Higher Conversion Rates</li>
              <li>🔹 Stronger Brand Identity</li>
            </ul>
            <div className="buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </motion.div>

          <motion.div
            className="block-2-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="UI/UX Process"
            />
          </motion.div>
        </div>
      </div>

     {/* Block 3 - Our UI/UX Services */}
<div className="uiux-services-wrapper">
  <h2 className="uiux-services-title">Our UI/UX Services</h2>
  <div className="uiux-services-container">
    {[
      { icon: <FaPalette />, title: "UI Design", desc: "Modern, clean, and aesthetically appealing designs tailored to your brand." },
      { icon: <FaMobileAlt />, title: "Mobile App Design", desc: "Crafting responsive, user-friendly mobile experiences that keep users engaged." },
      { icon: <FaUsers />, title: "User Research", desc: "Conducting in-depth user analysis to enhance usability and engagement." },
      { icon: <FaPencilRuler />, title: "Prototyping", desc: "Building interactive prototypes to visualize your product before development." },
      { icon: <FaCode />, title: "Front-End Development", desc: "Seamless UI/UX implementation with cutting-edge front-end technologies." },
      { icon: <FaChartLine />, title: "UI/UX Optimization", desc: "Analyzing and improving existing designs to maximize user retention and efficiency." },
      { icon: <FaUniversalAccess />, title: "Accessibility Design", desc: "Designing inclusive experiences to improve usability for all users, including those with disabilities." },
      { icon: <FaBrush />, title: "Design System & Branding", desc: "Creating scalable design systems with reusable UI components and a strong brand identity." }
    ].map((service, index) => (
      <motion.div
        key={index}
        className="uiux-service-card"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </div>
</div>

    </>
  );
};

export default UIUX;
