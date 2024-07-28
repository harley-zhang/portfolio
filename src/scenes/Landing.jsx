import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 h-[30rem] sm:h-[34rem] py-10 md:w-[1000px] md:mx-auto px-5"
        >
            {/* LANDING TEXT */}
            <div className={`z-30 mt-16 md:mt-32`}>
                <div>
                    <p className="text-[2.3rem] xs:text-[2.6rem] z-10 text-start">
                        Harley Zhang
                    </p>
                    <p className="my-7 text-[.95rem] xs:text-[1.1rem] text-start">
                        I'm a student at the University of Waterloo studying Computer Engineering. <br /><br />
                        My interests are data science, software, and hardware, and their applications for environmental sustainability and social causes. I'm eager to work on meaningful projects that make a positive impact.
                    </p>
                </div>

                {/* BUTTON */}
                <div className="flex mt-10 items-center">
                    <a
                        href="mailto:h333zhan@uwaterloo.ca"
                        className="rounded-r-sm"
                    >
                        <div className="text-[.8rem] xs:text-[.91rem] bg-white text-grey-dark transition duration-500 w-full h-full flex items-center justify-center px-6 py-2 rounded-3xl hover:opacity-80 relative">
                            h333zhan@uwaterloo.ca <GoArrowUpRight size={17} className="ml-1" />
                        </div>
                    </a>

                    {/* EMAIL */}
                    <div className="ml-4 relative text-[.8rem] xs:text-[.91rem]">
                        <a
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center ml-2 group"
                        >
                            Resume <GoArrowUpRight size={17} className="ml-1" />
                            <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Landing;
