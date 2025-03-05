import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCode, FaCogs, FaUsers, FaChartLine, FaShoppingCart, FaMobileAlt, FaCloud, FaDatabase, FaShieldAlt,
  FaBriefcase, FaHeartbeat, FaMusic, FaTruck, FaFilm, FaStore, FaCar, FaShoppingBag, FaHome, FaGraduationCap, FaCoins, FaUserPlus
} from 'react-icons/fa'; // React Icons
import './customesoftware.css'; // Ensure the CSS file name is correct

function CustomSoftwareDevelopment() {
  return (
    <div>
      {/* Block 1: Custom Software Development Section */}
      <div className="custom-software-container">
        {/* Left Side - Text with Background Image */}
        <motion.div
          className="custom-software-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Custom Software Development</h1>
          <p>
            Build tailor-made software solutions designed to scale with your business. From enterprise applications to cloud-based platforms, we ensure innovation, security, and performance.
          </p>
          <div className="custom-software-buttons">
            <Link to="/contact" className="custom-btn primary-btn">Get a Free Consultation</Link>
            <Link to="/portfolio" className="custom-btn secondary-btn">View Our Work</Link>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="custom-software-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="https://www.tekrevol.com/static/a5ffbd1b24de1f74bd9f02db30a2374d/f975e/banner-img.webp"
            alt="Custom Software Development"
          />
        </motion.div>
      </div>

      {/* Block 2: Partner Section */}
      <div className="partner-section-container">
        {/* Left Side - Image */}
        <motion.div
          className="partner-section-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Custom Software Development"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="partner-section-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>Partner Up with the Right Custom Software Development Company</h1>
          <p className="lead-text">
            Choose a reputable partner for your business project – a professional team that understands your needs. Our software development services ensure personalized solutions, including unique software creation, system updates, and safe, scalable integration.
          </p>
          <p className="sub-text">
            Check out our amazing reviews, which demonstrate our commitment to excellence as a top-ranked software development company in the USA.
          </p>
          <div className="partner-section-reviews">
            <div className="review-item">
              <span className="review-rating">4.8</span>
              <span className="review-platform">Average Review Rating on Clutch</span>
            </div>
            <div className="review-item">
              <span className="review-rating">5.0</span>
              <span className="review-platform">Average Review Rating on GoodFirms</span>
            </div>
            <div className="review-item">
              <span className="review-rating">4.8</span>
              <span className="review-platform">Average Review Rating on RightFirms</span>
            </div>
          </div>
          <div className="partner-section-buttons">
            <Link to="/contact" className="partner-btn primary-btn">Get a Free Consultation</Link>
            <Link to="/portfolio" className="partner-btn secondary-btn">View Our Work</Link>
          </div>
        </motion.div>
      </div>

        {/* Block 3: Premium Services Section */}
<div className="premium-services-container">
  <div className="premium-services-content">
    <h2>Our Services</h2>
    <p className="premium-services-subtitle">
      We provide a wide range of custom software solutions tailored to your business needs.
    </p>
    <div className="premium-services-grid">
      {/* Service 1: Custom Software Development */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaCode size={40} color="#00a8ff" />
        </div>
        <h3>Custom Software Development</h3>
        <p>
          Tailor-made software solutions designed to meet your unique business requirements.
        </p>
      </motion.div>

      {/* Service 2: ERP Solution */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaCogs size={40} color="#00a8ff" />
        </div>
        <h3>ERP Solution</h3>
        <p>
          Streamline your business processes with our enterprise resource planning solutions.
        </p>
      </motion.div>

      {/* Service 3: CRM Solution */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaUsers size={40} color="#00a8ff" />
        </div>
        <h3>CRM Solution</h3>
        <p>
          Manage customer relationships effectively with our CRM software solutions.
        </p>
      </motion.div>

      {/* Service 4: CMS Solution */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaChartLine size={40} color="#00a8ff" />
        </div>
        <h3>CMS Solution</h3>
        <p>
          Create, manage, and optimize content with our content management systems.
        </p>
      </motion.div>

      {/* Service 5: Point of Sale */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaShoppingCart size={40} color="#00a8ff" />
        </div>
        <h3>Point of Sale</h3>
        <p>
          Simplify transactions and inventory management with our POS solutions.
        </p>
      </motion.div>

      {/* Service 6: Mobile App Development */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaMobileAlt size={40} color="#00a8ff" />
        </div>
        <h3>Consulting Services</h3>
        <p>
        We evaluate your business needs, design software solutions, and help you maximize development value
        </p>
      </motion.div>

      {/* Service 7: Cloud Solutions */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaCloud size={40} color="#00a8ff" />
        </div>
        <h3>Cloud Solutions</h3>
        <p>
          Leverage the power of cloud computing for scalable and secure solutions.
        </p>
      </motion.div>

      {/* Service 8: Database Management */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaDatabase size={40} color="#00a8ff" />
        </div>
        <h3>Database Management</h3>
        <p>
          Efficiently manage and optimize your databases for better performance.
        </p>
      </motion.div>

      {/* Service 9: Security Solutions */}
      <motion.div
        className="premium-service-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="premium-service-icon">
          <FaShieldAlt size={40} color="#00a8ff" />
        </div>
        <h3>Security Solutions</h3>
        <p>
          Protect your data and systems with our advanced security solutions.
        </p>
      </motion.div>
          </div>
        </div>
      </div>

      {/* Block 4: Industries Section */}
      <div className="industries-section-container">
        <div className="industries-section-content">
          <h2>Our Custom Software Development Services Across Various Industries</h2>
          <p className="industries-section-subtitle">
            We excel at developing versatile software solutions by combining the latest technologies and new ways to meet the specific needs of numerous industries. Our solutions are perfectly aligned with your business goals, providing efficient software solutions for long-term success across a wide range of industries.
          </p>
          <div className="industries-grid">
            {/* Industry 1: Business & Corporate */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaBriefcase size={40} color="#00a8ff" />
              </div>
              <h3>Business & Corporate</h3>
              <p>
                Tailored software solutions for businesses to streamline operations and enhance productivity.
              </p>
            </motion.div>

            {/* Industry 2: Healthcare */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaHeartbeat size={40} color="#00a8ff" />
              </div>
              <h3>Healthcare</h3>
              <p>
                Innovative software solutions for healthcare providers to improve patient care and management.
              </p>
            </motion.div>

            {/* Industry 3: Music */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaMusic size={40} color="#00a8ff" />
              </div>
              <h3>Music</h3>
              <p>
                Custom software for music production, distribution, and management.
              </p>
            </motion.div>

            {/* Industry 4: Logistics */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaTruck size={40} color="#00a8ff" />
              </div>
              <h3>Logistics</h3>
              <p>
                Efficient logistics software for supply chain management and tracking.
              </p>
            </motion.div>

            {/* Industry 5: Entertainment */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaFilm size={40} color="#00a8ff" />
              </div>
              <h3>Entertainment</h3>
              <p>
                Software solutions for the entertainment industry to manage content and engage audiences.
              </p>
            </motion.div>

            {/* Industry 6: Retail */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaStore size={40} color="#00a8ff" />
              </div>
              <h3>Retail</h3>
              <p>
                Custom retail software for inventory management, sales, and customer engagement.
              </p>
            </motion.div>

            {/* Industry 7: Automotive */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaCar size={40} color="#00a8ff" />
              </div>
              <h3>Automotive</h3>
              <p>
                Software solutions for automotive businesses to optimize operations and customer service.
              </p>
            </motion.div>

            {/* Industry 8: E-commerce */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaShoppingBag size={40} color="#00a8ff" />
              </div>
              <h3>E-commerce</h3>
              <p>
                Custom e-commerce platforms for seamless online shopping experiences.
              </p>
            </motion.div>

            {/* Industry 9: Real Estate */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaHome size={40} color="#00a8ff" />
              </div>
              <h3>Real Estate</h3>
              <p>
                Software solutions for real estate management, listings, and transactions.
              </p>
            </motion.div>

            {/* Industry 10: Education */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaGraduationCap size={40} color="#00a8ff" />
              </div>
              <h3>Education</h3>
              <p>
                Custom software for educational institutions to manage students, courses, and resources.
              </p>
            </motion.div>

            {/* Industry 11: Fintech */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaCoins size={40} color="#00a8ff" />
              </div>
              <h3>Fintech</h3>
              <p>
                Innovative fintech solutions for banking, payments, and financial management.
              </p>
            </motion.div>

            {/* Industry 12: IT Staff Augmentation */}
            <motion.div
              className="industry-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="industry-icon">
                <FaUserPlus size={40} color="#00a8ff" />
              </div>
              <h3>IT Staff Augmentation</h3>
              <p>
                Enhance your IT team with our skilled professionals for seamless project execution.
              </p>
            </motion.div>
          </div>
        </div>
      </div>


      <div className="unique-whychoose-container flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-gray-100 rounded-2xl shadow-lg">
  {/* Left Side - Text Content */}
  <motion.div
    className="unique-whychoose-content w-full md:w-1/2 space-y-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="unique-whychoose-title text-3xl md:text-4xl font-bold text-gray-800">
      Why Choose Us as Your Custom Software Development Company?
    </h2>
    <p className="unique-whychoose-description text-gray-600 text-lg">
      Partnering with us means working with industry experts dedicated to turning ideas into successful projects. Our <strong>expertise and experience</strong> ensure skilled developers deliver smooth, efficient solutions. We prioritize <strong>communication</strong> through agile methods and real-time collaboration, keeping you informed every step of the way. Our solutions are built for <strong>scalability</strong>, offering adaptable, cloud-based systems that grow with your business. Additionally, we focus on <strong>cost-effectiveness</strong>, providing optimized coding that ensures high-quality results within your budget.
    </p>

    {/* Call-to-Action Button */}
    <motion.button
      className="unique-whychoose-button bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    >
      Book A Free Consultation Now!
    </motion.button>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    className="unique-whychoose-image w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src="https://www.tekrevol.com/static/53081df52b072b7f257434a74b39e28e/99914/Why-Choose.webp"
      alt="Why Choose Us"
      className="unique-whychoose-img w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
    />
  </motion.div>
</div>
    </div>
  );
}

export default CustomSoftwareDevelopment;