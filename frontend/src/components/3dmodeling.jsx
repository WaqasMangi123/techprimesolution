// src/components/3dmodeling.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaHeadphones, FaGamepad, FaBox, FaMobileAlt, FaLaptop, FaIndustry } from 'react-icons/fa';
import './3dmodeling.css';

function ThreeDModeling() {
  return (
    <div>
      {/* Block 1: Full Page Image */}
      <div className="three-d-modeling-block1">
        <img
          src="/3Dmodelingblock1.jpg" // Replace with the actual path to your image
          alt="3D Modeling"
          className="three-d-modeling-image"
        />
      </div>

      {/* Block 2: Text and Button with Framer Motion */}
      <div className="three-d-modeling-block2">
        <div className="content-container">
          {/* Left Side: Heading, Text, and Button */}
          <motion.div
            className="content-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="block2-heading">Unlock the Power of 3D Modeling</h2>
            <p className="block2-description">
              Our cutting-edge 3D modeling services transform your concepts into
              lifelike digital creations. Whether it's for gaming, product
              design, or architecture, we deliver precision, creativity, and
              innovation.
            </p>
            <motion.button
              className="block2-button"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="content-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual path to image
              alt="3D Modeling"
              className="block2-image"
            />
          </motion.div>
        </div>
      </div>

      {/* Block 3: 3D Modeling Services */}
      <div className="three-d-modeling-block3">
        <h2 className="block3-heading">Our 3D Modeling Services</h2>
        <p className="block3-description">
          Our 3D modeling studio builds any assets and customizes them to your needs. We deal with projects of any complexity and deliver them in the shortest time frames without trading quality for speed. Whether you need pre-rendered or real-time models, a realistic or low-poly style — our technical artists handle everything.
        </p>

        <div className="block3-services-container">
          <motion.div
            className="block3-service-metaverses"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaCube className="block3-service-icon" />
            <h3 className="block3-service-title">3D Modeling for Metaverses</h3>
            <p className="block3-service-description">Design immersive, interactive environments for virtual worlds.</p>
          </motion.div>

          <motion.div
            className="block3-service-character"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaHeadphones className="block3-service-icon" />
            <h3 className="block3-service-title">3D Character Modeling</h3>
            <p className="block3-service-description">Bring characters to life with high-quality modeling for games and animations.</p>
          </motion.div>

          <motion.div
            className="block3-service-games"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaGamepad className="block3-service-icon" />
            <h3 className="block3-service-title">3D Modeling for Games</h3>
            <p className="block3-service-description">Create realistic or stylized models for games and simulations.</p>
          </motion.div>

          <motion.div
            className="block3-service-environment"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaBox className="block3-service-icon" />
            <h3 className="block3-service-title">3D Environment Modeling</h3>
            <p className="block3-service-description">Design detailed environments for visualizations and virtual experiences.</p>
          </motion.div>

          <motion.div
            className="block3-service-arvr"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaMobileAlt className="block3-service-icon" />
            <h3 className="block3-service-title">AR/VR Modeling</h3>
            <p className="block3-service-description">Develop assets optimized for Augmented and Virtual Reality experiences.</p>
          </motion.div>

          <motion.div
            className="block3-service-digital-twin"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaLaptop className="block3-service-icon" />
            <h3 className="block3-service-title">Digital Twin Modeling</h3>
            <p className="block3-service-description">Replicate physical assets into digital twins for simulations and analytics.</p>
          </motion.div>

          <motion.div
            className="block3-service-product"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaIndustry className="block3-service-icon" />
            <h3 className="block3-service-title">3D Product Modeling</h3>
            <p className="block3-service-description">Create high-fidelity product models for marketing, prototypes, and production.</p>
          </motion.div>
        </div>
      </div>

      {/* Block 4: Why Choose Us for 3D Modeling */}
      <div className="unique-why-choose-us">
        <h2 className="unique-title">Why Choose Us for 3D Modeling</h2>
        <p className="unique-intro">
          Our team has all the resources necessary for the fast turnaround of 3D models and handling even the most complex modeling tasks.
        </p>

        <div className="unique-advantages-container">
          <motion.div
            className="unique-advantage"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3>Unrivaled 3D Experience</h3>
            <p>
              Our deep expertise in 3D modeling supported by a strong portfolio allows us to ensure exclusively premium quality.
            </p>
          </motion.div>

          <motion.div
            className="unique-advantage"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3>We Put Your Needs First</h3>
            <p>
              Focusing on flexibility and cooperation, we always go the extra mile to accommodate your needs, especially when it comes to distributing time and resources.
            </p>
          </motion.div>

          <motion.div
            className="unique-advantage"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3>All the Specialists You Need</h3>
            <p>
              In addition to our strong selection of modelers, we have plenty of other specialists — 2D artists, animators, VFX specialists, tech artists, etc.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Block 5: Technology Expertise */}
      <div className="unique-technology-expertise">
        <h2 className="unique-technology-heading">Our Technology Expertise in 3D</h2>
        <p className="unique-technology-intro">
          We leverage the latest tools and technologies to deliver exceptional 3D modeling solutions tailored to your needs.
        </p>

        <div className="unique-technology-grid">
          {[
            "3ds Max",
            "Maya",
            "ZBrush",
            "Substance Painter",
            "Blender",
            "Houdini",
            "Cinema 4D",
            "Marmoset",
            "RizomUV",
            "Nuke",
            "Fusion Software",
            "Unity",
            "Unreal Engine",
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="unique-technology-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{tech}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThreeDModeling;