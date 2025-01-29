import { useEffect, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    const [sweCount, setSweCount] = useState(0);
    const [hackathonsCount, setHackathonsCount] = useState(0);
    const [githubCount, setGithubCount] = useState(0);

    useEffect(() => {
        const sweInterval = setInterval(() => {
            if (sweCount < 2) {
                setSweCount(prev => prev + 1);
            } else {
                clearInterval(sweInterval);
            }
        }, 100);

        const hackathonsInterval = setInterval(() => {
            if (hackathonsCount < 2) {
                setHackathonsCount(prev => prev + 1);
            } else {
                clearInterval(hackathonsInterval);
            }
        }, 100);

        const githubInterval = setInterval(() => {
            if (githubCount < 9) {
                setGithubCount(prev => prev + 1);
            } else {
                clearInterval(githubInterval);
            }
        }, 140);

        return () => {
            clearInterval(sweInterval);
            clearInterval(hackathonsInterval);
            clearInterval(githubInterval);
        };
    }, [sweCount, hackathonsCount, githubCount]);

    return (
        <section id="home" className="md:w-[1000px] md:mx-auto px-5 pt-8 sm:pt-16 pb-16 sm:pb-24">
            {/* Harley Zhang Name */}
            <div className="text-[2.3rem] xs:text-[2.6rem] z-10 text-center mt-16 md:mt-32">
                Harley Zhang
            </div>

            {/* MAIN CONTAINER */}
            <div className="flex flex-col gap-10 mt-10">
                {/* Flex container for the two columns */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* TLDR Section - Left Column */}
                    <div className="w-full md:w-1/2 flex justify-start md:justify-start">
                        <div className="mt-7 text-[0.9rem] xs:text-[1.1rem] text-start text-grey-present">
                            <p>TL;DR</p>
                            {/* Stats */}
                            <div className="flex flex-col">
                                <div className="flex items-center justify-start text-[1.2rem]">
                                    <div className="flex items-center justify-center h-12 bg-grey rounded-lg text-white">
                                        Software Engineering @<span className="ml-1 font-sf-medium">University of Waterloo</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start text-[1.3rem]">
                                    <div className="flex items-center justify-center h-12 rounded-lg text-white">
                                        <span className="font-mono text-md px-2 py-1 mr-3 rounded-md bg-grey-present-bg text-grey-present">{sweCount}</span> SWE internships
                                    </div>
                                </div>
                                <div className="flex items-center justify-start text-[1.3rem]">
                                    <div className="flex items-center justify-center h-12 bg-grey rounded-lg text-white">
                                        <span className="font-mono text-md px-2 py-1 mr-3 rounded-md bg-grey-present-bg text-grey-present">{hackathonsCount}</span> hackathons
                                    </div>
                                </div>
                                <div className="flex items-center justify-start text-[1.3rem]">
                                    <div className="flex items-center justify-center h-12 bg-grey rounded-lg text-white">
                                        <span className="font-mono text-md px-2 py-1 mr-3 rounded-md bg-grey-present-bg text-grey-present">{githubCount}</span> public projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stack Section - Right Column */}
                    <div className="w-full md:w-1/2 flex md:justify-center">
                        <div className="mt-7 text-[0.9rem] xs:text-[1.1rem] text-start text-grey-present">
                            <p>Stack</p>
                            <div className="flex items-center justify-start mt-2">
                                {/* Box with fixed size and typewriter effect */}
                                <div className="font-mono text-[0.9rem] bg-grey-present-bg p-4 rounded-md w-[calc(100vw-2.5rem)] md:w-[450px] h-[180px] overflow-hidden">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                `<span class="text-[#6b9955]">// LANGUAGES</span><br />` +
                                                `<span class="text-[#569bd5]">Python</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#b5cea8]">JavaScript/Typescript</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#cb8e09]">C++</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#4ec9b0]">R</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#c485bf]">Bash</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#dcdcaa]">MySQL</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#9cdcfe]">SQLite</span><br />` +
                                                `<br />` +
                                                `<span class="text-[#6b9955]">// TECHNOLOGIES</span><br />` +
                                                `<span class="text-[#4ec9b0]">Git</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#9cdcfe]">Google Cloud</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#c485bf]">React</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#cb8e09]">Node.js</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#b5cea8]">Linux</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#dcdcaa]">Unix</span><span class="text-[#8b8b8b]">, </span>` +
                                                `<span class="text-[#569bd5]">HTML/CSS</span>`
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 10,
                                            deleteSpeed: 5,
                                            pauseFor: 200000000
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BUTTON */}
                <div className="flex mt-10 items-center">
                    <a href="mailto:harley.zhang@uwaterloo.ca" className="rounded-r-sm">
                        <div className="text-[.8rem] xs:text-[.91rem] bg-white text-grey-dark transition duration-500 w-full h-full flex items-center justify-center px-6 py-2 rounded-3xl hover:opacity-80 relative">
                            harley.zhang@uwaterloo.ca <GoArrowUpRight size={17} className="ml-1" />
                        </div>
                    </a>

                    {/* EMAIL */}
                    <div className="ml-4 relative text-[.8rem] xs:text-[.91rem]">
                        <a href="/resume" target="_blank" rel="noopener noreferrer" className="relative flex items-center ml-2 group">
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
