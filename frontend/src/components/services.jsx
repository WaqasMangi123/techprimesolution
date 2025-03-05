import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './services.css';
import { FaUser, FaRegClock, FaProjectDiagram, FaTrophy } from 'react-icons/fa';

const images = [
  'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const appImages = [
  'https://images.unsplash.com/photo-1586281380212-95ee2785aa66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const desktopAppImages = [
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const javaAppImages = [
  'https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const modelingImages = [
  'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1598978483528-fd57466ab0ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1547194936-28214bd75193?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const machineLearningImages = [
  'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const uiUxImages = [
  'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=1920&q=75'
];

const graphicDesignImages = [
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://pixel77.com/wp-content/uploads/2018/10/1934823-e1540532501723.jpg'
];

const digitalMarketingImages = [
  'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://assets.entrepreneur.com/content/3x2/2000/1648113590-new4.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const virtualAssistanceImages = [
  'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://img.freepik.com/free-photo/woman-with-headset-working-laptop_23-2148893818.jpg?t=st=1739224314~exp=1739227914~hmac=2d40998b5e4f4b7e9798e6f45aa9717d704a2c41d5867c76599400466cdb702c&w=740',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Services = () => {
  const statRefs = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentAppImage, setCurrentAppImage] = useState(0);
  const [currentDesktopAppImage, setCurrentDesktopAppImage] = useState(0);
  const [currentJavaAppImage, setCurrentJavaAppImage] = useState(0);
  const [currentModelingImage, setCurrentModelingImage] = useState(0);
  const [currentMachineLearningImage, setCurrentMachineLearningImage] = useState(0);
  const [currentUiUxImage, setCurrentUiUxImage] = useState(0);
  const [currentGraphicDesignImage, setCurrentGraphicDesignImage] = useState(0);
  const [currentDigitalMarketingImage, setCurrentDigitalMarketingImage] = useState(0);
  const [currentVirtualAssistanceImage, setCurrentVirtualAssistanceImage] = useState(0);

  // Image interval logic for all sliders
  useEffect(() => {
    const intervals = [
      setInterval(() => setCurrentImage((prev) => (prev + 1) % images.length), 3000),
      setInterval(() => setCurrentAppImage((prev) => (prev + 1) % appImages.length), 3000),
      setInterval(() => setCurrentDesktopAppImage((prev) => (prev + 1) % desktopAppImages.length), 3000),
      setInterval(() => setCurrentJavaAppImage((prev) => (prev + 1) % javaAppImages.length), 3000),
      setInterval(() => setCurrentModelingImage((prev) => (prev + 1) % modelingImages.length), 3000),
      setInterval(() => setCurrentMachineLearningImage((prev) => (prev + 1) % machineLearningImages.length), 3000),
      setInterval(() => setCurrentUiUxImage((prev) => (prev + 1) % uiUxImages.length), 3000),
      setInterval(() => setCurrentGraphicDesignImage((prev) => (prev + 1) % graphicDesignImages.length), 3000),
      setInterval(() => setCurrentDigitalMarketingImage((prev) => (prev + 1) % digitalMarketingImages.length), 3000),
      setInterval(() => setCurrentVirtualAssistanceImage((prev) => (prev + 1) % virtualAssistanceImages.length), 3000)
    ];

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.getAttribute('data-target'), 10);
            let currentValue = 0;
            const increment = finalValue / 100;

            const interval = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                clearInterval(interval);
                currentValue = finalValue;
              }
              target.textContent = Math.floor(currentValue);
            }, 10);

            target.classList.add('animated');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="image-container">
        <img src="servicepageblock1.jpg" alt="Our Services" className="services-image" />
      </div>

      <div className="services-block">
        <div className="services-content">
          <h1 className="services-heading">Our Services</h1>
          <p className="services-description">
            We specialize in a broad spectrum of services, including mobile applications, game development, and digital marketing. Our team is dedicated to delivering innovative solutions tailored to your needs. Additionally, we offer cutting-edge web development, robust ERP system implementations, scalable digital marketing strategies, and reliable software solutions that drive business growth.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <FaRegClock className="stat-icon" />
              <span className="stat-number" data-target="2" ref={(el) => (statRefs.current[0] = el)}>0</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <FaUser className="stat-icon" />
              <span className="stat-number" data-target="15" ref={(el) => (statRefs.current[1] = el)}>0</span>
              <span className="stat-label">Employees</span>
            </div>
            <div className="stat-item">
              <FaProjectDiagram className="stat-icon" />
              <span className="stat-number" data-target="40" ref={(el) => (statRefs.current[2] = el)}>0</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <FaTrophy className="stat-icon" />
              <span className="stat-number" data-target="500" ref={(el) => (statRefs.current[3] = el)}>0</span>
              <span className="stat-label">Achievements</span>
            </div>
          </div>
        </div>
      </div>

      <div className="webdev-block">
        <div className="webdev-content">
          <div className="webdev-text">
            <h1 className="webdev-heading">Web Development</h1>
            <p className="webdev-description">
              We create responsive, user-friendly websites with modern technologies. Our team ensures that your website is not only visually appealing but also optimized for performance and scalability. Whether it's an eCommerce platform, corporate website, or a custom web application, we deliver solutions tailored to your business needs.
            </p>
            <Link to="/webdevelopment" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="webdev-slider">
          <img src={images[currentImage]} alt="Web Development" className="slider-image active" />
        </div>
      </div>

      {/* App Development Block */}
      <div className="appdev-block">
        <div className="appdev-slider">
          <img src={appImages[currentAppImage]} alt="App Development" className="slider-image active" />
        </div>

        <div className="appdev-content">
          <div className="appdev-text">
            <h1 className="appdev-heading">App Development</h1>
            <p className="appdev-description">
              We build scalable, high-performance mobile applications for both iOS and Android platforms. Whether you need a native app or a cross-platform solution, we provide tailored app development services to meet your business needs, ensuring smooth user experiences and cutting-edge functionality.
            </p>
            <Link to="/appdevelopment" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Desktop Application Block */}
      <div className="victorian-app-section">
        <div className="renaissance-app-details">
          <div className="gothic-app-text">
            <h1 className="baroque-title">Desktop Application Development</h1>
            <p className="rococo-description">
              Our team specializes in building robust desktop applications that meet the specific needs of your business. From custom software solutions to enterprise-grade applications.
            </p>
            <Link to="/desktopapplicationdevelopment" className="art-nouveau-btn">Learn More</Link>
          </div>
        </div>

        <div className="medieval-app-slider">
          <img
            src={desktopAppImages[currentDesktopAppImage]}
            alt="Desktop Application"
            className="renaissance-slider-image active"
          />
        </div>
      </div>

      {/* Java Application Development Block */}
      <div className="javaapp-block">
        <div className="javaapp-content">
          <div className="javaapp-text">
            <h1 className="javaapp-heading">Java Application Development</h1>
            <p className="javaapp-description">
              Harnessing the versatility of Java, we build robust and secure software applications that run across multiple platforms, ensuring compatibility and high performance.
            </p>
            <Link to="/webdevelopment" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="javaapp-slider">
          <img src={javaAppImages[currentJavaAppImage]} alt="Java Application Development" className="slider-image active" />
        </div>
      </div>

      {/* 3D Modeling Block */}
      <div className="modeling-block">
        <div className="modeling-content">
          <div className="modeling-text">
            <h1 className="modeling-heading">3D Modeling</h1>
            <p className="modeling-description">
              Our skilled designers bring ideas to life through stunning 3D models, enabling you to visualize and showcase products, architectural designs, or virtual environments with unparalleled realism.
            </p>
            <Link to="/3dmodeling" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="modeling-slider">
          <img src={modelingImages[currentModelingImage]} alt="3D Modeling" className="slider-image active" />
        </div>
      </div>

      {/* Machine Learning Block */}
      <div className="machinelearning-block">
        <div className="machinelearning-content">
          <div className="machinelearning-text">
            <h1 className="machinelearning-heading">Machine Learning</h1>
            <p className="machinelearning-description">
              Our experts develop intelligent machine learning models that leverage algorithms and data to automate tasks, make accurate predictions, and uncover patterns and insights in your data.
            </p>
            <Link to="/machinelearning" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="machinelearning-slider">
          <img src={machineLearningImages[currentMachineLearningImage]} alt="Machine Learning" className="slider-image active" />
        </div>
      </div>

      {/* UI/UX Designing Block */}
      <div className="uiux-block">
        <div className="uiux-content">
          <div className="uiux-text">
            <h1 className="uiux-heading">UI/UX Designing</h1>
            <p className="uiux-description">
              We create user-friendly interfaces and seamless user experiences that enhance customer satisfaction and engagement, ensuring your digital products or services are intuitive and enjoyable to use.
            </p>
            <Link to="/uiux" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="uiux-slider">
          <img src={uiUxImages[currentUiUxImage]} alt="UI/UX Designing" className="slider-image active" />
        </div>
      </div>

      {/* Graphic Designing Block */}
      <div className="graphicdesign-block">
        <div className="graphicdesign-content">
          <div className="graphicdesign-text">
            <h1 className="graphicdesign-heading">Graphic Designing</h1>
            <p className="graphicdesign-description">
              Captivate your audience with visually stunning designs, including logos, branding materials, advertisements, and illustrations that effectively communicate your brand message and capture attention.
            </p>
            <Link to="/graphicdesign" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="graphicdesign-slider">
          <img src={graphicDesignImages[currentGraphicDesignImage]} alt="Graphic Designing" className="slider-image active" />
        </div>
      </div>

      {/* Digital Marketing Block */}
      <div className="digitalmarketing-block">
        <div className="digitalmarketing-content">
          <div className="digitalmarketing-text">
            <h1 className="digitalmarketing-heading">Digital Marketing</h1>
            <p className="digitalmarketing-description">
              Our comprehensive digital marketing strategies, including SEO, social media, content marketing, and paid advertising, help increase your online visibility, attract targeted audiences, and drive conversions.
            </p>
            <Link to="/digitalmarketing" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="digitalmarketing-slider">
          <img src={digitalMarketingImages[currentDigitalMarketingImage]} alt="Digital Marketing" className="slider-image active" />
        </div>
      </div>

      {/* Virtual Assistance Block */}
      <div className="virtualassistance-block">
        <div className="virtualassistance-content">
          <div className="virtualassistance-text">
            <h1 className="virtualassistance-heading">Virtual Assistance</h1>
            <p className="virtualassistance-description">
              Get remote support for administrative tasks, research, content creation, social media management, and more, allowing you to streamline operations and focus on core business activities with flexible virtual assistance.
            </p>
            <Link to="/virtualassistance" className="learn-more-btn">Learn More</Link>
          </div>
        </div>

        <div className="virtualassistance-slider">
          <img src={virtualAssistanceImages[currentVirtualAssistanceImage]} alt="Virtual Assistance" className="slider-image active" />
        </div>
      </div>
    </div>
  );
};

export default Services;