import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import resume from "../assets/Harley_Zhang_Resume.pdf";
import HamburgerButton from "../components/HamburgerButton";

const Link = ({ page, setSelectedPage, onClick }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className="inline-block"
            href={`#${lowerCasePage}`}
            onClick={(e) => {
                setSelectedPage(lowerCasePage);
                if (onClick) onClick(e);
            }}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [navbarBackground, setNavbarBackground] = useState("");

    useEffect(() => {
        // Handle closing the mobile menu when resizing above small screens
        if (isAboveSmallScreens) {
            setIsMenuToggled(false); // Close the mobile menu
        }
    }, [isAboveSmallScreens]);

    useEffect(() => {
        if (!isAboveSmallScreens && isMenuToggled) {
            document.body.style.overflow = "hidden";
            setNavbarBackground("");
        } else {
            document.body.style.overflow = "visible";
            setNavbarBackground("bg-opacity-50 backdrop-filter backdrop-blur-lg");
        }
    }, [isMenuToggled, isAboveSmallScreens]);

    const handleToggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className={`${navbarBackground} text-white bg-darkgrey z-40 w-full fixed top-0 py-3`}>
            <div className="flex items-center justify-between mx-auto md:w-[1000px] px-5">
                <img src={logo} alt="harley-zhang-logo" className="h-6 z-50" />

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-14 font-helvetica tracking-wide text-[13px] font-medium">
                        <Link
                            page="Projects"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Education"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Experience"
                            setSelectedPage={setSelectedPage}
                        />
                        <a href={resume} target="_blank" rel="noopener noreferrer" >
                            Resume
                        </a>
                    </div>
                ) : (
                    <HamburgerButton active={isMenuToggled} setActive={handleToggleMenu} />
                )}

                {/* MOBILE MENU POPUP */}
                <div className={`fixed font-helvetica tracking-wide right-0 bottom-0 h-full w-full text-white transition-all duration-500 transform ${isMenuToggled ? "opacity-100 bg-darkgrey bg-opacity-50 backdrop-blur-xl visible" : "opacity-0 invisible"}`}>
                    <div className="flex flex-col gap-[23px] ml-5 text-[27px] mt-20">
                        <Link
                            page="Projects"
                            setSelectedPage={setSelectedPage}
                            onClick={handleToggleMenu}
                        />
                        <Link
                            page="Education"
                            setSelectedPage={setSelectedPage}
                            onClick={handleToggleMenu}
                        />
                        <Link
                            page="Experience"
                            setSelectedPage={setSelectedPage}
                            onClick={handleToggleMenu}
                        />
                        <a href={resume} target="_blank" rel="noopener noreferrer" >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
