import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import Landing from "./scenes/Landing";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true); 
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="app bg-deep-blue">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage = {selectedPage} 
      setSelectedPage = {setSelectedPage}
    />
    <Landing setSelectedPage={setSelectedPage} />
  </div>
  );
}

export default App;
