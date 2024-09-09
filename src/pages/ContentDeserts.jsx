import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import Credits from "../components/Credits";
import Footer from "../scenes/Footer";
import { GoArrowUpRight } from "react-icons/go";
import ContentDesertsBanner from "../assets/Project-Pages/content-deserts/content-deserts-banner.png";
import cornell from "../assets/Project-Pages/content-deserts/cornell-tech.png";
import columbia from "../assets/Project-Pages/content-deserts/columbia.png";
import city from "../assets/Project-Pages/content-deserts/the-city.png";

const contentDesertsLogos = [
    {
        url: cornell,
        alt: "Cornell Tech",
        link: "https://s.tech.cornell.edu/",
    },
    {
        url: columbia,
        alt: "Columbia University",
        link: "https://journalism.columbia.edu/",
    },
    {
        url: city,
        alt: "The City",
        link: "https://www.thecity.nyc/",
    },
];

const EcoForecast = () => {
    return (
        <>
            <Helmet>
                <title>Content Deserts | Harley Zhang</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-28 xs:mt-32 sm:mt-40 mb-4 text-center">Content Deserts</h1>
                <p className="mt-6 xs:mt-8 text-xs xs:text-sm sm:text-base text-center text-grey-light">
                    <span className="mr-7">React</span>
                    <span className="mr-7">Python</span>
                    <span className="mr-7">deck.gl</span>
                    <span>Google Geocoding API</span>
                </p>

                <div className="flex flex-col items-center mt-8 space-y-6 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-5">
                    <a
                        href="https://github.com/harley-zhang/news-map"
                        className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all duration-300 text-black px-5 py-2 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                </div>
            </div>

            <Credits logos={contentDesertsLogos} />

            <div className="md:w-[960px] mx-5 md:mx-auto mt-16 xs:mt-20 items-center">
                <img src={ContentDesertsBanner} className="rounded-md" alt="EcoForecast app" />
            </div>

            <div className="sm:w-[750px] mx-auto px-5">
                <p className="mt-16 xs:mt-20 text-lg">
                    Content Deserts is a collaborative project between labs at <a href="https://s.tech.cornell.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">Cornell Tech</a> and <a href="https://journalism.columbia.edu/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">Columbia University</a>, focusing on analyzing discrepencies in local news coverage in New York City neighborhoods. As an intern at the Social Technologies Lab, I was tasked with parsing news article data using Python and creating the Content Deserts web application from scratch using React and Uber's <a href="https://deck.gl/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">deck.gl</a>.
                </p>

                <h2 className="text-2xl xs:text-3xl mt-8 xs:mt-12 sm:mt-14 font-sf-regular">
                    Data
                </h2>
                <p className="mt-6 xs:mt-8 text-lg">
                    The app will be tested as a proof-of-concept in the Greater New York City Area, utilizing data from <a href="https://www.thecity.nyc/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 decoration-grey-underline hover:decoration-white decoration-2 underline">The City</a> news outlet. The project will also incorporate US Census ZIP Code Tabulation Areas (ZCTAs) and population data to ensure proper normalization for comparative analysis across different regions. Since The City data is protected by NDA, the fully formed app is not available for public use.
                </p>
                <p className="mt-4 xs:mt-6 text-lg">
                    Since The City data is protected by NDA, the fully formed app is not available for public use. The publicly available GitHub repository uses sample data but includes all functional React and Python code as a template for future use cases.
                </p>
            </div>

            <div className="md:w-[960px] pt-1 pb-12 bg-grey-reference mx-5 md:mx-auto rounded-lg mt-20 sm:mt-24 md:mt-28">
                <div className="sm:w-[750px] mx-auto px-5">
                    <p className="text-2xl sm:text-4xl px-5 sm:px-16 mt-8 xs:mt-12 sm:mt-14 text-center">
                        Learn more about the Social Technologies Lab.
                    </p>
                    <div className="flex justify-center mt-8">

                        <a
                            href="https://s.tech.cornell.edu/"
                            className="text-[.85rem] sm:text-sm flex items-center bg-white hover:opacity-90 transition-all text-black duration-300 px-6 py-2 rounded-full mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit page
                            <GoArrowUpRight size={15} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default EcoForecast;
