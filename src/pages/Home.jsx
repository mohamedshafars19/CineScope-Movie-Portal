import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import TrailerModal from '../components/TrailerModal';
import { MOVIES, GENRES } from '../data/movies';
import '../styles/home.css';

function Home() {
  const [activeTrailerMovie, setActiveTrailerMovie] = useState(null);

  // Group movies by category
  const heroMovie = MOVIES.find((m) => m.id === 5) || MOVIES[0]; // Dune: Part Two
  const trendingMovies = MOVIES.filter((m) => m.isTrending);
  const popularMovies = MOVIES.filter((m) => m.isPopular);
  const topRatedMovies = MOVIES.filter((m) => m.rating > 8); // Demonstrating rating > 8
  const upcomingMovies = MOVIES.filter((m) => m.isUpcoming || m.year === 2024);
  const tvShows = MOVIES.filter((m) => m.mediaType === 'tv');

  const genreIcons = {
    Action: '💥',
    'Sci-Fi': '🚀',
    Adventure: '🗺️',
    Drama: '🎭',
    Animation: '🎨',
    Crime: '🔍',
    Comedy: '😄',
    Fantasy: '🧙',
    Thriller: '⚡'
  };

  return (
    <div className="home-page-container">
      {/* 1. Large Cinematic Hero Section */}
      <HeroBanner
        movie={heroMovie}
        onWatchTrailer={(movie) => setActiveTrailerMovie(movie)}
      />

      {/* 2. Main Content Rows Container */}
      <div className="home-sections-wrapper">
        {/* Row 1: Trending Movies */}
        <MovieRow
          title="Trending Now"
          movies={trendingMovies}
          icon="🔥"
          linkTo="/movies"
        />

        {/* Row 2: Popular Movies */}
        <MovieRow
          title="Popular on CineScope"
          movies={popularMovies}
          icon="🌟"
          linkTo="/movies"
        />

        {/* Row 3: Top Rated Movies (rating > 8.0) */}
        <MovieRow
          title="Top Rated Masterpieces (Rating > 8.0)"
          movies={topRatedMovies}
          icon="🏆"
          linkTo="/movies?topRated=true"
        />

        {/* Row 4: Upcoming Releases */}
        <MovieRow
          title="Upcoming & New Releases"
          movies={upcomingMovies}
          icon="📅"
          linkTo="/movies?genre=Action"
        />

        {/* Row 5: Popular TV Shows */}
        <MovieRow
          title="Popular TV Shows & Series"
          movies={tvShows}
          icon="📺"
          linkTo="/tv-shows"
        />

        {/* Row 6: Browse by Genre Section */}
        <section className="genres-showcase-section">
          <div className="section-title-row">
            <h3 className="section-title">
              <span className="section-title-accent" />
              <span>Explore by Genre</span>
            </h3>
            <Link to="/movies" className="section-link">
              <span>View All Movies</span>
              <span>→</span>
            </Link>
          </div>

          <div className="genres-chips-grid">
            {GENRES.filter((g) => g !== 'All').map((genre) => (
              <Link
                key={genre}
                to={`/movies?genre=${encodeURIComponent(genre)}`}
                className="genre-chip-card"
              >
                <span className="genre-chip-icon">{genreIcons[genre] || '🎬'}</span>
                <span>{genre}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Trailer Modal Player */}
      <TrailerModal
        movie={activeTrailerMovie}
        isOpen={Boolean(activeTrailerMovie)}
        onClose={() => setActiveTrailerMovie(null)}
      />
    </div>
  );
}

export default Home;
