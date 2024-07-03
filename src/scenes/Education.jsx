import Waterloo from '../assets/waterloo.png';

const Education = () => {
    return (
        <section className='md:w-[1000px] md:mx-auto mx-5 my-10 p-5'>

            <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start">
                Education
            </p>

            <div className='flex flex-row items-center'>

                {/* Waterloo Icon */}
                <div className='flex-shrink-0 my-4'>
                    <img src={Waterloo} alt='University of Waterloo' className='w-[4.5rem] h-[4.5rem] rounded-lg' />
                </div>

                {/* Text */}
                <div className='ml-4 w-full'>
                    <div className='flex justify-between w-full mb-2'>
                        <p className='text-md sm:text-xl font-helvetica tracking-wide text-left'>University of Waterloo</p>
                        <p className='text-sm sm:text-[1rem] mt-[.1rem] font-helvetica tracking-wide text-right'>Waterloo, Ontario</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p className='text-sm font-helvetica tracking-wide text-left text-lightgrey'>BaSC, Computer Engineering</p>
                        <p className='text-sm font-helvetica tracking-wide text-right text-lightgrey'>2024 &mdash; 2029</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
