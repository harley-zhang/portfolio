import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Credits from "../components/Credits";
import Footer from "../scenes/Footer";
import { GoArrowUpRight } from "react-icons/go";
import EcoForecastBanner from "../assets/Project-Pages/ecoforecast/ecoforecast-banner.png";
import yale from "../assets/Project-Pages/ecoforecast/yale.png";
import usgs from "../assets/Project-Pages/ecoforecast/usgs.png";
import marshall from "../assets/Project-Pages/ecoforecast/marshall.png";
import utah from "../assets/Project-Pages/ecoforecast/utah-state.png";

const ecoForecastLogos = [
    {
        url: yale,
        alt: "Yale School of the Environment",
        link: "https://environment.yale.edu/",
    },
    {
        url: usgs,
        alt: "USGS",
        link: "https://www.usgs.gov/",
    },
    {
        url: marshall,
        alt: "Marshall University",
        link: "https://www.marshall.edu/",
    },
    {
        url: utah,
        alt: "Utah State University",
        link: "https://www.usu.edu/",
    },
];

const EcoForecast = () => {
    return (
        <>
            <Helmet>
                <title>EcoForecast | Harley Zhang</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 mb-4 text-center">EcoForecast</h1>
                <p className="mt-6 xs:mt-8 text-xs xs:text-sm sm:text-base text-center text-grey-light">
                    <span className="mr-7">React</span>
                    <span>Google Earth Engine JavaScript API</span>
                </p>

                <div className="flex flex-col items-center mt-8 space-y-6 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-5">
                    <a
                        href="https://ecoforecast.vercel.app/"
                        className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all duration-300 text-black px-5 py-2 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit EcoForecast
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                    <a
                        href="https://github.com/harley-zhang/ecoforecast_app"
                        className="text-[.85rem] sm:text-sm flex items-center relative group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                    <a
                        href="https://doi.org/10.1002/ecs2.2394"
                        className="text-[.85rem] sm:text-sm flex items-center relative group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About STEPWAT2
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>
            </div>

            <Credits logos={ecoForecastLogos} />

            <div className="md:w-[960px] mx-5 md:mx-auto mt-16 xs:mt-20 items-center">
                <img src={EcoForecastBanner} className="rounded-md" alt="EcoForecast app" />
            </div>

            <div className="sm:w-[750px] mx-auto px-5">
                <p className="mt-16 xs:mt-20 text-lg">
                    EcoForecast is a web application that allows farmers, ranchers, foresters, and land managers to visualize and analyze future ecological changes in the sagebrush habitat across the United States. The app uses data generated using the <a href="https://github.com/DrylandEcology/STEPWAT2" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">STEPWAT2</a> simulation model and is built using React and <a href="https://developers.google.com/earth-engine" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">Google Earth Engine JavaScript API</a>, a cloud-based platform for remote sensing data analysis.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    This app is maintained and supported by friends at <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white 2 underline">Yale University</a>, the <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">United States Geological Survey (USGS)</a>, <a href="https://www.marshall.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">Marshall University</a>, and <a href="https://www.usu.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">Utah State University</a>.
                </p>

                <h2 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14 font-sf-regular">
                    How it works
                </h2>
                <p className="mt-6 xs:mt-8 text-lg">
                    EcoForecast offers a suite of tools to explore and analyze data generated by STEPWAT2. Users can select plant functional types, choose from various time periods and climate scenarios, and simulate grazing levels and wildfire conditions. The app allows for the selection of areas of interest by drawing shapes or inputting coordinates. Data can be visualized using an interactive data viewer and managed through geometry and layer controls. Users can then generate download links for compressed ZIP files containing TIF rasters of selected layers.
                </p>

                <h2 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14 font-sf-regular">
                    About STEPWAT2
                </h2>
                <p className="mt-6 xs:mt-8 text-lg">
                    STEPWAT2 is an individual-based simulation model for dryland ecosystems, focusing on the effects of climate change and disturbances on plant communities. It integrates a soil water model to simulate resource competition among plants based on root distribution and soil moisture dynamics. Validated with field data from big sagebrush communities, STEPWAT2 provides insights into how climate shifts and disturbances like fire and grazing affect species composition and biomass.
                </p>

                <h2 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14 font-sf-regular">
                    STEPWAT2 model validation
                </h2>
                <p className="mt-6 xs:mt-8 text-lg">
                    A <a href="https://doi.org/10.1002/ecs2.2394" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">study</a> by the lab group I was working with validated the model using vegetation data from 15 sagebrush communities in the western U.S. during 2013-2014. Sites were chosen to cover various Greater Sage-grouse Management Zones with minimal human disturbance, characterized by level topography. At each site, three 100 m² plots with 30 randomly sampled 20×50 cm quadrats were established. Vegetation data, including percent canopy cover for each plant species, was recorded. Plant taxa were categorized into functional types, and absolute cover for each type was averaged to determine site-level mean cover.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Big sagebrush stand structure was characterized by recording individual counts and canopy volume size class distribution. Canopy volume was calculated using diameter and height measurements. Soil samples from multiple depths were analyzed for texture. The STEPWAT2 model simulated plant community dynamics across the sites under current and future climate scenarios over 300 years with 100 iterations per site. Parameters included space allocation, rooting depth, phenological activity, and growth characteristics for each plant functional type.
                </p>
            </div>

            <div className="md:w-[960px] pt-1 pb-12 bg-grey-reference mx-5 md:mx-auto rounded-lg mt-20 sm:mt-24 md:mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <p className="text-2xl sm:text-4xl px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Dive into the data and try EcoForecast today.
                    </p>
                    <div className="flex justify-center mt-8">

                        <a
                            href="https://ecoforecast.vercel.app/"
                            className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all text-black duration-300 px-6 py-2 rounded-full mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit EcoForecast
                            <GoArrowUpRight size={15} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default EcoForecast;
