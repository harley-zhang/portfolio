import { useState, useEffect } from 'react';
// Removing carousel imports for now
// import Carousel from 'react-spring-3d-carousel';
// import { config } from 'react-spring';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectData = [
  {
    name: "EcoForecast",
    windowType: "web",
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "video",
    mediaLink: "/assets/Projects/ecoforecast.mov",
    description: ["text"]
  },
  {
    name: "BeWell",
    windowType: "phone",
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "video",
    mediaLink: "/assets/Projects/bewell.mov",
    description: ["text"]
  },
  {
    name: "Content Deserts",
    windowType: "web",
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "image",
    mediaLink: "/assets/Projects/content-deserts.png",
    description: ["text"]
  },
  {
    name: "Conservation Statistics",
    windowType: "web",
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "image",
    mediaLink: "/assets/Projects/conservation-statistics.png",
    description: ["text"]
  }
];

function Projects() {
  // Back to debug mode
  return (
    <section className="projects-section">
      <p className="projects-heading">Projects</p>
      <div className="debug-container">
        <div className="project-cards">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 