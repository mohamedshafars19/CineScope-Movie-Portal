import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="content-wrapper" style={{ padding: '48px 24px 80px', maxWidth: '1000px' }}>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Header */}
        <div>
          <span className="badge badge-red" style={{ marginBottom: '12px' }}>PLATFORM OVERVIEW</span>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, margin: '8px 0', color: '#fff' }}>
            About CineScope
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            A premium movie discovery, critique, and watchlist platform inspired by the visual elegance of Netflix and Amazon Prime Video.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <span style={{ fontSize: '2rem' }}>🎬</span>
            <h3 style={{ color: '#fff', margin: '12px 0 8px' }}>Cinematic Experience</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Designed with near-black charcoal tones, radiant red and gold highlights, high-resolution backdrops, and sleek rounded movie cards.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <span style={{ fontSize: '2rem' }}>⭐</span>
            <h3 style={{ color: '#fff', margin: '12px 0 8px' }}>Conditional Top Rated Badging</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Motion pictures featuring ratings strictly greater than 8.0/10 dynamically receive glowing golden <strong>Top Rated</strong> badges via React conditional rendering.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
            <span style={{ fontSize: '2rem' }}>🔖</span>
            <h3 style={{ color: '#fff', margin: '12px 0 8px' }}>Persistent Watchlist</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Add and remove favorite movies anytime. Saved records persist across browser reloads using HTML5 <code>localStorage</code>.
            </p>
          </div>
        </div>

        {/* Technical Architecture (Viva Cheatsheet) */}
        <div style={{ background: 'rgba(18, 24, 38, 0.6)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px 28px' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '16px' }}>
            Technical Architecture & Viva Reference
          </h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            <li>
              <strong>Architecture:</strong> 100% Frontend-only single-page application built with React and Vite. Zero backend servers or external databases required.
            </li>
            <li>
              <strong>Styling:</strong> Pure Vanilla CSS with tailored design tokens (variables), CSS Grid, and Flexbox. No Tailwind CSS or Bootstrap.
            </li>
            <li>
              <strong>Navigation:</strong> Multi-page routing orchestrated with <code>react-router-dom</code> (Home, Movies, TV Shows, Movie Details with URL params, Watchlist, Login, Sign Up, About, Contact, 404).
            </li>
            <li>
              <strong>Component Reusability:</strong> The reusable <code>MovieCard.jsx</code> accepts <code>title</code>, <code>rating</code>, and <code>poster</code> props and is shared across all catalog rows and pages.
            </li>
            <li>
              <strong>Conditional Rendering:</strong> <code>{'{rating > 8 && <span className="top-rated-badge">Top Rated</span>}'}</code> evaluates dynamically during render.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <Link to="/movies" className="btn btn-primary">
            Browse All Movies
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
