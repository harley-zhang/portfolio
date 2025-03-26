import './Projects.css';
import { useState, useEffect } from 'react';
import { MdOutlineWifi } from "react-icons/md";
import { TbBatteryFilled } from "react-icons/tb";
import { LiaSignalSolid } from "react-icons/lia";

function ProjectCard({ project }) {
  const { name, windowType, mediaType, mediaLink } = project;
  
  const isWeb = windowType === 'web';
  const isPhone = windowType === 'phone';
  const isVideo = mediaType === 'video';
  
  // For the time display in EST
  const [time, setTime] = useState('');
  
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