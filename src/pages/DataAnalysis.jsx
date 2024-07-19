import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import { GoArrowUpRight } from "react-icons/go";
import ConservationBanner from "../assets/conservation-banner.png";

const DataAnalysis = () => {
    return (
        <>
            <Helmet>
                <title>Data Analysis at Yale | Harley Zhang</title>
            </Helmet>
            <Navbar />
            <div className="sm:w-[750px] mx-auto px-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 mb-4 text-center">Data Analysis at Yale</h1>

                <div className="flex flex-col items-center mt-8 space-y-6 xs:space-y-0 xs:flex-row xs:justify-center xs:space-x-5">
                    <a
                        href="https://github.com/harley-zhang/Conservation_statistics"
                        className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all duration-300 text-black px-5 py-2 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub repository
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                </div>
            </div>

            <div className="md:w-[960px] mx-5 md:mx-auto mt-16 xs:mt-20 items-center">
                <img src={ConservationBanner} className="rounded-md" alt="Conservation statistics" />
            </div>

            <div className="sm:w-[750px] mx-auto px-5">
                <p className="mt-16 xs:mt-20 text-lg">
                    Open-source R program for researchers to summarize relevant 2022 and 2023 survey statistics for a 172,000-acre conservation area in Colorado. Developed with the Yale School of the Environment as part of The Partnership in Forestry and Rangeland Research Program. Uses dplyr, tidyr, and stringr.
                </p>

                <h2 className="text-xl xs:text-2xl sm:text-3xl mt-8 xs:mt-12 sm:mt-16 font-sf-regular">Plot statistics</h2>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Treatment statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Treatment year.</span> The year each plot was treated.</li>
                    <li className="mt-3"><span className="font-sf-medium">Treatment type.</span> Types of treatment used within a plot.</li>
                </ul>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Tree statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Basal area per acre.</span> Calculates basal area in inches per acre for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Average diameter at breast height (DBH).</span> Calculates the average DBH in inches per acre for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Average height.</span> Calculates the average height in feet for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Dominant tree species.</span> Identifies the dominant tree species per plot, considering survey, frequency, and if the dominant one is less than or equal to 50% frequency, also determines the second-dominant tree species.</li>
                </ul>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Regeneration statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Regeneration presence.</span> Checks if regeneration (saplings or seedlings) is present in each plot.</li>
                    <li className="mt-3"><span className="font-sf-medium">Seedlings per acre.</span> Calculates the number of seedlings per acre.</li>
                    <li className="mt-3"><span className="font-sf-medium">Dominant regeneration species.</span> Identifies the dominant regeneration (sapling/seedling) species per plot, considering survey, frequency, and if the dominant one is less than or equal to 50% frequency, also determines the second-dominant regeneration species.</li>
                </ul>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Damage statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Insect presence.</span> Determines if insect damage is present in each plot (Y/N).</li>
                    <li className="mt-3"><span className="font-sf-medium">Browse presence.</span> Identifies if browse damage is present in each plot (Y/N).</li>
                    <li className="mt-3"><span className="font-sf-medium">List of damage types.</span> Lists each type of damage present in each plot.</li>
                </ul>

                <h2 className="text-xl xs:text-2xl sm:text-3xl mt-8 xs:mt-12 sm:mt-16 font-sf-regular">Forest stand statistics</h2>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Tree statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Basal area per acre.</span> Calculates basal area in inches per acre for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Average diameter at breast height (DBH):</span> Calculates the average DBH in inches per acre for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Average height.</span> Calculates the average height in feet for living trees.</li>
                    <li className="mt-3"><span className="font-sf-medium">Dominant tree species.</span> Identifies the dominant tree species in each stand and calculates the number and percent of plots.</li>
                </ul>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Regeneration statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Regeneration presence.</span> Calculates the number and percent of plots with regeneration (saplings or seedlings) in each stand.</li>
                    <li className="mt-3"><span className="font-sf-medium">Seedlings per acre.</span> Calculates the average number of seedlings per acre in each stand.</li>
                    <li className="mt-3"><span className="font-sf-medium">Dominant regeneration species.</span> Identifies the dominant regeneration (sapling/seedling) species in each stand and calculates the number and percent of plots.</li>
                </ul>

                <h3 className="text-lg xs:text-xl sm:text-2xl mt-8 xs:mt-10 sm:mt-12 font-sf-regular">Damage statistics</h3>
                <ul className="pl-8 list-disc text-lg mt-4">
                    <li className="mt-3"><span className="font-sf-medium">Insect damage presence.</span> Calculates the number and percent of plots with insect damage in each stand.</li>
                    <li className="mt-3"><span className="font-sf-medium">Browse damage presence.</span> Calculates the number and percent of plots with browsing damage in each stand.</li>
                    <li className="mt-3"><span className="font-sf-medium">List of damage types.</span> Lists all damage present across all plots within a stand.</li>
                </ul>

            </div>

            <div className="md:w-[960px] pt-1 pb-12 bg-grey-reference mx-5 md:mx-auto rounded-lg mt-20 sm:mt-24 md:mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <p className="text-2xl sm:text-4xl px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Start summarizing data now.
                    </p>
                    <div className="flex justify-center mt-8">

                        <a
                            href="https://github.com/harley-zhang/Conservation_statistics"
                            className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all text-black duration-300 px-6 py-2 rounded-full mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View the code
                            <GoArrowUpRight size={15} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DataAnalysis;
