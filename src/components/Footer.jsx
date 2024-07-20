import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/shop" className="footer-link">Shop</Link>
          <Link to="/features" className="footer-link">Features</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-text">&copy; 2024 Nike Air Max Infinity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
