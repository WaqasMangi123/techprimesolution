import React from "react";
import "./appdevelopment.css"; // Import CSS file
import { FaAndroid, FaApple, FaReact, FaGamepad, FaCheckCircle } from "react-icons/fa";
import { SiFlutter, SiWearos } from "react-icons/si";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"; // Corrected import path
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Technologies Data
const technologies = [
  { name: "JavaScript", icon: <i className="fab fa-js-square"></i> },
  { name: "C#", icon: <i className="fab fa-csharp"></i> },
  { name: "Java", icon: <i className="fab fa-java"></i> },
  { name: "Kotlin", icon: <i className="fab fa-android"></i> },
  { name: "Python", icon: <i className="fab fa-python"></i> },
  { name: "Swift", icon: <i className="fab fa-swift"></i> },
  { name: "Objective-C", icon: <i className="fab fa-apple"></i> },
  { name: "Cordova", icon: <i className="fab fa-codepen"></i> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Ionic", icon: <i className="fab fa-ionic"></i> },
  { name: "Native Script", icon: <i className="fab fa-js"></i> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Xamarin", icon: <i className="fab fa-microsoft"></i> },
  { name: "AWS", icon: <i className="fab fa-aws"></i> },
  { name: "Azure", icon: <i className="fab fa-microsoft"></i> },
  { name: "Google Cloud", icon: <i className="fab fa-google"></i> },
  { name: "Firebase", icon: <i className="fab fa-firebase"></i> },
];

function AppDevelopment() {
  return (
    <>
      {/* First Full-Screen Block */}
      <div className="app-development-container">
        <img
          src="mobileapplication.jpg"
          alt="App Development"
          className="app-development-image"
        />
      </div>

      {/* Second Full-Screen Block - Image Left, Text Right */}
      <div className="app-development-block2">
        <div className="block2-content">
          <div className="block2-image">
            <img src="applicationblock2.jpg" alt="App Development Process" />
          </div>
          <div className="block2-text">
            <h2>High-Caliber App Development at Your Fingertips</h2>
            <p>
              Our mobile application development services are designed to
              accelerate app production and upscale performance quality. From
              high-fidelity wireframe designs to robust, cyber-secure solutions,
              our full-cycle app development company is your transformation
              partner. Our full-stack app engineers excel at executing complex
              mobile app development projects, whether for native or
              cross-platform applications.
            </p>
            <button className="consultation-button">
              Start with a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Third Full-Screen Block - Services Section */}
      <div className="app-development-block3">
        <h2>Mobile App Development Services We Provide</h2>
        <div className="services-grid">
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FaAndroid className="service-icon" />
            <h3>Android App Development</h3>
            <p>
              Harness the full potential of Android with custom development using
              Kotlin, Java, and Jetpack Compose.
            </p>
          </motion.div>

          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FaApple className="service-icon" />
            <h3>iOS App Development</h3>
            <p>
              Develop high-performance native iOS apps using Swift and
              Objective-C, ensuring seamless Apple ecosystem integration.
            </p>
          </motion.div>

          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FaReact className="service-icon" />
            <h3>React Native Development</h3>
            <p>
              Leverage React Native to build powerful cross-platform apps with a
              unified codebase for iOS and Android.
            </p>
          </motion.div>

          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <SiFlutter className="service-icon" />
            <h3>Flutter App Development</h3>
            <p>
              Utilize Flutter’s powerful widgets and Dart to craft visually
              stunning and high-performance mobile apps.
            </p>
          </motion.div>

          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <SiWearos className="service-icon" />
            <h3>Wearables & Embedded Software</h3>
            <p>
              Innovate with wearable and embedded solutions optimized for health
              monitoring, productivity, and more.
            </p>
          </motion.div>

          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <FaGamepad className="service-icon" />
            <h3>Mobile Game Development</h3>
            <p>
              Create immersive, high-performance mobile games with Unity, Unreal
              Engine, and Cocos2d.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fourth Block - Technologies Section */}
      <motion.div
        className="technologies-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="technologies-heading">Technologies We Use</h2>
        <p className="technologies-subheading">
          We leverage cutting-edge technologies to deliver exceptional app
          solutions.
        </p>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Corrected modules
          className="technologies-swiper"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="technology-card"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="technology-icon">{tech.icon}</div>
                <h3 className="technology-name">{tech.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Fifth Block - Final Touches for Performance & Reliability */}
      <div className="app-development-block4">
        <div className="block4-content">
          <motion.h2
            className="block4-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Effort-Minimized, Easy App Development
          </motion.h2>
          <motion.p
            className="block4-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Our zero-hassle process eliminates complexity and ensures seamless
            navigation. Our mobile app development company in the Pakistan is
            trusted to deliver intuitive, user-friendly, and performance-optimized
            products from ideation to deployment.
          </motion.p>
          <div className="process-steps">
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>01</h4>
              <h5>Concept Validation</h5>
              <p>Analyze user needs and market potential to refine app concepts.</p>
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>02</h4>
              <h5>Interactive Design</h5>
              <p>Create engaging, user-centric designs that enhance usability.</p>
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>03</h4>
              <h5>Core Development</h5>
              <p>Build a resilient, scalable, and high-performing app foundation.</p>
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>04</h4>
              <h5>Comprehensive Testing</h5>
              <p>Conduct extensive testing to ensure flawless app performance.</p>
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>05</h4>
              <h5>Efficient Rollout</h5>
              <p>Deploy with a focus on reliability and minimal disruptions.</p>
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              <FaCheckCircle className="step-icon" />
              <h4>06</h4>
              <h5>Lifecycle Management</h5>
              <p>Maintain, update, and optimize for sustained app success.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sixth Block - Contact Us Section with Image on the Right */}
      <div className="app-development-block5">
        <div className="block5-content">
          <div className="block5-text">
            <h2>Accelerate Mobile App Launch with Techprime Solution</h2>
            <p>
              Got an app idea? We’ve got you covered with instant MVP development
              followed by full-stack, custom mobile app development services.
            </p>
            <button className="contact-button">Build My App</button>
          </div>
          <div className="block5-image">
            <img src="block4app.jpg" alt="Accelerate App Launch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDevelopment;