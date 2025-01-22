import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../styles/Portfolio.css"; // New CSS file for improved styles
import projectList from "../projects/projects.json"; // Import the project data

// Import images
import placeHolder from "../assets/images/logo_white.svg";

import cristaos from "../assets/images/projectsScreenshot/cristaos.png";
import hikari from "../assets/images/projectsScreenshot/hikari.png";
import grads from "../assets/images/projectsScreenshot/grads.png";
import launion from "../assets/images/projectsScreenshot/launion.png";
import weatherapp from "../assets/images/projectsScreenshot/weather.png";
import acj from "../assets/images/projectsScreenshot/acj.png";

const Portfolio = () => {
  const navigate = useNavigate();

  const images = {
    cristaos,
    hikari,
    grads,
    launion,
    weatherapp,
    acj,
  };

  return (
    <>
      <Header className="blackHeader" />
      <div className="contentContainer padding portfolioPage">
        <div className="session">
          <article>
            <h2 className="pageTitle">Portfolio</h2>
            <p>
              Explore our portfolio to see the quality and creativity behind our
              previous projects!
            </p>

            {/* Services Section */}
            <div className="listOfItemsContainer">
              {projectList.map((project, index) => (
                <a href={project.projectLink} target="_blank">
                  <div key={index} className="serviceCard">
                    {/* Use the project image class (or a placeholder if no image is provided) */}
                    <div>
                    <img
                      src={images[project.imageSrc]} // Replace with dynamic image path if needed
                      alt={project.projectTitle}
                      className={project.className}
                    />
                    </div>

                    <div>
                      <h2>{project.projectTitle}</h2>
                      <p>{project.projectDescription}</p>
                    </div>
                  </div>
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
    </>
  );
};

export default Portfolio;
