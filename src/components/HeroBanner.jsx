import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner({ movie, onWatchTrailer }) {
  if (!movie) return null;

  return (
    <section className="cinescope-hero-banner">
      {/* Background Backdrop Image */}
      <div className="hero-backdrop-container">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="hero-backdrop-img"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&auto=format&fit=crop&q=80';
          }}
        />
        {/* Cinematic Vignette Gradients */}
        <div className="hero-overlay-gradient-left" />
        <div className="hero-overlay-gradient-bottom" />
      </div>

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content-inner">
          <div className="hero-badges-row">
            <span className="badge badge-red">FEATURED SPOTLIGHT</span>
            {/* Conditional Top Rated Badge */}
            {movie.rating > 8 && <span className="top-rated-badge">Top Rated</span>}
            <span className="hero-meta-tag">{movie.year}</span>
            <span className="hero-meta-tag">{movie.genre}</span>
            {movie.duration && <span className="hero-meta-tag">{movie.duration}</span>}
          </div>

          <h1 className="hero-title">{movie.title}</h1>

          <div className="hero-rating-score">
            <span className="hero-star">★</span>
            <span className="hero-rating-val">{movie.rating.toFixed(1)}</span>
            <span className="hero-rating-max">/ 10</span>
            <span className="hero-critic-tag">Critically Acclaimed</span>
          </div>

          <p className="hero-overview">{movie.overview}</p>

          {/* Functional Action Buttons */}
          <div className="hero-buttons-row">
            <button
              type="button"
              className="btn btn-gold btn-lg"
              onClick={() => onWatchTrailer && onWatchTrailer(movie)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Watch Trailer</span>
            </button>

            <Link to={`/movie/${movie.id}`} className="btn btn-secondary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>View Details</span>
            </Link>

            <Link to="/movies" className="btn btn-primary btn-lg hero-explore-btn">
              <span>Explore Movies</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
