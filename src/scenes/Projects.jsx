import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cards = [
  {
    url: "../assets/ecoforecast.png",
    title: "EcoForecast",
    description: "Simulation model data for climate and plant trends",
    tools: "React &nbsp;&nbsp; Google Earth Engine JavaScript API",
    link: "https://ecoforecast.info/",
    id: 1,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/simpleweather.png",
    title: "SimpleWeather",
    description: "Realtime weather data at a glance",
    tools: "React &nbsp;&nbsp; OpenWeatherMap API",
    link: "https://simpleweather-murex.vercel.app/",
    id: 2,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/conservation.png",
    title: "Data Analysis",
    description: "Data summarizer for Yale conservation project",
    tools: "R",
    link: "https://github.com/harley-zhang/Conservation_summary",
    id: 3,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/portfolio.png",
    title: "Portfolio",
    description: "Keep tabs with my education and career",
    tools: "React",
    link: "https://github.com/harley-zhang/portfolio",
    id: 4,
    color: "text-black",
    shadow: "no",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(false);
  const [isRightButtonActive, setIsRightButtonActive] = useState(true);

  useEffect(() => {
    const handleWheel = (event) => {
      const element = scrollRef.current;
      const isScrollingHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);

      if (isScrollingHorizontal) {
        element.scrollLeft += event.deltaX;
        event.preventDefault();
      }
    };

    const element = scrollRef.current;
    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      setIsLeftButtonActive(element.scrollLeft > 0);
      setIsRightButtonActive(element.scrollLeft < maxScrollLeft);
    };

    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    const scrollAmount = direction === "left" ? -331 : 331;
    element.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative">
      <div className="flex items-center justify-between px-5 md:mx-auto md:w-[1000px] my-8">
        <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start">
          Projects
        </p>
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={() => scroll("left")}
            className={`transition-all ${isLeftButtonActive ? "text-white" : "opacity-30"}`}
            disabled={!isLeftButtonActive}
            whileTap={isLeftButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowBack size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className={`transition-all pl-3 ${isRightButtonActive ? "text-white" : "opacity-30"}`}
            disabled={!isRightButtonActive}
            whileTap={isRightButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowForward size={20} />
          </motion.button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full overflow-x-auto overflow-y-hidden px-5 md:px-[calc(50vw-490px)] no-scrollbar"
        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      >
        {cards.map((card, index) => (
          <a href={card.link} target="_blank" rel="noopener noreferrer" key={card.id}>
            <motion.div
              className={`group relative flex-shrink-0 w-[331px] h-[277px] xs:w-[430px] xs:h-[360px] rounded-md ${index !== 0 ? "ml-[0.9rem]" : ""}`}
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "100% auto",
                backgroundPosition: "center",
              }}
              whileHover={{ backgroundSize: "103% auto" }}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                <div>
                  <p className={`font-helvetica tracking-wide text-sm ${card.color}`}>{card.title}</p>
                </div>
                <div className="absolute bottom-5 left-5 text-left">
                  <p className={`font-helvetica tracking-wide text-[.8rem] xs:text-[.99rem] ${card.color} ${card.shadow === "yes" ? "[text-shadow:_0_0_23px_rgb(0_0_0_/_100%)]" : ""} mr-2`}>{card.description}</p>
                  <p className={`font-helvetica tracking-wide text-[.65rem] xs:text-[.85rem] opacity-75 ${card.color}  ${card.shadow === "yes" ? "[text-shadow:_0_0_16px_rgb(0_0_0_/_100%)]" : ""} mt-2`} dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, "&nbsp;") }}></p>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
