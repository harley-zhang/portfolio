import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Intro() {
  return (
    <>
      <h1>Harley Zhang</h1>
      <p>
        I'm a detail oriented-engineer interested in AI, UX, and product. I'm a currently studying Software Engineering at the University of Waterloo. I'm originally from Toronto.
      </p>
      <h2>[Work]</h2>
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
      <h2>[Research]</h2>
      <ul>
        <li>
          <a href="https://tech.cornell.edu" target="_blank" rel="noopener noreferrer">
            Cornell Tech
          </a>{" "}
          – LLM geocoding and mapping for news data
        </li>
        <li>
          <a href="https://www.berkeley.edu" target="_blank" rel="noopener noreferrer">
            University of California, Berkeley
          </a>{" "}
          – 3D brain viewing models from scans
        </li>
        <li>
          <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer">
            Yale University
          </a>{" "}
          – Climate and vegetation simulation modelling
          <div className="yale-project">
            <img src="/graphs.png" alt="graphs" />
            <div>
              <a
                href="/sagebrush.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              >
                Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
              </a>
              <br />
              <small>Ryan Dougherty, Harley Zhang</small>
            </div>
          </div>
        </li>
        <li>
          <a href="https://www.utoronto.ca" target="_blank" rel="noopener noreferrer">
            University of Toronto
          </a>{" "}
          – Machine learning for land cover classification
        </li>
      </ul>
    </section>
  );
}

function Home() {
  return (
    <main className="container">
      <Intro />
      <ResearchSection />
      <section>
        <h2>[Contact]</h2>
        <p>harley.zhang (at) uwaterloo (dot) ca</p>
      </section>
      <footer className="footer">
        <a
          href="https://github.com/harley-zhang"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/harley-zhang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        <a
          href="https://x.com/HarleyZhang06"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sagebrush.pdf" element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
