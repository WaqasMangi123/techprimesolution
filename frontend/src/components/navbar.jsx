import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const isDropdownOpen = (menu) => activeDropdown === menu;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src="logo.png" alt="Company Logo" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>

            {/* About Dropdown */}
            <li 
              className={`nav-item ${isDropdownOpen('about') ? 'active' : ''}`}
              onMouseEnter={() => handleDropdown('about')}
              onMouseLeave={() => handleDropdown('about')}
            >
              <div className="dropdown-trigger">
                <span className="nav-link">About</span>
                {isDropdownOpen('about') ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <ul className="dropdown-menu">
                <li><Link to="/about" className="dropdown-link">About Us</Link></li>
                <li><Link to="/foundingmembers" className="dropdown-link">Founding Members</Link></li>
              </ul>
            </li>

            {/* Services Mega Dropdown */}
            <li 
              className={`nav-item ${isDropdownOpen('services') ? 'active' : ''}`}
              onMouseEnter={() => handleDropdown('services')}
              onMouseLeave={() => handleDropdown('services')}
            >
              <div className="dropdown-trigger">
                <Link to="/services" className="nav-link">
                  <span>Our Services</span>
                </Link>
                {isDropdownOpen('services') ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Development</h4>
                    <ul>
                      <li><Link to="/webdevelopment" className="dropdown-link">Web Development</Link></li>
                      <li><Link to="/appdevelopment" className="dropdown-link">App Development</Link></li>
                      <li><Link to="/desktopapplicationdevelopment" className="dropdown-link">Desktop Applications</Link></li>
                      <li><Link to="/customsoftwaredevelopment" className="dropdown-link">Custom Software</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Design</h4>
                    <ul>
                      <li><Link to="/uiux" className="dropdown-link">UI/UX Design</Link></li>
                      <li><Link to="/graphicdesign" className="dropdown-link">Graphic Design</Link></li>
                      <li><Link to="/3dmodeling" className="dropdown-link">3D Modeling</Link></li>
                    </ul>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Advanced Services</h4>
                    <ul>
                      <li><Link to="/digitalmarketing" className="dropdown-link">Digital Marketing</Link></li>
                      <li><Link to="/machinelearning" className="dropdown-link">Machine Learning</Link></li>
                      <li><Link to="/gamedevelopment" className="dropdown-link">Game Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/career" className="career-btn">Career</Link>
            <Link to="/contact" className="contact-btn">Get a Quote</Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} 
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" className="mobile-nav-link">Home</Link>
          </li>

          {/* About Dropdown */}
          <li className="mobile-dropdown">
            <div 
              className="mobile-dropdown-trigger" 
              onClick={() => handleDropdown('mobile-about')}
            >
              <span>About</span>
              {isDropdownOpen('mobile-about') ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <ul className={`mobile-dropdown-menu ${isDropdownOpen('mobile-about') ? "open" : ""}`}>
              <li><Link to="/about" className="mobile-dropdown-link">About Us</Link></li>
              <li><Link to="/foundingmembers" className="mobile-dropdown-link">Founding Members</Link></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="mobile-dropdown">
            <div 
              className="mobile-dropdown-trigger" 
              onClick={() => handleDropdown('mobile-services')}
            >
              <span>Our Services</span>
              {isDropdownOpen('mobile-services') ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <ul className={`mobile-dropdown-menu ${isDropdownOpen('mobile-services') ? "open" : ""}`}>
              <li><Link to="/services" className="mobile-dropdown-link">All Services</Link></li>
              <li><Link to="/webdevelopment" className="mobile-dropdown-link">Web Development</Link></li>
              <li><Link to="/appdevelopment" className="mobile-dropdown-link">App Development</Link></li>
              <li><Link to="/desktopapplicationdevelopment" className="mobile-dropdown-link">Desktop Application</Link></li>
              <li><Link to="/digitalmarketing" className="mobile-dropdown-link">Digital Marketing</Link></li>
              <li><Link to="/3dmodeling" className="mobile-dropdown-link">3D Modeling</Link></li>
              <li><Link to="/gamedevelopment" className="mobile-dropdown-link">Game Development</Link></li>
              <li><Link to="/machinelearning" className="mobile-dropdown-link">Machine Learning</Link></li>
              <li><Link to="/graphicdesign" className="mobile-dropdown-link">Graphic Design</Link></li>
              <li><Link to="/uiux" className="mobile-dropdown-link">UI/UX Design</Link></li>
              <li><Link to="/customesoftwaredevelopment" className="mobile-dropdown-link">Custom Software</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/portfolio" className="mobile-nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog" className="mobile-nav-link">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/career" className="mobile-career-btn">Career</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;