import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useWatchlist } from '../context/WatchlistContext';
import '../styles/movies.css';

function Watchlist() {
  const { watchlistMovies, removeFromWatchlist, count } = useWatchlist();

  return (
    <div className="movies-page-container">
      {/* Header */}
      <div className="movies-page-header">
        <h1 className="movies-page-title">My CineScope Watchlist</h1>
        <p className="movies-page-subtitle">
          Your personalized collection of bookmarked motion pictures and series.
        </p>
      </div>

      {/* Local Storage Disclaimer Alert */}
      <div
        style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 18px',
          color: '#fbbf24',
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>ℹ️</span>
        <span>
          <strong>Local Storage Notice:</strong> Your watchlist is saved locally in your current web browser storage (frontend-only). It will persist across refreshes on this computer.
        </span>
      </div>

      {/* Status Bar */}
      <div className="catalog-status-bar">
        <span className="catalog-counter">
          {count} {count === 1 ? 'title' : 'titles'} in your watchlist
        </span>
        {count > 0 && (
          <Link to="/movies" className="section-link">
            + Discover More Movies
          </Link>
        )}
      </div>

      {/* Watchlist Grid */}
      {watchlistMovies.length > 0 ? (
        <main className="catalog-grid">
          {watchlistMovies.map((movie) => (
            <div key={movie.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.poster}
                genre={movie.genre}
                year={movie.year}
                overview={movie.overview}
                mediaType={movie.mediaType}
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => removeFromWatchlist(movie.id)}
                style={{ width: '100%', borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
              >
                ✕ Remove from Watchlist
              </button>
            </div>
          ))}
        </main>
      ) : (
        <div className="catalog-empty-box">
          <span className="empty-icon">🔖</span>
          <h3>Your watchlist is currently empty</h3>
          <p>
            Explore our curated movies and TV shows catalog and click "+ Add to Watchlist" to save titles for later viewing.
          </p>
          <Link to="/movies" className="btn btn-primary">
            Explore All Movies
          </Link>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
