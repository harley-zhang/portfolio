import { useState, useRef, useEffect } from 'react';
import './Projects.css';

// Sample projects array - this can be modified as needed
const projects = [
  {
    name: "EcoForecast",
    windowType: "web", // 'web' or 'phone'
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "video", // 'image' or 'video'
    mediaLink: "/assets/Projects/ecoforecast.mov",
    description: ["text"]
  },
  {
    name: "BeWell",
    windowType: "phone", // 'web' or 'phone'
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "video", // 'image' or 'video'
    mediaLink: "/assets/Projects/bewell.mov",
    description: ["text"]
  },
  {
    name: "Content Deserts",
    windowType: "web", // 'web' or 'phone'
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "image", // 'image' or 'video'
    mediaLink: "/assets/Projects/content-deserts.png",
    description: ["text"]
  },
  {
    name: "Conservation Statistics",
    windowType: "web", // 'web' or 'phone'
    stack: ["React"],
    companies: [""],
    links: ["link"],
    mediaType: "image", // 'image' or 'video'
    mediaLink: "/assets/Projects/conservation-statistics.png",
    description: ["text"]
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const videoRefs = useRef({});
  const carouselRef = useRef(null);

  const nextProject = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
    setCurrentX(startX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    setCurrentX(currentX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('mousedown', handleDragStart);
    carousel.addEventListener('mousemove', handleDragMove);
    carousel.addEventListener('mouseup', handleDragEnd);
    carousel.addEventListener('mouseleave', handleDragEnd);

    carousel.addEventListener('touchstart', handleDragStart);
    carousel.addEventListener('touchmove', handleDragMove);
    carousel.addEventListener('touchend', handleDragEnd);

    return () => {
      carousel.removeEventListener('mousedown', handleDragStart);
      carousel.removeEventListener('mousemove', handleDragMove);
      carousel.removeEventListener('mouseup', handleDragEnd);
      carousel.removeEventListener('mouseleave', handleDragEnd);
      carousel.removeEventListener('touchstart', handleDragStart);
      carousel.removeEventListener('touchmove', handleDragMove);
      carousel.removeEventListener('touchend', handleDragEnd);
    };
  }, [startX, currentX, isDragging]);

  useEffect(() => {
    // Auto-play videos when they come into view
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && projects[currentIndex].mediaType === 'video') {
      currentVideo.play();
      setIsPlaying(true);
    }
    
    // Pause other videos
    Object.keys(videoRefs.current).forEach(key => {
      if (parseInt(key) !== currentIndex && videoRefs.current[key]) {
        videoRefs.current[key].pause();
      }
    });
  }, [currentIndex]);

  const renderMediaContainer = (project, index) => {
    const isActive = index === currentIndex;
    const isPrev = index === currentIndex - 1;
    const isNext = index === currentIndex + 1;
    const isVisible = isActive || isPrev || isNext;

    if (!isVisible) return null;

    const containerClass = `carousel-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`;
    const { windowType, mediaType, mediaLink } = project;

    return (
      <div 
        className={containerClass} 
        key={index}
        onClick={() => {
          if (isPrev) prevProject();
          if (isNext) nextProject();
        }}
      >
        <div className={`window-container ${windowType}`}>
          {windowType === 'web' && (
            <div className="window-controls">
              <div className="control-dot red-dot"></div>
              <div className="control-dot yellow-dot"></div>
              <div className="control-dot green-dot"></div>
            </div>
          )}
          
          {windowType === 'phone' && (
            <div className="dynamic-island">
            </div>
          )}
          
          <div className="media-container">
            {mediaType === 'image' ? (
              <img src={mediaLink} alt={project.name} className="project-media" />
            ) : (
              <div className="video-wrapper">
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={mediaLink}
                  className="project-media"
                  loop
                  muted
                />
                <button className="play-pause-btn" onClick={togglePlay}>
                  {isPlaying && index === currentIndex ? '❚❚' : '▶'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {projects.map((project, index) => renderMediaContainer(project, index))}
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <div 
              key={index} 
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button className="nav-arrow left" onClick={prevProject}>
          &#10094;
        </button>
        <button className="nav-arrow right" onClick={nextProject}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Projects; 