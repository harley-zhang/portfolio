import './Projects.css';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineWifi } from "react-icons/md";
import { TbBatteryFilled } from "react-icons/tb";
import { LiaSignalSolid } from "react-icons/lia";

function ProjectCard({ project, onMediaLoaded }) {
  const { name, windowType, mediaType, mediaLink } = project;
  
  const isWeb = windowType === 'web';
  const isPhone = windowType === 'phone';
  const isVideo = mediaType === 'video';
  
  // For the time display in EST
  const [time, setTime] = useState('');
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Reset video when project changes
  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [project, isVideo]);
  
  // Force media loaded event after timeout as fallback
  useEffect(() => {
    if (!mediaLoaded) {
      const timer = setTimeout(() => {
        handleMediaLoad();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [mediaLoaded]);
  
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      // Convert to EST (UTC-5)
      const estOptions = { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true,
        timeZone: 'America/New_York'
      };
      // Format time to get "5:25" style format
      const formattedTime = new Intl.DateTimeFormat('en-US', estOptions)
        .format(date)
        .replace(' AM', '')
        .replace(' PM', '');
      setTime(formattedTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleMediaLoad = () => {
    if (!mediaLoaded) {
      setMediaLoaded(true);
      if (onMediaLoaded) {
        onMediaLoaded();
      }
    }
  };
  
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
          <div className="dynamic-island">
            <div className="phone-status">
              <span className="phone-time">{time}</span>
              <div className="phone-icons">
                <LiaSignalSolid className="phone-icon" />
                <MdOutlineWifi className="phone-icon" />
                <TbBatteryFilled className="phone-icon battery" />
              </div>
            </div>
          </div>
        )}
        <div className="media-container">
          {isVideo ? (
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="project-media"
              onLoadedData={handleMediaLoad}
              onError={handleMediaLoad}
              key={mediaLink}
            >
              <source src={mediaLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={mediaLink} 
              alt={name} 
              className="project-media"
              onLoad={handleMediaLoad}
              onError={handleMediaLoad}
              key={mediaLink}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 