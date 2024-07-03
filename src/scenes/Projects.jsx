import { motion } from "framer-motion";
import { SiGoogleearthengine, SiTailwindcss, SiOpenai } from "react-icons/si";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, url }) => {
  const overlayStyles = `absolute h-full text-white w-full opacity-0 hover:opacity-85 transition duration-500 bg-navy-blue z-30 flex flex-col justify-center items-center text-center p-16 text-white font-semibold`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-helvetica tracking-wide">{title}</p>
          <p className="mt-7">{subtitle}</p>
          {title === "EcoForecast" && (
            <div className="mt-2 flex">
              <SiGoogleearthengine className="text-xl m-2" size={32} color="#4285F4" />
              <IoLogoJavascript className="text-xl m-2" size={32} color="#F7DF1E" />
            </div>
          )}
          {title === "SimpleWeather" && (
            <div className="mt-2 flex">
              <TiWeatherWindyCloudy className="text-xl m-2" size={32} color="#e76241" />
              <FaReact className="text-xl m-2" size={32} color="#61DAFB" />
            </div>
          )}
          {title === "Personal Portfolio" && (
            <div className="mt-2 flex">
              <FaReact className="text-xl m-2" size={32} color="#61DAFB" />
              <SiTailwindcss className="text-xl m-2" size={32} color="#38B2AC" />
            </div>
          )}
        </div>
        <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-helvetica tracking-wide font-semibold text-4xl">
            Projects
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="lg:grid lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title="EcoForecast" subtitle="An app for land managers to visualize and analyze climate and plant ecosystem data simulation data. Made using Google Earth Engine JavaScript API with the Yale School of the Environment." url="https://ecoforecast.info" />
          <Project title="SimpleWeather" subtitle="An app that allows users to see weather for any location using search with a clean UI. Made using OpenWeatherMap API and React.js." url="https://simpleweather-murex.vercel.app/" />
          <Project title="Personal Portfolio" subtitle="My personal portfolio website. Made using React.js and Tailwind CSS." url="https://harley-zhang.vercel.app/" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
