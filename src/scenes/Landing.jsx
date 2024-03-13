import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import harley from "../assets/profile-image.jpeg";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >

            {/* IMAGES */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                <img
                    alt="profile"
                    className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                    src={harley}
                />
            </div>

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

                {/* BUTTONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <AnchorLink
                        className="bg-dark-blue text-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-dark-blue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="google.com"
                    >
                        <div className="bg-blue text-dark-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-helvetica px-10"
                        >
                            Resume
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
