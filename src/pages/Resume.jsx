import { Helmet } from 'react-helmet-async';
import resume from "../assets/Harley_Zhang_Resume.pdf";

const Resume = () => {
    return (
        <>
            <Helmet>
                <title>Resume | Harley Zhang</title>
            </Helmet>
            <div className="flex justify-center items-center h-screen">
                <iframe
                    src={resume}
                    title="Harley Zhang Resume"
                    className="w-full h-screen"
                >
                    This browser does not support PDFs.
                </iframe>
            </div>
        </>
    );
};

export default Resume;
