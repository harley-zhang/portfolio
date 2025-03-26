import { useState, useEffect, useRef } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  // Calculate which items are visible
  const getItemPosition = (index) => {
    if (index === activeIndex) return 'active';
    if (index === (activeIndex + 1) % projectData.length) return 'next';
    if (index === (activeIndex - 1 + projectData.length) % projectData.length) return 'prev';
    return '';
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    if (Math.abs(diffX) > 50) { // Minimum swipe distance
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const diffX = startX - endX;
    
    if (Math.abs(diffX) > 50) { // Minimum swipe distance
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="projects-section">
      <p className="projects-heading">Projects</p>
      <div 
        className="carousel-container" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="carousel-track">
          {projectData.map((project, index) => {
            const position = getItemPosition(index);
            return (
              <div 
                key={index} 
                className={`carousel-item ${position}`}
                onClick={() => {
                  if (index !== activeIndex) {
                    if (position === 'next') handleNext();
                    else if (position === 'prev') handlePrev();
                    else setActiveIndex(index);
                  }
                }}
                style={{
                  // Set z-index based on position
                  zIndex: position === 'active' ? 10 : position ? 5 : 1
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
        <div className="carousel-dots">
          {projectData.map((_, index) => (
            <button 
              key={index} 
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 