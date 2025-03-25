import './App.css';
import Background from './components/Background/Background';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ExpEdu from './components/ExpEdu/ExpEdu';
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
    </>
  );
}

export default App;
