import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './career.css'; // Custom CSS for Recruitment Page

const Recruitment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animations occur only once
    });
  }, []);

  return (
    <div>
      {/* Block 1 */}
      <div className="recruitment-container">
        <div className="recruitment-content" data-aos="fade-up">
          <h1 className="recruitment-heading">
            Join <span className="highlight">Our Team</span>
          </h1>
          <p className="recruitment-subheading">
            Become part of a team dedicated to excellence and professionalism. We are looking for talented security professionals like you.
          </p>
          <p className="recruitment-description">
            Our company offers an environment where your skills and dedication are valued. We provide top-tier training, competitive benefits, and the opportunity to grow in your career. Apply today and secure your future with us!
          </p>
          <a href="#apply" className="apply-button" data-aos="zoom-in">
            Apply Now
          </a>
        </div>
        <div className="recruitment-image" data-aos="fade-left">
          <img
            src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Recruitment Security"
          />
        </div>
      </div>


{/* Block 1.5 - Open Positions */}
<div className="positions-container">
  <div className="positions-content">
    <h2 className="positions-heading">Explore Exciting Career Opportunities</h2>
    <p className="positions-subheading">
      We are always on the lookout for talented individuals to join our team. However, there are currently no open positions at the moment.
    </p>
    <div className="no-openings-message">
      <p>🚫 No job openings available right now. Please check back later!</p>
    </div>
  </div>
</div>




            {/* Block 2 - IT Services Recruitment Form */}
 <div className="form-container" id="apply" data-aos="fade-up">
    <h2 className="form-heading">JOIN OUR Techprime Solution TEAM</h2>
    <p className="form-subheading">Apply for exciting opportunities in Techprime Solution!</p>
    <form className="recruitment-form">
      
      {/* Personal Information */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="nid">National Identification Number (14 digits, no dashes)</label>
        <input type="text" id="nid" pattern="\d{14}" placeholder="Enter your 14-digit NID" required />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Enter your city" required />
        </div>
      </div>
      
      {/* Education Information */}
      <div className="form-group">
        <label htmlFor="education">Highest Level of Education</label>
        <select id="education" required>
          <option value="">Select your education level</option>
          <option value="Bachelors">Bachelor's Degree</option>
          <option value="Masters">Master's Degree</option>
          <option value="PhD">Ph.D.</option>
          <option value="Diploma">Diploma</option>
          <option value="Certification">Certification</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input type="text" id="fieldOfStudy" placeholder="e.g., Computer Science, IT, Software Engineering" required />
      </div>
      
      {/* Work Experience */}
      <div className="form-group">
        <label htmlFor="experience">Years of Experience</label>
        <select id="experience" required>
          <option value="">Select experience level</option>
          <option value="0-1">0-1 year</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="skills">Key Skills (comma-separated)</label>
        <input type="text" id="skills" placeholder="e.g., React, Node.js, Python, DevOps" required />
      </div>
      
      {/* Job Preferences */}
      <div className="form-group">
        <label htmlFor="role">Preferred Job Role</label>
        <select id="role" required>
          <option value="">Select preferred role</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Full-Stack Developer">Full-Stack Developer</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
          <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Project Manager">Project Manager</option>
          <option value="App Developer">App Developer</option>
          <option value="Desktop Application Developer">Desktop Application Developer</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Figma Designer">Figma Designer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Game Developer">Game Developer</option>
          <option value="Marketing">Marketing</option>
          <option value="Python Developer">Python Developer</option>
          <option value="Machine Learning Analyst">Machine Learning Analyst</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="resume">Upload Resume</label>
        <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="github">GitHub Profile URL</label>
        <input type="url" id="github" placeholder="Enter GitHub Profile URL" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
        <input type="url" id="linkedin" placeholder="Enter LinkedIn URL" />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Why do you want to join us?</label>
        <textarea id="message" placeholder="Write a short message about your career goals"></textarea>
      </div>
      
      <button type="submit" className="form-submit">Apply Now</button>
    </form>
  </div>

    </div>
  );
};

export default Recruitment;
