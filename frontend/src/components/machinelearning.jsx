import React from "react";
import "./machinelearning.css";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaBuilding,
  FaRocket,
  FaMagic,
  FaCogs,
  FaChartLine,
  FaBrain,
  FaCode,
  FaMicrochip,
  FaProjectDiagram,
  FaCloud,
  FaNetworkWired,
  FaShapes,
  FaCube,
  FaDatabase,
  FaChartBar,
  FaCubes,
  FaCalendarAlt,
} from "react-icons/fa"; // Import icons from react-icons/fa

const MachineLearning = () => {
  return (
    <div className="machine-learning-container">
      {/* Block 1 - Existing Block */}
      <div className="machine-learning-image-block">
        <img
          src="machinelearningblock1.jpg" // Replace with your actual image URL
          alt="Machine Learning"
          className="machine-learning-image"
        />
      </div>

      {/* Block 2 - New Block with Text and Background Image */}
      <motion.div
        className="machine-learning-block-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url('https://iticollege.edu/wp-content/uploads/2024/07/Machine-Learning-Basics.jpg')`, // Add your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="block-2-content">
          <h2>Unlock the Power of Machine Learning - Techprime Solution</h2>
          <p>
            No technology has revolutionized the business landscape more profoundly than Machine Learning in the last 30 years. Today, Machine Learning is the biggest catalyst for transformation in the business world.
          </p>
          <div className="stats-container">
            <div className="stat">
              <h3>$1.3 Trillion</h3>
              <p>Estimated market value of Machine Learning by the year 2032</p>
            </div>
            <div className="stat">
              <h3>54%</h3>
              <p>Companies have implemented Machine Learning in some areas of their business.</p>
            </div>
            <div className="stat">
              <h3>$415.81 Billion</h3>
              <p>The projected value of the Machine Learning market in the US alone by the end of this decade</p>
            </div>
            <div className="stat">
              <h3>7 in 10</h3>
              <p>Organizations have specific training programs for workers for Generative Machine Learning</p>
            </div>
          </div>
        </div>
      </motion.div>

     {/* Block 3 - AI-Powered Development Services */}
<motion.div
  className="ai-services-block"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="ai-services-content">
    <h2>Our AI-Powered Development Services</h2>
    <div className="ai-services-container">
      {[
        {
          id: 1,
          icon: <FaLightbulb className="ai-icon" />,
          title: "AI Strategy Consultation",
          description:
            "We help you identify key areas where AI can drive the most value for your business. Our AI consulting services guide you in building a customized AI roadmap for impactful transformation.",
        },
        {
          id: 2,
          icon: <FaMobileAlt className="ai-icon" />,
          title: "AI-Powered Mobile App Development",
          description:
            "Transform user experiences with AI-driven mobile apps. Our expertise ensures feature-rich, intelligent applications tailored to your business needs.",
        },
        {
          id: 3,
          icon: <FaLaptopCode className="ai-icon" />,
          title: "Custom AI Software Solutions",
          description:
            "We develop AI-powered software that enhances automation, optimizes workflows, and drives operational efficiency to meet your business goals.",
        },
        {
          id: 4,
          icon: <FaRobot className="ai-icon" />,
          title: "Conversational AI & Chatbot Development",
          description:
            "Enhance customer engagement with intelligent chatbots that provide seamless support and personalized interactions, reducing operational costs.",
        },
        {
          id: 5,
          icon: <FaBuilding className="ai-icon" />,
          title: "Enterprise AI Solutions",
          description:
            "Leverage AI to transform your enterprise operations, automate processes, and make data-driven decisions with our tailored AI solutions.",
        },
        {
          id: 6,
          icon: <FaRocket className="ai-icon" />,
          title: "AI PoC & MVP Development",
          description:
            "Quickly validate AI-driven concepts and prototypes with our rapid Proof of Concept (PoC) and Minimum Viable Product (MVP) development services.",
        },
        {
          id: 7,
          icon: <FaMagic className="ai-icon" />,
          title: "Generative AI Development",
          description:
            "Unlock the power of Generative AI to create innovative digital content, automate creative processes, and build AI-generated experiences.",
        },
        {
          id: 8,
          icon: <FaCogs className="ai-icon" />,
          title: "AI System Integration",
          description:
            "Seamlessly integrate AI capabilities into your existing systems and optimize performance with our AI integration services.",
        },
        {
          id: 9,
          icon: <FaChartLine className="ai-icon" />,
          title: "AI-Driven Predictive Analytics",
          description:
            "Harness the power of AI to build predictive models that provide actionable insights, optimize strategies, and improve decision-making.",
        },
      ].map((service) => (
        <motion.div
          key={service.id}
          className="ai-service-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: service.id * 0.1 }}
        >
          <div className="ai-icon-container">{service.icon}</div>
          <div className="ai-service-number">0{service.id}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>


      {/* Block 4 - AI Models We Have Expertise In */}
      <motion.div
        className="machine-learning-block-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x1080')`, // Add your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="block-4-content">
          <h2>AI Models We Have Expertise In</h2>
          <div className="ai-models-container">
            {[
              { id: 1, name: "GPT-4", icon: <FaBrain className="ai-model-icon" /> },
              { id: 2, name: "LLaMA-3", icon: <FaCode className="ai-model-icon" /> },
              { id: 3, name: "PaLM-2", icon: <FaMicrochip className="ai-model-icon" /> },
              { id: 4, name: "Claude", icon: <FaProjectDiagram className="ai-model-icon" /> },
              { id: 5, name: "DALL-E 2", icon: <FaShapes className="ai-model-icon" /> },
              { id: 6, name: "Whisper", icon: <FaCloud className="ai-model-icon" /> },
              { id: 7, name: "Stable Diffusion", icon: <FaCube className="ai-model-icon" /> },
              { id: 8, name: "Microsoft Phi-2", icon: <FaDatabase className="ai-model-icon" /> },
              { id: 9, name: "Google Gemini", icon: <FaChartBar className="ai-model-icon" /> },
              { id: 10, name: "Vicuna", icon: <FaCubes className="ai-model-icon" /> },
              { id: 11, name: "Mistral AI", icon: <FaNetworkWired className="ai-model-icon" /> },
              { id: 12, name: "Bloom-560m", icon: <FaBrain className="ai-model-icon" /> },
              { id: 13, name: "BERT", icon: <FaCode className="ai-model-icon" /> },
              { id: 14, name: "T5", icon: <FaMicrochip className="ai-model-icon" /> },
              { id: 15, name: "ERNIE", icon: <FaProjectDiagram className="ai-model-icon" /> },
            ].map((model) => (
              <motion.div
                key={model.id}
                className="ai-model-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: model.id * 0.1 }}
              >
                <div className="ai-model-icon-container">{model.icon}</div>
                <h3>{model.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Block 5 - Ready to Transform Your Business with AI? */}
      <motion.div
        className="machine-learning-block-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="block-5-content">
          <div className="block-5-text">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>
              Step into the Future with a top-tier Artificial Intelligence Software Development Company and take the next step towards innovation.
            </p>
            <button className="consultation-button">
              <FaCalendarAlt className="button-icon" />
              Schedule Your Free Consultation Call
            </button>
          </div>
          <div className="block-5-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1682124672287-522dc636dd83?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path
              alt="AI Transformation"
              className="block-5-img"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MachineLearning;