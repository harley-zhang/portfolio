import './Projects.css';

function ProjectCard({ project }) {
  const { name, windowType, mediaType, mediaLink } = project;
  
  const isWeb = windowType === 'web';
  const isPhone = windowType === 'phone';
  const isVideo = mediaType === 'video';
  
  return (
    <div className={`project-card ${windowType}-card`}>
      <div className="card-content">
        {isWeb && (
          <div className="window-controls">
            <div className="control red-circle"></div>
            <div className="control yellow-circle"></div>
            <div className="control green-circle"></div>
          </div>
        )}
        {isPhone && (
          <div className="dynamic-island"></div>
        )}
        <div className="media-container">
          {isVideo ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="project-media"
            >
              <source src={mediaLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={mediaLink} 
              alt={name} 
              className="project-media"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 