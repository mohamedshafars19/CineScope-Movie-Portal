import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';
import '../styles/navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { count: watchlistCount } = useWatchlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Scroll listener to toggle solid navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/');
  };

  return (
    <header className={`cinescope-navbar ${isScrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-logo-symbol">
            <span>🎬</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">
              CINE<span className="brand-accent">SCOPE</span>
            </span>
            <span className="brand-sub">PREMIUM CINEMA</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-shows"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/movies?genre=Sci-Fi"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Genres
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) => `nav-link nav-link-watchlist ${isActive ? 'nav-link-active' : ''}`}
          >
            <span>My Watchlist</span>
            {watchlistCount > 0 && (
              <span className="watchlist-count-badge">{watchlistCount}</span>
            )}
          </NavLink>
        </nav>

        {/* Search Bar in Navbar */}
        <div className="navbar-search-section">
          <SearchBar />
        </div>

        {/* User Authentication Actions */}
        <div className="navbar-auth-actions">
          {user ? (
            <div className="user-profile-badge">
              <span className="user-avatar">{user.avatar || '👤'}</span>
              <span className="user-name">{user.name}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-logout-link"
                title="Log out of demo session"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons-group">
              <Link to="/login" className="btn-nav-login">
                Login
              </Link>
              <Link to="/signup" className="btn-nav-signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobileMenu}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-search">
              <SearchBar onSearchSubmit={() => closeMobileMenu()} />
            </div>

            <nav className="mobile-nav-list">
              <NavLink to="/" end className="mobile-nav-item" onClick={closeMobileMenu}>
                🏠 Home
              </NavLink>
              <NavLink to="/movies" className="mobile-nav-item" onClick={closeMobileMenu}>
                🎬 Movies
              </NavLink>
              <NavLink to="/tv-shows" className="mobile-nav-item" onClick={closeMobileMenu}>
                📺 TV Shows
              </NavLink>
              <NavLink to="/watchlist" className="mobile-nav-item" onClick={closeMobileMenu}>
                🔖 My Watchlist ({watchlistCount})
              </NavLink>
              <NavLink to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
                ℹ️ About CineScope
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                ✉️ Contact Us
              </NavLink>
            </nav>

            <div className="mobile-auth-footer">
              {user ? (
                <div className="mobile-user-status">
                  <p>Signed in as <strong>{user.name}</strong></p>
                  <button type="button" onClick={handleLogout} className="btn btn-secondary btn-sm">
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="mobile-auth-btns">
                  <Link to="/login" className="btn btn-secondary" onClick={closeMobileMenu}>
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-primary" onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
