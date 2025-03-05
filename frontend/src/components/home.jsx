import React from 'react';
import './home.css'; // Import CSS for styling
import { FaCode, FaMobileAlt, FaDesktop, FaJava, FaCube, FaDatabase, FaChartLine, FaSearch, FaRegLightbulb, FaPaintBrush, FaShieldAlt, FaRobot, FaProjectDiagram, FaTools, FaHandsHelping, FaLightbulb, FaPalette, FaRocket } from 'react-icons/fa';
import { DiReact, DiNodejs, DiMongodb, DiPython, DiAngularSimple, DiDjango, DiPostgresql, DiGit, DiSass, DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiNpm, DiGithubBadge } from 'react-icons/di';
import Slider from 'react-slick'; // For services slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description: "We specialize in crafting visually appealing and highly functional websites.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Application Development",
      description: "Our team creates custom applications for web and mobile platforms.",
    },
    {
      icon: <FaDesktop />,
      title: "Desktop Application Development",
      description: "We develop powerful desktop applications that leverage the full capabilities of your computer.",
    },
    {
      icon: <FaJava />,
      title: "Java Application Development",
      description: "We build robust and secure software applications using Java.",
    },
    {
      icon: <FaCube />,
      title: "3D Modelling",
      description: "We create stunning 3D models to help you visualize and showcase designs.",
    },
    {
      icon: <FaDatabase />,
      title: "Web Scraping",
      description: "We automate data extraction from websites to gather valuable market insights.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      description: "Uncover valuable insights hidden in your data through advanced techniques.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Enhance your website’s visibility and rank higher on search engines.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Digital Marketing",
      description: "Our strategies help increase your online visibility, attract targeted audiences, and drive conversions.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Designing",
      description: "Captivate your audience with visually stunning designs, including logos and branding materials.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Solutions",
      description: "We provide robust cybersecurity measures to protect your digital assets.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      description: "Develop intelligent machine learning models that automate tasks and make accurate predictions.",
    }
  ];

  const developmentProcess = [
    {
      icon: <FaProjectDiagram />,
      title: "Proper Planning",
      description: "We start with a detailed plan to ensure your project's success.",
    },
    {
      icon: <FaTools />,
      title: "Development",
      description: "Our team builds your solution with the latest technologies.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Technical Support",
      description: "We provide ongoing support to keep your systems running smoothly.",
    },
    {
      icon: <FaLightbulb />,
      title: "Effective Strategy",
      description: "We craft strategies tailored to your business goals.",
    },
    {
      icon: <FaPalette />,
      title: "Aesthetics Design",
      description: "We focus on creating visually appealing and user-friendly designs.",
    },
    {
      icon: <FaRocket />,
      title: "Launch & Deploy",
      description: "We ensure a seamless launch and deployment of your project.",
    },
  ];

  const technologies = [
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiAngularSimple />, name: "Angular" },
    { icon: <DiDjango />, name: "Django" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiSass />, name: "Sass" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiBootstrap />, name: "Bootstrap" },
    { icon: <DiNpm />, name: "NPM" },
    { icon: <DiGithubBadge />, name: "GitHub" },
  ];

  const serviceSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const techSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* First Block - Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img src="firstblockhomepage.png" alt="Tech Prime Solutions" />
        </div>
        <div className="hero-content">
          <h1>Welcome To Tech Prime Solution</h1>
          <p>
            Tech Prime Solutions is a leading technology solutions provider committed to delivering exceptional results. We specialize in website development, application development, and 3D modeling along with a range of other services. Our team of experts is dedicated to crafting innovative solutions tailored to meet the unique needs of each client.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="hire-us-btn">Hire Us</Link>
            <Link to="/services" className="estimator-btn">View Our Services</Link>
          </div>
        </div>
      </div>

      {/* Second Block - Services Section */}
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <Slider {...serviceSliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Read More</button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Third Block - Unique Additional Section */}
<div className="unique-additional-section">
  <div className="unique-additional-image">
    <img src="thirdblockhomepage.png" alt="Tech Prime Solutions" />
  </div>
  <div className="unique-additional-content">
    <h2>Why Choose Us</h2>
    <p>
      At Tech Prime Solution, we are a leading technology solutions provider committed to delivering exceptional results. We specialize in website development, application development, and 3D modeling, along with a range of other services. We prioritize client satisfaction and believe in building long-lasting relationships based on trust and collaboration. Throughout the project, we maintain open and transparent communication, keeping you informed and involved in the decision-making process. 
    </p>
    <div className="unique-additional-buttons">
            <Link to="/about" className="unique-learn-more-btn">Learn More</Link>
            <Link to="/contact" className="unique-contact-us-btn">Contact Us</Link>
          </div>
  </div>
</div>


      {/* Fourth Block - Development Process Section */}
      <div className="development-process-section">
        <h2 className="section-title">Our Development Process</h2>
        <div className="process-steps">
          {developmentProcess.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fifth Block - Technologies Section */}
      <div className="technologies-section">
        <h2 className="section-title">Technologies We Use</h2>
        <Slider {...techSliderSettings}>
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Sixth Block - Contact Us Section */}
      <div className="contact-us-section">
        <div className="contact-us-content">
          <h2>Contact Us</h2>
          <p>
          Have a question or need further assistance? Our team is here to help! Feel free to get in touch with us for any inquiries, suggestions, or feedback. We're always ready to provide you with the support you need.
          </p>
          <button className="contact-us-btn">Get In Touch</button>
          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="social-icon facebook">
                  <FaFacebook size={30} color="white" />
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="social-icon linkedin">
                  <FaLinkedin size={30} color="white" />
                </div>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="social-icon instagram">
                  <FaInstagram size={30} color="white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;