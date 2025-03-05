// src/components/graphicdesign.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './graphicdesign.css';
import { Link } from 'react-router-dom'; // For routing to Contact.jsx
import {
  FaPaintBrush,
  FaIdCard,
  FaEnvelope,
  FaTag,
  FaFileAlt,
  FaSign,
  FaImage,
  FaTshirt,
  FaLaptop,
  FaMobileAlt,
  FaAd,
  FaShoppingCart,
  FaMailBulk,
  FaNewspaper,
  FaStore,
  FaBox,
  FaGlobe,
  FaPrint,
  FaStickyNote,
  FaBook,
  FaFilePdf,
  FaClipboardList,
} from 'react-icons/fa';

function GraphicDesign() {
  // Logo & Branding Services
  const logoBrandingServices = [
    { icon: <FaPaintBrush />, title: 'Logo Design', description: 'Unique and memorable logos that represent your brand.' },
    { icon: <FaIdCard />, title: 'Business Card Design', description: 'Professional business cards that leave a lasting impression.' },
    { icon: <FaEnvelope />, title: 'Stationery Design', description: 'Custom stationery designs for a cohesive brand identity.' },
    { icon: <FaTag />, title: 'Label Design', description: 'Eye-catching labels for your products.' },
    { icon: <FaFileAlt />, title: 'Letterhead Design', description: 'Elegant letterheads for official communications.' },
    { icon: <FaSign />, title: 'Signage Design', description: 'Creative signage designs for your business.' },
    { icon: <FaImage />, title: 'Billboard Design', description: 'Large-scale billboard designs to grab attention.' },
    { icon: <FaTshirt />, title: 'Trade Show Booth Design', description: 'Engaging booth designs for trade shows.' },
    { icon: <FaBox />, title: 'Car Wrap Design', description: 'Dynamic car wrap designs for mobile advertising.' },
  ];

  // Web Design Services
  const webDesignServices = [
    { icon: <FaLaptop />, title: 'Web Design', description: 'Custom website designs tailored to your brand.' },
    { icon: <FaGlobe />, title: 'Wordpress Design', description: 'Professional WordPress designs for your blog or website.' },
    { icon: <FaMobileAlt />, title: 'App Design', description: 'User-friendly app designs for seamless experiences.' },
    { icon: <FaAd />, title: 'Banner Ad Design', description: 'Attention-grabbing banner ads for your campaigns.' },
    { icon: <FaShoppingCart />, title: 'Icon Design', description: 'Custom icons for apps, websites, and branding.' },
    { icon: <FaMailBulk />, title: 'Email Marketing Design', description: 'Engaging email designs for your marketing campaigns.' },
    { icon: <FaNewspaper />, title: 'Newsletter Design', description: 'Professional newsletter designs for your audience.' },
    { icon: <FaStore />, title: 'Shopify Design', description: 'Beautiful Shopify store designs for e-commerce.' },
    { icon: <FaBox />, title: 'Landing Page Design', description: 'High-converting landing pages for your campaigns.' },
  ];

  // Print Design Services
  const printDesignServices = [
    { icon: <FaPrint />, title: 'Flyer Design', description: 'Eye-catching flyers for your events and promotions.' },
    { icon: <FaStickyNote />, title: 'Postcard Design', description: 'Creative postcards for direct mail campaigns.' },
    { icon: <FaBook />, title: 'Brochure Design', description: 'Informative brochures for your business.' },
    { icon: <FaImage />, title: 'Poster Design', description: 'Stunning posters for events and advertisements.' },
    { icon: <FaAd />, title: 'Advertisement Design', description: 'Professional ad designs for print media.' },
    { icon: <FaFilePdf />, title: 'Catalogue Design', description: 'Detailed catalogues for showcasing your products.' },
    { icon: <FaEnvelope />, title: 'Envelope Design', description: 'Custom envelope designs for your correspondence.' },
    { icon: <FaNewspaper />, title: 'Magazine Design', description: 'Engaging magazine layouts for your publications.' },
    { icon: <FaClipboardList />, title: 'Menu Design', description: 'Beautiful menu designs for restaurants and cafes.' },
    { icon: <FaNewspaper />, title: 'Newspaper Ad Design', description: 'Effective newspaper ads for your campaigns.' },
    { icon: <FaPrint />, title: 'Print Design', description: 'Custom print designs for any purpose.' },
    { icon: <FaStickyNote />, title: 'Sticker Design', description: 'Fun and creative sticker designs for branding.' },
    { icon: <FaFileAlt />, title: 'Resume Design', description: 'Professional resume designs for job seekers.' },
    { icon: <FaFilePdf />, title: 'Word Template Design', description: 'Custom Word templates for your business needs.' },
  ];

  return (
    <div>
      {/* Block 1: Full Page Image */}
      <div className="unique-block1">
        <img
          src="/graphicdesignblock1page.jpg" // Replace with the actual path to your image
          alt="Graphic Design"
          className="unique-block1-image"
        />
      </div>

      {/* Block 2: Text and Image Section */}
      <div className="unique-block2">
        <div className="unique-block2-container">
          {/* Left Side: Text and Button */}
          <motion.div
            className="unique-block2-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="unique-block2-heading">
              Transform Your Brand with Stunning Graphic Design
            </h2>
            <p className="unique-block2-description">
              Our creative team specializes in crafting visually compelling designs that elevate your brand. From logos and branding to digital illustrations and marketing materials, we bring your vision to life with precision and creativity.
            </p>
            <motion.button
              className="unique-block2-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact" className="unique-block2-button-link">
                Get Started
              </Link>
            </motion.button>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="unique-block2-right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual path to your image
              alt="Graphic Design Services"
              className="unique-block2-image"
            />
          </motion.div>
        </div>
      </div>

      {/* Block 3: Graphic Design Services */}
      <div className="unique-block3">
        <h2 className="unique-block3-heading">Our Graphic Design Services</h2>
        <p className="unique-block3-description">
          We offer a wide range of graphic design services to help your brand stand out. From logos and branding to web design, we’ve got you covered.
        </p>

        {/* Logo & Branding Services */}
        <div className="unique-block3-services">
          <h3 className="unique-block3-subheading">Logo & Branding</h3>
          <div className="unique-block3-grid">
            {logoBrandingServices.map((service, index) => (
              <motion.div
                key={index}
                className="unique-block3-service"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="unique-block3-icon">{service.icon}</div>
                <h4 className="unique-block3-title">{service.title}</h4>
                <p className="unique-block3-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Design Services */}
        <div className="unique-block3-services">
          <h3 className="unique-block3-subheading">Web Design Services</h3>
          <div className="unique-block3-grid">
            {webDesignServices.map((service, index) => (
              <motion.div
                key={index}
                className="unique-block3-service"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="unique-block3-icon">{service.icon}</div>
                <h4 className="unique-block3-title">{service.title}</h4>
                <p className="unique-block3-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Print Design Services */}
        <div className="unique-block3-services">
          <h3 className="unique-block3-subheading">Print Design Services</h3>
          <div className="unique-block3-grid">
            {printDesignServices.map((service, index) => (
              <motion.div
                key={index}
                className="unique-block3-service"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="unique-block3-icon">{service.icon}</div>
                <h4 className="unique-block3-title">{service.title}</h4>
                <p className="unique-block3-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
     
<div className="unique-block4">
  <div className="unique-block4-container">
    {/* Left Side: Text and Button */}
    <motion.div
      className="unique-block4-left"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="unique-block4-heading">
        Get Stunning Designs Within Your Budget
      </h2>
      <p className="unique-block4-description">
        Our creative community delivers exceptional designs tailored to your needs at prices that won’t break the bank. Whether it’s logos, branding, or print designs, we’ve got you covered.
      </p>
      <div className="unique-block4-steps">
        <div className="unique-block4-step">
          <h3 className="unique-block4-step-title">Step 1: Launch Your Project</h3>
          <p className="unique-block4-step-description">
            Share your vision with us by completing a quick creative brief.
          </p>
        </div>
        <div className="unique-block4-step">
          <h3 className="unique-block4-step-title">Step 2: Receive Custom Designs</h3>
          <p className="unique-block4-step-description">
            Get unique designs from talented creators worldwide within hours.
          </p>
        </div>
        <div className="unique-block4-step">
          <h3 className="unique-block4-step-title">Step 3: Choose Your Favorite</h3>
          <p className="unique-block4-step-description">
            Select the design you love and download the final files.
          </p>
        </div>
      </div>
      <motion.button
        className="unique-block4-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/contact" className="unique-block4-button-link">
          Get Started Now
        </Link>
      </motion.button>
    </motion.div>

    {/* Right Side: Image */}
    <motion.div
      className="unique-block4-right"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img
        src="https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual path to your image
        alt="Design Process"
        className="unique-block4-image"
      />
    </motion.div>
  </div>
</div>
    </div>
  );
}

export default GraphicDesign;