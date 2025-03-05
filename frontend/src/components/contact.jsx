import React, { useState } from "react";
import "./contact.css"; // Import the updated CSS for styling
import { FaPhone, FaMapMarkerAlt, FaRegEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri"; // For chat icon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    referralSource: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      {/* First Block: Background Image */}
      <div className="contact-image-container">
        <img
          src="contactusblock1.jpg"
          alt="Contact Background"
          className="contact-full-image"
        />
      </div>

      {/* Second Block: Heading, Description, Form, and Contact Information */}
      <div className="contact-info-form-block">
        <div className="contact-description">
          <h1>We are here to help</h1>
          <p>
            Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.
            Our team is dedicated to providing prompt support and guidance. Whether you have questions about our services,
            need technical assistance, or simply want to connect, we're always here for you.
          </p>
        </div>

        <div className="contact-info-container">
          <div className="contact-info">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>Islamabad, Pakistan</p>
          </div>
          <div className="contact-info">
            <FaPhone className="contact-icon" />
            <h3>Contact</h3>
            <p>+92 323 1559163</p>
          </div>
          <div className="contact-info">
            <FaRegEnvelope className="contact-icon" />
            <h3>Website</h3>
            <p>www.techprimesolution.com</p>
          </div>
          <div className="social-media-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="form-heading">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="form-row">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea-field"
              />
            </div>
            <div className="form-row">
              <label>Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="select-field"
              >
                <option value="">Select Project Type</option>
                <option value="Web App">Web App</option>
                <option value="AI">AI</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Mobile App">Mobile App</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>
            <div className="form-row">
              <label>Where Did You Hear About Us?</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                required
                className="select-field"
              >
                <option value="">Select</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Friend">Friend</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-button">
              <IoSend className="submit-icon" /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Chat Option */}
      <div className="chat-button">
        <RiMessengerLine className="chat-icon" />
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <h3>Our Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.383036462444!2d73.0478447!3d33.684423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1698765432105!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
