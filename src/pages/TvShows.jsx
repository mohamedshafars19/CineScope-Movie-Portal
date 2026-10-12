import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { MOVIES } from '../data/movies';
import '../styles/movies.css';

function TvShows() {
  const [search, setSearch] = useState('');
  const tvShows = MOVIES.filter((m) => m.mediaType === 'tv');

  const filtered = tvShows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase()) ||
    show.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movies-page-container">
      <div className="movies-page-header">
        <h1 className="movies-page-title">Television Series & Shows</h1>
        <p className="movies-page-subtitle">
          Explore binge-worthy TV series with high audience scores and episodic details.
        </p>
      </div>

      <div className="movies-filter-toolbar">
        <div className="toolbar-top-row">
          <div className="catalog-search-wrap">
            <svg className="catalog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search TV shows..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        </div>
      </div>

      <div className="catalog-status-bar">
        <span className="catalog-counter">Showing {filtered.length} Television Series</span>
      </div>

      {filtered.length > 0 ? (
        <main className="catalog-grid">
          {filtered.map((show) => (
            <MovieCard
              key={show.id}
              id={show.id}
              title={show.title}
              rating={show.rating}
              poster={show.poster}
              genre={show.genre}
              year={show.year}
              overview={show.overview}
              mediaType="tv"
            />
          ))}
        </main>
      ) : (
        <div className="catalog-empty-box">
          <span className="empty-icon">📺</span>
          <h3>No TV shows found</h3>
          <p>Try searching for titles like "Stranger Things", "Breaking Bad", or "Arcane".</p>
        </div>
      )}
    </div>
  );
}

export default TvShows;
