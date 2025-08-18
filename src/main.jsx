import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { startGlobeFaviconAnimation } from './faviconAnimation.js'

const startThemeAwareFavicon = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let currentAnimation = null;
  
  const updateFavicon = (isDark) => {
    if (currentAnimation) {
      currentAnimation();
    }
    currentAnimation = startGlobeFaviconAnimation({ 
      frameDelay: 600,
      isDark: isDark
    });
  };
  
  updateFavicon(mediaQuery.matches);
  
  mediaQuery.addEventListener('change', (e) => {
    updateFavicon(e.matches);
  });
};

startThemeAwareFavicon();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
