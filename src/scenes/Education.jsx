import Waterloo from '../assets/waterloo.png';

const Education = () => {
    return (
        <section id="education" className='md:w-[1000px] md:mx-auto px-5 py-0 sm:py-12'>

            <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start">
                Education
            </p>

            <div className='flex flex-row items-center'>

                {/* Waterloo Icon */}
                <div className='flex-shrink-0 my-4'>
                    <img src={Waterloo} alt='University of Waterloo' className='w-[3.1rem] xs:w-[3.6rem] rounded-[0.32rem]' />
                </div>

                {/* Text */}
                <div className='ml-5 w-full'>
                    <div className='flex justify-between w-full mb-2'>
                        <p className='text-sm xs:text-md sm:text-xl font-helvetica tracking-wide text-left'>University of Waterloo</p>
                        <p className='text-xs xs:text-sm sm:text-[1rem] mt-[.1rem] font-helvetica tracking-wide text-right'>Waterloo, ON</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p className='text-xs xs:text-sm sm:text-[1rem] font-helvetica tracking-wide text-left text-lightgrey'>BASc, Computer Engineering</p>
                        <p className='text-xs xs:text-sm font-helvetica tracking-wide text-right text-lightgrey'>2024 &mdash; 2029</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
