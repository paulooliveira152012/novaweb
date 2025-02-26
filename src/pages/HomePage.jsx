import Header from "../components/Header";
import Hero from "../components/Hero";
import Circle from "../components/circle";
import Services from "../components/Services";
import { motion } from "framer-motion";
import ProjectsCarousel from "../components/ProjectsCarrossel";
import Effect from "../assets/images/effect.svg";

// delete if not recyclable
// import CarTypesServices from "../components/CarTypeServices";

import "../styles/style.css";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* hero */}
      {/* <Header className={"absoluteHeader blackHeader"} /> */}
      <Hero />
      {/* BusinessInfo component */}


      {/* lines from left effect */}
      <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <img src={Effect} className="Effect" />
        </motion.div>

      <section className="underHero">
        {/* left */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <h3>Our Mission</h3>
          {/* <img src={Effect} className="Effect" /> */}

          {/* <img src={Effect}/> */}
        </motion.div>

        {/* right */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: 150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5}} // Ensures it only animates once when 20% of it is in view
        >
          <p>
            Our goal is to provide creative and functional solutions that help
            businesses stand out in the digital world. We focus on each client’s
            unique needs to deliver a high-quality and innovative digital
            presence. Driven by passion, we help businesses thrive and bring
            creative ideas to life.
          </p>
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -150 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
      > */}
      <Circle />
      
      <Services />
      {/* </motion.div> */}

      <ProjectsCarousel />
    </div>
  );
};

export default Home;
