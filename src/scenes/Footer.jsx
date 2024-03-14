import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-navy-blue pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons className="text-light-blue" />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="text-light-blue font-helvetica font-semibold text-2xl">hz●</p>
                    <p className="text-light-blue font-playfair text-md">Made by Harley Zhang.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
