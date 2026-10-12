import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function MovieRow({ title, movies = [], linkTo = '/movies', icon = '🎬' }) {
  const rowRef = useRef(null);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -680 : 680;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section className="cinescope-movie-row-section">
      <div className="section-title-row">
        <h3 className="section-title">
          <span className="section-title-accent" />
          <span className="row-icon">{icon}</span>
          <span>{title}</span>
        </h3>

        <div className="row-controls">
          <button
            type="button"
            className="row-nav-btn"
            onClick={() => handleScroll('left')}
            aria-label={`Scroll ${title} left`}
          >
            ‹
          </button>
          <button
            type="button"
            className="row-nav-btn"
            onClick={() => handleScroll('right')}
            aria-label={`Scroll ${title} right`}
          >
            ›
          </button>
          {linkTo && (
            <Link to={linkTo} className="section-link">
              <span>View All</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>

      <div className="movie-row-scroll-container" ref={rowRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-row-item">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
