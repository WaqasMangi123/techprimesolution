import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaShieldAlt,
  FaPaintBrush,
  FaCode,
  FaServer,
  FaCogs,
  FaCloud,
  FaCheckCircle,
  FaSyncAlt,
  FaRobot,
  FaShoppingCart,
  FaGlobe,
  FaShoppingBag,
  FaMobileAlt,
  FaCubes,
  FaUniversity,
  FaHospital,
  FaBuilding,
  FaCar,
  FaPlane,
  FaHandsHelping,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./webdevelopment.css";

function WebDevelopment() {
  const technologies = [
    { icon: <FaCode />, name: "React" },
    { icon: <FaServer />, name: "Node.js" },
    { icon: <FaCloud />, name: "AWS" },
    { icon: <FaCogs />, name: "Docker" },
    { icon: <FaPaintBrush />, name: "Figma" },
    { icon: <FaRobot />, name: "AI/ML" },
    { icon: <FaSyncAlt />, name: "CI/CD" },
    { icon: <FaShieldAlt />, name: "Cybersecurity" },
  ];

  const domains = [
    { icon: <FaShoppingCart />, name: "eCommerce" },
    { icon: <FaChartLine />, name: "Fintech" },
    { icon: <FaHospital />, name: "Healthcare" },
    { icon: <FaUniversity />, name: "Education" },
    { icon: <FaGlobe />, name: "Social Networking" },
    { icon: <FaBuilding />, name: "Hospitality" },
    { icon: <FaRocket />, name: "Entertainment" },
    { icon: <FaShieldAlt />, name: "Government" },
    { icon: <FaCubes />, name: "Real Estate" },
    { icon: <FaCogs />, name: "Business" },
    { icon: <FaTruck />, name: "Logistics" },
    { icon: <FaLaptopCode />, name: "Tech & IT" },
    { icon: <FaHandsHelping />, name: "Non-Profit" },
    { icon: <FaCar />, name: "Automotive" },
    { icon: <FaPlane />, name: "Travel & Tourism" },
  ];

  return (
    <div className="web-development-container">
      {/* First Block */}
      <div className="image-block full-page">
        <img
          src="/webdevelopmentblock1.jpg"
          alt="Web Development"
          className="full-image"
        />
      </div>

      {/* Second Block */}
      <div className="image-block">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Advanced Web Solutions"
          className="full-image"
        />
        <div className="text-content">
          <h2>
            <FaRocket /> Advanced Web Solutions for <span>Business Growth</span>
          </h2>
          <p>
            At Techprime, we specialize in delivering advanced web solutions that
            drive business growth. Our custom strategies are designed to optimize
            performance, ensure security, and enhance user experience through
            innovative technologies.
          </p>
          <ul className="features-list">
            <li>
              <FaShieldAlt /> Secure and Reliable Platforms
            </li>
            <li>
              <FaLaptopCode /> Scalable and Performant Solutions
            </li>
            <li>
              <FaRocket /> Boosted Engagement with Modern UI/UX
            </li>
          </ul>
        </div>
      </div>

      {/* Third Block - Services Section */}
      <div className="services-container">
        <h2 className="services-heading">Our Web Development Services</h2>
        <p className="services-subheading">
          We provide end-to-end web solutions tailored to your business needs.
        </p>

        <div className="services-grid">
          {/* UI/UX Web Design */}
          <div className="service-card">
            <div className="service-icon">
              <FaPaintBrush />
            </div>
            <h3 className="service-title">UI/UX Web Design</h3>
            <p className="service-description">
              We design captivating interfaces and experiences using tools like
              Figma and Adobe Creative Cloud for increased user stickiness and
              cross-platform consistency. Our designs are pixel-perfect,
              accessible, and optimized for brand consistency.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="service-card">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3 className="service-title">Frontend Development</h3>
            <p className="service-description">
              We build lightning-fast, SEO-friendly user interfaces using modern
              technologies. Our solutions work flawlessly across devices,
              ensuring a smooth user experience and high conversion rates.
            </p>
          </div>

          {/* Backend Development */}
          <div className="service-card">
            <div className="service-icon">
              <FaServer />
            </div>
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              From Node.js to Python, we architect secure and scalable
              server-side solutions. Our backend expertise ensures seamless
              integration, efficient data processing, and robust API
              functionality.
            </p>
          </div>

          {/* Full Stack Development */}
          <div className="service-card">
            <div className="service-icon">
              <FaCogs />
            </div>
            <h3 className="service-title">Full Stack Development</h3>
            <p className="service-description">
              We deliver comprehensive, end-to-end web solutions with dynamic
              capabilities across channels. Our full-stack developers build
              scalable and maintainable applications for a cohesive user
              experience.
            </p>
          </div>

          {/* Cloud Development */}
          <div className="service-card">
            <div className="service-icon">
              <FaCloud />
            </div>
            <h3 className="service-title">Cloud Development</h3>
            <p className="service-description">
              Optimize your web applications for performance, security, and
              scalability with cloud computing solutions. We ensure high
              availability and cost-effectiveness on AWS, Azure, and Google
              Cloud.
            </p>
          </div>

          {/* Web Testing */}
          <div className="service-card">
            <div className="service-icon">
              <FaCheckCircle />
            </div>
            <h3 className="service-title">Web Testing</h3>
            <p className="service-description">
              We thoroughly test and fix bugs across design, code, and other
              components. With a shared staging environment, we ensure
              zero-downtime rollouts and a seamless user experience.
            </p>
          </div>

          {/* Maintenance & Updates */}
          <div className="service-card">
            <div className="service-icon">
              <FaSyncAlt />
            </div>
            <h3 className="service-title">Maintenance & Updates</h3>
            <p className="service-description">
              We provide ongoing support, security patches, and feature upgrades
              to keep your web applications running smoothly and securely.
            </p>
          </div>

          {/* AI Integration */}
          <div className="service-card">
            <div className="service-icon">
              <FaRobot />
            </div>
            <h3 className="service-title">AI Integration</h3>
            <p className="service-description">
              Leverage the power of artificial intelligence to enhance your web
              applications. We integrate AI-driven features like chatbots,
              recommendation engines, and predictive analytics to deliver smarter
              and more personalized user experiences.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="service-card">
            <div className="service-icon">
              <FaShoppingCart />
            </div>
            <h3 className="service-title">E-commerce Solutions</h3>
            <p className="service-description">
              Build robust and scalable e-commerce platforms tailored to your
              business needs. From product management to secure payment gateways,
              we create seamless online shopping experiences that drive sales and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Block - Technologies Section */}
      <motion.div
        className="technologies-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="technologies-heading">Technologies We Use</h2>
        <p className="technologies-subheading">
          We leverage cutting-edge technologies to deliver exceptional web solutions.
        </p>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="technologies-swiper"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="technology-card"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="technology-icon">{tech.icon}</div>
                <h3 className="technology-name">{tech.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Fifth Block - Custom Web Development Services */}
      <motion.div
        className="custom-web-services-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="custom-web-services-heading">
          Custom Web Development Services to Broaden Business Prospects
        </h2>
        <p className="custom-web-services-subheading">
          Experience web development prowess with a team specialized in agile
          project management and delivery. Here are the top web development
          solutions businesses trust us for.
        </p>

        <div className="custom-web-services-grid">
          {/* Websites */}
          <div className="custom-service-card">
            <div className="custom-service-icon">
              <FaGlobe />
            </div>
            <h3 className="custom-service-title">Websites</h3>
            <p className="custom-service-description">
              Create dynamic websites with responsive design and scalable
              architectures. Offer easy navigation with zero latency and generate
              leads.
            </p>
          </div>

          {/* E-Commerce */}
          <div className="custom-service-card">
            <div className="custom-service-icon">
              <FaShoppingBag />
            </div>
            <h3 className="custom-service-title">E-Commerce</h3>
            <p className="custom-service-description">
              Build mobile-first, secure e-commerce platforms with user-focused
              features. Optimize for SERPs, reach customers easily, and scale.
            </p>
          </div>

          {/* Web Applications */}
          <div className="custom-service-card">
            <div className="custom-service-icon">
              <FaMobileAlt />
            </div>
            <h3 className="custom-service-title">Web Applications</h3>
            <p className="custom-service-description">
              Progressive web apps for mobile-like experiences. Compatible,
              interactive products that keep dwell metrics above par across
              devices.
            </p>
          </div>

          {/* Content Management System */}
          <div className="custom-service-card">
            <div className="custom-service-icon">
              <FaCubes />
            </div>
            <h3 className="custom-service-title">Content Management System</h3>
            <p className="custom-service-description">
              Custom, headless CMS for automated content staging and accelerated
              time-to-market using intuitive workflows and personalized
              templates.
            </p>
          </div>
        </div>

        {/* Contact Us Button */}
        <motion.button
          className="contact-us-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discuss Project Scope
        </motion.button>
      </motion.div>

      {/* Sixth Block - Workflow Section */}
      <motion.div
        className="workflow-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="workflow-heading">
          Our Streamlined & Efficient Web Development Workflow
        </h2>
        <p className="workflow-subheading">
          We use a seamless, agile approach to ensure fast delivery and high-quality results. Join the many companies we've empowered with our efficient, result-oriented web development process.
        </p>

        <div className="workflow-steps">
          {/* Step 1 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaRocket />
            </div>
            <div className="step-content">
              <h3 className="step-title">Kick-Off: Project Discovery</h3>
              <p className="step-description">
                In-depth consultation to understand your project goals and define the scope.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaCogs />
            </div>
            <div className="step-content">
              <h3 className="step-title">Tech Stack Selection</h3>
              <p className="step-description">
                Choosing the right tools and technologies that align with your project's needs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaPaintBrush />
            </div>
            <div className="step-content">
              <h3 className="step-title">Design Phase</h3>
              <p className="step-description">
                We craft stunning, user-friendly designs for an exceptional user experience.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaCode />
            </div>
            <div className="step-content">
              <h3 className="step-title">Development</h3>
              <p className="step-description">
                Building out features with the latest technologies and cutting-edge best practices.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaCheckCircle />
            </div>
            <div className="step-content">
              <h3 className="step-title">Quality Assurance</h3>
              <p className="step-description">
                Thorough testing and debugging to ensure a flawless experience.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="workflow-step">
            <div className="step-icon">
              <FaCloud />
            </div>
            <div className="step-content">
              <h3 className="step-title">Launch & Ongoing Support</h3>
              <p className="step-description">
                Deploy your project and provide continuous support as your business grows.
              </p>
            </div>
          </div>
        </div>

        {/* Talk To Our Experts Button */}
        <motion.button
          className="talk-to-experts-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Talk To Our Experts
        </motion.button>
      </motion.div>

      {/* Seventh Block - Domain Diversity Section */}
      <motion.div
        className="domain-diversity-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="domain-diversity-heading">Our Domain Diversity</h2>
        <p className="domain-diversity-subheading">
          We have extensive experience working across a wide range of industries, delivering tailored solutions to meet unique business needs.
        </p>

        <div className="domain-diversity-grid">
          {domains.map((domain, index) => (
            <div className="domain-card" key={index}>
              <div className="domain-icon">{domain.icon}</div>
              <h3 className="domain-name">{domain.name}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default WebDevelopment;