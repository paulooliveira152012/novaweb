import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

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
      <div className="intro">
        <h3>Nova Web Solutions</h3>
        <p>We empower people and businesses to create strong, impactful digital presences. Through innovative solutions and a passion for excellence, we bring your ideas to life and connect you with endless online possibilities.</p>
      </div>
      </section>
      <Services />
      
      <ProjectsCarousel />   
      
      
    </div>
  );
};

export default Home;
