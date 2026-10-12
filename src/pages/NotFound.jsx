import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      className="content-wrapper"
      style={{
        padding: '100px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <div style={{ fontSize: '5rem', lineHeight: 1 }}>🎞️</div>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-gold-light)', margin: 0 }}>
        Scene Not Found
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: 0, fontSize: '1rem' }}>
        The motion picture or webpage you are looking for has been cut from the final reel or moved to another premiere theatre.
      </p>
      <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
        <Link to="/" className="btn btn-primary">
          Return to Home Showcase
        </Link>
        <Link to="/movies" className="btn btn-secondary">
          Browse Movie Catalogue
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
