import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hiden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-dark-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-helvetica">{title}</p>
                <p className="mt-7">
                    asdkjasldkjasldkjasldkajsdlkasjdlaskdjalskdszlj
                </p>
            </div>
            <img src={`../assets/${projectTitle}.png`} />
        </motion.div>
    )
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 ph-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-helvetica font-semibold text-4xl">
                        <span className="text-dark-blue">PRO</span>JECTS
                    </p>
                    <div>
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    alskdjasldkjasdlkasjdlaskdjaslkdjasldkjasldkasjdolj
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-dark-blue max-w-[400px] max-h-[400px] text-2xl font-helvetica font-semibold">
                        adslkdjalk
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;