import React, { useEffect, useRef, useState } from "react";
import projectsList from "../projects/projects.json";
import "../styles/projects.css";

const ProjectsCarousel = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const getProjectWidth = () => {
      const firstProject = container.querySelector(".projectContainerWide");
      return firstProject ? firstProject.offsetWidth + 20 : 0; // Include gap
    };

    const scrollToProject = (index) => {
      const projectWidth = getProjectWidth();
      const scrollLeft = index * projectWidth - container.offsetWidth / 2 + projectWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    };

    const startAutoScroll = () => {
      const interval = setInterval(() => {
        if (!isHovered) {
          setActiveIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % projectsList.length;
            scrollToProject(nextIndex);
            return nextIndex;
          });
        }
      }, 3000); // Change project every 3 seconds

      return interval;
    };

    const autoScrollInterval = startAutoScroll();

    return () => clearInterval(autoScrollInterval);
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="projectsContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projectsList.map((project, index) => (
        <div
          key={index}
          className={`projectContainerWide ${
            index === activeIndex ? "activeProject" : ""
          }`}
        >
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <div className={`imageContainer ${project.imageClass}`}></div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
