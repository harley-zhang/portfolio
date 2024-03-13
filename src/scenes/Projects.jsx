import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
                    visible: { opaciy: 1, y: 0 },
                }}

            ></motion.div>
        </section>
    )
}

export default Projects;