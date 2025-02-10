import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Navbar */}
        <div className="navbar-main">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            SAE NITKKR
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <div className="nav-links">
              <Link to="/autokriti" className="nav-link">Autokriti</Link>
              <Link to="/" className="nav-link">Projects</Link>
              <Link to="/" className="nav-link">Contact Us</Link>
              <Link to="/" className="nav-link">Achievements</Link>
            </div>
            <button className="join-button">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
          <div className="mobile-menu-content">
            <Link to="/autokriti" className="mobile-nav-link">Autokriti</Link>
            <Link to="/" className="mobile-nav-link">Projects</Link>
            <Link to="/" className="mobile-nav-link">Achievements</Link>
            <Link to="/" className="mobile-nav-link">Contact Us</Link>
            <div className="mobile-join-wrapper">
              <button className="join-button mobile">Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;