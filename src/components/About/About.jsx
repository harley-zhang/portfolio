import './About.css';
import { PiArrowUpRight } from "react-icons/pi";

function About() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/harleyzhang06/15-min-chat'
      });
    }
  };

  return (
    <section className="about-section">
      <h1 className="logo-text">Harley Zhang</h1>
      <p className="intro-text">I'm an engineering student passionate about creating solutions that solve problems. If you have ideas or questions about anything, I would love to chat.</p>
      
      <div className="action-container">
        <button className="chat-button" onClick={openCalendly}>
          Book a 15 Min Chat
          <PiArrowUpRight size={18} />
        </button>
        
        <a href="mailto:harley.zhang@uwaterloo.ca" className="email-link">
          harley.zhang@uwaterloo.ca
          <PiArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default About; 