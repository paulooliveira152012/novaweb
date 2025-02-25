import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { motion } from "framer-motion";
import ProjectsCarousel from "../components/ProjectsCarrossel";

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
      <section className="underHero">
        <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <h3>Nova Web Solutions</h3>
          <p>
            We empower people and businesses to create strong, impactful digital
            presences. Through innovative solutions and a passion for
            excellence, we bring your ideas to life and connect you with endless
            online possibilities.
          </p>
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -150 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
      > */}
        <Services />
      {/* </motion.div> */}

      <ProjectsCarousel />
    </div>
  );
};

export default Home;
