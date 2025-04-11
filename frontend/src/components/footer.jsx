import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Column 1: Logo and About */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/logo.png" alt="Polar Painting Logo" />
          </div>
          <p className="footer-about">
          TechPrime Solution is a leading provider of innovative technology services, specializing in web development, mobile apps, digital marketing, and custom software solutions. We deliver cutting-edge, tailored solutions to meet diverse business needs
          </p>
          <p>
            <a href="tel:+4162387373" className="footer-phone">
              Call Us: +92 3231559163
            </a>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Our Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/webdevelopment">Web Development</Link>
            </li>
            <li>
              <Link to="/appdevelopment">App Development</Link>
            </li>
            <li>
              <Link to="/desktopapplicationdevelopment">Desktop Application</Link>
            </li>
            <li>
              <Link to="/digitalmarketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/3dmodeling">3D Modeling</Link>
            </li>
            <li>
              <Link to="/gamedevelopment">Game Development</Link>
            </li>
            <li>
              <Link to="/machinelearning">Machine Learning Models</Link>
            </li>
            <li>
              <Link to="/graphicdesign">Graphic Design</Link>
            </li>
            <li>
              <Link to="/uiux">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/customsoftwaredevelopment">Custom Software Development</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Get in Touch */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Contact Information</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i> Islamabad,Pakistan
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@polarpainting.ca">
                info@techprimesolution.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>{" "}
              <a href="tel:+14162387373">+92 3231559163</a>
            </li>
            <li>
              <i className="fas fa-clock"></i> Mon - Sun: 7 AM - 11 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Techprimesolution. All rights
            reserved.
          </p>
          <div className="footer-policies">
            <Link to="/termsandcondition">Terms & Conditions</Link> |{" "}
            <Link to="/termsandcondition">Privacy Policy</Link>
          </div>
          <p>
            Powered by{" "}
            <a
              href="https://techprimesolution-frontend.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              TechPrimeSolution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;