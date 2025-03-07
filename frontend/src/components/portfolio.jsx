import React from 'react';
import './portfolio.css';
import { FaLink, FaPaintBrush, FaEnvelope, FaGoogle, FaDesktop, FaCog, FaCreditCard, FaComments, FaCalendarAlt, FaSearch, FaUser, FaBook, FaMobileAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "Laritience",
      description: "Laritience was founded by Rigo...",
      technologies: ["WordPress", "Elementor", "Astra", "WP Forms"],
      link: "https://laritience.com/",
      images: [
        "/laritience4.jpeg", 
        "/laritience2.jpeg",
        "/laritience3.jpeg",
        "/laritience1.jpeg"
      ],
      tools: [
        { name: "Course Registration", icon: <FaBook /> },
        { name: "Responsive Design", icon: <FaMobileAlt /> },
        { name: "User Management", icon: <FaUser /> },
        { name: "Email Notifications", icon: <FaEnvelope /> },
        { name: "SEO Optimization", icon: <FaSearch /> }
      ]
    },
    {
      title: "Polar Painting",
      description: "Polar Painting is a trusted provider of residential and commercial painting services in Toronto. We specialize in transforming spaces with precision, care, and attention to detail. Our expert painters use premium materials and innovative techniques to deliver exceptional results that last for years to come.",
      technologies: ["React JSX", "Node.js", "MongoDB"],
      link: "https://polarpainting.ca/",
      images: [
        "/polarpaintingportfolio1.jpeg",
        "/polarpaintingportfolio2.jpeg",
        "/polarpaintingportfolio3.jpeg",
        "/polarpaintingportfolio4.jpeg"
      ],
      tools: [
        { name: "Estimator by Techprime", icon: <FaCog /> },
        { name: "Email Marketing", icon: <FaEnvelope /> },
        { name: "Google Analytics", icon: <FaGoogle /> },
        { name: "Responsive Design", icon: <FaDesktop /> },
        { name: "Polished UI", icon: <FaPaintBrush /> }
      ]
    },
    {
      title: "Rediguard Security",
      description: "Rediguard Security Services proudly sets the benchmark in the realm of private security and guard services, ensuring unmatched peace of mind for our clients. As one of the best security companies in Toronto, we specialize in offering comprehensive secure protection services tailored to meet the diverse needs of our clientele.",
      technologies: ["React JSX", "Node.js", "MongoDB"],
      link: "https://rediguardsecurity.com/",
      images: [
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/279890614/original/32f235c457b239f2d44019c660ba0d247eaf7fd1/design-security-service-bodyguard-agency-landing-page-website.png",
        "https://cdn.prod.website-files.com/660d2f5487880c4b5e088ca2/670e3d2d9c60e939cf9d8592_Bodyguard.jpg",
        "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/679059b8cca5fe3b39c52c7c_recsc7bZuOec9gIcv_image_5.webp",
        "https://market-resized.envatousercontent.com/previews/files/380678452/404-Page.jpeg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=1b24a9189d2b6737c60790633490bc53940b4e8f8c9be5e1c0f34c1085000873"
      ],
      tools: [
        { name: "Estimator by Techprime", icon: <FaCog /> },
        { name: "Email Marketing", icon: <FaEnvelope /> },
        { name: "Google Analytics", icon: <FaGoogle /> },
        { name: "Responsive Design", icon: <FaDesktop /> },
        { name: "Polished UI", icon: <FaPaintBrush /> }
      ]
    },
    {
      title: "Sona Welfare Foundation",
      description: "Sona Welfare Foundation, a project of Fauji Fertilizer Company, is dedicated to improving the lives of underprivileged communities through education, healthcare, and social welfare programs. The website was created to showcase their impactful initiatives and make it easier for donors and beneficiaries to connect.",
      technologies: ["WordPress", "Elementor"],
      link: "#", 
      images: [
        "/sona1.jpeg",
        "/sona2.jpeg",
        "/sona33.jpeg",
        "/sona4.jpeg"
      ],
      tools: [
        { name: "Responsive Payment Method", icon: <FaCreditCard /> },
        { name: "Email Marketing", icon: <FaEnvelope /> },
        { name: "SEO", icon: <FaSearch /> },
        { name: "Responsive Design", icon: <FaDesktop /> },
        { name: "Polished UI", icon: <FaPaintBrush /> }
      ]
    },
    {
      title: "SAP User Group Pakistan",
      description: "SAP User Group Pakistan, another project of Fauji Fertilizer Company, serves as a platform for SAP professionals to collaborate, share knowledge, and participate in events. The website was fully recreated with a modern, responsive design, polished look, and integrated features to support community engagement.",
      technologies: ["WordPress", "Elementor"],
      link: "#", 
      images: [
        "/sap7.jpeg",
        "/sap2.jpeg",
        "/sap3.jpeg",
        "/sap4.jpeg"
      ],
      tools: [
        { name: "Discussion Form", icon: <FaComments /> },
        { name: "Event Section", icon: <FaCalendarAlt /> },
        { name: "Email Marketing", icon: <FaEnvelope /> },
        { name: "SEO", icon: <FaSearch /> },
        { name: "Responsive Design", icon: <FaDesktop /> },
        { name: "Polished UI", icon: <FaPaintBrush /> }
      ]
    },
    {
      title: "MediSchedule",
      description: "We engineered MediSchedule, an advanced Doctor Appointment System in Python, to streamline healthcare scheduling with features like patient booking, doctor availability tracking, and automated reminders. This robust system offers real-time slot updates, multi-clinic support, patient history integration, teleconsultation scheduling, payment processing, and detailed analytics for clinic efficiency. Designed as a secure, scalable appointment software, MediSchedule ensures a user-friendly experience with seamless integrations for modern medical practices.",
      technologies: ["Python", "Django", "PostgreSQL", "Celery", "Twilio", "React", "Bootstrap"],
      link: "#",
      images: [
        "/medischedule1_11zon.jpeg",
        "/medischedule2_11zon.jpeg",
        "/medischedule3_11zon.jpeg",
        "/medischedule4_11zon.jpeg"
      ],
      tools: [
        { name: "Patient Booking", icon: <FaCalendarAlt /> },
        { name: "Doctor Availability Tracking", icon: <FaDesktop /> },
        { name: "Automated Reminders", icon: <FaEnvelope /> },
        { name: "Payment Processing", icon: <FaCreditCard /> },
        { name: "Detailed Analytics", icon: <FaSearch /> }
      ]
    },
    {
      title: "Multilingual Speech-to-Text Recognition",
      description: "I am pleased to announce the completion of a Speech-to-Text Recognition project designed to effectively handle multiple languages. This endeavor was a deep dive into the complex challenges of multilingual audio processing. The goal was to develop a system capable of accurately converting speech to text across different languages. Through a combination of advanced natural language processing techniques and machine learning algorithms, the project achieved notable accuracy in transcription for multiple languages, making it versatile and highly adaptable for global applications.",
      technologies: ["Python", "Natural Language Processing", "Machine Learning"],
      link: "#",
      images: [
        "/speech3_11zon.jpeg",
        "/speech1_11zon.jpeg",
        "/speech2_11zon.jpeg",
        "/speech4_11zon.jpeg"
      ],
      tools: [
        { name: "Multilingual Support", icon: <FaComments /> },
        { name: "Speech Recognition", icon: <FaCog /> },
        { name: "Machine Learning", icon: <FaDesktop /> },
        { name: "Real-Time Processing", icon: <FaSearch /> }
      ]
    },
    {
      title: "Hospital Management System",
      description: "We created a robust Hospital Management System in Java to streamline healthcare operations, including patient registration, appointment scheduling, billing, and inventory management. Our system boosts efficiency with real-time patient tracking, staff management, electronic medical records (EMR), comprehensive reporting, and automated notifications for enhanced decision-making. Designed with a user-friendly interface, it ensures scalability, security, and reliability for modern medical facilities.",
      technologies: ["Java", "MySQL"],
      link: "#",
      images: [
        "/hospital1.jpeg",
        "/hospital2.jpeg",
        "/hospital3.jpeg",
        "/hospital4.jpeg"
      ],
      tools: [
        { name: "Patient Registration", icon: <FaCog /> },
        { name: "Appointment Scheduling", icon: <FaCalendarAlt /> },
        { name: "Billing", icon: <FaCreditCard /> },
        { name: "Inventory Management", icon: <FaDesktop /> }
      ]
    },
    {
      title: "E-Commerce Inventory & Order Management System",
      description: "We engineered a cutting-edge E-Commerce Inventory & Order Management System in Java to empower online businesses with seamless order processing, stock tracking, and customer management. Our solution integrates real-time inventory updates, automated order fulfillment, payment gateway support, and insightful analytics to boost operational efficiency. Built with a scalable, intuitive design, it meets the demands of modern retail with reliability and performance.",
      technologies: ["Java", "JavaSpringBoot", "MySQL", "React"],
      link: "#",
      images: [
        "/ecommerce11.jpeg",
        "/ecommerce2.jpeg",
        "/ecommerce3.jpeg",
        "/ecommerce4.jpeg"
      ],
      tools: [
        { name: "Order Processing", icon: <FaCog /> },
        { name: "Stock Tracking", icon: <FaDesktop /> },
        { name: "Payment Gateway", icon: <FaCreditCard /> },
        { name: "Analytics", icon: <FaSearch /> }
      ]
    },
    {
      title: "Smart Learning Management System (LMS)",
      description: "We developed a Smart Learning Management System in Java to revolutionize education with features like course creation, student progress tracking, and virtual classroom integration. Our system offers AI-driven personalized learning paths, real-time quiz assessments, attendance monitoring, and detailed performance reports for educators and learners. Designed for scalability and ease of use, it supports modern e-learning needs with secure, cloud-ready architecture.",
      technologies: ["Java", "TensorFlow", "MySQL", "Node.js"],
      link: "#",
      images: [
        "/lms1.jpeg",
        "/lms2.jpeg",
        "/lms3.jpeg",
        "/lms4.jpeg"
      ],
      tools: [
        { name: "Course Creation", icon: <FaCog /> },
        { name: "Student Progress Tracking", icon: <FaDesktop /> },
        { name: "Virtual Classroom", icon: <FaComments /> },
        { name: "AI-Driven Learning", icon: <FaSearch /> }
      ]
    },
    {
      title: "Point Of Sale",
      description: "We engineered a cutting-edge Point of Sale (POS) system in Java to optimize retail and hospitality operations, featuring lightning-fast billing, real-time inventory tracking, customer loyalty management, and barcode scanning. Our robust POS solution offers multi-payment processing (cash, card, mobile wallets), advanced sales analytics, employee performance tracking, refund handling, table management for restaurants, and a secure offline mode. Designed for scalability, this user-friendly, cloud-ready POS software ensures seamless integrations, top-tier security, and efficiency for modern businesses.",
      technologies: ["Java", "MySQL", "Spring Framework", "JavaFX", "REST APIs"],
      link: "#",
      images: [
        "/pos1_11zon.jpeg",
        "/pos2_11zon.jpeg",
        "/pos3_11zon.jpeg",
        "/pos4_11zon.jpeg"
      ],
      tools: [
        { name: "Barcode Scanning", icon: <FaCog /> },
        { name: "Customer Loyalty", icon: <FaComments /> },
        { name: "Sales Analytics", icon: <FaSearch /> },
        { name: "Table Management", icon: <FaDesktop /> }
      ]
    },
    {
      title: "Twitter Clone",
      description: "We built a dynamic Twitter Clone using Java Spring Boot, replicating core social media functionalities like real-time tweeting, following/unfollowing, and hashtag trending. Our platform includes user authentication, direct messaging, media uploads (images/videos), notifications, profile customization, and advanced search with analytics for engagement tracking. This secure, scalable social networking solution offers a responsive design and seamless API integrations for third-party tools.",
      technologies: ["Java Spring Boot", "MySQL", "WebSocket", "Bootstrap"],
      link: "#",
      images: [
        "/twitter3_11zon.jpeg",
        "/twitter2_11zon.jpeg",
        "/twitter1_11zon.jpeg",
        "/twitter4_11zon.jpeg"
      ],
      tools: [
        { name: "Real-time Tweeting", icon: <FaComments /> },
        { name: "Direct Messaging", icon: <FaEnvelope /> },
        { name: "Media Uploads", icon: <FaDesktop /> },
        { name: "Engagement Analytics", icon: <FaSearch /> }
      ]
    },
    {
      title: "Solitaire Game",
      description: "We designed a professional Solitaire Game in Java Spring Boot, delivering an engaging gaming experience with single-player card gameplay, customizable themes, and difficulty levels. Our game features smooth animations, undo/redo moves, auto-save progress, leaderboards, hint systems, and multiplayer mode via online connectivity for global competition. This lightweight, scalable game app ensures cross-platform compatibility and a polished UI for casual gamers.",
      technologies: ["Java Spring Boot", "MySQL", "JavaFX", "WebSocket"],
      link: "#",
      images: [
        "/solitaire1_11zon.jpeg",
        "/solitaire2_11zon.jpeg",
        "/solitaire3_11zon.jpeg",
        "/solitaire4.jpg"
      ],
      tools: [
        { name: "Customizable Themes", icon: <FaPaintBrush /> },
        { name: "Leaderboards", icon: <FaComments /> },
        { name: "Multiplayer Mode", icon: <FaDesktop /> },
        { name: "Cross-Platform", icon: <FaCog /> }
      ]
    },
    ...Array(2).fill({
      title: "More Projects Under development",
      description: "This is a placeholder for a future project. The details will be updated soon.",
      technologies: ["TBD"],
      link: "#",
      images: [
        "/dummy1.jpg",
        "/dummy2.jpg",
        "/dummy3.jpg",
        "/dummy4.jpg"
      ],
      tools: [
        { name: "TBD", icon: <FaCog /> }
      ]
    })
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-block1">
        <img src="/portfolioblock1.jpg" alt="Portfolio Showcase" className="portfolio-image" />
      </div>

      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-images-carousel">
                {project.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`${project.title} - Image ${idx + 1}`} className="carousel-image" />
                ))}
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech"><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaLink /> Visit Project
                </a>
                <div className="project-tools">
                  <h4>Tools Integrated:</h4>
                  <ul>
                    {project.tools.map((tool, idx) => (
                      <li key={idx} className="tool-item">
                        <span className="tool-icon">{tool.icon}</span> {tool.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;