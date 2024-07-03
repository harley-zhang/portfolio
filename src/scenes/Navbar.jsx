import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";

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

const MobileMenu = ({ isOpen, selectedPage, setSelectedPage, onClose }) => {
    return (
        <div className={`fixed right-0 bottom-0 h-full w-full bg-grey bg-opacity-70 backdrop-filter backdrop-blur-xl text-white transition duration-[400ms] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="flex flex-col gap-[23px] ml-[20px] text-[27px] mt-[80px]">
                <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    onClick={onClose}
                />
                <Link
                    page="Education"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    onClick={onClose}
                />
                <Link
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    onClick={onClose}
                />
                <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [navbarBackground, setNavbarBackground] = useState("");

    useEffect(() => {
        if (!isAboveSmallScreens && isMenuToggled) {
            document.body.style.overflow = "hidden";
            setNavbarBackground("");
        } else {
            document.body.style.overflow = "visible";
            setNavbarBackground("bg-opacity-70 backdrop-filter backdrop-blur-lg");
        }
    }, [isMenuToggled, isAboveSmallScreens]);

    const handleToggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className={`${navbarBackground} text-white  bg-grey z-40 w-full fixed top-0 py-3`}>
            <div className={`flex items-center justify-between mx-auto ${isAboveMediumScreens ? 'w-[1000px]' : 'px-[20px]'}`}>
                <img src={logo} alt="harley-zhang-logo" className="h-6 z-50" />

                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-14 font-helvetica tracking-wide text-[13px] font-medium">
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Education"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Experience"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="flex justify-between gap-16 font-helvetica tracking-wide text-sm font-medium z-50"
                        onClick={handleToggleMenu}
                    >
                        {isMenuToggled ? "Close" : "Menu"}
                    </button>
                )}

                {!isAboveSmallScreens && (
                    <MobileMenu
                        isOpen={isMenuToggled}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        onClose={handleToggleMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;