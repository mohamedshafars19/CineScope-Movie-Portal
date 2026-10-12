import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/movieCard.css';

/**
 * Reusable MovieCard Component
 * 
 * Required Props:
 * - title: string
 * - rating: number
 * - poster: string (URL)
 * 
 * Optional Props:
 * - id: number | string
 * - genre: string
 * - year: number
 * - overview: string
 * - mediaType: string ("movie" | "tv")
 * 
 * Lab Viva Concept:
 * - Reusable functional component receiving props.
 * - Conditional rendering: Show "Top Rated" badge ONLY when rating > 8.
 *   Condition: {rating > 8 && <span className="top-rated-badge">Top Rated</span>}
 */
function MovieCard({
  title,
  rating,
  poster,
  id,
  genre,
  year,
  overview,
  mediaType = 'movie'
}) {
  const navigate = useNavigate();

  // Safe fallback if poster image link fails or is missing
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80';
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/movie/${id}`);
    }
  };

  return (
    <div
      className="cinescope-movie-card"
      onClick={handleCardClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Poster Image Container */}
      <div className="card-poster-wrapper">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="card-poster-img"
          loading="lazy"
          onError={handleImageError}
        />

        <div className="card-gradient-overlay" />

        {/* 
          CONDITIONAL RENDERING REQUIREMENT:
          Show the Top Rated badge ONLY when rating > 8.
        */}
        {rating > 8 && <span className="top-rated-badge">Top Rated</span>}

        {/* Floating Rating Pill */}
        <div className={`card-rating-tag ${rating > 8 ? 'tag-high' : 'tag-normal'}`}>
          <span className="star-icon">★</span>
          <span>{typeof rating === 'number' ? rating.toFixed(1) : rating}</span>
        </div>

        {/* Quick Hover Actions */}
        <div className="card-hover-actions">
          {id ? (
            <Link
              to={`/movie/${id}`}
              className="view-details-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ) : (
            <span className="view-details-btn">View Details</span>
          )}
        </div>
      </div>

      {/* Card Info Details */}
      <div className="card-content">
        <div className="card-meta">
          {genre && <span className="card-genre">{genre}</span>}
          {year && <span className="card-year">{year}</span>}
        </div>

        <h4 className="card-title" title={title}>
          {title}
        </h4>
      </div>
    </div>
  );
}

export default MovieCard;
