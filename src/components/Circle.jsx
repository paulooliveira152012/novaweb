import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/components/circle.css";

const Circle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // Smooth and natural timing
  });

  // Optimized speed: Ends after about 110% scrolling
  const strokeOffset = useTransform(scrollYProgress, [0, .6], [300, 0]); 

  return (
    <div ref={ref} className="circleComponent">
          <svg 
      width="80%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid meet" 
      className="circle-svg"
    >

      {/* Define the Gradiant */}
      <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fed639" />
            <stop offset="100%" stopColor="" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5" fill="none" />

        {/* Animated circle (progress) */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          // stroke="white"
          stroke="url(#gradientStroke)" // Apply gradient here
          strokeWidth="0.7"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // Start from the top
        />
      </svg>
      <div className="circle-TextContainer">
      <h2 className="circle-text">The world is digital,</h2>
      <h2 className="circle-text">Is your business </h2>
      <h2 className="circle-text">digital too?</h2>
      <h2 className="circle-text" style={{color: "#969696"}}>We can help!</h2>
      </div>
    </div>
  );
};

export default Circle;
