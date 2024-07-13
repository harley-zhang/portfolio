import { useState } from "react";
import Navbar from "../scenes/Navbar";
import Landing from "../scenes/Landing";
import Projects from "../scenes/Projects";
import Experience from "../scenes/Experience";
import Education from "../scenes/Education";
import Footer from "../scenes/Footer";

function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage] = useState(true);

  return (
    <div className="app bg-grey">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default Home;
