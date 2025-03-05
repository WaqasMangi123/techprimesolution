import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For dropdown icons
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    setAboutDropdownOpen(!isAboutDropdownOpen);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        </li>

        {/* About Dropdown */}
        <li className="dropdown">
          <div className="dropdown-link" onClick={toggleAboutDropdown}>
            <span>About</span>
            {isAboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`dropdown-menu ${isAboutDropdownOpen ? "mobile-open" : ""}`}>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/foundingmembers" onClick={toggleMobileMenu}>Founding Member</Link>
            </li>
          </ul>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            <Link to="/services" onClick={(e) => e.preventDefault()}>
              <span>Our Services</span>
            </Link>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`dropdown-menu ${isDropdownOpen ? "mobile-open" : ""}`}>
            <li><Link to="/services" onClick={toggleMobileMenu}>All Services</Link></li>
            <li><Link to="/webdevelopment" onClick={toggleMobileMenu}>Web Development</Link></li>
            <li><Link to="/appdevelopment" onClick={toggleMobileMenu}>App Development</Link></li>
            <li><Link to="/desktopapplicationdevelopment" onClick={toggleMobileMenu}>Desktop Application</Link></li>
            <li><Link to="/digitalmarketing" onClick={toggleMobileMenu}>Digital Marketing</Link></li>
            <li><Link to="/3dmodeling" onClick={toggleMobileMenu}>3D Modeling</Link></li>
            <li><Link to="/gamedevelopment" onClick={toggleMobileMenu}>Game Development</Link></li>
            <li><Link to="/machinelearning" onClick={toggleMobileMenu}>Machine Learning Models</Link></li>
            <li><Link to="/graphicdesign" onClick={toggleMobileMenu}>Graphic Design</Link></li>
            <li><Link to="/uiux" onClick={toggleMobileMenu}>UI/UX Design</Link></li>
            <li><Link to="/customesoftwaredevelopment" onClick={toggleMobileMenu}>Custom Software Development</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link>
        </li>
        <li>
          <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link>
        </li>
        <li>
          <Link to="/career" className="career-btn" onClick={toggleMobileMenu}>Career</Link>
        </li>
      </ul>

      {/* Nav Buttons */}
      <div className="nav-buttons">
        <button className="phone-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;