import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="cinescope-footer">
      <div className="footer-container">
        {/* Top Brand & Links Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand">
              <span className="brand-logo-symbol">🎬</span>
              <span className="brand-name">
                CINE<span className="brand-accent">SCOPE</span>
              </span>
            </Link>
            <p className="footer-description">
              A premium cinematic discovery and movie critique platform inspired by Netflix and Amazon Prime Video. Explore trending releases, critic ratings, and curated cinema recommendations.
            </p>
            <div className="footer-pills-row">
              <span className="badge badge-red">React JSX</span>
              <span className="badge badge-gold">Vanilla CSS</span>
              <span className="badge">100% Frontend-Only</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Showcase</Link></li>
              <li><Link to="/movies">All Movies</Link></li>
              <li><Link to="/tv-shows">TV Shows</Link></li>
              <li><Link to="/watchlist">My Watchlist</Link></li>
              <li><Link to="/movies?topRated=true">Top Rated (Rating &gt; 8)</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="footer-col">
            <h4 className="footer-heading">CineScope</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Platform</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/login">Critic Login</Link></li>
              <li><Link to="/signup">Register Account</Link></li>
            </ul>
          </div>

          {/* Academic Project Viva Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Lab Practical Project</h4>
            <p className="footer-viva-note">
              Developed as a frontend engineering project demonstrating modern React concepts, component reusability, conditional rendering, React Router navigation, and local state management without external backend dependencies.
            </p>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-strip">
          <p>© {new Date().getFullYear()} CineScope Movies Inc. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/about">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
