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
                        href="/app"
                        className=" text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all duration-300 text-black px-5 py-2 rounded-full mr-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open EcoForecast
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                    <a
                        href="/stepwat2"
                        className=" text-[.85rem] sm:text-sm flex items-center relative group mr-5"
                    >
                        GitHub
                        <GoArrowUpRight size={15} className="ml-1" />
                        <span className="absolute left-0 bottom-[4px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>

                <p className="mt-16 xs:mt-24 text-lg">
                    STEPWAT2 is an individual-based simulation model designed for dryland ecosystems, focusing on the impacts of climate change and disturbance regimes on plant communities. It integrates a soil water model to simulate resource competition among plants based on root distribution and temporal soil moisture dynamics. Validated with field data from big sagebrush communities, STEPWAT2 provides insights into how climate shifts and disturbances like fire and grazing influence species composition and biomass. This model serves as a valuable tool for understanding long-term ecological dynamics and informing conservation strategies in arid environments.
                </p>

                <h3 className="text-xl xs:text-2xl mt-8 xs:mt-12 sm:mt-14">
                    Model validation
                </h3>
                <p className="mt-6 xs:mt-8 text-lg">
                    The study validated a model using vegetation data collected from 15 distinct big sagebrush plant communities across the western United States during 2013 and 2014. These sites were strategically chosen to encompass various Greater Sage-grouse Management Zones (MZs) with significant breeding populations of greater sage-grouse and minimal disturbance from human activities such as oil and gas development, invasive species, fire, and heavy grazing. Each site was characterized by level topography, ensuring consistency in environmental conditions.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Within each site, three 100 m² plots were established, each containing 30 randomly sampled 20 &times; 50 cm quadrats. Vegetation data, including percent canopy cover for each plant species categorized into specific cover classes, was recorded. Plant taxa were assigned to functional types such as annual and perennial C3 forbs and grasses, C4 grasses, big sagebrush, non-sagebrush shrubs, and succulents. Absolute cover for each functional type in the 90 quadrats per site was calculated by summing cover class midpoints and averaging these values to determine site-level mean cover.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    To characterize big sagebrush stand structure, the number of individuals and canopy volume size class distribution were recorded across the plots. Canopy volume was calculated for each big sagebrush individual using diameter and height measurements, providing insights into biomass distribution within the sites. Soil samples collected from multiple depths in each plot were analyzed to determine soil texture, crucial for understanding nutrient availability and water retention.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    The STEPWAT2 model was employed to simulate plant community dynamics across the 15 sites under current and future climate scenarios. Simulations were conducted over 300 years with 100 iterations per site, considering variations in fire return intervals and grazing intensities. Model parameters included space allocation, rooting depth distributions, phenological activity, and specific growth characteristics tailored to each plant functional type observed in the field.

                </p>

                <h3 className="text-xl xs:text-2xl mt-8 xs:mt-12 sm:mt-14">
                    Model application
                </h3>
                <p className="mt-6 xs:mt-8 text-lg">
                    The study focuses on projecting biomass changes in big sagebrush plant communities across 15 sites in the western United States under varying climate scenarios and disturbance regimes by the end of the century. Utilizing the STEPWAT2 model forced by 13 General Circulation Models (GCMs) for the Representative Concentration Pathway 8.5 (RCP8.5), simulations spanned from 1980-2010 baseline conditions to 2070-2100 projections.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Under scenarios with no fire and light grazing, significant increases in big sagebrush biomass were anticipated by 2100, particularly in the Northeastern sites (MZs I and II) and one high-elevation site in the Southwest (MZ III). Conversely, sites furthest west exhibited projected decreases in big sagebrush biomass. Perennial C3 grasses showed mixed trends, with some sites projecting biomass increases while others anticipated declines. Wyoming sites were notable for potential biomass increases in perennial C3 grasses.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Other functional types generally showed biomass decreases or stability, except for perennial C4 grasses, which were expected to increase across all applicable sites. Grazing intensity interacted distinctly with climate impacts: heavy grazing mitigated increases in big sagebrush biomass relative to light grazing, and it substantially reduced perennial C3 grass biomass across numerous sites.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Fire dynamics played a pivotal role, significantly reducing future big sagebrush biomass compared to scenarios with no fire. Perennial C3 grass biomass, however, showed less sensitivity to fire frequency, indicating a quicker recovery post-fire compared to big sagebrush.
                </p>
            </div>
            <div className="sm:[w-750px] md:w-[960px] pt-1 pb-12 bg-greylight ssm:mx-10 md:mx-auto sm:rounded-lg mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <h3 className="text-xl xs:text-2xl mt-8 xs:mt-12 sm:mt-14">
                        References
                    </h3>
                    <p className="mt-6 xs:mt-8 text-[.9rem]">
                        Palmquist, K. A., J. B. Bradford, T. E. Martyn, D. R. Schlaepfer, and W. K. Lauenroth. 2018. STEPWAT2: an individual-based model for exploring the impact of climate and disturbance on dryland plant communities. <span className="font-product-sans-light-italic">Ecosphere</span> 9(8):e02394. <a href="https://doi.org/10.1002/ecs2.2394" className="underline transition-all duration-300 decoration-grey decoration-1 hover:decoration-black" target="_blank" rel="noopener noreferrer">10.1002/ecs2.2394</a>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default EcoForecast;
