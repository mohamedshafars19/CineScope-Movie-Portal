import React, { useEffect } from 'react';
import '../styles/trailerModal.css';

function TrailerModal({ movie, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !movie) return null;

  return (
    <div className="trailer-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="trailer-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Header with Title and Close Button */}
        <div className="trailer-modal-header">
          <div className="trailer-header-info">
            <span className="trailer-badge">Official Trailer</span>
            <h3 className="trailer-movie-title">{movie.title}</h3>
          </div>
          <button
            type="button"
            className="trailer-close-btn"
            onClick={onClose}
            aria-label="Close trailer player"
          >
            ✕
          </button>
        </div>

        {/* Video Player / Fallback */}
        <div className="trailer-video-container">
          {movie.trailerUrl ? (
            <iframe
              src={`${movie.trailerUrl}?autoplay=1&rel=0`}
              title={`${movie.title} Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="trailer-iframe"
            />
          ) : (
            <div className="trailer-unavailable-state">
              <span className="unavailable-icon">🎬</span>
              <h4>Trailer Currently Unavailable</h4>
              <p>The official trailer preview is not available in offline demo mode for this title.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrailerModal;
