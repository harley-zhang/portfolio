import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function Intro() {
  return (
    <>
      <h1>Harley Zhang</h1>
      <p>
        I'm a detail-oriented engineer interested in ML and product. I'm currently studying Software Engineering at Waterloo. I grew up in Toronto.
      </p>
      <h2>/ Work</h2>
      <p>
        I was previously an engineer at{" "}
        <a href="http://shopify.com/" target="_blank" rel="noopener noreferrer">
          Shopify
        </a>{" "}
        and{" "}
        <a
          href="http://thirdlayer.inc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThirdLayer, Inc.
        </a>
        , where I was the first employee.
      </p>
    </>
  );
}

function ResearchSection() {
  return (
    <section>
      <h2>/ Research</h2>
      <ul>
        <li>[Cornell Tech] LLM geocoding and mapping</li>
        <li>[University of California, Berkeley] 3D brain viewing models</li>
        <li>
          [Yale University] Climate simulation modelling
          <div className="yale-project">
            <div>
              <a
                href="/sagebrush.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
              </a>
              <br />
              <small className="authors">RYAN DOUGHERTY, HARLEY ZHANG</small>
            </div>
          </div>
        </li>
        <li>[University of Toronto] ML classification for satellite imagery</li>
      </ul>
    </section>
  );
}

function Home({ isDark }) {
  return (
    <main className={`container ${isDark ? 'dark' : ''}`}>
      <Intro />
      <ResearchSection />
      <section>
        <h2>/ Contact</h2>
        <p>harley.zhang (at) uwaterloo (dot) ca</p>
      </section>
      <footer className="footer">
        <a href="https://github.com/harley-zhang" target="_blank" rel="noopener noreferrer" className="footer-button">[G] GITHUB</a>
        <a href="https://www.linkedin.com/in/harley-zhang/" target="_blank" rel="noopener noreferrer" className="footer-button">[L] LINKEDIN</a>
        <a href="https://x.com/harleyhzhang" target="_blank" rel="noopener noreferrer" className="footer-button">[X] TWITTER</a>
      </footer>
    </main>
  );
}

function Pdf() {
  return (
    <iframe
      src="/sagebrush.pdf"
      title="sagebrush"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setThemeLoaded(true);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const classes = [];
    if (isDark) classes.push('dark');
    if (themeLoaded) classes.push('theme-loaded');
    
    document.body.className = classes.join(' ');
  }, [isDark, themeLoaded]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/sagebrush.pdf" element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
