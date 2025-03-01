import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../styles/Portfolio.css"; 
import projectList from "../projects/projects.json"; 
import { motion } from "framer-motion";

// Define animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const Portfolio = () => {
  const navigate = useNavigate();

  // Function to dynamically resolve image paths
  const getImagePath = (imageName) =>
    new URL(`../assets/images/projectsScreenshot/${imageName}`, import.meta.url).href;

  return (
    <section className="blackWrapper">
      <Header className="blackHeader" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={pageVariants}
        className="motionWrapper"
      >
        <div className="contentContainer padding portfolioPage">
          <div className="session">
            <article>
              <h3 className="pageTitle">Portfolio</h3>
              <p>Explore our portfolio to see the quality and creativity behind our previous projects!</p>

              {/* Projects Section */}
              <div className="portfolioContainer">
                {projectList.map((project, index) => (
                  <motion.div
                    key={index}
                    className="intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <div className="projectCard" onClick={() => navigate(`/project/${project.id}`)}>
                      <img
                        src={getImagePath(project.imageSrc)}
                        alt={project.projectTitle}
                        className={`portfolioPageImg ${project.className}`}
                      />
                      <div className="titleContainer">
                        <h2>{project.projectTitle}</h2>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>

            {/* Contact Button */}
            <div className="buttonContainer">
              <button onClick={() => navigate("/contact-us")} className="regularButton">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
