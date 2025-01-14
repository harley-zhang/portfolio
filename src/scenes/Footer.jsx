import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="pt-10">
            <div className="h-[180px] sm:h-28 md:w-[1000px] sm:mx-5 mx-5 md:mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center my-10">
                    <SocialMediaIcons className="sm:order-last md:mx-5" />
                    <p className="text-sm text-grey-light mt-3 md:mt-0 sm:order-first md:mx-5">Harley Zhang 2025</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
