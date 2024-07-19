import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav
            className={`text-white bg-grey-dark bg-opacity-40 backdrop-filter backdrop-blur-lg z-40 w-full fixed top-0 py-3 transition-all duration-300 delay-100 ${visible ? "" : "transform -translate-y-full"}`}
        >
            <div className="flex items-center justify-between mx-auto md:w-[1000px] px-5">
                <a href="/">
                    <img src={logo} alt="harley-zhang-logo" className="h-6 z-50" />
                </a>
                <div className="flex justify-between gap-14 text-[13px] font-medium">
                    <a
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        Resume <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
