import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import About from './components/About/About';
import ExpEdu from './components/ExpEdu/ExpEdu';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
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
