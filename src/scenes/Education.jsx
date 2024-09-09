import Waterloo from "../assets/waterloo.png";

const Education = () => {
    return (
        <section id="education" className="md:w-[1000px] md:mx-auto px-5 py-0 sm:py-6">

            <p className="text-[1.68rem] z-10 text-start mb-3">
                Education
            </p>

            <div className="flex flex-row items-center">

                {/* Waterloo Icon */}
                <div className="flex-shrink-0 my-4">
                    <img src={Waterloo} alt="University of Waterloo" className="w-[3.1rem] xs:w-[3.6rem] rounded-[0.32rem]" />
                </div>

                {/* Text */}
                <div className="ml-5 w-full">
                    <div className="flex justify-between w-full mb-2">
                        <p className="text-base sm:text-xl text-left">University of Waterloo</p>
                        <p className="text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] text-right text-grey-light">Waterloo, ON</p>
                    </div>
                    <div className="flex justify-between w-full text-grey-light">
                        <p className="text-xs xs:text-sm sm:text-[1rem] text-left">BASc, Computer Engineering</p>
                        <p className="text-xs xs:text-sm text-right text-grey-present">2024&mdash;2029</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
