import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className={`md:flex md:justify-between md:items-center gap-16 md:h-50 py-10 ${isAboveMediumScreens ? 'w-full md:w-[1000px] mx-auto p-0 m-0' : 'px-[20px]'}`}
        >
            {/* LANDING TEXT */}
            <div className={`z-30 mt-12 md:mt-32`}>
                {/* HEADINGS */}
                <div>
                    <p className="text-[2.6rem] font-helvetica tracking-wide z-10 text-center md:text-start">
                        Harley Zhang
                    </p>
                    <p className="mt-10 font-helvetica tracking-wide mb-7 text-[1.1rem] text-center md:text-start">
                        I'm a student at the University of Waterloo studying Computer Engineering. <br /><br />
                        My interests are data science, software, and hardware and their applications for environmental sustainability and social causes. I'm eager to work on meaningful projects that make a positive impact.
                    </p>
                </div>


                {/* BUTTON */}
                <div className="flex mt-5 justify-center md:justify-start">
                    <a
                        className="rounded-r-sm bg-navy-blue py-1 pr-0.5"
                        href="https://drive.google.com/file/d/1QPsSITDXf8e5vJtICE-JKnUCOXTKuUl5/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    >
                        <div className="bg-white text-grey transition duration-500 w-full h-full flex items-center justify-center font-helvetica tracking-wide px-6 py-2 rounded-3xl hover:opacity-80">
                            Resume
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing;