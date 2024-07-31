import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Credits = ({ logos }) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <div ref={ref} className="mt-32">
            <div className="sm:mb-24">
                <motion.div
                    className="flex flex-wrap justify-center items-center px-5 md:px-0 sm:pb-10"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
                        hidden: { opacity: 0, y: 20 },
                    }}
                >
                    {logos.map((logo, index) => (
                        <a
                            key={index}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`opacity-80 px-0 sm:px-10 md:px-16 pb-20 sm:py-0 ${isAboveSmallScreens ? "" : "min-w-[50%]"}`}
                        >
                            <motion.img
                                src={logo.url}
                                alt={logo.alt}
                                className="w-[75px] md:w-[90px] mx-auto"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 * index + 0.2 }}
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Credits;
