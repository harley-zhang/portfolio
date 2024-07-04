import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Experience from "./scenes/Experience.jsx";
import Education from "./scenes/Education";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-grey">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
