import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { MOVIES, GENRES } from '../data/movies';
import '../styles/movies.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial values from URL query parameters
  const initialSearch = searchParams.get('search') || '';
  const initialGenre = searchParams.get('genre') || 'All';
  const initialTopRated = searchParams.get('topRated') === 'true';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [topRatedOnly, setTopRatedOnly] = useState(initialTopRated);
  const [sortBy, setSortBy] = useState('rating-desc');
  const [visibleCount, setVisibleCount] = useState(8);

  // Sync state if URL query params change
  useEffect(() => {
    const q = searchParams.get('search') || '';
    const g = searchParams.get('genre') || 'All';
    const tr = searchParams.get('topRated') === 'true';
    setSearchQuery(q);
    setSelectedGenre(g);
    setTopRatedOnly(tr);
  }, [searchParams]);

  // Filter movies based on search, genre, and Top Rated toggle
  const filteredMovies = MOVIES.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (movie.cast && movie.cast.some((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesGenre =
      selectedGenre === 'All' ||
      movie.genre === selectedGenre ||
      (movie.allGenres && movie.allGenres.includes(selectedGenre));

    // Top rated condition: rating > 8
    const matchesTopRated = !topRatedOnly || movie.rating > 8;

    return matchesSearch && matchesGenre && matchesTopRated;
  });

  // Sort movies
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    if (sortBy === 'rating-asc') return a.rating - b.rating;
    if (sortBy === 'year-desc') return b.year - a.year;
    if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
    return 0;
  });

  // Movies sliced for pagination / Load More
  const visibleMovies = sortedMovies.slice(0, visibleCount);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setTopRatedOnly(false);
    setSortBy('rating-desc');
    setVisibleCount(8);
    setSearchParams({});
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setVisibleCount(8);
  };

  return (
    <div className="movies-page-container">
      {/* Page Header */}
      <div className="movies-page-header">
        <h1 className="movies-page-title">Explore Cinema Catalogue</h1>
        <p className="movies-page-subtitle">
          Browse through acclaimed motion pictures, ratings, and genre collections.
        </p>
      </div>

      {/* Filter and Control Toolbar */}
      <section className="movies-filter-toolbar" aria-label="Catalog filters">
        {/* Top Row: Search & Sort */}
        <div className="toolbar-top-row">
          <div className="catalog-search-wrap">
            <svg className="catalog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search by title, genre, or cast member..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(8);
              }}
              className="catalog-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="catalog-clear-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="catalog-sort-wrap">
            <label htmlFor="catalogSort" className="catalog-sort-label">Sort By:</label>
            <select
              id="catalogSort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="catalog-sort-select"
            >
              <option value="rating-desc">Highest Rating</option>
              <option value="rating-asc">Lowest Rating</option>
              <option value="year-desc">Release Year (Newest)</option>
              <option value="title-asc">Title (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Bottom Row: Genre Chips & Top Rated Only Toggle */}
        <div className="toolbar-bottom-row">
          <div className="genre-filter-chips">
            {GENRES.map((genre) => (
              <button
                key={genre}
                type="button"
                className={`chip-btn ${selectedGenre === genre ? 'active' : ''}`}
                onClick={() => handleGenreSelect(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`btn-top-rated-toggle ${topRatedOnly ? 'active' : ''}`}
            onClick={() => {
              setTopRatedOnly((prev) => !prev);
              setVisibleCount(8);
            }}
          >
            ★ Top Rated Only (&gt;8.0)
          </button>
        </div>
      </section>

      {/* Catalog Status Bar */}
      <div className="catalog-status-bar">
        <span className="catalog-counter">
          Showing {visibleMovies.length} of {sortedMovies.length} available titles
        </span>
        {(searchQuery || selectedGenre !== 'All' || topRatedOnly) && (
          <button type="button" onClick={handleResetFilters} className="section-link">
            Reset Filters ↺
          </button>
        )}
      </div>

      {/* Movies Grid */}
      {visibleMovies.length > 0 ? (
        <>
          <main className="catalog-grid">
            {visibleMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.poster}
                genre={movie.genre}
                year={movie.year}
                overview={movie.overview}
                mediaType={movie.mediaType}
              />
            ))}
          </main>

          {/* Working Load More Button */}
          {visibleCount < sortedMovies.length && (
            <div className="load-more-section">
              <button
                type="button"
                className="btn-load-more"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                Load More Titles ({sortedMovies.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="catalog-empty-box">
          <span className="empty-icon">🎬</span>
          <h3>No matching movies found</h3>
          <p>
            We couldn't find any titles matching "{searchQuery}". Try adjusting your keywords or clearing selected filters.
          </p>
          <button type="button" onClick={handleResetFilters} className="btn btn-primary">
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
