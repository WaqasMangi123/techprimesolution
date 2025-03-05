import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaDesktop, FaVrCardboard, FaAndroid, FaApple, FaGamepad, FaTv, FaFire, FaCloud, FaUnity, FaGoogle, FaCode, FaAmazon, FaHtml5, FaAssistiveListeningSystems } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './gamedevelopment.css'; // Ensure your CSS file is updated for this block

function GameDevelopment() {
  return (
    <div>
      {/* First Block */}
      <div className="game-development-block">
        <motion.div
          className="game-development-text-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="game-development-heading">Game Development Company</h1>
          <p className="game-development-description">
            Techprime is a leading game development company that develops
            high-quality interactive games for iOS and Android. Our games
            feature awe-inspiring graphics, smooth gameplay, a fascinating
            storyline, and more!
          </p>
          <p className="game-development-call-to-action">Let’s Build Your Game</p>
        </motion.div>

        <motion.div
          className="game-development-image-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/gamedevelopment.webp" // Replace with your image path
            alt="Mobile Game Development"
            className="game-development-image"
          />
        </motion.div>
      </div>

      {/* Second Block */}
      <div className="gaming-for-all-block">
        <motion.div
          className="gaming-for-all-text-container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="gaming-for-all-heading">Gaming For All Screens</h2>
          <p className="gaming-for-all-description">
            Explore our diverse gaming platforms and experience the thrill of gaming on every screen, whether it's on your phone, TV, or even in Virtual Reality.
          </p>
        </motion.div>

        <motion.div
          className="gaming-for-all-icons-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="gaming-platform">
            <FaDesktop className="gaming-icon" />
            <p className="platform-text">Web Gaming</p>
          </div>
          <div className="gaming-platform">
            <FaMobileAlt className="gaming-icon" />
            <p className="platform-text">Mobile Gaming</p>
          </div>
          <div className="gaming-platform">
            <FaVrCardboard className="gaming-icon" />
            <p className="platform-text">VR Gaming</p>
          </div>
          <div className="gaming-platform">
            <FaTv className="gaming-icon" />
            <p className="platform-text">TV Gaming</p>
          </div>
        </motion.div>
      </div>

      {/* Third Block: Game Development Services */}
      <div className="game-services-block">
        <motion.div
          className="game-services-heading-container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="game-services-heading">Our Mobile Game Development Services</h2>
          <p className="game-services-description">
            We offer a diverse range of game development services across multiple platforms to create engaging and immersive experiences.
          </p>
        </motion.div>

        <motion.div
          className="game-services-cards-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 2D Game Development */}
          <div className="game-service-card">
            <FaGamepad className="service-icon" />
            <h3 className="service-title">2D Game Development</h3>
            <p className="service-description">
              Dive into vibrant 2D environments with our expert 2D game development services. Perfect for interactive, simple games.
            </p>
          </div>

          {/* 3D Game Development */}
          <div className="game-service-card">
            <FaDesktop className="service-icon" />
            <h3 className="service-title">3D Game Development</h3>
            <p className="service-description">
              Experience immersive, interactive 3D games, bringing your concepts to life with cutting-edge technology.
            </p>
          </div>

          {/* Android Game Development */}
          <div className="game-service-card">
            <FaAndroid className="service-icon" />
            <h3 className="service-title">Android Game Development</h3>
            <p className="service-description">
              Build captivating multiplayer, battle royale, and RPG games tailored for Android users.
            </p>
          </div>

          {/* iPhone Game Development */}
          <div className="game-service-card">
            <FaApple className="service-icon" />
            <h3 className="service-title">iPhone Game Development</h3>
            <p className="service-description">
              Bring your iOS games to life with exceptional user experiences on iPhones and iPads.
            </p>
          </div>

          {/* Web Game Development */}
          <div className="game-service-card">
            <FaDesktop className="service-icon" />
            <h3 className="service-title">Web Game Development</h3>
            <p className="service-description">
              Seamlessly play games directly in your browser with immersive experiences built using the latest web technologies.
            </p>
          </div>

          {/* AR/VR Game Development */}
          <div className="game-service-card">
            <FaVrCardboard className="service-icon" />
            <h3 className="service-title">AR/VR Game Development</h3>
            <p className="service-description">
              Experience next-level gaming with augmented and virtual reality technology, creating deeply immersive experiences.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Fourth Block: When To Consider Our Mobile Game Development Services */}
      <div className="consider-mobile-game-development">
        <motion.div
          className="consider-mobile-game-development-text-container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="consider-mobile-game-development-heading">
            When To Consider Our Mobile Game Development Services
          </h2>
          <p className="consider-mobile-game-development-description">
            We offer comprehensive game app solutions tailored to the unique needs of businesses, including startups to large-scale enterprises. We can engineer and deliver your product in 12 to 18 months.
          </p>
        </motion.div>

        <motion.div
          className="consider-mobile-game-development-cards-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* When Launching a New Game */}
          <div className="consider-mobile-game-service-card">
            <h3 className="mobile-service-title">Launching a New Game</h3>
            <p className="mobile-service-description">
              If you're an aspiring game entrepreneur with a groundbreaking idea for the next big mobile game but lack the technical expertise to bring it to life, consider our game app development services.
            </p>
          </div>

          {/* Educational Institutions Going Digital */}
          <div className="consider-mobile-game-service-card">
            <h3 className="mobile-service-title">Educational Institutions Going Digital</h3>
            <p className="mobile-service-description">
              We can design educational games that make learning enjoyable, interactive, and effective for students of all ages.
            </p>
          </div>

          {/* Existing Apps in Need of Gamification */}
          <div className="consider-mobile-game-service-card">
            <h3 className="mobile-service-title">Existing Apps in Need of Gamification</h3>
            <p className="mobile-service-description">
              When your existing app could benefit from gamification elements to boost user engagement and retention, our expertise comes into play. We can seamlessly integrate game features into your app, transforming it into an interactive and enjoyable experience for users.
            </p>
          </div>
        </motion.div>
      </div>

     {/* Fifth Block: Technologies We Use */}
<div className="technologies-we-use-block">
  <motion.div
    className="technologies-we-use-heading-container"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="technologies-we-use-heading">Technologies We Use</h2>
    <p className="technologies-we-use-description">
      Our mobile game app developers utilize the latest technologies to create robust and engaging games.
    </p>
  </motion.div>

  <motion.div
    className="technologies-we-use-slider-container"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="technologies-swiper"
    >
      {/* Firebase */}
      <SwiperSlide>
        <div className="technology-card">
          <FaFire className="technology-icon" />
          <h3 className="technology-title">Firebase</h3>
        </div>
      </SwiperSlide>

      {/* Unreal Engine */}
      <SwiperSlide>
        <div className="technology-card">
          <FaGamepad className="technology-icon" />
          <h3 className="technology-title">Unreal Engine</h3>
        </div>
      </SwiperSlide>

      {/* Azure */}
      <SwiperSlide>
        <div className="technology-card">
          <FaCloud className="technology-icon" />
          <h3 className="technology-title">Azure</h3>
        </div>
      </SwiperSlide>

      {/* Apple */}
      <SwiperSlide>
        <div className="technology-card">
          <FaApple className="technology-icon" />
          <h3 className="technology-title">Apple</h3>
        </div>
      </SwiperSlide>

      {/* Android */}
      <SwiperSlide>
        <div className="technology-card">
          <FaAndroid className="technology-icon" />
          <h3 className="technology-title">Android</h3>
        </div>
      </SwiperSlide>

      {/* Unity */}
      <SwiperSlide>
        <div className="technology-card">
          <FaUnity className="technology-icon" />
          <h3 className="technology-title">Unity</h3>
        </div>
      </SwiperSlide>

      {/* Google Cloud */}
      <SwiperSlide>
        <div className="technology-card">
          <FaGoogle className="technology-icon" />
          <h3 className="technology-title">Google Cloud</h3>
        </div>
      </SwiperSlide>

      {/* C Programming */}
      <SwiperSlide>
        <div className="technology-card">
          <FaCode className="technology-icon" />
          <h3 className="technology-title">C Programming</h3>
        </div>
      </SwiperSlide>

      {/* Amazon */}
      <SwiperSlide>
        <div className="technology-card">
          <FaAmazon className="technology-icon" />
          <h3 className="technology-title">Amazon</h3>
        </div>
      </SwiperSlide>

      {/* HTML5 */}
      <SwiperSlide>
        <div className="technology-card">
          <FaHtml5 className="technology-icon" />
          <h3 className="technology-title">HTML5</h3>
        </div>
      </SwiperSlide>

      {/* Google Assistance */}
      <SwiperSlide>
        <div className="technology-card">
          <FaAssistiveListeningSystems className="technology-icon" />
          <h3 className="technology-title">Google Assistance</h3>
        </div>
      </SwiperSlide>

      {/* Swift */}
      <SwiperSlide>
        <div className="technology-card">
          <FaApple className="technology-icon" />
          <h3 className="technology-title">Swift</h3>
        </div>
      </SwiperSlide>

      {/* CryEngine */}
      <SwiperSlide>
        <div className="technology-card">
          <FaGamepad className="technology-icon" />
          <h3 className="technology-title">CryEngine</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </motion.div>
</div>



{/* Sixth Block: Partner with the Best Game Development Company */}
<div className="partner-with-us-block">
  <div className="partner-with-us-container">
    {/* Text Section */}
    <motion.div
      className="partner-with-us-text-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="partner-with-us-heading">
        Partner with the Best Game Development Company
      </h2>
      <p className="partner-with-us-description">
        At Techprime, we combine years of experience with the latest gaming tech stack to create winning games that engage players worldwide.
      </p>
      <button className="partner-with-us-button">
        Discuss Your Next Game Idea
      </button>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="partner-with-us-image-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/block6game.webp" // Replace with your image path
        alt="Game Development Partner"
        className="partner-with-us-image"
      />
    </motion.div>
  </div>
</div>
    </div>
  );
}

export default GameDevelopment;