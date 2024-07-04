import resume from "../assets/Harley_Zhang_Resume.pdf";
import { GoArrowUpRight } from "react-icons/go";

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className='md:flex md:justify-between md:items-center gap-16 h-[34rem] py-10 md:w-[1000px] md:mx-auto px-5'
        >
            {/* LANDING TEXT */}
            <div className={`z-30 mt-12 md:mt-32`}>
                {/* HEADINGS */}
                <div>
                    <p className="text-[2.6rem] font-helvetica tracking-wide z-10 text-start">
                        Harley Zhang
                    </p>
                    <p className="mt-7 font-helvetica tracking-wide mb-7 text-[1.1rem] text-start">
                        I'm a student at the University of Waterloo studying Computer Engineering. <br /><br />
                        My interests are data science, software, and hardware and their applications for environmental sustainability and social causes. I'm eager to work on meaningful projects that make a positive impact.
                    </p>
                </div>


                {/* BUTTON */}
                <div className="flex mt-10 justify-start">
                    <a className="rounded-r-sm" href={resume} target="_blank" rel="noopener noreferrer">
                        <div className="bg-white text-darkgrey transition duration-500 w-full h-full flex items-center justify-center font-helvetica tracking-wide px-6 py-2 rounded-3xl hover:opacity-80">
                            Resume <GoArrowUpRight size={20} className="ml-[0.13rem] mr-0" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing;