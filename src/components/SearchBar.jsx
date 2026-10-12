import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOVIES } from '../data/movies';

function SearchBar({ onSearchSubmit, placeholder = 'Search movies, TV shows, cast...' }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Filter matching movies as user types
  const matchingResults = query.trim().length > 0
    ? MOVIES.filter((m) =>
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.genre.toLowerCase().includes(query.toLowerCase()) ||
        (m.cast && m.cast.some((c) => c.name.toLowerCase().includes(query.toLowerCase())))
      ).slice(0, 5)
    : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    if (onSearchSubmit) {
      onSearchSubmit(query.trim());
    } else {
      navigate(`/movies?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectMovie = (id) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/movie/${id}`);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <form onSubmit={handleSubmit} className="search-form">
        <svg className="search-svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>

        <input
          type="text"
          className="search-input-field"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query.trim() && setIsOpen(true)}
        />

        {query && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>

      {/* Live Dropdown Results */}
      {isOpen && query.trim() && (
        <div className="search-dropdown-menu">
          {matchingResults.length > 0 ? (
            <>
              <div className="search-dropdown-header">
                <span>Matching Titles ({matchingResults.length})</span>
              </div>
              {matchingResults.map((movie) => (
                <div
                  key={movie.id}
                  className="search-result-row"
                  onClick={() => handleSelectMovie(movie.id)}
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="search-result-thumb"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="search-result-info">
                    <span className="search-result-title">{movie.title}</span>
                    <span className="search-result-meta">
                      {movie.year} • {movie.genre} • ★ {movie.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
              <div className="search-dropdown-footer">
                <button type="button" onClick={handleSubmit} className="view-all-results-btn">
                  See all results for "{query}"
                </button>
              </div>
            </>
          ) : (
            <div className="search-no-results">
              <p>No titles found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
