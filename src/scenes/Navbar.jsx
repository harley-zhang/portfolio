import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";

const Link = ({ page, selectedPage, setSelectedPage, onClick }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`inline-block`}
            href={`#${lowerCasePage}`}
            onClick={(e) => {
                setSelectedPage(lowerCasePage);
                if (onClick) onClick(e); // Ensure onClick is called if provided
            }}
        >
            {page}
        </AnchorLink>
    );
};

const MobileMenu = ({ isOpen, onClose, selectedPage, setSelectedPage }) => {
    return (
        <div className={`fixed right-0 bottom-0 h-full w-full bg-gradient-to-t from-transparent to-grey bg-opacity-50 backdrop-filter backdrop-blur-xl text-white
            ${isOpen ? 'opacity-100 visible transition duration-[400ms]' : 'opacity-0 invisible transition duration-[400ms]'}`}>
            <div className="flex justify-end pt-3 pr-[20px] font-helvetica tracking-wide text-sm font-medium">
                <button onClick={onClose}>
                    Close
                </button>
            </div>

            <img src={logo} alt="harley-zhang-logo" className="mt-3 ml-[20px] h-8" />

            <div className="flex flex-col gap-[35px] ml-[20px] text-[25px]">
                
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

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [navbarBackground, setNavbarBackground] = useState("");

    useEffect(() => {
        if (!isAboveSmallScreens && isMenuToggled) {
            document.body.style.overflow = "hidden";
            setNavbarBackground("bg-black"); // Clear navbar background when menu is toggled on small screens
        } else {
            document.body.style.overflow = "visible";
            setNavbarBackground(isTopOfPage ? "" : "bg-grey text-white transition duration-[400ms] bg-opacity-70 backdrop-filter backdrop-blur-lg");
        }
    }, [isMenuToggled, isAboveSmallScreens, isTopOfPage]);

    const handleToggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
            <div className={`flex items-center justify-between mx-auto ${isAboveMediumScreens ? 'w-[1000px]' : 'px-[20px]'}`}>
                <img src={logo} alt="harley-zhang-logo" className="h-6" />

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
                        className="flex justify-between gap-16 font-helvetica tracking-wide text-sm font-medium"
                        onClick={handleToggleMenu}
                    >
                        Menu
                    </button>
                )}

                {!isAboveSmallScreens && (
                    <MobileMenu
                        isOpen={isMenuToggled}
                        onClose={handleToggleMenu}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
