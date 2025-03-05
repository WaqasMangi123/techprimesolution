import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBullhorn, FaUsers, FaChartLine, FaPenFancy, FaEnvelope } from "react-icons/fa";
import "./digitalmarketing.css"; // Ensure this CSS file exists

const services = [
  {
    icon: <FaSearch />, 
    title: "SEO Optimization",
    description: "Enhance visibility with technical SEO audits & performance monitoring for sustainable growth."
  },
  {
    icon: <FaBullhorn />, 
    title: "Search Engine Marketing (SEM)",
    description: "Drive targeted traffic with optimized PPC campaigns, precise keyword bidding & analytics-driven strategies."
  },
  {
    icon: <FaUsers />, 
    title: "Social Media Marketing (SMM)",
    description: "Maximize brand engagement with data-driven campaigns, audience interaction & tailored content."
  },
  {
    icon: <FaChartLine />, 
    title: "Conversion Rate Optimization (CRO)",
    description: "Boost conversions with A/B testing, heatmap analysis & refined user experience strategies."
  },
  {
    icon: <FaPenFancy />, 
    title: "Content Marketing",
    description: "Create high-impact content to drive traffic, enhance brand authority & build customer loyalty."
  },
  {
    icon: <FaEnvelope />, 
    title: "Email Marketing",
    description: "Engage customers with personalized email campaigns & data-driven performance tracking."
  }
];

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-container">
      {/* Block 1 */}
      <div className="digital-marketing">
        <img
          src="/digitalmarketingblock1.jpg"
          alt="Digital Marketing"
          className="digital-marketing-image"
        />
      </div>

      {/* Block 2 */}
      <motion.div
        className="digital-marketing-block2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="digital-marketing-content">
          <img
            src="https://www.notiontechnologies.com/blog/wp-content/uploads/2023/07/digital-marketing-advantages.webp"
            alt="Digital Strategy"
            className="digital-marketing-block2-image"
          />
          <div className="digital-marketing-text">
            <h2>Maximize Engagement with Impactful Digital Marketing</h2>
            <p>
              Our digital marketing agency helps businesses tackle online challenges with strategic engagement, integrated marketing, and compelling branding. We optimize SERPs while crafting brand stories that resonate and drive conversions.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="digital-marketing-button"
            >
              Consult Digital Strategy
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Block 3 - Digital Marketing Services */}
      <motion.h2 
        className="digital-marketing-services-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Elevate Your Digital Presence with Expert Marketing Solutions
      </motion.h2>

      {/* Services Grid */}
      <div className="digital-marketing-services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="digital-marketing-service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="digital-marketing-service-icon">{service.icon}</div>
            <h3 className="digital-marketing-service-title">{service.title}</h3>
            <p className="digital-marketing-service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>

     {/* Block 4 - Side Image and Text */}
<motion.div
  className="digital-marketing-block4"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="digital-marketing-block4-content">
    <div className="digital-marketing-block4-text">
      <h2>Why Do Businesses Need Digital Marketing Services in 2025?</h2>
      <p>
        In 2025, digital marketing is essential as the sector is projected to grow at a 9% CAGR. Search marketing alone accounts for 40.9% of the global market, with a 12.2% CAGR.
      </p>
      <p>
        63% of businesses have already increased their digital marketing budgets. Additionally, 94% of small businesses plan to boost their marketing spending. This upward trend highlights the need for robust digital marketing strategies to stay competitive.
      </p>
     
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="digital-marketing-button"
      >
        Start Your Journey with Us
      </motion.button>
    </div>
    <div className="digital-marketing-block4-image">
      <img
        src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Tailored Marketing Strategy"
        className="digital-marketing-image"
      />
    </div>
  </div>
</motion.div>


 {/* Block 5 - Why Choose Techprime */}
 <motion.div 
        className="techprime-digital-marketing-block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="techprime-heading">Why Choose Techprime as Your Digital Marketing Company?</h2>
        <p className="techprime-description">
          Techprime offers top-tier digital marketing services known for delivering actionable, results-oriented solutions tailored to your unique business needs.
          Our focus is on driving measurable growth, optimizing your digital footprint, and ensuring sustained success across all digital channels.
        </p>
        <div className="techprime-grid">
          <motion.div className="techprime-card" whileHover={{ scale: 1.05 }}>
            <h3>01</h3>
            <h4>Data-Driven Marketing Excellence</h4>
            <p>We leverage advanced analytics to craft strategies focused on optimizing ROI and performance metrics.</p>
          </motion.div>
          <motion.div className="techprime-card" whileHover={{ scale: 1.05 }}>
            <h3>02</h3>
            <h4>Industry-Leading Experts</h4>
            <p>Our specialists bring deep technical expertise across digital marketing for top-tier campaign execution.</p>
          </motion.div>
          <motion.div className="techprime-card" whileHover={{ scale: 1.05 }}>
            <h3>03</h3>
            <h4>Customized Digital Frameworks</h4>
            <p>We design bespoke digital frameworks that precisely align with your objectives and drive targeted, scalable results.</p>
          </motion.div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="techprime-button"
        >
          Explore Our Services
        </motion.button>
      </motion.div>
    
    </div>
  );
};

export default DigitalMarketing;
