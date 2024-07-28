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
                            <p className="text-xs xs:text-sm sm:text-[1rem] text-left text-grey-light">Lauenroth Lab, Yale University</p>
                            <p className="text-xs xs:text-sm text-right text-grey-light">Mar 2021&mdash;Jun 2024</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-8 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Simulated a century of plant biomass projections for a conservation area in Colorado using the STEPWAT2 model.
                    </li>
                    <li className="mt-3">
                        Summarized climate and plant simulations for the next century and field survey statistics from 2022 to 2023 using R.
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
                            <p className="text-xs xs:text-sm sm:text-[1rem] text-left text-grey-light">CUBES Lab, University of Toronto</p>
                            <p className="text-xs xs:text-sm text-right text-grey-light">May 2023&mdash;Dec 2023</p>
                        </div>
                    </div>
                </div>
                <ul className="pl-8 list-disc text-sm xs:text-base mb-6">
                    <li className="mt-3">
                        Trained an object detection model to classify land uses with 80 years of historical raster imagery using QGIS.
                    </li>
                    <li className="mt-3">
                        Quantified the urbanization in Toronto by comparing both mapped changes in land use over the past century.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
