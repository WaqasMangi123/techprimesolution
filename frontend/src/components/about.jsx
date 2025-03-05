import React from "react";
import { FaBullseye, FaLightbulb, FaBalanceScale } from "react-icons/fa"; // Import React icons
import "./about.css"; // Import CSS for additional styling

const About = () => {
  return (
    <div>
      {/* Full-width Image Section */}
      <div className="full-page-image">
        <img
          src="/aboutusblock1.jpg"
          alt="Tech Prime Solutions"
          className="image"
        />
      </div>

      {/* Second Block with Left Side Image and Right Side Description */}
      <div className="about-us-block">
        <div className="about-us-image">
          <img src="/aboutusblock2.png" alt="Tech Prime" className="about-us-img" />
        </div>
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Tech Prime Solutions is a leading technology solutions provider
            committed to delivering exceptional results. We specialize in website
            development, application development, and 3D modeling, along with a
            range of other services. Our team of skilled professionals is dedicated
            to meeting your unique business needs and providing innovative solutions
            that drive success. With a focus on excellence, reliability, and customer
            satisfaction, we strive to be your trusted partner in the digital world.
          </p>
          <p>
            At Tech Prime Solution, we understand that every business is unique,
            and we take a personalized approach to ensure that our services align
            with your goals and objectives. We pride ourselves on our ability to
            stay up to date with the latest industry trends and technologies, allowing
            us to deliver innovative solutions that keep you ahead of the competition.
          </p>
          <div className="about-us-buttons">
            <button className="hire-us-btn">Hire Us</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Third Block - Additional Section */}
      <div className="extra-section">
        <div className="extra-image">
          <img src="thirdblockhomepage.png" alt="Tech Prime Solutions" />
        </div>
        <div className="extra-content">
          <h2>Why Choose Us</h2>
          <p>
            At Tech Prime Solution, we are a leading technology solutions provider committed to delivering exceptional results. We specialize in website development, application development, and 3D modeling, along with a range of other services. We prioritize client satisfaction and believe in building long-lasting relationships based on trust and collaboration. Throughout the project, we maintain open and transparent communication, keeping you informed and involved in the decision-making process.
          </p>
          <div className="extra-buttons">
            <button className="discover-more-btn">Learn More</button>
            <button className="get-in-touch-btn">Contact Us</button>
          </div>
        </div>
      </div>

      
      <div className="mission-vision-container">
      {/* Section Heading */}
      <div className="mv-heading">
        <h2>Our Mission, Vision & Values</h2>
        <p>
          We are committed to innovation, digital transformation, and excellence in
          technology solutions.
        </p>
      </div>

      {/* Mission, Vision & Values Cards */}
      <div className="mission-vision-values">
        <div className="mv-card">
          <div className="mv-circle red"></div>
          <div className="mv-content">
            <FaBullseye className="mv-icon" />
            <h3 className="always-visible">Mission</h3>
            <p>Deliver innovative and reliable technology solutions.</p>
          </div>
        </div>

        <div className="mv-card">
          <div className="mv-circle blue"></div>
          <div className="mv-content">
            <FaLightbulb className="mv-icon" />
            <h3 className="always-visible">Vision</h3>
            <p>Empowering businesses with digital transformation.</p>
          </div>
        </div>

        <div className="mv-card">
          <div className="mv-circle orange"></div>
          <div className="mv-content">
            <FaBalanceScale className="mv-icon" />
            <h3 className="always-visible">Values</h3>
            <p>Integrity, innovation, and excellence in every solution.</p>
          </div>
        </div>
      </div>
    </div>
   

    </div>
  );
};

export default About;
