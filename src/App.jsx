import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Background from './components/Background/Background';
import About from './components/About/About';
import ExpEdu from './components/ExpEdu/ExpEdu';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Background />
      <main className="app-container">
        <About />
        <Projects />
        <ExpEdu />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
