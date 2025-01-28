import Cornell from "../assets/Experience/cornell-tech.png";
import Yale from "../assets/Experience/yale-lauenroth.png";
import UofT from "../assets/Experience/uoft-cubes.png";

const Experience = () => {
    return (
        <section id="experience" className="md:w-[1000px] mt-11 md:mx-auto my-9 px-5 py-0 sm:py-12">

            <p className="text-[1.68rem] z-10 text-start mb-3">
                Experience
            </p>

            <div className="flex flex-col">
                {/* CORNELL TECH */}
                <div className="flex flex-row items-center">

                    {/* UofT Icon */}
                    <div className="flex-shrink-0 my-4">
                        <img src={Cornell} alt="Cornell Tech" className="w-[3.6rem] h-[3.6rem] rounded-[0.32rem]" />
                    </div>

                    {/* Text */}
                    <div className="ml-5 w-full">
                        <div className="flex justify-between w-full mb-2">
                            <div className="flex items-center">
                                <p className="text-base sm:text-xl">Software Developer</p>
                                <p className="text-[0.7rem] xs:text-[0.8rem] sm:text-[0.9rem] bg-grey-present-bg text-grey-present px-2 py- rounded-full ml-3">Present</p>
                            </div>
                            <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-grey-light text-right">New York, NY</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <a
                                href="https://s.tech.cornell.edu/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-xs xs:text-sm sm:text-[1rem] text-left text-grey-light transition-all duration-300 decoration-grey-underline hover:decoration-grey-light decoration-2 underline"
                            >
                                Social Technologies Lab, Cornell Tech
                            </a>
                            <p className="text-xs xs:text-sm text-right text-grey-present">Jul 2024&mdash;Present</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-4 xs:pl-8 sm:pl-16 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Parsed US Census ZIP Code shapefile and Hugging Face generated datasets using Python.                    </li>
                    <li className="mt-3">
                        Developed web app for NYC media companies to analyze coverage differences using React and Uber's <a
                            href="https://deck.gl/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-left text-white transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline"
                        >
                            deck.gl
                        </a>.
                    </li>
                </ul>


                {/* YALE LAUENROTH*/}
                <div className="flex flex-row items-center mt-4">

                    {/* Yale Icon */}
                    <div className="flex-shrink-0 my-4">
                        <img src={Yale} alt="Lauenroth Lab, Yale University" className="w-[3.6rem] h-[3.6rem] rounded-[0.32rem]" />
                    </div>

                    {/* Text */}
                    <div className="ml-5 w-full">
                        <div className="flex justify-between w-full mb-2">
                            <p className="text-base sm:text-xl text-left">Software Engineer</p>
                            <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-grey-light text-right">New Haven, CT</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <a
                                href="https://www.researchgate.net/lab/William-K-Lauenroth-Lab"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-xs xs:text-sm sm:text-[1rem] text-left text-grey-light transition-all duration-300 decoration-grey-underline hover:decoration-grey-light decoration-2 underline"
                            >
                                Lauenroth Lab, Yale University
                            </a>
                            <p className="text-xs xs:text-sm text-right text-grey-present">Mar 2021&mdash;Jun 2024</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-4 xs:pl-8 sm:pl-16 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Simulated 100 years of plant biomass in a Colorado conservation area using&nbsp;
                        <a
                            href="https://doi.org/10.1002/ecs2.2394"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-left text-white transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline"
                        >
                            STEPWAT2
                        </a>
                        .
                    </li>
                    <li className="mt-3">
                        Summarized next-century climate and plant simulations and 2022-2023 field survey stats for 130+ sites using R.
                    </li>
                </ul>

                {/* UOFT CUBES */}
                <div className="flex flex-row items-center mt-4">

                    {/* UofT Icon */}
                    <div className="flex-shrink-0 my-4">
                        <img src={UofT} alt="CUBES Lab, University of Toronto" className="w-[3.6rem] h-[3.6rem] rounded-[0.32rem]" />
                    </div>

                    {/* Text */}
                    <div className="ml-5 w-full">
                        <div className="flex justify-between w-full mb-2">
                            <p className="text-base sm:text-xl text-left">Research Assistant</p>
                            <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-right text-grey-light">Toronto, ON</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <a
                                href="https://cubes-labs.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-xs xs:text-sm sm:text-[1rem] text-left text-grey-light transition-all duration-300 decoration-grey-underline hover:decoration-grey-light decoration-2 underline"
                            >
                                CUBES Lab, University of Toronto
                            </a>
                            <p className="text-xs xs:text-sm text-right text-grey-present">Jun 2023&mdash;Dec 2023</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-4 xs:pl-8 sm:pl-16 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Trained an object detection model to classify land use with 80 years of raster imagery in&nbsp;
                        <a
                            href="https://www.qgis.org/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-left text-white transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline"
                        >
                            QGIS
                        </a>
                        .
                    </li>
                    <li className="mt-3">
                        Analyzed Toronto's urbanization by comparing land use changes from intervals in the past century.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
