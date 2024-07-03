import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="home" 
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* LANDING TEXT */}
            <div className={`z-30 basis-2/5 mt-12 md:mt-32 mx-[5%]`}>
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-6xl font-helvetica font-semibold z-10 text-center md:text-start">
                        Harley Zhang
                    </p>

                    <p className="mt-10 font-playfair mb-7 text-md text-center md:text-start">
                        Interested in web development, data science, computer engineering, and environmental sustainability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
