import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-48">
            {/* HEADINGS */}
            <motion.div
                className="flex justify-end w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-helvetica font-semibold text-4xl">
                        Get in touch
                    </p>
                    <div className="flex md:jutify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/contact-image.png" alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/harleyzhang06@gmail.com"
                        method="POST"
                    >
                        <input
                            className="font-helvetica w-full bg-white font-medium placeholder-light-blue p-3"
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "This field is required."}
                                {errors.name.type === 'maxLength' && "Max length is 100 characters."}
                            </p>
                        )}

                        <input
                            className="font-helvetica w-full bg-white font-medium placeholder-light-blue p-3 mt-5"
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.email.type === 'required' && "This field is required."}
                                {errors.email.type === 'maxLength' && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="font-helvetica w-full bg-white font-medium placeholder-light-blue p-3 my-5"
                            type="text"
                            placeholder="Message"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === 'required' && "This field is required."}
                                {errors.message.type === 'maxLength' && "Max length is 2000 characters."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="font-helvetica py-3 px-7 bg-navy-blue font-semibold text-white hover:opacity-80 transition duration-500"
                        >
                            Connect
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
};

export default Contact;