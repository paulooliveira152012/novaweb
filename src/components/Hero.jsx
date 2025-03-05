import "../styles/style.css";
import "../styles/components/hero.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Starfield from "../components/Starfield";
import Elipse from "../assets/images/Ellipse.svg";
import { motion, AnimatePresence } from "framer-motion";

const expertise = [
  { title: "WEBSITES" },
  { title: "SOCIAL MEDIA" },
  { title: "E-COMMERCE" },
  { title: "LANDING PAGES" }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentExpertise, setCurrentExpertise] = useState(0);

  // Change expertise every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertise((prevIndex) => (prevIndex + 1) % expertise.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" role="banner" aria-labelledby="motor picture">
      <Header className="blackHeader transparent" />
      <Starfield />
      <img className="heroImg" />
      
      <div className="heroContent">
        {/* Dynamically Display Changing Expertise */}
        <div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentExpertise}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: -150 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {expertise[currentExpertise].title}
            </motion.h1>
          </AnimatePresence>
          <p>At <span style={{color: "yellow", fontWeight: "bold"}}>Nova Digital Solutions </span>We transform your ideas into innovative digital solutions to elevate your business online.</p>
        </div>

        <button
          onClick={() => {
            console.log("Button Clicked!");
            navigate("/contact-us");
          }}
          style={{ cursor: "pointer" }}
        >
          Contact us
        </button>

        <img src={Elipse} className="ellipse" />
      </div>
    </div>
  );
};

export default Hero;
