import Header from "../components/Header";
import Hero from "../components/Hero";
import Circle from "../components/Circle";
import Services from "../components/Services";
import ListOfServices from "../components/ListOfServices";
import { motion } from "framer-motion";
import ProjectsCarousel from "../components/ProjectsCarrossel";
import ProjectsCarrosselNew from "../components/ProjectsCarrosselNew";
import Effect from "../assets/images/effect.svg";
import BottomEffect from "../components/BottomEfect";

// delete if not recyclable
// import CarTypesServices from "../components/CarTypeServices";

import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate()
  return (
    <div className="blackWrapper">
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
          <h3>OUR MISSION</h3>
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

      <section className="underHero">
        {/* left */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <h3>PORTFOLIO</h3>
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
          Our portfolio showcases our commitment to creating innovative digital solutions that drive businesses forward. At Nova, we believe design and technology can turn ideas into great opportunities.

          </p>
        </motion.div>
      </section>

      {/* <ProjectsCarousel /> */}

      <ProjectsCarrosselNew />

      <ListOfServices />

      {/* dedicated to your success... */}

      


      <section className="underHero">
        {/* left */}
        <motion.div
          className="intro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <h3>DEDICATED TO YOUR SUCCESS</h3>
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
          We are committed to giving our clients the attention they deserve. We take the time to understand each business’s unique needs, ensuring personalized solutions that drive real results. Your success is our priority, and we are with you every step of the way.

          </p>
        </motion.div>
      </section>


      <section className="underHero" style={{height: "auto"}}>
        {/* left */}
        <motion.div
          className="intro lastIntro"
          initial={{ opacity: 0, scale: 0.8, x: -150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures it only animates once when 20% of it is in view
        >
          <h3>GET IN TOUCH.</h3>
          {/* <img src={Effect} className="Effect" /> */}

          {/* <img src={Effect}/> */}
        </motion.div>

        {/* right */}
        <motion.div
          className="intro buttonWrapper"
          initial={{ opacity: 0, scale: 0.8, x: 150 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5}} // Ensures it only animates once when 20% of it is in view
        >
          <button onClick={() => Navigate("/contact-us")}>
            Contact
          </button>
        </motion.div>
      </section>

      {/* <Services /> */}
      {/* </motion.div> */}

    </div>
  );
};

export default Home;
