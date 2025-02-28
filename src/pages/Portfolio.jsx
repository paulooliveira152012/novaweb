import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../styles/Portfolio.css"; // New CSS file for improved styles
import projectList from "../projects/projects.json"; // Import the project data
import { motion } from "framer-motion";

// define behavior to display all the page with a slight delay
const pageVariants = {
  hidden: { opacity: 0, y: 30 }, //initialy transparent and slighly lower
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  }, //smooth fade-in effect
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
              viewport={{ once: true, amount: 0.2 }} // Ensures it animates once per scroll
              variants={pageVariants}
              className="motionWrapper"
            >
      <div className="contentContainer padding portfolioPage">
        <div className="session">
          <article>
            <h3 className="pageTitle">Portfolio</h3>
            <p>
              Explore our portfolio to see the quality and creativity behind our
              previous projects!
            </p>

            {/* Services Section */}
            <div className="portfolioContainer">
              {projectList.map((project, index) => (
                <a href={project.projectLink} target="_blank" key={index}>
                  <motion.div
                                      className="intro"
                                      initial={{ opacity: 0 }}
                                      whileInView={{ opacity: 1 }}
                                      transition={{ duration: 1.5, ease: "easeOut" }}
                                      viewport={{ once: true, amount: 0.1 }} // Ensures it only animates once when 20% of it is in view
                                    >
                  <div className="projectCard">
                    {/* Use the project image class (or a placeholder if no image is provided) */}

                    <img
                      src={getImagePath(project.imageSrc)} // Replace with dynamic image path if needed
                      alt={project.projectTitle}
                      className={`portfolioPageImg ${project.className}`}
                    />

                    <div className="titleContainer">
                      <h2>{project.projectTitle}</h2>
                      {/* <p>{project.projectDescription}</p> */}
                      </div>
                    
                  </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </article>

          {/* Contact Button */}
          <div className="buttonContainer">
            <button
              onClick={() => navigate("/contact-us")}
              className="regularButton"
              style={{ margin: "100px" }}
            >
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
