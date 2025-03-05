import React from 'react';
import { motion } from 'framer-motion';
import './blog.css'; // Ensure you have the CSS file for styling

function Blog() {
  return (
    <div className="blogunique-block-1">
      {/* Background Image */}
      <div className="background-image">
        <img
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" // Replace with your image path
          alt="Blog Background"
          className="animated-image"
        />
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="heading">Our Latest Blogs</h1>
        <p className="subheading">Discover insights, tips, and stories from our team.</p>
      </motion.div>
    </div>
  );
}

export default Blog;