import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SocialMediaIcons = ({ className }) => {
    return (
        <div className={`flex justify-center md:justify-start my-10 gap-9 ${className}`}>
            <a
                href="https://www.linkedin.com/in/harley-zhang"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin size={17} />
            </a>
            <a
                href="https://github.com/harley-zhang"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={17} />
            </a>
            <a
                href="https://twitter.com/HarleyZhang06"
                target="_blank"
                rel="noreferrer"
            >
                <FaXTwitter size={17} />
            </a>
            <a
                href="https://www.youtube.com/@harleyzhang3092"
                target="_blank"
                rel="noreferrer"
            >
                <FaYoutube size={17} />
            </a>
            <a
                href="mailto:h333zhan@uwaterloo.ca"
                target="_blank"
                rel="noreferrer"
            >
                <MdEmail size={17} />
            </a>
        </div>
    )
}

export default SocialMediaIcons;