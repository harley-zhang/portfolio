import './Projects.css';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineWifi } from "react-icons/md";
import { TbBatteryFilled } from "react-icons/tb";
import { LiaSignalSolid } from "react-icons/lia";

// Create a global state to track which videos failed to load
const failedVideos = new Set();
let globalVideoTimeoutActive = false;
let globalVideoTimeout = null;

function ProjectCard({ project, onMediaLoaded }) {
  const { name, windowType, mediaType, mediaLink } = project;
  
  const isWeb = windowType === 'web';
  const isPhone = windowType === 'phone';
  const isVideo = mediaType === 'video';
  
  // For the time display in EST
  const [time, setTime] = useState('');
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(isVideo && failedVideos.has(mediaLink));
  
  // Reset video when project changes
  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.load();
      
      // Only set up the timeout once for the whole app
      if (!globalVideoTimeoutActive && !failedVideos.has(mediaLink)) {
        globalVideoTimeoutActive = true;
        
        if (globalVideoTimeout) {
          clearTimeout(globalVideoTimeout);
        }
        
        globalVideoTimeout = setTimeout(() => {
          // If video hasn't loaded by now, mark it as failed
          if (!videoRef.current.readyState >= 3) {
            failedVideos.add(mediaLink);
            setUseFallback(true);
          }
          globalVideoTimeoutActive = false;
        }, 3000);
      }
    }
    
    return () => {
      // Only clear the timeout on unmount if we're the one who set it
      if (globalVideoTimeoutActive && globalVideoTimeout) {
        clearTimeout(globalVideoTimeout);
        globalVideoTimeoutActive = false;
      }
    };
  }, [project, isVideo, mediaLink]);
  
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
    if (isVideo && !useFallback) {
      // Video loaded successfully
      if (globalVideoTimeout) {
        clearTimeout(globalVideoTimeout);
        globalVideoTimeoutActive = false;
      }
    }
    if (onMediaLoaded) {
      onMediaLoaded();
    }
  };

  const handleVideoError = () => {
    if (isVideo) {
      failedVideos.add(mediaLink);
      setUseFallback(true);
      if (onMediaLoaded) {
        onMediaLoaded();
      }
    }
  };

  const getFallbackImageUrl = () => {
    return mediaLink.replace('.mov', '.png');
  };
  
  // If this video has already failed, use fallback
  useEffect(() => {
    if (isVideo && failedVideos.has(mediaLink)) {
      setUseFallback(true);
    }
  }, [isVideo, mediaLink]);
  
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
          {isVideo && !useFallback ? (
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="project-media"
              onLoadedData={handleMediaLoad}
              onError={handleVideoError}
              key={mediaLink}
            >
              <source src={mediaLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img 
              src={isVideo ? getFallbackImageUrl() : mediaLink} 
              alt={name} 
              className="project-media"
              onLoad={handleMediaLoad}
              key={isVideo ? getFallbackImageUrl() : mediaLink}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 