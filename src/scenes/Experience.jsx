import UofT from '../assets/uoft.png';
import Yale from '../assets/yale.png';

const Experience = () => {
    return (
        <section id="experience" className='md:w-[1000px] md:mx-auto my-8 px-5 py-0 sm:py-12'>

            <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start">
                Experience
            </p>

            <div className='flex flex-col'>
                {/* YALE */}
                <div className='flex flex-row items-center'>

                    {/* Yale Icon */}
                    <div className='flex-shrink-0 my-4'>
                        <img src={Yale} alt='Yale University' className='w-[3.6rem] h-[3.6rem] rounded-[0.32rem]' />
                    </div>

                    {/* Text */}
                    <div className='ml-5 w-full'>
                        <div className='flex justify-between w-full mb-2'>
                            <p className='text-sm xs:text-md sm:text-xl font-helvetica tracking-wide text-left'>Yale University</p>
                            <p className='text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] font-helvetica tracking-wide text-right'>New Haven, CT</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='text-xs xs:text-sm sm:text-[1rem] font-helvetica tracking-wide text-left text-lightgrey'>Software Engineering Intern</p>
                            <p className='text-xs xs:text-sm font-helvetica tracking-wide text-right text-lightgrey'>Mar 2021 &mdash; Jun 2024</p>
                        </div>
                    </div>
                </div>

                {/* UOFT */}
                <div className='flex flex-row items-center'>

                    {/* UofT Icon */}
                    <div className='flex-shrink-0 my-4'>
                        <img src={UofT} alt='University of Toronto' className='w-[3.6rem] h-[3.6rem] rounded-[0.32rem]' />
                    </div>

                    {/* Text */}
                    <div className='ml-5 w-full'>
                        <div className='flex justify-between w-full mb-2'>
                            <p className='text-sm xs:text-md sm:text-xl font-helvetica tracking-wide text-left'>University of Toronto</p>
                            <p className='text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] font-helvetica tracking-wide text-right'>Toronto, ON</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='text-xs xs:text-sm sm:text-[1rem] font-helvetica tracking-wide text-left text-lightgrey'>Research Assistant</p>
                            <p className='text-xs xs:text-sm font-helvetica tracking-wide text-right text-lightgrey'>May 2023 &mdash; Dec 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
