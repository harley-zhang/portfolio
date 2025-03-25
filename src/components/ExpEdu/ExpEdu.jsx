import './ExpEdu.css';

const experiences = [
    {
        role: "Software Research Assistant",
        company: "Cornell Tech",
        logo: "assets/ExpEdu/cornell-tech-logo.png",
        date: "Jul — Dec 2024",
        location: "New York City"
    },
    {
        role: "Software & Data Research Assistant",
        company: "Yale University",
        logo: "assets/ExpEdu/yale-logo.png",
        date: "Mar 2021 — Jun 2024",
        location: "New Haven"
    },
    {
        role: "Machine Learning Research Assistant",
        company: "University of Toronto",
        logo: "assets/ExpEdu/utoronto-logo.png",
        date: "Jul — Dec 2024",
        location: "Toronto"
    },
];

const education = [
    {
        role: "University of Waterloo",
        company: "Bachelor of Software Engineering",
        logo: "/assets/ExpEdu/uwaterloo-logo.png",
        date: "2024 - 2029",
        location: "Waterloo"
    }
];

function ExpEdu() {
    const ExperienceItem = ({ role, company, logo, date, location }) => (
        <div className="exp-item">
            <img src={logo} alt={company} className="exp-logo" />
            <div className="exp-details">
                <div className="exp-main">
                    <div className="exp-info">
                        <p className="exp-role">{role}</p>
                        <p className="exp-company">{company}</p>
                    </div>
                    <div className="exp-meta">
                        <p className="exp-date">{date}</p>
                        <p className="exp-location">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="expedu-section">
            <div className="experience-section">
                <p className='expedu-heading'>Experience</p>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>

            <div className="education-section">
                <p className='expedu-heading'>Education</p>
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export default ExpEdu; 