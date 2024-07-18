import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import { GoArrowUpRight } from "react-icons/go";

const EcoForecast = () => {
    return (
        <>
            <Helmet>
                <title>EcoForecast | Harley Zhang</title>
            </Helmet>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 mb-4 text-center">EcoForecast</h1>
                <div className="w-[350px] xs:w-[400px] sm:w-[500px] mx-auto">
                    <p className="mt-6 xs:mt-8 text-md xs:text-lg sm:text-xl text-center">An individual-based model for exploring the impact of climate and disturbance on dryland plant communities</p>
                </div>

                <div className="flex justify-center mt-8">
                    <a
                        href="https://www.ecoforecast.info/"
                        className=" text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all duration-300 text-black px-5 py-2 rounded-full mr-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open EcoForecast
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                    <a
                        href="https://github.com/harley-zhang/ecoforecast_app"
                        className=" text-[.85rem] sm:text-sm flex items-center relative group mr-5"
                    >
                        GitHub repository
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[5px] w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>

                <p className="mt-16 xs:mt-24 text-lg">
                    EcoForecast is a web application that allows farmers, ranchers, foresters, and land managers to visualize and analyze future ecological changes in the sagebrush habitat across the United States. The app utilizes data generated using the <a href="https://github.com/DrylandEcology/STEPWAT2" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">STEPWAT2 simulation model</a> and is built using React and <a href="https://developers.google.com/earth-engine" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">Google Earth Engine JavaScript API</a>.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    This app is made possible by the support of <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">Yale University</a>, the <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">United States Geological Survey (USGS)</a>, <a href="https://www.marshall.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">Marshall University</a>, and <a href="https://www.usu.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">Utah State University</a>.
                </p>

                <h3 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14">
                    How it works
                </h3>
                <p className="mt-6 xs:mt-8 text-lg">
                    A study by the lab group collaborating with EcoForecast validated a model using vegetation data from 15 sagebrush communities in the western U.S. during 2013-2014. Sites were chosen to cover various Greater Sage-grouse Management Zones with minimal human disturbance, characterized by level topography.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    At each site, three 100 m² plots with 30 randomly sampled 20×50 cm quadrats were established. Vegetation data, including percent canopy cover for each plant species, was recorded. Plant taxa were categorized into functional types, and absolute cover for each type was averaged to determine site-level mean cover.
                </p>

                <h3 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14">
                    STEPWAT2 model validation
                </h3>
                <p className="mt-6 xs:mt-8 text-lg">
                    A <a href="https://doi.org/10.1002/ecs2.2394" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-underlinegrey hover:decoration-white decoration-1 underline">study</a> by the lab group collaborating with EcoForecast validated a model using vegetation data from 15 sagebrush communities in the western U.S. during 2013-2014. Sites were chosen to cover various Greater Sage-grouse Management Zones with minimal human disturbance, characterized by level topography. At each site, three 100 m² plots with 30 randomly sampled 20×50 cm quadrats were established. Vegetation data, including percent canopy cover for each plant species, was recorded. Plant taxa were categorized into functional types, and absolute cover for each type was averaged to determine site-level mean cover.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Big sagebrush stand structure was characterized by recording individual counts and canopy volume size class distribution. Canopy volume was calculated using diameter and height measurements. Soil samples from multiple depths were analyzed for texture. The STEPWAT2 model simulated plant community dynamics across the sites under current and future climate scenarios over 300 years with 100 iterations per site. Parameters included space allocation, rooting depth, phenological activity, and growth characteristics for each plant functional type.
                </p>
            </div>

            <div className="[w-750px] md:w-[960px] pt-1 pb-12 bg-referencegrey mx-5 ssm:mx-10 md:mx-auto rounded-lg mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <h3 className="text-2xl sm:text-4xl font-product-sans-regular px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Dive into the data and try EcoForecast today.
                    </h3>
                    <div className="flex justify-center mt-8">

                        <a
                            href="https://ecoforecast.info/"
                            className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-white hover:opacity-90 transition-all text-black duration-300 px-6 py-2 rounded-full mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Launch EcoForecast
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
