
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomCursor from './CustomCursor.jsx';
import { Analytics } from '@vercel/analytics/react';

function Intro() {
  return (
    <>
      <h1 className="text-[2rem] mb-8 font-normal text-left font-['Sohne',ui-sans-serif] " style={{letterSpacing: '-0.06em'}}>
        Harley Zhang
      </h1>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
        I'm a detail-oriented engineer interested in ML and product. Software Engineering major at Waterloo. I grew up in Toronto.
      </p>
              <h2 className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase" style={{letterSpacing: '0'}}>/ Work</h2>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6 ">
        I'm currently at{" "}
        <span onClick={() => window.open('https://polymarket.com/', '_blank', 'noopener,noreferrer')} className="font-normal no-underline relative text-[#666] dark:text-[#bbb] cursor-pointer focus-corners link-hit" style={{"--hit-top": '1rem', "--hit-right": '1rem', "--hit-bottom": '1rem', "--hit-left": '1rem'}}>
          Polymarket
        </span>
        . I previously worked at{" "}
        <span onClick={() => window.open('http://shopify.com/', '_blank', 'noopener,noreferrer')} className="font-normal no-underline relative text-[#666] dark:text-[#bbb] cursor-pointer focus-corners link-hit" style={{"--hit-top": '1rem', "--hit-right": '1rem', "--hit-bottom": '1rem', "--hit-left": '1rem'}}>
          Shopify
        </span>{" "}
        and{" "}
        <span
          onClick={() => window.open('http://thirdlayer.inc/', '_blank', 'noopener,noreferrer')}
          className="font-light no-underline relative text-[#666] dark:text-[#bbb] cursor-pointer focus-corners link-hit" style={{"--hit-top": '1rem', "--hit-right": '1rem', "--hit-bottom": '1rem', "--hit-left": '1rem'}}
        >
          ThirdLayer
        </span>
        , where I was the first engineer.
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
          <div className="inline-flex items-center border-[1.5px] border-dashed border-[#d6d6d6] dark:border-[#444] rounded-[2px] py-[6px] px-3 mt-2 focus-corners cursor-pointer" style={{"--corner-inset": "-1.5px", "--hit-top": '1rem', "--hit-right": '1rem', "--hit-bottom": '1rem', "--hit-left": '1rem'}}
            onClick={() => window.open('/sagebrush.pdf', '_blank', 'noopener,noreferrer')}
          >
            <div>
              <span className="font-normal no-underline relative text-[#666] dark:text-[#bbb] cursor-pointer">
                Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
              </span>
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
    <main className={`max-w-[640px] mx-auto mt-[clamp(-2rem,10vw,10rem)] p-4 pb-24 ${isDark ? 'dark' : ''}`}>
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
          <div onClick={() => window.open('https://github.com/harley-zhang', '_blank', 'noopener,noreferrer')} className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners" style={{letterSpacing: '0', "--hit-top": '1rem', "--hit-left": '1rem', "--hit-bottom": '1rem'}}>
            [G] GITHUB
          </div>
          <div onClick={() => window.open('https://www.linkedin.com/in/harley-zhang/', '_blank', 'noopener,noreferrer')} className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners" style={{letterSpacing: '0', "--hit-top": '1rem', "--hit-bottom": '1rem'}}>
            [L] LINKEDIN
          </div>
          <div onClick={() => window.open('https://x.com/harleyhzhang', '_blank', 'noopener,noreferrer')} className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase cursor-pointer focus-corners" style={{letterSpacing: '0', "--hit-top": '1rem', "--hit-right": '1rem', "--hit-bottom": '1rem'}}>
            [X] TWITTER
          </div>
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
    const preventDefault = (e) => e.preventDefault();
    const blockKeyZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        const key = e.key.toLowerCase();
        if (key === '+' || key === '-' || key === '=' || key === '_' || key === '0') {
          e.preventDefault();
        }
      }
    };
    const blockWheelZoom = (e) => {
      if (e.ctrlKey) e.preventDefault();
    };

    const handleShortcutKeys = (e) => {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toLowerCase();
      if (key === 'g') {
        window.open('https://github.com/harley-zhang', '_blank', 'noopener,noreferrer');
      } else if (key === 'l') {
        window.open('https://www.linkedin.com/in/harley-zhang/', '_blank', 'noopener,noreferrer');
      } else if (key === 'x') {
        window.open('https://x.com/harleyhzhang', '_blank', 'noopener,noreferrer');
      }
    };

    document.addEventListener('gesturestart', preventDefault, { passive: false });
    document.addEventListener('gesturechange', preventDefault, { passive: false });
    document.addEventListener('gestureend', preventDefault, { passive: false });
    window.addEventListener('keydown', blockKeyZoom, { passive: false });
    window.addEventListener('wheel', blockWheelZoom, { passive: false });
    window.addEventListener('keydown', handleShortcutKeys);
    document.addEventListener('dragstart', preventDefault, { passive: false });

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
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
      document.removeEventListener('gestureend', preventDefault);
      window.removeEventListener('keydown', blockKeyZoom);
      window.removeEventListener('wheel', blockWheelZoom);
      window.removeEventListener('keydown', handleShortcutKeys);
      document.removeEventListener('dragstart', preventDefault);
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
      <CustomCursor />
    </div>
  );
}

export default App;
