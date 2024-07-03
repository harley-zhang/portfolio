import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, onClick }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`inline-block`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage);
                onClick(); // Call the onClick handler to toggle off the menu
            }}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [navbarBackground, setNavbarBackground] = useState("");

    useEffect(() => {
        if (!isAboveSmallScreens && isMenuToggled) {
            document.body.style.overflow = "hidden";
            setNavbarBackground(""); // Clear navbar background when menu is toggled on small screens
        } else {
            document.body.style.overflow = "visible";
            setNavbarBackground(isTopOfPage ? "" : "bg-[#0a0a0a] text-white transition duration-200 bg-opacity-70 backdrop-filter backdrop-blur-lg");
        }
    }, [isMenuToggled, isAboveSmallScreens, isTopOfPage]);

    const handleToggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-helvetica text-[15px]">hz</h4>

                {/* DESKTOP NAV*/}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-14 font-helvetica text-[13px] font-medium">
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
                        className="flex justify-between gap-16 font-helvetica text-sm font-medium"
                        onClick={handleToggleMenu}
                    >
                        Menu
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full w-full bg-gradient-to-t from-transparent to-[#0a0a0a] bg-opacity-50 backdrop-filter backdrop-blur-xl text-white">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12 font-helvetica text-sm font-medium">
                            <button onClick={handleToggleMenu}>
                                Close
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-[35px] ml-[20px] text-[25px]">
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                onClick={handleToggleMenu}
                            />
                            <Link
                                page="Education"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                onClick={handleToggleMenu}
                            />
                            <Link
                                page="Experience"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                onClick={handleToggleMenu}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                onClick={handleToggleMenu}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
