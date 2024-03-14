import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialMediaIcons = ({ className }) => {
    return (
        <div className={`flex justify-center md:justify-start my-10 gap-7 ${className}`}>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/harley-zhang-3ba53b2a9"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedinIn size={22} />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/harley-zhang"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={22} />
            </a>
        </div>
    )
}

export default SocialMediaIcons;
