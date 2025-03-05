import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaUserCircle, FaUserTie, FaUserGraduate, FaLinkedin } from "react-icons/fa"; // Import icons from React Icons
import "./foundingmember.css"; // Add corresponding CSS file for styling

const FoundingMember = () => {
  return (
    <div className="founding-member">
      {/* First Block: Hero Section with Background Image */}
      <motion.div
        className="founding-member-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="founding-member-hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="founding-member-hero-heading"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="founding-member-hero-description"
          >
            We are a team of passionate professionals dedicated to delivering excellence. Our founders bring decades of experience and innovation to the table, ensuring that we stay ahead in the industry.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="founding-member-hero-subdescription"
          >
            Together, we strive to create solutions that make a difference.
          </motion.p>
        </div>
      </motion.div>

      {/* Members Section */}
      <div className="founding-member-members-section">
        <h2 className="founding-member-section-heading">Our Team</h2>
        <p className="founding-member-section-description">
          Meet the visionary leaders who laid the foundation of our organization.
        </p>
        <div className="founding-member-members-list">
          {/* Member 1: Kashif Ali Khan */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserCircle size={100} color="#007bff" /> {/* Avatar for Member 1 */}
            </div>
            <h3 className="founding-member-name">Kashif Ali Khan</h3>
            <p className="founding-member-role">Project Manager</p>
            <a
              href="https://www.linkedin.com/in/kashifalikhan"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>

          {/* Member 2: Waqas Ahmed Mangi */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserTie size={100} color="#28a745" /> {/* Avatar for Member 2 */}
            </div>
            <h3 className="founding-member-name">Waqas Ahmed Mangi</h3>
            <p className="founding-member-role">Web Developer</p>
            <a
              href="https://www.linkedin.com/in/waqasmangi"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>

          {/* Member 3: Raja Zain */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserGraduate size={100} color="#dc3545" /> {/* Avatar for Member 3 */}
            </div>
            <h3 className="founding-member-name">Raja Zain</h3>
            <p className="founding-member-role">Machine Learning</p>
            <a
              href="https://www.linkedin.com/in/rajazain"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>

          {/* Member 4: Hassan */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserCircle size={100} color="#ffc107" /> {/* Avatar for Member 4 */}
            </div>
            <h3 className="founding-member-name">Hassan</h3>
            <p className="founding-member-role">Quality Assurance</p>
            <a
              href="https://www.linkedin.com/in/hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>

          {/* Member 5: Sohaib Hassan */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserTie size={100} color="#17a2b8" /> {/* Avatar for Member 5 */}
            </div>
            <h3 className="founding-member-name">Sohaib Hassan</h3>
            <p className="founding-member-role">Marketing</p>
            <a
              href="https://www.linkedin.com/in/sohaibhassan"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>

          {/* Member 6: Usama Sherazi */}
          <motion.div
            className="founding-member-member"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founding-member-avatar">
              <FaUserGraduate size={100} color="#6610f2" /> {/* Avatar for Member 6 */}
            </div>
            <h3 className="founding-member-name">Usama Sherazi</h3>
            <p className="founding-member-role">App Developer</p>
            <a
              href="https://www.linkedin.com/in/usamasherazi"
              target="_blank"
              rel="noopener noreferrer"
              className="founding-member-linkedin-link"
            >
              <FaLinkedin size={20} /> Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FoundingMember;