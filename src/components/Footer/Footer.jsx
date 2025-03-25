import './Footer.css';
import { PiArrowUpRight } from "react-icons/pi";

function Footer() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/harleyzhang06/15-min-chat'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="footer-button" onClick={openCalendly}>
          Book a 15 Min Chat
          <PiArrowUpRight size={18} />
        </button>

        <h2 className="footer-name">Harley Zhang</h2>

        <div className="footer-links">
          <a href="mailto:harley.zhang@uwaterloo.ca" className="footer-link">
            Email
            <PiArrowUpRight size={18} />
          </a>
          <a href="https://linkedin.com/in/harley-zhang" className="footer-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <PiArrowUpRight size={18} />
          </a>
          <a href="https://github.com/harley-zhang" className="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub
            <PiArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 