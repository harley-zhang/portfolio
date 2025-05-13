import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import About from './components/About/About';
import ExpEdu from './components/ExpEdu/ExpEdu';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => e.preventDefault();
    window.addEventListener('contextmenu', handleContextMenu);
    
    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && 
          (e.key === 'u' || e.key === 's' || e.key === 'i' || 
           e.key === 'c' || e.key === 'v' || e.key === 'j')) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div className="maintenance-overlay">be back soon</div>
      <Background />
      <Routes>
        <Route path="/:projectName?" element={<MainLayout />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

// Create a layout component to hold the main content
function MainLayout() {
  return (
    <main className="app-container">
      <About />
      <Projects />
      <ExpEdu />
    </main>
  );
}

export default App;
