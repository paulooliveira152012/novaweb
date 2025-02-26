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
      <svg width="500" height="500" viewBox="0 0 100 100" className="circle-svg">
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="5" fill="none" />

        {/* Animated circle (progress) */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="0.7"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // Start from the top
        />
      </svg>

      <h2 className="circle-text">The world is digital,</h2>
      <h2 className="circle-text">Is your business </h2>
      <h2 className="circle-text">digital too?</h2>
      <h2 className="circle-text" style={{color: "#969696"}}>We can help!</h2>
    </div>
  );
};

export default Circle;
