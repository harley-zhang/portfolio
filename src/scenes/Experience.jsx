import UofT from "../assets/uoft-cubes.png";
import Yale from "../assets/yale.png";

const Experience = () => {
    return (
        <section id="experience" className="md:w-[1000px] mt-11 md:mx-auto my-9 px-5 py-0 sm:py-12">

            <p className="text-[1.68rem] z-10 text-start mb-3">
                Experience
            </p>

            <div className="flex flex-col">
                {/* YALE */}
                <div className="flex flex-row items-center">

                    {/* Yale Icon */}
                    <div className="flex-shrink-0 my-4">
                        <img src={Yale} alt="Lauenroth Lab, Yale University" className="w-[3.6rem] h-[3.6rem] rounded-[0.32rem]" />
                    </div>

                    {/* Text */}
                    <div className="ml-5 w-full">
                        <div className="flex justify-between w-full mb-2">
                            <p className="text-base sm:text-xl text-left">Software Engineering Intern</p>
                            <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-right">New Haven, CT</p>
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
                            <p className="text-xs xs:text-sm text-right text-grey-light">Mar 2021&mdash;Jun 2024</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-8 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Simulated 100 years of plant biomass in a Colorado conservation area using&nbsp;
                        <a
                            href="https://doi.org/10.1002/ecs2.2394"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-xs xs:text-sm sm:text-[1rem] text-left text-white transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline"
                        >
                            STEPWAT2
                        </a>
                        .
                    </li>
                    <li className="mt-3">
                        Summarized next-century climate and plant simulations and 2022-2023 field survey stats using R.
                    </li>
                </ul>

                {/* UOFT */}
                <div className="flex flex-row items-center mt-4">

                    {/* UofT Icon */}
                    <div className="flex-shrink-0 my-4">
                        <img src={UofT} alt="CUBES Lab, University of Toronto" className="w-[3.6rem] h-[3.6rem] rounded-[0.32rem]" />
                    </div>

                    {/* Text */}
                    <div className="ml-5 w-full">
                        <div className="flex justify-between w-full mb-2">
                            <p className="text-base sm:text-xl text-left">Research Assistant</p>
                            <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-right">Toronto, ON</p>
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
                            <p className="text-xs xs:text-sm text-right text-grey-light">May 2023&mdash;Dec 2023</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-8 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Trained an object detection model to classify land use with 80 years of raster imagery in&nbsp;
                        <a
                            href="https://www.qgis.org/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-xs xs:text-sm sm:text-[1rem] text-left text-white transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline"
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
