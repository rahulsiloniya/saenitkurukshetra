import { Instagram, Linkedin, Mail, ChevronDown } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1 className="text-2xl font-bold text-white">SAE NITKKR</h1>
          <p className="footer-logo-text">Member of Society of Automotive Engineers</p>
        </div>

        {/* Main Links Section */}
        <div className="footer-links">
          {/* Teams Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Our Teams</h3>
            <nav className="footer-nav">
              <a href="/team-nitrox" className="footer-nav-link">TEAM NITROX</a>
              <a href="/team-accelerons" className="footer-nav-link">TEAM ACCELERONS</a>
            </nav>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">About</h3>
            <nav className="footer-nav">
              <a href="/about" className="footer-nav-link">About Us</a>
              <a href="/achievements" className="footer-nav-link">Achievements</a>
              <a href="/events" className="footer-nav-link">Events</a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <nav className="footer-nav">
              <a href="mailto:sae@nitkkr.ac.in" className="footer-nav-link">
                <Mail size={16} />
                sae@nitkkr.ac.in
              </a>
              <p className="text-sm mt-2">
                NIT Kurukshetra<br />
                Thanesar, Kurukshetra<br />
                Haryana - 136119
              </p>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/sae.nitkkr" className="social-link" aria-label="SAE NITKKR Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.instagram.com/team.nitrox" className="social-link" aria-label="Team Nitrox Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.instagram.com/team.accelerons" className="social-link" aria-label="Team Accelerons Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/sae-nit-kurukshetra" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="text-center md:text-left">
              Copyright © {new Date().getFullYear()} SAE NIT Kurukshetra - All rights reserved.
            </div>
            
            <div className="footer-legal-links">
              <a href="/terms" className="footer-legal-link">Terms of Use</a>
              <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
              <a href="/cookies" className="footer-legal-link">Cookies Information</a>
            </div>

            <div className="country-selector">
              <img src="/api/placeholder/25/20" alt="India flag" className="country-flag" />
              <span>INDIA</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;