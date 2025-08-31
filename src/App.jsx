
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';

function Intro() {
  return (
    <>
      <h1 className="text-[2rem] mb-8 font-normal text-left font-['Sohne',ui-sans-serif] " style={{letterSpacing: '-0.06em'}}>
        Harley Zhang
      </h1>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
        I'm a detail-oriented engineer interested in ML and product. I'm currently studying Software Engineering at Waterloo. I grew up in Toronto.
      </p>
              <h2 className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase" style={{letterSpacing: '0'}}>/ Work</h2>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
        I was previously an engineer at{" "}
        <a href="http://shopify.com/" target="_blank" rel="noopener noreferrer" className="font-normal no-underline relative text-[#666] dark:text-[#bbb] bg-gradient-to-r from-[#666] to-[#666] dark:from-[#bbb] dark:to-[#bbb] bg-no-repeat bg-[length:100%_1px] bg-[position:100%_100%] transition-[background-size] duration-[0.25s] ease-in-out hover:bg-[length:0%_1px]">
          Shopify
        </a>{" "}
        and{" "}
        <a
          href="http://thirdlayer.inc/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-light no-underline relative text-[#666] dark:text-[#bbb] bg-gradient-to-r from-[#666] to-[#666] dark:from-[#bbb] dark:to-[#bbb] bg-no-repeat bg-[length:100%_1px] bg-[position:100%_100%] transition-[background-size] duration-[0.25s] ease-in-out hover:bg-[length:0%_1px]"
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
      <h2 className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase" style={{letterSpacing: '0'}}>/ Research</h2>
      <ul className="text-left list-none pl-0">
                  <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
            <span className="font-normal">[ Cornell Tech ]</span> LLM geocoding and mapping
          </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
          <span className="font-normal">[ University of California, Berkeley ]</span> 3D brain viewing models
        </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
          <span className="font-normal">[ Yale University ]</span> Climate simulation modelling
          <div className="inline-flex items-center border-[1.5px] border-dashed border-[#d6d6d6] dark:border-[#444] rounded py-[6px] px-3 mt-2">
            <div>
              <a
                href="/sagebrush.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal no-underline relative text-[#666] dark:text-[#bbb] bg-gradient-to-r from-[#666] to-[#666] dark:from-[#bbb] dark:to-[#bbb] bg-no-repeat bg-[length:100%_1px] bg-[position:100%_100%] transition-[background-size] duration-[0.25s] ease-in-out hover:bg-[length:0%_1px]"
              >
                Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
              </a>
              <br />
              <small className="text-xs font-light font-['SohneMono'] ml-0" style={{letterSpacing: '0'}}>
                RYAN DOUGHERTY, HARLEY ZHANG
              </small>
            </div>
          </div>
        </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
          <span className="font-normal">[ University of Toronto ]</span> ML classification for satellite imagery
        </li>
      </ul>
    </section>
  );
}

function Home({ isDark }) {
  return (
    <main className={`max-w-[640px] mx-auto mt-[clamp(-2rem,10vw,10rem)] p-4 ${isDark ? 'dark' : ''}`}>
      <Intro />
      <ResearchSection />
      <section>
        <h2 className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase" style={{letterSpacing: '0'}}>/ Contact</h2>
        <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
          harleyzhang06 (at) gmail (dot) com
        </p>
      </section>
      <footer className="fixed bottom-4 left-4 right-4 z-50">
        <div className="flex flex-wrap gap-[2px]">
          <a href="https://github.com/harley-zhang" target="_blank" rel="noopener noreferrer" className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 hover:bg-[#34B989] hover:bg-opacity-100 uppercase" style={{letterSpacing: '0'}}>
            [G] GITHUB
          </a>
          <a href="https://www.linkedin.com/in/harley-zhang/" target="_blank" rel="noopener noreferrer" className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 hover:bg-[#34B989] hover:bg-opacity-100 uppercase" style={{letterSpacing: '0'}}>
            [L] LINKEDIN
          </a>
          <a href="https://x.com/harleyhzhang" target="_blank" rel="noopener noreferrer" className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 hover:bg-[#34B989] hover:bg-opacity-100 uppercase" style={{letterSpacing: '0'}}>
            [X] TWITTER
          </a>
        </div>
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
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setThemeLoaded(true);
    
    const loadApp = async () => {
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', resolve, { once: true });
        }
      });
      
      await new Promise(resolve => requestAnimationFrame(resolve));
      
      setAppLoaded(true);
    };
    
    loadApp();
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const classes = [];
    if (isDark) classes.push('dark');
    if (themeLoaded) classes.push('theme-loaded');
    
    document.body.className = classes.join(' ');
  }, [isDark, themeLoaded]);

  return (
    <div className={`${appLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[0.6s] ease-in-out`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/sagebrush.pdf" element={<Pdf />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
