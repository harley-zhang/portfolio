import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const cards = [
  {
    url: "../assets/ecoforecast.png",
    title: "EcoForecast",
    description: "Simulation model data for climate and plant trends",
    tools: "JavaScript &nbsp;&nbsp; Google Earth Engine",
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
    url: "../assets/trinchera.png",
    title: "Trinchera Statistics",
    description: "Data summarizer for the Trinchera conservation area",
    tools: "R",
    link: "https://github.com/harley-zhang/Trinchera_summary",
    id: 3,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/portfolio.png",
    title: "Portfolio",
    description: "Keep tabs with my education and career",
    tools: "React &nbsp;&nbsp; Tailwind CSS",
    link: "https://github.com/harley-zhang/portfolio",
    id: 4,
    color: "text-black",
    shadow: "no",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

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

  return (
    <section id="projects" className="relative">
      <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start my-8 px-5 md:mx-auto md:w-[1000px]">
        Projects
      </p>

      <div
        ref={scrollRef}
        className="flex h-full overflow-x-auto overflow-y-hidden px-5 md:px-[calc(50vw-480px)] no-scrollbar"
        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      >
        {cards.map((card, index) => (
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={card.id}
              className={`group relative flex-shrink-0 w-[430px] h-[360px] rounded-md ${index !== 0 ? 'ml-[0.9rem]' : ''}`}
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "100% auto",
                backgroundPosition: "center",
              }}
              whileHover={{ backgroundSize: "103% auto" }}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                <div>
                  <p className={`text-sm ${card.color}`}>{card.title}</p>
                </div>
                <div className="absolute bottom-5 left-5 text-left">
                  <p className={`text-md ${card.color} ${card.shadow === 'yes' ? '[text-shadow:_0_0_23px_rgb(0_0_0_/_100%)]' : ''} mr-2`}>{card.description}</p>
                  <p className={`text-sm opacity-75 ${card.color}  ${card.shadow === 'yes' ? '[text-shadow:_0_0_16px_rgb(0_0_0_/_100%)]' : ''} mt-2`} dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, '&nbsp;') }}></p>
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
