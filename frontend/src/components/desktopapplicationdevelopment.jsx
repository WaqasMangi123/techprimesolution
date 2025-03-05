import React, { useEffect } from "react";
import { FaDesktop, FaCode, FaShieldAlt, FaSync, FaCloud, FaUsers, FaReact, FaNodeJs, FaJava, FaPython, FaWindows, FaApple, FaLinux } from "react-icons/fa"; // Import icons for Block 3 and Block 4
import "./desktopapplication.css"; // Ensure you have the corresponding CSS file
import { motion } from "framer-motion"; 
function DesktopApplicationDevelopment() {
  useEffect(() => {
    // Function to check the visibility of the content block
    const checkVisibility = () => {
      const contentBlock = document.querySelector(".desktopapp-content-block");
      const rect = contentBlock.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        contentBlock.classList.add("show");
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  // Services data for Block 3
  const services = [
    {
      icon: <FaDesktop className="service-icon" />,
      title: "Custom Desktop Applications",
      description: "Tailored desktop solutions for Windows, macOS, and Linux, designed to meet your specific business requirements.",
    },
    {
      icon: <FaCode className="service-icon" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. We create applications that run seamlessly across multiple operating systems.",
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: "Secure Applications",
      description: "Robust security features, including encryption and secure coding practices, to protect your data.",
    },
    {
      icon: <FaSync className="service-icon" />,
      title: "Scalable Solutions",
      description: "Applications designed to grow with your business, ensuring long-term performance and reliability.",
    },
    {
      icon: <FaCloud className="service-icon" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services for enhanced functionality and data accessibility.",
    },
    {
      icon: <FaUsers className="service-icon" />,
      title: "User-Centric Design",
      description: "Intuitive and user-friendly interfaces that enhance productivity and user satisfaction.",
    },
  ];

  // Technologies data for Block 4
  const technologies = [
    {
      icon: <FaReact className="tech-icon" />,
      name: "React",
      description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS.",
    },
    {
      icon: <FaNodeJs className="tech-icon" />,
      name: "Node.js",
      description: "Powerful runtime for building scalable and efficient desktop applications.",
    },
    {
      icon: <FaJava className="tech-icon" />,
      name: "Java",
      description: "Platform-independent desktop apps with Java Swing or JavaFX.",
    },
    {
      icon: <FaPython className="tech-icon" />,
      name: "Python",
      description: "Rapid development of desktop apps with frameworks like PyQt or Tkinter.",
    },
    {
      icon: <FaWindows className="tech-icon" />,
      name: "Windows",
      description: "Native development for Windows using UWP or WinForms.",
    },
    {
      icon: <FaApple className="tech-icon" />,
      name: "macOS",
      description: "Native development for macOS using Swift or Objective-C.",
    },
    {
      icon: <FaLinux className="tech-icon" />,
      name: "Linux",
      description: "Open-source platform for building Linux desktop applications.",
    },
    {
      icon: <FaCode className="tech-icon" />, // Added C#/.NET
      name: "C#/.NET",
      description: "Powerful language and framework for building Windows desktop applications.",
    },
  ];

  return (
    <div className="desktopapp-container">
      {/* Block 1 - Full-Screen Image */}
      <div className="desktopapp-image-block">
        <img
          src="/desktopblock1.jpg"
          alt="Desktop Application Development"
          className="desktopapp-image"
        />
      </div>

      {/* Block 2 - Image Left, Text Right */}
      <div className="desktopapp-content-block">
        {/* Left Side - Image */}
        <div className="desktopapp-content-image">
          <img
            src="https://images.unsplash.com/photo-1549921296-bc643ead1e65?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Desktop App Development Process"
            className="desktopapp-image-responsive"
          />
        </div>

        {/* Right Side - Text */}
        <div className="desktopapp-text-block">
          <h2 className="desktopapp-heading">Desktop Application Development</h2>
          <h3 className="desktopapp-subheading">Efficient, Scalable & Secure Solutions</h3>
          <p className="desktopapp-description">
            We build high-performance desktop applications tailored to your business needs. Whether it's a Windows, macOS, or cross-platform solution, our expert developers ensure a smooth, user-friendly experience with cutting-edge technology. Our applications are designed with scalability in mind, allowing your business to grow without limitations. We prioritize security, ensuring that your data is protected through robust encryption methods and secure coding practices. By leveraging modern frameworks and development tools, we deliver applications that are both innovative and reliable, enabling your team to work more efficiently. With a focus on seamless integration, we ensure that your desktop solutions work flawlessly with your existing systems and workflows.
          </p>
          <button className="desktopapp-button">Get Started</button>
        </div>
      </div>

      {/* Block 3 - Desktop Development Services We Provide */}
      <div className="desktopapp-services-block">
        <h2 className="services-heading">Desktop Development Services We Provide</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Block 4 - Technologies Section */}
      <div className="desktopapp-tech-block">
        <h2 className="tech-heading">Technologies We Use</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon-container">{tech.icon}</div>
              <h3 className="tech-title">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

     {/* Block 5 - Middleware for Desktop Application Integration */}
<div className="desktopapp-middleware-block">
  {/* Left Side - Text */}
  <motion.div
    className="desktopapp-middleware-text"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h2 className="middleware-heading">Middleware for Desktop Application Integration</h2>
    <p className="middleware-description">
      Techprime team has some of the best experts experienced in creating the custom middleware for the application to application integration and integration of the web-based application with the desktop solutions. Techprime combines the deep OS architecture knowledge and skills required to leverage all advantages of the desktop applications for your business. Our software engineering team has the experience to create the custom middleware that solves the most complex challenges of the enterprise IT infrastructure related to the data and workflows sharing across different systems.
    </p>
    <button className="middleware-button">Talk to Expert</button>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    className="desktopapp-middleware-image"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <img
      src="https://www.weenggs.com/wp-content/uploads/2019/02/kisspng-computer-programming-software-developer-software-e-internet-computer-technology-5a6acebec12a92.3136952715169491827912.png"
      alt="Middleware for Desktop Application Integration"
      className="middleware-image"
    />
  </motion.div>
</div>
    </div>
  );
}

export default DesktopApplicationDevelopment;