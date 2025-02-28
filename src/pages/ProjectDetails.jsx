import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";
import "../styles/Portfolio.css"; 
import projectList from "../projects/projects.json";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from URL
  const navigate = useNavigate();

  // Find the project based on the ID
  const project = projectList.find((p) => p.id === id);

  if (!project) {
    return <div className="not-found"><h2>Project Not Found</h2></div>;
  }

  // Function to dynamically resolve image paths
  const getImagePath = (imageName) =>
    new URL(`../assets/images/projectsScreenshot/${imageName}`, import.meta.url).href;

  return (
    <section className="blackWrapper">
      <Header className="blackHeader" />
                  {/* Go Back Button */}
                  <button onClick={() => navigate("/portfolio")} className="regularButton">
              Go Back
            </button>
      <div className="contentContainer padding projectDetailsPage">
        <div className="session">
          <article>
            <h2 className="pageTitle">{project.projectTitle}</h2>
            <img src={getImagePath(project.imageSrc)} alt={project.projectTitle} className="projectImage" />
            <p>{project.projectDescription}</p>

            {/* Visit Project Button */}
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="regularButton">
              Visit Project
            </a>


          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
