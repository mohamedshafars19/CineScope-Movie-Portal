import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMovieById, MOVIES } from '../data/movies';
import MovieCard from '../components/MovieCard';
import TrailerModal from '../components/TrailerModal';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';
import '../styles/details.css';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const { user } = useAuth();

  const movie = getMovieById(id);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  // Local reviews state initialized with movie's existing reviews
  const [reviews, setReviews] = useState([]);
  const [reviewerName, setReviewerName] = useState(user?.name || '');
  const [reviewRating, setReviewRating] = useState(9);
  const [reviewComment, setReviewComment] = useState('');
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  // Update reviews whenever movie ID changes
  useEffect(() => {
    if (movie) {
      setReviews(movie.reviews || []);
      window.scrollTo(0, 0);
    }
  }, [id, movie]);

  if (!movie) {
    return (
      <div className="content-wrapper" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Movie Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '16px 0 24px' }}>
          The movie with ID "{id}" could not be located in the local CineScope database.
        </p>
        <button type="button" onClick={() => navigate('/movies')} className="btn btn-primary">
          Back to Movies Catalogue
        </button>
      </div>
    );
  }

  const isSaved = isInWatchlist(movie.id);

  // Find similar movies sharing the same genre or other top movies
  const similarMovies = MOVIES.filter(
    (m) => m.id !== movie.id && (m.genre === movie.genre || m.isPopular)
  ).slice(0, 5);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName.trim()) {
      setFormMessage({ text: 'Please enter your reviewer name.', type: 'error' });
      return;
    }
    if (!reviewComment.trim()) {
      setFormMessage({ text: 'Please share your critique comments.', type: 'error' });
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      author: reviewerName.trim(),
      rating: parseFloat(reviewRating),
      date: 'Just now',
      comment: reviewComment.trim()
    };

    setReviews((prev) => [newRev, ...prev]);
    setReviewComment('');
    setFormMessage({
      text: '✓ Review submitted successfully! Added to community feedback.',
      type: 'success'
    });
    setTimeout(() => setFormMessage({ text: '', type: '' }), 4000);
  };

  return (
    <div className="details-page-container">
      {/* 1. Backdrop Hero Banner */}
      <section className="details-hero">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="details-backdrop-img"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&auto=format&fit=crop&q=80';
          }}
        />
        <div className="details-hero-vignette" />

        <div className="details-hero-content">
          {/* Poster Box */}
          <div className="details-poster-box">
            <img
              src={movie.poster}
              alt={`${movie.title} Poster`}
              className="details-poster-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80';
              }}
            />
          </div>

          {/* Title and Metadata */}
          <div className="details-main-info">
            <div className="details-badge-row">
              <span className="badge badge-red">{movie.mediaType === 'tv' ? 'TV SERIES' : 'FEATURE FILM'}</span>
              {/* Conditional Rendering: Top Rated badge only when rating > 8 */}
              {movie.rating > 8 && <span className="top-rated-badge">Top Rated</span>}
              <span className="badge">{movie.genre}</span>
            </div>

            <h1 className="details-title">{movie.title}</h1>

            <div className="details-metadata-row">
              <div className="details-rating-chip">
                <span className="star-icon">★</span>
                <span>{movie.rating.toFixed(1)} / 10</span>
              </div>
              <span>🗓 {movie.year} ({movie.releaseDate})</span>
              <span>⏱ {movie.duration}</span>
              {movie.director && <span>🎬 Dir: {movie.director}</span>}
            </div>

            {/* Action Buttons */}
            <div className="details-actions-row">
              <button
                type="button"
                className="btn btn-gold btn-lg"
                onClick={() => setIsTrailerOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <span>Watch Trailer</span>
              </button>

              <button
                type="button"
                className={`btn btn-watchlist-toggle ${isSaved ? 'in-list' : 'btn-secondary'}`}
                onClick={() => toggleWatchlist(movie.id)}
              >
                {isSaved ? (
                  <>
                    <span>✓ In Watchlist</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(Click to remove)</span>
                  </>
                ) : (
                  <>
                    <span>+ Add to Watchlist</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Body */}
      <div className="details-body-wrapper">
        {/* Storyline Overview */}
        <section className="details-overview-section">
          <h3 className="section-title">
            <span className="section-title-accent" />
            <span>Storyline Overview</span>
          </h3>
          <p className="details-overview-text">{movie.overview}</p>
        </section>

        {/* Cast & Characters */}
        {movie.cast && movie.cast.length > 0 && (
          <section className="details-cast-section">
            <h3 className="section-title">
              <span className="section-title-accent" />
              <span>Lead Cast & Crew</span>
            </h3>
            <div className="cast-cards-grid">
              {movie.cast.map((actor, idx) => (
                <div key={idx} className="cast-member-card">
                  <span className="cast-name">{actor.name}</span>
                  <span className="cast-role">{actor.role}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar & Recommended Movies */}
        {similarMovies.length > 0 && (
          <section className="similar-movies-section">
            <h3 className="section-title">
              <span className="section-title-accent" />
              <span>Similar Recommendations</span>
            </h3>
            <div className="catalog-grid" style={{ marginTop: '16px' }}>
              {similarMovies.map((sim) => (
                <MovieCard
                  key={sim.id}
                  id={sim.id}
                  title={sim.title}
                  rating={sim.rating}
                  poster={sim.poster}
                  genre={sim.genre}
                  year={sim.year}
                  overview={sim.overview}
                  mediaType={sim.mediaType}
                />
              ))}
            </div>
          </section>
        )}

        {/* 3. Community Reviews & Submission Form */}
        <section className="details-reviews-section">
          <h3 className="section-title">
            <span className="section-title-accent" />
            <span>Audience Reviews & Critiques ({reviews.length})</span>
          </h3>

          <div className="details-reviews-grid" style={{ marginTop: '16px' }}>
            {/* Reviews List */}
            <div className="reviews-list-col">
              {reviews.length > 0 ? (
                reviews.map((rev) => (
                  <div key={rev.id} className="review-card-item">
                    <div className="review-card-header">
                      <div className="review-author-info">
                        <div className="review-avatar-badge">
                          {rev.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <strong className="review-author-name">{rev.author}</strong>
                          <span className="review-post-date">{rev.date}</span>
                        </div>
                      </div>
                      <div className="review-card-score">
                        ★ {typeof rev.rating === 'number' ? rev.rating.toFixed(1) : rev.rating} / 10
                      </div>
                    </div>
                    <p className="review-card-comment">{rev.comment}</p>
                  </div>
                ))
              ) : (
                <p style={{ color: 'var(--text-muted)' }}>
                  No audience reviews submitted yet. Be the first to critique this film!
                </p>
              )}
            </div>

            {/* Write a Review Form */}
            <div className="review-form-card">
              <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#fff' }}>
                Write Your Review
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Share your rating and thoughts with fellow movie enthusiasts.
              </p>

              {formMessage.text && (
                <div className={`alert-box ${formMessage.type}`}>
                  {formMessage.text}
                </div>
              )}

              <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="review-form-group">
                  <label htmlFor="revAuthor">Your Name</label>
                  <input
                    id="revAuthor"
                    type="text"
                    placeholder="e.g. Alex Rivera"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="review-form-input"
                  />
                </div>

                <div className="review-form-group">
                  <label htmlFor="revScore">
                    Rating Score: <strong style={{ color: 'var(--accent-gold-light)' }}>{reviewRating} / 10</strong>
                  </label>
                  <div className="review-slider-wrap">
                    <input
                      id="revScore"
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      value={reviewRating}
                      onChange={(e) => setReviewRating(e.target.value)}
                      className="review-range-slider"
                    />
                    <div className="slider-label-row">
                      <span>1 (Poor)</span>
                      <span>5 (Average)</span>
                      <span>10 (Masterpiece)</span>
                    </div>
                  </div>
                </div>

                <div className="review-form-group">
                  <label htmlFor="revText">Your Critique</label>
                  <textarea
                    id="revText"
                    rows="4"
                    placeholder="What did you think of the directing, acting, plot, and visuals?"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="review-form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '4px' }}>
                  Submit Critique
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Trailer Modal Player */}
      <TrailerModal
        movie={movie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </div>
  );
}

export default MovieDetails;
