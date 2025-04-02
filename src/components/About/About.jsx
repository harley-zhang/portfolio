import './About.css';
import { PiArrowUpRight } from "react-icons/pi";

function About() {
  return (
    <section className="about-section">
      <h1 className="logo-text">Harley Zhang</h1>
      <p className="intro-text">Most of my work involves software engineering, machine learning, and data analysis. If you have any ideas or questions, please reach out.</p>
      
      <div className="action-container">
        <a href="mailto:harley.zhang@uwaterloo.ca" className="email-button">
          harley.zhang@uwaterloo.ca
          <PiArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default About; 
